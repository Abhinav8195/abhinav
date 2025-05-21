import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFinish = async (e) => {
    e.preventDefault();
    if (loading) return; 
    setLoading(true);

    try {
      const response = await axios.post("https://testnetflix-server.onrender.com/api/auth/register", { email, username, password });
      setLoading(false);
      navigate("/login");
      console.log(response)
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="input" onSubmit={handleFinish}>
          <input type="email" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="registerButton" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Start"}
          </button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
