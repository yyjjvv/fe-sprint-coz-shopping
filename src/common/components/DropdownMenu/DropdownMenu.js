import { BrowserRouter, Link } from "react-router-dom";
// dependencies
import { GiftIcon, StarIcon } from "@heroicons/react/24/outline";
// styles
import styles from "./DropdownMenu.module.css";

const DropdownMenu = ({ handleCloseMenu }) => {
    return (
        // <BrowserRouter>
        <nav id={styles["nav"]}>
            <div className={styles.tail}></div>
            <ul className={styles.gnb}>
                <li>유지원님, 안녕하세요!</li>

                <li onClick={handleCloseMenu}>
                    <Link to="/products/list">
                        <GiftIcon width={20} height={20} />
                        상품리스트 페이지
                    </Link>
                </li>

                <li onClick={handleCloseMenu}>
                    <Link to="/bookmark">
                        <StarIcon width={20} height={20} />
                        북마크 페이지
                    </Link>
                </li>
            </ul>
        </nav>
        // </BrowserRouter>
    );
};

export default DropdownMenu;
