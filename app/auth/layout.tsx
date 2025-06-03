import { useIRTime } from "@/utils/GreetingUtil";
import Image from "next/image";
export default function Layout({ children }) {
  const { dayName, persianDate } = useIRTime();

  return (
    <>
      <div>
        <Image
          src="/authBackground.jpg"
          fill
          alt="auth pages background"
          className="object-cover"
          priority
        />
        <div className="bg-black/30 inset-0 z-1 absolute" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white/80 backdrop-blur-[20px] backdrop-saturate-[180%] border border-gray-400  rounded-xl shadow-lg overflow-auto">
          {children}
        </div>
      </div>

      <div className="w-full fixed bottom-0 left-0 h-10 flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-xl" />
        <p className="text-white relative z-10">
          {dayName} {persianDate}
        </p>
      </div>
    </>
  );
}
