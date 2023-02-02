import Link from "next/link"
import { Center } from "../Center"
import { Container, Logo } from "./style"

export const Header = () => {
  return (
    <Container>
      <Center>
        <Logo>
          <Link href="/" legacyBehavior>
            <a>What's Next?!</a>
          </Link>
        </Logo>
      </Center>
    </Container>
  )
}
