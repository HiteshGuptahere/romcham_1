import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "../../icons/search";
// import { Upload as UploadIcon } from '../../icons/upload';
// import { Download as DownloadIcon } from '../../icons/download';

export const EventsToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h5">
        List Of Events
      </Typography>
      <Box sx={{ minWidth: 500 }}>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon color="action" fontSize="small">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
          placeholder="Search Events"
          variant="outlined"
        />
      </Box>
    </Box>
    {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          
        </CardContent>
      </Card>
    </Box> */}
  </Box>
);
