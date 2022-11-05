import { useFormik } from "formik";
import { useAuthContext } from "../../contexts/auth-context";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Box, Card, Snackbar, Typography, TextField } from "@mui/material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const UserCreate = ({ product, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [event, setEvent] = useState("read");
  const [polls, setPolls] = useState("read");
  const [news, setNews] = useState("read");
  const dispatch = useDispatch();
  const [open, setOpen] = useState({
    state: false,
    mesage: "",
  });
  const [dialogObj, setDialogObj] = useState({});

  const { user } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      mobile: "",
      password: "",
      representativeName: "",
      companyRegNo: "",
      location: "",
      numOfEmployess: 0,
      annualTurn: "",
      membershipCat: "",
      isAdmin: false,
      eventAccess: ["read"],
      pollsAccess: ["read"],
      newsAccess: ["read"],
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("First Name is required"),
      companyName: Yup.string().required("Last Name is required"),
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      mobile: Yup.string().required("Mobile is required"),
      password: Yup.string().min(4).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          companyName: values.companyName,
          email: values.email,
          mobile: values.mobile,
          password: values.password,
          representativeName: values.representativeName,
          companyRegNo: values.companyRegNo,
          location: values.location,
          numOfEmployess: values.numOfEmployess,
          annualTurn: values.annualTurn,
          membershipCat: values.membershipCat,
          isAdmin: values.isAdmin,
          eventAccess: [event],
          pollsAccess: [polls],
          newsAccess: [news],
        };
        return await axios
          .post(process.env.NEXT_PUBLIC_BASE_URL + "create-user", payload, {
            headers: {
              authorization: user.accessToken,
            },
          })
          .then((res) => {
            handleClick("Success");
            setTimeout(() => {
              Router.push("/users").catch(console.error);
            }, 1500);
          })
          .catch((error) => {
            // helpers.setFieldError("submit", "Please try with valid email & password!");
          });
      } catch (err) {
        handleClick("Error");
        console.error(err.message);
        helpers.setFieldError("submit", err.message || "Something went wrong");
        helpers.setSubmitting(false);
      }
    },
  });
  const handleClick = (message) => {
    setOpen({
      state: true,
      message: message,
    });
  };

  const handleClose = () => {
    setOpen({
      state: false,
      message: "",
    });
  };
  const handleEventChange = (e) => {
    setEvent(e);
  };
  const handlePollsChange = (e) => {
    setPolls(e);
  };
  const handleNewsChange = (e) => {
    setNews(e);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        open={open.state}
        autoHideDuration={2500}
        onClose={handleClose}
        message={open.message}
      ></Snackbar>
      <Card>
        <Box
          sx={{
            margin: "3rem",
          }}
        >
          {/* <div style={{ marginTop: "1rem" }}> */}
          <Container>
            <Row>
              <Col xs={12}>
                <h2>Personal Details</h2>
              </Col>
            </Row>
            <hr style={{ marginBottom: "2rem" }}></hr>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  label="First Name"
                  name="firstName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.firstName}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  label="Last Name"
                  name="lastName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.lastName}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.mobile && formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                  label="Mobile"
                  name="mobile"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.mobile}
                  variant="outlined"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "24%" }}
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                  variant="outlined"
                />
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h2>Company Details</h2>
              </Col>
            </Row>
            <hr style={{ marginBottom: "2rem" }}></hr>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.companyName && formik.errors.companyName)}
                  helperText={formik.touched.companyName && formik.errors.companyName}
                  label="Company Name"
                  name="companyName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.companyName}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(
                    formik.touched.representativeName && formik.errors.representativeName
                  )}
                  helperText={formik.touched.representativeName && formik.errors.representativeName}
                  label="Representative Name"
                  name="representativeName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.representativeName}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.companyRegNo && formik.errors.companyRegNo)}
                  helperText={formik.touched.companyRegNo && formik.errors.companyRegNo}
                  label="Company Reg No"
                  name="companyRegNo"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.companyRegNo}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.location && formik.errors.location)}
                  helperText={formik.touched.location && formik.errors.location}
                  label="Location"
                  name="location"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.location}
                  variant="outlined"
                />
              </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.numOfEmployess && formik.errors.numOfEmployess)}
                  helperText={formik.touched.numOfEmployess && formik.errors.numOfEmployess}
                  label="No Of Employess"
                  name="numOfEmployess"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.numOfEmployess}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.annualTurn && formik.errors.annualTurn)}
                  helperText={formik.touched.annualTurn && formik.errors.annualTurn}
                  label="annualTurn"
                  name="annualTurn"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.annualTurn}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.membershipCat && formik.errors.membershipCat)}
                  helperText={formik.touched.membershipCat && formik.errors.membershipCat}
                  label="Membership Category"
                  name="membershipCat"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.membershipCat}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}></Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h2>Access Details</h2>
              </Col>
            </Row>
            <hr style={{ marginBottom: "2rem" }}></hr>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <FormControl style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">Event Access</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={event}
                    label="Event Access"
                    onChange={(e) => handleEventChange(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"read"}>Read</MenuItem>
                    <MenuItem value={"create"}>Create</MenuItem>
                    <MenuItem value={"update"}>Update</MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <FormControl style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">Polls Access</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={polls}
                    label="Event Access"
                    onChange={(e) => handlePollsChange(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"read"}>Read</MenuItem>
                    <MenuItem value={"create"}>Create</MenuItem>
                    <MenuItem value={"update"}>Update</MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <FormControl style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">News Access</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={news}
                    label="Event Access"
                    onChange={(e) => handleNewsChange(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"read"}>Read</MenuItem>
                    <MenuItem value={"create"}>Create</MenuItem>
                    <MenuItem value={"update"}>Update</MenuItem>
                  </Select>
                </FormControl>
              </Col>
            </Row>
            {formik.errors.submit && (
              <Typography color="error" sx={{ mt: 2 }} variant="p">
                {formik.errors.submit}
              </Typography>
            )}
            <Row>
              <Col style={{ textAlign: "end" }}>
                <Button
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "10%" }}
                  size="large"
                  onClick={() => formik.handleSubmit()}
                  variant="contained"
                  disabled={!formik.isValid}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>

          {/* </div> */}
        </Box>
      </Card>
    </>
  );
};
