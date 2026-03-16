"use client";
// import { Button } from "@/components/ui/button";
// import { MdAddTask } from "react-icons/md";
// import { FaCubes } from "react-icons/fa6";
// import { MdNotificationAdd } from "react-icons/md";
import Link from "next/link";
import TodoApp from "./todoapp/page";
import Test from "./test/page";

export default function Home() {
  const services = [
    {
      title: "Save Tasks",
      // icon: <MdAddTask />,
      description:
        " Lorem ipsum dolor sit iciendigendi. Necessitatibus, sed iste a eos .",
    },
    {
      title: "View Tasks",
      // icon: <FaCubes />,
      description:
        " Lorem ipsum dolor sit iciendigendi. Necessitatibus, sed iste a eos .",
    },
    {
      title: "Get notified",
      // icon: <MdNotificationAdd />,
      description:
        " Lorem ipsum dolor sit iciendigendi. Necessitatibus, sed iste a eos .",
    },
  ];
  return (
    <main className="w-full h-full p-5 flex justify-center flex-col items-center">
      {/* ?\Hero secton */}
      <section className="container bg-fixed flex justify-center items-center  bg-[url('/cup1.jpg')]  h-screen mt-12 bg-cover bg-no-repeat shadow-2xl shadow-amber-200 rounded-md">
        <div className="flex flex-col items-center justify-center">
          {" "}
          <h1 className="text-4xl font-extrabold">Welcome to My ToDo List</h1>
          <div className=" flex flex-col  gap-6 text-center md:flex-row mt-5">
            <button className="hover:bg-gray-600/50 transition-all duration-450  border rounded-md px-5 text-xl font-semibold text-white ">
              <Link href={"/todoapp"}>Create Todo</Link>
            </button>
            <button className="hover:bg-red-300/50 transition-all duration-450  border rounded-md px-5 text-xl font-semibold text-white ">
              <Link href={"/todoapp"}>View Todo</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="container   pt-3 flex justify-center" id="Service">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold font-sans mb-5">Services</h2>
          <div className=" flex  flex-col md:flex-row">
            {services.map((service) => (
              <div className="border- mr-2 rounded-md mb-3 w-2xs shadow-md">
                <div
                  key={service.title}
                  className="flex justify-center gap-3 text-xl font-bold items-center"
                >
                  <h2 className="">{service.title}</h2>
                  {/* {<span>{service.icon}</span>} */}
                </div>
                {<p className="text-wrap text-center">{service.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
