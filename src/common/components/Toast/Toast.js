import { useEffect, useCallback } from "react";

import { StarIcon } from "@heroicons/react/24/solid";
import styles from "./Toast.module.css";

const Toast = ({ color, description }) => {
    return (
        <li className={styles.toast}>
            <StarIcon width={24} height={24} fill={color} />
            <span>{description}</span>
        </li>
    );
};

export default Toast;
