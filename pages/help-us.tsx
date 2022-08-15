import { NextPage } from "next"
import Head from "next/head"
import Container from "../components/Container"
import HelpForm from "../components/HelpForm"

const Help: NextPage = () => {
  return (
    <div className="wrapperFull">
      <Head>
        <title>Help | Culinar</title>
      </Head>
      <Container className="py-4 flex flex-col justify-center items-center">
      <div className="logoWrapper mx-auto my-8">
          <h1 className="logo">Culinar</h1>
        </div>
        <h2 className="text-2xl my-4">Help us improve</h2>
        <HelpForm />
      </Container>
    </div>
  )
}

export default Help
