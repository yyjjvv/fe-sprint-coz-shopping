import { useEffect, useCallback } from "react";

import { StarIcon } from "@heroicons/react/24/solid";
import styles from "./Toast.module.css";

const Toast = ({ toastLists, setToastLists, color, description }) => {
    const deleteToast = useCallback(
        (id) => {
            const toastListsItem = toastLists.filter(
                (toast) => toast.id !== id
            );
            setToastLists(toastListsItem);
        },
        [toastLists, setToastLists]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastLists.length) {
                deleteToast(toastLists[0].id);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [toastLists, deleteToast]);
    return (
        // <div className={styles.toast}>
        //     <StarIcon
        //         width={24}
        //         height={24}
        //         fill={toast ? "#ffd361" : "rgba(223, 223, 223, 0.81)"}
        //     />
        //     {toast ? (
        //         <span>상품이 북마크에 추가되었습니다.</span>
        //     ) : (
        //         <span>상품이 북마크에서 제거되었습니다.</span>
        //     )}
        // </div>
        <li className={styles.toast}>
            <StarIcon width={24} height={24} fill={color} />
            <span>{description}</span>
        </li>
    );
};

export default Toast;
