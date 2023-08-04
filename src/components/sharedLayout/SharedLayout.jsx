import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <MainContainer>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </MainContainer>
  );
};
