"use client";

import { getCaptcha } from "@/service/user";
import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import { AxiosResponse } from "axios";
import { CaptchaData } from "./types"; // یا جایگزین با تعریف مستقیم CaptchaData

export default function CaptchaField() {
  const { data, refetch, isFetching } = useQuery<AxiosResponse<CaptchaData>>({
    queryKey: ["captcha"],
    queryFn: getCaptcha,
  });

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="securityCode"
      render={({ field }) => (
        <FormItem>
          <FormLabel>کد امنیتی</FormLabel>
          <div className="flex items-center gap-4">
            <FormControl>
              <Input
                {...field}
                inputMode="numeric"
                pattern="[0-9]*"
                className="flex-1 bg-white"
                onBeforeInput={(e) => {
                  if (!/^\d*$/.test(e.data ?? "")) e.preventDefault();
                }}
              />
            </FormControl>

            <div className="flex items-center h-11 gap-1">
              {!isFetching && data?.data?.dntCaptchaImage && (
                <Image
                  src={`data:image/png;base64,${data.data.dntCaptchaImage}`}
                  alt="captcha"
                  unoptimized
                  width={120}
                  height={38}
                  className="rounded border"
                />
              )}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => refetch()}
              >
                {isFetching ? (
                  <Icon
                    icon="svg-spinners:ring-resize"
                    width="20"
                    height="20"
                  />
                ) : (
                  <Icon
                    icon="solar:refresh-circle-line-duotone"
                    width="20"
                    height="20"
                  />
                )}
              </Button>
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
