import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TranslationContext from './contexts/translation-context';
import StaticTranslations from '../mock/static-translations';
import AppRoutes from './AppRoutes';

import './App.css';

function App() {
  const createRoute = ({
    id, path, component: Component, children = [],
  }) => (
    <Route
      key={id}
      path={path}
      element={(
        <Suspense>
          <Component />
        </Suspense>
            )}
    >
      {children.length && children.map((route) => createRoute(route))}
    </Route>
  );

  return (
    <div className="app-root">
      <TranslationContext.Provider value={StaticTranslations}>
        <BrowserRouter>
          <Routes>
            {AppRoutes.map((route) => createRoute(route))}
          </Routes>
        </BrowserRouter>
      </TranslationContext.Provider>
    </div>

  );
}

export default App;
