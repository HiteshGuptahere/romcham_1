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
import Form from "react-bootstrap/Form";
import defaultImage from "../../../public/static/images/avatars/avatar_1.png";

export const News = ({ product, ...rest }) => {
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
  const [member, setMember] = useState("");
  const [img, setImage] = useState("");
  const [update, setUpdate] = useState({
    id: 0,
    title: "",
    postedBy: "",
    date: new Date().toISOString(),
    news_url: "",
    image: "",
  });
  const [dialogObj, setDialogObj] = useState({});

  const { user } = useAuthContext();
  useEffect(() => {
    getRoChamCall(user.accessToken);
  }, []);
  const getRoChamCall = async (token) => {
    await axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + "get-news-list", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setuserArray(res.data.news);
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
      id: el.id ? el.id : 0,
      title: el.title ? el.title : "",
      postedBy: el.postedBy ? el.postedBy : "",
      date: new Date().toISOString(),
      news_url: el.news_url ? el.news_url : "",
      image: el.image ? el.image : img,
    });
  };
  const handleAddMember = (el) => {
    setOpenDialog2(true);
    setDialogObj(el);
  };

  const handleAddMemberIntoEvent = async (el) => {
    let changeData = { addMembers: [el] };
    await axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "addMemberInCommittee/" + dialogObj.id, changeData, {
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
      .put(process.env.NEXT_PUBLIC_BASE_URL + "update-news-pic/" + dialogObj.id, formData, {
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
  const handleUpdateRoom = async (data) => {
    // return;
    await axios
      .put(process.env.NEXT_PUBLIC_BASE_URL + "update-news/" + dialogObj.id, data, {
        headers: {
          authorization: user.accessToken,
        },
      })
      .then((res) => {
        getRoChamCall(user.accessToken);
        setUpdate({
          id: 0,
          title: "",
          postedBy: "",
          date: new Date().toISOString(),
          news_url: "",
          image: "",
        });
        setDialogObj({});
        dialogClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <DialogTitle id="alert-dialog-title">{"News Details"}</DialogTitle>
        <hr />
        <DialogContent style={{ minWidth: "30rem" }}>
          <table className="table" style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}>
            <tbody>
              <tr>
                <td>
                  <h3>News Info</h3>
                </td>
              </tr>
              <tr>
                <td scope="row" style={{ paddingRight: "3rem" }}>
                  Title : {viewDialogObj.title ? viewDialogObj.title : "NA"}
                </td>
                <td>Posted By : {viewDialogObj.postedBy ? viewDialogObj.postedBy : "NA"}</td>
              </tr>
              <tr>
                <td>Email : {viewDialogObj.email ? viewDialogObj.email : "NA"}</td>
                <td>News Url : {viewDialogObj.news_url ? viewDialogObj.news_url : "NA"}</td>
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
              label="Title"
              name="title"
              type="text"
              defaultValue={dialogObj.title}
              // value={update.firstname}
              onChange={(e) => {
                setUpdate({ ...update, title: e.target.value });
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
              label="Posted By"
              name="postedBy"
              type="text"
              defaultValue={dialogObj.postedBy}
              // value={update.manager_name}
              onChange={(e) => {
                setUpdate({ ...update, postedBy: e.target.value });
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
              label="News Url"
              name="news_url"
              type="text"
              defaultValue={dialogObj.news_url}
              // value={update.news_url}
              onChange={(e) => {
                setUpdate({ ...update, news_url: e.target.value });
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
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Logo</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Posted By</TableCell>
                  <TableCell>Posted Date</TableCell>
                  <TableCell>News Url</TableCell>
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
                            alt={el.title}
                            src={
                              el.image !== null
                                ? el.image
                                : "http://134.209.222.109/uploads/noticefile/286avatar_1e6996135-d22e-4a0b-bd96-16dffbe07885.png"
                            }
                            style={{
                              height: 48,
                              width: 48,
                            }}
                          />
                        </TableCell>
                        <TableCell>{el.title ? el.title : "N/A"}</TableCell>
                        <TableCell>{el.postedBy ? el.postedBy : "N/A"}</TableCell>
                        <TableCell>{el.date ? new Date(el.date).toISOString() : "N/A"}</TableCell>
                        <TableCell>{el.news_url ? el.news_url : "N/A"}</TableCell>
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
                          {/* <PersonAddAlt1Icon
                            color="primary"
                            onClick={() => handleAddMember(el)}
                            style={{ cursor: "pointer" }}
                          /> */}
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
