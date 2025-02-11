import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/01.jpg";
import image2 from "../assets/02.jpg";
import image3 from "../assets/03.png";
import image4 from "../assets/04.jpg";
import image5 from "../assets/05.png";
import image6 from "../assets/06.png";

const Banner = () => {
  return (
    <div className="mt-10  overflow-hidden ">
      <Carousel>
        <div>
          <img className="rounded-lg" src={image1} />
        </div>
        <div>
          <img className="rounded-lg" src={image2} />
        </div>
        <div>
          <img className="rounded-lg" src={image3} />
        </div>
        <div>
          <img className="rounded-lg" src={image4} />
        </div>
        <div>
          <img className="rounded-lg" src={image5} />
        </div>
        <div>
          <img className="rounded-lg" src={image6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
