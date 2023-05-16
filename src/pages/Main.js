// dependencies
import styled from "styled-components";
// components
import ProductLists from "../components/ProductLists";
import BookmarkLists from "../components/BookmarkLists";

export const MainContainer = styled.main`
    width: 100%;
    max-width: 128rem;
    margin: 8rem auto 0;
    padding: 2.4rem 8rem;
`;

const Main = ({ products, setProducts }) => {
    return (
        <MainContainer>
            <ProductLists setProducts={setProducts} />
            <BookmarkLists products={products} setProducts={setProducts} />
        </MainContainer>
    );
};

export default Main;
