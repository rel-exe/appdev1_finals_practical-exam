import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD;
  const API_URL = import.meta.env.VITE_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/users?_limit=3`)
         .then(res => setUsers(res.data))
         .catch(err => console.error(err));
  }, [API_URL]);

  function handleLogin() {
    const foundUser = users.find(user => user.username === username);
    if (!foundUser) {
      alert("Username not found!");
      return;
    }
    if (password !== SECRET) {
      alert("Incorrect password!");
      return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    navigate("/todos");
  }

  return (
    <div id="login-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h2 id="login-title">Login</h2>
      <input
        className="standard-input"
        type="text"
        placeholder="Enter username (E.g., Bret)"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ margin: "10px 0", padding: "10px", width: "250px" }}
      />
      <input
        className="standard-input"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ margin: "10px 0", padding: "10px", width: "250px" }}
      />
      <button
        className="standard-button"
        onClick={handleLogin}
        style={{ padding: "10px 20px", marginTop: "10px" }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
