import React from "react";

const FooterComponent = () => {
    return (
        <footer className="bg-black text-white py-6 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Logo and About */}
                    <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold">Blog Agency</h2>
                        <p className="mt-2 text-gray-400">
                            Crafting engaging content to build a strong digital presence.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
                        <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Services</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full md:w-1/3 text-center md:text-right">
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p className="text-gray-400">Email: info@blogagency.com</p>
                        <p className="text-gray-400">Phone: +123 456 7890</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-6 text-center border-t border-gray-700 pt-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 Blog Agency. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
