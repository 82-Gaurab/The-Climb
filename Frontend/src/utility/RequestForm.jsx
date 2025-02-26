/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import Button from "./Button";
import { toast } from "react-toastify";
import axios from "axios";
import "../styles/RequestForm.css";

export default function RequestForm({ trekId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    noOfPeople: "Easy",
    message: "",
    trekId: trekId,
  });

  console.log(`trekId: ${trekId} `);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.noOfPeople
    ) {
      toast.error("All fields except message are required!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (formData.noOfPeople == 0) {
      toast.error("Number of people must be greater than 0.");
      return;
    }

    console.log(formData);
    try {
      const response = await axios.post("http://localhost:5000/api/request", {
        trekId: formData.trekId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        noOfPeople: formData.noOfPeople,
        message: formData.message,
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send request. Please try again.");
      return;
    }
    toast.success(
      "Request sent successfully! We will get back to you shortly."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      noOfPeople: "Easy",
      message: "",
      trekId: trekId,
    });
  };

  return (
    <div className="w-fit">
      <form key={trekId} onSubmit={handleSubmit} className="contact-form">
        <p className="form-title">Book This Trek</p>

        <p className="form-input">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="input-field"
            //   onChange={handleChange}
          />
        </p>

        <p className="form-input">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="input-field"
            //   onChange={handleChange}
          />
        </p>

        <p className="form-input">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone no..."
            className="input-field"
            //   onChange={handleChange}
          />
        </p>
        <p className="form-input">
          <input
            type="number"
            name="noOfPeople"
            value={formData.noOfPeople}
            onChange={handleChange}
            placeholder="No fo People"
            className="input-field"
            min={0}
            //   onChange={handleChange}
          />
        </p>

        <p className="form-input">
          <TextareaAutosize
            className="input-field"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message here..."
            minRows={3}
            maxRows={5}
          />
        </p>

        <Button text={"Book This Trek"} />
      </form>
    </div>
  );
}
