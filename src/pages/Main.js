import { useState, useEffect } from "react";
// components
import ProductLists from "../components/ProductLists";
import BookmarkLists from "../components/BookmarkLists";
// styles
import styles from "./Container.module.css";

const Main = ({ bookmarkLists, setBookmarkLists }) => {
    const [productLists, setProductLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                setIsLoading(true);
                setProductLists(data);
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
        // .then((res) => res.json())
        // .then((data) => {
        //     setProductLists(data);
        // });
    }, []);

    return (
        <main id={styles["main"]}>
            <ProductLists
                productLists={productLists}
                bookmarkLists={bookmarkLists}
                setBookmarkLists={setBookmarkLists}
            />
            <BookmarkLists
                bookmarkLists={bookmarkLists}
                setBookmarkLists={setBookmarkLists}
            />
        </main>
    );
};

export default Main;
