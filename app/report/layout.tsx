import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/damavand.jpg"
          fill
          alt="auth pages background"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
        <div className="bg-white/80 backdrop-blur-[20px] backdrop-saturate-[180%] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-400 rounded-xl p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
