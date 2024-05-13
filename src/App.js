import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {

  const navigate = useNavigate();

  const [profileUrl, setProfileUrl] = useState('')
  const [username, setUsername] = useState('');

  async function serch() {
    const username = profileUrl.substring(profileUrl.lastIndexOf('/') + 1)
      if(username !== '') {
        navigate(`/results/${username}`)
      }
  }

  return (
    <div className="bg-[#F1F1F1] min-h-screen flex justify-center">
     <div className='m-auto w-screen align-center text-center  '>
       <input 
        placeholder='Github URL' 
        onChange={(e) => setProfileUrl(e.target.value)} 
        value={profileUrl} 
        className='w-[80%] max-w-[500px] bg-[#F1F1F1] border-2 border-[#B5C18E] p-2 rounded-full w-full px-6 py-2'
      />
       <button 
        onClick={() => serch()}
        className='w-32 ml-2 mt-6 bg-[#B5C18E] shaddow-lg shadow-[#B5C18E] text-[#141E46] p-2 rounded-full w-full'
      >
        Search
      </button>
     </div>
    </div>
  );
}
