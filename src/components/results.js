import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Repo from './repo';


export default function Results() {

  const location = useLocation();
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if(location) {
      let tmp = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
      setUsername(tmp) ;
  }
  }, [location.pathname])

  useEffect(() => {
    if(username !== '') {
      fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    } 
  },[username])

  useEffect(() => {
    if(data !== null) {
      fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data));
    }
  }, [data])


  return(
    <div className='m-[10%]'>
      {data && 
        <div>
          <div className='flex justify-end'>
            <p className='w-fit mb-12 bg-[#B5C18E] px-4 py-px rounded-full text-[#F1F1F1] text-lg font-semibold'>{data.followers} followers</p>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img className='w-32 h-32 rounded-full border-2 border-black' src={data.avatar_url} />
            <p className='text-3xl font-semibold mt-4'>{data.name}</p>
            <p className='text-xl font-medium'>{data.location}</p>
            <p className='text-lg mt-4'>{data.bio}</p>
          </div>
          <div className='mt-24'>
            {
              repos.map((repo) => (
                <div>
                  {repo.private === false && 
                    <Repo repo={repo} />
                  }
                </div>
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}