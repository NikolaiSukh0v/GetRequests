import './TitleStyles/index.scss'
export default function TextTitle({children}){
return(
    <>
    <div className="TitleContainer">
 <h2 className="titleText">{children}</h2>
    </div>
   
    </>
)
}