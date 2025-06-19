// src/components/Layout/AuthLayout.tsx
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-8 p-16 bg-white">
      {children}
    </main>
  );
};

export default AuthLayout;
