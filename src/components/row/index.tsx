import { ReactNode } from "react";

export default function Row({ className, children, ...props }: { className?: string, children?: ReactNode } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div {...props} className={`flex flex-row ${className ? className : ''}`}>
      {children}
    </div>
  )
}