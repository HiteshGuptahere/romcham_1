import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { AccessNewsListToolbar } from "../components/accessNews/access-list-news-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { AuthGuard } from "../contexts/auth-guard";
import { customers } from "../__mocks__/customers";
import { AccessNewsCard } from "../components/accessNews/access-news-card";

const Page = () => (
  <>
    <Head>
      <title>Access News | RoCham</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <AccessNewsListToolbar />
        <Box sx={{ mt: 3 }}>
          <AccessNewsCard RoChams={customers} />
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
