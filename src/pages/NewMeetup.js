import { useNavigate } from 'react-router-dom';
import MeetupForm from '../components/meetups/MeetupForm';

const NewMeetup = () => {
  const history = useNavigate();

  const handleMeetup = (meetupData) => {
    fetch('https://meetups-95ec2-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => {
      history('/home');
      console.log('New meetup added')
    })
  }

  return (
    <section>
      <h1>Add</h1>
      <MeetupForm addMeetup={handleMeetup} />
    </section>

  )
}

export default NewMeetup