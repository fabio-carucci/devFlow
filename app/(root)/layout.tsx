import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
