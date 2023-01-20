import React from "react";
import { IoMdClose } from "react-icons/io";
import { useContactUsMessagesQuery } from "../../generated/graphql";
import AppLayout from "../app-layout";
import Button from "../button/button";

interface Props {
  onClose: (state: boolean) => void;
}

const ContactUsMessages: React.FC<Props> = ({ onClose }) => {
  const { data, error, loading } = useContactUsMessagesQuery({
    variables: { option: "all" },
    notifyOnNetworkStatusChange: true,
  });

  if (!data && loading) {
    return (
      <AppLayout>
        <section className="padding-y-lg">
          <div className="container max-width-md">
            <div>loading...</div>
          </div>
        </section>
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout>
        <section className="padding-y-lg">
          <div className="container max-width-md">
            <div>error occured!</div>
          </div>
        </section>
      </AppLayout>
    );
  }

  return (
    <div className="bg-white overflow-auto padding-y-lg position-fixed top-0 right-0 bottom-0 left-0 z-index-overlay">
      <div className="container max-width-xs">
        <header className="flex items-center justify-between margin-bottom-md">
          <span className="color-primary font-semibold text-sm">
            Les Messages
          </span>
          <Button variant="danger" size="sm" handler={() => onClose(false)}>
            <IoMdClose />
          </Button>
        </header>
        {/* blog list here */}
        <ul className="flex flex-column gap-md">
          {data?.contactUsMessages.map((message) => (
            <div
              key={message.id}
              className="border shadow-xs padding-x-sm padding-y-xs"
            >
              <header>
                <span className="text-xs color-contrast-medium">
                  {" "}
                  {message.fullName}{" "}
                </span>
              </header>
              <main>
                <p> {message.message} </p>
                <span className="text-xs">Email:</span>{" "}
                <span className="text-xs">{message.email}</span>
              </main>
            </div>
          ))}
        </ul>
        {data?.contactUsMessages && data?.contactUsMessages.length < 1 && (
          <span>Pas de message</span>
        )}
      </div>
    </div>
  );
};

export default ContactUsMessages;
