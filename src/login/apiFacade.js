const URL = "http://localhost:7070/api";

function handleHttpErrors(res) {
  if (!res.ok) {
    return res
      .json()
      .then((err) => Promise.reject({ status: res.status, fullError: err }));
  }
  return res.json();
}

function apiFacade() {
  
  const login = (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/auth/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      })
      .catch((err) => console.error("Error logging in:", err));
  };

  const fetchData = (resource) => {
    const options = makeOptions("GET", true);
    return fetch(URL + resource, options)
      .then(handleHttpErrors)
      .catch((err) => console.error("Error fetching data:", err));
  };

    async function saveDogData(dogData) {
    const response = await fetch(URL+"/dogs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dogData)
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    return response.json();
  }

  const makeOptions = (method, addToken, body) => {
    let opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["Authorization"] = "Bearer" + getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };

  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  const loggedIn = () => {
    return getToken() != null;
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const readJwtToken = (token) => {
    console.log("TOKEN", token);
    const base64URL = token.split(".")[1];
    const base64 = base64URL.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    console.log(jsonPayload);
    return JSON.parse(jsonPayload);
  };

  const isAdmin = () => {
    const token = getToken();
    if (token) {
      const decodedToken = readJwtToken(token);
      return decodedToken.roles && decodedToken.roles.includes("admin");
    }
    return false;
  };

  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    fetchData,
    readJwtToken,
    logout,
    isAdmin,
    saveDogData
  };
}

const facade = apiFacade();
export default facade;
