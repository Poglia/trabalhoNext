import { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div>
    <h2>Area de Autenticação:</h2>
    {children}</div>;
};

export default Layout;
