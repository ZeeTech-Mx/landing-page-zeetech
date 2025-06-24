'use client'

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { FormikErrors, FormikTouched } from 'formik'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

export type ValueInput = {
  value: string;
  label: string;
  image: string | IconProp;
}

export default function InputSelect<T>({
  options,
  value,
  label,
  name,
  is_required,
  errors,
  touched,
  onBlur,
  onChange
}: {
  options: ValueInput[]
  value?: string,
  label: string,
  name: keyof T,
  is_required: boolean,
  onChange: (val: string, name: string) => void,
  onBlur: React.FocusEventHandler<HTMLButtonElement | HTMLDivElement>,
  errors: FormikErrors<T>,
  touched: FormikTouched<T>
}) {
  const [selected, setSelected] = useState<ValueInput>()
  const error = (errors[name] as unknown as string) ?? ''
  const isTouched = Boolean(touched[name])

  function onChangeSelect(value: string) {
    console.log(value)
    onChange(value, name as string);
    console.log(options)
    setSelected(options.find(op => op.value === value));
  }

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <>
      <Listbox as='div' value={value} onChange={onChangeSelect} onBlur={onBlur} name={name as string} >
        <Label className={`block mb-2 text-sm text-gray-600 dark:text-gray-200 ${is_required && "after:content-['*'] after:ml-0.5 after:text-red-500"}`}>{label}</Label>
        <div className="relative mt-2">
          <ListboxButton className={`grid w-full cursor-default grid-cols-1 rounded-md py-1.5 pr-2 pl-3 text-left sm:text-sm/6 text-gray-700 bg-white border border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring ${isTouched && error && "invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"}`}>
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              {selected && (
                <>
                  {typeof selected.image === "string" ? <img alt="" src={selected.image} className="size-5 shrink-0 rounded-full" /> : <FontAwesomeIcon className="size-5 shrink-0 rounded-full" icon={selected.image} />}
                  <span className="block truncate">{selected.label}</span>
                </>
              )}

            </span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
          >
            {options.map((value) => (
              <ListboxOption
                key={value.value}
                value={value.value}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex items-center">
                  {typeof value.image === "string" ? <img alt="" src={value.image} className="size-5 shrink-0 rounded-full" /> : <FontAwesomeIcon className="size-5 shrink-0 rounded-full" icon={value.image} />}
                  <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{value.label}</span>
                </div>
                {value.value === selected?.value && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                    <CheckIcon aria-hidden="true" className="size-5" />
                  </span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
      {
        isTouched && error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )
      }
    </>
  )
}
