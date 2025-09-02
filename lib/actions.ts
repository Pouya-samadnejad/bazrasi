"use server";

import { registerUser } from "@/service/user";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  phoneNumber: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
  nationalCode: z
    .string()
    .length(10, "کد ملی باید دقیقا 10 رقم باشد")
    .regex(/^\d+$/, "فقط اعداد مجاز هستند"),
  firstName: z.string().min(1, "لطفا نام خود را وارد کنید"),
  lastName: z.string().min(1, "لطفا نام خانوادگی خود را وارد کنید"),
  fatherName: z.string().min(1, "لطفا نام پدر را وارد کنید"),
  birthDate: z.string().min(1, "لطفا تاریخ تولد را وارد کنید"),
});

export async function addUser(prevState: any, formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = formSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.format(),
    };
  }

  const dataForApi = {
    ...parsed.data,
    birthDate: new Date(parsed.data.birthDate).toISOString(),
  };

  try {
    // Send the corrected data to your service function
    await registerUser(dataForApi);
  } catch (error) {
    console.error("Registration failed:", error);
    return {
      success: false,
      errors: { _form: ["Something went wrong with the API call."] },
    };
  }
  console.log("API call successful. Attempting to redirect...");
  redirect("/");
}
