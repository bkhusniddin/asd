import { useState, useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Category from "../category/category";
import Videos from "../videos/videos";
import { ApiService } from "../../service/api.service";

export default function Main() {
    const [selectedCategory, setSelectedCategory] = useState("New")
    const [videos, setVideos] = useState([])

    const selectedCategoryHendler = category => setSelectedCategory(category)

    // console.log(process.env.REACT_APP_PUBLIC_API_KEY); 
    useEffect(() => {
        const getData = async()=>{
            try{
                const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
                setVideos(data)
            }catch(error){
                console.log(error);
            }
        }
        getData()
        // ApiService.fetching("search").then(data => setVideos(data))
    }, [selectedCategory])

    return (
        <Stack>
            <Category selectedCategoryHendler={selectedCategoryHendler} />
            <Box>
                <Container sx={{ maxWidth: "90% !important"  }}>
                    <Typography variant="h4">
                        {selectedCategory} <span className="vds">videos</span>
                    </Typography>
                    <Videos videos={videos} />

                </Container>
            </Box>

        </Stack>
    )
}
