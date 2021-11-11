import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to='/'
          className={(navData) =>
            navData.isActive ? classes.active : classes.simple
          }
        >
          Add todo
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to='/editTodo'
          className={(navData) => (navData.isActive ? classes.active : '')}
        >
          Todo List
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
