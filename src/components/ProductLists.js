// components
import ProductItem from "./ProductItem";
// styles
import styles from "./ProductLists.module.css";

const ProductLists = ({
    productLists,
    bookmarkLists,
    setBookmarkLists,
    showToast,
}) => {
    const handleBookmark = (item) => {
        if (bookmarkLists) {
            return bookmarkLists.some((x) => x.id === item.id);
        } else {
            return false;
        }
    };

    return (
        <section className={styles["product-lists"]}>
            {/* <h2>상품 리스트</h2> */}
            <ul>
                {productLists.map((item) => (
                    <ProductItem
                        key={item.id}
                        item={item}
                        handleBookmark={handleBookmark(item)}
                        bookmarkLists={bookmarkLists}
                        setBookmarkLists={setBookmarkLists}
                        showToast={showToast}
                    />
                ))}
            </ul>
        </section>
    );
};

export default ProductLists;
