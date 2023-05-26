import { useState, useEffect, useRef } from "react";
// components
import ProductItem from "../components/ProductItem";
import ToastLists from "../components/ToastLists";
import LoadingSkeleton from "../common/components/LoadingSkeleton/LoadingSkeleton";
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
    const [isLoading, setIsLoading] = useState(true);
    const [toastLists, setToastLists] = useState([]);

    const [page, setPage] = useState(1);
    const target = useRef(null);
    const preventRef = useRef(true);

    let toastProperties = null;

    const categories = [
        { id: 1, imgUrl: imgAll, name: "전체", type: "All" },
        { id: 2, imgUrl: imgProduct, name: "상품", type: "Product" },
        { id: 3, imgUrl: imgCategory, name: "카테고리", type: "Category" },
        { id: 4, imgUrl: imgExhibition, name: "기획전", type: "Exhibition" },
        { id: 5, imgUrl: imgBrand, name: "브랜드", type: "Brand" },
    ];

    const callback = (entries) => {
        //옵저버 콜백함수
        const target = entries[0];
        if (target.isIntersecting && preventRef.current) {
            preventRef.current = false; //옵저버 중복 실행 방지
            setPage((prev) => prev + 1); //페이지 값 증가
        }
    };
    const observer = new IntersectionObserver(callback, {
        threshold: 1.0,
    });

    useEffect(() => {
        if (target.current) observer.observe(target.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        setFilteredLists(bookmarkLists.slice(0, 16));
        setPage(1);
    }, [bookmarkLists]);

    useEffect(() => {
        setFilteredLists(
            bookmarkLists
                .filter((item) =>
                    selectedType === "All" ? true : item.type === selectedType
                )
                .slice(0, 16)
        );
        setPage(1);
    }, [selectedType]);

    useEffect(() => {
        if (page !== 1) {
            getPost();
        }
    }, [page]);

    const timeoutRef = useRef(null);

    const getPost = () => {
        setIsLoading(true);
        // 이전에 예약된 setTimeout이 있으면 취소
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        // 1초 후에 setShowData를 실행하는 setTimeout 예약
        timeoutRef.current = setTimeout(() => {
            setFilteredLists((prev) => [
                ...prev,
                ...bookmarkLists
                    .filter((item) =>
                        selectedType === "All"
                            ? true
                            : item.type === selectedType
                    )
                    .slice((page - 1) * 16, page * 16),
            ]);
            preventRef.current = true;
            setIsLoading(false);
        }, 500);
    };

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

    // infinite scroll 적용 전
    // useEffect(() => {
    //     setFilteredLists(
    //         bookmarkLists.filter((item) =>
    //             selectedType === "All" ? true : item.type === selectedType
    //         )
    //     );
    // }, [selectedType, bookmarkLists]);

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
            <div ref={target}></div>
            {isLoading && <LoadingSkeleton />}
            <ToastLists toastLists={toastLists} setToastLists={setToastLists} />
        </main>
    );
};

export default Bookmark;
