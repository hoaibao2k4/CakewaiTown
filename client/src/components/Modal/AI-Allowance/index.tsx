"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ConstructionIcon from "@mui/icons-material/Construction";
import Link from "next/link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

export default function AIAllowance() {
  const [open] = React.useState(true);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col items-center justify-center">
            <ConstructionIcon color="info" fontSize="large" />
            <div className="text-center p-3">
              <h1 className="text-red-600 text-2xl font-bold">
                Bảo trì tính năng
              </h1>
              <p>
                Tính năng này đang trong quá trình bảo trì, hẹn quý khách vào
                lần khác!
              </p>
              <div className="m-2">
                <a
                  href="https://www.youtube.com/shorts/Cuc0PzA6ln0"
                  className="underline"
                  target="blank"
                >
                  Xem video demo tại đây
                </a>
              </div>
            </div>
            <Button LinkComponent={Link} href="/">
              Quay về trang chủ
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
