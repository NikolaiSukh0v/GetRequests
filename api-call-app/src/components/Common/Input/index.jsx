import './index.scss'
import {useState} from 'react'
export default function Input({placeholder, validation, onChangeValue}){
    const [value, setValue] = useState('')
    const [error, setError]= useState('')
  const formatPhoneNumber = (digits) => {
        const part1 = digits.slice(0, 3);
        const part2 = digits.slice(3, 6);
        const part3 = digits.slice(6, 8);
        const part4 = digits.slice(8, 10);
        return `+380 (${part1}) ${part2} ${part3} ${part4}`.trim();
    };

    const handlePhoneChange = (rawValue) => {
        let digits = rawValue.replace(/\D/g, '');

        if (digits.startsWith('380')) {
            digits = digits.slice(3);
        } else if (digits.startsWith('38')) {
            digits = digits.slice(2);
        }

        digits = digits.slice(0, 10);
        let validationError = '';
        let formated =formatPhoneNumber(digits)
        if (digits.length < 10) {
            setError('Phone number is incomplete')
        }else {
            setError('')
            onChangeValue?.(formated, validationError);
        }
    };

const Validator = (val) => {
        const trimmed = val.trim();
        if (validation === 'email') {
            if (!trimmed) return 'Email is required';
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
                
                return 'Invalid email format';
            }
        } else if (validation === 'name') {
            if (!trimmed) return 'Name is required';
            if (trimmed.length < 2 || trimmed.length > 60) return 'Name must be between 2 and 60 characters';
            if (!/^[a-zA-Z\s]+$/.test(trimmed)) return 'Only letters and spaces allowed';
        }
        return '';
    };
   const handleInput = (e) => {
        const val = e.target.value;
        if (validation === 'phone') {
            handlePhoneChange(val);
        } else {
            const validationError = Validator(val);
            setError(validationError)
            onChangeValue?.(val, validationError);
        }
    };
    return(
        <>
        <div className="Input">
            <input className="InputBasic" onChange={handleInput} placeholder={placeholder}></input>  <div className="InputErrorMessage">{error}</div>
        </div>
        </>
    )
}