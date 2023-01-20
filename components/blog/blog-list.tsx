import React from "react";
import { usePostsQuery } from "../../generated/graphql";
import BlogItem from "./blog-item";
import Button from "../button/button";

interface Props {
    isAdmin: boolean;
}

const BlogList: React.FC<Props> = ({isAdmin}) => {
  const { loading, error, data, fetchMore, variables } = usePostsQuery({
    variables: { cursor: null, limit: 15 },
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
      <ul className="flex flex-column gap-md">
        {data?.posts.data.map((post) => (
          <li key={post.id}>
            <BlogItem post={post} isAdmin={isAdmin} />
          </li>
        ))}
      </ul>

      {/* no blog */}
      {data?.posts && data.posts.data.length < 1 &&  <span>Pas de blog</span> }
      
      {data?.posts.hasMore && (
        <div className="flex items-center justify-center margin-top-md">
          <Button
            handler={() => {
              fetchMore({
                variables: {
                  limit: variables?.limit,
                  cursor: data.posts.data[data.posts.data.length - 1].createdAt,
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

export default BlogList;
