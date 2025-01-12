import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn by Building',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        DevOps Buildcamp takes a hands-on approach, letting you build 
	real-world skills through practical projects rather than just theory.
      </>
    ),
  },
  {
    title: 'Industry-Ready Skills',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
	Focus on tools and practices actually used in the industry. 
	We've carefully curated projects that teach you what matters in real DevOps roles
      </>
    ),
  },
  {
    title: 'Community Driven',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
	Join a vibrant community of DevOps enthusiasts. Learn, share, and grow 
	together with fellow builders from the Reddit DevOps community.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
