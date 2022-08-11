import { NextPage } from "next"
import Container from "../components/Container"

const About: NextPage = () => {
  return (
    <div className="wrapperFull">
      <Container className="py-4">
        Hello, this is about page
      </Container>
    </div>
  )
}

export default About