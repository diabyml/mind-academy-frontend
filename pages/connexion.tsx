import React, { useState } from "react";
import AppLayout from "../components/app-layout";
import Input from "../components/form/input";
import NextLink from "next/link";
import { withApollo } from "../utils/withApollo";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [state, setState] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    usernameOrEmail?: string;
    password?: string;
  }>({ usernameOrEmail: "", password: "" });

  const [login] = useLoginMutation({
    update: (cache, { data }) => {
      cache.writeQuery<MeQuery>({
        query: MeDocument,
        data: {
          me: data?.login.data,
        },
      });
    },
  });

  const areInputsValid = () => {
    return state.usernameOrEmail && state.password;
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
        const response = await login({ variables: state });

        if (response?.data?.login.errors) {
          setErrors(toErrorMap(response.data.login.errors));
        } else if (response.data?.login.data) {
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
                Vous {`n'avez`} pas un compte?{" "}
                <NextLink href="/inscription">S&apos;inscrire</NextLink>{" "}
              </p>
            </div>
            <div className="margin-bottom-sm">
              <Input
                label="Nom utilisateur ou Email"
                className="form-control width-100%"
                type="text"
                error={errors.usernameOrEmail}
                name="usernameOrEmail"
                value={state.usernameOrEmail}
                id="usernameOrEmail"
                placeholder="email ou nom utilisateur"
                handler={handleInput}
              />
            </div>

            <div className="margin-bottom-md">
              <Input
                label="Mot de pass"
                className="form-control width-100%"
                type="password"
                error={errors.password}
                name="password"
                value={state.password}
                id="password"
                handler={handleInput}
              />
              <p className="text-xs color-contrast-medium margin-top-xxs">
                Minimum 6 characteres
              </p>
            </div>

            <div className="margin-bottom-sm">
              <button className="btn btn--accent btn--md width-100%">{`Se Connecter`}</button>
            </div>
          </form>
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(Login);
