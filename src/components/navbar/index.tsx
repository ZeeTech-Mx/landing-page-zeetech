import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about_us">Nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services">Servicios</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contactanos</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}