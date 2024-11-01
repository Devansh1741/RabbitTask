import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const temp = {
  userName: "Devansh",
  password: "12345",
  profileUrl:
    "data:image/jpeg;base64,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",
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
    // if (currentUser) {
    //   return;
    // }

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
