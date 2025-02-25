import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ChannelCard({ video }) {
    return (
        <>
            <Box sx={{
                boxShadow: 0,
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "356px", md: "320px" },
                height: "326px",
                margin: "auto"
            }}>
                <Link to={`/channel/${video?.snippet?.channelId}`}>
                    <CardContent sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center"
                    }}>
                        <CardMedia image={video?.snippet?.thumbnails?.default?.url} alt={video?.snippet?.title} sx={{
                            borderRadius: "50%",
                            height: "180px",
                            width: "180px",
                            mb: 2,
                            border: "1px solid"
                        }} />
                        <Typography variant={"h6"}>
                            {video?.snippet?.title}{" "}
                            <CheckCircle sx={{
                                fontSize: "14px",
                                color: "gray",
                                ml: "5px"
                            }} />
                        </Typography>
                        {video?.statistics?.subscriberCound && <Typography fontSize={"14px"} > {parseInt(video?.statistics?.subscriberCound).toLocaleString("en-US")} {" "} Subscribers</Typography>}
                    </CardContent>
                </Link>

            </Box>
        </>
    )
}
