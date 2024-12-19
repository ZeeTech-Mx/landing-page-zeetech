import { ReactNode } from "react";

export default function Col({ className, children, ...props }: { className?: string, children?: ReactNode } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div className={`flex flex-col ${className ? className : ''}`} {...props}>
      {children}
    </div>
  )
}