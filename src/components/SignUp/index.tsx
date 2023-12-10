import { CardMedia, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CustumInput from "../CustumInput";
import CoustumPassword from "../CoustumPassword";
import CustumButton from "../CustumButton";
import extra from "../../assets/Group 13.png";
import girl from "../../assets/Saly-14.png";

const SignUp = () => {
  return (
    <Stack
      sx={{
        alignItems: { sm: "center" },
        height: "85vh",
        position: "relative",
        flexDirection: { xs: "column", sm: "row" },
        padding: { xs: "15px", sm: "0px" },
      }}
    >
      <CardMedia
        sx={{
          position: "absolute",
          objectFit: "cover",
          height: "556px",
          width: "313px",
          left: "33%",
          display: { xs: "none", lg: "block" },
          bottom: { lg: "-30px", xl: "-40px" },
        }}
        component="img"
        image={girl}
        alt="girl"
      />
      <Stack
        direction={"column"}
        sx={{
          width: { xs: "100%", sm: "50%" },
          justifyContent: "flex-start",
          padding: { xs: "15px 0", sm: "0px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "50px" },
            fontWeight: "600",
            lineHeight: { xs: "39px", md: "75px" },
          }}
        >
          Sign Up to
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "21px", md: "35px" },
            fontWeight: "500",
            lineHeight: { xs: "31.5px", md: "52.5px" },
            paddingTop: "5px",
          }}
        >
          Lorem Ipsum is simply
        </Typography>
        <Typography
          sx={{
            paddingTop: { xs: "26px", md: "35px" },
            lineHeight: { xs: "21px", sm: "24px" },
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "400",
          }}
        >
          If you already have an account
        </Typography>

        <Typography
          sx={{
            paddingTop: "5px",
            lineHeight: { xs: "22.5px", sm: "24px" },
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "400",
          }}
        >
          You can
          <Link
            style={{
              color: "#4D47C3",
              fontWeight: "500",
              paddingLeft: "10px",
            }}
            to={"/home"}
          >
            Login here !
          </Link>
        </Typography>
      </Stack>
      <Stack
        direction={"column"}
        sx={{
          width: { xs: "100%", sm: "45%", md: "50%" },
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "500",
            lineHeight: "45px",
            width: "100%",
            maxWidth: "369px",
            display: { xs: "none", sm: "block" },
          }}
        >
          Sign Up
        </Typography>
        <CustumInput name="text" placeholder="Create First name" />
        <CustumInput name="text" placeholder="Create Last name" />
        <CustumInput name="number" placeholder="Contact number" />
        <CustumInput name="email" placeholder="Enter Your Email " />
        <CoustumPassword name="password" placeholder="Password" />

        <div style={{ maxWidth: "369px", width: "100%", marginTop: "35px" }}>
          <CustumButton name={"Register"} />
        </div>
        <div
          style={{
            maxWidth: "369px",
            width: "100%",
            marginTop: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              color: "#B5B5B5",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            or continue with
          </Typography>
        </div>
        <div
          style={{
            maxWidth: "369px",
            width: "100%",
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            sx={{ objectFit: "cover", height: "43px", width: "165px" }}
            component="img"
            image={extra}
            alt="Paella dish"
          />
        </div>
      </Stack>
    </Stack>
  );
};

export default SignUp;
