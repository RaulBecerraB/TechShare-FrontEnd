import type { Metadata } from "next";

import "@/styles/globals.css";
import SideBar from "@/components/SideNav/SideNav";
import SideNav from "@/components/SideNav/SideNav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(
  {
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html>
      <body className="horizontal-flex">
        <div className="side-bar">
          <SideNav />
        </div>
        <div className="m-6" style={{ width: '100%' }}>
            {children}
        </div>
      </body>
    </html>
  );
}
