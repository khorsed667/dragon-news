import React, { useEffect, useState } from 'react';
import './Qzone.css'
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const Qzone = () => {

    return (
        <div>
            <div className='bg-secondary rounded my-2 p-4'>
                <h2>Q-Zone</h2>
                <div>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
            <div className="txt-area rounded text-center px-5 my-2">
                <h2>Create an Amazing <br/> Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='btn btn-danger'>Learn More</button>
            </div>
        </div>
    );
};

export default Qzone;