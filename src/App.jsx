import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HooksPage from "./pages/HooksPage.jsx";
import EffectsPage from "./pages/EffectsPage.jsx";
import RoutingPage from "./pages/RoutingPage.jsx";
import StructurePage from "./pages/StructurePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import NotFound from "./pages/NotFound.jsx";
import AccountLayout, { PickASection, Orders, Addresses, Wishlist } from "./pages/AccountLayout.jsx";
import { APP_NAME } from "./constants.js";

export default function App() {
  return (
    <>
      <header className="nav">
        <span className="brand">🛍️ {APP_NAME}</span>
        {/* NavLink is a Link that knows when it is the current page */}
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/hooks">Hooks</NavLink>
        <NavLink to="/effects">Effects</NavLink>
        <NavLink to="/routing">Routing</NavLink>
        <NavLink to="/structure">Structure</NavLink>
      </header>

      <main className="page">
        {/* One route = one web address matched to one page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<HooksPage />} />
          <Route path="/effects" element={<EffectsPage />} />
          <Route path="/routing" element={<RoutingPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/* A nested route: the child pages show inside the parent page */}
          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<PickASection />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/structure" element={<StructurePage />} />
          {/* The star catches every address that matched nothing above */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
