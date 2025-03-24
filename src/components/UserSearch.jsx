import React, { useState, useEffect } from 'react';



function UserSearch() {


    const [value, setValue] = useState('');
    const [users, setUsers] = useState([]);
    const [filterusers, setFilter] = useState([]);

    const[data1, setData] = useState('');

    
    let user_ls = document.getElementById("user_ls");
    function change(event) {
        setValue(event.target.value);
        user_ls.style.visibility = "visible";

        
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUsers(data))
          .catch((error) => console.error("Ошибка загрузки пользователей:", error));
          
          


    }, []);
    
    useEffect(() =>{
        setFilter(users.filter((users) =>  users.name.includes(value)));
        


    },[value]);

    function AllUsers() {
        let users_str = "";
        for (let index = 0; index < users.length; index++) {
            users_str = users_str.concat(users[index].name);   
            
            
        }


        
        
        
        let ab =filterusers.map((user)=> user.name);
        if (user_ls.textContent.includes(users_str)) {
            user_ls.style.visibility = "hidden";
            
            
        }else{
            setFilter(users.filter((users) =>  users.name.includes(" ")));
            setData(users.filter((users) =>  users.name.includes(" ")))
        }

        

        
        
        
        
        
        
        

        
        

       
        
        
         
    }

   

    
                    
    return(
            
            <div >

                <p id='user_ls'>{filterusers.map((user)=> user.name)}</p>
                <input onChange={change} id='input' type="text" />
                <button id='but' onClick={AllUsers}>Показать всех пользователей</button>


            </div>
            
    
        );
      
    

    
    
    

    
    
}
export default UserSearch;