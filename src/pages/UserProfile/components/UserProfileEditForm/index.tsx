import { TextField, Typography } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { UserEditContext, UserEditFormProvider } from "../../../../context/UserEditFormContext";

export const UserProfileEditForm = () => {
  return (
    <UserEditFormProvider>
      <form>
        <MyOwesomeTextField />
        <Email />
        <Website />
      </form>
    </UserEditFormProvider>
  );
};

const MyOwesomeTextField = () => {
  const { name, setName } = useContext(UserEditContext);
  return (
    <>
      <Typography>Name</Typography>
      <TextField value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

const Email = () => {
  const { email, website, setEmail } = useContext(UserEditContext);
  const [isValid, IsValid] = useState(true);

  useEffect(() => {
    const validateEmail = () => {
      try {
        // Extract the domain from the email
        const emailDomain = email.split("@")[1];

        // Extract the domain from the website URL
        const urlDomain = new URL(website).hostname;

        // Compare the two domains
        return emailDomain === urlDomain;
      } catch (e) {}
      return false;
    };

    IsValid(validateEmail());
  }, [email, website]);

  return (
    <>
      <Typography>Email</Typography>
      <TextField error={!isValid} value={email} onChange={(e) => setEmail(e.target.value)} />
    </>
  );
};

const Website = () => {
  const { website, email, setWebsite } = useContext(UserEditContext);

  const [isValid, IsValid] = useState(true);

  useEffect(() => {
    const validateWebsite = () => {
      try {
        // Extract the domain from the email
        const emailDomain = email.split("@")[1];

        // Extract the domain from the website URL
        const urlDomain = new URL(website).hostname;

        // Compare the two domains
        return emailDomain === urlDomain;
      } catch (e) {}
      return false;
    };

    IsValid(validateWebsite());
  }, [email, website]);

  return (
    <>
      <Typography>Website</Typography>
      <TextField error={!isValid} value={website} onChange={(e) => setWebsite(e.target.value)} />
    </>
  );
};
