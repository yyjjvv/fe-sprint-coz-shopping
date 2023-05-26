import Toast from "./Toast";

export default {
    title: "common/Toast",
    component: Toast,
};

export const Bookmarked = {
    args: {
        color: "#ffd361",
        description: "상품이 북마크에 추가되었습니다.",
    },
};

export const Unbookmarked = {
    args: {
        color: "rgba(223, 223, 223, 0.81)",
        description: "상품이 북마크에 제거되었습니다.",
    },
};
