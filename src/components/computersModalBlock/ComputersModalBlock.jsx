import React, {useEffect, useState} from 'react';
import './ComputersModalBlock-style.css';
import axios from 'axios';

const ComputersModalBlock = ({activeModal, setActiveModal}) => {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/computer-list/')
            .then (data => {
                setComputers(data.data)
            })
    }, [])

    return (
        <div className={activeModal ? 'ComputersModalBlock activeModal' : 'ComputersModalBlock'} onClick={() => setActiveModal(false)}>
            <div className={activeModal ? 'ComputersModalBlock__content activeModal__content' : 'ComputersModalBlock__content'} onClick={(e) => e.stopPropagation()}>
                <div className="computer__range">
                    { computers.filter(computer => computer.room == ('3')).map(computer => {
                        return (
                            <>

                                <div className={(computer.is_busy == (false)) ? "computer computer_green" : "computer_red"}></div>
                                
                            </>
                        )
                    })}
                </div>
                { computers.filter(computer => computer.id == ('113')).map(computer => {
                    return (
                        <>
                            <div className='computers__desc'>{computer.additional_description}</div>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default ComputersModalBlock;