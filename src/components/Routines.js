import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Routines.css';
import { getRoutines } from '../api/index';

const Routines = () => {
    const [ routines, setRoutines] = useState([])
    
    useEffect(async () => {
        let data = await getRoutines();
        console.log('Running useEffect')
        setRoutines(data)
    }, [])

    console.log(routines);


    let displayRoutines = routines.map((r, idx) => {
       return <SingleRoutine key={idx} routine={r} />
    })
    return <div className='routines'>{displayRoutines}</div>
}

const SingleRoutine = ({ routine }) => {
    return <div className = 'routine'>
            <h1>Name: {routine.name}</h1>
            <h3>Creator Name: {routine.creatorName}</h3>
            <h4>id: {routine.id}</h4>
            <h4>Creator ID: {routine.creatorId}</h4>
            <h2>Goal: {routine.goal}</h2>
            <br></br>
    </div>
}


export default Routines;