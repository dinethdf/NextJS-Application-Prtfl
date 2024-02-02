import { useState, useEffect } from "react";
import clientPromise from "../lib/mongodb";

const aboutData = {
  designation: "Developer",
  title: " I'm a Forward-Thinking Web Developer",
  text: [
    "Thrives on turning ideas into reality. I focus on creating applications that empower and simplify the lives of users, combining functionality with an intuitive user experience.",
    "I take pride in developing applications that solve real-world problems and enhance the way people interact with technology.",
  ],
  skillIcons: [
    { name: "joomla", icon: "img/svg/joomla.svg" },
    { name: "wp", icon: "img/svg/wp.svg" },
    { name: "drupal", icon: "img/svg/drupal.svg" },
    { name: "laravel", icon: "img/svg/laravel.svg" },
  ],
};

const About_api = ({ movies }) => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src="img/thumbs/64-49.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
                <div className="extra_image">
                  <div className="image_inner">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main_extra"
                      data-img-url="img/about/2.jpg"
                    />
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <img className="svg" src={skill.icon} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  {data.map((text, i) => (
                    <p key={i}>{text.plot}</p>
                  ))}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About_api;

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(1000)
      .toArray();

    return {
      props: { movies: JSON.parse(JSON.stringify(movies)) },
    };
  } catch (e) {
    console.error(e);
  }
}
