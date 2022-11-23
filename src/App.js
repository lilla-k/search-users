import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import User from './components/User';
import UserDetails from './components/UserDetails';


const App = () => {

  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users");
      const users = await response.json();
      setLoading(false);
      setUsers(users);
    }
    fetchData()
  }, []);

  const onShowDetails = async (login) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${login}`);
      const userDetails = await response.json();
      setError(false);
      setLoading(false)
      setUserDetails(userDetails);
    }
    catch (error) {
      console.log(`This was the ${error.message}`)
      setLoading(false);
      setError(true);
    }
    
  }

  const onClose = ()=> {
    setUserDetails(null);
  }

  const onSearch = async (inputValue)=> {
    setInputValue(inputValue);
  }
  const filteredUsers = users.filter(user => user.login.startsWith(inputValue));


return (
  <div className="App">
    {loading && <div id="loading">Loading...</div>}
    {error && <div id="tryAgain">Try again...</div>}
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
    
    {filteredUsers.length === 0 && users.length !== 0 && <div id="nothingFound">Nothing found</div>}
    {userDetails !== null && 
    <UserDetails 
      name={userDetails.login}
      location={userDetails.location}
      company={userDetails.company}
      followers={userDetails.followers}
      img={userDetails.avatar_url}
      onClose={onClose}
    />}
  </div>

);
}

export default App;
