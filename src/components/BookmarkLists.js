import { useState, useEffect } from "react";
// dependencies
import styled from "styled-components";
// components
import ProductItem from "./ProductItem";

export const ListsContainer = styled.section`
    margin-top: 1.2rem;
    h2 {
        margin-bottom: 1.2rem;
        font-size: 2.4rem;
        font-weight: 600;
        line-height: 1.25;
    }
    ul {
        display: flex;
        list-style: none;
        overflow: hidden;
        /* justify-content: space-between; */
    }
`;
const BookmarkLists = ({ products, setProducts }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        setProductList([...products]);
        setIsLoading(false);
    }, [products]);

    return (
        <ListsContainer>
            <h2>북마크 리스트</h2>
            <ul>
                {productList.map((item) =>
                    item.bookmark === true ? (
                        <ProductItem
                            key={item.id}
                            id={item.id}
                            type={item.type}
                            title={item.title}
                            brandName={item["brand_name"]}
                            subTitle={item["sub_title"]}
                            imgUrl={item["image_url"]}
                            brandImgUrl={item["brand_image_url"]}
                            price={item.price}
                            discountPercentage={item.discountPercentage}
                            follower={item.follower}
                            bookmark={item.bookmark}
                            isLoading={isLoading}
                            setProducts={setProducts}
                        />
                    ) : null
                )}
            </ul>
        </ListsContainer>
    );
};

export default BookmarkLists;
