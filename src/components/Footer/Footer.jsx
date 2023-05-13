import React from "react";
import "./footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography className="aboutMe" variant="h6">
          Hey, My name is Shubham Gupta As a MERN stack developer, I am
          specialize in creating web applications using MongoDB, Express.js,
          React, and Node.js. I possess the skills to design and develop
          full-stack web applications, leveraging my expertise in JavaScript,
          React.js, and Node.js to build fast, scalable, and secure applications
          that meet business requirements.
        </Typography>
        <Link to="/contacts" className="footerContactBtn">
          <Typography >Contact Us</Typography>
        </Link>
      </div>
      <div className='socialLinks'>
        <Typography variant="h6">Social media</Typography>
        <a className='github' href="https://github.com/shuhbamgupta23">
          <BsGithub />
        </a>
        <a className='linkedin' href="https://www.linkedin.com/in/shubhamgupta2000/">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
