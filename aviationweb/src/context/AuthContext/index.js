import { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [dbUser, setDbUser] = useState(false);
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState();
  const [reload, setReload] = useState();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setDbUser(true);
    }
    if (!user) {
      setDbUser(false);
    }
  }, [dbUser, reload]);

  return (
    <AuthContext.Provider
      value={{
        dbUser,
        setDbUser,
        selectedDeliveryAddress,
        setSelectedDeliveryAddress,
        reload,
        setReload,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);