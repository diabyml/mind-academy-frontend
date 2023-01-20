import React, { useState } from "react";
import AppLayout from "../components/app-layout";
import Button from "../components/button/button";
import Input from "../components/form/input";
import TextArea from "../components/form/textarea";
import {
  ContactUsMessagesDocument,
  useAddNewContactUsMessageMutation,
} from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

interface Props {}

const ContactUs = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    region: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    message?: string;
    region?: string;
  }>({ fullName: "", email: "", message: "", region: "" });

  const [feedBack, setFeedBack] = useState("");

  const [sendMessage] = useAddNewContactUsMessageMutation({
    refetchQueries: [
      { query: ContactUsMessagesDocument, variables: { option: "all" } },
    ],
  });

  const areInputsValid = () => {
    return state.fullName && state.email && state.region && state.message;
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleMessageInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    // if (areInputsValid()) {
    //   try {
    //     // inputs are fieled
    //     console.log("inputs are valid");
    //     const response = await login({ variables: state });

    //     if (response?.data?.login.errors) {
    //       setErrors(toErrorMap(response.data.login.errors));
    //     } else if (response.data?.login.data) {
    //       router.push("/cours");
    //     }
    //   } catch (error) {}
    // } else {
    //   // inputs are not fieled
    //   console.log("inputs are not valid");
    // }

    if (areInputsValid()) {
      // inputs are valie
      console.log("valid inputs");
      try {
        const response = await sendMessage({ variables: state });
        if (response.data?.addNewContactUsMessage) {
          setFeedBack("Message envoyé");
          setTimeout(() => {
            setFeedBack("");
          }, 2000);
        }
      } catch (error) {
        console.log("An error occured:", error);
      }
    } else {
      console.log("invlid inputs");
    }
  };

  return (
    <AppLayout>
      <section className="padding-y-lg">
        <div className="container max-width-md">
          <div className="text-component">
            <h1 className="color-primary">
              Service client <br />
              disponible 24h/24
            </h1>
            <p className="max-width-xxxxs">
              Nous sommes à votre écoute. Nous vous servons toujours.
            </p>
          </div>
        </div>
      </section>
      <section className="padding-y-lg">
        <div className="container max-width-md">
          <form className="max-width-xxxs margin-auto" onSubmit={handleSubmit}>
            <h2 className="form-legend">Parlons!</h2>
            <p className="margin-bottom-sm">
              Nous revenons normalement dans les 48 heures. Merci de laisser un
              message, nous vous repondrons par Email.
            </p>
            <div className="margin-bottom-sm">
              <Input
                id="fullname"
                type="text"
                name="fullName"
                value={state.fullName}
                error={errors.fullName}
                label="Prenom / Nom"
                handler={handleInput}
              />
            </div>
            <div className="margin-bottom-sm">
              <Input
                id="email"
                type="email"
                name="email"
                value={state.email}
                error={errors.email}
                label="Email"
                handler={handleInput}
              />
            </div>
            <div className="margin-bottom-sm">
              <Input
                id="country"
                type="text"
                name="region"
                value={state.region}
                error={errors.region}
                label="Pays / Région"
                handler={handleInput}
              />
            </div>
            <div className="margin-bottom-sm">
              <TextArea
                id="message"
                type="text"
                name="message"
                value={state.message}
                error={errors.message}
                label="Message"
                placeholder="Message"
                handler={handleMessageInput}
              />
            </div>
            <div className="margin-bottom-sm">
              <p className="color-success"> {feedBack} </p>
            </div>
            <div className="margin-top-lg">
              <Button variant="accent" size="full-width">
                Envoyer Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(ContactUs);
