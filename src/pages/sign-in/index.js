import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, FormHelperText, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import { Logo } from "../../components/logo";
import { useAuthContext } from "../../contexts/auth-context";
import Router from "next/router";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useSelector, useDispatch } from "react-redux";
import { AccountHolderActions } from "../../store/accountHolderSlice";
import { TokenAction } from "../../store/token";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";

const Page = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [loder, setLoder] = useState(false);
  const [mobileMsg, setMobileMsg] = useState({
    status: 0,
    message: "",
  });

  const [open, setOpen] = useState({
    state: false,
    mesage: "",
    color: "info",
  });
  let url = process.env.NEXT_PUBLIC_BASE_URL + "login";
  let urlMobile = process.env.NEXT_PUBLIC_BASE_URL + "forgotPassword/";
  const dispatch = useDispatch();
  const authContext = useAuthContext();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),

      password: Yup.string().min(4).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const payload = {
          email: values.email,
          password: values.password,
        };

        await axios
          .post(url.toString(), payload)
          .then((res) => {
            if (res.data.code === 200) {
              handleClick(res.data.message, "success");
              helpers.setSubmitting(true);
              authContext.signIn(res.data);
              dispatch(AccountHolderActions.addProfile(res.data));
              dispatch(TokenAction.addToken(res.data.accessToken));
              Router.push("/").catch(console.error);
            } else {
              handleClick(res.data.msg, "error");
            }
          })
          .catch((error) => {
            helpers.setFieldError("submit", "Please try with valid email & password!");
          });
      } catch (err) {
        console.error(err.message);
        helpers.setFieldError("submit", err.message || "Something went wrong");
        helpers.setSubmitting(false);
      }
    },
  });
  const dialogClickOpen = () => {
    setOpenDialog(true);
  };

  const handleForgotPassword = async () => {
    try {
      setLoder(true);
      if (email.length <= 0) {
        setMobileMsg({
          status: 400,
          message: "Please Enter Email Id!",
        });
        setLoder(false);
      } else {
        await axios
          .get(urlMobile.toString() + email)
          .then((res) => {
            handleClick(res.data.message, "success");
            setLoder(false);
            setEmail("");
            setTimeout(() => {
              dialogClose();
            }, 800);
          })
          .catch((error) => {
            setMobileMsg({
              status: 400,
              message: "Please Provide a Valid Number, Exist In Database!",
            });
            setLoder(false);
          });
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const dialogClose = () => {
    setOpenDialog(false);
  };
  const handleClick = (message, color) => {
    setOpen({
      state: true,
      color: color,
      message: message,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Sign in | RoCham</title>
      </Head>
      <Box
        component="main"
        sx={{
          display: "flex",
          flex: "1 1 auto",
        }}
      >
        <Grid container sx={{ flex: "1 1 auto" }}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              backgroundColor: "neutral.50",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                p: 3,
              }}
            >
              <NextLink href="/" passHref>
                <a>
                  <Logo
                    sx={{
                      height: 42,
                      width: 42,
                    }}
                  />
                </a>
              </NextLink>
            </Box>
            <Box
              sx={{
                flex: "1 1 auto",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: 500,
                  px: 3,
                  py: "100px",
                  width: "100%",
                }}
              >
                <div>
                  <Dialog
                    open={openDialog}
                    maxWidth="lg"
                    onClose={dialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"Forgot Password"}</DialogTitle>
                    <DialogContent style={{ minWidth: "30rem" }}>
                      <div>
                        <TextField
                          style={{ marginBottom: "1rem", marginTop: "1rem" }}
                          fullWidth
                          label="Email"
                          name="email"
                          type="text"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setMobileMsg({ ...mobileMsg, message: null });
                          }}
                          variant="outlined"
                        />
                        <FormHelperText sx={{ mt: 1, fontSize: "0.8rem" }}>
                          Enter a valid Email Address.
                        </FormHelperText>
                        {mobileMsg.status ? (
                          mobileMsg.status === 400 ? (
                            <p style={{ color: "red", fontSize: "0.9rem" }}>{mobileMsg.message}</p>
                          ) : (
                            <p style={{ color: "#5cb85c", fontSize: "0.9rem" }}>
                              {mobileMsg.message}
                            </p>
                          )
                        ) : null}
                        {loder === false ? (
                          <Button
                            fullWidth
                            size="large"
                            sx={{ mt: 3 }}
                            onClick={() => handleForgotPassword()}
                            variant="contained"
                          >
                            Submit
                          </Button>
                        ) : (
                          <div style={{ textAlign: "center", marginTop: "1rem" }}>
                            <CircularProgress />
                          </div>
                        )}
                      </div>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={dialogClose} autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Snackbar
                    anchorOrigin={{ horizontal: "center", vertical: "top" }}
                    TransitionComponent={TransitionDown}
                    open={open.state}
                    autoHideDuration={2000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity={open.color} sx={{ width: "100%" }}>
                      {open.message}
                    </Alert>
                  </Snackbar>
                  <Typography sx={{ mb: 1 }} variant="h4">
                    Welcome
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }} variant="p">
                    Sign in on the internal platform
                  </Typography>
                  {/* <Tabs onChange={handleTabChange} sx={{ mb: 3 }} value={tab}>
                      <Tab label="Email" value="email" />
                      <Tab label="Phone Number" value="phoneNumber" />
                    </Tabs> */}
                  <div style={{ marginTop: "1rem" }}>
                    <TextField
                      style={{ marginBottom: "1rem" }}
                      error={Boolean(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      label="Email Address"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      value={formik.values.email}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(formik.touched.password && formik.errors.password)}
                      fullWidth
                      helperText={formik.touched.password && formik.errors.password}
                      label="Password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      value={formik.values.password}
                      variant="outlined"
                    />
                    <FormHelperText sx={{ mt: 1 }}>Enter a valid email & password.</FormHelperText>
                    {formik.errors.submit && (
                      <Typography color="error" sx={{ mt: 2 }} variant="p">
                        {formik.errors.submit}
                      </Typography>
                    )}
                    <Button
                      fullWidth
                      size="large"
                      sx={{ mt: 3 }}
                      onClick={() => formik.handleSubmit()}
                      variant="contained"
                    >
                      Sign In
                    </Button>
                  </div>
                  <Typography
                    style={{ cursor: "pointer" }}
                    color="primary"
                    sx={{ mt: 2 }}
                    variant="body2"
                    align="center"
                  >
                    <a onClick={dialogClickOpen} style={{ textDecoration: "none" }}>
                      Forgot Password
                    </a>
                  </Typography>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              alignItems: "center",
              background: "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              "& img": {
                maxWidth: "100%",
              },
            }}
          >
            <Box sx={{ p: 3 }}>
              <img alt="" src="/static/images/sign-in-illustration.svg" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}
