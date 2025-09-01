"use client";

import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import CaptchaField from "@/components/CaptchaField";
import { useState } from "react";

const loginSchema = z.object({
  nationalCode: z
    .string()
    .length(10, "کد ملی باید دقیقا 10 رقم باشد")
    .regex(/^\d+$/, "فقط اعداد مجاز هستند"),
  password: z
    .string()
    .min(8, "رمز عبور حداقل ۸ کاراکتر است")
    .regex(/[a-z]/, "رمز عبور باید حروف کوچک داشته باشد")
    .regex(/[A-Z]/, "رمز عبور باید حروف بزرگ داشته باشد")
    .regex(/[\W_]/, "رمز عبور باید حداقل یک نماد داشته باشد"),
  securityCode: z.string().nonempty("کد امنیتی را وارد کنید"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values: LoginFormValues) => {
    console.log("Login Success", values);
  };

  return (
    <div className="flex gap-5 lg:w-4xl">
      <div className="bg-white lg:flex flex-col justify-center items-center 2xl:gap-4 rounded-r-lg px-20 hidden">
        <Image src="/blue-logo.svg" width={280} height={280} alt="blue logo" />
        <div className="text-center text-sm">
          <p>درگاه سامانه های یک پارچه</p>
          <p>سازمان بازرسی کل کشور</p>
        </div>
        <Link href="/" className="text-left" dir="ltr">
          136.ir
        </Link>
      </div>

      <div className="px-20 py-10 my-8 w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl mb-5 font-bold">ورود</h2>
          <Link href="/">
            <Icon icon="solar:arrow-left-line-duotone" width="24" height="24" />
          </Link>
        </div>

        <FormProvider {...form}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="nationalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">کد ملی</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        {...field}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        minLength={10}
                        maxLength={10}
                        prefix={
                          <Icon
                            icon="solar:user-bold-duotone"
                            width="24"
                            height="24"
                          />
                        }
                        onBeforeInput={(e) => {
                          if (!/^\d*$/.test(e.data ?? "")) e.preventDefault();
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">رمز عبور</FormLabel>
                    <FormControl>
                      <div className="relative w-full">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="رمز عبور را وارد کنید"
                          className="pr-10 bg-white "
                          {...field}
                        />
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Icon
                            icon={
                              showPassword
                                ? "material-symbols-light:visibility-off-outline-rounded"
                                : "material-symbols-light:visibility-outline-rounded"
                            }
                            width="24"
                            height="24"
                          />
                        </Button>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <CaptchaField />

              <Button type="submit" className="w-full">
                ورود
              </Button>

              <Link
                href="/auth/register"
                className="block text-center rounded-lg py-2 border border-gray-300 text-stone-600 hover:text-black hover:border-black transition-all duration-200"
              >
                ثبت نام شهروند
              </Link>

              <div className="flex items-center justify-center gap-4 my-2 text-sm">
                <Link className="underline" href="/auth/forget">
                  فراموشی رمز عبور
                </Link>
                <Link className="underline" href="/auth/changeNumber">
                  تغییر شماره همراه
                </Link>
              </div>

              <div className="flex items-center gap-3 my-6">
                <div className="bg-stone-700 h-[1px] grow"></div>
                <h2 className="font-bold text-sm text-stone-700">
                  ورود از طریق
                </h2>
                <div className="bg-stone-700 h-[1px] grow"></div>
              </div>

              <div className="flex items-center justify-center gap-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white text-black border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                >
                  <Image
                    src="/dolatMan.png"
                    width={20}
                    height={20}
                    alt="دولت من"
                  />
                  دولت من
                </Link>

                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white text-black border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                >
                  <Image src="/sanalogo.png" width={16} height={16} alt="ثنا" />
                  ثنا قوه قضاییه
                </Link>
              </div>
            </form>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
}
