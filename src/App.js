import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import User from './components/User';

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users");
      const users = await response.json();
      setUsers(users);
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <Search />
      <div className="App-user-container">
        {users.map(user =>
          <User
            key={user.login}
            img={user.avatar_url}
            name={user.login}
          />
        )}
      </div>

    </div>
  );
}

export default App;
