// dependencies
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
// styles
import styles from "./EmptyBookmark.module.css";

const EmptyBookmark = () => {
    return (
        <section className={styles["empty-bookmark"]}>
            <ArchiveBoxXMarkIcon width={120} height={120} />
            <h2>북마크가 비어있습니다.</h2>
        </section>
    );
};

export default EmptyBookmark;
