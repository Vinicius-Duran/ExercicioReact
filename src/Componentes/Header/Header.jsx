import Avatar from './Avatar/Avatar';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src='/vite.svg' />
      <Avatar nome='Vinicius Duran' />
    </header>
  );
};

export default Header;
