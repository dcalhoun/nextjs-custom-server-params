import Router from 'next/router';
import Link from 'next/link';
import { Fragment } from 'react';

const handleClick = e => {
  e.preventDefault();
  Router.push(e.target.href, e.target.getAttribute('data-as'));
};

export default props => (
  <Fragment>
    <nav>
      <h2>Working</h2>
      <Link href="/">
        <a>Index Page</a>
      </Link>{' '}
      —{' '}
      <Link href="/static-page">
        <a>Static Page</a>
      </Link>{' '}
      —{' '}
      <Link href="/dynamic-page?token=bar" as="/dynamic-page/bar">
        <a>Dynamic Page: bar (w/ as)</a>
      </Link>{' '}
      —{' '}
      <a
        onClick={handleClick}
        href="/dynamic-page?token=sam"
        data-as="/dynamic-page/sam"
      >
        Dynamic Page: sam (imperatively)
      </a>
    </nav>
    <nav>
      <h2>Broken</h2>
      <Link href="/static-page/nested">
        <a>Static Page Nested</a>
      </Link>{' '}
      —{' '}
      <Link href="/dynamic-page/foo">
        <a>Dynamic Page: foo (w/o as)</a>
      </Link>
    </nav>
    <hr />
    <h1>{props.children}</h1>
  </Fragment>
);
