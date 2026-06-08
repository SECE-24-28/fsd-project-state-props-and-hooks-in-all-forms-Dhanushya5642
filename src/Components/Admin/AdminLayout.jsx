// AdminLayout.jsx

import LeftSidebar from "./LeftSideBar";
import CenterPanel from "./CenterPanel";
import RightSidebar from "./RightSideBar";

function AdminLayout() {
  return (
    <div className="h-screen flex overflow-hidden">
      <LeftSidebar />
      <CenterPanel />
      <RightSidebar />
    </div>
  );
}

export default AdminLayout;