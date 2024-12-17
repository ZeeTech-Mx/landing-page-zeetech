import { ReactNode } from "react";

export default function Col({ className, children }: { className?: string, children?: ReactNode }) {
  return (
    <div className={`flex flex-col ${className ? className : ''}`}>
      {children}
    </div>
  )
}