import { useState, useEffect } from "react";
// dependencies
import axios from "axios";
// componenets
// import Category from "../components/Category";
// import CategoryItem from "../components/CategoryItem";
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

const ProductsList = ({ bookmarkLists, setBookmarkLists }) => {
    const [selectedType, setSelectedType] = useState("All");
    const [productLists, setProductLists] = useState([]);
    const [filteredLists, setFilteredLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(true);
        axios
            .get("http://cozshopping.codestates-seb.link/api/v1/products")
            .then((res) => {
                setProductLists(res.data);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        setFilteredLists(
            productLists.filter((item) =>
                selectedType === "All" ? true : item.type === selectedType
            )
        );
    }, [selectedType, productLists]);

    return (
        <main id={styles["main"]}>
            {/* <Category
                categories={categories}
                selectedType={selectedType}
                handleCategoryFilter={handleCategoryFilter}
            /> */}
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
                    // <CategoryItem
                    //     onClick={() => setSelectedType(filter.type)}
                    //     key={filter.id}
                    //     imgUrl={filter.imgUrl}
                    //     name={filter.name}
                    //     type={filter.type}
                    //     selectedType={selectedType}
                    // />
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
            <ToastLists
                // toast={toast}
                toastLists={toastLists}
                setToastLists={setToastLists}
            />
        </main>
    );
};

export default ProductsList;
