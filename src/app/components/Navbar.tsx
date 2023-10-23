"use client";
import React, { useState } from "react";
import Button from "./Button";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Close from "../../assets/close.png";
import Hamburger from "../../assets/hamburger.png";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isDesktop ? (
        <nav className="w-full py-4 border-b-[1px] border-gray-300 shadow-sm flex flex-row justify-between items-center">
          <div className="pl-10">asd</div>
          <div className="pr-10 flex flex-row justify-center items-center gap-5">
            <Button colorful={true} text={"VisionMarket"} />
            <Button colorful={true} text={"VisionChat"} />
            <Button colorful={false} text={"Wyloguj"} />
          </div>
        </nav>
      ) : (
        <nav>
          <div className="flex flex-row justify-between items-center py-4 border-b-[1px] border-gray-300 shadow-sm">
            <div className="pl-5">asd</div>
            <div className="pr-4 " onClick={() => setOpen(!isOpen)}>
              {isOpen ? (
                <Image className="w-8" src={Close} alt="" />
              ) : (
                <Image className="w-8" src={Hamburger} alt="" />
              )}
            </div>
          </div>
          <div
            className={`${
              isOpen
                ? "flex flex-col justify-start items-center bg-[#e1e1e1] backdrop-blur-md bg-opacity-20 h-screen pt-5 gap-8"
                : "hidden"
            }`}
          >
            <Button colorful={true} text={"VisionMarket"} />
            <Button colorful={true} text={"VisionChat"} />
            <Button colorful={false} text={"Wyloguj"} optionalStyle="bg-white" />
          </div>
        </nav>
      )}
    </>
  );
}