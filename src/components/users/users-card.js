import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { useAuthContext } from "../../contexts/auth-context";
import { useState, useEffect } from "react";
import {
  Button,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TextField,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";

export const UserCard = ({ product, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [userArray, setUserArray] = useState([]);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog1, setOpenDialog1] = useState(false);
  const [viewDialogObj, setViewDialogObj] = useState({});
  const [image, setImage] = useState(null);
  const [update, setUpdate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "",
    mobile: "",
  });
  const [dialogObj, setDialogObj] = useState({});

  const { user } = useAuthContext();
  useEffect(() => {
    getRoChamCall(user.accessToken);
  }, []);
  const getRoChamCall = async (token) => {
    await axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + "get-user-list", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setUserArray(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = userArray.map((admin) => admin._id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, _id) => {
    const selectedIndex = selectedCustomerIds.indexOf(_id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, _id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const dialogClickOpen = () => {
    setOpenDialog(true);
  };
  const dialogClickOpen1 = () => {
    setOpenDialog1(true);
  };
  const dialogClose = () => {
    setOpenDialog(false);
  };
  const dialogClose1 = () => {
    setOpenDialog1(false);
  };
  const handleUpdate = (el) => {
    dialogClickOpen();
    setDialogObj(el);
  };
  const handleUpdateUser = async () => {
    let new_Data = {
      firstName: update.firstName ? update.firstName : dialogObj.firstName,
      lastName: update.lastName ? update.lastName : dialogObj.lastName,
      email: update.email ? update.email : dialogObj.email,
      mobile: update.mobile ? update.mobile : dialogObj.mobile,
      isAdmin: update.isAdmin ? update.isAdmin : dialogObj.isAdmin,
    };
    await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL + "update-user/" + dialogObj.id, new_Data, {
        headers: {
          authorization: user.accessToken,
        },
      })
      .then((res) => {
        // setUserArray([]);
        getRoChamCall(user.accessToken);
        setDialogObj({});
        dialogClose();
        setUpdate({});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFileChange = async (event) => {
    setSelectedFile(event.target.files[0]);
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("image", event.target.files[0], event.target.files[0].name);

    // Details of the uploaded file
    // Request made to the backend api
    // Send formData object
    return await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL + "update-user-pic/" + dialogObj.id, formData, {
        headers: {
          authorization: user.accessToken,
        },
      })
      .then((res) => {
        setUpdate({ ...update, image: res.data.data.url });
        return setImage(res.data.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const handleUpdateRoom = async (data) => {
  //   console.log(data);
  //   await axios
  //     .put(process.env.NEXT_PUBLIC_BASE_URL + "update-user/" + dialogObj.id, data, {
  //       headers: {
  //         authorization: user.accessToken,
  //       },
  //     })
  //     .then((res) => {
  //       getRoChamCall(user.accessToken);
  //       setUpdate({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         image: "",
  //         mobile: "",
  //       });
  //       setDialogObj({});
  //       dialogClose();
  //       // setAdminArray(res.data.userList);
  //       // dispatch(AdminActions.addToAdmin(res.data.userList));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const handleView = (el) => {
    setOpenDialog1(true);
    setViewDialogObj(el);
  };

  return (
    <>
      <Dialog
        open={openDialog1}
        maxWidth="lg"
        onClose={dialogClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"User Details"}</DialogTitle>
        <hr />
        <DialogContent style={{ minWidth: "30rem" }}>
          <table className="table" style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}>
            <tbody>
              <tr>
                <td>
                  <h3>Personal Information</h3>
                </td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Name :{" "}
                  {viewDialogObj.firstName
                    ? viewDialogObj.firstName + " " + viewDialogObj.lastName
                    : "NA"}
                </td>
                <td>Email : {viewDialogObj.email ? viewDialogObj.email : "NA"}</td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Mobile : {viewDialogObj.mobile ? viewDialogObj.mobile : "NA"}
                </td>
                <td></td>
              </tr>
              <tr style={{ marginBottom: "6rem !important" }}>
                <td>
                  <h3>Company Information</h3>
                </td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Company Name : {viewDialogObj.companyName ? viewDialogObj.companyName : "NA"}
                </td>
                <td>
                  Company Reg No : {viewDialogObj.companyRegNo ? viewDialogObj.companyRegNo : "NA"}
                </td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Representative Name :{" "}
                  {viewDialogObj.representativeName ? viewDialogObj.representativeName : "NA"}
                </td>
                <td>
                  Num Of Employess :{" "}
                  {viewDialogObj.numOfEmployess ? viewDialogObj.numOfEmployess : "NA"}
                </td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Annual Turn : {viewDialogObj.annualTurn ? viewDialogObj.annualTurn : "NA"}
                </td>
                <td>
                  Membership Cat :{" "}
                  {viewDialogObj.membershipCat ? viewDialogObj.membershipCat : "NA"}
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Access</h3>
                </td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Event Access : {viewDialogObj.eventAccess ? viewDialogObj.eventAccess : "NA"}
                </td>
                <td>
                  Polls Access : {viewDialogObj.pollsAccess ? viewDialogObj.pollsAccess : "NA"}
                </td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  News Access : {viewDialogObj.newsAccess ? viewDialogObj.newsAccess : "NA"}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            onClick={() => dialogClose1()}
            variant="contained"
            color="info"
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDialog}
        maxWidth="lg"
        onClose={dialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Update User"}</DialogTitle>
        <DialogContent style={{ minWidth: "30rem" }}>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="First Name"
              name="name"
              type="text"
              defaultValue={dialogObj.firstName}
              // value={update.firstname}
              onChange={(e) => {
                setUpdate({ ...update, firstName: e.target.value });
              }}
              variant="outlined"
            />
            {/* {oldPass.status ? (
              oldPass.status === 200 ? (
                <p style={{ color: "#5cb85c", textAlign: "center" }}>{oldPass.message}</p>
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>{oldPass.message}</p>
              )
            ) : null} */}
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Last Name"
              name="name"
              type="text"
              defaultValue={dialogObj.lastName}
              // value={update.firstname}
              onChange={(e) => {
                setUpdate({ ...update, lastName: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Email"
              name="email"
              type="email"
              defaultValue={dialogObj.email}
              // value={update.email}
              onChange={(e) => {
                setUpdate({ ...update, email: e.target.value });
              }}
              variant="outlined"
            />
            {/* {newPass.status ? (
              newPass.status === 200 ? (
                <p style={{ color: "#5cb85c", textAlign: "center" }}>{newPass.message}</p>
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>{newPass.message}</p>
              )
            ) : null} */}
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Mobile"
              name="mobile"
              type="text"
              defaultValue={dialogObj.mobile}
              // value={update.mobile}
              onChange={(e) => {
                setUpdate({ ...update, mobile: e.target.value });
              }}
              variant="outlined"
            />
            {/* {newPass.status ? (
              newPass.status === 200 ? (
                <p style={{ color: "#5cb85c", textAlign: "center" }}>{newPass.message}</p>
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>{newPass.message}</p>
              )
            ) : null} */}
          </div>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Password"
              name="password"
              type="password"
              defaultValue={""}
              autoComplete={"false"}
              // value={update.password}
              onChange={(e) => {
                setUpdate({ ...update, password: e.target.value });
              }}
              variant="outlined"
            />
            {/* {newPass.status ? (
              newPass.status === 200 ? (
                <p style={{ color: "#5cb85c", textAlign: "center" }}>{newPass.message}</p>
              ) : (
                <p style={{ color: "red", textAlign: "center" }}>{newPass.message}</p>
              )
            ) : null} */}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            onClick={(el) => handleUpdateUser(dialogObj)}
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
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Logo</TableCell>
                  <TableCell>Created At</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userArray.length > 0
                  ? userArray.slice(0, limit).map((el) => (
                      <TableRow
                        hover
                        key={el.id}
                        selected={selectedCustomerIds.indexOf(el.id) !== -1}
                      >
                        <TableCell>
                          {" "}
                          <img
                            alt={""}
                            key={el.image}
                            src={el.image}
                            style={{
                              height: 48,
                              width: 48,
                            }}
                          />
                        </TableCell>
                        <TableCell key={el.createdAt}>
                          {el.createdAt ? new Date(el.createdAt).toLocaleDateString() : "N/A"}
                        </TableCell>
                        <TableCell key={el.firstName}>
                          {el.firstName ? el.firstName + " " + el.lastName : "N/A"}
                        </TableCell>
                        <TableCell key={el.mobile}>{el.mobile ? el.mobile : "N/A"}</TableCell>
                        <TableCell key={el.email}>{el.email ? el.email : "N/A"}</TableCell>
                        <TableCell>
                          <VisibilityRoundedIcon
                            color="info"
                            onClick={() => handleView(el)}
                            style={{ marginRight: "1rem", cursor: "pointer" }}
                          />
                          <SaveAsRoundedIcon
                            color="success"
                            onClick={() => handleUpdate(el)}
                            style={{ cursor: "pointer" }}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={userArray.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </>
  );
};
