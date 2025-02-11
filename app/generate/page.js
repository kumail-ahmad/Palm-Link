"use client";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const Generate = () => {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState(searchParams.get("handle"));
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (index, field, value) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i === index) {
          return { ...item, [field]: value };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks([...links, { link: "", linktext: "" }]);
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links,
      handle,
      pic,
      desc,
    });

    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(
      "http://localhost:3000/api/add",
      requestOptions
    );
    const result = await response.json();
    if (result.success) {
      toast.success(result.message);
      setLinks([{ link: "", linktext: "" }]);
      setPic("");
      setHandle("");
      setDesc("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-[#eac1ea] min-h-screen grid grid-cols-2">
      <div className="div.picture mt-8 ml-44 md:block hidden">
        <Image alt="image" src="/generate.png" width={320} height={320} />
      </div>

      <div className="inputs flex flex-col justify-center gap-4 mt-16 md:mt-28">
        <p className="font-poppins font-semibold text-2xl w-60 ml-3">Create your link</p>

        <h1 className="font-semibold w-60 ml-3">Step 1: Name your Handle</h1>
        <input
          className="border border-purple-400 rounded-full p-2 w-[77vw] md:w-1/3 ml-4"
          type="text"
          placeholder="Enter your handle"
          onChange={(e) => setHandle(e.target.value)}
          value={handle}
        />

        <h1 className="font-semibold ml-3">Step 2: Add your Links</h1>
        {links.map((item, index) => (
          <div key={index} className="addlinks  ml-4">
            <input
              className="border border-purple-400 rounded-full p-2 md:w-1/3 mr-2"
              type="text"
              placeholder="Enter Link text"
              onChange={(e) => handleChange(index, "linktext", e.target.value)}
              value={item.linktext}
            />
            <input
              className="border border-purple-400 rounded-full p-2 md:w-1/3"
              type="text"
              placeholder="Enter Link URL"
              onChange={(e) => handleChange(index, "link", e.target.value)}
              value={item.link || ""}
            />
          </div>
        ))}

        <button
          className="bg-purple-500 hover:bg-purple-600 text-white md:w-1/3 font-bold py-2 px-4 rounded-full ml-4"
          onClick={addLink}
        >
          +Add Link
        </button>

        <h1 className="font-semibold w-60 ml-3">
          Step 3: Add Your Display Picture and Description
        </h1>
        <div className="img&desc">
          <input
            className="border border-purple-400 rounded-full p-2 ml-4 md:w-1/3"
            type="text"
            placeholder="Enter image URL"
            onChange={(e) => setPic(e.target.value)}
            value={pic}
          />
          <input
            className="border border-purple-400 rounded-full p-2 ml-4 md:w-1/3"
            type="text"
            placeholder="Enter description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <button
          disabled={pic === "" || handle === ""}
          className="disabled:bg-purple-400 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-5 rounded-full ml-4 md:w-1/3"
          onClick={submitLinks}
        >
          Submit
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
