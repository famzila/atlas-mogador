import React from 'react';


class Testimonials extends React.PureComponent{

    render() {
        return (
            <div className="testimonial_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12"> 
                    <div className="testmonial_active owl-carousel">
                        <div className="single_carousel">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="single_testmonial text-center">
                                        <div className="author_thumb">
                                            <img src="assets/img/testmonial/author.png" alt="" />
                                        </div>
                                        <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                        <div className="testmonial_author">
                                            <h3>- Micky Mouse</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single_carousel">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="single_testmonial text-center">
                                        <div className="author_thumb">
                                            <img src="assets/img/testmonial/author.png" alt=""/>
                                        </div>
                                        <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                        <div className="testmonial_author">
                                            <h3>- Tom Mouse</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single_carousel">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="single_testmonial text-center">
                                        <div className="author_thumb">
                                            <img src="assets/img/testmonial/author.png" alt=""/>
                                        </div>
                                        <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                        <div className="testmonial_author">
                                            <h3>- Jerry Mouse</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}


export default Testimonials;