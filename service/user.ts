import api from "@/utils/api";
import axios from "axios";
import { formSchema } from "@/lib/actions";
import { z } from "zod";

export type User = z.infer<typeof formSchema>;

const getCaptcha = () => {
  return new Promise((resolve, reject) => {
    api
      .get("Authenticate/CreateExternalCaptcha")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export async function registerUser(user: User) {
  console.log(
    "✅ Final data being sent to API:",
    JSON.stringify(user, null, 2)
  );

  try {
    const response = await axios.post(
      "https://68b6cf9973b3ec66cec2c9a6.mockapi.io/api/v1/users",
      user
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
}
export { getCaptcha };
