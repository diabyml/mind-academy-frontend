import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import AppLayout from "../components/app-layout";
import Button from "../components/button/button";
import { withApollo } from "../utils/withApollo";

interface Props {}

const About = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <section>
        <div className="container max-width-md padding-y-lg">
          <div className="text-component">
            <h1 className="max-width-xxs color-primary">
              Nous sommes Mind Academy <br /> Une mentalité forte{" "}
            </h1>
            <p className="max-width-xxxxs">
              Nous sommes à votre écoute. Nous vous servons toujours.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container max-width-md padding-y-lg">
          <div className="grid gap-md gap-sm@sm items-center@sm">
            <div className="col-6@sm">
              <div className="flex items-center justify-center">
                <div className="flex justify-center">
                  <Image
                    className="object-contain"
                    src={"/images/img7.jpg"}
                    width="350px"
                    height="350px"
                    alt="Hero image"
                  />
                </div>
              </div>
            </div>
            <div className="col-6@sm">
              <div className="text-component">
                <h2 className="color-primary">Mind Academy</h2>
                <p className="">
                  Nous somme une academie de formation en changement de
                  mentalité, nous offrons des formations en art oratoire, en
                  leadership, développement personnel, et en business. Nous vous
                  offrons aussi {`l'opportunité`} de vous exprimer sur notre
                  platforme pour partager votre expérience avec le reste du
                  monde. Ensemble changeons-nous pour changer le monde.
                </p>
                <Button
                  variant="primary"
                  handler={() => router.push("/nous-contacter")}
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container max-width-md padding-y-lg">
          <div className="grid gap-md gap-sm@sm items-center@sm">
            <div className="col-6@sm">
              <div className="text-component">
                <h2 className="color-primary">Abdoulaye Coulibaly</h2>
                <p>
                  Je suis le pere fondateur de cette platforme, Biologiste de
                  formation, formateur en changement de mentalite.
                </p>
                <Button
                  variant="primary"
                  handler={() => router.push("/nous-contacter")}
                >
                  Nous contacter
                </Button>
              </div>
            </div>
            <div className="col-6@sm">
              <div className="flex items-center justify-center">
                <div className="flex justify-center">
                  <Image
                    className="object-contain"
                    src={"/images/img2.jpg"}
                    width="350px"
                    height="350px"
                    alt="Hero image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gradient-primary margin-bottom-lg">
        <div className="container max-width-md padding-y-lg">
          <h2 className="margin-bottom-sm color-white">Notre galerie</h2>
          <ul className="grid-auto-lg gap-sm">
            <li>
              <img
                src={"/images/img1.jpg"}
                className="block width-100%"
                alt="Team image"
              />
            </li>
            <li>
              <img
                src={"/images/img2.jpg"}
                className="block width-100%"
                alt="Team image"
              />
            </li>
            <li>
              <img
                src={"/images/img3.jpg"}
                className="block width-100%"
                alt="Team image"
              />
            </li>
            <li>
              <img
                src={"/images/img4.jpg"}
                className="block width-100%"
                alt="Team image"
              />
            </li>
            <li>
              <img
                src={"/images/img5.jpg"}
                className="block width-100%"
                alt="Team image"
              />
            </li>
            <li>
              <img
                src={"/images/img6.jpg"}
                className="block width-100%"
                alt="Team image"
              />
            </li>
            <li>
              <img
                src={"/images/img7.jpg"}
                className="block width-100%"
                alt="Team image"
              />
            </li>
            <li>
              <img
                src={"/images/img8.jpg"}
                className="block width-100%"
                alt="Team image"
              />
            </li>
          </ul>
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(About);
