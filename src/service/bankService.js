import axios from "axios";
const BASE_URL = "http://localhost:8090";

function getToken(){
  let auth = localStorage.getItem("auth");
  if( auth ){
    auth = JSON.parse(auth);
  }
  return auth ? `Bearer ${auth.token}` : "" ;
}

class BankService {
  register(userInfo) {
    return axios.post(BASE_URL + "/auth/register", userInfo);
  }
  login(userInfo) {
    return axios.post(BASE_URL + "/auth/login", userInfo);
  }
  deposit(transactionInfo){
    const axiosInstance = axios.create({
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      }
    })
    return axiosInstance.post(BASE_URL + "/account/deposit", transactionInfo);
  }

  withdraw(transactionInfo){
    const axiosInstance = axios.create({
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      }
    })
    return axiosInstance.post(BASE_URL + "/account/withdraw", transactionInfo);
  }

  transfer(transferInfo){
    const axiosInstance = axios.create({
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
    });
      return axiosInstance.post(BASE_URL + "/account/transfer", transferInfo);
  }

  getAllUsers(){
    const axiosInstance = axios.create({
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
    });
    return axiosInstance.get(BASE_URL + "/user/all");
  }
}
export default new BankService();
