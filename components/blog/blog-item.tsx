import React from "react";
import {
  PostSnippetFragment,
  useDeletePostMutation,
  useMeQuery,
} from "../../generated/graphql";
import { format } from "date-fns";
import { useRouter } from "next/router";
import Button from "../button/button";
import BlogActions from "./blog-actions";

interface Props {
  post: PostSnippetFragment;
  isAdmin: boolean;
}

const BlogItem: React.FC<Props> = ({ post,isAdmin }) => {
  const router = useRouter();
  const { data } = useMeQuery();

  const getFormatedDate = () => {
    const date = new Date(parseInt(post.createdAt));
    // 'yyyy-MM-dd'
    return format(date, "dd-MM-yyyy");
  };

  const isCurrentUser = () => {
    return data?.me?.username === post.user.username || isAdmin;
  };

  return (
    <div className="bg-dark color-whit padding-sm">
      <h2
        className="text-md color-primary text-underline color-inheri cursor-pointer"
        onClick={() => router.push(`/blog/${post.slug}`)}
      >
        {post.title}
      </h2>
      <p>{post.content}</p>
      <span className="text-sm ">{getFormatedDate()}</span>
      <div className="flex items-center justify-between">
        <span className="text-sm">Publié par {post.user.username}</span>
        {isCurrentUser() && <BlogActions id={post.id} slug={post.slug} />}
      </div>
    </div>
  );
};

export default BlogItem;
