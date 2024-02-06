import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const portfolioData = [
  {
    pro: "Web Development",
    imgMain: "img/portfolio/catchy.svg",
    name: "Catchyglow Online Shop",
    mImg: "img/portfolio/catGlow/1.png",
    date_prj: "March 10 2023",
    custemer: "G M Nadishani",
    category: "Ecommerce",

    description: [
      "As a skilled web developer, I designed and developed a fully customized e-commerce website for a client using WordPress and WooCommerce.",
      "Leveraging the powerful functionalities of these platforms, I crafted a seamless online shopping experience tailored to my client's brand identity and target audience.",
      "From intuitive product browsing to secure payment processing, every aspect of the website was meticulously crafted to enhance user engagement and drive sales. The site features responsive design, ensuring a consistent and optimized experience across all devices.",
      "Explore the website to witness the seamless fusion of design and functionality, delivering an exceptional online shopping experience.",
    ],
    img_1: "img/portfolio/catGlow/1.png",
    img_2: "img/portfolio/catGlow/2.png",
    img_3: "img/portfolio/catGlow/3.png",
  },
  {
    pro: "Web Development",
    imgMain: "img/portfolio/brandleagure.jpg",
    name: "Brandleagure Company",
    mImg: "img/portfolio/branLgr/1.png",
    date_prj: "July 15 2023",
    custemer: "R. Dilshan",
    Category: "Digital marketing",

    description: [
      "As a versatile web developer, I conceptualized and brought to life a dynamic website for a leading digital marketing company. ",
      "Utilizing a blend of HTML, CSS, JavaScript, MySQL, and PHP, I crafted a robust online platform that showcases the company's services and expertise in the digital realm. From captivating landing pages to interactive content sections, every element of the website was meticulously designed to engage visitors and drive conversions.",
      "Leveraging MySQL for database management and PHP for server-side scripting, I implemented advanced functionalities such as user authentication, data processing, and dynamic content generation, ensuring a personalized browsing experience for each visitor.",
      "The website's responsive design and optimized performance guarantee seamless accessibility across devices, enhancing user satisfaction and retention. Dive into the website to explore the innovative fusion of design, technology, and marketing prowess, exemplifying the company's commitment to digital excellence.",
    ],
    img_1: "img/portfolio/branLgr/1.png",
    img_2: "img/portfolio/branLgr/2.png",
    img_3: "img/portfolio/branLgr/3.png",
  },
];

const Portfolio = () => {
  const [detailpop, setDetailpop] = useState({});
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <DetailsPopup
        open={popup}
        close={() => {
          setPopup(false);
        }}
        data={detailpop}
      />
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>Unleashing My Creative Code</h3>
              <hr />
              <p>
                Embark on a Visual Journey: My Web Development Portfolio 🚀🎨
              </p>
            </div>
            <div className="portfolio_list">
              <ul>
                {/* Start OF Web Projects? */}
                {portfolioData.map((portfolio_dt, j) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={j}>
                    <div className="list_inner">
                      <div
                        className="background_image"
                        data-img-url={portfolio_dt.imgMain}
                        style={{
                          backgroundImage: `url(${portfolio_dt.imgMain})`,
                        }}
                      />
                      <div className="content">
                        <div className="details">
                          <span className="category">
                            <a href="#">Details</a>
                          </span>
                          <h3 className="title">
                            <a href="#">{portfolio_dt.name}</a>
                          </h3>
                          <span className="view_project">
                            <a href="#">
                              View Project <i className="icon-right-big" />
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="overlay" />
                      <a
                        className="devman_tm_full_link portfolio_popup c-pointer"
                        onClick={() => {
                          setDetailpop(portfolio_dt);
                          setPopup(true);
                        }}
                      />
                    </div>
                  </li>
                ))}
                {/* End OF Web Projects? */}

                {/* Start OF Video */}
                {/* <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/1.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Youtube</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Desiverse
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                </li> */}

                {/* Stop OF Video */}

                {/* <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/2.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Vimeo</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Desiverse
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link popup-vimeo"
                      href="https://vimeo.com/337293658"
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/3.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Soundcloud</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Desiverse
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                </li> */}
                {/* <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/4.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Details</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Desiverse
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link portfolio_popup c-pointer"
                      onClick={() => setPopup(true)}
                    />
                  </div>
                </li>  */}

                <div
                  className="shape_1 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
                <div
                  className="shape_2 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
