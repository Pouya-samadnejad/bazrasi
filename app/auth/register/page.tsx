"use client";

import { useActionState } from "react";
import { addUser } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function page() {
  const [state, formAction, isPending] = useActionState(addUser, {
    success: false,
    errors: null,
  });
  return (
    <div className="px-8 py-6">
      <div className="flex justify-between items-center">
        <h1 className="my-4">ثبت نام</h1>
        <Link href="/auth/login">
          <Icon icon="solar:arrow-left-linear" width="24" height="24" />
        </Link>
      </div>
      <div className="px-8 py-6 max-w-2xl mx-auto">
        <form action={formAction} className="grid grid-cols-2 gap-4">
          <div>
            <label>شماره موبایل</label>
            <Input name="phoneNumber" placeholder="09123456789" dir="ltr" />
            {state.errors?.phoneNumber?._errors && (
              <p className="text-red-500 text-sm">
                {state.errors.phoneNumber._errors.join(", ")}
              </p>
            )}
          </div>

          <div>
            <label>کد ملی</label>
            <Input name="nationalCode" dir="ltr" maxLength={10} />
            {state.errors?.nationalCode?._errors && (
              <p className="text-red-500 text-sm">
                {state.errors.nationalCode._errors.join(", ")}
              </p>
            )}
          </div>

          <div>
            <label>نام</label>
            <Input name="firstName" />
            {state.errors?.name?._errors && (
              <p className="text-red-500 text-sm">
                {state.errors.name._errors.join(", ")}
              </p>
            )}
          </div>

          <div>
            <label>نام خانوادگی</label>
            <Input name="lastName" />
            {state.errors?.familyName?._errors && (
              <p className="text-red-500 text-sm">
                {state.errors.familyName._errors.join(", ")}
              </p>
            )}
          </div>

          <div>
            <label>نام پدر</label>
            <Input name="fatherName" />
            {state.errors?.fatherName?._errors && (
              <p className="text-red-500 text-sm">
                {state.errors.fatherName._errors.join(", ")}
              </p>
            )}
          </div>

          <div>
            <label>تاریخ تولد</label>
            <Input type="date" name="birthDate" />
            {state.errors?.birthDate?._errors && (
              <p className="text-red-500 text-sm">
                {state.errors.birthDate._errors.join(", ")}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="bg-blue-800 hover:bg-blue-950 text-white"
            disabled={isPending}
          >
            {isPending ? "در حال ارسال..." : "ثبت نام"}
          </Button>

          {state.success && (
            <p className="text-green-600 mt-2">
              ✅ ثبت‌نام با موفقیت انجام شد!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
