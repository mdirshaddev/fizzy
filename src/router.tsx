import { Routes, Route } from 'react-router-dom';
// TODO: Need to work on Routes they need a authentication guard and designing
import Dashboard from 'routes/Dashboard';
import Error404 from 'routes/Error404';
import Folder from 'routes/Folder';
import Landing from 'routes/Landing';
import Login from 'routes/Login';
import Profile from 'routes/Profile';
import Recent from 'routes/Recent';
import Shared from 'routes/Shared';
import Starred from 'routes/Starred';
import Trash from 'routes/Trash';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="folder/:folderId" element={<Folder />} />
        <Route path="recent" element={<Recent />} />
        <Route path="trash" element={<Trash />} />
        <Route path="starred" element={<Starred />} />
        <Route path="shared" element={<Shared />} />
      </Route>
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
