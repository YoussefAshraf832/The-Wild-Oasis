import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const queryClint = useQueryClient();

  const { isLoading, mutate: logout } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      queryClint.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { isLoading, logout };
}

export default useLogout;
