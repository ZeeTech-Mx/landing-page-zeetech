import { ReactLenis } from 'lenis/react'
import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function AboutUs() {
  const [isFinished, setIsFinished] = useState<boolean>(false)
  return (
    <div className="min-h-fit mt-32">
      <ReactLenis root>
        <main>
          <article>
            <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
              <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
              <div className='my-10'>
                <TypeAnimation
                  className="text-5xl md:text-6xl min-h-10"
                  style={
                    {
                      fontWeight: 'bold',
                      color: 'white',
                      whiteSpace: 'pre-line',
                      display: 'block',
                      textAlign: 'center'
                    }
                  }
                  cursor={false}
                  sequence={[
                    'Bienvenidos a Zeetech',
                    300,
                    () => { setIsFinished(true) }
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                />
                {isFinished ? (
                  <TypeAnimation
                    className="text-4xl md:text-4xl min-h-10 mt-4"
                    style={
                      {
                        fontWeight: 'bold',
                        color: 'white',
                        whiteSpace: 'pre-line',
                        display: 'block',
                        textAlign: 'center'
                      }
                    }
                    cursor={false}
                    sequence={[
                      'Innovando con inteligencia',
                      300,
                      () => { setIsFinished(true) }
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={0}
                  />
                ) : <div className='min-h-10 mt-4' />}
              </div>
              <h4 className='text-xl md:text-3xl text-center'>"ZeeTech es una empresa mexicana 100% dedicada a ofrecer soluciones de TIC'S innovadoras a fin de convertirse en su aliado estratégico de negocio."</h4>
            </section>
            <section className='bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
              <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
              <h4 className='text-4xl md:text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
                Misión
              </h4>
              <p className='text-2xl md:text-4xl text-center mt-10'>Innovar soluciones en tecnología tanto de software, hardware, centros de datos y telecomunicaciones; obteniendo el mejor costo beneficio para nuestros clientes.</p>
            </section>

            <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
              <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
              <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
                Visión
              </h1>
              <p className='text-2xl md:text-4xl text-center mt-10'>Ser líderes en México en la entrega de soluciones de software innovadoras y confiables, impulsando el éxito de clientes locales e internacionales. </p>
            </section>
          </article>
        </main>
      </ReactLenis>
    </div>
  )
}