import { useRouter } from "next/router";
import AppLayout from "../../components/app-layout";
import { usePostQuery } from "../../generated/graphql";
import { withApollo } from "../../utils/withApollo";

import BlogComments from "../../components/blog/blog-comments";
import CommentForm from "../../components/form/comment-form";

const BlogDetail = () => {
  const router = useRouter();

  const { loading, error, data } = usePostQuery({
    variables: { slug: router.query.slug as string },
    onCompleted: () => {
      console.log('post fetched completed')
    }
  });


  if (!data && loading) {
    return (
      <AppLayout>
        <div>loading...</div>
      </AppLayout>
    );
  }



  if (error) {
    return (
      <AppLayout>
        {" "}
        <div>An error occured</div>{" "}
      </AppLayout>
    );
  }

 
  const createMarkup = (html:string) => {
    return  {
      __html:html
    }
  }

 

  return (
    <AppLayout>
      <section className="padding-y-lg">
        <div className="container  text-component max-width-xs"  >
          <h2 className="color-primary max-width-xxs"> {data?.post?.title} </h2>
          {/* <p> {data?.post?.content} </p> */}
          <div className="blog-html" dangerouslySetInnerHTML={createMarkup(data?.post?.html as string)}></div>
        </div>
      </section>
      <section className="padding-y-lg">
        <div className="container max-width-md">
          {/* comments here */}
          {data && <BlogComments postId={data.post?.id as string} commentsCount={data.post?.commentsCount as number} /> }
          <div className="max-width-xs margin-x-auto">
            <span className="font-bold text-sm block margin-top-md margin-bottom-sm">
              Laissez un commentaire
            </span>
            <CommentForm post={data?.post as any} />
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(BlogDetail as any);
