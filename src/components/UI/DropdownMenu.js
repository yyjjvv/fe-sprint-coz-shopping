import { Link } from "react-router-dom";

const DropdownMenu = () => {
    return (
        <div id="menu">
            <span>유지원님, 안녕하세요!</span>
            <Link to="/products/list">상품리스트 페이지</Link>
            <Link to="/bookmark">북마크 페이지</Link>
        </div>
    );
};

export default DropdownMenu;
