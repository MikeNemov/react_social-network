import styles from "./css/message.module.sass";

export function Message({author, text}) {
    return <h1 className={styles.message}>{author}: {text} </h1>;
}
