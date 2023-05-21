import { useEffect } from "react";

export interface GenericStateFetchHook {
  fetch: () => Promise<any> | void;
  loading: boolean;
  fetchDep: any[];
}

export const useGenericStateFetch = (useGenericHook: () => GenericStateFetchHook) => {
  const values = useGenericHook();

  useEffect(() => {
    values.fetch && values.fetch();
  }, values.fetchDep);

  return values;
};
