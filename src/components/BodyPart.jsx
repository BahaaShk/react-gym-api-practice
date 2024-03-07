import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

import Chest from "../assets/icons/chest.png";
import UpperArms from "../assets/icons/biceps-muscle.png";
import Back from "../assets/icons/back.png";
import LowerLegs from "../assets/icons/front-legs.png";
import UpperLegs from "../assets/icons/upper-legs.png";
import All from "../assets/icons/full-body.png";
import Cardio from "../assets/icons/health.png";
import LowerArms from "../assets/icons/lower-arms.png";
import Neck from "../assets/icons/neck.png";
import Shoulders from "../assets/icons/shoulder.png";
import Waist from "../assets/icons/body-part.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const bodyIcons = {
    all: All,
    chest: Chest,
    upperarms: UpperArms,
    back: Back,
    lowerlegs: LowerLegs,
    upperlegs: UpperLegs,
    cardio: Cardio,
    lowerarms: LowerArms,
    neck: Neck,
    shoulders: Shoulders,
    waist: Waist,
  };
  const getIconPath = (itemName) => {
    const normalizedItemName = itemName.toLowerCase().replace(/\s+/g, "");
    return bodyIcons[normalizedItemName] || null;
  };
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        border: bodyPart === item ? "1px solid #FF2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 0, behavior: "smooth" });
      }}
    >
      <img
        src={getIconPath(item)}
        alt="dumbbell"
        loading="lazy"
        style={{ width: "70px", height: "70px" }}
      />
      {/* <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} /> */}
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
