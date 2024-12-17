import { useRef, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Globe, { GlobeMethods } from "react-globe.gl";
import Container from "../components/container/container";
import { SimpleCard } from "../components/cards/simple";
import ModernInnerShadowCardVariant1 from "@/components/cards/inner-shador-card";
import Row from "@/components/row";
import Col from "@/components/col";

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
    color: ['green', 'green']
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
    }
  },
    [globeDivEl.current])

  useEffect(() => {
    if (globeEl?.current) {
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.7;
    }

  }, [globeEl]);


  return (
    <>
      <Container className="max-w-full w-screen h-screen relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <TypeAnimation
            className="text-xl md:text-4xl"
            style={
              {
                fontWeight: 'bold',
                color: 'white',
                whiteSpace: 'pre-line',
                height: '195px',
                display: 'block',
                textAlign: 'center'
              }
            }
            sequence={[
              'Bienvenidos a Zeetech',
              300,
              'Bienvenidos a Zeetech\nInnovando con inteligencia'
            ]}
            wrapper="span"
            speed={50}
            repeat={0}
          />
        </div>
        <div ref={globeDivEl} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-0">
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            arcsData={arcsData}
            arcColor={'color'}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 40000 + 500}
            width={width}
            height={height}
          />
        </div>
      </Container>
      <SimpleCard
        className="max-w-full my-40"
        body={
          <>
            En ZeeTech, somos una empresa mexicana comprometida con el desarrollo de soluciones tecnológicas innovadoras.
            <br />
            Nos especializamos en tecnologías emergentes para ayudarte a superar los retos del mercado actual.
          </>
        }
        title={"No solo desarrollamos tecnología, creamos experiencias"}
      />
      <SimpleCard
        className="max-w-full my-40"
        title="¿Por qué elegirnos?"
        body="De la idea a la ejecución: un enfoque sólido y transparente para transformar tu visión en realidad"
      />
      <Container className="max-w-full my-40">
        <Row>
          <Col className="w-full h-full">
            <ModernInnerShadowCardVariant1
              body={
                <>
                  <h1>Expertos en el desarrollo y aplicacion de:</h1>
                  <li className="list-disc">
                    <ul>Inteligencia Artificial generativa</ul>
                    <ul>Automatización de procesos con I.A.</ul>
                    <ul>Bussiness Intelligence & Big Data</ul>
                  </li>
                </>
              }
              title="Aplicaciones de I.A." />
          </Col>
        </Row>
      </Container>

    </>
  )
}