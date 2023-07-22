import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    // Validation
    if (e.target.name === "name" || e.target.name === "message") {
      if (e.target.value.trim() === "") {
        setErrors((prevState) => ({
          ...prevState,
          [e.target.name]: "This field is required.",
        }));
      }
    } else if (e.target.name === "email") {
      if (e.target.value.trim() === "") {
        setErrors((prevState) => ({
          ...prevState,
          [e.target.name]: "This field is required.",
        }));
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(e.target.value)) {
          setErrors((prevState) => ({
            ...prevState,
            [e.target.name]: "Invalid email address.",
          }));
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi data sebelum mengirim formulir
    const newErrors = {
      name: formData.name === "" ? "Name is required" : "",
      email:
        formData.email === ""
          ? "Email is required"
          : !isValidEmail(formData.email)
          ? "Invalid email format"
          : "",
      message: formData.message === "" ? "Message is required" : "",
    };

    setErrors(newErrors);

    // Cek jika ada pesan error yang ditetapkan, jangan kirim formulir
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex justify-center text-sm font">
      <form className="w-96 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white rounded-md py-2 px-4 uppercase hover:bg-cyan-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
