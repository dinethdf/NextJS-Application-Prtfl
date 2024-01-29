const features_list = [
  {
    title: "UI Design",
    icon: "img/svg/design.svg",
    text: "With 2 years of UI/UX experience, I craft visually engaging interfaces for seamless digital experiences. Proficient in Sketch and Figma, my designs blend creativity with functionality.",
  },
  {
    title: "Web Development",
    icon: "img/svg/development.svg",
    text: "Web developer specializing in responsive websites. Proficient in HTML, CSS, JavaScript, React, and Node.js. Passionate about clean code and user-centric design. Explore my portfolio for impactful web solutions. Let's build something great together!.",
  },
  {
    title: "Softwere Development",
    icon: "img/svg/landing.svg",
    text: "As a software developer, I specialize in crafting robust and efficient solutions. Proficient in languages such as Java, and C# I bring a strong foundation in algorithm design and problem-solving. Explore my portfolio to see how I can contribute to your project's success.",
  },
];
const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <img className="svg" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
