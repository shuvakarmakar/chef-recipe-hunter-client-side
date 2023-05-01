// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Chef Recipe Hunter</h3>
                        <p className="text-gray-500 leading-relaxed mb-4">Chef Recipe Hunter is a website dedicated to helping home chefs find delicious recipes from around the world. Our mission is to inspire and empower people to cook amazing meals at home.</p>
                        <p className="text-gray-500 leading-relaxed mb-4">Join our community of foodies and share your favorite recipes with us!</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="text-gray-500 leading-relaxed mb-4">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Recipes</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-gray-400 hover:text-gray-500"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-500"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-500"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-500"><i className="fab fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-sm">&copy; 2023 Chef Recipe Hunter. All rights reserved.</p>
            </div>
        </footer>

    );
};

export default Footer;