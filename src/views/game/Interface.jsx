import { useKeyboardControls } from "@react-three/drei";
import useGame from "../../stores/useGame.jsx";
import { useEffect, useRef, useState } from "react";
import Popup from "react-animated-popup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import { addEffect } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import "./style.css";

const InvestDialog = ({ open, handleClose }) => {
  return (
    <Popup visible={open} onClose={handleClose}>
      <div style={{ display: "flex" }}>
        <p>Do you want to invest today?</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="popUpActions" onClick={handleClose}>
          Back
        </div>
        <div className="popUpActions" onClick={handleClose}>
          Invest
        </div>
      </div>
    </Popup>
  );
};

export default function Interface() {
  const time = useRef();
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);

  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase);
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    restart();
    navigate("/player-dashboard");
    setOpenDialog(false);
  };

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;

      if (state.phase === "playing") {
        elapsedTime = Date.now() - state.startTime;
      } else if (state.phase === "ended") {
        elapsedTime = state.endTime - state.startTime;
      }

      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);
      console.log(elapsedTime);

      if (time.current) {
        time.current.textContent = elapsedTime;
      }
    });

    return () => {
      unsubscribeEffect();
    };
    // ...
  }, []);

  return (
    <div className="interface">
      {/* Time */}
      <div ref={time} className="time">
        {<h1>{`${time.textContent}`}</h1>}
      </div>
      {/* Restart */}
      {phase === "ended" && (
        <div className="restart">
          <div onClick={restart}>Restart</div>
          <div
            onClick={() => {
              handleClickOpen();
            }}
          >
            Invest
          </div>
        </div>
      )}
      {/* Controls */}
      <InvestDialog open={openDialog} handleClose={handleClose} />
      <div className="controls">
        <div className="raw">
          <div className={`key ${forward ? "active" : ""}`}></div>
        </div>
        <div className="raw">
          <div className={`key ${leftward ? "active" : ""}`}></div>
          <div className={`key ${backward ? "active" : ""}`}></div>
          <div className={`key ${rightward ? "active" : ""}`}></div>
        </div>
        <div className="raw">
          <div className={`key large ${jump ? "active" : ""}`}></div>
        </div>
      </div>
    </div>
  );
}
