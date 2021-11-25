import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
  return (
    <Fragment>
      <h1>The news </h1>
      <ul>
        <li>
          <Link href="/news/Link">Link 1</Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
