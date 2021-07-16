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

export const getMe = async () => {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTY2LCJ1c2VybmFtZSI6ImhlbGxvdGhpc2lzYXRlc3QiLCJpYXQiOjE2MjQ5NTUxMDQsImV4cCI6MTYyNTU1OTkwNH0.FQTI6mFkvvUIMbINz8Q73N_3gDBfeoNvm3CnCidX8o4'
        },
      })
      console.log(response);
}
