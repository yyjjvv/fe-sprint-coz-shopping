import { useState, useEffect } from "react";
// components
import ProductItem from "../components/ProductItem";
import ToastLists from "../components/ToastLists";
// assets
import imgAll from "../assets/category_all.png";
import imgProduct from "../assets/category_product.png";
import imgCategory from "../assets/category_category.png";
import imgExhibition from "../assets/category_exhibition.png";
import imgBrand from "../assets/category_brand.png";
// styles
import styles from "./Container.module.css";

const Bookmark = ({ bookmarkLists, setBookmarkLists }) => {
    const [selectedType, setSelectedType] = useState("All");
    const [filteredLists, setFilteredLists] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const [toastLists, setToastLists] = useState([]);
    let toastProperties = null;

    const categories = [
        { id: 1, imgUrl: imgAll, name: "전체", type: "All" },
        { id: 2, imgUrl: imgProduct, name: "상품", type: "Product" },
        { id: 3, imgUrl: imgCategory, name: "카테고리", type: "Category" },
        { id: 4, imgUrl: imgExhibition, name: "기획전", type: "Exhibition" },
        { id: 5, imgUrl: imgBrand, name: "브랜드", type: "Brand" },
    ];

    const showToast = (boolean) => {
        switch (boolean) {
            case false:
                toastProperties = {
                    id: toastLists.length + 1,
                    title: "off",
                    description: "상품이 북마크에서 제거되었습니다.",
                    color: "rgba(223, 223, 223, 0.81)",
                };
                break;
            case true:
                toastProperties = {
                    id: toastLists.length + 1,
                    title: "on",
                    description: "상품이 북마크에 추가되었습니다.",
                    color: "#ffd361",
                };
                break;
            default:
                toastProperties = [];
        }
        setToastLists([...toastLists, toastProperties]);
    };

    useEffect(() => {
        setFilteredLists(
            bookmarkLists.filter((item) =>
                selectedType === "All" ? true : item.type === selectedType
            )
        );
    }, [selectedType, bookmarkLists]);

    return (
        <main id={styles["main"]}>
            <ul className={styles["category-container"]}>
                {categories.map((filter) => (
                    <li
                        className={styles["category-item"]}
                        key={filter.id}
                        onClick={() => setSelectedType(filter.type)}
                    >
                        <img src={filter.imgUrl} alt={filter.name} />
                        <span
                            className={`${
                                selectedType === filter.type
                                    ? styles.active
                                    : ""
                            }`}
                        >
                            {filter.name}
                        </span>
                    </li>
                ))}
            </ul>
            <ul className={styles["products-list"]}>
                {filteredLists.map((item) => (
                    <ProductItem
                        key={item.id}
                        item={item}
                        bookmarkLists={bookmarkLists}
                        setBookmarkLists={setBookmarkLists}
                        showToast={showToast}
                    />
                ))}
            </ul>
            <ToastLists toastLists={toastLists} setToastLists={setToastLists} />
        </main>
    );
};

export default Bookmark;
