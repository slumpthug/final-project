import React, {useState, useEffect} from 'react';
import './Rules-style.css';
import axios from 'axios';

const Rules = () => {

    const [rules, setRules] = useState([]);

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/rules-list/')
            .then(data => {
                setRules(data.data);
            })
    }, []);

    return (
        <div className='Rules'>
            <h3 className='Rooms__title'>Общие положения:</h3>
            { rules.filter(rule => rule.category == ("ОБЩИЕ ПОЛОЖЕНИЯ:")).map(rule => {
                return (
                    <>
                    <ol className='Rules__menu'>
                        <li>
                            {rule.name}
                        </li>
                    </ol>
                    </>
                )
            })}
            <h3 className='Rooms__title'>Запрещается:</h3>
            { rules.filter(rule => rule.category == ('ЗАПРЕЩАЕТСЯ:')).map(rule => {
                return (
                    <>
                    <ol className='Rules__menu'>
                        <li>
                            {rule.name}
                        </li>
                    </ol>
                    </>
                )
            })}
            <h3 className='Rooms__title'>Гости имеют право:</h3>
            { rules.filter(rule => rule.category == ('ГОСТИ ИМЕЮТ ПРАВО:')).map(rule => {
                return (
                    <>
                    <ol className='Rules__menu'>
                        <li>
                            {rule.name}
                        </li>
                    </ol>
                    </>
                )
            })}
        </div>
    );
};

export default Rules;