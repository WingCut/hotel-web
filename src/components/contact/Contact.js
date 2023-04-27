import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div className="sticky flex items-center flex-col justify-center top-0 h-screen ">
            <div className="absolute top-0 left-0 w-full h-full z-0 bg-center bg-cover bg-no-repeat ">
              <img
                src="https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFkZHJlc3MlMjBob3RlbCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="ABOUT US"
                className="h-full w-full object-cover "
              />
            </div>
          </div>
          <div>
            <div>
              <h1 className="font-bold text-5xl after:content-[''] after:block after:w-14 after:h-1 after:mt-7 after:mb-12 after:bg-black">
                WHERE WE ARE{" "}
              </h1>
            </div>
            <div>
              <ul>
                <li className="mb-7">
                  <p className="text-[#666] font-medium leading-5">Address</p>
                  <p className="text-[#252a2b]">
                    <strong>
                      123, 4 thang 5 Street, VA Ward, ABC, Viet Nam
                    </strong>
                  </p>
                </li>
                <li className="mb-7">
                  <p className="text-[#666] font-medium leading-5">Email</p>
                  <p className="text-[#252a2b]">
                    <strong>ABC@gmail.com</strong>
                  </p>
                </li>
                <li className="mb-7">
                  <p className="text-[#666] font-medium leading-5">Tel</p>
                  <p className="text-[#252a2b]">
                    <strong>123456789</strong>
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#252a2b] font-bold text-2xl my-10 after:content-[''] after:block after:w-8 after:h-1 after:mt-7 after:mb-12 after:bg-[#252a2b]">
                Send us a message
              </h2>
              <div>
                <form className="grid grid-cols-1 gap-4">
                  <div className=" w-full m-4 mb-5 relative table border-separate">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-[50%] p-5 "
                    ></input>
                  </div>
                  <div className=" w-full m-4 mb-5 relative table border-separate">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-[50%] p-5 "
                    ></input>
                  </div>
                  <div className=" w-full m-4 mb-5 relative table border-separate">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-[50%] p-5 "
                    ></input>
                  </div>
                  <div>
                    <button className="h-14 px-8 bg-green-500 text-white font-bold ">
                      SEND NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
