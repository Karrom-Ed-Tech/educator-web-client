import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { GlobalContextProvider } from "./contexts/globalContext";
import ScrollToTop from "./common/ScrollToTop";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    )
  );

  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
}

function Root() {
  return (
    <main className="relative">
      {/* <article className="z-[999999] mobile:hidden fixed top-0 left-0 w-full h-full flex items-center justify-center italic text-lg bg-background text-center">
        Coming soon to mobile
        <br /> Meanwhile please visit us on our desktop site
      </article> */}

      <Navbar />
      <Outlet />
      <Footer />

      <ScrollToTop />
    </main>
  );
}
