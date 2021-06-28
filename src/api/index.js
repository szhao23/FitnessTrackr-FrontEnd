import axios from 'axios';

export const getRoutines = async () => {
    let { data } = await axios.get('https://fitnesstrac-kr.herokuapp.com/api/routines')

    // display routines response object in console
    console.log("Routines: ", data)
    return data
}

export const getActivities = async () => {
    let { data } = await axios.get('https://fitnesstrac-kr.herokuapp.com/api/routines')

    console.log("Activities: ", data)
    return data
}

export const registration = async (username, password) => {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
  })
})
    const data = response.json();
    console.log(data);
    return data;
}

export const login = async (username, password) => {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
    })
})
    const data = response.json();
    console.log(data);
    return data;
}
