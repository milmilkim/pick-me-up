import Link from 'next/link';
import styled from 'styled-components';

export default function Nav() {
  const menuList = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'character',
      path: '/pick-char',
    },
  ];
  return (
      <StyledNav>
        <ul>
          {menuList.map((menu) => (
            <li key={menu.path}>
              <Link href={menu.path}>{menu.name} </Link>
            </li>
          ))}
        </ul>
      </StyledNav>
  );
}

const StyledNav = styled.nav`
  ul {
    display: flex;
  }
  ul li {
    margin-right: 10px;
  }
`;
