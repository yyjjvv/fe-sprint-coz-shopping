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
        justify-content: space-between;
    }
`;

const ProductLists = ({ products, isLoading }) => {
    const productArr = products.slice(0, 4);
    console.log(productArr);
    return (
        <ListsContainer>
            <h2>상품 리스트</h2>
            <ul>
                {productArr.map((item) => (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        title={item.title}
                        // brandName={item.brandName}
                        brandName={item["brand_name"]}
                        // subTitle={item.subTitle}
                        subTitle={item["sub_title"]}
                        // imgUrl={item.imgUrl}
                        imgUrl={item["image_url"]}
                        // brandImgUrl={item.brandImgUrl}
                        brandImgUrl={item["brand_image_url"]}
                        price={item.price}
                        discountPercentage={item.discountPercentage}
                        follower={item.follower}
                        isLoading={isLoading}
                    />
                ))}
            </ul>
        </ListsContainer>
    );
};

export default ProductLists;
