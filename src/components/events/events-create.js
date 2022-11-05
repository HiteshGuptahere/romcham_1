import { FormikConsumer, useFormik } from "formik";
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
import Form from "react-bootstrap/Form";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const EventsCreate = ({ product, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [event, setEvent] = useState("event_1");
  const [partner, setPartner] = useState("partner_1");
  const [clear, setClear] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState({
    state: false,
    mesage: "",
  });
  const [dialogObj, setDialogObj] = useState({});
  const [image, setImage] = useState("");

  const { user } = useAuthContext();
  const handleEventChange = (e) => {
    setEvent(e);
  };
  const handlePartnerChange = (e) => {
    setPartner(e);
  };
  const formik = useFormik({
    initialValues: {
      userId: 0,
      name: "",
      location: "",
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      description: "",
      organizerEmail: "",
      mobileNo: 0,
      addMembers: ["Member_1"],
      image: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      location: Yup.string().required("Location is required"),
      description: Yup.string().required("Description Time is required"),
      mobileNo: Yup.string().required("Mobile No Time is required"),
      organizerEmail: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const payload = {
          userId: values.userId,
          name: values.name,
          location: values.location,
          startTime: values.startTime,
          endTime: values.endTime,
          description: values.description,
          organizerEmail: values.organizerEmail,
          mobileNo: values.mobileNo,
          addMembers: values.addMembers,
          image: values.image ? values.image : image,
        };
        return await axios
          .post(process.env.NEXT_PUBLIC_BASE_URL + "create-event", payload, {
            headers: {
              authorization: user.accessToken,
            },
          })
          .then((res) => {
            handleClick("Success");
            setTimeout(() => {
              Router.push("/pastEvents").catch(console.error);
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

  const onFileChange = async (event) => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("image", event.target.files[0], event.target.files[0].name);

    // Details of the uploaded file
    // Request made to the backend api
    // Send formData object
    return await axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "create-event-pic", formData, {
        headers: {
          authorization: user.accessToken,
        },
      })
      .then((res) => {
        setImage(res.data.url);
        formik.setFieldValue("image", res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
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
                <h2>Create Event</h2>
              </Col>
            </Row>
            <hr style={{ marginBottom: "2rem" }}></hr>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  label="Name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.name}
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
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.description && formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                  label="description"
                  name="description"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.description}
                  variant="outlined"
                />
              </Col>

              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.organizerEmail && formik.errors.organizerEmail)}
                  helperText={formik.touched.organizerEmail && formik.errors.organizerEmail}
                  label="Organizer Email"
                  name="organizerEmail"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.organizerEmail}
                  variant="outlined"
                />
              </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.mobileNo && formik.errors.mobileNo)}
                  helperText={formik.touched.mobileNo && formik.errors.mobileNo}
                  label="Mobile No"
                  name="mobileNo"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.mobileNo}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <FormControl style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">Event Access</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={formik.values.addMembers}
                    label="Event Access"
                    onChange={(e) => formik.setFieldValue("addMembers", e.target.value)}
                  >
                    <MenuItem value={formik.values.addMembers}>
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"Member_1"}>Member 1</MenuItem>
                    <MenuItem value={"Member_2"}>Member 2</MenuItem>
                    <MenuItem value={"Member_3"}>Member 3</MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <Form.Group controlId="formFile" className="mb-3" style={{ width: "100%" }}>
                  <Form.Control
                    type="file"
                    style={{ width: "100%" }}
                    onChange={(e) => onFileChange(e)}
                  />
                </Form.Group>
              </Col>
              <Col style={{ marginRight: "1rem", width: "100%" }}></Col>
              <Col style={{ marginRight: "1rem", width: "100%" }}>
                {/* <Button
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "10%" }}
                  size="large"
                  onClick={() => setClear(true)}
                  variant="contained"
                >
                  Clear
                </Button> */}
              </Col>
            </Row>
            {formik.errors.submit && (
              <Typography color="error" sx={{ mt: 2 }} variant="p">
                {formik.errors.submit}
              </Typography>
            )}
            <Row>
              <Col style={{ justifyContent: "space-between", display: "flex" }}>
                <Button
                  style={{ marginBottom: "1rem" }}
                  size="large"
                  onClick={() => formik.handleReset()}
                  variant="contained"
                >
                  Reset
                </Button>
                <Button
                  style={{ marginBottom: "1rem" }}
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
