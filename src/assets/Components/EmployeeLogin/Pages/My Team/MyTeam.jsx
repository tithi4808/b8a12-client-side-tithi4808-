import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MyTeam = () => {
  const { User } = useContext(AuthContext);
  const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);
  const loadeddata=useLoaderData()


  const[member,setmember]=useState("")
    
  const currentemail=User?.email
  useEffect(()=>{
    fetch('http://localhost:5000/fullteams')
    .then(res=>res.json())
    .then(data=>{
      const email=data.find(id=>id.email===User.email)
      setmember(email.email)
    })
  },[])

  useEffect(() => {
    const fetchUpcomingBirthdays = async () => {
      try {
        if (User?.email) {
          const response = await fetch('http://localhost:5000/fullteams');
          const data = await response.json();

          const currentMonthBirthdays = data.filter((member) => {
            if (member.DateOfBirth) {
              const birthDate = new Date(member.DateOfBirth);
              const currentDate = new Date();
              return (
                birthDate.getMonth() === currentDate.getMonth() &&
                birthDate.getDate() >= currentDate.getDate()
              );
            }
            return false;
          });

          setUpcomingBirthdays(currentMonthBirthdays);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUpcomingBirthdays();
  }, [User?.email]);

  return (
    <div >
    {
        User && member==currentemail? <div>

<div>
<h2 className='text-center text-4xl mb-10'>Upcoming Events</h2>
<div className='grid grid-cols-3 gap-10'>
{upcomingBirthdays.map((member) => (
  <div  key={member._id} className="card w-96  bg-base-100 shadow-xl">
  <figure><img className='w-36 h-36' src={member.image} alt="" /></figure>
  <div className="card-body">
    <h2 className="mt-2 text-center font-bold text-2xl">{member.name}</h2>
    <p>Birth Date : {member.DateOfBirth}</p>
    <p>{new Date().getDate() - new Date(member.DateOfBirth).getDate() >= 0 ? (
      <div>
        <p>Already Occurred</p>
      </div>
    ) : (
      <div>
        <p>Remaining Days: {new Date(member.DateOfBirth).getDate() - new Date().getDate()}</p>
      </div>
    )}</p>
    
  </div>
</div>
))}

</div>

<div className='my-20'>
  <h3 className='text-center text-4xl mb-10'>All Team Members</h3>
      <div className='grid grid-cols-3 gap-10'> 
      {
          loadeddata.map(data=><div key={data._id}>


              {/* <p>{data.name}</p>
              <p>{data.role}</p> */}

<div  key={data._id} className="card w-96  bg-base-100 shadow-xl">
  <figure><img className='h-36 w-36' src={data.image} alt="" /></figure>
  <div className="card-body">
    <h2 className="mt-2 text-center font-bold text-2xl">{data.name}</h2>
    <p>{data.role}</p>
    
  </div>
</div>


          </div>)
      }
      </div>
</div>
</div>
       


        </div>:<p className='text-4xl font-bold my-10'>OOPS!! You are not in the team.</p>
    }
    
</div>
  );
};

export default MyTeam;


{/* <div>
<h2>Upcoming Events</h2>
{upcomingBirthdays.map((member) => (
  <div key={member._id}>
    <img
      src={`URL_TO_FETCH_IMAGE/${member.name}.jpg`}
      alt={member.name}
    />
    <p>Name: {member.name}</p>
    <p>Date of Birth: {member.DateOfBirth}</p>
    {new Date().getDate() - new Date(member.DateOfBirth).getDate() >= 0 ? (
      <div>
        <p>Already Occurred</p>
      </div>
    ) : (
      <div>
        <p>Remaining Days: {new Date(member.DateOfBirth).getDate() - new Date().getDate()}</p>
      </div>
    )}
  </div>
))}


<div>
      {
          loadeddata.map(data=><div key={data._id}>


              <p>{data.name}</p>
              <p>{data.role}</p>


          </div>)
      }
</div>
</div> */}


{/* <div key={member._id}>
    <img
      src={`URL_TO_FETCH_IMAGE/${member.name}.jpg`}
      alt={member.name}
    />
    <p>Name: {member.name}</p>
    <p>Date of Birth: {member.DateOfBirth}</p>
    {new Date().getDate() - new Date(member.DateOfBirth).getDate() >= 0 ? (
      <div>
        <p>Already Occurred</p>
      </div>
    ) : (
      <div>
        <p>Remaining Days: {new Date(member.DateOfBirth).getDate() - new Date().getDate()}</p>
      </div>
    )}
  </div> */}
