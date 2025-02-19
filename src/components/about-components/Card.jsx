import React from 'react';

const Card = ({ imgSrc, imgAlt, title, subtitle, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-[400px] lg:w-[500px] transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer bg-opacity-80 backdrop-blur-md border border-white border-opacity-40"
        >
            <div className="flex items-center space-x-4">
                <img src={imgSrc} alt={imgAlt} className="w-16 h-auto sm:w-20" />
                <div>
                    <div className="text-sm font-bold mb-2">{title}</div>
                    <div className="text-[11px] text-gray-600">{subtitle}</div>
                </div>
            </div>
        </a>
    );
};

export default Card;