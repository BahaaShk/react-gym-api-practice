import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {
  if(!exerciseVideos.length) return "Loading ..."
  return (
    <Box sx={{marginTop:{lg: '28px', xs:"20px"}}} p={"20px"}>
<Typography variant='h3' mb={"33px"}>
  Watch other <span style={{color:"#ff2625", textTransform:"capitalize"}}>{name}</span> exercise videos
</Typography>
<Stack justifyContent={"flex-start"} flexWrap={"wrap"} alignItems={"center"} sx={{flexDirection:{lg:"row"}, gap:{lg:"110px", xs:"0px"}}}>
{
  exerciseVideos?.slice(0,4).map((item,index)=> (
    <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
    key={index}
    target='_blank'
    rel="noreferrer"
    className='exercise-video'
    >
<img src={item.video.thumbnails[0].url} alt={item.video.title} />
<Box color={"black"}>
          <Typography>
            {item.video.title}
          </Typography>
          <Typography>
            {item.video.channelName}
          </Typography>
        </Box>
    </a>
  ))
}

</Stack>
    </Box>
  )
}

export default ExerciseVideos