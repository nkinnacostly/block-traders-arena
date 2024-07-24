import { toast } from "sonner";
import useApiRequest from "@/hooks/useCustonApiQuery";

export function SubmitCourse() {
  const { useMutationRequest } = useApiRequest(); // Destructure the custom hook

  const { mutateAsync, isPending } = useMutationRequest();

  const onSubmit = async (userData) => {
    try {
      await mutateAsync(
        {
          method: "POST",
          url: "/courses/viewed_courses",
          data: userData,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            //    toast.success(data.message);
            //    storage.localStorage.set("user", data.user);
            //    storage.localStorage.set("__session", data.data?.token);
            //    router.push("/login");
          },
          onError: (error) => {
            toast.error(error.message);
            // console.log(error, "This is my data error");
          },
        }
      );
    } catch (error) {
      toast.error(error);
      // console.error("Error adding data:", error.message);
    }
  };

  //completed
  const completed = async (userData) => {
    try {
      await mutateAsync(
        {
          method: "POST",
          url: "/courses/viewed_courses",
          data: userData,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            //    toast.success(data.message);
            //    storage.localStorage.set("user", data.user);
            //    storage.localStorage.set("__session", data.data?.token);
            //    router.push("/login");
          },
          onError: (error) => {
            //    toast.error(error.message);
            console.log(error, "This is my data error");
          },
        }
      );
    } catch (error) {
      // console.error("Error adding data:", error.message);
      // console.log(error.error);
    }
  };
  return { onSubmit, isPending, completed };
}
