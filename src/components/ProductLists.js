import { useState, useEffect } from "react";
// dependencies
import styled from "styled-components";
// components
import ProductItem from "./ProductItem";

export const ListsContainer = styled.section`
    h2 {
        margin-bottom: 1.2rem;
        font-size: 2.4rem;
        font-weight: 600;
        line-height: 1.25;
    }
    ul {
        display: flex;
        /* justify-content: space-between; */
    }
`;

const ProductLists = ({ setProducts }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [productList, setProductList] = useState([]);

    const getRequestProductList = () => {
        return fetch(
            "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                setIsLoading(true);
                setProductList(data);
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getRequestProductList();
    }, []);

    return (
        <ListsContainer>
            <h2>상품 리스트</h2>
            <ul>
                {productList.map((item) => (
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
                ))}
            </ul>
        </ListsContainer>
    );
};

export default ProductLists;
