import React from "react";
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      icon: Package,
      value: "20K+",
      label: "Products",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Happy Customers",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Avg. Rating",
    },
    {
      icon: Truck,
      value: "99%",
      label: "On-time Delivery",
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Trust",
      description:
        "Every product is verified for quality and authenticity before listing.",
    },
    {
      icon: Truck,
      title: "Speed",
      description:
        "We obsess over delivery times so your orders arrive when promised.",
    },
    {
      icon: HeartHandshake,
      title: "Community",
      description:
        "Built around real customer feedback, not just business metrics.",
    },
    {
      icon: Star,
      title: "Quality",
      description:
        "We curate the best — no filler, no junk, just great products.",
    },
  ];

  const team = [
    {
      letter: "A",
      name: "Aryan Shah",
      role: "Founder & CEO",
      color: "bg-lime-400",
      textColor: "text-black",
    },
    {
      letter: "P",
      name: "Priya Mehta",
      role: "Head of Product",
      color: "bg-blue-500",
      textColor: "text-white",
    },
    {
      letter: "R",
      name: "Rohan Verma",
      role: "Lead Engineer",
      color: "bg-purple-500",
      textColor: "text-white",
    },
    {
      letter: "S",
      name: "Sneha Kapoor",
      role: "Design Director",
      color: "bg-rose-500",
      textColor: "text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Main Content */}
      <main className="mx-auto w-full max-w-[1000px] px-6 py-12">
        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          {/* Logo Icon */}
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400">
            <Zap
              size={25}
              strokeWidth={3}
              className="fill-black text-black"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About{" "}
            <span className="text-lime-400">
              SkyMart
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[620px] text-sm leading-6 text-zinc-500 sm:text-base">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </section>

        {/* Stats */}
        <section className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex h-[88px] flex-col items-center justify-center rounded-xl border border-zinc-600 bg-[#111111]"
              >
                <Icon
                  size={16}
                  strokeWidth={2}
                  className="mb-1 text-lime-400"
                />

                <h3 className="text-xl font-bold leading-5">
                  {stat.value}
                </h3>

                <p className="mt-1 text-[10px] text-zinc-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </section>

        {/* Our Story */}
        <section className="mt-10 rounded-2xl border border-zinc-600 bg-[#111111] px-7 py-7 sm:px-8">
          <h2 className="text-xl font-semibold">
            Our Story
          </h2>

          <div className="mt-4 space-y-4 text-[12px] leading-5 text-zinc-500 sm:text-[13px]">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked
              ourselves: what if shopping online was actually enjoyable?
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across
              the country. We stock electronics, fashion, jewelry, and
              everyday essentials — all at prices that don't require a second
              mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </section>

        {/* What We Stand For */}
        <section className="mt-9">
          <h2 className="text-center text-xl font-semibold">
            What We Stand For
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex min-h-[88px] rounded-xl border border-zinc-600 bg-[#111111] p-4"
                >
                  {/* Icon Box */}
                  <div className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime-500/10">
                    <Icon
                      size={15}
                      strokeWidth={2}
                      className="text-lime-400"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-sm font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 max-w-[330px] text-[11px] leading-5 text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Meet The Team */}
        <section className="mt-9">
          <h2 className="text-center text-xl font-semibold">
            Meet the Team
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex h-[100px] flex-col items-center justify-center rounded-xl border border-zinc-600 bg-[#111111]"
              >
                {/* Avatar */}
                <div
                  className={`mb-2 flex h-9 w-9 items-center justify-center rounded-xl ${member.color} ${member.textColor} text-sm font-semibold`}
                >
                  {member.letter}
                </div>

                <h3 className="text-[11px] font-semibold">
                  {member.name}
                </h3>

                <p className="mt-0.5 text-[9px] text-zinc-500">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-8 rounded-2xl border border-lime-500/20 bg-[#0d0d0d] px-6 py-7 text-center">
          <h2 className="text-xl font-semibold">
            Ready to shop?
          </h2>

          <p className="mt-2 text-[11px] text-zinc-500">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            type="button"
            className="mt-4 inline-flex h-10 items-center gap-2 rounded-xl bg-lime-400 px-6 text-xs font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.2)]"
          >
            Browse Products
            <ArrowRight size={15} />
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-700 py-6 text-center">
        <h3 className="text-sm font-semibold text-lime-400">
          SkyMart
        </h3>

        <p className="mt-2 text-[9px] text-zinc-600">
          © 2025 SkyMart · Built with React + Redux + TanStack Query
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;