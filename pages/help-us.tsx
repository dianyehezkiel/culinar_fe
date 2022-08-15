import { NextPage } from "next"
import Container from "../components/Container"
import HelpForm from "../components/HelpForm"

const Help: NextPage = () => {
  return (
    <div className="wrapperFull">
      <Container className="py-4 flex flex-col justify-start items-center">
        <h2 className="text-2xl self-start my-4">Help us improve</h2>
        <HelpForm />
      </Container>
    </div>
  )
}

export default Help
