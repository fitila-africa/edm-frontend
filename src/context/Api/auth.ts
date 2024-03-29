import { AxiosInstance, AxiosResponse } from "axios";
import { IOrganizationProps } from "../Organization/types";

export type UserSigninProps = Pick<IUserData, "email" | "password">;

export type IUserData = {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  password: string;
  profile_pics_url?: string;
  phone?: string;
};

export type IUserResponseProps = IUserData & {
  is_admin: boolean;
  access: string;
  refresh: string;
};

export type IUserProfileProps = IUserData & {
  user_organization: IOrganizationProps[];
  date_joined: string;
};

export type IPasswordProps = {
  old_password: string;
  new_password: string;
  confirm_password?: string;
};

export default class Auth {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  login(
    userDetails: UserSigninProps
  ): Promise<AxiosResponse<{ data: IUserResponseProps }>> {
    return this.client.post("/account/auth/", userDetails);
  }

  signup(
    userDetails: IUserData
  ): Promise<AxiosResponse<{ data: IUserResponseProps }>> {
    return this.client.post("/account/user/add_user/", userDetails);
  }

  logout() {
    return this.client.get("/account/auth/logout");
  }

  googleSignin(token: string) {
    return this.client.post("/account/auth/social/google/", {
      auth_token: token,
    });
  }

  facebookSignin(token: string) {
    return this.client.post("/account/auth/social/facebook/", {
      auth_token: token,
    });
  }

  verifyOTP(otp: string) {
    return this.client.post("/account/otp/", { otp });
  }

  resendOTP(email: string) {
    return this.client.post("/account/otp/new/", { email });
  }

  refreshToken(
    refresh: string
  ): Promise<
    AxiosResponse<{ refresh: string; access: string; detail?: string }>
  > {
    return this.client.post("/account/auth/token/refresh/", { refresh });
  }

  createAdmin(userData) {
    return this.client.post("/account/user/add_admin/", userData);
  }

  resetPassword(data?: IPasswordProps) {
    return this.client.post("/account/user/reset_password/", data);
  }

  forgotPassword(data: { email: string }) {
    return this.client.post("/account/user/forget_password/", data);
  }

  confirmPassword(data: { password: string; token: string }) {
    return this.client.post("/account/user/forget_password/confirm/", data);
  }

  validateToken(data: { token: string }) {
    return this.client.post(
      "​/account​/user​/forget_password​/validate_token​/",
      data
    );
  }

  getUsers() {
    return this.client.get("/account/user/all_users/");
  }

  getUserProfile(): Promise<AxiosResponse<{ data: IUserProfileProps }>> {
    return this.client.get(`/account/user/profile`);
  }

  editUserProfile(
    data?: any
  ): Promise<AxiosResponse<{ data: IUserProfileProps }>> {
    return this.client.put(`/account/user/profile`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  deleteUser(id: number) {
    return this.client.delete(`/account/user/${id}`);
  }
}
