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
    }
`;
const BookmarkLists = ({ bookmarkLists, setBookmarkLists }) => {
    return (
        <ListsContainer>
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
                            />
                        ))
                ) : (
                    <div>error</div>
                )}
            </ul>
        </ListsContainer>
    );
};

export default BookmarkLists;
