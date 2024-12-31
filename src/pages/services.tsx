
import BoxReveal from "~/components/box-reveal";
import Container from "~/components/container/container";
import { ReactLenis } from 'lenis/react';
import { Card } from "~/components/cards/stack";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { v4 } from "uuid";
import LogoCarousel from "~/components/carrousel/logo";
import { VercelIcon, ClaudeAIIcon, NextjsIcon, TailwindCSSIcon, TypeScriptIcon, StripeIcon, OpenAIIconBlack, NestJs, ViteJS, PostgreSQL, MongoDB, Python, Redis, PHP, Docker, Linux } from "~/components/icons/brands";
import { FocusCards } from "~/components/cards/image";

const projects = [
  {
    title: 'Inteligencia artificial',
    description: 'Desarrollamos soluciones de inteligencia artificial y analisis de datos, orientado 100% a lo que necesitas, tales como: OCR, Text to speech, Speech to text, Summarizers, RAGs, GPTs, entre otros.',
    link: '/ai.svg',
    color: '#1A1A7A',
  },
  {
    title: 'Desarrollo web & mobile',
    description: 'Creamos sitios web y aplicaciones móviles a medida, optimizados para proporcionar la mejor experiencia de usuario y maximizar la eficiencia de tu negocio.',
    link: '/programing.svg',
    color: '#2C2C2C',
  },
  {
    title: 'Desarrollo de APIs & Micro-servicios',
    description: 'Diseñamos y desarrollamos APIs robustas y micro-servicios escalables que permiten la integración perfecta entre tus sistemas y aplicaciones.',
    link: '/api.svg',
    color: '#0D0D5C',
  },
  {
    title: 'Telecomunicaciones',
    description: 'Ofrecemos soluciones de telecomunicaciones avanzadas que garantizan una conectividad segura y eficiente, adaptadas a las necesidades de tu empresa.',
    link: '/networking.svg',
    color: '#6A1B9A',
  },
  {
    title: 'Marketing digital',
    description: 'Desarrollamos estrategias de marketing digital personalizadas que aumentan la visibilidad de tu marca y generan un mayor engagement con tu audiencia.',
    link: '/marketing.svg',
    color: '#2C2C2C',
  },
  {
    title: 'Soporte técnico y mesa de ayuda',
    description: 'Brindamos soporte técnico especializado y una mesa de ayuda proactiva para asegurar que todos tus sistemas funcionen sin problemas y que cualquier problema sea resuelto rápidamente."',
    link: '/technical_support.svg',
    color: '#2196F3',
  },

];

const Industries = [
  { title: "Medicina", src: "/industry/medicina.webp" },
  { title: "Servicios financieros", src: "/industry/finanzas.webp" },
  { title: "Educación", src: "/industry/education.webp" },
  { title: "eComerce", src: "/industry/ecommerce.webp" },
  { title: "Ciencia", src: "/industry/ciencia.webp" },
  { title: "Gobierno", src: "/industry/gobierno.webp" },
  { title: "Industria 4.0", src: "/industry/industria.webp" },
  { title: "Marketing", src: "/industry/marketing.webp" }
]


