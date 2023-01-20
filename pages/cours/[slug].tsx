import { useRouter } from "next/router";
import React from "react";
import AppLayout from "../../components/app-layout";
import { useCourseQuery } from "../../generated/graphql";
import { createMarkup } from "../../utils/createMarkup";
import { withApollo } from "../../utils/withApollo";

const CourseDetail = () => {
  const router = useRouter();

  const {data,loading,error} = useCourseQuery({ variables: { slug: router.query.slug as string } });

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


  return (
    <AppLayout>
      <section className="padding-y-lg">
        <div className="container max-width-sm margin-x-auto">
            <h1 className='color-primary margin-bottom-sm text-center' > {data?.course?.title} </h1>
          <div className='flex items-center justify-center margin-bottom-md'>
          <iframe
              className="video"
              src={data?.course?.videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;"
              allowFullScreen
            ></iframe>
          </div>
          <div className="container  text-component" dangerouslySetInnerHTML={createMarkup(data?.course?.html as string)}></div>
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(CourseDetail);
