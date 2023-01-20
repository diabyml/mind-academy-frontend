import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  PostCommentsWithoutPaginationDocument,
  PostSnippetFragment,
  useMeQuery,
  useSendCommentMutation
} from "../../generated/graphql";
import Button from "../button/button";
import TextArea from "./textarea";

interface Props {
  post: PostSnippetFragment;
}

const CommentForm: React.FC<Props> = ({ post }) => {
  const [message, setMessage] = useState("");
  const [feedBack,setFeedback] = useState("");
  const router = useRouter();
  const [sendComment] = useSendCommentMutation({
    refetchQueries: [
      {
        query: PostCommentsWithoutPaginationDocument,
        variables: { postId: post.id},
      },
    ],
  });
  const { data: userData, loading: userLoading } = useMeQuery();

  // send message logic
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(userData?.me)
    if (!userData?.me) {
      router.push("/inscription");
      console.log('user not logged in')
    }

    if (message) {
      console.log("message:", message);
      try {
        const response = await sendComment({
          variables: {
            postId: parseInt(post.id),
            userId: parseInt(userData?.me?.id as string),
            content: message,
          },
        });

        if (response?.data?.createComment) {
          console.log("commnet sent");
          setMessage("");
          setFeedback('Message envoyé');
            setTimeout(() => {
              setFeedback('')
            } , 2000)
        } else {
          console.log("an error occured");
        }
      } catch (error) {
        console.log('comment post error:',error);
      }
    } else {
      console.log("empty message");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="margin-bottom-sm">
          <TextArea
            id="message"
            type="text"
            name="message"
            value={message}
            // label="Message"
            placeholder="Message"
            handler={handleInput}
          />
        </div>
        <div className="margin-bottom-sm flex items-center" >
          <p className='color-success font-bold'> {feedBack} </p>
        </div>
        <div className="margin-top-lg">
          <Button variant="accent" size="full-width">
            Envoyer Message
          </Button>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
