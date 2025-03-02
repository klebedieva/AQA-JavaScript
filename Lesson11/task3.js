async function fetchTodo() { 
    try { 
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (!response.ok) {
                throw new Error('Request failed'); 
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching todo:', error);
            throw error;
          }
        }

async function fetchUser() { 
    try { 
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`); 
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
            }
        }
        
async function getAllData() {
    try {
      const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
      console.log('Promise.all results:', { todo, user });
    } catch (error) {
      console.error('Promise.all failed::', error);
    }
  }
  
async function getRaceData() {
    try {
      const result = await Promise.race([fetchTodo(), fetchUser()]);
      console.log('Promise.race result:', result);
    } catch (error) {
      console.error('Promise.race failed:', error);
    }
  }
  

getAllData(); 
getRaceData(); 