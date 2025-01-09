import { useRef, useEffect, useState, lazy, Suspense } from "react";
import { TypeAnimation } from "react-type-animation";
import Globe, { GlobeMethods } from "react-globe.gl";
import Container from "../components/container/container";
import { SimpleCard } from "../components/cards/simple";
import InnerShadowCard from "~/components/cards/inner-shadow-card";
import { motion } from "framer-motion";
import { AuroraBackground } from "~/components/ui/aurora-background";
import ProgressBar from "~/components/progress/bar";
import { cn } from "~/lib/utils";
import { ProgressCircular } from "~/components/progress/circular";
import Spinner from "~/components/spinner/loading";

const GridPattern = lazy(
  () => import("~/components/animata/background/grid-pattern")
);

export default function MainPage() {
  const globeEl = useRef<GlobeMethods>();
  const globeDivEl = useRef<any>(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: ["green", "green"],
  }));

  useEffect(() => {
    if (!globeDivEl.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      if (globeDivEl.current.offsetWidth !== width) {
        setWidth(globeDivEl.current.offsetWidth);
      }
      if (globeDivEl.current.offsetHeight !== height) {
        setHeight(globeDivEl.current.offsetHeight);
      }
    });
    resizeObserver.observe(globeDivEl.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [globeDivEl.current]);

  useEffect(() => {
    if (globeEl?.current) {
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.7;
      globeEl.current.controls().enableRotate = false;
    }
  }, [globeEl]);

  return (
    <>
      <Container className="max-w-full w-screen h-screen relative dark:bg-black">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <TypeAnimation
            className="text-xl md:text-4xl"
            style={{
              fontWeight: "bold",
              color: "white",
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
              textAlign: "center",
            }}
            sequence={[
              "Bienvenidos a Zeetech",
              300,
              "Bienvenidos a Zeetech\nInnovando con inteligencia",
            ]}
            wrapper="span"
            speed={50}
            repeat={0}
          />
        </div>
        <div className="absolute w-full h-full z-10 bg-transparent"/>
        <div
          ref={globeDivEl}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-0"
        >
          <Globe
            ref={globeEl}
            globeImageUrl="/earth-night.webp"
            arcsData={arcsData}
            arcColor={"color"}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 40000 + 500}
            width={width}
            height={height}
          />
        </div>
      </Container>
      <SimpleCard
        className="max-w-full h-screen flex items-center justify-center"
        body={
          <>
            En ZeeTech, somos una empresa mexicana comprometida con el
            desarrollo de soluciones tecnológicas innovadoras.
            <br />
            Nos especializamos en tecnologías emergentes para ayudarte a superar
            los retos del mercado actual.
          </>
        }
        title={"No solo desarrollamos tecnología, creamos experiencias"}
      />
      <SimpleCard
        className="max-w-full h-screen flex items-center justify-center"
        title="¿Por qué elegirnos?"
        body="De la idea a la ejecución: un enfoque sólido y transparente para transformar tu visión en realidad"
      />
      <Container className="max-w-full min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <InnerShadowCard
            body={
              <>
                <h2 className="text-3xl font-extrabold dark:text-white">
                  Expertos en el desarrollo y aplicacion de:
                </h2>
                <ul className="max-w-md space-y-6 my-6 mx-5 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li className="text-xl">
                    Inteligencia Artificial generativa
                  </li>
                  <li className="text-xl">
                    Automatización de procesos con I.A.
                  </li>
                  <li className="text-xl">Bussiness Intelligence & Big Data</li>
                </ul>
              </>
            }
            title="Aplicaciones de I.A."
            className="mx-5 px-10 my-2"
          />
          <InnerShadowCard
            body={
              <>
                <h2 className="text-3xl font-extrabold dark:text-white">
                  Sistemas transaccionales basados en:
                </h2>
                <ul className="max-w-md space-y-6 my-6 mx-5 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li className="text-xl">Metodologias agiles</li>
                  <li className="text-xl">
                    Politicas de seguridad y encriptación
                  </li>
                  <li className="text-xl">Optimización de procesos</li>
                </ul>
              </>
            }
            title="Desarrollo web"
            className="mx-5 px-10 my-2"
          />
          <InnerShadowCard
            body={
              <>
                <h2 className="text-3xl font-extrabold dark:text-white">
                  Creamos app para que sean:
                </h2>
                <ul className="max-w-md space-y-6 my-6 mx-5 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li className="text-xl">Multiplataforma</li>
                  <li className="text-xl">Eficientes en UI/UX</li>
                  <li className="text-xl">Escalables</li>
                </ul>
              </>
            }
            title="Desarrollo movil"
            className="mx-5 px-10 my-2"
          />
          <InnerShadowCard
            body={
              <>
                <h2 className="text-3xl font-extrabold dark:text-white">
                  Colaboramos con socios estrategicos para:
                </h2>
                <ul className="max-w-md space-y-6 my-6 mx-5 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li className="text-xl">Centros de datos</li>
                  <li className="text-xl">Circuitos de seguridad con I.A.</li>
                  <li className="text-xl">Cableado estructurado</li>
                </ul>
              </>
            }
            title="Telecomunicaciones e infraestructura"
            className="mx-5 px-10 my-2"
          />
        </div>
      </Container>
      <Container className="min-w-full static">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              ¿Que opinan los CEOs sobre la Gen A.I.
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
              Según una encuesta de Gartner, las empresas esperan que la Gen Al
              (IA generativa) actuara en su productividad de la siguiente
              manera, durante los próximos 2 años.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 my-10"
          >
            <ProgressBar
              values={[
                {
                  title: "Incrementará más del 15% de productividad",
                  value: 36,
                },
                {
                  title: "Incrementará del 11-15% de productividad",
                  value: 20,
                },
                { title: "Incrementará del 6-10% de productividad", value: 26 },
                { title: "Incrementará del 1-5% de productividad", value: 16 },
                { title: "Se mantendra o disminuira", value: 2 },
              ]}
            />
          </motion.div>
        </AuroraBackground>
      </Container>
      <div className="bg-background relative flex min-h-screen min-w-screen items-start justify-center rounded-lg border py-40 md:shadow-xl overflow-hidden">
        <SimpleCard
          className="flex items-center justify-center h-full my-auto"
          title="¿Por que implementar I.A. con nosotros?"
          body={
            <>
              <p className="m-4">
                Zeetech utiliza tecnologia open-source, lo que nos permite
                salvaguardar los datos de nuestros clientes en nuestra propia
                infraestructura sin usar 3ros (ChatGPT, Claude, Gemini) y
                contamos con una amplia variedad de soluciones ya vendidas a
                gobierno en México
              </p>
              <ProgressCircular
                values={[
                  { title: "Privacidad de datos", value: 100 },
                  { title: "Uso de tecnología OpenSource", value: 90 },
                  { title: "Desarrollo a la medida", value: 100 },
                  {
                    title: "De nuestros desarrollos se basan en I.A.",
                    value: 80,
                  },
                ]}
              />
            </>
          }
        />
        <Suspense
          fallback={
            <div className="min-w-sceen min-h-screen grid justify-items-center content-center">
              <Spinner />
            </div>
          }
        >
          <GridPattern
            numSquares={100}
            maxOpacity={0.2}
            duration={2}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(1080px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
            )}
          />
        </Suspense>
      </div>
    </>
  );
}
