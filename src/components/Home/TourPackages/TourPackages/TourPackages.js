import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';

const TourPackage = () => {
    const [packages, setPackages] = useState([]);

    // Load data from db
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h2 className="fw-bold">Select Package For Your Travel</h2>
                <h5>Choose Package</h5>
                <div className="packages-container">
                    <Row xs={1} md={3} className="g-4">
                        {
                            packages.map(pack => <Package
                                key={pack._id}
                                pack={pack}
                            />)
                        }
                    </Row>
                </div>
            </div>


        </div>
    );
};

export default TourPackage;