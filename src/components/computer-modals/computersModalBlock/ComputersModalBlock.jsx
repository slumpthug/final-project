import React, {useEffect, useState} from 'react';
import './ComputersModalBlock-style.css';
import MainButton from '../../main-button/MainButton';
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';

const ComputersModalBlock = ({activeModal, setActiveModal}) => {
    const [computers, setComputers] = useState([]);
    const [busy, setBusy] = useState('');

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
                <div className="ComputersModalBlock__content-left">
                    <h1 className='ComputersModalBlock__title'>ОБЩИЙ ЗАЛ</h1>
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
                        { computers.filter(computer => computer.room == ('1')).map(computer => {
                            return (
                                <div>
                                    <span>{computer.number}</span>
                                    <Tooltip title={computer.additional_description} arrow>
                                        <button disabled={computer.is_busy == true} className={(busy == computer.id) ? "computer computer_busy" : (computer.is_busy == (true)) ? "computer computer_red" : "computer"} onClick={() => setBusy(computer.id)}></button>
                                    </Tooltip>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="ComputersModalBlock__content-right">
                    <div>
                        <h1>Внимание</h1>
                        <ol>
                            <li> - Вы можете забронировать не более 1 места в сутки.</li>
                            <li> - Невыкупленная бронь автоматически снимается за 10 минут.</li>
                            <li> - В случае, если количество невыкупленных мест достигнет 3, вы будете заблокированы.</li>
                        </ol>
                    </div>
                    <div className="ComputersModalBlock__content-right_bottom">
                        <MainButton text="Забронировать"/>
                        <button className="Cancel" onClick={() => setBusy('')}>Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputersModalBlock;