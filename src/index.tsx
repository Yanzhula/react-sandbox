import React from 'react';
import ReactDOM from 'react-dom/client';
import { SubletList } from './Sublet/SubletList';

const App: React.FC = () => {
  return <>
    <h1>Sublets list</h1>
    <SubletList/>
    </>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);