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

const ProductLists = ({ productLists, bookmarkLists, setBookmarkLists }) => {
    const handleBookmark = (item) => {
        if (bookmarkLists) {
            return bookmarkLists.some((x) => x.id === item.id);
        } else {
            return false;
        }
    };

    return (
        <ListsContainer>
            <h2>상품 리스트</h2>
            <ul>
                {productLists.map((item) => (
                    <ProductItem
                        key={item.id}
                        item={item}
                        handleBookmark={handleBookmark(item)}
                        bookmarkLists={bookmarkLists}
                        setBookmarkLists={setBookmarkLists}
                    />
                ))}
            </ul>
        </ListsContainer>
    );
};

export default ProductLists;
