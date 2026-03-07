// import { Button } from "@/components/ui/button";
import Link from "next/link";
import TodoApp from "./todoapp/page";

export default function Home() {
  return (
    <main className="w-full h-full p-5 flex justify-center flex-col items-center">
      {/* ?\Hero secton */}
      <section className="container  flex justify-center items-center border border-black bg-[url('/cup.jpg')]  h-screen mt-10 bg-cover bg-no-repeat">
        <div className="text-center">
          {" "}
          <h1 className="text-4xl font-extrabold">Welcome to My ToDo List</h1>
          <button className="hover:bg-gray-600/50 transition-all duration-450  border rounded-md px-5 mt-7 text-xl font-semibold text-white">
            <Link href={"/todoapp"}>Create Todo</Link>
          </button>
          <button className="ml-5 hover:bg-pink-600/50 transition-all duration-450  border rounded-md px-5 mt-7 text-xl font-semibold text-white">
            <Link href={"/#"}>View Todo</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
