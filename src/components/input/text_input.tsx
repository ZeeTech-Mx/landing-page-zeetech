import { FormikErrors, FormikTouched } from "formik"
import { v4 } from "uuid"

export default function TextInput<T>({
  name,
  label,
  is_required,
  errors,
  touched,
  ...InputProps
}: {
  value?: string | number | readonly string[],
  label: string,
  name: keyof T,
  is_required: boolean,
  type: React.HTMLInputTypeAttribute,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onBlur: React.FocusEventHandler<HTMLInputElement>,
  placeholder?: string,
  min?: string | number,
  max?: string | number,
  maxLength?: number,
  minLength?: number,
  errors: FormikErrors<T>,
  touched: FormikTouched<T>
}) {
  const error = errors[name] as string;
  const touch = touched[name] as boolean;
  return (
    <>
      <label className={`block mb-2 text-sm text-gray-600 dark:text-gray-200 ${is_required && "after:content-['*'] after:ml-0.5 after:text-red-500"}`}>{label}</label>
      <input id={v4()} name={name as string} {...InputProps} className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring ${touch && error && "invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"}`} />
      <span className={`mt-2 ${(touch && error) ? "" : "hidden"} text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block`}>
        {error}
      </span>
    </>
  )
}