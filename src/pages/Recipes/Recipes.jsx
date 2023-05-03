// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipes = () => {
    const allRecipes = useLoaderData();
    console.log(allRecipes);
    const { chefName, chefPicture, likes, numRecipes, recipes, yearsOfExperience, chefsDescription } = allRecipes;

    // Favourite State for Disable
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <div>
            <div className="card card-side bg-neutral-100 shadow-xl w-4/5 mx-auto mt-10">
                <figure className='lg:w-full'><img className='lg:h-full lg:w-full' src={chefPicture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl mb-2">{chefName}</h2>
                    <p className='text-lg mb-5'>{chefsDescription}</p>
                    <p className='font-semibold'>Likes : {likes}</p>
                    <p className='font-semibold'>Total Number of Recipes : {numRecipes}</p>
                    <p className='font-semibold'>Experience : {yearsOfExperience} Years</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => {
                            setIsFavourite(true);
                            toast.success("Added to Favourites!");
                        }} disabled={isFavourite}>Favourite</button>


                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            {/* FOr Display Recipes */}
            <div className='w-4/5 mx-auto mt-10'>
                <h2 className="text-center text-3xl font-bold mb-8">{chefName} All Recipes</h2>
                <div className="grid lg:grid-cols-3 gap-3">
                    <div className="">
                        <div className="bg-cyan-200 p-4 rounded-lg shadow">
                            <h2 className="text-lg font-medium mb-2">{recipes[0].recipeName}</h2>
                            <ul className="list-disc ml-4">
                                {recipes[0].ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-indigo-200 p-4 rounded-lg shadow">
                            <h2 className="text-lg font-medium mb-2">{recipes[1].recipeName}</h2>
                            <ul className="list-disc ml-4">
                                {recipes[1].ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-amber-200 p-4 rounded-lg shadow">
                            <h2 className="text-lg font-medium mb-2">{recipes[2].recipeName}</h2>
                            <ul className="list-disc ml-4">
                                {recipes[2].ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipes;