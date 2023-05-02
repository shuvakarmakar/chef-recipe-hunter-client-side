// eslint-disable-next-line no-unused-vars
import React from 'react';

const ExtraSection = () => {
    return (
        <div>
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-8">Introduction to Japanese Cuisine</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white shadow-lg">
                            <img src="https://img.taste.com.au/3mYHXsD_/taste/2016/11/sushi-for-kids-81300-1.jpeg" alt="Sushi" className="w-full h-64 object-cover mb-4" />
                                <h3 className="text-xl font-bold mb-2">Sushi</h3>
                                <p className="text-gray-700 leading-relaxed">Sushi is a traditional Japanese dish made from vinegared rice and usually served with raw fish or other seafood. It is often served with wasabi and soy sauce.</p>
                        </div>
                        <div className="p-4 bg-white shadow-lg">
                            <img src="https://www.foodandwine.com/thmb/0AXGLeY6dYnY8sEXFqxBa8opDrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tonkotsu-Ramen-FT-BLOG1122-8fe6c12d609a4fd4ab246bea3aae140e.jpg" alt="Ramen" className="w-full h-64 object-cover mb-4" />
                                <h3 className="text-xl font-bold mb-2">Ramen</h3>
                                <p className="text-gray-700 leading-relaxed">Ramen is a Japanese soup dish made with wheat noodles and a meat or fish broth, flavored with soy sauce or miso. It is often topped with vegetables, sliced pork, and a soft-boiled egg.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Another Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-8">Popular Japanese Dishes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-100 shadow-lg">
                            <img src="https://www.justonecookbook.com/wp-content/uploads/2020/03/Tempura-3161-I.jpg" alt="Tempura" className="w-full h-64 object-cover mb-4" />
                            <h3 className="text-xl font-bold mb-2">Tempura</h3>
                            <p className="text-gray-700 leading-relaxed">Tempura is a Japanese dish of battered and deep-fried seafood and vegetables. It is usually served with a dipping sauce made from soy sauce, dashi, and mirin.</p>
                        </div>
                        <div className="p-4 bg-gray-100 shadow-lg">
                            <img src="https://d21klxpge3tttg.cloudfront.net/wp-content/uploads/2012/01/spark-grill-yakitori_05.jpg" alt="Yakitori" className="w-full h-64 object-cover mb-4" />
                            <h3 className="text-xl font-bold mb-2">Yakitori</h3>
                            <p className="text-gray-700 leading-relaxed">Yakitori is a Japanese dish of skewered and grilled chicken. It is often marinated in a mixture of soy sauce, sake, and mirin before being cooked.</p>
                        </div>
                        <div className="p-4 bg-gray-100 shadow-lg">
                            <img src="https://www.justonecookbook.com/wp-content/uploads/2020/03/Okonomiyaki-Recipe-5674-I.jpg" alt="Okonomiyaki" className="w-full h-64 object-cover mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">Okonomiyaki</h3>
                            <p className="text-gray-700 leading-relaxed">Okonomiyaki is a Japanese savory pancake made with flour, eggs, and shredded cabbage. It is often topped with a variety of ingredients, such as pork belly, shrimp, or cheese.</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ExtraSection;