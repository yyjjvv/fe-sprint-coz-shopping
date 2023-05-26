import styles from "./LoadingSkeleton.module.css";

const LoadingSkeleton = () => {
    return (
        <ul className={styles["skeleton-container"]}>
            <li className={styles["skeleton-list"]}>
                <div className={styles.skeleton}></div>
                <p className={styles.skeleton}></p>
                <p className={styles.skeleton}></p>
            </li>
            <li className={styles["skeleton-list"]}>
                <div className={styles.skeleton}></div>
                <p className={styles.skeleton}></p>
                <p className={styles.skeleton}></p>
            </li>
            <li className={styles["skeleton-list"]}>
                <div className={styles.skeleton}></div>
                <p className={styles.skeleton}></p>
                <p className={styles.skeleton}></p>
            </li>
            <li className={styles["skeleton-list"]}>
                <div className={styles.skeleton}></div>
                <p className={styles.skeleton}></p>
                <p className={styles.skeleton}></p>
            </li>
        </ul>
    );
};
// animation ? `${styles.skeleton} ${styles.img}`: styles.img
export default LoadingSkeleton;
