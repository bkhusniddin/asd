import { Box, Stack } from "@mui/material";
import VideoCard from "../video-card/video-card";
import ChannelCard from "../channel-card/channel-card";
import Loader from "../loader/loader";

export default function Videos({ videos }) {
  // console.log(videos);
  if (!videos.length) return <Loader />

  return <Stack direction={"row"}  flexWrap={"wrap"} justifyContent={"start"} alignItems={"center"} gap={2}>
    {videos.map(item => (
      <Box key={item.id.videoId}>
        {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard video={item} />}
      </Box>
    ))}

  </Stack>

}
