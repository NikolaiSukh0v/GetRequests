import './index.scss'
import useState from 'react'
export default function CheckBoxes({name, getValue}){
    const handleChange= (e)=>{
        const val = e.target.value
        getValue(val)
    }
    return(
        <>
        <div className="CheckBox">
              <div class="radio">

             <input onChange={handleChange} type="radio" name="position" className="radioButton" id={name} value={name} />
      <label htmlFor={name}class="radio-label">{name}</label>
        </div>
        </div>
        </>
    )
}