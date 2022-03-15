import React from 'react'

const ToDo = (props) => {
    const toDoClasses = [];
    if (props.lists.complete) {
        toDoClasses.push('strike');
    }


    return (<div className="d-flex justfity-content-center" key={props.i}>
        <p className={toDoClasses.join('')}>{props.lists.text}</p>
        <input className="m-2" type="checkbox" checked={props.lists.complete} onChange={(e) => {
            props.handleComplete(props.i);
        }} />
        <button className="btn btn-warning m-2" onClick={(e) => {
            props.handleDelete(props.i);
        }}>Delete</button>
    </div>
    );


}

export default ToDo