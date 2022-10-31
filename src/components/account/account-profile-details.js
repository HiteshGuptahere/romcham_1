import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export const AccountProfileDetails = (props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [updateAdmin, setUpdateAdmin] = useState(false);

  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [oldPass, setOldPass] = useState({
    status: 0,
    message: "",
  });
  const [newPass, setNewPass] = useState({
    status: 0,
    message: "",
  });
  const [confPass, setConfPass] = useState({
    status: 0,
    message: "",
  });
  let urlMobile = process.env.NEXT_PUBLIC_BASE_URL + "forgot-password?email=";
  let token = useSelector((state) => (state.Profile.itemList ? state.Profile.itemList : []));
  let account_holder = useSelector((state) => (state.Profile.item ? state.Profile.item : []));
  const [values, setValues] = useState({
    name: account_holder.name,
    email: account_holder.email,
    mobile: account_holder.mobile,
    state: "Alabama",
    country: "USA",
  });
  const [adminPfValue, setAdminPfValue] = useState({
    name: account_holder.name,
    email: account_holder.email,
    mobile: account_holder.mobile,
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const dialogClickOpen = () => {
    setOpenDialog(true);
  };

  const dialogClose = () => {
    setOldPass({ status: 0, message: "" });
    setNewPass({ status: 0, message: "" });
    setConfPass({ status: 0, message: "" });
    setPassword({
      newPassword: "",
      confirmPassword: "",
    });
    setOpenDialog(false);
  };

  const handleForgotPassword = async () => {
    try {
      if (password.length === 0 && password.length < 4) {
        setMobileMsg({
          status: 400,
          message: "Please Enter Valid Password",
        });
      } else {
        await axios
          .put(
            urlMobile.toString() + account_holder.email,
            { newPassword: password.newPassword },
            {
              headers: {
                authorization: token.accessToken,
              },
            }
          )
          .then((res) => {
            if (res.data.status === 200) {
              setConfPass({
                status: 200,
                message: res.data.message,
              });
              setTimeout(() => {
                setOldPass({ status: 0, message: "" });
                setNewPass({ status: 0, message: "" });
                setConfPass({ status: 0, message: "" });
                setPassword({
                  newPassword: "",
                  confirmPassword: "",
                });
              }, 3000);
              setOpenDialog(false);
            } else {
              setOldPass({
                status: res.data.status,
                message: res.data.msg,
              });
            }
            // dialogClose;
          })
          .catch((error) => {
            console.log(error);
            setOldPass({
              status: 400,
              message: "Please Provide a Valid Number, Exist In Database!",
            });
            console.log("submit", "Please Provide a Number");
          });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleAdminUpdate = async (value) => {
    await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL + "update-admin/" + value.email, value, {
        headers: {
          authorization: token.accessToken,
        },
      })
      .then((res) => {
        setUpdateAdmin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Dialog
        open={openDialog}
        maxWidth="lg"
        onClose={dialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Reset Password"}</DialogTitle>
        <DialogContent style={{ minWidth: "30rem" }}>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="New password"
              name="newPassword"
              type="password"
              value={password.newPassword}
              onChange={(e) => {
                setPassword({ ...password, newPassword: e.target.value });
                setNewPass({ ...newPass, message: null });
              }}
              variant="outlined"
            />
            {newPass.status ? (
              newPass.status === 200 ? (
                <p style={{ color: "#5cb85c", textAlign: "center" }}>{newPass.message}</p>
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>{newPass.message}</p>
              )
            ) : null}
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Confirm password"
              name="confirmPassword"
              type="password"
              value={password.confirmPassword}
              onChange={(e) => {
                setPassword({ ...password, confirmPassword: e.target.value });
                setConfPass({ ...confPass, message: null });
              }}
              variant="outlined"
            />
            {confPass.status ? (
              confPass.status === 200 ? (
                <p style={{ color: "#5cb85c", textAlign: "center" }}>{confPass.message}</p>
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>{confPass.message}</p>
              )
            ) : null}
            {password.confirmPassword.length > 0 ? (
              password.newPassword !== password.confirmPassword ? (
                <p style={{ color: "red", textAlign: "center" }}>Password Not Matched</p>
              ) : confPass.status === 200 ? null : (
                <p style={{ color: "#5cb85c", textAlign: "center" }}>Password Matched</p>
              )
            ) : null}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            onClick={() => handleForgotPassword()}
            variant="contained"
          >
            Submit
          </Button>
          <Button
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            onClick={() => dialogClose()}
            variant="contained"
            color="info"
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
      <form autoComplete="off" noValidate {...props}>
        <Card>
          <CardHeader subheader="The information can be edited" title="Profile" />
          <Divider />
          <CardContent style={{ minHeight: "14.8rem" }}>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <Typography color="textPrimary" gutterBottom variant="p">
                  Name: {adminPfValue.name}
                  {updateAdmin === true ? (
                    <TextField
                      style={{ marginBottom: "1rem", marginTop: "1rem" }}
                      fullWidth
                      label="Name"
                      name="fullName"
                      type="text"
                      value={adminPfValue.name}
                      onChange={(e) => {
                        setAdminPfValue({ ...adminPfValue, name: e.target.value });
                      }}
                      variant="outlined"
                    />
                  ) : null}
                </Typography>
              </Grid>

              <Grid item md={6} xs={12}>
                <Typography color="textPrimary" gutterBottom variant="p">
                  Email: {adminPfValue.email}
                  {updateAdmin === true ? (
                    <TextField
                      style={{ marginBottom: "1rem", marginTop: "1rem" }}
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={adminPfValue.email}
                      onChange={(e) => {
                        setAdminPfValue({ ...adminPfValue, email: e.target.value });
                      }}
                      variant="outlined"
                    />
                  ) : null}
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography color="textPrimary" gutterBottom variant="p">
                  Mobile: {adminPfValue.mobile}
                  {updateAdmin === true ? (
                    <TextField
                      style={{ marginBottom: "1rem", marginTop: "1rem" }}
                      fullWidth
                      label="Mobile"
                      name="mobile"
                      type="text"
                      value={adminPfValue.mobile}
                      onChange={(e) => {
                        setAdminPfValue({ ...adminPfValue, mobile: e.target.value });
                      }}
                      variant="outlined"
                    />
                  ) : null}
                </Typography>
              </Grid>
              {/* {updateAdmin === true ? (
                <Grid item md={6} xs={12}>
                  <Typography color="textPrimary" gutterBottom variant="p">
                    Password:
                    <TextField
                      style={{ marginBottom: "1rem", marginTop: "1rem" }}
                      fullWidth
                      label="Password"
                      name="password"
                      type="password"
                      value={""}
                      onChange={(e) => {
                        setAdminPfValue({ ...adminPfValue, password: e.target.value });
                      }}
                      variant="outlined"
                    />
                  </Typography>
                </Grid>
              ) : null} */}
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Button onClick={dialogClickOpen} color="primary" variant="contained">
              Reset Password
            </Button>
            {updateAdmin === false ? (
              <Button
                onClick={() => {
                  setUpdateAdmin(true);
                }}
                color="primary"
                variant="contained"
              >
                Edit Profile
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleAdminUpdate(adminPfValue);
                }}
                color="primary"
                variant="contained"
              >
                Update Profile
              </Button>
            )}
          </Box>
        </Card>
      </form>
    </>
  );
};
