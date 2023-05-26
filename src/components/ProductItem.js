import { useState, useEffect } from "react";
// dependencies
import { StarIcon } from "@heroicons/react/24/solid";
// components
import Modal from "../common/components/Modal/Modal";
// styles
import styles from "./ProductItem.module.css";
// enums
import { Type } from "../common/enums/list-type";

const ProductItem = ({ item, bookmarkLists, setBookmarkLists, showToast }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // const Type = Object.freeze({
    //     PRODUCT: "Product",
    //     CATEGORY: "Category",
    //     EXHIBITION: "Exhibition",
    //     BRAND: "Brand",
    // });

    const { PRODUCT, CATEGORY, EXHIBITION, BRAND } = Type;

    const handleShowModal = () => {
        setIsVisible(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseModal = (e) => {
        e.stopPropagation();
        setIsVisible(false);
        document.body.style.overflow = "auto";
    };

    const handleToggleBookmark = (e) => {
        e.stopPropagation();
        setIsBookmarked((prev) => !prev);
        showToast(!isBookmarked);
        const bookmark = bookmarkLists || [];
        const isExistingItem =
            bookmark.findIndex((data) => data.id === item.id) !== -1;
        if (!isExistingItem) {
            setBookmarkLists([...bookmark, item]);
        } else {
            setBookmarkLists(
                bookmark.filter((data) => {
                    return data.id !== item.id;
                })
            );
            document.body.style.overflow = "auto";
        }
    };

    useEffect(() => {
        const bookmark = bookmarkLists || [];
        const isExistingItem =
            bookmark.findIndex((data) => data.id === item.id) !== -1;
        if (!isExistingItem) {
            setIsBookmarked(false);
        } else {
            setIsBookmarked(true);
        }
        localStorage.setItem("bookmarkLists", JSON.stringify(bookmarkLists));
    }, [bookmarkLists, item.id]);

    return (
        <>
            {isVisible && (
                <Modal
                    type={item.type}
                    title={item.title || item.brand_name}
                    imgUrl={item.image_url || item.brand_image_url}
                    handleCloseModal={handleCloseModal}
                    isBookmarked={isBookmarked}
                    setIsBookmarked={setIsBookmarked}
                    handleToggleBookmark={handleToggleBookmark}
                />
            )}
            <li className={styles["product-list"]} onClick={handleShowModal}>
                <div
                    className={styles["img-area"]}
                    title={item.title}
                    style={{
                        background: `url(${
                            item.image_url
                                ? item.image_url
                                : item.brand_image_url
                        }) no-repeat center`,
                        backgroundSize: "cover",
                    }}
                >
                    <button
                        type="button"
                        className={styles.bookmark}
                        onClick={(e) => {
                            handleToggleBookmark(e);
                        }}
                    >
                        <StarIcon
                            width={24}
                            height={24}
                            fill={
                                isBookmarked
                                    ? "#ffd361"
                                    : "rgba(223, 223, 223, 0.81)"
                            }
                        />
                    </button>
                </div>
                <div className={styles["dec-area"]}>
                    <div className={styles["dec-left"]}>
                        <h3>
                            {item.type === CATEGORY
                                ? "# " + item.title
                                : item.type === BRAND
                                ? item.brand_name
                                : item.title}
                        </h3>
                        <p>{item.type === EXHIBITION ? item.sub_title : ""}</p>
                    </div>
                    {(item.type === PRODUCT || item.type === BRAND) && (
                        <div className={styles["dec-right"]}>
                            <strong
                                style={
                                    item.type === PRODUCT
                                        ? { color: "#452CDD" }
                                        : { color: "#000000" }
                                }
                            >
                                {item.type === PRODUCT
                                    ? ` ${item.discountPercentage}%`
                                    : "관심고객수"}
                            </strong>
                            <p>
                                {item.type === PRODUCT
                                    ? `${Number(item.price).toLocaleString(
                                          "ko-KR"
                                      )}원`
                                    : item.follower.toLocaleString("ko-KR")}
                            </p>
                        </div>
                    )}
                </div>
            </li>
        </>
    );
};

export default ProductItem;
