// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { Container, Group, Burger } from "@mantine/core";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import React from "react";
import classes from './css/HeaderSimple.module.css';


export const metadata = {
  title: "Turf Tactics",
  description: "broth gang, we won't destroy this! hopefully",
};

const links = [
  { link: "/", label: "Instructions and Signup" },
  { link: "/broth", label: "Broth gang area" },
];

export function MainHeader() {
  // const [opened, { toggle }] = useDisclosure(false);
  //const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      // data-active={active === link.link || undefined}
      // onClick={(event) => {
      //   event.preventDefault();
      //   setActive(link.link);
      // }}
    >
      {link.label}
    </a>
  ));

  return (
    //!!CENTER THE TOP PART
    <header>
      <Container size="md">
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger
          /*opened={opened} onClick={toggle}*/ hiddenFrom="xs"
          size="sm"
        />
      </Container>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <MainHeader />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
