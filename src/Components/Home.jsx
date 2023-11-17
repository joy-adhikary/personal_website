
// import Common from '../Components/Common.jsx';
// import Img from "../Style/images/img2.svg"
import "../Style/home.css"
import Brand from "./Brand"
import Card from "./Card";

const Home = () => {
    return (
        <>
            <div className="pageWrapper">
                <div className="Banner">
                    <div className="content">
                        <img width="1340" height="400" alt="" src="https://img-b.udemycdn.com/notices/web_carousel_slide/image/8a209063-821d-430b-82f2-7fc3600d67f5.jpg" loading="eager" />
                    </div>
                </div>
                <Brand />
                <Card />
            </div>
        </>
    );
};

export default Home;
