import React, { useState } from "react";
import { useDeletePostMutation } from "../../generated/graphql";
import Button from "../button/button";

import { IoMdTrash } from "react-icons/io";
import { MdEditNote } from "react-icons/md";
import { useRouter } from "next/router";
import QuestionDialogue from "../dialogue/question-dialogue";

interface Props {
  id: string;
  slug: string;
}

const BlogActions: React.FC<Props> = ({ id, slug }) => {
  const [deletePost] = useDeletePostMutation();
  const router = useRouter();
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const onDeletePost = async () => {
    await deletePost({
      variables: { id: parseInt(id) },
      update: (cache) => {
        // Post:77
        cache.evict({ id: "Post:" + id });
      },
    });
  }

  return (
    <div className="flex items-center">
      <div className="margin-right-sm">
        <Button
          handler={async () => {
            setIsDialogueOpen(true);
          }}
          variant={"danger"}
          size={"sm"}
        >
          <IoMdTrash />
        </Button>
      </div>
      <Button
        variant={"accent"}
        size="sm"
        handler={() => {
          router.push(`/blog/edit/${slug}`);
        }}
      >
        <MdEditNote />
      </Button>

      {/* delete dialog */}
      {isDialogueOpen && (
        <QuestionDialogue
          title="Effacer"
          question="Voulez-vous effacer ce blog?"
          onClose={setIsDialogueOpen}
          action={onDeletePost}
        />
      )}
    </div>
  );
};

export default BlogActions;
