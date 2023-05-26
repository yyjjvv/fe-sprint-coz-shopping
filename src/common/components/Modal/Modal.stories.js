import Modal from "./Modal";

export default {
    title: "Common/Modal",
    component: Modal,
    argTypes: {
        type: {
            control: { type: "text" },
        },
        title: {
            control: { type: "text" },
        },
        isBookmarked: {
            options: [true, false],
            control: { type: "radio" },
        },
        imgUrl: {
            control: { type: "text" },
        },
    },
};

export const Product = {
    args: {
        type: "Product",
        title: "에어팟 맥스",
        isBookmarked: true,
        imgUrl: "https://images.unsplash.com/photo-1625245488600-f03fef636a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
};

export const Category = {
    args: {
        type: "Category",
        title: "장난감",
        isBookmarked: true,
        imgUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
};

export const Exhibition = {
    args: {
        type: "Exhibition",
        title: "멍냥이도 꿀잠이 필요해",
        isBookmarked: true,
        imgUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80",
    },
};

export const Brand = {
    args: {
        type: "Brand",
        title: "버버리",
        isBookmarked: true,
        imgUrl: "https://images.unsplash.com/photo-1445633814773-e687a5de9baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
};
