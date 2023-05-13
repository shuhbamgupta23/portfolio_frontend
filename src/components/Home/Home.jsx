import React, { useEffect } from "react";
import "./home.css";
import * as THREE from "three";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../Timeline/Timeline";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const Home = ({ timeline, skills }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(1, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(2, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(7, 4, 4);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(7, 4, 4);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.01);
    pointLight2.position.set(-7, -4, -4);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const speed = 0.01;

    window.addEventListener("mousemove", (e) => {
      if (e.clientX < window.innerWidth / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y += speed;
        venus.rotation.x -= speed;
        venus.rotation.y += speed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y -= speed;
        venus.rotation.x -= speed;
        venus.rotation.y -= speed;
      }
      if (e.clientY < window.innerHeight / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y += speed;
        venus.rotation.x -= speed;
        venus.rotation.y += speed;
      }
      if (e.clientY < window.innerHeight / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y -= speed;
        venus.rotation.x -= speed;
        venus.rotation.y -= speed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.003;
      const skillsBox = document.getElementById("homeSkillsBox");
      if (window.scrollY > 1500 && skillsBox !== undefined && skillsBox !== null) {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOn";
      } else if(window.scrollY < 1500 && skillsBox !== undefined && skillsBox !== null) {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>S</p>
          <p>H</p>
          <p>U</p>
          <p>B</p>
          <p>H</p>
          <p>A</p>
          <p>M</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h4">MERN STACK DEVELOPER</Typography>
          <Typography variant="h4">DESIGNER</Typography>
        </div>

        <Link to='/projects'>VIEW WORK</Link>
      </div>
      <div className="homeScrollBtn">
        <MouseOutlined/>
      </div>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timeline} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillFaces homeCubeSkillFace1">
            <img src={skills.image1.url} alt="face1"></img>
          </div>
          <div className="homeCubeSkillFaces homeCubeSkillFace2">
            <img src={skills.image2.url} alt="face2"></img>
          </div>
          <div className="homeCubeSkillFaces homeCubeSkillFace3">
            <img src={skills.image3.url} alt="face3"></img>
          </div>
          <div className="homeCubeSkillFaces homeCubeSkillFace4">
            <img src={skills.image4.url} alt="face4"></img>
          </div>
          <div className="homeCubeSkillFaces homeCubeSkillFace5">
            <img src={skills.image5.url} alt="face5"></img>
          </div>
          <div className="homeCubeSkillFaces homeCubeSkillFace6">
            <img src={skills.image6.url} alt="face6"></img>
          </div>
        </div>
        <div className="cubeShadow"></div>

        <div className="homeSkillsBox" id="homeSkillsBox">
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
        </div>
      </div>
    </div>
  );
};

export default Home;
