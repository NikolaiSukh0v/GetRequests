import './index.scss'
export default function Card({ Avatar, userName, Specialization, Adress, Contacts }) {
  return (
    <div className="CardBody">
      <div className="avatar">
        <img id='avatar' src={Avatar} alt={userName} />
                    <div className="userFullName">
        <span className='textSpan'>{userName}</span>
      </div>
      </div>

      <div className='descriptionsWrapper'>

      <div className="userSpecialization">
        <span className='Specialization'>{Specialization}</span>
      </div>
      <div className="userAdress">
        <span className='Adress'>{Adress}</span>
      </div>
      <div className="userContacts">
        <span>{Contacts}</span>
      </div>
      </div>
    </div>
  );
}
