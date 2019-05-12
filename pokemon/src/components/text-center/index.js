import React from 'react';


const spritesText = (textValidation, textName) => {
    if (textValidation) {
        return (
            <p className='Text-center'>Sprites {`${textName}`}</p>
        );
    }
    return ('');
}

export default props => (spritesText(props.textValidation, props.textName))