import React, { useEffect, useState } from "react";
import axiosClient from "../assets/api/axios.client";
import { useParams } from "react-router-dom";

import RoomDetail from "../Rooms/RoomDetail";
import Input from "../input/input";
import Button from "../button/Button";

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
const SubmitForm = () => {
  return (
    <>
      <div>
        <RoomDetail />
        <div className="mx-5 md:mx-20">
          <Input
            type="text"
            label="Full Name"
            placholder="full name"
            //control={control}
          />
          <Input
            type="number"
            label="Phone"
            placholder="Enter Phone"
            //control={control}
          />
          <Input
            type="email"
            label="Email"
            placholder="Enter Email"
            //control={control}
          />
          <Input type="Date" label="Start Day" />
          <Input type="text" label="Number Peoples" />
          <div className="flex justify-center">
            <Button
              className="mx-3 p-3 px-8 bg-regal-green hover:bg-green-500 rounded-lg"
              type="submit"
            >
              Submit
            </Button>
            <Button
              className="p-3 px-8 bg-red-300 hover:bg-red-500 rounded-lg"
              type="submit"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubmitForm;
