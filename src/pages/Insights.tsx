import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: 'Financial Habits',
    title: 'The Power of Payroll Splits: Why Automation Beats Willpower',
    excerpt: 'Research shows that automated savings consistently outperforms manual contributions. Here is why setting up a payroll split might be the smartest financial decision you make this year.',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    category: 'Employer Benefits',
    title: 'Employer Matching: The Benefit Employees Actually Use',
    excerpt: 'Traditional benefits often go underutilized. But matching programs? They see participation rates 3x higher than standard options. Learn how to design a program that works.',
    date: '2024-01-10',
    readTime: '7 min read',
  },
  {
    id: 3,
    category: 'Investing Basics',
    title: 'What is NAV? Understanding Fund Pricing in Plain English',
    excerpt: 'Net Asset Value sounds complicated, but it is not. Here is a simple breakdown of how fund pricing works and why it matters for your investments.',
    date: '2024-01-05',
    readTime: '4 min read',
  },
  {
    id: 4,
    category: 'Regulatory Trust',
    title: 'Why Regulator-Native Design Matters for Your Money',
    excerpt: 'In a world of financial innovation, regulatory compliance is not just about rules — it is about protecting your assets. Here is how MASAR approaches governance.',
    date: '2024-01-02',
    readTime: '6 min read',
  },
  {
    id: 5,
    category: 'Financial Habits',
    title: 'Round-Ups: Small Change, Big Impact',
    excerpt: 'Can rounding up your coffee purchase really make a difference? The math might surprise you. We break down how micro-investments compound over time.',
    date: '2023-12-28',
    readTime: '4 min read',
  },
  {
    id: 6,
    category: 'Investing Basics',
    title: 'Halal Investing: Principles and Practices',
    excerpt: 'Faith-aligned investing is growing rapidly. Learn about the core principles of Sharia-compliant investment and how screening processes work.',
    date: '2023-12-20',
    readTime: '8 min read',
  },
];

const categories = ['All', 'Financial Habits', 'Employer Benefits', 'Investing Basics', 'Regulatory Trust'];

export default function Insights() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              MASAR Insights
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Financial habits, employer benefits, investing basics, and regulatory trust.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article 
                key={article.id}
                className="card-elevated overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-champagne/20 text-xs font-medium text-foreground mb-4">
                    {article.category}
                  </span>
                  
                  <h2 className="text-xl font-serif text-foreground mb-3 leading-tight">
                    <Link to="#" className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Stay Informed
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest insights delivered to your inbox.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            Subscribe to MASAR Insights
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
