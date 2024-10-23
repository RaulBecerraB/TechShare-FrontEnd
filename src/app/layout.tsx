import type { Metadata } from "next";
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
      <body className={`horizontal-flex ${inter.className}`}>
        <div className="side-nav">
          <SideNav />
        </div>
        <div className="m-7" style={{ width: '100%' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
