import Card from "../layout/Card";
import styles from "./MeetupForm.module.css";
import { useRef } from 'react';
const MeetupForm = (props) => {
    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const image = imageRef.current.value;
        const address = addressRef.current.value;
        const description = descRef.current.value;

        const meetupData = {
            title: title,
            image: image,
            address: address,
            description: description
        }

        props.addMeetup(meetupData);
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.control}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' required id='title' ref={titleRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Image</label>
                    <input type='url' required id='image' ref={imageRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' rows='5' ref={descRef} />
                </div>
                <div className={styles.actions}>
                    <button>Add</button>
                </div>
            </form>
        </Card>
    )
}

export default MeetupForm