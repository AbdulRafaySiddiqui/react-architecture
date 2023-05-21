import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { userActions } from ".";
import { bindActionCreators } from "redux";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const userState = useSelector((state: RootState) => state.user);

  const fetch = () => {};

  return {
    fetch,
    fetchDep: [],
    loading: userState.loading,
    user: userState.user,
    ...bindActionCreators(userActions, dispatch),
  };
};
