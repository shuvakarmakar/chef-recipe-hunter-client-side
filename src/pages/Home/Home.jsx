// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import image1 from '../../assets/food-7006591_1280.jpg';
import image2 from '../../assets/snow-crab-2620060_1280.jpg';
import image3 from '../../assets/sushi-2455981_1280.jpg';
import image4 from '../../assets/sushi-2853382_1280.jpg';
import ChefsCard from '../ChefsCard/ChefsCard';
import ExtraSection from './ExtraSection';


const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-side-shuvakarmakar.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            {/* Carousel */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* Chefs Card Work */}
            <h3 className='text-center text-3xl font-bold mb-8 mt-8'>Chef Section</h3>
            <div className='grid lg:grid-cols-3 gap-3 align-middle lg:m-10'>
                {
                    chefs.map(chef => <ChefsCard
                        key={chef.id}
                        chef={chef}
                    ></ChefsCard>)
                }
            </div>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;