import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div 
      id="home-container" 
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}
    >
      <h1 id="home-title">Welcome to the Todo App</h1>
      <button 
        className="standard-button"
        onClick={() => navigate("/login")}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        Go to Login
      </button>
    </div>
  );
}

export default Home;
