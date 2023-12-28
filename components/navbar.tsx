"use client";

import { Home, ScrollTextIcon, Code, FlaskConical } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useScrollTop } from "@/hooks/scroll_hook";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const router = useRouter();
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-[#000000] fixed top-0 flex flex-row justify-between items-center w-full p-2.5",
      scrolled && "border-b border-[#3F3F3F] shadow-sm transition-opacity"
    )}>


      <Button
      onClick={() => {router.push("/")}}
      >
        <Home className="h-4 w-4" />
        {/* <p className="pl-1">home</p> */}
      </Button>

      <div className="flex gap-x-2">
        <Button
        onClick={() => {router.push("/#experience")}}
        >
          <FlaskConical className="h-4 w-4" />
          <p className="pl-2">experience</p>
        </Button>

        <Button
        onClick={() => {router.push("/#projects")}}
        >
          <Code className="h-4 w-4" />
          <p className="pl-2">projects</p>
        </Button>

        <Button
        onClick={() => open("https://drive.google.com/file/d/1sM6VJEPz_oar718KaT88HC0niAlitGLl/view?usp=sharing")}
        >
          <ScrollTextIcon className="h-4 w-4" />
          <p className="pl-2">resume</p>
        </Button>
      </div>
    </div>
  )
}

export default Navbar;