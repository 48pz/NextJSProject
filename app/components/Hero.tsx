"use client";

import { motion } from "framer-motion";
import Button from "./products/Button";
import Image from "next/image";
const Hero = () => {
  const handleExplor = () => {
    const el = document.getElementById("productsSection");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="h-[50vh] bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto h-full px-6">
        <div className="h-full flex">
          <motion.div
            className="w-1/2 flex flex-col justify-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="max-w-md pl-8">
              <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight whitespace-nowrap text-pink">
                Power Your Digital Life
              </h1>
              <p className="my-4 text-lg leading-7  text-accent max-w-xl whitespace-nowrap">
                Discover phones, laptops, wearables and accessories
              </p>
              <Button
                label={"Explore now"}
                onClick={() => {
                  handleExplor();
                }}
              />
              <p className="mt-4 text-sm leading-6 text-white/60">
                Trusted brands · Secure checkout · Fast delivery
              </p>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 h-full w-1/2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <Image
              src="/hero-banner.jpg"
              alt="Hero visual"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
