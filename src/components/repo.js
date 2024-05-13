
import { useEffect, useState} from 'react';

export default function Repo({repo}) {

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        if(repo !== null) {
            fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`)
            .then((response) => response.json())
            .then((data) => setLanguages(data));
        }
    }, [repo])

    console.log(languages)

    return (
        <div className='mt-4'>
            {repo && (
                <div>
                    <h1 className='text-3xl'>{repo.name}</h1>
                    <p>{repo.description}</p>
                    <p>Languages:</p>
                    <div className='flex flex-wrap'>
                        {languages && Object.keys(languages).map((language, i) => (
                            <p className='border-2 border-[#B5C18E] px-2 py-px text-[#B5C18E] font-semibold mr-2 rounded-full mt-2 text-sm' key={i}>{language}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}