import Popup from "./Popup";

const DetailsPopup = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={data.mImg}
            style={{ backgroundImage: `url(${data.mImg})` }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{data.name}</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Details
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            {data &&
              data.description &&
              data.description.map((des, i) => <p key={i}>{des}</p>)}
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>{data.custemer}</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">{data.category}</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>{data.date_prj}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />

                  <div
                    className="main"
                    style={{ backgroundImage: `url(${data.img_1})` }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div
                    className="main"
                    style={{ backgroundImage: `url(${data.img_2})` }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div
                    className="main"
                    style={{ backgroundImage: `url(${data.img_3})` }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
};
export default DetailsPopup;
