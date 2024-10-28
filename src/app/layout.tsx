import type { Metadata } from "next";
import "@/styles/globals.css";
import { useForm } from "@/app/hooks/useForm"
import "@/styles/globals.css";
import SideNav from "@/components/SideNav/SideNav";
import { inter } from "@/services/fonts"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html>
      <body className={`${inter.className}`}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
