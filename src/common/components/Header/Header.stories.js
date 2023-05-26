import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

export default {
    title: "Layout/Header",
    component: Header,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export const Default = {};
