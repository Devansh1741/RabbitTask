import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, activeUser } = useUser();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const user = { userName: username, password: password };
    console.log(user);
    login(user);

    console.log(activeUser);

    if (activeUser && activeUser.userName !== username) {
      setError("Invalid credentials");
      return;
    }

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" className="mr-4">
        Enter your Username
      </label>
      <input
        type="text"
        required
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <div>
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>

      {error.length ? error : ""}
    </form>
  );
}

export default Login;
