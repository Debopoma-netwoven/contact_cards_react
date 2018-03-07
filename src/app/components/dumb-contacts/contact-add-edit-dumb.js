import React from 'react';

const ContactAddEditDumb = (props) => {
    function updateContactFinal(id, e) {
        let updatedData = {
            _id: id, name: props.updateData.name,
            company: props.updateData.company, designation: props.updateData.designation,
            age: props.updateData.age, location: props.updateData.location, image: '../images/upload.jpg'
        }
        props.onUpdateData(updatedData, e.target.value);

    }
    function addContactFinal(id, e) {
        let updatedData = {
            _id: id, name: props.updateData.name,
            company: props.updateData.company, designation: props.updateData.designation,
            age: props.updateData.age, location: props.updateData.location, image: '../images/upload.jpg'
        }
        props.onAddData(updatedData, e.target.value);
    }

    function updateName(e) {
        var obj = { fieldType: "name", value: e.target.value }
        props.updateData.name = e.target.value;
        props.onUpdateFields(obj, e.target.value);

    }
    function updateLocation(e) {
        var obj = { fieldType: "location", value: e.target.value }
        props.updateData.location = e.target.value;
        props.onUpdateFields(obj, e.target.value);
    }
    function updateCompany(e) {
        var obj = { fieldType: "company", value: e.target.value }
        props.updateData.company = e.target.value;
        props.onUpdateFields(obj, e.target.value);
    }
    function updateAge(e) {
        var obj = { fieldType: "age", value: e.target.value }
        props.updateData.age = e.target.value;
        props.onUpdateFields(obj, e.target.value);
    }
    function updateDesignation(e) {
        var obj = { fieldType: "designation", value: e.target.value }
        props.updateData.designation = e.target.value;
        props.onUpdateFields(obj, e.target.value);
    }
    return (
        <div className="panel panel-default padDiv" ><h3 className="formContainer">Add/Edit Contact</h3>
            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Name: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => updateName(e)} value={props.updateData.name} />
                </div>
            </div>

            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Company: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => updateCompany(e)} value={props.updateData.company} />
                </div>
            </div>

            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Designation: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => updateDesignation(e)} value={props.updateData.designation} />
                </div>
            </div>
            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Age: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => updateAge(e)} value={props.updateData.age} />
                </div>
            </div>
            <div class="row padDivSmall">
                <div className="col-sm-4">
                    <span >Location: </span>
                </div><div className="col-sm-4">
                    <input class="form-control input-sm" type="text" onChange={(e) => updateLocation(e)} value={props.updateData.location} />
                </div>
            </div>
            <div class="row padDivSmall">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    {(props.isAddContact) ?
                        <button type="button" class="btn-sm" onClick={(e) => addContactFinal(props.updateData._id, e)}>Add</button> : <div></div>}
                    {(props.isEditContact) ?
                        <button type="button" class="btn-sm" onClick={(e) => updateContactFinal(props.updateData._id, e)}>Update</button> : <div></div>}
                </div>
            </div>
        </div>
    )
}

export default ContactAddEditDumb;