import Accordion from "./Accordion";

const Process = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_process">
        <div className="container">
          <div className="process_inner">
            <div className="left">
              <div className="devman_tm_main_title" data-text-align="left">
                <span>Working to make difference</span>
                <h3>
                  Immerse yourself in a visually captivating interface that
                  embodies innovation.
                </h3>
                <p>
                  Experience a visually appealing interface that reflects
                  professionalism and innovation
                </p>
              </div>
            </div>
            <div className="right">
              <div className="acc_holder">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
