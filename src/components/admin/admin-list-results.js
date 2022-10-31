import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { useAuthContext } from "../../contexts/auth-context";
import {
  Avatar,
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
  Button,
  TextField,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AdminActions } from "../../store/adminSlice";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export const AdminListResults = ({ customers, ...rest }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [adminArray, setAdminArray] = useState([]);
  const [dialogObj, setDialogObj] = useState({});
  const dispatch = useDispatch();
  const [update, setUpdate] = useState({
    type: "",
    distance: "",
    time_date: new Date().toISOString(),
  });

  const { user } = useAuthContext();
  useEffect(() => {
    getAdminApiCall(user.accessToken);
  }, []);
  const getAdminApiCall = async (token) => {
    await axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + "get-user-list", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setAdminArray(res.data.user);
        dispatch(AdminActions.addToAdmin(res.data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const dialogClickOpen = () => {
    setOpenDialog(true);
  };
  const dialogClose = () => {
    setOpenDialog(false);
  };
  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = adminArray.map((admin) => admin._id);
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

  const handleRemove = async (el) => {
    await axios
      .put(
        process.env.NEXT_PUBLIC_BASE_URL + "removeAsAdmin/" + el._id,
        { userType: 2 },
        {
          headers: {
            authorization: user.accessToken,
          },
        }
      )
      .then((res) => {
        getAdminApiCall(user.accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdateAdmin = async (el) => {
    await axios
      .put(
        process.env.NEXT_PUBLIC_BASE_URL + "updateAsAdmin/" + el._id,
        { userType: 1 },
        {
          headers: {
            authorization: user.accessToken,
          },
        }
      )
      .then((res) => {
        getAdminApiCall(user.accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdateRoom = async () => {
    await axios
      .put(process.env.NEXT_PUBLIC_RoCham_URL + "roomUpdate/" + dialogObj._id, update, {
        headers: {
          authorization: user.accessToken,
        },
      })
      .then((res) => {
        getAdminApiCall(user.accessToken);
        setUpdate({ type: "", distance: "", time_date: new Date().toISOString() });
        setDialogObj({});
        // setAdminArray(res.data.userList);
        // dispatch(AdminActions.addToAdmin(res.data.userList));
      })
      .catch((err) => {
        console.log(err);
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
        <DialogTitle id="alert-dialog-title">{"Update Admin"}</DialogTitle>
        <DialogContent style={{ minWidth: "30rem" }}>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Type"
              name="type"
              type="text"
              value={update.type}
              onChange={(e) => {
                setUpdate({ ...update, type: e.target.value });
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
              label="Distance"
              name="distance"
              type="text"
              value={update.distance}
              onChange={(e) => {
                setUpdate({ ...update, distance: e.target.value });
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
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.length === adminArray.length}
                      color="primary"
                      indeterminate={
                        selectedCustomerIds.length > 0 &&
                        selectedCustomerIds.length < adminArray.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>User Type</TableCell>
                  {/* <TableCell>Action</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {adminArray.slice(0, limit).map((el) => (
                  <TableRow
                    hover
                    key={el._id}
                    selected={selectedCustomerIds.indexOf(el._id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomerIds.indexOf(el._id) !== -1}
                        onChange={(event) => handleSelectOne(event, el._id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>{el.firstname ? el.firstname : "NA"}</TableCell>
                    <TableCell>{el.email ? el.email : "NA"}</TableCell>
                    <TableCell>{el.mobile ? el.mobile : "NA"}</TableCell>
                    <TableCell>
                      {el.userType ? (el.userType === 1 ? "Admin" : "User") : "NA"}
                    </TableCell>
                    {/* <TableCell>
                      {el.userType === 1 ? (
                        <Button variant="text" onClick={() => handleRemove(el)}>
                          Remove As Admin
                        </Button>
                      ) : (
                        <Button variant="text" onClick={() => handleUpdateAdmin(el)}>
                          Make As Admin
                        </Button>
                      )}
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={adminArray.length}
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

AdminListResults.propTypes = {
  customers: PropTypes.array.isRequired,
};
