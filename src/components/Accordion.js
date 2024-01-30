import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "Responsive Design:",
    details:
      "Crafting seamless experiences across all devices. Our responsive design ensures that your website looks and functions flawle , no matter the screen size.",
  },
  {
    title: "Ready to elevate your digital presence ?",
    details:
      "Let's turn your ideas into stunning web realities. Connect with me, and let's create something extraordinary together!",
  },
  {
    title: "Clean and Modern Design:",
    details:
      "Embrace the power of simplicity and elegance. Our designs prioritize clarity and modern aesthetics, creating visually appealing interfaces that captivate users.",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordion;
