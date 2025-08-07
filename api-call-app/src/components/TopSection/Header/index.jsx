import {React} from 'react';
import Logo from '../../Common/Logo'
import './HeaderStyles/index.scss'
import ButtonYellow from '../../Common/ButtonYellow';
export default function Header(){
    return (
        <div className="header">
            <div className='headerContainer'>
            <div className='logo'>
                          <Logo />
            </div>
  
            <div className="header-Buttons">
                <ButtonYellow children='Users'/>
                <ButtonYellow children='Sign up'/>
                 </div>
        </div>
            </div>

    );
}