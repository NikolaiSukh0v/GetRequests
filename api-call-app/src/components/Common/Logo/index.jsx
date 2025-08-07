import LogoImg  from'../../../static/LogoImg.svg';
import './LogoStyles/index.scss'
export default function Logo(){
    return (
        <div className="logo">
            <img src={LogoImg} alt="API Call App Logo" />
        </div>
    );
}