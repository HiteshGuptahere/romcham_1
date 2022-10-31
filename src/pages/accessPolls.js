import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { AccessPollsListToolbar } from "../components/accessPolls/access-list-poll-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { AuthGuard } from "../contexts/auth-guard";
import { customers } from "../__mocks__/customers";
import { AccessPollsCard } from "../components/accessPolls/access-poll-card";

const Page = () => (
  <>
    <Head>
      <title>Access Polls | RoCham</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <AccessPollsListToolbar />
        <Box sx={{ mt: 3 }}>
          <AccessPollsCard RoChams={customers} />
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