export default function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],

  });

  return (
    <>
      <Container className="min-w-full min-h-screen content-center px-4 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-3 md:gap-9 lg:grid-cols-2">
        <div className="items-center justify-center overflow-hidden pt-30 md:col-span-2 lg:col-span-1">
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <p className="mt-[.5rem] text-[1rem]">
              <span className="text-red-800">SOLUCIONES A LA MEDIDA</span>
            </p>
          </BoxReveal>
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
              Aplicaciones de IA para la optimizacion y automatización de procesos internos
              <span className="text-red-800">.</span>
            </h2>
          </BoxReveal>
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <div className="mt-6">
              <p className="text-md md:text-xl lg:text-2xl">
                Desarrollamos soluciones web, moviles y desktop que cubran las necesidades de tu institución aplicando inteligencia artificial 100% desarrollada por nuestro equipo y sin utilizar terceros. Ademas, garantizamos soporte tecnico durante 365 dias despues de la puesta a producción.
              </p>
            </div>
          </BoxReveal>
        </div>
        <div>
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <img className="p-10 w-8/12 sm:w-4/12 md:w-full lg:w-full xl:w-2/3 mx-auto" src="applications.svg" alt="Aplicaciones" />
          </BoxReveal>
        </div>
      </Container>
      <Container className="min-w-full min-h-screen content-center px-4 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-3 md:gap-9 lg:grid-cols-2">
        <div>
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <img className="p-10 w-8/12 sm:w-4/12 md:w-full lg:w-full xl:w-2/3 mx-auto" src="solutions.svg" alt="Soluciones" />
          </BoxReveal>
        </div>
        <div className="items-center justify-center overflow-hidden pt-30 md:col-span-2 lg:col-span-1">
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <p className="mt-[.5rem] text-[1rem]">
              <span className="text-red-800">SOLUCIONES INTEGRALES</span>
            </p>
          </BoxReveal>
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
              Convertimos tus ideas en realidad con toda la infraestructura necesaria
              <span className="text-red-800">.</span>
            </h2>
          </BoxReveal>
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <div className="mt-6">
              <p className="text-md md:text-xl lg:text-2xl">
                Sabemos que para ti y tus colaboradores es importante que los sistemas sean eficientes y eficacez. Es por eso que consideramos todos los aspectos para ofrecerte una solución integral con hardware, software y logistica. <br />
                Nuestro equipo es una mezcla de distintos talentos, lo que nos permite entender y resolver los problemas desde diferentes perspectivas.
              </p>
            </div>
          </BoxReveal>
        </div>
      </Container>
      <Container className="min-w-full min-h-screen content-center px-4 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-3 md:gap-9 lg:grid-cols-2">
        <div className="items-center justify-center overflow-hidden pt-30 md:col-span-2 lg:col-span-1">
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <p className="mt-[.5rem] text-[1rem]">
              <span className="text-red-800">DESARROLLO</span>
            </p>
          </BoxReveal>
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
              Desarrollamos tu sistema siguiendo metodologías ágiles de desarrollo de software
              <span className="text-red-800">.</span>
            </h2>
          </BoxReveal>
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <div className="mt-6">
              <p className="text-md md:text-xl lg:text-2xl">
                Incluso la linea de código más insignificante se crea adhiriéndose a estrictos estándares de ingeniería de software. Gracias a ello, desarrollamos sistemas escalables, con bajos indices de error, que responden rápidamente y son compatibles con múltiples plataformas, facilitando eficazmente las actualizaciones futuras.
              </p>
            </div>
          </BoxReveal>
        </div>
        <div>
          <BoxReveal boxColor="#991b1b" duration={0.5}>
            <img className="p-10 w-8/12 sm:w-4/12 md:w-full lg:w-full xl:w-2/3 mx-auto" src="development.svg" alt="Desarrollo" />
          </BoxReveal>
        </div>
      </Container>
      <ReactLenis root>
        <main className='bg-black' ref={container}>
          <section className='text-white h-[70vh] w-full bg-slate-950 grid place-content-center '>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <h1 className='text-3xl md:text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              SERVICIOS
            </h1>
          </section>
          <section className='text-white w-full bg-slate-950'>
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={v4()}
                  i={i}
                  url={project?.link}
                  title={project?.title}
                  color={project?.color}
                  description={project?.description}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </section>
        </main>
      </ReactLenis>
      <Container className="grid justify-items-center min-w-full">
        <LogoCarousel
          columnCount={4}
          logos={
            [
              { name: "Vercel", id: 1, img: VercelIcon },
              { name: "Claude", id: 2, img: ClaudeAIIcon },
              { name: "Nextjs", id: 3, img: NextjsIcon },
              { name: "Tailwind", id: 4, img: TailwindCSSIcon },
              { name: "Typescript", id: 5, img: TypeScriptIcon },
              { name: "Stripe", id: 6, img: StripeIcon },
              { name: "OpenAI", id: 7, img: OpenAIIconBlack },
              { name: "NestJS", id: 8, img: NestJs },
              { name: "ViteJs", id: 9, img: ViteJS },
              { name: "PostgreSQL", id: 10, img: PostgreSQL },
              { name: "MongoDB", id: 11, img: MongoDB },
              { name: "Python", id: 12, img: Python },
              { name: "Redis", id: 13, img: Redis },
              { name: "Php", id: 14, img: PHP },
              { name: "Docker", id: 15, img: Docker },
              { name: "Linux", id: 16, img: Linux },
            ]
          }
        />
      </Container>
      <Container className="min-w-full p-20">
        <h3 className="text-center text-3xl font-bold mb-10">Industrias y sectores</h3>
        <FocusCards cards={Industries} />
      </Container>
    </>
  )
}