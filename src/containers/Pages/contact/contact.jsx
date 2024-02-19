import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div
      className="App h-screen flex bg-black"
      style={{ height: "calc(100vh - 44px)" }}
    >
      <div className="flex-shrink-0 w-screen h-full bg-black flex flex-col justify-start items-center relative">
        <h2 className="text-80px font-montserrat mt-0  text-white">
          Contact me
        </h2>
        <hr className="w-1/2 border-1 border-white my-4" />
        <div className="sec_sp flex justify-center items-center w-full pt-16">
          <div className="bg-black w-2/5 h-80 flex flex-col items-start pl-48 pt-10 text-white">
            <h3 className="text-3xl mb-7 font-montserrat">Get in touch</h3>
            <p className="text-lg font-zcool mb-4">
              <b>Email:</b> mullai.ven33@gmail.com
            </p>
            <p className="text-lg font-zcool mb-4">
              <b>Phone:</b> +91-9902539513
            </p>
            <p className="font-merriweather">
              Thank you for your interest in connecting with me. I am always{" "}
              <br />
              open to discussions, collaborations, and opportunities. You can{" "}
              <br />
              reach me via email or contact me directly here. I look forward to{" "}
              <br />
              hearing from you and will respond at my earliest convenience.
            </p>
          </div>
          <div className="bg-black w-2/5 h-80 flex flex-col items-start pl-10 pt-9 text-white">
            <div className="flex justify-between  w-full">
              <input
                className="w-72 p-3 border-2  border-white bg-black"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-72 p-3 border-2 border-white bg-black"
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              className="w-full p-3 h-32 border-2 border-white bg-black mt-4"
              placeholder="Message"
            ></textarea>
            <button className="w-28 px-4 py-3 border-2 border-white bg-black text-white mt-4 font-cinzel conc">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
