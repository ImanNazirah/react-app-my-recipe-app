import React from 'react';
import StyleListRecipe from './StyleListRecipe.css';


const ListRecipe = ({title, calories, image, ingredients}) => {

return(
        <div className="flip-card">
            <div className="flip-card-inner">

                <div className="flip-card-front">
                    <img src={image} alt="" />
                    
                </div>
                <div className="flip-card-back">
                    <h3>{ingredients.length} Ingredients </h3>
                    <ul className= "ul-style" >
                    {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                    ))}
                    </ul>
                     <p>Calories: {calories}</p>
                </div>
            </div>
            <div className="content1"><h4>{title}</h4></div>
        </div>
    );
};




export default ListRecipe;


