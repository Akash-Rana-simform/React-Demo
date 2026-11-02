import PlainWords from "../components/PlainWords.jsx";
import CartQuantity from "../components/CartQuantity.jsx";
import ProductSearch from "../components/ProductSearch.jsx";
import CheckoutForm from "../components/CheckoutForm.jsx";
import PriceFilter from "../components/PriceFilter.jsx";
import ProductList from "../components/ProductList.jsx";
import ShopToggles from "../components/ShopToggles.jsx";
import RulesOfHooks from "../components/RulesOfHooks.jsx";

export default function HooksPage() {
  return (
    <>
      <h1>1 · Hooks</h1>
      <PlainWords file="src/components/CartQuantity.jsx and ProductSearch.jsx">
        A component forgets everything each time React draws it again. useState gives it a memory, like the items in a cart.
      </PlainWords>
      <h2>The basics: useState</h2>
      <div className="grid">
        <CartQuantity />
        <ProductSearch />
      </div>

      <h2>More hooks</h2>
      <PlainWords file="src/components/CheckoutForm.jsx, PriceFilter.jsx, ProductList.jsx">
        useRef remembers without redrawing. useMemo remembers a slow result. useCallback remembers a function.
      </PlainWords>
      <div className="grid">
        <CheckoutForm />
        <PriceFilter />
        <ProductList />
      </div>

      <h2>Your own hooks and the rules</h2>
      <div className="grid">
        <ShopToggles />
        <RulesOfHooks />
      </div>
    </>
  );
}
