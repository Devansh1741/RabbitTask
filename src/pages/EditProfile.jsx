import { useState } from "react";

function EditProfile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [isError, setIsError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsError("Confirm password is not same as password");
      return;
    }

    setIsError("");
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
        <button type="submit">Update</button>
      </div>

      <div>{isError.length ? isError : ""}</div>
    </form>
  );
}

export default EditProfile;
