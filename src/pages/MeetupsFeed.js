import MeetupList from "../components/meetups/MeetupList"

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://media.istockphoto.com/photos/casablanca-mosque-picture-id544676786?k=20&m=544676786&s=612x612&w=0&h=yxMfcOWTxIDJy98vfLl57g8kYcC_GwagrPzCxXI5fC0=',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
]


const MeetupsFeed = () => {
    return (
        <section>
            <h1>Feed</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    )
}

export default MeetupsFeed