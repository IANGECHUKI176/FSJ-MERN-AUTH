import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./privateScreen.css";
const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      return navigate("/login");
    }
    const fetchPrivateData = async () => {
      const config = {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("you are not authorize Please login");
      }
    };
    fetchPrivateData();
  }, [window.history]);
  const logOutHandler=()=>{
    localStorage.removeItem("authToken")
    navigate('/login')
  }
  return (
    <div>
      {error ? (
        <span className='error-message'>{error}</span>
      ) : (
        <>
          <div style={{ background: "green", color: "white" }}>
            {privateData}
          </div>
          <button onClick={logOutHandler}>Logout</button>
        </>
      )}
    </div>
  );
};

export default PrivateScreen;
