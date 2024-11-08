import { useState } from 'react';

export const PagenationItem = ({ defaultPage, limit, total, onChange }) => {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);

  const handlChangePage = (newPage) => {
    onChange(newPage);
    setPage(newPage);
  };

  return (
    <>
      <div>
        <button onClick={() => page !== 0 && handlChangePage(page - 1)}>이전</button>
        {Array.from(new Array(totalPage), (_, i) => i)
          .filter((i) => {
            if (page < 3) {
              return i < 5;
            } else if (page > totalPage - 3) {
              return i >= totalPage - 5;
            }
            return i >= page - 2 && i <= page + 2;
          })
          .map((i) => (
            <button
              key={i}
              onClick={() => handlChangePage(i)}
              style={{
                backgroundColor: page === i ? 'red' : undefined,
              }}
            >
              {i + 1}
            </button>
          ))}
        <button onClick={() => page + 1 !== totalPage && handlChangePage(page + 1)}>다음</button>
      </div>
    </>
  );
};
