import Image from "next/image";
import { Box, ThemeUICSSObject } from "theme-ui";
import StyledButton from "../../atoms/styled/Button";

export default function LeftPanel() {
  const avatarSize = 150;
  const avatarUrl = `https://gravatar.com/avatar/e8f8c31096bc0750790917fa5453ad0da6ce6e07556ea62acdd5740f1380670f?v?s=${avatarSize}`;
  const buttonStyle: ThemeUICSSObject = {
    mt: 3,
    mx: [1, null, 0],
    display: ["inline-block", null, "flex"],
    width: ["unset", null, "100%"],
  };

  return (
    <Box sx={{ textAlign: "center", flexShrink: 0 }}>
      <Image src={avatarUrl} alt="Avatar Blanco" width={avatarSize} height={avatarSize} quality={100} priority />
      <Box>
        <StyledButton sx={buttonStyle} iconName="AiOutlineProfile" href="https://app.visualcv.com/cvs/9165064">
          Resume
        </StyledButton>
        <StyledButton
          sx={buttonStyle}
          iconName="AiOutlineMail"
          href="mailto:lic.miguelblanco@gmail.com?subject=Hey White!"
        >
          Email
        </StyledButton>
      </Box>
    </Box>
  );
}
