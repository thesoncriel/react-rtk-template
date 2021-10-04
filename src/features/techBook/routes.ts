import React from 'react';
import { ModuleRouteModel } from 'ts-fe-toolkit';

const TechBookPage = React.lazy(() => import('./pages/TechBookPage'));

export const techBookRoutes: ModuleRouteModel[] = [
  {
    path: '/techBook',
    component: TechBookPage,
  }
];