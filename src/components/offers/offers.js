import React from "react";
import Button from "../button/Button";
import { offers } from "../assets/data/data";
const Offers = () => {
  return (
    <>
      <div className="md:mx-40">
        <h1 className="p-2 text-4xl text-center">Offers & Deals</h1>
        <p className="p-4 px-2 text-medium  text-center">
          Pich a room that best suits your taste and budget Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quiquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora.
        </p>
      </div>
      {offers.map((list, i) => (
        <div
          className="md:flex p-4 justify-center md:mx-36 bg-[#b0f1c3] rounded-3xl"
          key={i}
        >
          <img
            src={list.image}
            alt="spa"
            className="w-full md:w-auto md:h-96 object-cover rounded-full sm:w-full"
          />
          <div className="p-4 ml-7">
            <h2 className="text-4xl mb-4 font-semibold">{list.title}</h2>
            <p className="mb-4 mx-7">{list.content}</p>
            <Button className="hover:opacity-75 bg-[#85ab00] p-3 text-white rounded-lg">
              BOOK NOW
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Offers;
