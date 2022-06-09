import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <div>Dashboard</div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
