import NavBar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";
import Image from "next/image";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-3/7 bg-[#00375c]" />
          <div className="w-full h-4/7 relative">
            <Image
              src="/dargahImg.svg"
              alt="پس زمینه درگاه"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col h-full items-center justify-center">
          <div className="w-full md:w-4/5 mb-3 px-2 md:px-0 mt-3">
            <NavBar />
          </div>

          <div className="lg:bg-white/80 bg-white backdrop-blur-[20px] backdrop-saturate-[180%] shadow-lg rounded-md w-full md:w-4/5 lg:h-[80%] h-full overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full h-full overflow-y-auto p-6">
                {children}
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
