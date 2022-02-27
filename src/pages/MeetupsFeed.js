import MeetupList from "../components/meetups/MeetupList"
import { useEffect, useState } from 'react';

const MeetupsFeed = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://meetups-95ec2-default-rtdb.firebaseio.com/meetups.json')
            .then((res) => {
                return res.json();
            }).then((data) => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoaded(data);
            })
    }, []);

    if (isLoading) {
        <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <section>
            <h1>Feed</h1>
            <MeetupList meetups={loaded} />
        </section>
    )
}

export default MeetupsFeed