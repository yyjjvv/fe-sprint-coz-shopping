import { useState, useEffect } from "react";
// dependencies
import styled from "styled-components";
import { StarIcon } from "@heroicons/react/24/solid";

import Modal from "./UI/Modal";

export const ItemContainer = styled.li`
    width: calc((100% - 7.2rem) / 4);
    &:not(:first-of-type) {
        margin-left: 2.4rem;
    }
    .img-area {
        position: relative;
        height: 21rem;
        min-height: 21rem;
        border-radius: 1.2rem;
    }
    .bookmark {
        position: absolute;
        bottom: 12px;
        right: 12px;
        cursor: pointer;
    }

    .dec-area {
        display: flex;
        justify-content: space-between;
    }
    .dec-left {
        h3 {
            margin-top: 0.6rem;
            font-size: 1.6rem;
            font-weight: 800;
            line-height: 1.2;
        }
        p {
            font-size: 1.6rem;
            line-height: 1.2;
        }
    }
    .dec-right {
        text-align: end;
        strong {
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 1.2;
        }
        p {
            font-size: 1.6rem;
            line-height: 1.2;
        }
    }
`;

const ProductItem = ({ item, bookmarkLists, setBookmarkLists }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    console.log(bookmarkLists);

    const Type = {
        PRODUCT: "Product",
        CATEGORY: "Category",
        EXHIBITION: "Exhibition",
        BRAND: "Brand",
    };

    const { PRODUCT, CATEGORY, EXHIBITION, BRAND } = Type;

    const handleShowModal = () => {
        setIsVisible(true);
    };

    const handleCloseModal = (e) => {
        e.stopPropagation();
        setIsVisible(false);
    };

    const handleToggleBookmark = (e) => {
        e.stopPropagation();
        setIsBookmarked((prev) => !prev);
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
        <ItemContainer onClick={handleShowModal}>
            <div
                className="img-area"
                title={item.title}
                style={{
                    background: `url(${
                        item.image_url ? item.image_url : item.brand_image_url
                    }) no-repeat center`,
                    backgroundSize: "cover",
                }}
            >
                <button
                    type="button"
                    className="bookmark"
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
            <div className="dec-area">
                <div className="dec-left">
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
                    <div className="dec-right">
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
        </ItemContainer>
    );
};

export default ProductItem;
