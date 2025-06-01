import api from "@/utils/api";

const getCaptcha = () => {
  return new Promise((resolve, reject) => {
    api
      .get("Bazresi/CreateCaptcha")
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export { getCaptcha };
