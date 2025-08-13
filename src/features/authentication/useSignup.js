import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address."
      );
    },

    onError: (err) => {
      console.log(err);
      toast.error("Can't create new account");
    },
  });

  return { signup, isLoading };
}
