
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Footer = () => {
  const [githubData, setGithubData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Adi-3108');
        setGithubData(response.data);
      } catch (error) {
        setError('Failed to fetch GitHub profile');
      }
    };

    fetchGithubProfile();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <footer>
      {githubData ? (
        <div className="github-profile">
          <h4>Developer: {githubData.name}</h4>
          <a href={githubData.html_url} target="_blank" rel="noopener noreferrer">
            <img src={githubData.avatar_url} alt={githubData.login} className="avatar" />
          </a>
          <p>{githubData.bio}</p>
        </div>
      ) : (
        <p>Loading GitHub profile...</p>
      )}
    </footer>
  );
};

export default Footer;
