import React, { useState, useEffect } from "react";
import "./useEffect.css";

function RandomUserComponent() {
  const [user, setUser] = useState({
    id: null,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchCounter, setFetchCounter] = useState(0);

  useEffect(() => {
    if (fetchCounter > 0) {
      fetchRandomUser();
    }
  }, [fetchCounter]);

  const fetchRandomUser = () => {
    setLoading(true);
    setError(null);

    const userId = Math.floor(Math.random() * 10) + 1;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something wrong with the request");
        }
        // tager respons og laver det om til json så vi kan bruge det i vores næste .then
        return response.json();
      })
      .then((data) => {
        setUser({
          id: data.id,
          name: data.name,
          username: data.username,
          email: data.email,
          address: {
            street: data.address.street,
            suite: data.address.suite,
            city: data.address.city,
            zipcode: data.address.zipcode,
            geo: {
              lat: data.address.geo.lat,
              lng: data.address.geo.lng,
            },
          },
        });
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleButtonClick = () => {
    setFetchCounter((prevCount) => prevCount + 1);
  };

  return (
    <div className="random-user-container">
      <button className="fetch-button" onClick={handleButtonClick}>Fetch Random User</button>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      <div className="user-data">
        <h1 className="title">User Data</h1>
        <p className="info">Username: {user.username || 'N/A'}</p>
        <p className="info">Name: {user.name || "N/A"}</p>
        <p className="info">Email: {user.email || "N/A"}</p>
        <p className="info">Street: {user.address.street || "N/A"}</p>
        <p className="info">Suite: {user.address.suite || "N/A"}</p>
        <p className="info">City: {user.address.city || "N/A"}</p>
        <p className="info">Zipcode: {user.address.zipcode || "N/A"}</p>
      </div>
    </div>
  );
}

export default RandomUserComponent;