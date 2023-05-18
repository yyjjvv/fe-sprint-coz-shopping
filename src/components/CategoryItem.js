import styles from "./CategoryItem.module.css";

const CategoryItem = ({ imgUrl, name, type, selectedType }) => {
    return (
        <li className={styles["category-item"]}>
            <img src={imgUrl} alt={name} />
            <span className={`${selectedType === type ? styles.active : ""}`}>
                {name}
            </span>
        </li>
    );
};

export default CategoryItem;
