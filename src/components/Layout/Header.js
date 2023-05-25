import { useState } from "react";
import { Link } from "react-router-dom";
// components
import DropdownMenu from "../UI/DropdownMenu";
// dependencies
import { Bars3Icon } from "@heroicons/react/24/solid";
// style
import styles from "./Header.module.css";
// img
import logo from "../../assets/logo.png";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu((prevState) => !prevState);
    };

    return (
        <header id={styles["header"]}>
            <div className={styles["header-wrapper"]}>
                <Link to="/">
                    <h1 className={styles.logo} onClick={handleToggleMenu}>
                        <img src={logo} alt="logo" />
                        <span>COZ Shopping</span>
                    </h1>
                </Link>
                <div className={styles["gnb-btn"]} onClick={handleToggleMenu}>
                    <Bars3Icon width={40} />
                </div>
                {toggleMenu && (
                    <DropdownMenu handleToggleMenu={handleToggleMenu} />
                )}
            </div>
        </header>
    );
};

export default Header;
