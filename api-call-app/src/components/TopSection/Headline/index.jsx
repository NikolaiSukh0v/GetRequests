import ButtonYellow from '../../Common/ButtonYellow';
import  './HeadlineStyles/index.scss'
import TextTitle from '../../Common/TextTitle';
export default function Headline() {
  return (
    <>
      <div className='headline'>
        <div className='HeadlineContainer'>
 <div className='TopSectionHeadline'>
            <TextTitle children="Test assignment for front-end developer"></TextTitle>
        </div>
        <div className='MainSectionHeadline'>
          <p className='headline-text'>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
        </div>
        <div className='FooterSectionHeadline'>
          <ButtonYellow children='Sign Up'></ButtonYellow>
        </div>
        </div>
      </div>
    </>
  );
}
