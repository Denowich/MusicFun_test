import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { MainPage } from './components/ui/MainPage';

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);
reactRoot.render(<MainPage />);
