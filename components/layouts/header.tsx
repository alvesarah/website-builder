import Link from "next/link";

import { Button } from "../ui/button";

import Logo from "./logo";
import Container from "../core/container";


export default function Header() {
  return (
    <Container className="flex justify-between">
        <Logo />
        <Button asChild>
          <Link href="/projects">Launch</Link>
        </Button>
    </Container>
  );
}