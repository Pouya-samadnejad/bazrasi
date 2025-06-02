import api from "@/utils/api";

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

export { getCaptcha };
