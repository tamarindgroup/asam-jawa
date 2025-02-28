import React, { useState, useEffect } from "react";
import { Button, Layout } from "antd";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypeAnimation } from "react-type-animation";
import Grid from "@mui/material/Grid";
import Navbar from "./navbar";
import Image1 from '../image/header1.png';
import Image2 from '../image/header2.png';
// import Image3 from '../image/image-tamarind.png';
// import Image4 from '../image/header/asam4.png';
import ImageHeader from '../image/image-header.jpg';
import { Typography } from "@mui/material";

export const HeaderComponent = () => {
  const { Header } = Layout;
  const theme = useTheme();
  const { t, i18n } = useTranslation("global");

  const [typewriterText, setTypewriterText] = useState(t("typewriter.text"));
  const [hourRotation, setHourRotation] = useState(0);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  useEffect(() => {
    changeLanguage(i18n.language);
    setTypewriterText(t("typewriter.text"));
  }, [i18n.language]);

  useEffect(() => {
    const updateHourRotation = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const angle = seconds * 6; // Rotate based on seconds for a smooth animation
      setHourRotation(angle);
    };

    updateHourRotation();
    const intervalId = setInterval(updateHourRotation, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  const headerContentStyle = {
    position: "relative",
    marginTop: isDesktop ? "-200px" : "-250px",
    left: "0px",
    top: "0px",
    display: "flex",
    padding: "20px",
    overflow: "hidden",
  };

  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${ImageHeader})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px)',
          zIndex: -1,
        }} />
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        }} />

        <Header
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            height: !isDesktop ? "650px" : "900px",
            position: "relative",
            backgroundColor: 'transparent',
            zIndex: 1,
          }}
        >
          <div style={headerContentStyle}>
            <Grid container spacing={2} sm={12} style={{ marginTop: "200px", display: 'flex' }}>
              <Grid item sx={4} sm={6} style={{ marginTop: isDesktop ? '100px' : '60px', width: !isDesktop ? '620px' : '400px', marginLeft: isDesktop ? '100px' : 0 }}>
                <Typography id="text-header" sx={{ fontSize: !isDesktop ? '13px' : '29px', width: !isDesktop ? '190px' : '700px' }}>
                  {t('text-header.text')}
                </Typography>
                <TypeAnimation
                  sequence={[
                    `${typewriterText}`,
                    1000,
                    "",
                  ]}
                  speed={50}
                  className="type-text"
                  style={{
                    fontSize: isDesktop ? 25 : 19,
                    color: 'white'
                  }}
                  repeat={Infinity}
                />
                <br />
                <a href="#info">
                <Button
                  id="button-header"
                  style={{
                    fontSize: !isDesktop ? '12px' : '18px',
                    color: "white",
                    background: "orange",
                    width: !isDesktop ? "120px" : "150px",
                    height: !isDesktop ? "30px" : "40px",
                    marginTop: '20px',
                  }}
                >
                  {t("button-header.text")}
                </Button>
              </a>
              </Grid>
              <Grid
              item
              sx={6}
              sm={8}
              mt={isDesktop ? '-350px' : '-250px'}
              style={{
                marginLeft: isDesktop ? 'auto' : '160px',
                backgroundColor: 'transparent',
                display: 'flex',
                gap: '0', // Remove gap to bring them closer together
                justifyContent: 'flex-end',
                marginRight: '100px'
              }}
            >
              <img
                src={Image1}
                style={{
                  width: isDesktop ? '370px' : '150px', // Slightly reduce the width
                  height: isDesktop ? '370px' : '150px',
                  borderRadius: '10px',
                  transform: 'rotate(-10deg)', // Rotate Image1 to the left
                  marginRight: '-90px', // Adjust the margin to bring it closer to Image2
                }}
              />
              <img
                src={Image2}
                style={{
                  width: isDesktop ? '370px' : '150px', // Slightly reduce the width
                  height: isDesktop ? '370px' : '150px',
                  borderRadius: '10px',
                  transform: 'rotate(10deg)', // Rotate Image2 to the right
                }}
              />
            </Grid>
            </Grid>
          </div>
        </Header>
      </div>
    </>
  );
};
