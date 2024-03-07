import React from 'react'
import { Typography, Stack, Box } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from "./Loader"

const SimilarExercises = ({targetMuscleExercises,
  equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg: "100px", xs:"0"}}}>
      <Typography variant="h3" mb={"5"}>Exercises that target the same muscle group</Typography>
      <Stack direction={"row"} sx={{py:"40px", position:"relative"}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar data = {targetMuscleExercises}/> : <Loader />}
      </Stack>
      <Typography variant="h3" style={{paddingTop:"70px"}}>Exercises with the same  equipment as this exercise</Typography>
      <Stack direction={"row"} sx={{py:"40px", position:"relative"}}>
        {equipmentExercises.length ? <HorizontalScrollBar data = {equipmentExercises}/> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises