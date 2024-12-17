import { Container } from "react-bootstrap";
import Globe from "react-globe.gl";

export default function MainPage() {
  const globeEl = useRef<GlobeMethods>();

  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: ['green', 'green']
  }));

  useEffect(() => {
    if (globeEl?.current) {
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.7;
    }

  }, [globeEl]);
  return (
    <>
      <Container fluid className="m-0 p-0 mh-100">
        <div className="z-2 position-absolute top-50 start-50 translate-middle">
          <TypeAnimation
            style={
              {
                fontSize: '2em',
                fontWeight: 'bold',
                color: 'white',
                whiteSpace: 'pre-line',
                height: '195px',
                display: 'block',
                textAlign: 'center'
              }
            }
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Bienvenidos a Zeetech',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Bienvenidos a Zeetech\nInnovando con inteligencia',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={0}
          />
        </div>
        <div className="z-1 position-absolute">
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            arcsData={arcsData}
            arcColor={'color'}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 40000 + 500}
          />
        </div>

      </Container>
    </>
  )
}