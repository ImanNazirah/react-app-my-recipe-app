import React from 'react';
import StyleImage from './StyleImage.css';

const Images = ({props}) => {

    return(
        <div>
            <img src={props.getRecipes.image} alt="  "/>
        </div>
    );
};

export default Images;

