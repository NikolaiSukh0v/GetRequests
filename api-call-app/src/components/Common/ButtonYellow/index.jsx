import './ButtonStyles/index.scss'
import {React} from 'react';

export default function ButtonYellow({ onClick, children, isDisabled }) {
    return (
        <button className={`button ${isDisabled ? 'disabled' : ''}`} onClick={onClick}>
            {children}
        </button>
    );
}
