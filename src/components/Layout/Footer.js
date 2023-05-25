import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer id={styles["footer"]}>
            <div>개인정보 처리방침 | 이용 약관</div>
            <div>All rights reserved @ Codestates</div>
        </footer>
    );
};

export default Footer;
