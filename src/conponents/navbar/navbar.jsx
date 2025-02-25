import { Stack, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors"
import SearchBar from "../search-bar/search-bar";

export default function Navbar() {
    return (
        <Stack direction={"row"} alignItems={"center"}  justifyContent={"space-between"} p={2} px={5} sx={{ position: "sticky", top: 0, zIndex: 999, bgcolor: colors.primary }}>
            <Link to="/" className="navBrand">
                <span>YOUTUBE</span>
            </Link>
            <SearchBar />
        </Stack>
    )
}
