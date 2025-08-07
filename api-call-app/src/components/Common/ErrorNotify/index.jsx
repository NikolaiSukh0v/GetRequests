import { useEffect } from 'react'
import './index.scss'
export default function ErrorNotify({ message, onClose }){
 useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div className="error-modal__backdrop" onClick={onClose}>
      <div className="error-modal__content" onClick={(e) => e.stopPropagation()}>
        <h2>Error</h2>
        <p>{message}</p>
        <button className="error-modal__close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
