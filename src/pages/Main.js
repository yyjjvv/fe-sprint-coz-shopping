// dependencies
import styled from "styled-components";
// components
import ProductLists from "../components/ProductLists";
import BookmarkLists from "../components/BookmarkLists";

export const MainContainer = styled.main`
    width: 100%;
    max-width: 128rem;
    margin: 0 auto;
    padding: 2.4rem 8rem;
`;

const Main = ({ products, isLoading }) => {
    return (
        <MainContainer>
            <ProductLists products={products} isLoading={isLoading} />
            <BookmarkLists />
        </MainContainer>
    );
};

export default Main;
