import { LoginAdmin } from "../../pages/Admin";
export const AdminLayout = (props) => {
  const { children } = props;
  const auth = null;
  if (!auth) return <LoginAdmin />;
  return (
    <div>
      AdminLayoutdddd
      {children}
    </div>
  );
};
