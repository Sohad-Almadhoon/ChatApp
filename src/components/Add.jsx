import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import styled from "@emotion/styled";
import { DateRange, VideoCameraBack } from "@mui/icons-material";

function Add() {
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #fff",
    boxShadow: 24,
    padding: "15px",
    height: "270px",
    borderRadius: "15px",
  };
  //   const UserBox = styled(Box)({
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "10px",
  //   });
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add Post"
        sx={{ position: "fixed", bottom: 20, left: 20 }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      {open && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            style={style}
            bgcolor={"background.default"}
            color={"text.primary"}
          >
            <Typography variant="h6" color="gray" textAlign="center">
              Create a new post
            </Typography>

            <TextField
              sx={{ width: "100%" }}
              rows={4}
              multiline
              placeholder="What's on your mind, Sohad?"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Avatar
                      alt="Emma Watson"
                      src="https://img.chip.com.tr/rcman/Cw940h529q95gm/images/content/2014101315195557418.jpg"
                      sx={{ width: 35, height: 35 }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={5}>
              <EmojiEmotionsIcon color="primary" />
              <ImageIcon color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAddIcon color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </Modal>
      )}
    </>
  );
}

export default Add;
