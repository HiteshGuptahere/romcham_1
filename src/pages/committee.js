import Head from "next/head";
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { AuthGuard } from "../contexts/auth-guard";
import { Committee } from "../components/committee/committee";
import { CommitteeToolbar } from "../components/committee/committee-toolbar";

const Page = () => (
  <>
    <Head>
      <title>RoCham | RoCham</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <CommitteeToolbar />
        <Box sx={{ mt: 3 }}>
          <Committee rochams={customers} />
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
