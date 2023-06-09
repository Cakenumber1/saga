import React, { FunctionComponent, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

interface Props {
  token: string
  onLogout(): void
}

enum NavElType {
  Link = 'Link',
  Button = 'Button',
}

interface INavEl {
  type: NavElType,
  url?: string,
  text: string
}

const navElements: INavEl[] = [
  { type: NavElType.Link, url: '/', text: 'home' },
  { type: NavElType.Link, url: '/songs', text: 'songs' },
  { type: NavElType.Button, text: 'Выйти' },
];

const LiEl = memo((
  { el, onLogout } : { el: INavEl, onLogout: () => void },
) => (
  <li>
    {el.type === NavElType.Link
      ? <Link to={el.url!}>{el.text}</Link>
      : <button type="button" onClick={onLogout}>{el.text}</button>}
  </li>
));

const NavComponent: FunctionComponent<Props> = ({
  token,
  onLogout,
}) => {
  const [toggled, setToggled] = useState(false);
  if (token) {
    return (
      <nav>
        {/* todo: rm rules)) */}
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          id="hamburger"
          className={cx({ toggle: toggled })}
          onClick={() => setToggled(!toggled)}
        >
          <div id="bar1" />
          <div id="bar2" />
          <div id="bar3" />
        </div>

        <div className={cx('navMenu', { 'nav-active': toggled })}>
          <ul>
            {navElements.map((el) => (
              <LiEl el={el} onLogout={onLogout} key={el.text} />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
  return null;
};

export default NavComponent;
