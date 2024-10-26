import { TitleLabel } from '../TitleLabel';
import PropTypes from 'prop-types';

const BoardItem = ({ articles }) => {
  return (
    <div>
      <TitleLabel title={'Board'} />

      <ul>
        {articles.map((articles) => (
          <li key={articles.id}>
            {articles.id} | {articles.title} | {articles.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

BoardItem.propTypes = {
  articles: PropTypes.array,
};

export default BoardItem;
