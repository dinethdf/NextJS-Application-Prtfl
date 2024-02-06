import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Website Development",
    icon: "img/svg/cpu.svg",
    img: "img/service/web.jpg",
    description: [
      "My passion is building responsive, captivating websites. Expert in crafting captivating online experiences that align with brand identity and business goals.",
      "Creating captivating online experiences that complement your brand identity and business goals is my area of expertise in website development.",
      "My priorities include clear code, intuitive user interfaces, and peak speed for everything from e-commerce sites to informational webpages.",
      "Boost your online visibility by creating websites that offer a perfect user experience in addition to attractive design.",
    ],
  },

  {
    name: "Desktop Application",
    icon: "img/svg/web.svg",
    img: "img/service/soft.svg",
    description: [
      "Master the craft of developing desktop applications with a priority on usability, effectiveness, and utility.",
      "My desktop programs, which range from powerful project management tools to creative industrial solutions, are made to improve user experiences and expedite procedures.",
      "I ensure that each computer program satisfies the highest requirements of performance and usability using cutting-edge technologies.",
    ],
  },
  {
    name: "UI/UX Design",
    icon: "img/svg/star.svg",
    img: "img/service/uiux.jpg",
    description: [
      "Design is about presenting an interesting and enjoyable user experience, not merely lovely items.",
      "I'm an expert in UI/UX design that goes beyond design, with a strong attention to detail and a user-centric mindset.",
      "I make concepts come to life by making sure people have an easy and straightforward experience, from wireframes to prototypes. Use designs that are pleasing to the eye and comfortable to the touch to improve the usability and appeal of your product.",
    ],
  },
  {
    name: "Mobile Application",
    icon: "img/svg/phone.svg",
    img: "img/service/mob.jpg",
    description: [
      "I specialize for creating feature-rich and user-friendly mobile applications, turning concepts into dynamic mobile experiences.",
      "My mobile apps, which are accessible on iOS and Android, combine beautiful design and flawless functionality to provide solutions that users find compelling.",
    ],
  },
];
const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <img className="svg" src={service.icon} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">{service.description[0] + ""}</p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
