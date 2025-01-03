import { FormikErrors, FormikTouched } from "formik"
import 'react-phone-input-2/lib/style.css'
import "../../styles/phone_input.css"
import PhoneInput2, { CountryData } from "react-phone-input-2";

export default function PhoneInput<T>({
  name,
  label,
  is_required,
  errors,
  touched,
  onBlur,
  onChange,
  placeholder,
  value
}: {
  value?: string | null,
  label: string,
  name: keyof T,
  is_required: boolean,
  onChange: (
    value: string,
    data: CountryData | {},
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void,
  onBlur: (
    event: React.FocusEvent<HTMLInputElement>,
    data: CountryData | {}
  ) => void,
  placeholder?: string,
  errors: FormikErrors<T>,
  touched: FormikTouched<T>
}) {
  const error = errors[name] as string;
  const touch = touched[name] as boolean;
  return (
    <>
      <label className={`block mb-2 text-sm text-gray-600 dark:text-gray-200 ${is_required && "after:content-['*'] after:ml-0.5 after:text-red-500"}`}>{label}</label>
      <PhoneInput2
        containerClass="mt-2 rounded-md bo"
        buttonClass='bg-white dark:bg-gray-900 dark:focus:bg-gray-900'
        inputClass='block min-h-14 h-full min-w-full px-5 py-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 focus:ring-red-300 focus:ring-opacity-40 focus:outline-none focus:ring'
        searchClass='bg-white dark:bg-gray-900'
        dropdownClass='bg-white dark:bg-gray-900 group/item hover:bg-slate-100'
        country={'mx'}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <span className={`mt-2 ${(touch && error) ? "" : "hidden"} text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block`}>
        {error}
      </span>
    </>
  )
}