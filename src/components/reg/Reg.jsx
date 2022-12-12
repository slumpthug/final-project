import React, { useState } from 'react';
import './Reg-style.css';
import { useDispatch } from 'react-redux';
import { AuthRegister, Register } from '../../redux/reducer/RegisSlice';

const Reg = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        username: "",
        password: "",
        password2: "",
        phone_number: "",
    })

    // const [authVAlue, setAuthValue] = useState({
    //     username: "",
    //     password: "",
    // })

    return (
        <>
        <div className='Reg'>
            <form className="Reg__cont">
                <h1>Зарегестриваться</h1>
                <input placeholder='Имя' type="text" style={{color: 'black'}} value={state.username} onChange={(e) => setState({...state, username: e.target.value})} />
                <input placeholder='Пароль' type="password" style={{color: 'black'}} value={state.password} onChange={(e) => setState({...state, password: e.target.value})} />
                <input placeholder='Повтор пароля' type="password" style={{color: 'black'}} value={state.password2} onChange={(e) => setState({...state, password2: e.target.value})} />
                <input placeholder='Номер телефона' type="numder" style={{color: 'black'}} value={state.phone_number} onChange={(e) => setState({...state, phone_number: e.target.value})} />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(Register(state))
                    }}
                >
                    REGISTR
                </button>
            </form>
        </div>
        {/* <form className='Reg'>
            <input type="text" style={{color: 'black'}} value={authVAlue.username} onChange={(e) => setAuthValue({...authVAlue, username: e.target.value})} />
            <input type="text" style={{color: 'black'}} value={authVAlue.password} onChange={(e) => setAuthValue({...authVAlue, password: e.target.value})} />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(AuthRegister(authVAlue))
                }}
            >
                AUTH
            </button>
        </form> */}
        </>
    );
};

export default Reg;