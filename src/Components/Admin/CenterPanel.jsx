import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import SalesOverview from "./SalesOverview";
import InventoryStatus from "./InventoryStatus";
function CenterPanel({ activePage }) {
  return (
    <>
      <DashboardHeader />
      <StatsCards />
      <SalesOverview activePage={activePage} />
      <InventoryStatus />
    </>
  );
}
export default CenterPanel;