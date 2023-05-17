// dependencies
import styled from "styled-components";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";

export const ModalContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 10;
    .pic-area {
        position: relative;
        width: 74.4rem;
        height: 48rem;
        border-radius: 1.2rem;
    }
    button {
        padding: 0;
        cursor: pointer;
    }
    .btn-close {
        position: absolute;
        top: 2.4rem;
        right: 2.4rem;
        width: 2.4rem;
        height: 2.4rem;
    }
    .title-area {
        position: absolute;
        bottom: 2.4rem;
        left: 2.4rem;
        display: flex;
        h3 {
            margin-left: 0.8rem;
            font-size: 2.4rem;
            font-weight: 700;
            color: #ffffff;
        }
    }
`;

const Modal = ({
    type,
    title,
    imgUrl,
    isBookmarked,
    handleCloseModal,
    handleToggleBookmark,
}) => {
    return (
        <ModalContainer>
            <div
                className="pic-area"
                title={title}
                style={{
                    background: `url(${imgUrl}) no-repeat center`,
                    backgroundSize: "cover",
                }}
            >
                <button
                    className="btn-close"
                    onClick={(e) => handleCloseModal(e)}
                >
                    <XMarkIcon width={24} height={24} fill={"#ffffff"} />
                </button>
                <div className="title-area">
                    <button
                        type="button"
                        onClick={(e) => handleToggleBookmark(e)}
                    >
                        <StarIcon
                            width={24}
                            height={24}
                            fill={
                                isBookmarked
                                    ? "#ffd361"
                                    : "rgba(223, 223, 223, 0.81)"
                            }
                        />
                    </button>
                    <h3>{type === "Category" ? "# " + title : title}</h3>
                </div>
            </div>
        </ModalContainer>
    );
};

export default Modal;
