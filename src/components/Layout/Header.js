import { Link } from "react-router-dom";
// components
import DropdownMenu from "../UI/DropdownMenu";
// dependencies
import styled from "styled-components";
import { Bars3Icon } from "@heroicons/react/24/solid";
// img
import logo from "../../assets/logo.png";
export const HeaderContainer = styled.header`
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 128rem;
        padding: 0 8rem;
    }

    .logo {
        display: flex;
        align-items: center;
        img {
            display: block;
            width: 5.5rem;
            height: 3rem;
            margin-right: 1.2rem;
        }
        span {
            font-size: 3.2rem;
            font-weight: 700;
        }
    }
`;
const Header = () => {
    return (
        <HeaderContainer>
            <div className="header-wrapper">
                <Link to="/">
                    <h1 className="logo">
                        <img src={logo} alt="logo" />
                        <span>COZ Shopping</span>
                    </h1>
                </Link>
                <div className="gnb-btn">
                    <Bars3Icon width={40} />
                </div>
            </div>
            {/* <DropdownMenu /> */}
        </HeaderContainer>
    );
};

export default Header;
