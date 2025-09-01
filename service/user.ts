import api from "@/utils/api";
import axios from "axios";
export interface User {
  phoneNumber: string;
  nationalCode: string;
  name: string;
  familyName: string;
  fatherName: string;
  birthDate: string;
}
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

async function registerUser(user: User) {
  try {
    const response = await axios.post(
      "https://687cedfc918b642243307b10.mockapi.io/api/v1/register",
      user
    );
    return response.data;
  } catch (error: any) {
    console.error("خطا در API ثبت‌نام:", error.message);
    throw error;
  }
}

export { getCaptcha, registerUser };
