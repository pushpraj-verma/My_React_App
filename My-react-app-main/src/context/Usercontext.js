import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: ''
  });

  const setUsername = (username) =>{
    setUser({...user, username})
  };

  return (
    <UserContext.Provider value={{ user, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};