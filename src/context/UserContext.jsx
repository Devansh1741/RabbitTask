import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const temp = {
  userName: "Devansh",
  password: "12345",
  profileUrl: "12345",
};

function UserContextProvider({ children }) {
  const [users, setUsers] = useState([temp]);
  const [activeUser, setActiveUser] = useState(null);

  function addUser(newUser) {
    setUsers(newUser);
  }

  function login(user) {
    const currentUser = users.find(
      (u) => u.userName === user.userName && u.password === user.password
    );
    // console.log(users);
    console.log(currentUser);
    if (currentUser) {
      return;
    }

    setActiveUser(currentUser);
  }

  return (
    <UserContext.Provider value={{ users, addUser, activeUser, login }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const user = useContext(UserContext);
  return user;
}
export default UserContextProvider;
