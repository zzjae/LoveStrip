import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { colors } from '@/styles/colorPalette';

import Button from '@shared/Button';
import Flex from '@shared/Flex';
import { useCallback } from 'react';

import useUser from '@/hooks/auth/useUser';
import Spacing from '@/components/shared/Spacing';

function Navbar() {
  const location = useLocation();

  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false;

  const user = useUser();

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Flex align="center">
          <Link to="/my">
            <img
              src={
                user.photoUrl ??
                'https://consent.cookiefirst.com/sites/iconfinder.com-a78e075e-557f-41cd-be61-cc12d6cc8be8/consent.js'
              }
              alt="유저 이미지"
              width={40}
              height={40}
              style={{ borderRadius: '100%' }}
            />
          </Link>
          <Spacing size={4} direction="horizontal" />
          <Link to="settings">
            <img
              src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-06-64.png"
              alt=""
              width={40}
              height={40}
            />
          </Link>
        </Flex>
      );
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      );
    }

    return null;
  }, [user, showSignButton]);

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">Love Trip</Link>
      {renderButton()}
    </Flex>
  );
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.gray};
`;
export default Navbar;
