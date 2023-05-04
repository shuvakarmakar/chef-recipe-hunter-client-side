// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
    const { chefName, id, yearsOfExperience, numRecipes, likes, chefPicture, viewRecipesButton } = chef;

    return (
        <div className=''>
            <div className="card lg:w-96 bg-base-100 shadow-xl m-3">
                <figure><img className='h-72 ' src={chefPicture} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p>Experience : {yearsOfExperience}</p>
                    <p>Number of Recipes : {numRecipes}</p>
                    <p>Likes : {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/recipes/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;