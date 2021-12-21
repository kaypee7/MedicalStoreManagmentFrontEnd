import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import Config from "./Config";
class AuthHandler {
  static login(username, password, callback) {
    axios
      .post(Config.loginUrl, { username: username, password: password })
      .then(function (response) {
        if (response.status === 200) {
          reactLocalStorage.set("token", response.data.access);
          reactLocalStorage.set("refresh", response.data.refresh);
          callback({ error: false, message: "Login Successfull..." });
        }
      })
      .catch(function (error) {
        callback({
          error: true,
          message: "Error During Login Invalid login Details...",
        });
      });
  }
}

export default AuthHandler;
