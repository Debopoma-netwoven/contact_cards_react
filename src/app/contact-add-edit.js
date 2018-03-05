import React, { Component } from 'react';

export default class ContactAddEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateDataName: "",
            updateDataCompany: "",
            updateDataDesignation: "",
            updateDataAge: "",
            updateDataLocation: ""
        }
    }
    updateContactFinal(id, e) {
        let updatedData = {
            id: id, name: this.state.updateDataName,
            company: this.state.updateDataCompany, designation: this.state.updateDataDesignation,
            age: this.state.updateDataAge, location: this.state.updateDataLocation, image: '../images/upload.jpg'
        }
        this.props.onUpdateData(updatedData, e.target.value);
       
    }
    addContactFinal(id, state, e) {
        let updatedData = {
            id: id, name: state.updateDataName,
            company: state.updateDataCompany, designation: state.updateDataDesignation,
            age: state.updateDataAge, location: state.updateDataLocation, image: '../images/upload.jpg'
        }
        this.props.onAddData(updatedData, e.target.value);
        this.setState({
            updateDataName: "",
            updateDataCompany: "",
            updateDataDesignation: "",
            updateDataAge: "",
            updateDataLocation: ""
        })
    }

    updateName(e) {
        //console.log(e.target.value);
        this.props.updateData.name = e.target.value;
        this.setState({ updateDataName: e.target.value });
    }
    updateLocation(e) {
        this.setState({ updateDataLocation: e.target.value });
    }
    updateCompany(e) {
        this.setState({ updateDataCompany: e.target.value });
    }
    updateAge(e) {
        this.setState({ updateDataAge: e.target.value });
    }
    updateDesignation(e) {
        this.setState({ updateDataDesignation: e.target.value });
    }
    componentWillMount() {
        this.style = {};
        if (!this.props.isVisible) {
            this.style.display = 'none'
        }
        this.styleAdd = {};
        this.styleUpdate = {};

        if (!this.props.updateData.id == 0) {
            this.styleAdd.display = 'none'
            let updateCopy = this.props.updateData;
            this.setState({
                updateDataName: updateCopy.name,
                updateDataCompany: updateCopy.company,
                updateDataDesignation: updateCopy.designation,
                updateDataAge: updateCopy.age,
                updateDataLocation: updateCopy.location
            })
        }
        else {
            this.styleUpdate.display = 'none'
            this.setState({
                updateDataName: "",
                updateDataCompany: "",
                updateDataDesignation: "",
                updateDataAge: "",
                updateDataLocation: ""
            })

        }
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps.isVisible)
        this.style = {};
        if (!newProps.isVisible) {
            this.style.display = 'none'
        }
        this.styleAdd = {};
        this.styleUpdate = {};

        if (!newProps.updateData.id == 0) {
            this.styleAdd.display = 'none'
            let updateCopy = newProps.updateData;
            this.setState({
                updateDataName: updateCopy.name,
                updateDataCompany: updateCopy.company,
                updateDataDesignation: updateCopy.designation,
                updateDataAge: updateCopy.age,
                updateDataLocation: updateCopy.location
            })
        }
        else {
            this.styleUpdate.display = 'none'
            this.setState({
                updateDataName: "",
                updateDataCompany: "",
                updateDataDesignation: "",
                updateDataAge: "",
                updateDataLocation: ""
            })

        }

    }

    render() {


        return (<div className="panel panel-default padDiv" style={this.style}><h3 className="formContainer">Add/Edit Contact</h3>
            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Name: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => this.updateName(e)} value={this.state.updateDataName} />
                </div>
            </div>

            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Company: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => this.updateCompany(e)} value={this.state.updateDataCompany} />
                </div>
            </div>

            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Designation: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => this.updateDesignation(e)} value={this.state.updateDataDesignation} />
                </div>
            </div>
            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Age: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => this.updateAge(e)} value={this.state.updateDataAge} />
                </div>
            </div>
            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Location: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => this.updateLocation(e)} value={this.state.updateDataLocation} />
                </div>
            </div>
            <div class="row padDivSmall">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <button type="button" class="btn-sm" style={this.styleAdd} onClick={(e) => this.addContactFinal(this.props.updateData.id, this.state, e)}>Add</button>
                    <button type="button" class="btn-sm" style={this.styleUpdate} onClick={(e) => this.updateContactFinal(this.props.updateData.id, e)}>Update</button></div>
            </div>
        </div>)
    }
}

