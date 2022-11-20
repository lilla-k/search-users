import './App.css';
import Search from './components/Search';
import User from './components/User';

const App = () => {
  return (
    <div className="App">
      <Search/>
      <div className="App-user-container">
        <User
          // key={user.login}
          // img={user.avatar_url}
          // name={user.login}
          key="Lilla"
          img="https://avatars.githubusercontent.com/u/6?v=4"
          name="Lilla"
        />
         <User
          // key={user.login}
          // img={user.avatar_url}
          // name={user.login}
          key="Balint"
          img="https://avatars.githubusercontent.com/u/6?v=4"
          name="Balint"
        />
      </div>

    </div>
  );
}

export default App;
