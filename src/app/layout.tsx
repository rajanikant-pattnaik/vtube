"use client";
import { UserContextProvider } from "@/context/UserContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [id, setid] = useState('')
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  useEffect(() => {
    const val = localStorage.getItem("user");
    if (val !== null) {
      const userval = JSON.parse(val);
      setusername(userval.user.username);
    }
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider value={{id,setid,username,setusername,email,setemail}}>
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
