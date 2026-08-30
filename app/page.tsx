import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Default page of the application.
 * @returns 
 */
export default function Home() {
  return (
   <div>
    <h1 className="font-game text-2xl">Welcome to the Home Page</h1>
    <Button>Subscibe</Button>
   </div>
  );
}
