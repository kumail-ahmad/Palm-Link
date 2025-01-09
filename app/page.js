"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, setText] = useState("");
  const router = useRouter();

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main>
      <section className="bg-customGreen min-h-[100vh] grid grid-cols-1 md:grid-cols-2">
        <div className="text&all mx-3 md:mx-16">
          <div className="flex justify-center mt-32 md:mt-40 flex-col ml-[5vw] gap-3 font-poppins">
            <p className="text-[#def056] font-bold text-4xl md:text-6xl">
              Everything you are. In one{" "}
            </p>
            <p className="text-[#def056] font-bold text-4xl md:text-5xl">
              simple link in bio,
            </p>
            <p className="text-[#def056] font-bold text-4xl md:text-5xl"> </p>
            <p className="text-[#def056] md:text-lg mt-4 ">
              Join millions of users already simplifying their online presence{" "}
            </p>
            <p className="text-[#def056] md:text-xl  ">with just </p>
            <p className="text-[#def056] md:text-xl  ">one link on Palmlink.</p>
            <div className="Input&Button   ">
              <input
                className="md:rounded-3xl rounded-xl p-3 md:mr-6 w-60 md:w-auto "
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your handle"
              />
              <button
                className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-4 px-3 rounded-full mt-3"
                disabled=""
                onClick={() => createTree()}
              >
                Claim Your Palmlink
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block imageofmobile mt-32 ml-8">
          <Image
            alt="no image"
            width={522}
            height={482}
            src="/mobile.png"
            className="w-full md:w-auto"
          ></Image>
        </div>
      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2">
        <div className="photo mt-28 hidden md:block ">
          <Image
            alt="no image"
            width={522}
            height={482}
            src="/clothes.png"
            className="w-full md:w-auto "
          ></Image>
        </div>
        <div className="text&all mt-28 md:mt-40 ml-10 md:ml-0 w-full ">
          <div className="heading w-full">
            <p className="text-[#502274] font-extrabold text-3xl md:text-[54px] ">
              Create and customize
            </p>
            <p className="text-[#502274] font-extrabold text-3xl md:text-5xl">
              {" "}
              your palmLink in
            </p>

            <p className="text-[#502274] font-extrabold text-3xl md:text-5xl font-poppins">
              minutes
            </p>
          </div>
          <div className="maintext mt-4">
            <p className="text-[#502274] ">
              Connect your TikTok, Instagram, Twitter, website, store, videos,
              music, podcast, events and more. It all comes together in a link
              in bio landing page designed to convert.
            </p>
          </div>
          <div className="btn mt-11">
            <button className=" rounded-full bg-[#502274] p-5 w-48 text-white">
              Get started for free
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#780016] min-h-[100vh] grid grid-cols-2">
        <div className="container mt-36 ml-14 w-full">
          <div className="text&all">
            <p className="text text-3xl md:text-6xl text-[#E9C0E9] font-extrabold font-sans">
              Share your PalmLink
            </p>
            <p className="text text-3xl md:text-6xl text-[#E9C0E9] font-extrabold font-sans">
              from your Instagram{" "}
            </p>
            <p className="text text-3xl md:text-6xl text-[#E9C0E9] font-extrabold font-sans">
              TikTok, Twitter and{" "}
            </p>
            <p className="text text-3xl md:text-6xl text-[#E9C0E9] font-extrabold font-sans">
              other bios
            </p>
          </div>
          <div className="maintext  md:text-lg text-sm w-68  mt-9 text-[#E9C0E9] font-semibold">
            <p className=" ">
              {" "}
              Add your unique Linktree URL to all the platforms and places you
              find your audience. Then use your QR code to drive your offline
              traffic online.
            </p>
          </div>
          <div className="btn mt-12 w-64">
            <button className="p-5 bg-[#E9C0E9] text-gray-900 rounded-full font-bold">
              {" "}
              Get started for free
            </button>
          </div>
        </div>
        <div className="Photo hidden md:block">
          <Image
            src="/3rd.png"
            alt="Image"
            width={522}
            height={482}
            className="mt-32 ml-12 "
          ></Image>
        </div>
      </section>
      <section className="min-h-[100vh] bg-[#f3f3f1] grid grid-cols-2 font-poppins">
        <div className="photo md:block hidden mt-32 ml-28">
          <Image src="/4th.png" alt="" width={422} height={482}></Image>
        </div>
        <div className="text">
          <div className="heading mt-36 ml-14 w-full">
            <p className="text-[#1e2330] text-2xl md:text-5xl font-extrabold ">
              Analyze your audience
            </p>
            <p className="text-[#1e2330]  text-2xl md:text-5xl font-extrabold ">
              and keep your followers
            </p>
            <p className="text-[#1e2330]  text-2xl md:text-5xl font-extrabold ">
              engaged
            </p>
          </div>
          <div className="maintext mt-12 ml-14">
            <p className="text-black  text-sm  md:text-lg md:w-full w-40">
              Track your engagement over time, monitor revenue and learn what’s
              converting your audience. Make informed updates on the fly to keep
              them coming back.
            </p>
          </div>
          <div className="btn mt-10 ml-11 w-full">
            <button className="bg-[#E9C0E9] p-4 text-black rounded-full  ">
              Get started for free
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
