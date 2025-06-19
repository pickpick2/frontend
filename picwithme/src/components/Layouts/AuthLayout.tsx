import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-8 p-16 bg-white">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
