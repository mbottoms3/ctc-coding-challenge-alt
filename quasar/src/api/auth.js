export const login = (axios, credentials) => {
  return axios
    .post("/login", credentials)
    .then((response) => {
      localStorage.setItem("authToken", response.access_token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.access_token}`;
    })
    .catch((error) => {
      throw error.response
        ? error.response.data
        : new Error("An error occurred");
    });
};

export const register = (axios, form) => {
  return axios.get("/sanctum/csrf-cookie").then((response) => {
    console.log(response);
    axios
      .post("register", form)
      .then((response) => response.data)
      .catch((error) => {
        throw error.response
          ? error.response.data
          : new Error("An error occurred during registration");
      });
  });
};
