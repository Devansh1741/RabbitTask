import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Profile() {
  const { activeUser } = useUser();
  console.log(activeUser);
  // if (!activeUser) return <></>;

  return (
    <div>
      <h5>TaskRabbit</h5>
      {activeUser && (
        <>
          <h1>{activeUser.userName}</h1>
          <img
            src={activeUser.profileUrl}
            alt="Profile"
            height={"50px"}
            width={"auto"}
          />
        </>
      )}
      <br />
      <Link to="/register">Register </Link>
      <Link to="/login">Login </Link>
      <Link to="editProfile">Edit Profile </Link>
    </div>
  );
}

export default Profile;
