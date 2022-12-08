import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FaceBookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    comment: "",
  });
  // const [messages, setMessages] = useState([]);

  // function addMessages(newMessage) {
  // 	const updatedMessages = [...messages, newMessage];
  // 	setMessages(updatedMessages);
  // }

  console.log("form data: ", formData);
  // console.log(messages);
  //Post New Transaction to Server
  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://127.0.0.1:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => setFormData((formData) => ({ comment: "" })));
  }

  function handleChange(event) {
    const key = event.target.name;
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  }

  return (
    <div className="contact">
      <div className="leftSide">
        <img src="https://images.pexels.com/photos/6230961/pexels-photo-6230961.jpeg?cs=srgb&dl=pexels-anna-tarazevich-6230961.jpg&fm=jpg&_gl=1*1e7r2nw*_ga*MTkyMTc2NTMwMy4xNjY3OTA1OTk2*_ga_8JE65Q40S6*MTY3MDQ4ODAwNi43LjEuMTY3MDQ4ODQwMy4wLjAuMA.." />
      </div>

      <div className="rightSide">
        <h1>Contact Us</h1>

        <div className="contactIcon">
          <InstagramIcon />
          <TwitterIcon />
          <FaceBookIcon />
          <LinkedInIcon />
        </div>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="comment">Feedback</label>
          <textarea
            rows="1"
            placeholder="Enter feedback..."
            name="comment"
            required
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
          <button type="Submit">Send Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;