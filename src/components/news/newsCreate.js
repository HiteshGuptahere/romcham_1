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
import Form from "react-bootstrap/Form";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const NewsCreate = ({ product, ...rest }) => {
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
      news_name: "",
      manager_name: "",
      email: "",
      description: "",
      partners: [""],
      events: [""],
      title: "",
      postedBy: "Admin",
      date: new Date().toISOString(),
      news_url: "",
      image:
        "http://134.209.222.109/uploads/noticefile/286avatar_1e6996135-d22e-4a0b-bd96-16dffbe07885.png",
    },
    validationSchema: Yup.object({
      news_name: Yup.string().required("Company Name is required"),
      manager_name: Yup.string().required("Manager Name is required"),
      description: Yup.string().required("Decription Name is required"),
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const payload = {
          news_name: values.news_name,
          title: values.news_name,
          manager_name: values.manager_name,
          email: values.email,
          description: values.description,
          partners: partner,
          events: event,
          postedBy: "Admin",
          news_url: values.newsUrl,
          date: new Date().toISOString(),
          image: image
            ? image
            : "http://134.209.222.109/uploads/noticefile/286avatar_1e6996135-d22e-4a0b-bd96-16dffbe07885.png",
        };
        return await axios
          .post(process.env.NEXT_PUBLIC_BASE_URL + "post-news", payload, {
            headers: {
              authorization: user.accessToken,
            },
          })
          .then((res) => {
            handleClick("Success");
            setTimeout(() => {
              Router.push("/news").catch(console.error);
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
      .post(process.env.NEXT_PUBLIC_BASE_URL + "create-news-pic", formData, {
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
                <h2>Create News</h2>
              </Col>
            </Row>
            <hr style={{ marginBottom: "2rem" }}></hr>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.news_name && formik.errors.news_name)}
                  helperText={formik.touched.news_name && formik.errors.news_name}
                  label="News Title"
                  name="news_name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.news_name}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.postedBy && formik.errors.postedBy)}
                  helperText={formik.touched.postedBy && formik.errors.postedBy}
                  label="Posted By"
                  name="postedBy"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.postedBy}
                  variant="outlined"
                />
              </Col>
              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.news_url && formik.errors.news_url)}
                  helperText={formik.touched.news_url && formik.errors.news_url}
                  label="Url"
                  name="news_url"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.news_url}
                  variant="outlined"
                />
              </Col>

              <Col style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
                <TextField
                  style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}
                  error={Boolean(formik.touched.description && formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                  label="Description"
                  name="description"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.description}
                  variant="outlined"
                />
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
