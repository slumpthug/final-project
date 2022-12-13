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
                <div className="ComputersModalBlock__content-left">
                    <h1 className='ComputersModalBlock__title ComputersModalBlock__title_VIP'>VIP ЗАЛ</h1>
                    <div className="computers-rate__range">
                        <div className="computer-rate__cont">
                            <div className="computer"></div>
                            <span> - свободно</span>
                        </div>
                        <div className="computer-rate__cont">
                            <div className="computer computer_red"></div>
                            <span> - занято</span>
                        </div>
                        <div className="computer-rate__cont">
                            <div className="computer computer_busy"></div>
                            <span> - ваша бронь</span>
                        </div>
                    </div>
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
                <div className="ComputersModalBlock__content-right">
                    <h1>Внимание</h1>
                    <ol>
                        <li> - Вы можете забронировать не более 6 мест в сутки.</li>
                        <li> - Невыкупленная бронь автоматически снимается за 10 минут.</li>
                        <li> - В случае, если количество невыкупленных мест достигнет 3, вы будете заблокированы.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default ComputersModalBlockThree;