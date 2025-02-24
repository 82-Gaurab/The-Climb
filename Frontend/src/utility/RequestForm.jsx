/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import Button from "./Button";
import "../styles/RequestForm.css";

export default function RequestForm({ trekId }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-fit">
      <form key={trekId} onSubmit={handleSubmit} className="contact-form">
        <p className="form-title">Book This Trek</p>

        <p className="form-input">
          <input
            type="text"
            name="name"
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
            placeholder="your.email@example.com"
            required
            className="input-field"
            //   onChange={handleChange}
          />
        </p>

        <p className="form-input">
          <input
            type="tel"
            name="contact"
            placeholder="Phone no..."
            className="input-field"
            //   onChange={handleChange}
          />
        </p>
        <p className="form-input">
          <input
            type="number"
            name="noOfPeople"
            placeholder="No fo People"
            className="input-field"
            min={0}
            //   onChange={handleChange}
          />
        </p>

        <p className="form-input">
          <TextareaAutosize
            className="input-field"
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
