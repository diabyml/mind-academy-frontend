import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";
import Button from "../button/button";
import MenuButton from "./menu-button";
import { useApolloClient } from "@apollo/client";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data } = useMeQuery();

  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="site-header">
      <div className="container max-width-md border-bottom">
        <div className="flex items-center">
          <span className="logo block font-bold">
            <NextLink href="/">
              {/* <Image  src='/images/logo.jpg' width='30px' height='30px' alt='Logo' /> */}
              Mind
            </NextLink>
          </span>
        </div>
        <div className="right-section">
          <nav className={`nav ${isOpen && "open"}`} role={"navigation"}>
            <ul role="list" className="nav-list">
              <li>
                <NextLink href="/cours">Cours</NextLink>
              </li>
              <li>
                <NextLink href="/blog">Blog</NextLink>
              </li>
              <li>
                <NextLink href="/a-propos">A propos</NextLink>
              </li>
              <li>
                <NextLink href="/nous-contacter">Nous contacter</NextLink>
              </li>
              {!data?.me ? (
                <>
                  <li className="mobile-only">
                    <NextLink href="/inscription">{`S'inscrire`}</NextLink>
                  </li>
                  <li className="mobile-only">
                    <NextLink href="/connexion">{`Se Connecter`}</NextLink>
                  </li>
                </>
              ) : (
                <div
                  className="margin-top-sm text-sm font-bold cursor-pointer  mobile-only"
                  onClick={async () => {
                    await logout();
                    await apolloClient.resetStore();
                  }}
                >
                  Deconnexion
                </div>
              )}
            </ul>
          </nav>
          <div className="actions flex items-center">
            {data?.me ? (
              <div className="flex items-center">
                <div
                  className="margin-right-sm text-sm font-bold cursor-pointer color-error desktop-only"
                  onClick={async () => {
                    await logout();
                    await apolloClient.resetStore();
                  }}
                >
                  Deconnexion
                </div>
                <div className="user-profile bg-contrast-lower padding-x-sm radius-sm">
                  {/* <NextLink href="/profile">{data.me.username}</NextLink> */}
                  <span className="text-sm font-semibold"> {data.me.username} </span>
                </div>
              </div>
            ) : (
              <div>
                <div className="desktop-only flow-vertical">
                  <Button
                    variant="primary"
                    size="sm"
                    handler={() => router.push("/connexion")}
                  >
                    {`Connecter`}
                  </Button>
                  <Button
                    variant="accent"
                    size="sm"
                    handler={() => router.push("/inscription")}
                  >
                    {`S'inscrire`}
                  </Button>
                </div>
              </div>
            )}
            <div className="mobile-only margin-left-sm">
              <MenuButton
                variant={isOpen ? "close" : "menu"}
                handler={toggleMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
