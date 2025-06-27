import * as Yup from "yup";
import { useFormik } from "formik";
import TextInput from '~/components/input/text_input';
import { ChangeEvent, lazy, Suspense, useRef, useState } from 'react';
import TextArea from '~/components/input/text_area';
import PhoneInput from "~/components/input/phone_input";
import axios from "axios"
import SuccessNotification from "~/components/notification/success";
import FailureNotificacion from "~/components/notification/failure";
import { Link } from "react-router-dom";
import { SocialNetworks } from "~/core/social_networks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGoogle,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faUserFriends,
  faBlog,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import Spinner from "~/components/spinner/loading";
import InputSelect from "~/components/input/select";

type Contact = {
  fullname: string,
  email: string,
  subject: string,
  phone: string,
  message: string
  recaptcha: string | null
  social?: SocialNetworks
}

const placeholders: Contact = {
  fullname: "Doyle Becker",
  email: "Cesar.lynch@hotmail.com",
  subject: "Cotización",
  message: "Escriba su mensaje.",
  phone: "",
  social: undefined,
  recaptcha: ""
}

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'));

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

 const socialOptions = [
    { value: 'FacebookAd', label: 'Facebook', image: faFacebook },
    { value: 'InstagramAd', label: 'Instagram', image: faInstagram },
    { value: 'LinkedInPost', label: 'LinkedIn', image: faLinkedin },
    { value: 'EmailNewsletter', label: 'Email', image: faEnvelope },
    { value: 'GoogleSearch', label: 'Google', image: faGoogle },
    { value: 'FriendRecommendation', label: "Un amigo y/o conocido", image: faUserFriends },
    { value: 'BlogMention', label: 'Blog', image: faBlog },
    { value: 'Other', label: "Otro", image: faEllipsisH },
  ];

export default function Contact() {
  const [open, setOpen] = useState(false)
  const [openFailure, setOpenFailure] = useState(false)
  const [message, setMessage] = useState("")
  const recaptcha = useRef<any>(null)

  const FormSchema = Yup.object<Contact>().shape({
    fullname: Yup.string().required("Ingresa tu nombre completo"),
    email: Yup.string().email("Se debe ingresar un correo valido").required("Ingresa tu correo electronico"),
    subject: Yup.string().required("Ingresa un asunto de correo"),
    phone: Yup.string().required("Ingresa un teléfono de contacto").matches(phoneRegExp, "El número de teléfono es invalido"),
    message: Yup.string().required("Ingresa un mensaje de correo"),
    social: Yup.string().optional(),
    recaptcha: Yup.string().required("Se requiere la captcha")
  });

  const { handleSubmit, values, errors, setFieldValue, touched, handleBlur, resetForm } =
    useFormik<Contact>({
      initialValues: {
        fullname: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
        recaptcha: ""
      },
      onSubmit: (data) => {
        axios.post(`${process.env.BACKEND}/send_contact_email`, data).then(() => {
          setOpen(true)
          setTimeout(() => {
            setOpen(false)
          }, 5000)
          resetForm()
        }).catch(({ response }) => {
          const message = response.data.message;
          setMessage(message)
          setOpenFailure(true)
        })
      },
      validationSchema: FormSchema,
      enableReinitialize: true,
    });

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };

  function onChangeSelect(val: string, field: string) {
    setFieldValue(field, val)
  }

  function onChangePhone(value: string) {
    setFieldValue('phone', value)
  }

  function onChangeCaptcha(value?: string | null) {
    setFieldValue("recaptcha", value)
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover min-h-screen bg-center bg-zoom"
        style={{ backgroundImage: "url(/chess.webp)" }}
      />
      <div className="relative flex flex-col min-h-screen bg-black/60">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <SuccessNotification
            open={open}
            setOpen={setOpen}
          />
          <FailureNotificacion
            message={message}
            open={openFailure}
            setOpen={setOpenFailure}
          />
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-4xl font-semibold capitalize lg:text-6xl max-md:mt-32">Contactanos</h1>

              <p className="max-w-xl mt-6">
                "ESTAS A UN PASO DE UNA GRAN DECISION"
              </p>
              <p className="max-w-xl mt-6">
                Déjanos tus datos para ayudarte a hacer crecer tu empresa
              </p>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-300 ">Siguenos</h3>

                <div className="flex mt-4 -mx-1.5 ">

                  <Link className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500" to={SocialNetworks.facebook} target="_blank" rel="noopener noreferrer" aria-label='Visita nuestra página de Facebook'>
                    <FontAwesomeIcon className='w-8 h-8' icon={faFacebookF} />
                  </Link>

                  <Link className="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500" to={SocialNetworks.instagram} target="_blank" rel="noopener noreferrer" aria-label='Visita nuestra página de Instagram'>
                    <FontAwesomeIcon className='w-8 h-8' icon={faInstagram} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Haz grande tu negocio o empresa con un clic.
                </p>

                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="flex-1">
                    <TextInput<Contact>
                      errors={errors}
                      is_required
                      label='Nombre completo'
                      name='fullname'
                      onBlur={handleBlur}
                      type='text'
                      onChange={onChange}
                      touched={touched}
                      value={values.fullname}
                      placeholder={placeholders.fullname}
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <TextInput<Contact>
                      errors={errors}
                      is_required
                      label='Correo'
                      name='email'
                      onBlur={handleBlur}
                      type='text'
                      onChange={onChange}
                      touched={touched}
                      value={values.email}
                      placeholder={placeholders.email}
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <TextInput<Contact>
                      errors={errors}
                      is_required
                      label='Asunto'
                      name='subject'
                      onBlur={handleBlur}
                      type='text'
                      onChange={onChange}
                      touched={touched}
                      value={values.subject}
                      placeholder={placeholders.subject}
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <PhoneInput
                      errors={errors}
                      is_required
                      label="Telefono"
                      name="phone"
                      onBlur={handleBlur}
                      onChange={onChangePhone}
                      touched={touched}
                      placeholder={placeholders.phone}
                      value={values.phone}
                    />
                  </div>

                  <div className="w-full mt-6">
                    <TextArea
                      errors={errors}
                      is_required
                      label='Mensaje'
                      name='message'
                      onBlur={handleBlur}
                      onChange={onChange}
                      touched={touched}
                      placeholder={placeholders.message}
                      value={values.message}
                    />
                  </div>

                  <div className="w-full mt-6">
                    <InputSelect<Contact>
                      errors={errors}
                      label='¿De dónde nos conoció?'
                      name='social'
                      onBlur={handleBlur}
                      onChange={onChangeSelect}
                      touched={touched}
                      is_required={false}
                      value={values.social}
                      options={socialOptions}
                    />
                  </div>

                  <div className="py-5 flex flex-col">
                    <Suspense fallback={
                      <div className="min-w-sceen min-h-screen grid justify-items-center content-center">
                        <Spinner />
                      </div>
                    }>
                      <ReCAPTCHA
                        className="mx-auto"
                        ref={recaptcha}
                        sitekey={process.env.SITE_KEY || ''}
                        onExpired={() => onChangeCaptcha()}
                        onChange={(token) => onChangeCaptcha(token)}
                        onErrored={() => onChangeCaptcha()}
                      />
                    </Suspense>

                    <span className={`mt-2 ${(touched.recaptcha && errors.recaptcha) ? "" : "hidden"} text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block`}>
                      {errors.recaptcha}
                    </span>
                  </div>

                  <button type="submit" className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50">
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}