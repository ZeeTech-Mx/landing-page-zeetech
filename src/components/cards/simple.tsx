import { ReactNode } from "react";
import Container from "../container/container";
import InView from "../edil-ozi/in-view";

export function SimpleCard({ title, body, className }: { title: string | ReactNode, body: string | ReactNode, className?: string }) {
  return (
    <Container className={className}>
      <div className="flex h-fit justify-center px-4">
        <InView
          variants={{
            hidden: { opacity: 0, y: 150, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -320px 0px", once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div>
            {typeof title === 'string' ? (
              <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-gray-200 md:text-3xl xl:text-5xl">
                {title}
              </h1>
            ) : (
              <div className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-gray-200 md:text-3xl xl:text-5xl">
                {title}
              </div>
            )}

            {typeof body === 'string' ? (
              <p className="text-balance text-center text-lg leading-[1.5] text-gray-900 dark:text-gray-300 md:text-xl xl:text-3xl">
                {body}
              </p>
            ) : (
              <div className="text-balance text-center text-lg leading-[1.5] text-gray-900 dark:text-gray-300 md:text-xl xl:text-3xl">
                {body}
              </div>
            )}

          </div>
        </InView>
      </div>
    </Container>
  )
}