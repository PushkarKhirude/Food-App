import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import li from "../assets/li.png";
import git from "../assets/git.png";
import x from "../assets/x.png";

//const [value, setValue] = useState("");

function Contact() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emaiValid, setEmailValid] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "212cf93f-225b-469f-bdb1-3d30f63eafa2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    //email validation code
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(object.email) || object.email == "") {
      setEmailValid(false);
    } else {
      setEmailValid(true);
      return;
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      navigate("/");
    }
  };

  return (
    <div className="contact flex justify-between text-center py-10">
      <form
        className="w-6/12 border-r-2 border-r-amber-100 "
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl font-bold my-6 py-6">Contact Us</h2>
        <div className="input-box my-2 ">
          <input
            type="text"
            className="field border w-7/12 p-1 rounded-md focus:bg-amber-50"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div className="input-box my-2">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={
              "field border w-7/12 p-1 rounded-md  focus:bg-amber-50 " +
              (emaiValid ? "border-red-400 border-3" : "")
            }
            placeholder="Email address"
            required
          />
        </div>
        <div className="input-box my-2">
          <textarea
            className="border w-7/12 p-1 rounded-md  focus:bg-amber-50"
            name="message"
            id=""
            rows="3"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="border shadow-xl rounded-lg cursor-pointer my-6 px-3 py-3 bg-amber-400 hover:bg-amber-200 hover:shadow-2xs active:bg-amber-400"
        >
          Send Message
        </button>
      </form>

      <div className="contact-info w-6/12">
        <div>
          <h1 className="text-3xl font-bold my-6 py-6">Contact Info</h1>
          <p className="my-8 cursor-pointer">pushkar.khirude10@gmail.com</p>
          <p className="font-bold mt-13">Based in</p>
          <p className="mt-2 ">Pune, India</p>
        </div>

        <div className="contact-links flex justify-between w-6/12 mx-auto mt-16">
          <a
            href="https://www.linkedin.com/in/pushkar-khirude-16a79a16b"
            target="_blank"
          >
            <img src={li} alt="linkedin-logo" className="w-10 " />{" "}
          </a>
          <a href="https://github.com/PushkarKhirude" target="_blank">
            {" "}
            <img src={git} alt="github-logo" className="w-10 " />{" "}
          </a>

          <a href="https://x.com/pushkarkhirude" target="_blank">
            {" "}
            <img src={x} alt="x-logo" className="w-10 " />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
