import { Header } from 'components/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
