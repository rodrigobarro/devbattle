import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function NavBar() {
  return (
    <>
      <div className="w-screen flex flex-row justify-between bg-slate-200 h-16 items-center">
        <Image className="ml-4" src="/logo.svg" width={72} height={72} alt="" />
        <Button className="mr-4">Login</Button>
      </div>
    </>
  );
}
