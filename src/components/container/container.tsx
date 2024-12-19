import { ReactNode } from "react";

export default function Container({className, children, ...props}: {className?: string, children?: ReactNode} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div {...props} className={`container ${className ? className : ''}`}>
      {children}
    </div>
  )
}