import { toast } from "sonner";

export const handleApiError = (errorResponse: any) => {
  const parsed = JSON.parse((errorResponse as Error).message);

  try {
    // Case 1: errorResponse is a string
    if (typeof parsed === "string") {
      toast.error(parsed);
      return;
    }

    // Case 2: errorResponse is an object
    if (parsed && typeof parsed === "object") {
      // Check if it has an 'error' property
      if ("error" in parsed) {
        const errorData = parsed.error;

        // Handle string error (e.g., { "error": "some error message" })
        if (typeof errorData === "string") {
          toast.error(errorData);
        }
        // Handle object error with nested messages (e.g., { "error": { "closing_time": ["message"] } })
        else if (typeof errorData === "object" && errorData !== null) {
          Object.keys(errorData).forEach((key) => {
            const messages = errorData[key];
            // Handle array of messages
            if (Array.isArray(messages)) {
              messages.forEach((message) => {
                toast.error(message);
              });
            }
            // Handle single string message
            else if (typeof messages === "string") {
              toast.error(messages);
            }
          });
        }
      } else {
        // Handle object without 'error' property
        toast.error("An unexpected error occurred. Please try again.");
      }
    } else {
      // Fallback for unexpected formats
      toast.error("An unexpected error occurred. Please try again.");
    }
  } catch (err) {
    console.error("Error handling API response:", err);
    toast.error("An unexpected error occurred. Please try again.");
  }
};
