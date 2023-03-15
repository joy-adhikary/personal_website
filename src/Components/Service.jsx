import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import Data from "../Style/DATA/Data.jsx"


const Service = () => {

    const [Isvisible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <div className="container-fluid">
                <div className="my-5">
                    <h1 className="text_service"> Our Services </h1>
                </div>
                <div className="row col-11 mx-auto  mb-5">

                    {
                        Data.map((val, ind) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-4  g-4 mx-auto">
                                    <div className="card" >
                                        <img className="card-img-top" src={val.imgsrc} alt={val.imgsrc} />
                                        <div className="card-body p-4">
                                            <h5 className="card-title">{val.title}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className="card_body mt-3">
                                                <NavLink to="/services" className=" card_btn btn btn-primary"> Visit </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                {
                    Isvisible && (
                        <div className="Button">
                            <FaArrowCircleUp onClick={scrollToTop} />
                        </div>
                    )

                }

            </div>
        </>
    );
};

export default Service;
