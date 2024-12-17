import { ReactNode } from "react";
import Container from "../container/container";
import InView from "../edil-ozi/in-view";

export function SimpleCard({ title, body, className }: { title: string | ReactNode, body: string | ReactNode, className?: string }) {
  return (
    <Container className={className}>
      <div className="flex h-[300px] items-end justify-center px-4">
        <InView
          variants={{
            hidden: { opacity: 0, y: 150, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -320px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div>
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-gray-200 md:text-3xl xl:text-4xl">
              {title}
            </h1>
            <p className="text-balance text-center text-lg leading-[1.5] text-gray-900 dark:text-gray-300 md:text-xl xl:text-2xl">
              {body}
            </p>
          </div>
        </InView>
      </div>
    </Container>
  )
}