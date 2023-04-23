import React from "react";

const aboutUs = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-2">
          <div className="sticky flex items-center flex-col justify-center top-0 h-screen ">
            <div className="w-1/2 z-10">
              <h2 className="text-white text-6xl font-bold">ABOUT US</h2>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-0 bg-center bg-cover bg-no-repeat after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-40">
              <img
                src="https://theme.hstatic.net/1000067077/1000396284/14/home_about_image.jpg?v=1681"
                alt="ABOUT US"
                className="h-full w-full object-cover "
              />
            </div>
          </div>
          <div className=" flex items-center flex-col justify-center">
            <div className="m-auto py-24 max-w-[80%]">
              <div className="text-justify">
                Known as the Island in the heart of Nha Trang city, Champa
                Island and Cham Oasis have the most luxurious, unique and
                fascinating Cham’s architectures. Here, we provide a full range
                of services, such as accommodation, food & beverage,
                entertainment, conventions, MICE, private beach, etc. that will
                fully satisfy our guests.
              </div>
              <div className="text-justify">
                <br />
                With the shape of two large ships heading out to the open sea,
                our resort has a 168 – room hotel, 2 condotels with a total of
                359 modern suites with 1 to 3 bedrooms, and isolated & detached
                luxury villas. Moreover, Champa Island also has a fresh seafood
                restaurant, children’s playground, outdoor- sport ground, golf
                driving range, riverside café, and event venues. The impressive
                traditional craft site with some Vietnamese handicrafts together
                with Chandra Walking Street with open-air cinema, street food
                and outdoor activities will satisfy our guests.
              </div>
              <div className="text-justify">
                <br />
                Right here, you can not only enjoy the spacious atmosphere of
                the estuary, but also relax at 11 private, luxurious massage and
                spa rooms, where your cares and stress will melt away, and
                experience with two biggest swimming pools in the center of Nha
                Trang, together with a pool bar and a fitness center located
                next to the Cham Oasis’s swimming pool. These are strong points
                that attract more and more guests to Champa Island Nha Trang.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutUs;
