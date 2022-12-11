import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ComputersModalBlockTwo = ({activeModalTwo, setActiveModalTwo}) => {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/computer-list/')
            .then (data => {
                setComputers(data.data)
            })
    }, [])

    return (
        <div className={activeModalTwo ? 'ComputersModalBlock activeModal' : 'ComputersModalBlock'} onClick={() => setActiveModalTwo(false)}>
            <div className={activeModalTwo ? 'ComputersModalBlock__content activeModal__content' : 'ComputersModalBlock__content'} onClick={(e) => e.stopPropagation()}>
                <div className="computer__range">
                    { computers.filter(computer => computer.room == ('2')).map(computer => {
                        return (
                            <>

                                <div className={(computer.is_busy == (false)) ? "computer computer_green" : "computer_red"}></div>
                                
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default ComputersModalBlockTwo;