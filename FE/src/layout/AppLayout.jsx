import { Outlet } from 'react-router-dom';
import * as S from './AppLayout.style';

const AppLayout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default AppLayout;
