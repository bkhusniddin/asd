import React from 'react'
import Navbar from '../navbar/navbar';
import Main from '../main/main';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Search from '../search/search';
import VideoDetail from '../video-datail/video-datail';
import { Channel } from '../';

const App = () => {
    return (
        <Box>
            <Navbar />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/channel/:id' element={<Channel />} />
                <Route path='/search/:id' element={<Search />} />
                <Route path='/video/:id' element={<VideoDetail />} />
            </Routes>
        </Box>
    )
}

export default App;