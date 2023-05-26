import { useState, useEffect } from "react";
// dependencies
import axios from "axios";
// components
import ProductLists from "../components/ProductLists";
import BookmarkLists from "../components/BookmarkLists";
import EmptyBookmark from "../common/components/EmptyBookmark/EmptyBookmark";
import ToastLists from "../components/ToastLists";
import LoadingSkeleton from "../common/components/LoadingSkeleton/LoadingSkeleton";
// styles
import styles from "./Container.module.css";

const Main = ({ bookmarkLists, setBookmarkLists }) => {
    const [productLists, setProductLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [toastLists, setToastLists] = useState([]);
    let toastProperties = null;

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
            .get(
                "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
            )
            .then((res) => {
                setProductLists(res.data);
                setIsLoading(false);
            });
    }, []);
    // useEffect(() => {
    //     fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(response.statusText);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setIsLoading(true);
    //             setProductLists(data);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => console.error(error));
    // }, []);

    return (
        <main id={styles["main"]}>
            <h2>상품 리스트</h2>
            <ProductLists
                productLists={productLists}
                bookmarkLists={bookmarkLists}
                setBookmarkLists={setBookmarkLists}
                showToast={showToast}
            />
            {isLoading && <LoadingSkeleton />}
            <h2>북마크 리스트</h2>
            {bookmarkLists.length !== 0 ? (
                <BookmarkLists
                    bookmarkLists={bookmarkLists}
                    setBookmarkLists={setBookmarkLists}
                    showToast={showToast}
                />
            ) : (
                <EmptyBookmark />
            )}

            <ToastLists toastLists={toastLists} setToastLists={setToastLists} />
        </main>
    );
};

export default Main;
