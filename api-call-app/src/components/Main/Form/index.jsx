import TextTitle from '../../Common/TextTitle';
import Input from '../../Common/Input';
import Uploader from '../../Common/Uploader';
import ButtonYellow from '../../Common/ButtonYellow';
import CheckBoxes from '../../Common/CheckBoxes';
import './index.scss'
import axios from 'axios'
import {useState, useEffect} from 'react'
export default function Form() {
        const positions = [
        { id: 1, name: "Lawyer" },
        { id: 2, name: "Content manager" },
        { id: 3, name: "Security" },
        { id: 4, name: "Designer" }
    ];
    const [mail, setMail] =useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [position, setPosition] = useState('')
    const [error, setError] = useState('')
    const [photo, setPhoto] = useState(null);
    const [photoError, setPhotoError] = useState('');
    const [fileName, setFileName] = useState('');

const handlePhotoChange = (file) => {
        const maxFileSize = 5 * 1024 * 1024; 
        const minWidth = 70;
        const minHeight = 70;


        setPhotoError('');


        if (!['image/jpeg', 'image/jpg'].includes(file.type)) {
            setPhotoError('Photo must be a JPG/JPEG image.');
            setPhoto(null);
            setFileName('');
            return;
        }

        if (file.size > maxFileSize) {
            setPhotoError('Photo size must not exceed 5MB.');
            setPhoto(null);
            setFileName('');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                if (img.width < minWidth || img.height < minHeight) {
                    setPhotoError(`Photo resolution must be at least ${minWidth}x${minHeight}px.`);
                    setPhoto(null);
                    setFileName('');
                } else {
                    setPhoto(file);
                    setFileName(file.name);
                    setPhotoError('');
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };


    const handleMail = (val, e) =>{
        if(e===''){
        setMail(val)
        console.log(val, 'mail');
        }else {
            setError(e),
            console.log(e,'error during entaring mail');
            
        }

    }
const postNewUser = async () => {
    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', mail);
        formData.append('phone', phone);
        formData.append('position_id', position);
        formData.append('photo', photo); 

        const token = localStorage.getItem('Token');

        const response = await axios.post(
            `${import.meta.env.VITE_HOST_URL}/users`,
            formData,
            {
                headers: {
                    Token: token,
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

        console.log(response.data, 'response');
    } catch (error) {
        console.error('POST request failed:', error.response?.data || error.message);
    }
};
        const handleName = (val, e) =>{
        if(e===''){
        setName(val)
        console.log(val, 'name');
        }else {
            setError(e),
            console.log(e,'error during entaring name');
            
        }

    }
            const handlePhone = (val, e) =>{
        if(e===''){
        setPhone(val)
        console.log(val, 'name');
        }else {
            setError(e),
            console.log(e,'error during entaring name');
            
        }

    }
        const radioButton = (val) =>{
         const selectedPosition = positions.find(p => p.name === val);
         console.log(selectedPosition);
         
        if (selectedPosition) {
            setPosition(selectedPosition.id);
        }
        console.log(val, 'name');
    }

  return (
    <>
      <div className='formWrapper'>
        <div className='textTitle'>
          <TextTitle  children='Working with POST request'></TextTitle>
        </div>
        <div className='inputWrapper'>
          <Input onChangeValue={handleName} validation="name" placeholder='Your name' />
          <Input onChangeValue={handleMail} validation="email" placeholder='Email'/>
          <div className='phoneNumber'>
                <Input onChangeValue={handlePhone} validation="phone" placeholder='Phone' />
            <span className='number'>+38 (XXX) XXX - XX - XX</span>
          </div>
      
        </div>
        <div className='radioButtonsWrapper'>
          <h3 className='TitlePositionSelect'>Select your position</h3>
    <CheckBoxes getValue={radioButton} name='Frontend developer'/>
<CheckBoxes getValue={radioButton} name='Backend developer'/>
<CheckBoxes getValue={radioButton} name='Designer'/>
<CheckBoxes getValue={radioButton} name='QA'/>
        </div>
        <div className='uploaderWrapper'>
          <Uploader
                        onChangeValue={handlePhotoChange}
                        error={photoError}
                        fileName={fileName}
                    />
        </div>
        <div className='ButtonWrapperForm'>
          <ButtonYellow onClick={postNewUser} children="Sign up" />
        </div>
      </div>
    </>
  );
}
