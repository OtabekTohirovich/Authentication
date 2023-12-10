import { Stack, Typography } from "@mui/material"

const Navbar = () => {
  return (
    <Stack sx={{paddingTop: '31px', paddingLeft: "42px"}}>
        <Typography sx={{fontSize: '20px', lineHeight: '30px', fontWeight: '600'}}>Book Zone</Typography>
    </Stack>
  )
}

export default Navbar