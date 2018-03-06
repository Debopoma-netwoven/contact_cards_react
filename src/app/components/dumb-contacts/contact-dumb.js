import React from 'react';

export const ContactDetailDumb = (props) => {
    
    return (
        <div className="contact"><p className="contactName"> {props.data.name}</p>
            <div class="row">
                <div className="col-sm-3"><img width={"75px"} height={"75px"} src={props.data.image} /></div>
                <div className="col-sm-9">
                    <div class="row">
                        <div className="col-sm-12"><span className="contactTitle">Company: </span><span className="contactValue">{props.data.company} </span></div>
                    </div>
                    <div class="row">
                        <div className="col-sm-12"><span className="contactTitle">Designation: </span><span className="contactValue">{props.data.designation} </span></div>

                    </div>
                    <div class="row">
                        <div className="col-sm-12"><span className="contactTitle">Age: </span><span className="contactValue">{props.data.age} </span></div>

                    </div>
                    <div class="row">
                        <div className="col-sm-12"><span className="contactTitle">Location: </span><span className="contactValue">{props.data.location} </span></div>

                    </div>
                    <div class="row">
                        <div className="col-sm-7"></div>
                        <div className="col-sm-2"><button type="button" onClick={(e) =>  props.onUpdate(props.data.id, e.target.value)}>
                            <i class="glyphicon glyphicon-pencil"></i>
                        </button></div>
                        <div className="col-sm-3"><button type="button" onClick={(e) => props.onDelete(props.data.id, e.target.value)}>
                            <i class="glyphicon  glyphicon-remove"></i>
                        </button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default ContactDetailDumb;