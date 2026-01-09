import React, { useState } from "react";
import { preview } from "../assets";
import { useNavigate } from "react-router-dom";
import { FormField, Loader } from "../components";
import { getRandomPromts } from "../utils";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {};

  const handleSubmit = () => {};
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPromts(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto ">
      <div>
        <h1 className="font-semibold text-[#222328] text-[32px] ">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-125 ">
          Create imaginative and visually stunning images throgh DALL-E AI and
          share them with the community.
        </p>
      </div>
      <form action="" className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            LableName="Your Name"
            type="text"
            name="name"
            placeholder="jethalal Gada"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            LableName="Prompt"
            type="text"
            name="prompt"
            placeholder="A Man falling in Love with his Computer, digital art"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-64 focus:ring-blue-500 focus:border-blue-500 outline-none w-64 flex justify-center items-center ">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain object-center"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain object-center opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="`mt-5 flex gap-1">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-700 mt-5 cursor-pointer font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-10 ">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Once you have created the image you want, you can share it with
            other in the community.
          </p>

          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] cursor-pointer font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
