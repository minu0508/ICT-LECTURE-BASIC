import { useState } from 'react';
import { Board } from './Board';
import { PagenationItem } from './PagenationItem';

export const PagenationPage = () => {
  const [page, setPage] = useState(0);

  const articles = new Array(100).fill().map((_, i) => ({
    id: i,
    title: `${i}번째 게시물`,
  }));

  const limit = 10;
  const offset = page * limit;

  return (
    <>
      <PagenationItem defaultPage={0} limit={10} total={articles.length} onChange={setPage} />
      <Board articles={articles.slice(offset, offset + limit)} />
    </>
  );
};
