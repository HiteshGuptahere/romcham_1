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
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import Key from "@mui/icons-material/Key";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const AccessEventCard = ({ product, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [userArray, setuserArray] = useState([]);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog1, setOpenDialog1] = useState(false);
  const [viewDialogObj, setViewDialogObj] = useState({});
  const [event, setEvent] = useState("");
  const [dEvent, setDevent] = useState("");
  const [dialogObj, setDialogObj] = useState({});
  const [revokeEvAccess, setRevokeEvAccess] = useState(false);

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
        setuserArray(res.data.user);
        //  dispatch(RoChamActions.addToAdmin(res.data.roomList))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const handleSelectAll = (event) => {
  //   let newSelectedCustomerIds;

  //   if (event.target.checked) {
  //     newSelectedCustomerIds = userArray.map((admin) => admin._id);
  //   } else {
  //     newSelectedCustomerIds = [];
  //   }

  //   setSelectedCustomerIds(newSelectedCustomerIds);
  // };

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
    setEvent(el.eventAccess);
  };
  const handleUpdateRoom = async () => {
    let update = { access: [event] };
    if (revokeEvAccess) {
      await axios
        .put(
          process.env.NEXT_PUBLIC_BASE_URL + "revoke-event-access?email=" + dialogObj.email,
          update,
          {
            headers: {
              authorization: user.accessToken,
            },
          }
        )
        .then((res) => {
          setRevokeEvAccess(false);
          getRoChamCall(user.accessToken);
          dialogClose();
          setEvent("");
          setDevent("");
          // setAdminArray(res.data.userList);
          // dispatch(AdminActions.addToAdmin(res.data.userList));
        })
        .catch((err) => {
          console.log(err.response);
          setRevokeEvAccess(false);
          getRoChamCall(user.accessToken);
          dialogClose();
          setDevent("");
          setEvent("");
        });
    } else {
      await axios
        .put(
          process.env.NEXT_PUBLIC_BASE_URL + "give-event-access?email=" + dialogObj.email,
          update,
          {
            headers: {
              authorization: user.accessToken,
            },
          }
        )
        .then((res) => {
          getRoChamCall(user.accessToken);
          dialogClose();
          setEvent("");
          setDevent("");
          // setAdminArray(res.data.userList);
          // dispatch(AdminActions.addToAdmin(res.data.userList));
        })
        .catch((err) => {
          console.log(err);
          setEvent("");
          setDevent("");
          dialogClose();
        });
    }
  };
  const handleEventChange = (e) => {
    setDevent(e);
    setEvent(e);
  };
  const handleView = (el) => {
    setOpenDialog1(true);
    setViewDialogObj(el);
  };
  const revokeAccess = (el) => {
    setRevokeEvAccess(true);
    dialogClickOpen();
    setDialogObj(el);
    setEvent(el.eventAccess);
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
        <DialogTitle id="alert-dialog-title">{"Event Access Details"}</DialogTitle>
        <hr />
        <DialogContent style={{ minWidth: "30rem" }}>
          <table className="table" style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}>
            <tbody>
              <tr>
                <td>
                  <h3>Events Information</h3>
                </td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Name : {viewDialogObj.firstName ? viewDialogObj.firstName : "NA"}
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
                  Event Access :{" "}
                  {viewDialogObj.eventAccess ? viewDialogObj.eventAccess + "," : "NA"}
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
          <div style={{ padding: "1rem" }}>
            <FormControl style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
              <InputLabel id="demo-simple-select-helper-label">Event Access</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={dEvent}
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
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            onClick={(el) => handleUpdateRoom()}
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
                  <TableCell>Created At</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Access</TableCell>
                  <TableCell>Give Access</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userArray.length > 0
                  ? userArray.slice(0, limit).map((el) => (
                      <TableRow
                        hover
                        key={el._id}
                        selected={selectedCustomerIds.indexOf(el._id) !== -1}
                      >
                        <TableCell>
                          {el.createdAt ? new Date(el.createdAt).toLocaleDateString() : "N/A"}
                        </TableCell>
                        <TableCell>
                          {el.firstName + " " + el.lastName
                            ? el.firstName + " " + el.lastName
                            : "N/A"}
                        </TableCell>
                        <TableCell>{el.mobile ? el.mobile : "N/A"}</TableCell>
                        <TableCell>{el.email ? el.email : "N/A"}</TableCell>
                        <TableCell>{el.eventAccess ? ` ${el.eventAccess}` : "N/A"}</TableCell>
                        <TableCell>
                          <VisibilityRoundedIcon
                            color="info"
                            onClick={() => handleView(el)}
                            style={{ marginRight: "1rem", cursor: "pointer" }}
                          />
                          <Key
                            color="success"
                            onClick={() => handleUpdate(el)}
                            style={{ marginRight: "1rem", cursor: "pointer" }}
                          />
                          {""}
                          <DeleteForeverIcon
                            color="success"
                            onClick={() => revokeAccess(el)}
                            style={{ cursor: "pointer", color: "red" }}
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
