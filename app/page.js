"use client"
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/store/features/Theme/themeSlice";
export default function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={`min-h-screen ${theme} flex justify-center items-cente text-3xl`}>
      <button onClick={() => {dispatch(toggleTheme()); console.log("theme", theme);
      }}>{theme} theme</button>
    </div>
  );
}
