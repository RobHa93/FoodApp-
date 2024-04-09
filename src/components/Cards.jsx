import React from "react";

const Cards = () => {
  return (
    <div className=" max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/*Cards*/}
      <div className=" rounded-xl relative">
        {/*Overlay*/}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">Sun's out, BOGO Out</p>
          <p className=" px-2"> Bis 8/25</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" m-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Burger img"
        />
      </div>
      {/*Cards*/}
      <div className=" rounded-xl relative">
        {/*Overlay*/}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">
            We Deliver Deserts too
          </p>
          <p className=" px-2"> Tasty Treats</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" m-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Burger img"
        />
      </div>
      {/*Cards*/}
      <div className=" rounded-xl relative">
        {/*Overlay*/}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">New Restaurant</p>
          <p className=" px-2"> Added Daily</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" m-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Burger img"
        />
      </div>
    </div>
  );
};

export default Cards;
