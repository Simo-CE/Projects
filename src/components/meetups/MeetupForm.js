import Card from "../layout/Card";
import styles from "./MeetupForm.module.css"

const MeetupForm = () => {

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.control}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' required id='title' />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Image</label>
                    <input type='url' required id='image' />
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5'></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add</button>
                </div>
            </form>
        </Card>
    )
}

export default MeetupForm