import { ReactNode } from "react";

export default function Row({ className, children }: { className?: string, children?: ReactNode }) {
  return (
    <div className={`flex flex-row ${className ? className : ''}`}>
      {children}
    </div>
  )
}