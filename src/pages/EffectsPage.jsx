import PlainWords from "../components/PlainWords.jsx";
import CategoryLoader from "../components/CategoryLoader.jsx";
import DealCountdown from "../components/DealCountdown.jsx";
import LoadProducts from "../components/LoadProducts.jsx";
import EffectMistakes from "../components/EffectMistakes.jsx";

export default function EffectsPage() {
  return (
    <>
      <h1>2 · Effects</h1>
      <PlainWords file="src/components/CategoryLoader.jsx, DealCountdown.jsx, LoadProducts.jsx, EffectMistakes.jsx">
        useEffect runs your code after the screen is drawn, like loading products from a server. Cleanup stops what the effect started. The list at the end says when to run it again.
      </PlainWords>
      <div className="grid">
        <CategoryLoader />
        <DealCountdown />
        <LoadProducts />
        <EffectMistakes />
      </div>
    </>
  );
}
