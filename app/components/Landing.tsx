"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Leaf, ShieldCheck, Sparkles, Truck } from "lucide-react";
import ScrollProgress from "./ScrollProgress";
import MouseGlow from "./MouseGlow";
import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";
type FeaturedDish = {
  name: string;
  desc: string;
  image: string;
};

const reasons = [
  {
    title: "100% Pure Veg",
    desc: "Only vegetarian kitchens with strict sourcing.",
    Icon: Leaf,
  },
  {
    title: "Hygienic Cooking",
    desc: "Sanitized prep, filtered water, and daily checks.",
    Icon: ShieldCheck,
  },
  {
    title: "Home-style Taste",
    desc: "Comforting recipes just like homemade food.",
    Icon: Home,
  },
  {
    title: "Fast Delivery",
    desc: "Packed hot, delivered fast via top partners.",
    Icon: Truck,
  },
  {
    title: "Fresh Ingredients",
    desc: "Farm-fresh produce with natural spices.",
    Icon: Sparkles,
  },
];

const reviews = [
  {
    name: "Aakriti",
    quote: "Tastes like maa ke haath ka khana. Truly premium!",
  },
  {
    name: "Rahul",
    quote: "Clean, comforting, and delivered steaming hot.",
  },
  {
    name: "Meera",
    quote: "Pure veg + hygienic + delicious. Perfect combo.",
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type LandingProps = {
  featuredDishes: FeaturedDish[];
  heroImage: string;
  hygieneImage: string;
  homeTasteImage: string;
  deliveryImage: string;
};

export default function Landing({
  featuredDishes,
  heroImage,
  hygieneImage,
  homeTasteImage,
  deliveryImage,
}: LandingProps) {
  return (
    <div className="relative min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <div className="texture-layer" aria-hidden="true" />
      <ScrollProgress />
      <MouseGlow />

      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-white/40 bg-white/60 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[var(--saffron)] text-white font-bold">Z</div>
              <div>
                <p className="text-base sm:text-lg font-semibold tracking-tight">zumoj</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[var(--muted)] whitespace-nowrap">Pure Veg Cloud Kitchen</p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm md:flex">
              <a className="nav-link" href="#featured">Dishes</a>
              <a className="nav-link" href="#why">Why us</a>
              <a className="nav-link" href="#hygiene">Hygiene</a>
              <a className="nav-link" href="#reviews">Reviews</a>
            </nav>
            <motion.a
              href="#cta"
              className="btn-primary px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Order Now
            </motion.a>
          </div>
        </header>

        <motion.main
          className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <section id="hero" className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--saffron)] shadow-sm">
                  100% Pure Veg
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
                  Ghar jaisa swaad, ab har order ke saath
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-[var(--muted)]">
                  Ghar ka khana ghar se — warm, hygienic, and full of flavor. Premium vegetarian meals crafted by chefs, delivered fresh with care.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="#cta"
                    className="btn-primary"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Order Now
                  </motion.a>
                  <motion.a
                    href="#featured"
                    className="btn-secondary"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Menu
                  </motion.a>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                  <span className="rounded-full border border-[var(--gold)]/40 bg-white/80 px-3 py-1">Available soon on Swiggy & Zomato</span>
                  <span className="rounded-full border border-[var(--mint)]/40 bg-white/80 px-3 py-1">Premium packaging</span>
                </div>
              </Reveal>
            </div>

            <Reveal className="relative">
              <div className="absolute -top-8 right-4 hidden rounded-2xl bg-white/70 px-4 py-2 text-xs font-semibold text-[var(--tomato)] shadow md:block">
                Opening Soon
              </div>
              <ParallaxImage
                src={heroImage}
                alt="Premium Indian thali"
                width={1200}
                height={1000}
                priority
                wrapperClassName="aspect-[4/3] rounded-[32px] border border-white/60 bg-white/40 shadow-xl"
                imageClassName="h-full w-full object-cover"
              />
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="glass-card">
                  <p className="text-sm font-semibold">Hygienic cooking</p>
                  <p className="text-xs text-[var(--muted)]">Sanitized prep zones</p>
                </div>
                <div className="glass-card">
                  <p className="text-sm font-semibold">Home-style taste</p>
                  <p className="text-xs text-[var(--muted)]">Traditional recipes</p>
                </div>
              </div>
            </Reveal>
          </section>

          <Reveal>
            <section id="featured" className="section-block">
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <div>
                  <p className="section-kicker">Featured Indian dishes</p>
                  <h2 className="section-title">Signature plates, crafted with love</h2>
                </div>
                <span className="rounded-full border border-[var(--gold)]/50 bg-white/80 px-4 py-2 text-sm">Seasonal menus • Chef specials</span>
              </div>
              <motion.div
                className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={gridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {featuredDishes.map((dish) => (
                  <motion.article
                    key={dish.name}
                    className="glass-card overflow-hidden"
                    variants={cardVariants}
                    whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(124, 61, 0, 0.15)" }}
                  >
                    <div className="relative h-44">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2 p-5">
                      <h3 className="text-lg font-semibold">{dish.name}</h3>
                      <p className="text-sm text-[var(--muted)]">{dish.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </section>
          </Reveal>

          <Reveal>
            <section id="why" className="section-block">
              <p className="section-kicker">Why choose us</p>
              <h2 className="section-title">Premium food, pure-hearted service</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reasons.map(({ title, desc, Icon }) => (
                  <motion.div key={title} className="glass-card" whileHover={{ y: -4 }}>
                    <div className="flex items-center gap-3">
                      <div className="icon-badge">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold">{title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-[var(--muted)]">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="hygiene" className="section-block grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <p className="section-kicker">Hygienic cooking</p>
                <h2 className="section-title">Spotless kitchens, premium standards</h2>
                <p className="text-[var(--muted)]">
                  From sanitized stations to temperature-controlled storage, every step follows strict hygiene protocols so you can eat with confidence.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="tag">Daily sanitization</span>
                  <span className="tag">Filtered water</span>
                  <span className="tag">Chef supervision</span>
                </div>
              </div>
              <ParallaxImage
                src={hygieneImage}
                alt="Hygienic kitchen"
                width={1200}
                height={900}
                wrapperClassName="aspect-[4/3] rounded-[28px] border border-white/60 bg-white/50 shadow-lg"
                imageClassName="h-full w-full object-cover"
              />
            </section>
          </Reveal>

          <Reveal>
            <section id="home-taste" className="section-block grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <ParallaxImage
                src={homeTasteImage}
                alt="Home-style Indian curry"
                width={1200}
                height={900}
                wrapperClassName="aspect-[4/3] rounded-[28px] border border-white/60 bg-white/50 shadow-lg"
                imageClassName="h-full w-full object-cover"
              />
              <div className="space-y-4">
                <p className="section-kicker">Home-style taste</p>
                <h2 className="section-title">Comfort food inspired by tradition</h2>
                <p className="text-[var(--muted)]">
                  Recipes passed down through families, slow-cooked to preserve aroma, warmth, and that unmistakable ghar ka swaad.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="tag">Hand-ground masalas</span>
                  <span className="tag">Slow-cooked gravies</span>
                  <span className="tag">Balanced flavors</span>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="delivery" className="section-block grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <p className="section-kicker">Fast delivery</p>
                <h2 className="section-title">Hot, fresh, and right on time</h2>
                <p className="text-[var(--muted)]">
                  Premium packaging locks in heat and flavor. Partnered with trusted delivery platforms for speedy service across the city.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="tag">Heat-sealed packs</span>
                  <span className="tag">Live order tracking</span>
                  <span className="tag">Reliable partners</span>
                </div>
              </div>
              <ParallaxImage
                src={deliveryImage}
                alt="Fast food delivery"
                width={1200}
                height={900}
                wrapperClassName="aspect-[4/3] rounded-[28px] border border-white/60 bg-white/50 shadow-lg"
                imageClassName="h-full w-full object-cover"
              />
            </section>
          </Reveal>

          <Reveal>
            <section id="reviews" className="section-block">
              <p className="section-kicker">Customer reviews</p>
              <h2 className="section-title">Loved by families, professionals, and foodies</h2>
              <motion.div
                className="mt-8 grid gap-6 md:grid-cols-3"
                variants={gridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {reviews.map((review) => (
                  <motion.div
                    key={review.name}
                    className="glass-card"
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                  >
                    <p className="text-sm text-[var(--muted)]">"{review.quote}"</p>
                    <p className="mt-4 text-sm font-semibold text-[var(--ink)]">— {review.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </Reveal>

          <Reveal>
            <section id="cta" className="section-block">
              <div className="animated-gradient relative rounded-[32px] border border-white/70 bg-white/70 p-10 shadow-xl">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4">
                    <p className="section-kicker">Ready to taste Zumoj?</p>
                    <h2 className="section-title">Premium vegetarian meals, delivered with love</h2>
                    <p className="text-[var(--muted)]">
                      Opening soon. Join the waitlist and be the first to know when we launch in your area.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <motion.a
                      href="#"
                      className="btn-primary"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Join Waitlist
                    </motion.a>
                    <motion.a
                      href="#featured"
                      className="btn-secondary"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore Dishes
                    </motion.a>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        </motion.main>

        <footer className="border-t border-white/60 bg-white/50">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-base font-semibold">Zumoj Food Private Limited</p>
              {/* <p>Ghar ka khana ghar se • 100% Pure Veg</p> */}
              <p>Kh. No. 798, Ambika Inn Complex, Fire Station Road, Sector 5, Harola, Noida UP, 201301</p>
              <p className="text-xs">
                Some visual assets sourced from{" "}
                <a className="nav-link" href="https://www.vecteezy.com/" target="_blank" rel="noreferrer">
                  Vecteezy
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a className="nav-link" href="#featured">Dishes</a>
              <a className="nav-link" href="#why">Why us</a>
              <a className="nav-link" href="#reviews">Reviews</a>
            </div>
            <p>Opening soon on Swiggy & Zomato</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
