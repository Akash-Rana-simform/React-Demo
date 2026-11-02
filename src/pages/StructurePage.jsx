import PlainWords from "../components/PlainWords.jsx";

// This project is the example. It uses the "start simple" layout.
const projectTree = `react-basics-demo/
├─ index.html              the one HTML file
├─ package.json            the list of tools the app needs
└─ src/
   ├─ main.jsx             starts the app
   ├─ App.jsx              the menu and the routes
   ├─ constants.js         products, categories, free delivery limit
   ├─ styles.css           the look
   ├─ pages/               whole screens
   │  ├─ Home.jsx
   │  ├─ HooksPage.jsx
   │  ├─ EffectsPage.jsx
   │  ├─ RoutingPage.jsx
   │  ├─ ProductPage.jsx
   │  ├─ AccountLayout.jsx
   │  ├─ OrderSuccess.jsx
   │  ├─ StructurePage.jsx
   │  └─ NotFound.jsx
   ├─ components/          small pieces used by pages
   │  ├─ CartQuantity.jsx
   │  ├─ ProductSearch.jsx
   │  ├─ CheckoutForm.jsx
   │  ├─ PriceFilter.jsx
   │  ├─ ProductList.jsx
   │  ├─ ShopToggles.jsx
   │  ├─ RulesOfHooks.jsx
   │  ├─ CategoryLoader.jsx
   │  ├─ DealCountdown.jsx
   │  ├─ LoadProducts.jsx
   │  ├─ EffectMistakes.jsx
   │  ├─ LogBox.jsx
   │  └─ PlainWords.jsx
   ├─ hooks/               code that does work, no screen
   │  ├─ useLog.js
   │  └─ useToggle.js
   └─ utils/               plain helper functions, no React
      └─ format.js         formatPrice, formatCountdown`;

const constantsCode = `// src/constants.js
export const FREE_DELIVERY_LIMIT = 499;
export const CATEGORIES = ["shoes", "bags", "watches"];

// used in CartQuantity.jsx
import { FREE_DELIVERY_LIMIT } from "../constants.js";`;

const utilsCode = `// src/utils/format.js
export function formatPrice(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

// used in CartQuantity.jsx, ProductList.jsx, ...
<p>Total: {formatPrice(total)}</p>   // ₹598`;

const splitCode = `// Logic: src/hooks/useToggle.js (no screen)
function useToggle(start) {
  const [on, setOn] = useState(start);
  return [on, () => setOn(!on)];
}

// UI: ShopToggles.jsx (only the screen)
const [showFilters, toggleFilters] = useToggle(false);
<button onClick={toggleFilters}>Show filters</button>`;

const grownTree = `src/
├─ features/
│  ├─ products/            everything about products
│  │  ├─ ProductListPage.jsx
│  │  ├─ ProductCard.jsx
│  │  └─ useProducts.js
│  ├─ cart/                everything about the cart
│  │  ├─ CartPage.jsx
│  │  ├─ CartItem.jsx
│  │  └─ useCart.js
│  └─ checkout/
│     └─ CheckoutPage.jsx
├─ shared/                 used by many features
│  ├─ Button.jsx
│  ├─ PriceTag.jsx
│  └─ formatPrice.js
├─ App.jsx
└─ main.jsx`;

export default function StructurePage() {
  return (
    <>
      <h1>4 · Structure</h1>
      <PlainWords>
        Put files where you would look for them first. Start simple. Group by feature, like cart and checkout, only when the shop grows.
      </PlainWords>

      <div className="grid">
        <section className="card">
          <h3>Start simple (this project)</h3>
          <pre className="tree">{projectTree}</pre>
        </section>
        <section className="card">
          <h3>When the shop grows</h3>
          <pre className="tree">{grownTree}</pre>
          <p className="hint">Move a file to <code>shared/</code> only when a second feature needs it. PriceTag is used by products, cart and checkout.</p>
        </section>
      </div>

      <div className="grid">
        <section className="card">
          <h3>Constants / configuration</h3>
          <p className="hint">The free delivery limit lives in one file. Change ₹499 to ₹999 once, and every page gets the new value.</p>
          <pre className="tree code">{constantsCode}</pre>
        </section>
        <section className="card">
          <h3>Utilities</h3>
          <p className="hint">Small helper functions with no React inside. Easy to reuse and easy to test.</p>
          <pre className="tree code">{utilsCode}</pre>
        </section>
        <section className="card">
          <h3>Separate UI and logic</h3>
          <p className="hint">The hook does the work. The component only shows the screen. You can redesign one without breaking the other.</p>
          <pre className="tree code">{splitCode}</pre>
        </section>
      </div>
    </>
  );
}
