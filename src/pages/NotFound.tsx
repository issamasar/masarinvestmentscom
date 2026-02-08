import { Link } from "react-router-dom";
import { Layout } from '@/components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="container-content text-center">
          <h1 className="text-6xl font-serif text-navy mb-4">404</h1>
          <p className="text-lg text-muted-foreground mb-8">Page not found</p>
          <Link to="/" className="text-primary font-medium hover:underline">
            Return to Home →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
