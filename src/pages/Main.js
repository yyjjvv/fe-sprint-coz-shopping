import { useState, useEffect } from "react";
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
        <MainContainer>
            <ProductLists
                productLists={productLists}
                bookmarkLists={bookmarkLists}
                setBookmarkLists={setBookmarkLists}
            />
            <BookmarkLists
                bookmarkLists={bookmarkLists}
                setBookmarkLists={setBookmarkLists}
            />
        </MainContainer>
    );
};

export default Main;
