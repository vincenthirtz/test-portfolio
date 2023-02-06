import { HelmetProvider } from 'react-helmet-async';
import Router from './router';
import Cursor from 'components/Cursor';
import { mobileAndTabletCheck } from 'utils';
import './App.module.sass';

const App = (): JSX.Element => {
  return (
    <HelmetProvider>
      {!mobileAndTabletCheck() && <Cursor />}
      <Router />
    </HelmetProvider>
  );
};

export default App;
