import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { AccountHolderActions } from "../../store/accountHolderSlice";

const user = {
  avatar: "/static/images/avatars/avatar_1.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
  timezone: "GTM-7",
};

export const AccountProfile = (props) => {
  let data = useSelector((state) => (state.Profile.item ? state.Profile.item : []));
  let token = useSelector((state) => (state.Token.item ? state.Token.item : []));
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleProfilePicChange = async (event) => {
    if (event !== null) {
      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      formData.append("image", event.target.files[0], event.target.files[0].name);

      // Details of the uploaded file
      // Request made to the backend api
      // Send formData object
      return await axios
        .put(process.env.NEXT_PUBLIC_BASE_URL + "update-admin-pic/" + data.id, formData, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          getAdminApiCall(token);
          return setImage(res.data.data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const getAdminApiCall = async (token) => {
    await axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + "getProfile", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        dispatch(AccountHolderActions.addItem(res.data.adminUser));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={data.image}
            sx={{
              height: 200,
              mb: 2,
              width: 200,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {data.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <input
          accept="image/*"
          onChange={(e) => handleProfilePicChange(e)}
          type="file"
          style={{ display: "none" }}
          id="select-image"
        />
        <label htmlFor="select-image" style={{ width: "100%" }}>
          <Button variant="contained" color="primary" component="span" fullWidth>
            Upload picture
          </Button>
        </label>
      </CardActions>
    </Card>
  );
};
