function fetchTodo() { 
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`); 
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching todo:', error);
            throw error;
        });
}

function fetchUser() { 
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`); 
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching user:', error);
            throw error;
        });
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Promise.all results:', { todo, user });
    })
    .catch(error => {
        console.error('Promise.all failed:', error);
    });


Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('Promise.race result:', result);
    })
    .catch(error => {
        console.error('Promise.race failed:', error);
    });