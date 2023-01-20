import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CourseSnippetFragment } from "../../generated/graphql";
import CourseActions from "./course-actions";

interface Props {
  course: CourseSnippetFragment;
  isAdmin: boolean;
}

const CourseItem: React.FC<Props> = ({ course, isAdmin }) => {
  return (
    <div className="course-card border shadow-sm radius-sm overflow-hidden cursor-pointer">
      <Link href={`/cours/${course.slug}`} passHref>
        <div>
          <div className="image-container">
            {/* <Image
          className="object-cover"
          src={`${course.thumbnail}`}
          width="300px"
          height="350px"
          alt="Course image"
          style={{width:'100% !important'}}
        /> */}
            <img src={`${course.thumbnail}`} alt="Course Image" />
          </div>
          <div className="padding-x-sm padding-y-md">
            <h3 className="text-sm"> {course.title} </h3>
            <p className="text-sm"> {course.textSnippet} </p>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-end padding-bottom-sm padding-x-sm">
        {isAdmin && <CourseActions id={course.id} slug={course.slug} />}
      </div>
    </div>
  );
};

export default CourseItem;
