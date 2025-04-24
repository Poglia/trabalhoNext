import './globals.css';
import { ReactNode } from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <html lang="en">
      <body>
        <h1>Meu primeiro projeto next</h1>
        <hr />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}

export default Layout;