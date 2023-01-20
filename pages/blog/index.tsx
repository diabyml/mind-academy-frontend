import { useRouter } from "next/router";
import AppLayout from "../../components/app-layout";
import BlogList from "../../components/blog/blog-list";
import Button from "../../components/button/button";
import { withApollo } from "../../utils/withApollo";

const Blog = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <section className="padding-y-lg">
        <div className="container max-width-md">
          <div className="text-component">
            <h1 className="color-primary text-xl max-width-xxs">
              Bienvenue à notre Blog Toujours mis à jour !
            </h1>
            <p>Être informé! Ne manquez jamais un seul blog</p>
            <div>
              <Button
                variant="accent"
                handler={() => router.push("/blog/nouveau")}
              >
                Exprimer vous !
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-y-lg">
        <div className="container max-width-md">
          <BlogList isAdmin={false} />
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(Blog);
