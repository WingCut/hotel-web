import React, { useState } from "react";
import axiosClient from "../assets/api/axios.client.js";
import { useForm } from "react-hook-form";

import { BiSearch } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { FiTv } from "react-icons/fi";
import { FaCocktail } from "react-icons/fa";
import { TbWindow } from "react-icons/tb";
import { SlPencil } from "react-icons/sl";
import { MdOutlineDelete } from "react-icons/md";

import Input from "../input/input";
import { Link } from "react-router-dom";
import Button from "../button/Button.js";

const defaultValues = {
  search: "",
};

const Rooms = () => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues,
  });

  const [rooms, setRooms] = useState();

  const fetchData = async () => {
    const data = await axiosClient.get("/rooms");
    setRooms(data.data.data.room);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await axiosClient.delete(`/rooms/${_id}`);
      alert("Xóa thành công");
      fetchData();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSearch = async (value) => {
    console.log(value);
    if (value.search) {
      const data = await axiosClient.get(`/rooms?searchText=${value.search}`);
      setRooms(data.data.data.room);
    } else {
      fetchData();
    }
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <form
          className="justify-center flex"
          onSubmit={handleSubmit(handleSearch)}
        >
          <Input
            type="text"
            name="search"
            placeholder="Search for a room"
            control={control}
          />
          <Button type="submit">
            <BiSearch size={35} />
          </Button>
        </form>
        <div className="col-end-7 col-span-3 m-6 py-2 pl-5 pr-3 bg-green-700 hover:bg-green-500 cursor-pointer rounded-lg">
          <Link to={`/create`} className="text-white text-xl">
            Create Room
          </Link>
        </div>
      </div>
      <main className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 ">
        {rooms &&
          rooms.map((room) => (
            <div className="box card m-5">
              <div className=" ">
                <img
                  src={room.cover}
                  alt="room"
                  className="w-full md:h-96 object-cover rounded-lg sm:w-full"
                />
              </div>
              <div>
                <h1 className=" text-3xl my-2 text-regal-green font-medium">
                  {room.name}
                  {room.status && (
                    <span className="text-white text-2xl rounded-lg ml-3 bg-red-400 ">
                      Sold Out
                    </span>
                  )}
                </h1>

                <ul className="p-3">
                  <li className="flex mb-1">
                    <BiBed size={30} /> <p className="p-1">{room.bed}</p>
                  </li>
                  <li className="flex mb-1">
                    <BiBath size={30} /> <p className="p-1">{room.bath}</p>
                  </li>
                  <li className="flex mb-1">
                    <FiTv size={30} /> <p className="p-1">{room.tivi}</p>
                  </li>
                  <li className="flex mb-1">
                    <FaCocktail size={30} /> <p className="p-1">{room.bar}</p>
                  </li>
                  <li className="flex mb-1">
                    <TbWindow size={30} />
                    <p className="p-1">{room.window}</p>
                  </li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  {!room.status ? (
                    <Link
                      to={`/${room._id}`}
                      className="text-white mt-3 p-2 md:p-3 sm:p-2 bg-[#28a745] hover:bg-green-400 rounded-lg"
                    >
                      Book Now
                    </Link>
                  ) : (
                    <Button
                      onclick={() => alert("Phòng đã có người đặt")}
                      className="text-white mt-3 p-2 md:p-3 sm:p-2 bg-[#28a745] hover:bg-green-400 rounded-lg"
                    >
                      Book Now
                    </Button>
                  )}
                  <div className="mt-3 ml-2">
                    <h3 className="text-red-900">Price</h3>
                    <p className="font-bold">${room.price} Per night</p>
                  </div>
                </div>
                <div className="flex mt-3">
                  <Link
                    to={`/edit/${room._id}`}
                    className="md:p-3 p-3 sm:p-2 mx-1 bg-green-300 hover:bg-green-500 cursor-pointer rounded-lg"
                  >
                    <SlPencil size={30} />
                  </Link>
                  <Button
                    onclick={() => handleDelete(room._id)}
                    className="md:p-3 p-3 sm:p-2 mx-1 bg-red-300 hover:bg-red-500 cursor-pointer rounded-lg"
                  >
                    <MdOutlineDelete size={30} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </main>
    </>
  );
};
export default Rooms;
