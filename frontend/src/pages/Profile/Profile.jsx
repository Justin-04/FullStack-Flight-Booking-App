import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState(null);         
  const [isEditing, setIsEditing] = useState(false); 
  const [editedData, setEditedData] = useState({}); 

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:8080/user/getProfile", {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        });
        setData(result.data);
        setEditedData(result.data);  
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedData(data); 
  };

  const handleDoneClick = async () => {
    
    navigate('/profile');
    try {
      await axios.put("http://localhost:8080/user/updateProfile", editedData, {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      });
      setData(editedData);  
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsEditing(false);  
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <button className="profile-button" onClick={() => navigate("/")}>Go back Home</button>
      {data === null ? (
        <p>Loading...</p>  //TODO ADD LOADER
      ) : (
        <div className="profile-container">
          <div className="profile-left-section">
            <div className="profile-data">
              <img alt="" />
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={editedData.username || ""}
                  onChange={handleChange}
                />
              ) : (
                <span>Username: {data[0].username}</span>
              )}
            </div>
          </div>
          <div className="profile-right-section">
            <center>
              <h3
              style={{
                marginBottom:"20%",
              }}
              
              >Information</h3>
            </center>
            <div className="email">
              <span
                style={{
                  borderBottom: "2px solid black",
                  width: "50px",
                  marginRight:"5px",
                  fontWeight: "600",
                }}
              >
                Email: 
              </span>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editedData.email || ""}
                  onChange={handleChange}
                />
              ) : (
                <span>{data[0].email}</span>
              )}
            </div>
            <div className="phone">
              <span
                style={{
                  borderBottom: "2px solid black",
                  width: "60px",
                  marginRight:"5px",
                  fontWeight: "600",
                }}
              >
                Phone:
              </span>
              {isEditing ? (
                <input
                  type="text"
                  name="phoneNumber"
                  value={editedData.phoneNumber || ""}
                  onChange={handleChange}
                />
              ) : (
                <span>{data[0].phoneNumber}</span>
              )}
            </div>
          </div>
          {/* Edit and Done buttons */}
          {isEditing ? (
            <button className="profile-button" onClick={handleDoneClick}>Done</button>
          ) : (
            <button className="profile-button" onClick={handleEditClick}>Edit</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
