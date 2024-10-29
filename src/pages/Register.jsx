import { useContext, useState } from "react";
import { UserContext, useUser } from "../context/UserContext";
import { useNavigate } from "react-router";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [isError, setIsError] = useState("");

  const { addUser } = useUser();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsError("Confirm password is not same as password");
      return;
    }

    setIsError("");
    const newUser = {
      userName: username,
      password: password,
      profileUrl: profileUrl,
    };

    addUser(newUser);

    navigate("/login");
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="profilePic">Profile url</label>
        <input
          type="text"
          placeholder="Profile url"
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>

      <div>{isError.length ? isError : ""}</div>
    </form>
  );
}

export default Register;

// User details
// Username
// Email
// Password
// Image optional
