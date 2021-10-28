import { NavLink } from 'react-router-dom';
import IconedNav from 'components/molecules/IconedNav/IconedNav';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { SWrapper, SInnerWrapper } from './Navbar.styles';

const navLinks = [
  { path: '/todo', icon: 'todolist', label: 'To Do' },
  { path: '/calendar', icon: 'calendar', label: 'Calendar' },
  { path: '/shopping', icon: 'shopping', label: 'Shopping' },
];

const Navbar = () => {
  return (
    <SWrapper>
      <SInnerWrapper>
        <strong>Logo</strong>
        <IconedNav links={navLinks} />
        <ButtonIcon as={NavLink} to="/settings" icon="settings" title="Settings" />
      </SInnerWrapper>
    </SWrapper>
  );
};

export default Navbar;
