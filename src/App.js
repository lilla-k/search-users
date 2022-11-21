import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import User from './components/User';
import UserDetails from './components/UserDetails';


const App = () => {

  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users");
      const users = await response.json();
      setUsers(users);
    }
    fetchData()
  }, []);

  const onShowDetails = async (login) => {
    const response = await fetch(`https://api.github.com/users/${login}`);
    const userDetails = await response.json();
    setUserDetails(userDetails);
  }

  const closingHandler = ()=> {
    setUserDetails(null);
  }

  const onSearch = async (inputValue)=> {
    setInputValue(inputValue);
  }
  const filteredUsers = users.filter(user => user.login.startsWith(inputValue));

return (
  <div className="App">
    <Search 
      onSearch={onSearch}
    />
    <div className="App-user-container">
      {filteredUsers.map(user =>
        <User
          key={user.login}
          login={user.login}
          img={user.avatar_url}
          name={user.login}
          onShowDetails={onShowDetails}
        />
      )}
    </div>
    {users.length === 0 && <div>Loading...</div>}
    {filteredUsers.length === 0 && users.length !== 0 && <div>Nothing found</div>}
    {userDetails !== null && 
    <UserDetails 
      name={userDetails.login}
      location={userDetails.location}
      company={userDetails.company}
      followers={userDetails.followers}
      img={userDetails.avatar_url}
      click={closingHandler}
    />}
  </div>

);
}

export default App;
