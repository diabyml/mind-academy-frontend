import AppLayout from "../../components/app-layout";
import CourseList from "../../components/course/course-list";
import { withApollo } from "../../utils/withApollo";

interface Props {}

const Courses = () => {
  return (
    <AppLayout>
      <section className="padding-y-lg">
        <div className="container max-width-md">
          <div className="margin-bottom-md">
            <h1 className="color-primary text-xl max-width-xxs">Nos cours</h1>
          </div>
          <CourseList isAdmin={false} />
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(Courses);
