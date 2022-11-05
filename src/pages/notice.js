import Head from "next/head";
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { AuthGuard } from "../contexts/auth-guard";
import { Notice } from "../components/notice/notice";
import { NoticeToolbar } from "../components/notice/notice-toolbar";
Notice;
const Page = () => (
  <>
    <Head>
      <title>Notice | RoCham</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <NoticeToolbar />
        <Box sx={{ mt: 3 }}>
          <Notice rochams={customers} />
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
