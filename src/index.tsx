import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
// eslint-disable-next-line
const root = createRoot(container!);
root.render(<App />);
reportWebVitals();
