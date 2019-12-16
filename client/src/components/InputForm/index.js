import React from 'react';

export function Input(props) {
    return (
      <div className="form-group">
        <label>{props.label}</label>
        <input className="form-control" {...props} />
      </div>
    );
}

export function FormBtn(props) {
    return (
      <button style={{ width: '100%' }} {...props} className="btn btn-success">
        {props.children}
      </button>
    );
}
