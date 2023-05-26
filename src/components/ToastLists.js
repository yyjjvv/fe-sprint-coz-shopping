import { useEffect, useCallback } from "react";

import Toast from "../common/components/Toast/Toast";

import styles from "./ToastLists.module.css";

const ToastLists = ({ toastLists, setToastLists }) => {
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
        <ul className={styles["toast-container"]}>
            {toastLists.map((toast, idx) => (
                <Toast
                    key={idx}
                    // toast={toast}
                    toastLists={toastLists}
                    setToastLists={setToastLists}
                    color={toast.color}
                    description={toast.description}
                />
            ))}
        </ul>
    );
};

export default ToastLists;
