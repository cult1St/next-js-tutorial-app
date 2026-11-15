import Image from "next/image";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <main id="main">
      {/* HERO: two columns on desktop, one column on mobile. */}
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">THE EVERYDAY COLLECTION / 2026</p>
          <h1>
            A little less.
            <br />A little <em>better.</em>
          </h1>
          <p className="intro">
            Considered essentials for the spaces you love.
            <br />
            Made to feel good. Designed to stay.
          </p>
          <a className="button" href="#shop">
            Find your everyday <span>↗</span>
          </a>
          <p className="quiet-note">— &nbsp; Simple things. Lasting impressions.</p>
        </div>
        <div className="hero-image">
          <span className="image-label">OBJECTS WITH INTENTION</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuslr4GfzZvJqW1xHvgYzG1iUycweqwj_OzQhxAKH4iQ&s=10"
            alt="Natural oak accent chair with a softly upholstered seat"
            width={420}
            height={460}
          />
          <a className="hero-caption" href="product.html">
            <div>
              <strong>The Everyday Chair</strong>
              <small>Natural oak · ₦85,000</small>
            </div>
            <span>↗</span>
          </a>
        </div>
      </section>
      <div className="container benefits">
        <p>
          ✧ <span>Thoughtfully designed</span>
        </p>
        <p>
          ◉ <span>Quality in every detail</span>
        </p>
        <p>
          ↗ <span>Delivered to your door</span>
        </p>
      </div>
      {/* PRODUCT GRID: reuse this structure as a ProductCard component in React. */}
      <ProductSection />
      <section className="container story" id="story">
        <div className="story-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuslr4GfzZvJqW1xHvgYzG1iUycweqwj_OzQhxAKH4iQ&s=10"
            alt="Earth-toned ceramic vase with a leafy stem"
            width={420}
            height={460}
            loading="lazy"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">LESS, BUT MORE MEANINGFUL</p>
          <h2>
            Make room for
            <br />
            the good things.
          </h2>
          <p>
            We believe everyday objects should do more than fill a space. They
            should bring a little warmth, a little ease, and a lot of you.
          </p>
          <a className="text-link" href="#shop">
            Meet your new essentials ↗
          </a>
        </div>
      </section>
    </main>

  );
}
