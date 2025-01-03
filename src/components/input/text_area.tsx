import { FormikErrors, FormikTouched } from "formik"
import { v4 } from "uuid"

export default function TextArea<T>({
  label,
  name,
  is_required,
  errors,
  touched,
  ...InputProps
}: {
  value?: string | number | readonly string[],
  label: string,
  name: keyof T,
  is_required: boolean,
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>,
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>,
  placeholder?: string,
  errors: FormikErrors<T>,
  touched: FormikTouched<T>
}) {
  const error = errors[name] as string;
  const touch = touched[name] as boolean;
  return (
    <>
      <label className={`block mb-2 text-sm text-gray-600 dark:text-gray-200 ${is_required && "after:content-['*'] after:ml-0.5 after:text-red-500"}`}>{label}</label>
      <textarea id={v4()} name={name as string} {...InputProps}  className="block w-full h-24 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-28 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"/>
      <span className={`mt-2 ${(touch && error) ? "" : "hidden"} text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block`}>
        {error}
      </span>
    </>
  )
}