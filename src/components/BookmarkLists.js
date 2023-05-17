// components
import ProductItem from "./ProductItem";
// styles
import styles from "./BookmarkLists.module.css";

const BookmarkLists = ({ bookmarkLists, setBookmarkLists, showToast }) => {
    return (
        <section class={styles["bookmark-lists"]}>
            <h2>북마크 리스트</h2>
            <ul>
                {bookmarkLists && bookmarkLists.length !== 0 ? (
                    bookmarkLists
                        .slice(0, 4)
                        .map((item) => (
                            <ProductItem
                                key={item.id}
                                item={item}
                                bookmarkLists={bookmarkLists}
                                setBookmarkLists={setBookmarkLists}
                                showToast={showToast}
                            />
                        ))
                ) : (
                    <div>error</div>
                )}
            </ul>
        </section>
    );
};

export default BookmarkLists;
