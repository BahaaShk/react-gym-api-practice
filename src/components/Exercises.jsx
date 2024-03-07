import React, { useState, useEffect } from 'react'
import  Pagination  from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({setExercises, bodyPart, exercises}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 6;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (e, value) => {
setCurrentPage(value);
window.scrollTo({top:1800, behavior:'smooth'})
  }
useEffect(() => {
  const fetchExerciseData = async () =>{
  let exercisesData = [];
  if(bodyPart === 'all'){
    exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=9999', exerciseOptions)
  } else {
    exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=9999`, exerciseOptions)
  }
  setExercises(exercisesData)
  }
  fetchExerciseData()
  

}, [bodyPart])

  return (
    <Box id="exercises"
    sx={{
      mt:{lg:'110px'}    
    }}
    mt={"50px"}
    p={"20px"}
    >
      <Typography variant='h3' mb={"46px"}>
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:"110px", xs:"58px"}}}
      flexWrap={"wrap"}
      justifyContent={"center"}
      >
        {currentExercises.map((exercise, index) => (
<ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt={"50px"} alignItems={'center'}>
{
  exercises.length > 3 && (
    <Pagination 
    color='standard'
    size='large'
    // shape='rounded'
    defaultPage={1}
    count={Math.ceil(exercises.length / exercisesPerPage)}
    page={currentPage}
    onChange={paginate}

    />
  )
}
      </Stack>
    </Box>
  )
}

export default Exercises