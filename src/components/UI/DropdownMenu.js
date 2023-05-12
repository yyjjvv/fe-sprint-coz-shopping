import { Link } from "react-router-dom";
// dependencies
import styled from "styled-components";
import { GiftIcon, StarIcon } from "@heroicons/react/24/outline";

export const Gnb = styled.nav`
    position: absolute;
    top: 3.5rem;
    right: 3.2rem;
    display: flex;
    flex-direction: column;
    height: 8rem;
    .tail {
        width: 1.6rem;
        padding-top: 1.8rem;
        margin-left: 13rem;
        -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        background-color: #ffffff;
        box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
    }
    ul {
        display: flex;
        flex-direction: column;
        width: 20rem;
        height: 15rem;
        border-radius: 1.2rem;
        background-color: #ffffff;
        box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);

        > li {
            display: flex;
            align-items: center;
            padding-left: 2.4rem;
            height: 5rem;
            font-size: 1.6rem;
            &:not(:first-of-type) {
                border-top: 0.5px solid rgba(0, 0, 0, 0.1);
            }
        }
        a {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        svg {
            margin-right: 0.8rem;
        }
    }
`;

const DropdownMenu = ({ handleToggleMenu }) => {
    return (
        <Gnb>
            <div className="tail"></div>
            <ul>
                <li>유지원님, 안녕하세요!</li>
                <li onClick={handleToggleMenu}>
                    <Link to="/products/list">
                        <GiftIcon width={20} height={20} />
                        상품리스트 페이지
                    </Link>
                </li>
                <li onClick={handleToggleMenu}>
                    <Link to="/bookmark">
                        <StarIcon width={20} height={20} />
                        북마크 페이지
                    </Link>
                </li>
            </ul>
        </Gnb>
    );
};

export default DropdownMenu;
