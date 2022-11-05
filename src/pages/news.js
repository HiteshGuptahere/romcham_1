import Head from "next/head";
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { AuthGuard } from "../contexts/auth-guard";
import { News } from "../components/news/news";
import { NewsToolbar } from "../components/news/news-toolbar";

const Page = () => (
  <>
    <Head>
      <title>News | RoCham</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <NewsToolbar />
        <Box sx={{ mt: 3 }}>
          <News rochams={customers} />
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
