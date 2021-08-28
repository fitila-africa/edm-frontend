import React, { useState, createContext, FC, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useApiContext } from "../Api";
import { AuthProps, ContextProps, IUserProps } from "./types";
import { IUserData } from "../Api/auth";
import { PageSpinner } from "../../components/pageSpinner";

const AuthContext = createContext<ContextProps | undefined>(undefined);

// const checkAuthState = async () => {
//   const isSignedIn = async () => {
//     if (userData) {
//       const authData = JSON.parse(userData) as IUserProps;
//       const { access } = authData;

//       let refresh = "";

//       try {
//         const accessToken = jwt_decode(access) as any;
//         const refreshToken = jwt_decode(refresh) as any;

//         // console.log({ access: accessToken, refresh: jwt_decode(refresh) });

//         if (accessToken.exp < new Date().getTime() / 1000) {
//           setIsLoading(true);

//           // Get New access token using refresh token and save update value in local storage
//           const { data } = await api.refreshToken();

//           localStorage.setItem(
//             "userData",
//             JSON.stringify({ ...authData, access: data.access })
//           );

//           setIsLoading(false);
//           return true;
//         }

//         if (refreshToken.exp < new Date().getTime() / 1000) {
//           return false;
//         }
//       } catch (error) {
//         return false;
//       }

//       return true;
//     }
//     return false;
//   };

//   const isLoggedIn = await isSignedIn();

//   if (isLoggedIn) {
//     const userDetails = JSON.parse(userData!) as IUserProps;

//     setApiHeaders(userDetails.access);

//     setAuth({
//       isAuthenticated: true,
//       user: userDetails,
//     });
//   }
// };

const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<AuthProps>({
    isAuthenticated: false,
    user: {},
  });
  const [isLoading, setIsLoading] = useState(true);

  const { setApiHeaders, auth: api } = useApiContext();

  const userData = localStorage.getItem("userData");

  const refreshToken = async () => {
    try {
      // setIsLoading(true);
      const { data } = await api.refreshToken();

      const userDetails = JSON.parse(userData!) as IUserProps;
      const accessToken = jwt_decode(data.access) as any;

      console.log({ userDetails, accessToken });

      setApiHeaders(data.access);

      setAuth({
        isAuthenticated: true,
        user: userDetails,
      });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    refreshToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (userData: { email: string; password: string }) => {
    try {
      const res = await api.login(userData);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (userData: IUserData) => {
    try {
      const res = await api.signup(userData);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async history => {
    try {
      const res = await api.logout();

      console.log(res);

      if (res.status >= 200) {
        localStorage.removeItem("userData");
        setAuth({
          isAuthenticated: false,
          user: {},
        });

        // window.location.href = "/signin";
        history.push("/");
      }
    } catch (error) {
      console.log(error);

      localStorage.removeItem("userData");
      setAuth({
        isAuthenticated: false,
        user: {},
      });

      // window.location.href = "/signin";
      history.push("/");
    }
  };

  if (isLoading) {
    return <PageSpinner />;
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, signup, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuthContext };
