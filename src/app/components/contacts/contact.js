import React, { Component } from 'react';

export default class ContactDetail extends Component {
    constructor(props) {
        super(props);
    }

    deleteContact(id, e) {
        this.props.onDelete(id, e.target.value);
    };

    updateContact(id, e) {
        this.props.onUpdate(id, e.target.value);
    };

    render() {
        return (<div className="contact"><p className="contactName"> {this.props.data.name}</p>
            <div class="row">
                <div className="col-sm-3"><img width={"75px"} height={"75px"} src={this.props.data.image} /></div>
                <div className="col-sm-9">
                    <div class="row">
                        <div className="col-sm-12"><span className="contactTitle">Company: </span><span className="contactValue">{this.props.data.company} </span></div>
                    </div>
                    <div class="row">
                        <div className="col-sm-12"><span className="contactTitle">Designation: </span><span className="contactValue">{this.props.data.designation} </span></div>

                    </div>
                    <div class="row">
                        <div className="col-sm-12"><span className="contactTitle">Age: </span><span className="contactValue">{this.props.data.age} </span></div>

                    </div>
                    <div class="row">
                        <div className="col-sm-12"><span className="contactTitle">Location: </span><span className="contactValue">{this.props.data.location} </span></div>

                    </div>
                    <div class="row">
                        <div className="col-sm-7"></div>
                        <div className="col-sm-2"><button type="button"  onClick={(e) => this.updateContact(this.props.data.id, e)}>
                            <i class="glyphicon glyphicon-pencil"></i>
                        </button></div>
                        <div className="col-sm-3"><button type="button"  onClick={(e) => this.deleteContact(this.props.data.id, e)}>
                            <i class="glyphicon  glyphicon-remove"></i>
                        </button></div>
                    </div>
                </div>
            </div>

        </div>

        )
    }
}


