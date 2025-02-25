import { Stack } from "@mui/material";
import { category } from "../../constants";

export default function Category({ selectedCategoryHendler }) {
    return (
        <Stack className="categoryGroup" direction={"row"}>
            {category.map(item => (
                <button key={item.name} className="categoryItem" onClick={() => selectedCategoryHendler(item.name)}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                </button>
            ))}
        </Stack>
    )
}
