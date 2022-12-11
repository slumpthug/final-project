import React from 'react';
import './ComputersModalBlock-style.css';

const ComputersModalBlock = ({activeModal, setActiveModal}) => {
    return (
        <div className={activeModal ? 'ComputersModalBlock activeModal' : 'ComputersModalBlock'} onClick={() => setActiveModal(false)}>
            <div className={activeModal ? 'ComputersModalBlock__content activeModal__content' : 'ComputersModalBlock__content'} onClick={(e) => e.stopPropagation()}>
                hello
            </div>
        </div>
    );
};

export default ComputersModalBlock;