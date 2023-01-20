import React, {useState} from "react";
import { useGetCoursesQuery } from "../../generated/graphql";
import Button from "../button/button";
import CourseItem from "./course-item";

interface Props {
  isAdmin: boolean;
}

const CourseList: React.FC<Props> = ({isAdmin}) => {
  const { loading, error, data, fetchMore, variables } = useGetCoursesQuery({
    variables: { cursor: null, limit: 14 },
    notifyOnNetworkStatusChange: true,
  });

  if (!data && loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>An error occured</div>;
  }

  return (
    <>
      <ul className="grid-auto-md gap-sm">
        {data?.courses.data.map((course) => (
          <li key={course.id} className="flex items-center justify-center">
            <CourseItem   course={course} isAdmin={isAdmin} />
          </li>
        ))}
      </ul>

          {/* pas de cours */}
          {data?.courses.data && data.courses.data.length < 1 && <span>Les cours seront bientôt disponibles!</span> }

      {data?.courses.hasMore && (
        <div className="flex items-center justify-center margin-top-md">
          <Button
            handler={() => {
              fetchMore({
                variables: {
                  limit: variables?.limit,
                  cursor:
                    data.courses.data[data.courses.data.length - 1].createdAt,
                },
              });
            }}
          >
            Voir plus
          </Button>
        </div>
      )}
    </>
  );
};

export default CourseList;
