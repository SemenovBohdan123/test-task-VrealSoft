import { Box, Typography, Button } from "@mui/material";
import { FC } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

const Header: FC = () => {
  return (
    <Box
      sx={{
        width: "calc(100vw - 100px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid black",
        paddingBottom: "15px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <BsArrowsFullscreen />
        <Typography>Saunter</Typography>
      </Box>
      <Button variant="contained">Add path</Button>
    </Box>
  );
};

export default Header;
