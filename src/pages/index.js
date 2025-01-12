import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// Import Vertical Timeline
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            What is DevOps Buildcamp - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function Timeline() {
  const roadmap = [
    { month: "JAN", title: "Containerize with Docker", description: "Setup Docker and start containerising the app by learning  the art of writing good Dockerfiles with multi-stage version of it etc. Learn how the containers connect with each other (thats why its useful to have a micro services app)  i.e. container networking, volumes and storage with docker. Also start using dev containers for your development workflow.  Then build your development environment with docker compose. This will make you a super backend engineer ready for the real world. ", link: "/docs/category/mon-01---docker-projects" },
    { month: "FEB", title: "Deploy with Kubernetes", description: "Set up Jenkins pipelines for code automation.", link: "/projects/february" },
    { month: "MAR", title: "Setup CI/CD Pipeline", description: "Containerize applications for portability.", link: "/projects/march" },
    { month: "APR", title: "Script it with Python", description: "Deploy workloads in Kubernetes clusters.", link: "/projects/april" },
    { month: "MAY", title: "Build AWS Infra", description: "Implement monitoring and scaling with Kubernetes.", link: "/projects/may" },
    { month: "JUN", title: "Templatize with Terraform", description: "Automate deployments with GitOps workflows.", link: "/projects/june" },
    { month: "JUL", title: "Build Release Strategies with ArgoCD", description: "Provision resources using Terraform and Ansible.", link: "/projects/july" },
    { month: "AUG", title: "Setup Observability", description: "Integrate security tools into the DevOps pipeline.", link: "/projects/august" },
    { month: "SEP", title: "Secure with DevSecOps Pipeline", description: "Deploy Istio for service traffic management.", link: "/projects/september" },
    { month: "OCT", title: "Deploy to EKS, Karpenter, KEDA", description: "Set up Prometheus, Grafana, and Loki for monitoring.", link: "/projects/october" },
    { month: "NOV", title: "Serive Mesh with Istio", description: "Optimize cloud resources and implement cost management.", link: "/projects/november" },
    { month: "DEC", title: "Project Retrospective", description: "Evaluate progress and define goals for the next year.", link: "/projects/december" },
  ];

  return (
    <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <h2 style={{ textAlign: 'center', color: '#0b7285', marginBottom: '1rem' }}>Devops Builders Roadmap for 2025</h2>
      <VerticalTimeline layout="1-column-left">
        {roadmap.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            //date={item.month}
            iconStyle={{ background: '#25c2a0', color: '#fff' }}
            contentStyle={{ background: '#f5f6f7', color: '#212529', border: '1px solid #e1e4e8' }}
            contentArrowStyle={{ borderRight: '7px solid  #f5f6f7' }}
            icon={<div style={{ textAlign: 'center', lineHeight: '40px', fontWeight: 'bold' }}>{item.month}</div>} // Month inside the circle
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#0b7285' }}>{item.title}</h3>
            <p>{item.description}</p>
            <a
              href={item.link}
              className="button button--primary"
              style={{ marginTop: '1rem', textDecoration: 'none' }}
            >
              View Projects
            </a>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Build Devops Projects <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Timeline /> {/* Add Timeline here */}
      </main>
    </Layout>
  );
}

