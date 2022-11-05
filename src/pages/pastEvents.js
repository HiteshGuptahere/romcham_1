import Head from "next/head";
import { Box, Container } from "@mui/material";
import { PastEvents } from "../components/events/pastEvents";
import { EventsToolbar } from "../components/events/events-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { AuthGuard } from "../contexts/auth-guard";

const Page = () => (
  <>
    <Head>
      <title>RoChams | Events</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <EventsToolbar />
        <Box sx={{ mt: 3 }}>
          <PastEvents RoChams={customers} />
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
