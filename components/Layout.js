import Link from 'next/link';
import { Fragment } from 'react';

export default props => (
  <Fragment>
    <nav>
      <Link href="/">Index Page</Link> —{' '}
      <Link href="/static-page">Static Page</Link> —{' '}
      <Link href="/dynamic-page">Dynamic Page</Link>
    </nav>
    <h1>{props.children}</h1>
  </Fragment>
);
