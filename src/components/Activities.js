import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Activities.css';
import { getActivities } from '../api/index';

const Activities = () => {
    const [activities, setActivities] = useState([])

    useEffect(async () => {
        let data = await getActivities();
        setActivities(data);
    }, []);

    let displayActivities = activities.map((a, idx) => {
        return <Activity key={idx} activity={a} />
    })
    return <div className='activity'>{displayActivities}</div>
}

const Activity = ({activity}) => {
    return <div className='activity'>
        <h1>Activity Name: {activity.name}</h1>
        <h3>id: {activity.id}</h3>
        <h3>Activity Description: {activity.description}</h3>
        <h3>Activity Duration: {activity.duration}</h3>
        <h3>Count: {activity.count}</h3>
        <h3>routineActivityId: {activity.routineActivityId}</h3>
        <h3>routineId: {activity.routineId}</h3>
        <br></br>
    </div>
}

export default Activities;

// const activities = routine.activities;
// let displayActivities = activities.map((a, idx) => {
//     return <Activity key={idx} activity={a} />
//  })
