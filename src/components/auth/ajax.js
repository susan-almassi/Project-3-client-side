import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    });
  }

  signup = (firstName,lastName,mail, password) => {
    return this.service
      .post("/auth/signup", { firstName,lastName,mail, password })
      .then(response => response.data);
  };
}


export default AuthService;