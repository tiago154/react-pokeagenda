import React from 'react';

export default (props) => {
    return (
        <img
            src={props.url}
            alt={props.url}
            title={props.url ? props.url.title : null}
        />
    )
}