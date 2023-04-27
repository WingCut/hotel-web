import React, { useEffect } from "react";
import axiosClient from "../assets/api/axios.client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Input from "../input/input";
import Button from "../button/Button";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultValues = {
  name: "",
  phone: "",
  email: "",
  day: "",
  number: "",
};
const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required(),
  day: yup.string().required(),
  number: yup.number().required(),
});
const SubmitForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { _id } = useParams();

  const fetchData = async () => {
    const data = await axiosClient.get(`/rooms/${_id}`);
  };

  useEffect(() => {
    fetchData();
  }, [_id]);

  const handleOder = async () => {
    await axiosClient.patch(`/rooms/${_id}`);
    fetchData();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleOder)}>
        <div className="mx-5 md:mx-20">
          <Input
            type="text"
            label="Full Name"
            name="name"
            placholder="full name"
            control={control}
          />
          <Input
            type="text"
            label="Phone"
            name="phone"
            placholder="Enter Phone"
            control={control}
          />
          <Input
            type="email"
            label="Email"
            name="email"
            placholder="Enter Email"
            control={control}
          />
          <Input type="text" name="day" label="Start Day" control={control} />
          <Input
            type="number"
            name="number"
            label="Number Peoples"
            control={control}
          />
          <div className="flex justify-center">
            <Button
              className="mx-3 p-3 px-8 bg-regal-green hover:bg-green-500 rounded-lg"
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
      </form>
    </>
  );
};
export default SubmitForm;
