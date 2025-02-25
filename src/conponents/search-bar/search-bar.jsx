import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [value, setValue]= useState("")
    const navigate = useNavigate()

    const submitHandler =(e)=>{
        e.preventDefault()
        if(value){
            navigate(`/search/${value}`)
            setValue(" ")
        }
    }
    return (
        <Paper onSubmit={submitHandler} component={"form"} sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 0, borderRadius: 0}}>
            <input type="text" placeholder="Search..." value={value} className="search-bar" onChange={e=>setValue(e.target.value)}/>
            <IconButton type="submit">
                <Search />
            </IconButton>
        </Paper>
    )
}
