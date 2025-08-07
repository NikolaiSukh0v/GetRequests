import TextTitle from '../Common/TextTitle/index'
import CardBlock from './CardBlock/index'
import Form from './Form'
import { useState } from 'react'
import ButtonYellow from '../Common/ButtonYellow'
import './MainStyles/index.scss'

export default function Main() {
  const [showMore, setShowMore] = useState(6)
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const [totalPages, setTotalPages] = useState(null)
  const handleClick = () => {
    setShowMore(prev => prev + 6)
  }

  const update = () => {
    setRefreshTrigger(prev => prev + 1)
  }

  const handleUpdate = (e) => {
    if (e === true) {
      setShowMore(6)
      update()
    }
  }
  const handlePagesLoaded = (pages) => {
    setTotalPages(pages)
  }
  return (
    <>
      <div className="Main">
        <div className="Body">
          <div className="BodyTitle">
            <TextTitle>Working with GET request</TextTitle>
          </div>
          <div className="BodyCards">
            <CardBlock show={showMore} update={refreshTrigger} />
          </div>
          <div className="buttonShowMore">
                 <ButtonYellow
              onClick={handleClick}
              isDisabled={totalPages === 1}
            >Show more</ButtonYellow>
          </div>
        </div>
      </div>
      <div className="Form">
        <Form isUpdate={handleUpdate} />
      </div>
    </>
  )
}
