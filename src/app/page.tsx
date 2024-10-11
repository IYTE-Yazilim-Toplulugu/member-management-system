"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<number>(0);
  useEffect(() => {
    const getUsers = async () => {
      await axios.get("./api/member").then((res) => {
        setData(res.data.data);
      })
    }

    getUsers();
  }, []);
  return (
    <div className="h-screen w-screen flex justify-center items-center font-bold text-[100px] ">
      {
        data == 0 ? null : data
      }
    </div>
  );
}
