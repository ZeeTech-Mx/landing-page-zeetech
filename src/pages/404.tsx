import Container from "~/components/container/container";

export default function NotFound() {
  return (
    <Container className="max-w-full w-screen h-screen flex flex-col justify-center items-center dark:bg-black">
      <h3 className="text-6xl font-bold">404</h3>
      <div className="text-3xl mt-4">
        <span className="text-red-800">Opps!</span> Pagina no encontrada
      </div>
      <div className="leading-3 mt-5">
          Esta pagina no existe o dejo de existir
        </div>
    </Container>
   /*  <div className="flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        
        
      </div>
    </div> */
  )
}