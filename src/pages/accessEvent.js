import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { AccessEventListToolbar } from "../components/access/access-list-event-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { AuthGuard } from "../contexts/auth-guard";
import { customers } from "../__mocks__/customers";
import { AccessEventCard } from "../components/access/access-event-card";

const Page = () => (
  <>
    <Head>
      <title>Access Event | RoCham</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <AccessEventListToolbar />
        <Box sx={{ mt: 3 }}>
          <AccessEventCard RoChams={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    <AuthGuard>{page}</AuthGuard>
  </DashboardLayout>
);

export default Page;
