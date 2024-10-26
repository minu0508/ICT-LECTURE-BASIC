import PropTypes from 'prop-types';

export const Board = ({ articles }) => {
  return (
    <>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.id} | {article.title} | {article.author}
          </li>
        ))}
      </ul>
    </>
  );
};

Board.propTypes = {
  articles: PropTypes.array,
};
