import { CardMedia, Container, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CustumInput from "../CustumInput";
import CoustumPassword from "../CoustumPassword";
import CustumButton from "../CustumButton";
import extra from "../../assets/Group 13.png";
import girl from "../../assets/Saly-14.png";
import { useSigninUserMutation } from "../../store/action/AuthAction";
import  { useState } from "react";
import { useAppDispatch } from "../../store/Hook";
import { setUser } from "../../store/slice/AuthSlice";
import Navbar from "../Navbar";

const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const toast = useToast();
  const navigate = useNavigate();
  const [signinUser, { data, isSuccess }] =
    useSigninUserMutation();
  console.log(data);

  const handleSubmit = () => {
    signinUser({ email: `${email}`, password: `${password}` }).unwrap();
  };

  if (isSuccess) {
    dispatch(setUser({ token: data.token, name: data.name }));
    localStorage.setItem("token", data.token);
    setTimeout(() => {
      navigate("/home");

    }, 3000);
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Navbar />
      <Container maxWidth="xl" fixed>
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
              Sign in to
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
              If you don't have an account register
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
                to={"/sign-up"}
              >
                Register here !
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
              Sign in
            </Typography>
            <CustumInput
              handleSubmit={setEmail}
              name="Email"
              placeholder="Enter Your Email "
            />
            <CoustumPassword
              setPassword={setPassword}
              name="password"
              placeholder="Password"
            />
            <Typography
              style={{
                color: "#B0B0B0",
                fontWeight: "400",
                fontSize: "13px",
                marginTop: "15px",
              }}
            >
              Forgor password ?
            </Typography>
            <div
              className="btnSubmit"
              style={{ maxWidth: "369px", width: "100%", marginTop: "45px" }}
            >
              <CustumButton handleSubmit={handleSubmit} name={"Login"} />
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
      </Container>
    </div>
  );
};

export default Login;
