import { Outlet } from "react-router-dom";
//An <Outlet> should be used in parent route elements to render their child route elements.
const App = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default App;
