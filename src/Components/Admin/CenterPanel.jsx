import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import SalesOverview from "./SalesOverview";
import InventoryStatus from "./InventoryStatus";
function CenterPanel() {
  return (
    <main className="flex-1 overflow-y-auto">
      <DashboardHeader />
      <StatsCards />
      <SalesOverview />
      <InventoryStatus />
    </main>
  );
}
export default CenterPanel;

// import React from "react";
// import { Box, Grid } from "@mui/material";

// import DashboardHeader from "./DashboardHeader";
// import StatsCards from "./StatsCards";
// import SalesOverview from "./SalesOverview";
// import GroceryBanner from "./GroceryBanner";
// import TopCategories from "./TopCategories";
// import InventoryStatus from "./InventoryStatus";

// const CenterPanel = () => {
//   return (
//     <Box
//       sx={{
//         flex: 1,
//         p: 3,
//       }}
//     >
//       <DashboardHeader />

//       <StatsCards />

//       <SalesOverview />

//       <GroceryBanner />

//       <Grid
//         container
//         spacing={3}
//         mt={1}
//       >
//         <Grid item xs={12} md={5}>
//           <TopCategories />
//         </Grid>

//         <Grid item xs={12} md={7}>
//           <InventoryStatus />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default CenterPanel;