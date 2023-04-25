import React, { useEffect, useState } from "react";
import Input from "../input/input";
import Button from "../button/Button";
import axiosClient from "../assets/api/axios.client";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { FiTv } from "react-icons/fi";
import { FaCocktail } from "react-icons/fa";
import { TbWindow } from "react-icons/tb";
import { ImFilePicture } from "react-icons/im";
import { MdMeetingRoom } from "react-icons/md";
import { BiDollar } from "react-icons/bi";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultValues = {
  name: "",
  bed: "",
  bath: "",
  tivi: "",
  bar: "",
  window: "",
  price: 0,
  cover: "",
};
const schema = yup.object().shape({
  name: yup.string().required(),
  bed: yup.string().required(),
  bath: yup.string().required(),
  tivi: yup.string().required(),
  bar: yup.string().required(),
  window: yup.string().required(),
  price: yup.number().min(100).required(),
  cover: yup.string().required(),
});

const Edit = () => {
  const { _id } = useParams();

  const { control, handleSubmit, setValue } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const fetchData = async () => {
    const data = await axiosClient.get(`/rooms/${_id}`);
    setValue("name", data.data.data.room.name);
    setValue("bed", data.data.data.room.bed);
    setValue("bath", data.data.data.room.bath);
    setValue("tivi", data.data.data.room.tivi);
    setValue("bar", data.data.data.room.bar);
    setValue("window", data.data.data.room.window);
    setValue("price", data.data.data.room.price);
    setValue("cover", data.data.data.room.cover);
  };

  useEffect(() => {
    fetchData();
  }, [_id]);

  const handleEditFrom = async (value) => {
    await axiosClient.patch(`/rooms/edit/${_id}`, value);
    alert("Sửa phòng thành công");
    fetchData();
    navigate("/rooms");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleEditFrom)}
        className="p-3 bg-[#f2edf3]"
      >
        <div>
          <h1 className="text-4xl p-3 text-regal-green">Edit Room</h1>
          <div className=" ml-3 h-1 bg-green-400 w-[15%]"></div>
        </div>
        <div className="grid grid-cols-2 gap-5 py-5 px-7 mt-1">
          <div className="flex flex-col">
            <div>
              <Input
                label={<MdMeetingRoom size={35} />}
                type="text"
                name="name"
                placeholder="Type Room"
                control={control}
              />
              <Input
                label={<ImFilePicture size={35} />}
                type="text"
                name="cover"
                control={control}
              />
            </div>
            <div>
              <Button
                className="mr-3 p-3 px-8 bg-regal-green hover:bg-green-500 rounded-lg"
                type="submit"
              >
                Submit
              </Button>
              <Link
                to={"/rooms"}
                className="p-3 px-8 bg-red-300 hover:bg-red-500 rounded-lg"
              >
                Cancel
              </Link>
            </div>
          </div>
          <div>
            <Input
              label={<BiBed size={35} />}
              type="text"
              name="bed"
              placeholder="Type bed"
              control={control}
            />
            <Input
              label={<BiBath size={35} />}
              type="text"
              name="bath"
              placeholder="Type bath"
              control={control}
            />
            <Input
              label={<FiTv size={35} />}
              type="text"
              name="tivi"
              placeholder="Type tivi"
              control={control}
            />
            <Input
              label={<FaCocktail size={35} />}
              type="text"
              name="bar"
              placeholder="Type bar"
              control={control}
            />
            <Input
              label={<TbWindow size={35} />}
              type="text"
              name="window"
              placeholder="Type window"
              control={control}
            />
            <Input
              label={<BiDollar size={35} />}
              type="number"
              name="price"
              placeholder="Type price"
              control={control}
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default Edit;
