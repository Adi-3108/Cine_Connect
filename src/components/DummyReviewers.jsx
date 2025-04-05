// src/components/DummyReviewers.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DummyReviewers.css"; // (optional if you want to style it)

const DummyReviewers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDummyUsers = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users?limit=5");
        setUsers(res.data.users);
      } catch (err) {
        console.error("Error fetching dummy users", err);
      }
    };

    fetchDummyUsers();
  }, []);

  return (
    <div className="dummy-reviewers">
      <h2>🎤 Top Movie Reviewers</h2>
      <div className="reviewer-list">
        {users.map((user) => (
          <div key={user.id} className="reviewer-card">
            <img src={user.image} alt={user.firstName} />
            <h4>{user.firstName} {user.lastName}</h4>
            <p>"{user.company.title} at {user.company.name}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyReviewers;
