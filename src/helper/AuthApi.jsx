import Axios from 'axios';

const AuthApi = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default AuthApi