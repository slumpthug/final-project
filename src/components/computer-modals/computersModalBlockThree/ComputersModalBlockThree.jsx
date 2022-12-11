import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ComputersModalBlockThree = ({activeModalThree, setActiveModalThree}) => {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/computer-list/')
            .then (data => {
                setComputers(data.data)
            })
    }, [])

    return (
        <div className={activeModalThree ? 'ComputersModalBlock activeModal' : 'ComputersModalBlock'} onClick={() => setActiveModalThree(false)}>
            <div className={activeModalThree ? 'ComputersModalBlock__content activeModal__content' : 'ComputersModalBlock__content'} onClick={(e) => e.stopPropagation()}>
                <div className="computer__range">
                    { computers.filter(computer => computer.room == ('3')).map(computer => {
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

export default ComputersModalBlockThree;