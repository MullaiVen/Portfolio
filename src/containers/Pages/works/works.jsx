import React from "react";
import "./works.css";

function Works() {
  return (
    <div className=" flex bg-black">
      <div className="flex-shrink-0 w-full h-full flex flex-col bg-black  justify-start items-center relative">
        <h2 className="text-80px font-montserrat mt-0 text-white">
          What I've done
        </h2>
        <hr className="w-1/2 border-1 border-white my-4" />
        <div className="flex w-3/4 gap-4 my-10">
          <div className="flex flex-col w-1/3 mr-10 gap-4">
            {/* 1*/}
            <div className="bg-white h-80 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/1.Wrist.webp"
                alt="Project 1"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                    Wrist World
                  </p>
                  <p className="text-white font-cinzel text-md">
                    One-Stop Shop for Luxury Timepieces
                  </p>
                  <a
                    href="https://github.com/MullaiVen/Wrist-World"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* 2*/}
            <div className="bg-white h-64">
              <img
                className="object-cover w-full h-full"
                src="../assests/Loading.jpg"
                alt="Project 2"
              />
            </div>
            {/* 3*/}
            <div className="bg-white h-80">
              <img
                className="object-cover w-full h-full"
                src="../assests/Loading.jpg"
                alt="Project 3"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 gap-4">
            {/* 4*/}
            <div className="bg-white h-56 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/4.OPFrenzy.jpg"
                alt="Project 4"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                    OPFrenzy
                  </p>
                  <p className="text-white font-cinzel text-md">
                    Manga Reading App
                  </p>
                  <a
                    href="https://github.com/MullaiVen/OP-Frenzy"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* 5*/}
            <div className="bg-white h-40 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/5.Smart.jpg"
                alt="Project 5"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                    Smart Military Helmet
                  </p>
                  <p className="text-white font-cinzel text-md">
                    IOT based wearable device
                  </p>
                  <a
                    href="https://github.com/MullaiVen/Smart-Military-Helmet"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* 6*/}
            <div className="bg-white h-40 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/6.TwitterAnalysis.jpg"
                alt="Project 6"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                    Social Media Sentimental Analysis
                  </p>
                  <p className="text-white font-cinzel text-md">
                    using twitter tweets
                  </p>
                  <a
                    href="https://github.com/MullaiVen/Social-Media-Sentimental-Analysis"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* 7*/}
            <div className="bg-white h-72 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/QR.jpeg"
                alt="Project 7"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                    QRWhatNot
                  </p>
                  <p className="text-white font-cinzel text-md">
                    generates QR codes
                  </p>
                  <a
                    href="https://github.com/MullaiVen/QRWhatNot"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3 ml-10 gap-4">
            {/* 8*/}
            <div className="bg-white h-72 relative border-4 border-gray hover:border-blue">
              <img
                className="object-cover w-full h-full"
                src="../assests/8.Karnataka.jpg"
                alt="Project 8"
              />
              <div className="opacity-0 hover:opacity-100  absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity">
                <div className="text-center">
                  <p className="text-white text-xl font-bold font-cinzel mb-0">
                    Karnataka diaries
                  </p>
                  <p className="text-white font-cinzel text-md">
                    Beauty of karnataka blog
                  </p>
                  <a
                    href="https://github.com/MullaiVen/Karnataka-diaries"
                    target="_blank"
                  >
                    <button className="px-1 mt-2 bg-black text-white border-2 font-montserrat iconR">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* 9*/}
            <div className="bg-white h-80">
              <img
                className="object-cover w-full h-full"
                src="../assests/Loading.jpg"
                alt="Project 9"
              />
            </div>
            {/* 10*/}
            <div className="bg-white h-40">
              <img
                className="object-cover w-full h-full"
                src="../assests/Loading.jpg"
                alt="Project 10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
