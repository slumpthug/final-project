import React, { useEffect, useState } from 'react';
import './Computers-style.css';
import axios from 'axios';

const Computers = () => {
    const [comps, setComps] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/computer-list/')
            .then(data => {
                setComps(data.data);
            })
    }, []);

    return (
        <div className='Computers'>
            <ul className="Computers__card-filter">
                    <li>
                        <a href="#">All Matches</a>
                    </li>
                    <li>
                        <a href="#">Upcoming matches</a>
                    </li>
                    <li>
                        <a href="#">Recent results</a>
                    </li>
                </ul>
            <div className="Computers__card-range">
                { comps.map(comp => {
                    return (
                        <>
                            <p style={{border: '1px solid #333333'}}>{comp.number}</p>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default Computers;