import { classNames } from "../utils"

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'md:container lg:w-[1024px] md:mx-auto px-8',
        className ? className : "",
      )}
    >
      {children}
    </div>
  )
}

export default Container
