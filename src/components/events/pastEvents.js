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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Form from "react-bootstrap/Form";
import Router from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const PastEvents = ({ product, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [userArray, setuserArray] = useState([]);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog1, setOpenDialog1] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);
  const [viewDialogObj, setViewDialogObj] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState("");
  const [member, setMember] = useState("");
  const [update, setUpdate] = useState({
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
  });
  const [dialogObj, setDialogObj] = useState({});

  const { user } = useAuthContext();
  useEffect(() => {
    getRoChamCall(user.accessToken);
  }, []);
  const getRoChamCall = async (token) => {
    await axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + "get-pastevents-list", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setuserArray(res.data.pastEvents);
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
  const dialogClickOpen2 = () => {
    setOpenDialog2(true);
  };
  const dialogClose = () => {
    setOpenDialog(false);
  };
  const dialogClose1 = () => {
    setOpenDialog1(false);
  };
  const dialogClose2 = () => {
    setOpenDialog2(false);
  };
  const handleUpdate = (el) => {
    dialogClickOpen();
    setDialogObj(el);
    setUpdate({
      userId: el.userId ? el.userId : 0,
      name: el.name ? el.name : "",
      location: el.location ? el.location : "",
      startTime: el.startTime ? el.startTime : "",
      endTime: el.endTime ? el.endTime : "",
      description: el.description ? el.description : [""],
      mobileNo: el.mobileNo ? el.mobileNo : [""],
      organizerEmail: el.organizerEmail ? el.organizerEmail : [""],
      addMembers: el.addMembers ? el.addMembers : [""],
      image: el.image ? el.image : image,
    });
  };
  const handleUpdateRoom = async (data) => {
    data.image = image;
    await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL + "update-event/" + dialogObj.id, data, {
        headers: {
          authorization: user.accessToken,
        },
      })
      .then((res) => {
        getRoChamCall(user.accessToken);
        setUpdate({
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
        });
        setDialogObj({});
        dialogClose();
        // setAdminArray(res.data.userList);
        // dispatch(AdminActions.addToAdmin(res.data.userList));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleView = (el) => {
    setOpenDialog1(true);
    setViewDialogObj(el);
  };

  const handleAddMember = (el) => {
    setOpenDialog2(true);
    setDialogObj(el);
  };

  const handleAddMemberIntoEvent = async (el) => {
    let changeData = { addMembers: [el] };
    await axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "addMemberInEvent/" + dialogObj.id, changeData, {
        headers: {
          authorization: user.accessToken,
        },
      })
      .then((res) => {
        getRoChamCall(user.accessToken);
        setMember("");
        dialogClose2();
        setDialogObj({});
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
      .put(process.env.NEXT_PUBLIC_BASE_URL + "update-event-pic/" + dialogObj.id, formData, {
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
  return (
    <>
      <Dialog
        open={openDialog1}
        maxWidth="lg"
        onClose={dialogClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Event Details"}</DialogTitle>
        <hr />
        <DialogContent style={{ minWidth: "30rem" }}>
          <table className="table" style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}>
            <tbody>
              <tr>
                <td>
                  <h3>Past Evnts Information</h3>
                </td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Name : {viewDialogObj.name ? viewDialogObj.name : "NA"}
                </td>
                <td>Location : {viewDialogObj.location ? viewDialogObj.location : "NA"}</td>
              </tr>
              <tr>
                <td>Email : {viewDialogObj.email ? viewDialogObj.email : "NA"}</td>
                <td></td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Description : {viewDialogObj.description ? viewDialogObj.description : "NA"}
                </td>
                <td>Mobile No : {viewDialogObj.mobileNo ? viewDialogObj.mobileNo : "NA"}</td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Members : {viewDialogObj.addMembers ? viewDialogObj.addMembers + " " : "NA"}
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
              label="Name"
              name="name"
              type="text"
              defaultValue={dialogObj.name}
              // value={update.firstname}
              onChange={(e) => {
                setUpdate({ ...update, name: e.target.value });
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
              label="location"
              name="location"
              type="text"
              defaultValue={dialogObj.location}
              // value={update.location}
              onChange={(e) => {
                setUpdate({ ...update, location: e.target.value });
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
              label="organizerEmail"
              name="organizerEmail"
              type="email"
              defaultValue={dialogObj.organizerEmail}
              // value={update.organizerEmail}
              onChange={(e) => {
                setUpdate({ ...update, organizerEmail: e.target.value });
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
              label="Description"
              name="description"
              type="text"
              defaultValue={dialogObj.description}
              // value={update.description}
              onChange={(e) => {
                setUpdate({ ...update, description: e.target.value });
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
              label="Mobile No"
              name="mobileNo"
              type="text"
              defaultValue={dialogObj.mobileNo}
              // value={update.mobileNo}
              onChange={(e) => {
                setUpdate({ ...update, mobileNo: e.target.value });
              }}
              variant="outlined"
            />
          </div>
          {/* <div>
            <FormControl style={{ marginBottom: "1rem", marginRight: "1rem", width: "100%" }}>
              <InputLabel id="demo-simple-select-helper-label">Add Members</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={update.addMembers}
                label="Add Members"
                onChange={(e) => {
                  setUpdate({ ...update, addMembers: [e.target.value] });
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value={"Member_1"}>Member 1</MenuItem>
                <MenuItem value={"Member_2"}>Member 2</MenuItem>
                <MenuItem value={"Member_3"}>Member 3</MenuItem>
              </Select>
            </FormControl>
          </div> */}
          <div>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" onChange={(e) => onFileChange(e)} />
            </Form.Group>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            onClick={(el) => handleUpdateRoom(update)}
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
      <Dialog
        open={openDialog2}
        maxWidth="lg"
        onClose={dialogClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Member"}</DialogTitle>
        <DialogContent style={{ minWidth: "30rem" }}>
          <div>
            <TextField
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              fullWidth
              label="Member Name"
              name="name"
              type="text"
              defaultValue={member}
              // value={update.firstname}
              onChange={(e) => {
                setMember(e.target.value);
              }}
              variant="outlined"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            onClick={(el) => handleAddMemberIntoEvent(member)}
            variant="contained"
          >
            Add
          </Button>
          <Button
            fullWidth
            size="small"
            sx={{ mt: 2 }}
            onClick={() => dialogClose2()}
            variant="contained"
            color="info"
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
      <Row
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Col>
          <Button
            variant="contained"
            onClick={() => {
              Router.push("/upcomingEvents").catch(console.error);
            }}
          >
            Upcoming Events
          </Button>
        </Col>
        <Col>
          <Button
            variant="contained"
            onClick={() => {
              Router.push("/eventCreate").catch(console.error);
            }}
          >
            Create Events
          </Button>
        </Col>
      </Row>
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Logo</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Organizer Email</TableCell>
                  <TableCell>Mobile No</TableCell>
                  <TableCell>Action</TableCell>
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
                          {" "}
                          <img
                            alt={""}
                            src={el.image}
                            style={{
                              height: 48,
                              width: 48,
                            }}
                          />
                        </TableCell>
                        <TableCell>{el.name ? el.name : "N/A"}</TableCell>
                        <TableCell>{el.location ? el.location : "N/A"}</TableCell>
                        <TableCell>{el.description ? el.description : "N/A"}</TableCell>
                        <TableCell>{el.organizerEmail ? el.organizerEmail : "N/A"}</TableCell>
                        <TableCell>{el.mobileNo ? el.mobileNo : "N/A"}</TableCell>
                        <TableCell>
                          <VisibilityRoundedIcon
                            color="info"
                            onClick={() => handleView(el)}
                            style={{ marginRight: "1rem", cursor: "pointer" }}
                          />
                          <SaveAsRoundedIcon
                            color="success"
                            onClick={() => handleUpdate(el)}
                            style={{ marginRight: "1rem", cursor: "pointer" }}
                          />
                          <PersonAddAlt1Icon
                            color="primary"
                            onClick={() => handleAddMember(el)}
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
