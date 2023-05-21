export interface UserEditFormState {
  name: string;
  email: string;
  website: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setWebsite: (website: string) => void;
}
