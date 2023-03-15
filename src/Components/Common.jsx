
import { NavLink } from 'react-router-dom';

const Common = (props) => {

    const {name,Imgsrc,visit,btname} =props

    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row col-10 mx-auto ">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-md-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                            <h1>
                                {name}
                                <strong className="brand_name pt-3">   Joy adhikary</strong>
                            </h1>
                            <h3 className="my-4">
                                We are the team of most talented devloper for making
                                websites
                            </h3>
                            <div className="mt-4">
                                <NavLink to={visit} className="btn-get-started">{btname}</NavLink>
                            </div>
                        </div> 

                        <div className="col-md-6 pt-5 pt-md-3 pt-lg-0 order-1 order-lg-2">
                            <img src={Imgsrc} alt='common' className="img-fluid animated" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
    )
};

export default Common;
