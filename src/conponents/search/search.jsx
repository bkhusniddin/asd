import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ApiService } from "../../service/api.service"
import { Box, Container, Stack, Typography } from "@mui/material"
// import Category from "../category/category"
import Videos from "../videos/videos"
import { colors } from "../../constants/colors"

export default function Search() {
  const [videos, setVideos] = useState([])
  const { id } = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setVideos(data)

      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])
  return (
    <Stack>
      {/* <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      /> */}
      <Box p={2} sx={{ height: '90vh' }}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
            {/* {selectedCategory}  */}
            <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}
