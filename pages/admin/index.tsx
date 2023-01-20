import { useRouter } from "next/router";
import React from "react";
import AppLayout from "../../components/app-layout";
import { withApollo } from "../../utils/withApollo";
import { useState } from "react";
import Input from "../../components/form/input";
import Button from "../../components/button/button";
import CreateCourseModal from "../../components/course/create-course-modal";
import AdminBlogList from "../../components/blog/admin-blog-list";
import AdminCourseList from '../../components/course/admin-course.list';
import ContactUsMessages from "../../components/contact-us/messages";

const Admin = () => {
  const router = useRouter();

  const [state, setState] = useState({
    password: "",
  });

  const [errors, setErrors] = useState<{
    password?: string;
  }>({ password: "" });

  //   TODO: change default value to false
  const [isConnected, setIsConnected] = useState(false);

  // show different views based on admin actions
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const [isViewingBlogs, setIsViewingBlogs] = useState(false);
  const [isViewingCourses, setIsViewingCourses] = useState(false);
  const [isViewingMessages, setIsViewingMessages] = useState(false);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!state.password) {
      setErrors({ password: "Mot de pass invalid" });
    }

    if (state.password !== "Mindacademy@2022") {
      setErrors({ password: "Mot de pass invalid" });
    } else {
      setIsConnected(true);
    }
  };

  return (
    <AppLayout>
      <section className="padding-y-lg">
        <div className="container max-width-md">
          {!isConnected ? (
            <div className="max-width-xxs margin-x-auto">
              <form onSubmit={handleSubmit}>
                <div className="margin-bottom-sm">
                  <Input
                    label="Mot de pass"
                    className="form-control width-100%"
                    type="password"
                    error={errors.password}
                    name="password"
                    value={state.password}
                    id="password"
                    handler={handleInput}
                  />
                </div>
                <Button variant="primary">Connecter</Button>
              </form>
            </div>
          ) : (
            <div>
              <div className="margin-bottom-md">
                <span className="color-primary ">Administrateur</span>
              </div>
              <div className="container max-width-xs flex flex-column gap-md">
                <Button
                  // variant="accent"
                  handler={() => {
                    setIsCreatingCourse((prev) => !prev);
                  }}
                >
                  Creer cours
                </Button>
                <Button
                  // variant="accent"
                  handler={() => {
                    setIsViewingCourses((prev) => !prev);
                  }}
                >
                  Voir les Cours
                </Button>
                <Button
                  // variant="accent"
                  handler={() => {
                    setIsViewingBlogs((prev) => !prev);
                  }}
                >
                  Voir les Blogs
                </Button>
                <Button
                  // variant="accent"
                  handler={() => {
                    setIsViewingMessages((prev) => !prev);
                  }}
                >
                  Voir les messages
                </Button>
              </div>
            </div>
          )}

          {/* create course container */}
          {isCreatingCourse && (
            <CreateCourseModal onClose={setIsCreatingCourse} />
          )}

          {/* blogs list container */}
          {isViewingBlogs && <AdminBlogList onClose={setIsViewingBlogs} />}

          {/* course list container */}
          {isViewingCourses && <AdminCourseList onClose={setIsViewingCourses}/>}

          {/* contact us messages */}
          {isViewingMessages && <ContactUsMessages onClose={setIsViewingMessages} />}
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(Admin);
