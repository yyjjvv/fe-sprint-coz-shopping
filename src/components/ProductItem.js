import { useState } from "react";
import styled from "styled-components";
import { StarIcon } from "@heroicons/react/24/solid";

export const ItemContainer = styled.li`
    width: calc((100% - 7.2rem) / 4);
    .img-area {
        position: relative;
        height: 21rem;
        min-height: 21rem;
        border-radius: 1.2rem;
    }
    input[type="checkbox"] {
        display: none;
    }
    label {
        position: absolute;
        bottom: 12px;
        right: 12px;
        svg {
            fill: rgba(223, 223, 223, 0.81);
        }
    }
    input[type="checkbox"]:checked + label {
        svg {
            fill: #ffd361;
        }
    }

    .dec-area {
        display: flex;
        justify-content: space-between;
    }
    .dec-left {
        h3 {
            margin-top: 0.6rem;
            font-size: 1.6rem;
            font-weight: 800;
            line-height: 1.2;
        }
        p {
            font-size: 1.6rem;
            line-height: 1.2;
        }
    }
    .dec-right {
        text-align: end;
        strong {
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 1.2;
        }
        p {
            font-size: 1.6rem;
            line-height: 1.2;
        }
    }
`;

const ProductItem = (props) => {
    const [bookmark, setBookmark] = useState(false);
    return (
        <ItemContainer>
            <div
                className="img-area"
                title={props.title}
                style={{
                    background: `url(${
                        props.imgUrl ? props.imgUrl : props.brandImgUrl
                    }) no-repeat center`,
                    backgroundSize: "cover",
                }}
            >
                <input
                    type="checkbox"
                    id={props.title}
                    onChange={() => setBookmark(!bookmark)}
                />
                <label htmlFor={props.title}>
                    <StarIcon width={24} height={24} />
                </label>
            </div>
            <div className="dec-area">
                <div className="dec-left">
                    <h3>
                        {props.type === "Category"
                            ? "# " + props.title
                            : props.type === "Brand"
                            ? props.brandName
                            : props.title}
                    </h3>
                    <p>{props.type === "Exhibition" ? props.subTitle : ""}</p>
                </div>
                {(props.type === "Product" || props.type === "Brand") && (
                    <div className="dec-right">
                        <strong
                            style={
                                props.type === "Product"
                                    ? { color: "#452CDD" }
                                    : { color: "#000000" }
                            }
                        >
                            {props.type === "Product"
                                ? ` ${props.discountPercentage}%`
                                : "관심고객수"}
                        </strong>
                        <p>
                            {props.type === "Product"
                                ? `${Number(props.price).toLocaleString(
                                      "ko-KR"
                                  )}원`
                                : props.follower.toLocaleString("ko-KR")}
                        </p>
                    </div>
                )}
            </div>
        </ItemContainer>
    );
};

export default ProductItem;
