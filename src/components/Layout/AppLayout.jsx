import { Outlet } from "react-router-dom";
import { Footer } from "../ui/Footer";
import { Headers } from "../ui/Headers";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};
