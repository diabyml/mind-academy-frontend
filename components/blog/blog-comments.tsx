import React from "react";
import { usePostCommentsQuery, usePostCommentsWithoutPaginationQuery } from "../../generated/graphql";
import { format } from 'date-fns';
import Button from '../button/button';

interface Props {
  postId: string;
  commentsCount: number;
}

const BlogComments: React.FC<Props> = ({ postId,commentsCount }) => {
//   const { data, loading, error, fetchMore, variables } = usePostCommentsQuery({
//     variables: { postId: parseInt(postId), cursor: null, limit: 2 },
//     notifyOnNetworkStatusChange: true,
//     // fetchPolicy: "no-cache",
//   });

  const {data,loading,error} = usePostCommentsWithoutPaginationQuery({variables:{postId}});

  const getFormatedDate = (date: string) => {
    const res = new Date(parseInt(date));
    // 'yyyy-MM-dd'
    return format(res, "dd-MM-yyyy");
  };


  if (loading) {
    // return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading comments</p>;
  }

//   using pagination
//   return (
//     <>
//       <div className="bg-light max-width-xs margin-x-auto border radius-md">
//         <span className="block font-bold color-primary text-md padding-x-sm margin-top-md">
//           {`${commentsCount} Commentaires`}
//         </span>
//         <ul>
//           { data?.postComments.data &&  data?.postComments.data.map((comment) => (
//             <div
//               key={comment.id}
//               className="padding-y-md padding-x-sm border-bottom border-bg-dark"
//             >
//               <div className="margin-bottom-xs flex items-center">
//                 <div
//                   className="bg-contrast-lower radius-full margin-right-xs"
//                   style={{ width: "30px", height: "30px" }}
//                 ></div>
//                 <span className="font-semibold text-sm">
//                   {" "}
//                   {comment.user.username}{" "}
//                 </span>
//               </div>
//               <p> {comment.content} </p>
//               <div className="margin-top-xs">
//                 <span className="color-contrast-low">
//                   {" "}
//                   {getFormatedDate(comment.createdAt)}{" "}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </ul>
//         <div>
//           {data?.postComments.hasMore && (
//             <div className="flex items-center justify-center padding-y-sm">
//               <Button
//                 handler={async () => {
//                   await fetchMore({
//                     variables: {
//                       cursor: data.postComments.data
//                         ? data.postComments.data[
//                             (data.postComments.data.length as any) - 1
//                           ].createdAt
//                         : null,
//                       postId: (variables as any).postId,
//                       limit: (variables as any).limit,
//                     },
//                   });
//                 }}
//               >
//                 {" "}
//                 Voir plus{" "}
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );


// without pagination
return (
    <>
      <div className="bg-light max-width-xs margin-x-auto border radius-md">
        <span className="block font-bold color-primary text-md padding-x-sm margin-top-md">
          {`${commentsCount} Commentaires`}
        </span>
        <ul>
          { data?.postCommentsWithoutPagination &&  data?.postCommentsWithoutPagination.map((comment) => (
            <div
              key={comment.id}
              className="padding-y-md padding-x-sm border-bottom border-bg-dark"
            >
              <div className="margin-bottom-xs flex items-center">
                <div
                  className="bg-contrast-lower radius-full margin-right-xs"
                  style={{ width: "30px", height: "30px" }}
                ></div>
                <span className="font-semibold text-sm">
                  {" "}
                  {comment.user.username}{" "}
                </span>
              </div>
              <p> {comment.content} </p>
              <div className="margin-top-xs">
                <span className="color-contrast-low">
                  {" "}
                  {getFormatedDate(comment.createdAt)}{" "}
                </span>
              </div>
            </div>
          ))}
        </ul>
        {/* <div>
          {data?.postComments.hasMore && (
            <div className="flex items-center justify-center padding-y-sm">
              <Button
                handler={async () => {
                  await fetchMore({
                    variables: {
                      cursor: data.postComments.data
                        ? data.postComments.data[
                            (data.postComments.data.length as any) - 1
                          ].createdAt
                        : null,
                      postId: (variables as any).postId,
                      limit: (variables as any).limit,
                    },
                  });
                }}
              >
                {" "}
                Voir plus{" "}
              </Button>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default BlogComments;
