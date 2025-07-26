import { useContext } from 'react';
import UserContext from './UserContext'; // ✅ update path if needed

function UserProfile() {
  const userData = useContext(UserContext);

  if (!userData) return <p>Loading user data...</p>;

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
