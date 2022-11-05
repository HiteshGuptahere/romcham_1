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

export const NewsToolbar = (props) => (
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
        List Of News
      </Typography>
      <Box sx={{ minWidth: 500 }}>
        <Row>
          <Col style={{ textAlign: "end" }}>
            <Button
              variant="contained"
              onClick={() => {
                Router.push("/newsCreate").catch(console.error);
              }}
            >
              Post News
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
