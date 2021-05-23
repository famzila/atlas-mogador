import React from 'react';


class Activities extends React.PureComponent{
    render() {
    return (
        <div className="recent_trip_area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section_title text-center mb_70">
                        <h3>Recent Activities</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single_trip">
                        <div className="thumb">
                            <img src="assets/img/trip/1.png" alt=""/>
                        </div>
                        <div className="info">
                            <div className="date">
                                <span>Oct 12, 2019</span>
                            </div>
                            <a href="/todo">
                                <h3>Journeys Are Best Measured In
                                    New Friends</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_trip">
                        <div className="thumb">
                            <img src="assets/img/trip/2.png" alt=""/>
                        </div>
                        <div className="info">
                            <div className="date">
                                <span>Oct 12, 2019</span>
                            </div>
                            <a href="/todo">
                                <h3>Journeys Are Best Measured In
                                    New Friends</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_trip">
                        <div className="thumb">
                            <img src="assets/img/trip/3.png" alt=""/>
                        </div>
                        <div className="info">
                            <div className="date">
                                <span>Oct 12, 2019</span>
                            </div>
                            <a href="/todo">
                                <h3>Journeys Are Best Measured In
                                    New Friends</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
}



export default Activities;