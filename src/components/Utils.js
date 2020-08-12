export const postTask = (task) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    };
    fetch('http://localhost:8080/api/task',requestOptions)
    .then(res => res.json())
    .then((data) => {
        console.log("after post ",data)
    })
    .catch(console.log)
}

export const fetchTasks = (setTasks) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch('http://localhost:8080/api/tasks',requestOptions)
    .then(res => res.json())
    .then((data) => {
        setTasks(data);
    })
    .catch(console.log)
}

export const fetchTimelineTasks = (setTimelineTasks) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch('http://localhost:8080/api/timelines',requestOptions)
    .then(res => res.json())
    .then((data) => {
        setTimelineTasks(data);
    })
    .catch(console.log)
}