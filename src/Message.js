import styles from './css/message.module.sass';

export function Message(props) {
    return (
        <div className={styles.message}>
            <p>{props.name}</p>
        </div>
    );
}