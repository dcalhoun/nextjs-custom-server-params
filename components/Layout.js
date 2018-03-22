import Link from 'next/link';
import { Fragment } from 'react';

export default props => (
  <Fragment>
    <nav>
      <Link href="/">
        <a>Index Page</a>
      </Link>{' '}
      —{' '}
      <Link href="/static-page">
        <a>Static Page</a>
      </Link>{' '}
      —{' '}
      <Link href="/static-page/nested">
        <a>Static Page Nested</a>
      </Link>{' '}
      —{' '}
      <Link href="/dynamic-page/foo">
        <a>Dynamic Page: foo</a>
      </Link>{' '}
      —{' '}
      <Link href="/dynamic-page/bar">
        <a>Dynamic Page: bar</a>
      </Link>
    </nav>
    <h1>{props.children}</h1>
  </Fragment>
);
