import UserModel from "./UserModel";

interface AuthModel {
  email: string;
  firstName: string;
  lastName: string;
  msg: string;
  role: UserModel["role"];
  token: string;
}

export default AuthModel;
