import Header from './Header'
import Headline from './Headline'
import './TopSectionStyles/index.scss'
export default function TopSection() {
  return (
    <div className="top-section">
      <div className="HeaderSection">
      <Header />
      </div>
      <div className='HeadlineSection'>
        <Headline />
      </div>


    </div>
  );
}