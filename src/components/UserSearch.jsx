import React, { useState, useEffect } from 'react';



function UserSearch() {


    const [value, setValue] = useState('');
    const [users, setUsers] = useState([]);
    const [filterusers, setFilter] = useState([]);

    

    function change(event) {
        setValue(event.target.value);
        
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUsers(data))
          .catch((error) => console.error("Ошибка загрузки пользователей:", error));
          
          


    }, []);
    
    useEffect(() =>{
        setFilter(users.filter((users) =>  users.name.includes(value)));
        


    },[users])

      
      

    
    
    return(
        
        <div>

            <p>Value:{filterusers.map((user)=> user.name)}</p>
            <input onChange={change} id='input' type="text" />


        </div>
        
   
    );
    
}
export default UserSearch;