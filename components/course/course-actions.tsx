import React, { useState } from "react";
import Button from "../button/button";

import { useRouter } from "next/router";
import { IoMdTrash } from "react-icons/io";
import { MdEditNote } from "react-icons/md";
import QuestionDialogue from "../dialogue/question-dialogue";
import { useDeleteCourseMutation } from "../../generated/graphql";

interface Props {
  id: string;
  slug: string;
}

const CourseActions: React.FC<Props> = ({ id, slug }) => {
  const [deleteCourse] = useDeleteCourseMutation();
  const router = useRouter();
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const onDeleteCourse = async () => {
    await deleteCourse({
      variables: { id: parseInt(id) },
      update: (cache) => {
        // Course:77
        cache.evict({ id: "Course:" + id });
      },
    });
  };

  return (
    <div className="flex items-center">
      <div className="margin-right-sm">
        <Button
          handler={async () => {
            // await deletePost({
            //   variables: { id: parseInt(id) },
            //   update: (cache) => {
            //     // Post:77
            //     cache.evict({ id: "Post:" + id });
            //   },
            // });
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
          //   router.push(`/blog/edit/${slug}`);
          router.push(`/admin/course/edit/${slug}`);
        }}
      >
        <MdEditNote />
      </Button>

      {/* delete dialog */}
      {isDialogueOpen && (
        <QuestionDialogue
          title="Effacer"
          question="Voulez-vous effacer ce cours?"
          onClose={setIsDialogueOpen}
          action={onDeleteCourse}
        />
      )}
    </div>
  );
};

export default CourseActions;
