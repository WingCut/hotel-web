import React, { useEffect, useState } from "react";
import axiosClient from "../assets/api/axios.client";
import { useParams } from "react-router-dom";

import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { FiTv } from "react-icons/fi";
import { FaCocktail } from "react-icons/fa";
import { TbWindow } from "react-icons/tb";
import SubmitForm from "../forms/submitForm";

import Input from "../input/input";
import Button from "../button/Button";
const RoomDetail = () => {
  const { _id } = useParams();
  const [rooms, setRooms] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axiosClient.get(`/rooms/${_id}`);
      setRooms(data.data.data.room);
    };
    fetchData();
  }, [_id]);
  return (
    <>
      {rooms && (
        <div className="flex box card md:m-5">
          <div>
            <img
              src={rooms.cover}
              alt="room"
              className="w-full md:h-80 object-cover rounded-lg sm:w-full"
            />
          </div>
          <div className="md:ml-7">
            <div>
              <h1 className=" text-3xl m-2 text-regal-green font-medium">
                {rooms.name}
              </h1>
              <ul className=" md:ml-10 p-3">
                <li className="flex mb-1">
                  <BiBed size={30} /> <p className="p-1">{rooms.bed}</p>
                </li>
                <li className="flex mb-1">
                  <BiBath size={30} /> <p className="p-1">{rooms.bath}</p>
                </li>
                <li className="flex mb-1">
                  <FiTv size={30} /> <p className="p-1">{rooms.tivi}</p>
                </li>
                <li className="flex mb-1">
                  <FaCocktail size={30} /> <p className="p-1">{rooms.bar}</p>
                </li>
                <li className="flex mb-1">
                  <TbWindow size={30} />
                  <p className="p-1">{rooms.window}</p>
                </li>
              </ul>
            </div>
            <div className="ml-7 flex">
              <div className="mt-3 ml-2">
                <h3 className="text-2xl text-red-900">Price</h3>
                <p className="font-bold">{rooms.price} Per night</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <SubmitForm />
    </>
  );
};
export default RoomDetail;
