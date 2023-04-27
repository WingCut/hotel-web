import React, { useState } from "react";
import { useController } from "react-hook-form";

const Input = (props) => {
  const { label, type, name, placeholder, control } = props;
  const { field, fieldState } = useController({ name, control });
  // const [image, setImage] = useState();
  // if (type === "file") {
  //   field.onChange = (e) => {
  //     const file = e.target.files[0];
  //     file.preview = URL.createObjectURL(file);
  //     setImage(file);
  //     console.log(file.preview);
  //   };
  // }
  return (
    <>
      <div className="my-6">
        <label className=" relative flex items-center pl-2">
          {label}
          <input
            className="ml-1 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder={placeholder}
            type={type}
            {...field}
          />
        </label>
        <span style={{ color: "red" }}>
          {fieldState.error && fieldState.error.message}
        </span>
      </div>
      {/*image && <img src={image.preview} alt="room" width={"10%"} />*/}
    </>
  );
};
export default Input;
