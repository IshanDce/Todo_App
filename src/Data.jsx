import React from 'react';

const Data = (props) => {
    return (
        <div className="w-full h-auto p-6 bg-gray-50 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Items List</h2>
            <div className="space-y-4">
                {props.arr.length > 0 ? (
                    props.arr.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-between bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
                        >
                            <h1 className="text-gray-900 text-lg font-medium">{item}</h1>
                            <button 
                                className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition"
                                onClick={() => props.ondelete(index)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No items to display. Add some items to get started!</p>
                )}
            </div>
        </div>
    );
};

export default Data;
