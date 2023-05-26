// dependencies
import { XMarkIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
// styles
import styles from "./Modal.module.css";

const Modal = ({
    type,
    title,
    imgUrl,
    isBookmarked,
    handleCloseModal,
    handleToggleBookmark,
}) => {
    return (
        <div className={styles.modal}>
            <div
                className={styles["img-area"]}
                title={title}
                style={{
                    background: `url(${imgUrl}) no-repeat center`,
                    backgroundSize: "cover",
                }}
            >
                <button
                    className={styles["btn-close"]}
                    onClick={(e) => handleCloseModal(e)}
                >
                    <XMarkIcon width={24} height={24} fill={"#ffffff"} />
                </button>
                <div className={styles["title-area"]}>
                    <button
                        type="button"
                        onClick={(e) => handleToggleBookmark(e)}
                    >
                        <StarIcon
                            width={24}
                            height={24}
                            fill={
                                isBookmarked
                                    ? "#ffd361"
                                    : "rgba(223, 223, 223, 0.81)"
                            }
                        />
                    </button>
                    <h3>{type === "Category" ? "# " + title : title}</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;
