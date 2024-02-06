import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export function useAuth() {
  return useContext(AppContext);
}
