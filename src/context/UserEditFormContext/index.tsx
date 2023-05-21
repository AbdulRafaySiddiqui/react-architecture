import React from "react";
import { useState } from "react";
import { UserEditFormState } from "./types";

export const UserEditContext = React.createContext<UserEditFormState>({} as UserEditFormState);

interface Props {
  children: React.ReactNode;
}

export const UserEditFormProvider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <UserEditContext.Provider
      value={{
        name,
        email,
        website,
        setName,
        setEmail,
        setWebsite,
      }}
    >
      {children}
    </UserEditContext.Provider>
  );
};
