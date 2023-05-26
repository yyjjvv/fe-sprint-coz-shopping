import DropdownMenu from "./DropdownMenu";
import { MemoryRouter } from "react-router-dom";

export default {
    title: "Layout/DropdownMenu",
    component: DropdownMenu,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export const Default = {};
