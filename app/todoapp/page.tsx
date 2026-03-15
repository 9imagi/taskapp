"use client";

import { Toaster } from "@/components/ui/sonner";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function TodoApp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const handleVisisble = () => {
    setVisible(!visible);
  };
  const add = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos((prev) => [...prev, text.trim()]);
    setText("");
    return toast.success("Task added successfully.", {
      style: { background: "blue" },
    });
  };
  const remove = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div className=" flex justify-center items-center h-screen flex-col pt-20">
      <form onSubmit={add} className="mb-7">
        <div className="flex gap-6">
          {" "}
          <input
            className="border bg-blue-400 px-2"
            type="text"
            value={text}
            placeholder="new todo..."
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border rounded-sm px-3" type="submit">
            Add task
          </button>
        </div>
      </form>
      <button
        className="hover:bg-fuchsia-400 rounded-sm px-3 shadow-lg "
        onClick={handleVisisble}
      >
        <p>{visible ? "Close TodoLists" : "View TodoLists"}</p>
      </button>
      <Toaster position="top-center" />

      {visible && (
        <ul className="mt-20 p-5 w-1/2 h-auto text-lg font-semibold shadow-gray-600 shadow-md">
          <h2 className="text-center mb-4 text-xl text-bold text-blue-800">
            <u> Tasks</u>
          </h2>

          {todos.length === 0 ? (
            <p className="text-red-500 text-sm">Task is empty</p>
          ) : (
            <div>
              {todos.map((todo, i) => (
                <li
                  key={i}
                  className="flex justify-between mb-5  items-center "
                >
                  {todo}
                  <button
                    className="bg-red-500 px-3 rounded-sm h-10 text-white "
                    onClick={() => remove(i)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </div>
          )}
        </ul>
      )}
    </div>
  );
}
