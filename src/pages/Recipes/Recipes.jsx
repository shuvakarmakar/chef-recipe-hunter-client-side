// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const allRecipes = useLoaderData();
    console.log(allRecipes);
    const { chefName, chefPicture, likes, numRecipes, recipes, yearsOfExperience } = allRecipes;
    return (
        <div>
            <div className="card card-side bg-neutral-100 shadow-xl w-4/5 mx-auto mt-10">
                <figure><img className='h-60 w-60' src={chefPicture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl mb-2">{chefName}</h2>
                    <p className='font-semibold'>Likes : {likes}</p>
                    <p className='font-semibold'>Total Number of Recipes : {numRecipes}</p>
                    <p className='font-semibold'>Experience : {yearsOfExperience} Years</p>
                    <div>
                        {/* <h4>{recipes[0].recipeName}</h4>
                        <ul>
                            <li>{recipes[0].ingredients[0]}</li>
                            <li>{recipes[0].ingredients[1]}</li>
                            <li>{recipes[0].ingredients[2]}</li>
                            <li>{recipes[0].ingredients[0]}</li>
                        </ul> */}
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;