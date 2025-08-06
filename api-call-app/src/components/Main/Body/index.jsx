import TextTitle from '../../Common/TextTitle'
import CardBlock from '../CardBlock/index'
import ButtonYellow from '../../Common/ButtonYellow'
import './index.scss'
import {useState} from 'react'
export default function Body(){
    const [showMore, setShowMore] = useState(6)
// const handleClick=()=>{
// setShowMore(true)
// }
const handleClick =()=>{
    console.log(1);
    const currentUsers = showMore + 6
    setShowMore(currentUsers)
    
}

    return(
        <>
        <div className="Body">
            <div className="BodyTitle">
                <TextTitle children="Working with GET request"></TextTitle>
            </div>
            <div className="BodyCards">
            <CardBlock show={showMore}/>
            </div>
            <div className="buttonShowMore">
            <ButtonYellow onClick={handleClick}  children="Show more"></ButtonYellow>
            </div>
        </div>
        </>
    )
}