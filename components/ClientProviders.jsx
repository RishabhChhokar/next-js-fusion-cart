"use client";
import { Toaster } from "react-hot-toast";

export default function ClientProviders({ children }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
