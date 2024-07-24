"use client";
import React, { useState } from "react";
import Joi from "joi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should have a minimum length of 3",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Email must be a valid email",
    }),
  subject: Joi.string().optional(),
  message: Joi.string().min(5).required().messages({
    "string.empty": "Message is required",
    "string.min": "Message should have a minimum length of 5",
  }),
});

const InputsContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = schema.validate(formData, { abortEarly: false });

    if (error) {
      error.details.forEach((detail) => {
        toast.error(detail.message);
      });
    } else {
      toast.success("Form submitted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="mt-[40px]">
          <label
            htmlFor="name"
            className="text-base font-semibold cursor-pointer"
          >
            Your Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Abc"
            className="p-2 rounded-lg w-[408px] h-[55px] outline-orange-300"
          />
        </div>
        <div className="mt-[40px]">
          <label
            htmlFor="email"
            className="text-base font-semibold cursor-pointer"
          >
            Email address
          </label>
          <br />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Abc@def.com"
            className="p-2 rounded-lg w-[408px] h-[55px] outline-orange-300"
          />
        </div>
        <div className="mt-[40px]">
          <label
            htmlFor="subject"
            className="text-base font-semibold cursor-pointer"
          >
            Subject
          </label>
          <br />
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="This is an optional"
            className="p-2 rounded-lg w-[408px] h-[55px] outline-orange-300"
          />
        </div>
        <div className="mt-[40px]">
          <label
            htmlFor="message"
            className="text-base font-semibold cursor-pointer"
          >
            Message
          </label>
          <br />
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hi! I’d like to ask about"
            className="p-2 rounded-lg w-[408px] h-[100px] outline-orange-300"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-orange-300 hover:scale-110 mt-[50px] mb-[100px] hover:rounded-lg hover:text-orange-300 hover:bg-white text-white font-bold w-[245px] h-[58px] border-2 border-orange-200 p-2 duration-500 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputsContact;
