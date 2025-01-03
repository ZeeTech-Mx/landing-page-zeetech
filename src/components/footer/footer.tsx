import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';
import { SocialNetworks } from '~/core/social_networks';


export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-x-28">
        <div className="p-10 max-md:border-b-2 md:border-r-2 border-white">
          <h2 className="text-3xl my-6">Innova en tu empresa con nosotros</h2>
          <p className="my-3 text-md">Incrementa tu productividad y la de tus operativos con la implementación de:</p>
          <div className="mx-8 my-10">
            <ul className="list-disc">
              <li className="my-5 text-md">Inteligencia artificial generativa</li>
              <li className="my-5 text-md">Analisis de datos y Big Data</li>
              <li className="my-5 text-md">Arquitecturas on promises & cloud</li>
            </ul>
          </div>
          <Link to={"/contactanos"} className="rounded-lg bg-red-800 px-10 py-4 hover:rounded-2xl font-bold">Contactanos &rarr;</Link>
        </div>
        <div className='pt-20 md:pt-10 h-1/2'>
          <div className="flex col-span-2">
            <img className="w-1/3 mx-auto my-auto" src="/logo-black.svg" alt="Zeetech" />
            <div className='w-1/3 mx-auto flex col-span-5 my-auto'>
              {/* <Link className='mx-auto' to={""}>
                <FontAwesomeIcon className='w-8 h-8' icon={faLinkedin} />
              </Link>
              <Link className='mx-auto' to={""}>
                <FontAwesomeIcon className='w-8 h-8' icon={faXTwitter} />
              </Link> */}
              <Link className='mx-auto' to={SocialNetworks.facebook} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='w-8 h-8' icon={faFacebookF} />
              </Link>
              <Link className='mx-auto' to={SocialNetworks.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='w-8 h-8' icon={faInstagram} />
              </Link>
              {/* <Link className='mx-auto' to={""}>
                <FontAwesomeIcon className='w-8 h-8' icon={faYoutube} />
              </Link> */}
            </div>
          </div>
          <div className='h-1/2 flex col-span-2 gap-x-10 max-md:pt-10'>
            <div className='flex flex-col mx-auto'>
              <h4 className='text-xl font-bold mb-5'>¿Nuevo en zeetech?</h4>
              <Link className='hover:text-red-800' to={"/nosotros"}>Nosotros</Link>
              {/* <Link className='hover:text-red-800' to={"/blog"}>Blog</Link> */}
            </div>
            <div className='flex flex-col mx-auto'>
              <h4 className='text-xl font-bold mb-5'>Quiero innovar</h4>
              <Link className='hover:text-red-800' to={"/services"}>Servicios</Link>
              {/* <Link className='hover:text-red-800' to={"/faq"}>FAQ</Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};