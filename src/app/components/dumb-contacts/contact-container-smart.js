import React, { Component } from 'react';
import { render } from 'react-dom';
import ContactDetailDumb from './contact-dumb';
import ContactAddEditDumb from './contact-add-edit-dumb'
import axios from 'axios';

export default class ContactContainerSmart extends Component {
    constructor() {
        super();
        this.state = {
            showForm: false,
            addContact: false,
            editContact: false,
            showDeleteMessage: false,
            deleteIndex: -1,
            contactList: [
            ],
            updateData: { _id: 0, name: '', company: '', designation: '', age: '', location: '', image: '' }
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:3000/ContactList')
            .then((response) => {
                var arr = [];
                console.log(response.data)
                Object.keys(response.data).forEach(function (key) {
                    arr.push(response.data[key]);
                });
                this.setState({ contactList: arr })
            })
            .catch((error) => {
                console.log(error);
            });

    }
    addForm() {
        this.setState({
            updateData: { _id: 0, name: '', company: '', designation: '', age: '', location: '', image: '' },
            showForm: true,
            addContact: true
        });
    }

    handleDelete(id) {
        // console.log(e);
        this.setState({ showDeleteMessage: true, deleteIndex: id });

    }
    deleteContactFinal(e) {

        axios.delete("http://localhost:3000/ContactList", {
            data: { id: this.state.deleteIndex }
        })
            .then(response => {
                var array = this.state.contactList;
                var index = this.state.contactList.map(function (item) { return item._id; })
                    .indexOf(this.state.deleteIndex);
                array.splice(index, 1);
                this.setState({ contactList: array, showDeleteMessage: false, deleteIndex: -1 });
            })
            .catch(error => {
                console.log(error.response);
            });

    }
    cancelDeleteContact(e) {
        this.setState({ showDeleteMessage: false, deleteIndex: -1 });
    }
    handleUpdate(id) {
        var array = this.state.contactList.filter(function (item) { return item._id == id; });
        this.setState({ updateData: array[0], showForm: true, editContact: true });

    }

    onUpdate(data) {

        axios.put('http://localhost:3000/ContactList', {
            updateData: data,
            id: data._id
        })
            .then(response => {
                console.log("updated data");
                console.log(this.state);
                console.log(data);
                var array = this.state.contactList;
                var index = this.state.contactList.map(o => o._id)
                    .indexOf(data._id);
                array[index] = data;
                this.setState({
                    contactList: array,
                    showForm: false,
                    addContact: false,
                    editContact: false
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    onAdd(data) {
        var array = this.state.contactList;
        var maxIndex = Math.max.apply(Math, array.map(o => o._id));
        data._id = maxIndex + 1;
        axios.post('http://localhost:3000/ContactList', data)
            .then(response => {                
                array.push(data);
                this.setState({
                    contactList: array, showForm: false, addContact: false,
                    editContact: false
                });
            })
            .catch(error => {
                console.log(error.response);
            });

    }
    onUpdateField(obj) {

        switch (obj.fieldType) {
            case 'name': {
                this.setState({
                    updateData: { ... this.state.updateData, name: obj.value }
                });
                break;
            }
            case 'company': {
                this.setState({
                    updateData: { ... this.state.updateData, company: obj.value }
                });
                break;
            }
            case 'location': {
                this.setState({
                    updateData: { ... this.state.updateData, location: obj.value }
                });
                break;
            }
            case 'designation': {
                this.setState({
                    updateData: { ... this.state.updateData, designation: obj.value }
                });
                break;
            }
            case 'age': {
                this.setState({
                    updateData: { ... this.state.updateData, age: obj.value }
                });
                break;
            }

            default:

        }

    }
    render() {
        return (
            <div className="col-sm-12">
                <div class="row">
                    <div className="col-sm-4 styleMargin" ><button class="btn-sm" onClick={(e) => this.addForm(e)} >Add Contact</button></div>
                </div>
                <div class="row">
                    <div className="contactContainer col-sm-4">
                        {this.state.contactList.map((element, index) =>
                            <ContactDetailDumb key={index} data={element} onDelete={(e) => this.handleDelete(e)} onUpdate={(e) => this.handleUpdate(e)}></ContactDetailDumb>)
                        }
                    </div>
                    <div className="col-sm-8">
                        {(this.state.showDeleteMessage) ?
                            <div class="row padDiv">
                                <div className="col-sm-12" >
                                    <div class="row  panel panel-default padDiv">
                                        <div className="col-sm-6"><p>Do you want to delete the selected contact?</p></div>
                                        <div className="col-sm-6">
                                            <button type="button" class="btn-sm " onClick={(e) => this.deleteContactFinal(e)}>Ok</button>
                                            <button type="button" class="btn-sm styleMargin" onClick={(e) => this.cancelDeleteContact(e)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div> : <div></div>}
                        <div class="row">
                            {(this.state.showForm) ?
                                <div className="col-sm-12">
                                    <ContactAddEditDumb isVisible={this.state.showForm} isAddContact={this.state.addContact} isEditContact={this.state.editContact} updateData={this.state.updateData} onUpdateData={(e) => this.onUpdate(e)} onAddData={(e) => this.onAdd(e)} onUpdateFields={(e) => this.onUpdateField(e)} ></ContactAddEditDumb></div>
                                : <div></div>}

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}