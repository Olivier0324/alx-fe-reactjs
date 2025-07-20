// src/App.jsx
import UserProfile from './assets/UserProfile'
import { UserProvider } from './assets/UserContext';

function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}

export default App;
