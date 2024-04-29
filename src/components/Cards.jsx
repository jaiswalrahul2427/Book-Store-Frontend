import React from 'react';

function Cards({ item }) {
    console.log(item);
    return (
        <>
            <div className="p-3 my-3 mt-4">
                <div className="duration-200 shadow-xl card w-92 bg-base-100 hover:scale-105 dark:bg-slate-900 dark:border dark:text-white ">
                    <figure className="flex justify-center mx-auto">
                        <img className="object-contain max-w-full max-h-full rounded-xl " src={item.image} alt="Book" />
                    </figure>
                    <div className=" card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.Category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="justify-between card-actions">
                            <div className="px-3 py-4 border-black cursor-pointer badge badge-outline dark:border-white">${item.price}</div>
                            <div className="px-3 py-4 text-xl text-red-500 duration-300 border-black cursor-pointer dark:border-white hover:border-white badge badge-outline hover:bg-pink-600 hover:text-white">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
