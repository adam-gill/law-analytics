import React from 'react';
import PersonCard from '@/components/ui/Person';

interface contactProps {
    
}

const contact: React.FC<contactProps> = () => {

    const team: { index: number, name: string; linkedIn: string; img: string; }[] = [
        {index: 0, name: "Daniel Ha", linkedIn: "https://www.linkedin.com/in/daniel-ha-554ba8180/", img: "https://bcampdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3eba391-ed29-4ab2-894d-a1d1a71754ad%2F5a99d09f-491e-4cf6-b59e-b2972281b168%2FUntitled.png?table=block&id=0ec1c1d4-00f0-4880-9ae7-010262ef02b7&spaceId=d3eba391-ed29-4ab2-894d-a1d1a71754ad&width=480&userId=&cache=v2"},
        {index: 1, name: "Sam Turner", linkedIn: "https://www.linkedin.com/in/samturner1031/", img: "https://bcampdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3eba391-ed29-4ab2-894d-a1d1a71754ad%2F93eae749-4d3d-42e8-8c5f-d4ed703f7c8c%2FUntitled.png?table=block&id=f7fca3ac-13f3-4ce2-ba0e-213330d1a2ec&spaceId=d3eba391-ed29-4ab2-894d-a1d1a71754ad&width=920&userId=&cache=v2"},
        {index: 2, name: "Adam Gill", linkedIn: "https://www.linkedin.com/in/adam-gill-614346264", img: "https://bcampdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3eba391-ed29-4ab2-894d-a1d1a71754ad%2F23b94080-fca0-45dd-bc07-8c95abb0141f%2FUntitled.png?table=block&id=b189ce17-7ae1-4887-825c-e19f9c6d4b97&spaceId=d3eba391-ed29-4ab2-894d-a1d1a71754ad&width=770&userId=&cache=v2"},
        {index: 3, name: "Daniel Bird", linkedIn: "https://www.linkedin.com/in/danielbirdjr/", img: "https://bcampdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3eba391-ed29-4ab2-894d-a1d1a71754ad%2F091185a9-8418-4afa-9f23-1ef100076bab%2FUntitled.png?table=block&id=859cdd4d-dad0-4e60-9fac-c295f75da269&spaceId=d3eba391-ed29-4ab2-894d-a1d1a71754ad&width=580&userId=&cache=v2"},
        {index: 4, name: "Weilin Cheng", linkedIn: "https://www.linkedin.com/in/willie-cheng-8557641b3/", img: "https://bcampdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3eba391-ed29-4ab2-894d-a1d1a71754ad%2F582053e7-3d3b-417f-a96c-4cf376916619%2FUntitled.png?table=block&id=e6e306c0-174c-44b3-a739-ecc66731031d&spaceId=d3eba391-ed29-4ab2-894d-a1d1a71754ad&width=670&userId=&cache=v2"},
        {index: 5, name: "Sim Pannu", linkedIn: "https://www.linkedin.com/in/simarjit-singh-pannu-1b0049228/", img: "https://bcampdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd3eba391-ed29-4ab2-894d-a1d1a71754ad%2F106206a2-e7db-423f-a880-c36bf17ff705%2FUntitled.png?table=block&id=245b5fc1-9f62-4311-b4b3-6a451f6be5db&spaceId=d3eba391-ed29-4ab2-894d-a1d1a71754ad&width=770&userId=&cache=v2"},
    ];

    return (
        <div className='content-stretch items-center justify-center flex-col max-w-md m-0 mx-auto flex-wrap grid grid-cols-3 gap-8'>
            {team.map((person) => (<PersonCard key={person.index} person={person}/>))}
        </div>
    );
};

export default contact;