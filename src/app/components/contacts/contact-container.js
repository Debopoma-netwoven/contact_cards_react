import React, { Component } from 'react';
import { render } from 'react-dom';
import ContactDetail from './contact';
import ContactAddEdit from './contact-add-edit'

export default class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showDeleteMessage: false,
      deleteIndex: -1,
      contactList: [
        { id: 1, name: 'Debopoma Chaudhury', company: 'Netwoven', designation: 'Senior Engineer', age: '32 yrs', location: 'Kolkata', image: '../images/dc.png' },
        { id: 2, name: 'Sanjukta Das', company: 'JP Morgan', designation: 'Project Lead', age: '31 yrs', location: 'Singapore', image: '../images/upload.jpg' },
        { id: 3, name: 'Suhit Saha', company: 'Prana', designation: 'Technical Producer', age: '31 yrs', location: 'Mumbai', image: '../images/upload.jpg' },
        { id: 4, name: 'Kumaresh Roy', company: 'Royal Chem', designation: 'CEO', age: '32 yrs', location: 'Kolkata', image: '../images/upload.jpg' }
      ],
      updateData: { id: 0, name: '', company: '', designation: '', age: '', location: '', image: '' }
    }
    //this.handleDelete = this.handleDelete.bind(this);
  }

  addForm() {
    this.setState({
      updateData: { id: 0, name: '', company: '', designation: '', age: '', location: '', image: '' },
      showForm: true,
    });
  }

  handleDelete(id) {
    // console.log(e);
    this.setState({ showDeleteMessage: true, deleteIndex: id });

  }
  deleteContactFinal(e) {
    var array = this.state.contactList;
    var index = this.state.contactList.map(function (item) { return item.id; })
      .indexOf(this.state.deleteIndex);
    array.splice(index, 1);
    this.setState({ contactList: array, showDeleteMessage: false, deleteIndex: -1 });
  }
  cancelDeleteContact(e) {
    this.setState({ showDeleteMessage: false, deleteIndex: -1 });
  }
  handleUpdate(id) {
    var array = this.state.contactList.filter(function (item) { return item.id == id; });
    this.setState({ updateData: array[0], showForm: true });

  }

  onUpdate(data) {
    console.log(data);
    var array = this.state.contactList;
    var index = this.state.contactList.map(function (item) { return item.id; })
      .indexOf(data.id);
    array[index] = data;
    this.setState({
      contactList: array,
      showForm: false
    });
  }

  onAdd(data) {
    var array = this.state.contactList;
    var maxIndex = Math.max.apply(Math, array.map(function (o) { return o.id; }))
    data.id = maxIndex + 1;
    array.push(data);
    this.setState({ contactList: array, showForm: false });
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
              <ContactDetail key={index} data={element} onDelete={(e) => this.handleDelete(e)} onUpdate={(e) => this.handleUpdate(e)}></ContactDetail>)
            }</div>
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
              <div className="col-sm-12">
                <ContactAddEdit isVisible={this.state.showForm} updateData={this.state.updateData} onUpdateData={(e) => this.onUpdate(e)} onAddData={(e) => this.onAdd(e)} ></ContactAddEdit></div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}