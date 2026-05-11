"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-16 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-6 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="font-source-serif text-4xl md:text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Our Services
          </h2>
          <p className="hidden md:block font-mono text-sm text-foreground/60 md:text-base">/ What we bring to the table</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "Web Design",
              description: "The internet has plenty of forgettable websites. Yours won't be one of them. We design and build sites that feel as good as they look — fast, purposeful, and built to convert.",
              shortDescription: "We design and build sites that feel as good as they look.",
              direction: "top",
            },
            {
              title: "Visual Design",
              description: "Design that stops the scroll. From layouts to imagery to typography, every visual decision is intentional. We create work that's distinctly yours.",
              shortDescription: "From layouts to imagery to typography, every visual decision is intentional.",
              direction: "right",
            },
            {
              title: "Brand Identity",
              description: "Your brand is more than a logo. But we'll nail that too. Full identity systems — logo, color, type, print, and digital — built to stay consistent everywhere your business shows up.",
              shortDescription: "Full identity systems — logo, color, type, print, and digital.",
              direction: "left",
            },
            {
              title: "Digital Solutions",
              description: "Strategy that works behind the scenes. Site architecture, SEO, and web strategy to make sure people find you, trust you, and come back.",
              shortDescription: "SEO and web strategy to make sure people find and trust you.",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; shortDescription: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-source-serif text-xl font-light text-foreground md:text-3xl">{service.title}</h3>
      <p className="max-w-sm text-sm text-pretty leading-relaxed text-foreground/80 md:hidden">{service.shortDescription}</p>
      <p className="hidden max-w-sm text-sm leading-relaxed text-foreground/80 md:block md:text-base">{service.description}</p>
    </div>
  )
}
