import styles from "./LoadingSkeleton.module.css";

const LoadingSkeleton = () => {
    return (
        <ul className={styles["skeleton-container"]}>
            <li className={styles["skeleton-list"]}>
                <div className={`${styles.skeleton} ${styles.img}`}></div>
                <p className={`${styles.skeleton} ${styles.title}`}></p>
                <p className={`${styles.skeleton} ${styles.dec}`}></p>
            </li>
            <li className={styles["skeleton-list"]}>
                <div className={`${styles.skeleton} ${styles.img}`}></div>
                <p className={`${styles.skeleton} ${styles.title}`}></p>
                <p className={`${styles.skeleton} ${styles.dec}`}></p>
            </li>
            <li className={styles["skeleton-list"]}>
                <div className={`${styles.skeleton} ${styles.img}`}></div>
                <p className={`${styles.skeleton} ${styles.title}`}></p>
                <p className={`${styles.skeleton} ${styles.dec}`}></p>
            </li>
            <li className={styles["skeleton-list"]}>
                <div className={`${styles.skeleton} ${styles.img}`}></div>
                <p className={`${styles.skeleton} ${styles.title}`}></p>
                <p className={`${styles.skeleton} ${styles.dec}`}></p>
            </li>
        </ul>
    );
};

export default LoadingSkeleton;
