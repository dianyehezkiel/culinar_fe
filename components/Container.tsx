interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`lg:container lg:mx-auto ${className}`}>{children}</div>
  )
}

export default Container
