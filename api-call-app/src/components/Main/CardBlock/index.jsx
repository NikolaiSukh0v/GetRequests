import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../Common/Card/index';
import './CardBlockStyles/index.scss'
export default function CardBlock({show, update, onPagesLoaded}) {
  const [token, setToken] = useState(null);
  const [users, setUsers] = useState([]);

 useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_HOST_URL}/token`)
        const token = response.data.token
        setToken(token)
        localStorage.setItem('Token', token)
      } catch (error) {
        console.error('Error fetching token:', error)
      }
    }

    fetchToken()
  }, [])

  useEffect(() => {
    if (!token) return

    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_HOST_URL}/users?count=${show}`, {
          headers: { Token: token },
        })
        setUsers(response.data.users)
                if (onPagesLoaded && typeof onPagesLoaded === 'function') {
          onPagesLoaded(response.data.total_pages)
        }
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [token, show, update])

    // async function showMore(){
    //   if(showNext === true){
    //     try{
    //     const response = await axios.get(`${import.meta.env.VITE_HOST_URL}/users?count=6`, {
    //       headers: {
    //         Token: token,
    //       },
    //     });
    //     setUsers(response.data.users);
            
    //     }catch (err){
    //         console.log(err);
            
    //     }
    //   }
    // }
  return (
    <>
      {users.map(user => (
        <Card
          key={user.id}
          Avatar={user.photo}
          userName={user.name}
          Specialization={user.position}
          Adress={user.email}
          Contacts={user.phone}
        />
      ))}
    </>
  );
}
