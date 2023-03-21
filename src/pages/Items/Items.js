import Intro from '~/components/Intro';
import { Link } from 'react-router-dom';

function Items() {
  return (
    <div>
      <h1>Items page</h1>
      <Intro items />
      <a href="/home#items">Set to Link</a>
      <Link to="/home#introductions">
        Go to About page and scroll to Introductions
      </Link>
    </div>
  );
}

export default Items;
