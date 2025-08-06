import './index.scss'
export default function Button({ onClick, children, isActive }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}