import React, { useState } from "react";
import AppLayout from "../components/app-layout";
import NextLink from "next/link";
import Input from "../components/form/input";
import { withApollo } from "../utils/withApollo";
import { error } from "console";
import Button from "../components/button/button";
import { useRouter } from "next/router";
import { MeDocument, MeQuery, useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface Props {}

const Register = () => {
  const [state, setState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }>({ username: "", firstName: "", lastName: "", email: "", password: "" });

  const router = useRouter();
  const [register] = useRegisterMutation({
    update: (cache, { data }) => {
      cache.writeQuery<MeQuery>({
        query: MeDocument,
        data: {
          me: data?.register.data,
        },
      });
    },
  });

  const areInputsValid = () => {
    return (
      state.username &&
      state.firstName &&
      state.lastName &&
      state.email &&
      state.password
    );
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (areInputsValid()) {
      try {
        // inputs are fieled
        console.log("inputs are valid");
        const response = await register({ variables: state });

        if (response?.data?.register.errors) {
          setErrors(toErrorMap(response.data.register.errors));
        } else if (response.data?.register.data) {
          router.push("/cours");
        }
      } catch (error) {}
    } else {
      // inputs are not fieled
      console.log("inputs are not valid");
    }
  };

  return (
    <AppLayout>
      <section>
        <div className="container max-width-xs padding-y-lg">
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <div className="text-component text-center margin-bottom-sm">
              <h1>Commencer</h1>
              <p>
                Viens révéler ton potentiel. <br />
                Vous avez déjà un compte?{" "}
                <NextLink href="/connexion">Se connecter</NextLink>{" "}
              </p>
            </div>
            <div className="margin-bottom-sm">
              <div className="grid gap-sm">
                <div className="col-6@md">
                  <Input
                    label="Prenom"
                    type="text"
                    name="firstName"
                    value={state.firstName}
                    id="firstName"
                    error={errors.firstName}
                    handler={handleInput}
                  />
                </div>

                <div className="col-6@md">
                  <Input
                    label="Nom"
                    type="text"
                    name="lastName"
                    value={state.lastName}
                    id="lastName"
                    error={errors.lastName}
                    handler={handleInput}
                  />
                </div>
              </div>
            </div>

            <div className="margin-bottom-sm">
              <Input
                label="Nom utilisateur"
                type="text"
                name="username"
                value={state.username}
                id="username"
                // placeholder="email@myemail.c"
                error={errors.username}
                handler={handleInput}
              />
            </div>

            <div className="margin-bottom-sm">
              <Input
                label="Email"
                type="email"
                name="email"
                value={state.email}
                id="email"
                placeholder="email@myemail.com"
                error={errors.email}
                handler={handleInput}
              />
            </div>

            <div className="margin-bottom-md">
              <Input
                label="Mot de pass"
                type="password"
                name="password"
                value={state.password}
                id="password"
                error={errors.password}
                handler={handleInput}
              />
              <p className="text-xs color-contrast-medium margin-top-xxs">
                Minimum 6 characteres
              </p>
            </div>

            <div className="margin-bottom-sm">
              {/* <button className="btn btn--primary btn--md width-100%">{`S'inscrire`}</button> */}
              <Button variant="accent" size="full-width">{`S'inscrire`}</Button>
            </div>

            <div className="text-center">
              <p className="text-xs color-contrast-medium">
                By joining, you agree to our <a href="#0">Terms</a> and{" "}
                <a href="#0">Privacy Policy</a>.
              </p>
            </div>
          </form>
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(Register);
