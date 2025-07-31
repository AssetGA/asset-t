"use client";

import React, { useState } from "react";
import SelectField from "./ui/SelectedFild";

type selectProps = {
  name: string;
  value: string;
};

const options = [
  { label: "до 100.000 тг", value: "1" },
  { label: "от 100.000 до 500.000 тг", value: "2" },
  { label: "от 500.000 до 5.000.000 тг", value: "3" },
  { label: "более 5.000.000 тг", value: "4" },
];

const ConnectionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    budget: "",
    time: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChange2 = (e: selectProps) => {
    const { name, value } = e;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      budget: "",
      time: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/lib/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `${
            "Имя: " +
            formData.name +
            " мобильный: " +
            formData.phone +
            " Почта: " +
            formData.email +
            " Бюджет: " +
            formData.budget +
            " Сроки: " +
            formData.time +
            " сообщение: " +
            formData.message
          }`,
        }),
      });
      if (res.ok) {
        resetForm();
        setSuccessMessage("✅ Сообщение успешно отправлено!");
        setTimeout(() => setSuccessMessage(""), 7000); // убираем сообщение через 5 секунд
      }

      console.log("responce", res.ok);
      return res.ok;
    } catch (error) {
      if (error instanceof Error) {
        console.error("error", error.message);
      } else {
        console.error("Unexpected error", error);
      }
    }
  };
  return (
    <>
      {successMessage ? (
        <div className="col-span-2 text-green-600 text-center text-sm mt-2 transition-opacity duration-300">
          {successMessage}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="">
          <div className="md:grid md:grid-cols-2 gap-8 text-xl">
            <div className="col-span-2">
              <label>Имя</label>
              <input
                type="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full p-4 rounded-md focus:outline-none border-2"
                placeholder="Абай"
              />
            </div>
            <div className="">
              <label>Почта</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full p-4 rounded-md border-2"
                placeholder="405060@gmail.ru"
              />
            </div>
            <div className="">
              <label>Мобильный</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="block w-full p-4 rounded-md border-2"
                placeholder="7781234567"
              />
            </div>
            <SelectField
              label="Бюджет"
              value={formData.budget}
              onChange={handleChange2}
              defaultOption="Выбери..."
              options={options}
              error=""
              name="budget"
            />
            <div className="">
              <label>Сроки</label>
              <input
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="block w-full p-4 rounded-md border-2"
                placeholder="Месяцев"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block font-medium text-gray-700"
              >
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="block w-full p-4 rounded-md border-2"
              />
            </div>

            <div className="flex text-center">
              <button
                type="submit"
                className="p-4 border-2 border-transparent font-medium shadow-sm bg-black/80 text-white rounded-md cursor-pointer hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Отправить
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ConnectionForm;
