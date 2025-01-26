import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Outlet />
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: {
            duration: 2000,
            style: {
              background: "rgba(7, 97, 37, 0.628)",
              color: "white",
            },
          },
        }}
      />
    </div>
  );
}

export default AppLayout;
