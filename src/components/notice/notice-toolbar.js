import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import Router from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const NoticeToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h5">
        List Of Notice
      </Typography>
      <Box sx={{ minWidth: 500 }}>
        <Row>
          <Col style={{ textAlign: "end" }}>
            <Button
              variant="contained"
              onClick={() => {
                Router.push("/noticeCreate").catch(console.error);
              }}
            >
              Create Notice
            </Button>
          </Col>
        </Row>
      </Box>
    </Box>
    {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          
        </CardContent>
      </Card>
    </Box> */}
  </Box>
);
