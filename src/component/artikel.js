import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import { Input, Empty, Layout } from 'antd';
import Grid from "@mui/material/Grid";
import Shopping from '../image/shopping2.png'; 
import Box from "@mui/material/Box";
import ReactWhatsapp from 'react-whatsapp';
import { SiShopee } from "react-icons/si";
import LogoTokped from '../image/logo-tokped.png';
import IconWhatsapp from '../image/icon-whatsapp.png';
import LogoGunung from '../image/logo-asam-jawa.png';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import dataArtikel from "../data/artikel";
import { Card, Typography } from "antd";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { ThreeCircles } from 'react-loader-spinner';
import { PulseLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import Image3 from '../image/image-tamarind.png';
import ImageHeader from '../image/artikel-header.jpg';
import Ramadhan from '../image/ramadhan-asam-jawa.gif';
import Agen from '../image/Agen.png';
import Star from '../image/star.gif';
import Sales from '../image/Sales.png';
import Header1 from '../image/header-1.jpg';
import Header2 from '../image/header-2.png';
import Header3 from '../image/header-3.png';


export const Artikel = () => {
  const [artikel, setArtikel] = useState(dataArtikel);
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const [showMore, setShowMore] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);
  const [linkLoading, setLinkLoading] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showCall, setCall] = useState(false);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchCriteria, setSearchCriteria] = useState({
    name: true,
    post: true,
  });

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { Header } = Layout;

  const headerContentStyle = {
    position: "relative",
    marginTop: isDesktop ? "-200px" : "-250px",
    left: "0px",
    top: "0px",
    display: "flex",
    padding: "20px",
    overflow: "hidden",
  };

  const { Paragraph, Text } = Typography;
  const { t, i18n } = useTranslation("global");
  const [showLogoTokopedia, setShowLogoTokopedia] = useState(false);

  const activeLanguage = i18n.language;

  const maxArtikel = 10;



  const [isShopeeVisible, setShopeeVisible] = useState(true);

  const handleShoppingClick = () => {
    setShowLogoTokopedia(true);
    setTimeout(() => {
      setShowLogoTokopedia(false);
    }, 5000); // You can adjust the duration as needed
  };

  const handleCall = () => {
    setCall(true);
    setTimeout(() => {
      setCall(false);
    }, 5000)
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchValue(""); // Reset search value when category changes
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShopeeVisible((prevVisible) => !prevVisible);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    // Simulate loading for 10 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set loading state to false after 10 seconds

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsRinging(true);
      } else {
        setIsRinging(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(loadingTimeout); // Clear the loading timeout when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const newShowMore = showMore + 3;
      setShowMore(Math.min(newShowMore, maxArtikel));
      setLoadingMore(false);
    }, 1000);
  };

  const handleLinkClick = () => {
    setLinkLoading(true);
    setTimeout(() => {
      setLinkLoading(false);
    }, 1000);
  };

  const handleDetailClick = () => {
    setLoadingDetail(true);
    setTimeout(() => {
      setLoadingDetail(false);
    }, 1000);
  };

  const filteredArtikel = artikel
  ?.filter(
    (data) =>
    (selectedCategory === 'Semua' || data[activeLanguage].kategori === selectedCategory) &&
    (data[activeLanguage].nama.toLowerCase().includes(searchValue.toLowerCase()))
  )
  .slice(0, showMore);

  const handleSearchIconMouseDown = (event) => {
    event.stopPropagation();
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
      height: !isDesktop ? "850px" : "900px",
      position: "relative",
      backgroundColor: 'transparent',
      zIndex: 1,
    }}
  >
    <div style={headerContentStyle}>
      <Grid container spacing={2} sm={12} style={{ marginTop: "200px", display: 'flex', flexDirection: isDesktop ? 'row' : 'column', alignItems: 'center' }}>
        <Grid item sx={4} sm={6} style={{
          marginTop: isDesktop ? '30px' : '60px',
          width: !isDesktop ? '620px' : '400px',
          marginLeft: isDesktop ? '100px' : 0,
          textAlign: isDesktop ? 'left' : 'center'
        }}>
          <Typography id="text-header-artikel" style={{
            fontSize: !isDesktop ? '12px' : '23px',
            width: !isDesktop ? '350px' : '800px',
          }}>
            Sumber informasi ini menyajikan berbagai artikel menarik dan informatif tentang manfaat asam jawa. Mulai dari resep-resep lezat yang menginspirasi 
            hingga tips kesehatan yang menyoroti khasiat alami asam jawa, Anda bisa menemukan ragam panduan untuk memperkaya menu dan gaya hidup sehat. Selain itu, 
            ada juga ulasan mengenai tren makanan populer dan penggunaan asam jawa dalam budaya kuliner, memberikan wawasan baru tentang bahan yang serbaguna ini. 
            Jelajahi artikel-artikel kami untuk mendapatkan ide baru, panduan kesehatan, dan ulasan seputar asam jawa yang cocok untuk Anda!
          </Typography>
          <br />
            <a href="#info">
              <Button
                id="button-header"
                style={{
                  fontSize: !isDesktop ? '12px' : '14px',
                  color: "white",
                  background: "orange",
                  width: !isDesktop ? "120px" : "150px",
                  height: !isDesktop ? "30px" : "40px",
                  marginTop: '20px',
                  position: 'relative',
                  left: isDesktop ? 0 : '-50px'
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
          mt={isDesktop ? '-500px' : '-60px'}
          style={{
            display: 'flex',
            gap: '10px', // add some space between images
            justifyContent: 'flex-end',
            marginLeft: isDesktop ? 'auto' : '0',
            marginRight: isDesktop ? '100px' : '0',
            flexDirection: isDesktop ? 'row' : 'column',
            alignItems: 'center', // Center images on mobile
            position: 'relative',
            left: !isDesktop ? '-200px' : 0
          }}
        >
          <img
            src={Header1}
            style={{
              width: isDesktop ? '270px' : '100px',
              height: isDesktop ? '300px' : '100px',
              borderRadius: '10px',
              transform: 'rotate(-10deg)', 
              zIndex: -3,
              position: 'relative',
              left: isDesktop ? '90px' : '-60px'
            }}
          />
          <img
            src={Header2}
            style={{
              width: isDesktop ? '270px' : '100px',
              height: isDesktop ? '300px' : '100px',
              borderRadius: '10px',
              position: 'relative',
              top: isDesktop ? 0 : '-150px'
            }}
          />
          <img
            src={Header3}
            style={{
              width: isDesktop ? '270px' : '100px',
              height: isDesktop ? '300px' : '100px',
              borderRadius: '10px',
              transform: 'rotate(10deg)', 
              zIndex: -3,
              position: 'relative',
              right: isDesktop ? '90px' : 0,
              top: isDesktop ? 0 : '-160px'
            }}
          />
        </Grid>
      </Grid>
    </div>
  </Header>
</div>


      <Grid container justifyContent="center" alignItems="center" spacing={isDesktop ? 0 : 4}>
          {/* Left Grid with Images */}
          <Grid item xs={4} container direction="row" justifyContent="center" spacing={2} mr={isDesktop ? 0 : '28px'}>
            <Grid item>
              <img src={Image3} style={{ width: isDesktop ? '120px' : '40px', height: isDesktop ? '120px' : '40px', transform: 'rotate(40deg)' }} />
            </Grid>
            <Grid item>
              <img src={Image3} style={{ width: isDesktop ? '120px' : '40px', height: isDesktop ? '120px' : '40px', transform: 'rotate(40deg)' }} />
            </Grid>
            {isDesktop ? (
              <Grid item>
              <img src={Image3} style={{ width: isDesktop ? '120px' : '50px', height: isDesktop ? '120px' : '50px', transform: 'rotate(40deg)' }} />
              </Grid>
            ): (
              ''
            )}
          </Grid>

          {/* Center Circular Progress with Stars */}
          <Grid item xs={2} container justifyContent="center" alignItems="center" mt={-0.2}>
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                width: 'fit-content',
                mx: 'auto',
              }}
            >
              {/* Left Star */}
              <img 
                src={Star} 
                style={{ 
                  width: '40px', // Adjust the star size as needed
                  height: '40px',
                  marginRight: '8px' // Space between star and logo
                }} 
              />
              
              {/* LogoGunung */}
              <img 
                src={LogoGunung} 
                style={{ 
                  width: isDesktop ? '100px' : '70px', 
                  height: isDesktop ? '100px' : '70px',
                }} 
              />

              {/* Right Star */}
              <img 
                src={Star} 
                style={{ 
                  width: isDesktop ? '40px' : '40px',
                  height: isDesktop ? '40px' : '40px',
                  marginLeft: isDesktop ? '8px' : '10px' // Space between logo and star
                }} 
              />
            </Box>
          </Grid>

          {/* Right Grid with Images */}
          <Grid item xs={4} container direction="row" justifyContent="center" spacing={2} ml={isDesktop ? 0 : '20px'}>
            <Grid item>
              <img src={Image3} style={{ width: isDesktop ? '120px' : '40px', height: isDesktop ? '120px' : '40px', transform: 'rotate(40deg)' }} />
            </Grid>
            <Grid item>
              <img src={Image3} style={{ width: isDesktop ? '120px' : '40px', height: isDesktop ? '120px' : '40px', transform: 'rotate(40deg)' }} />
            </Grid>
            {isDesktop ? (
              <Grid item>
              <img src={Image3} style={{ width: isDesktop ? '120px' : '50px', height: isDesktop ? '120px' : '50px', transform: 'rotate(40deg)' }} />
              </Grid>
            ): (
              ''
            )}
          </Grid>
        </Grid>

      {isLoading ? ( // Display PacmanLoader while isLoading is true
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <ThreeCircles color="#FFA500" size={50} />
        </div>
      ) : (
        // Display data when isLoading is false
        <>
         {/* <img src={logonewYear} style={{ width: isDesktop ? '30%' : '50%', top: !isDesktop ? '350px' : '400px', margin: isDesktop ? 'auto' : 'auto', position: 'relative', left: isDesktop ? '650px' : '100px' }}  />  */}

         {/* <div style={{ display: 'flex', top: !isDesktop ? '150px' : '100px', position: 'relative', marginBottom: isDesktop ? '300px' : '300px' }}>
          <img src={Waisak} style={{ width: isDesktop ? '30%' : '80%', margin: !isDesktop ? 'auto' : 'auto', borderRadius: '20px' }}  /> 
        </div>  */}

{/* <div style={{ display: isDesktop ? 'flex' : 'block', top: !isDesktop ? '100px' : '100px', position: 'relative', marginBottom: isDesktop ? '230px' : '200px' }}>
<img src={Ramadhan} 
      width={isDesktop ? 800 : '100%'} 
      height={isDesktop ? 400 : 300}  
      style={{
        margin: !isDesktop ? 'auto' : 'auto',
      }}
      />
<img src={IdulFitri} 
      width={isDesktop ? 800 : '100%'} 
      height={isDesktop ? 400 : 300}  
      style={{
        margin: !isDesktop ? 'auto' : 'auto',
        marginTop: !isDesktop ? '50px' : 0
      }}
      />
</div> */}

            <div id="info" style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <Input.Search
              placeholder={t("cari.text")}
              onMouseDown={handleSearchIconMouseDown}
              onSearch={(value) => {
                const filteredArtikel = artikel
                  ?.filter(
                    (data) =>
                      (selectedCategory === 'Semua' || data[activeLanguage].kategori === selectedCategory) &&
                      (data[activeLanguage].nama.toLowerCase().includes(value.toLowerCase()))
                  )
                  .slice(0, showMore);
      
                setIsSearchEmpty(filteredArtikel.length === 0);
                setSearchValue(value);
              }}
              style={{
                width: isDesktop ? '50%' : '90%',
                marginBottom: '20px',
                '& .ant-input-search-icon': {
                  backgroundColor: 'orange',
                },
              }}
            />
            </div>

            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: !isDesktop ? '100px' : 0
              }}
            >
              <Button
                style={{
                  margin: "10px",
                  background: "linear-gradient(90deg, #FFD700 0%, #FFA500 100%)",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                  boxShadow: "0px 10px 20px rgba(255, 165, 0, 0.4)",
                  transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                }}
                onClick={() => setSelectedCategory('resep')}
              >
                {t("button-resep.text")}
              </Button>
              <Button
                style={{
                  margin: "10px",
                  background: "linear-gradient(90deg, #FFD700 0%, #FFA500 100%)",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                  boxShadow: "0px 10px 20px rgba(255, 165, 0, 0.4)",
                  transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                }}
                onClick={() => setSelectedCategory('pengobatan')}
              >
                {t("button-pengobatan.text")}
              </Button>
              <Button
                style={{
                  margin: "10px",
                  background: "linear-gradient(90deg, #FFD700 0%, #FFA500 100%)",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                  boxShadow: "0px 10px 20px rgba(255, 165, 0, 0.4)",
                  transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                }}
                onClick={() => setSelectedCategory('sejarah')}
              >
                {t("button-sejarah.text")}
              </Button>
            </div> */}
          


          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              width: '80%',
              margin: '0 auto',
              marginTop: !isDesktop ? '120px' : "140px",
            }}
          >
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: !isDesktop ? '190px' : 0 }}>
            <div style={{ position: 'relative', marginTop: !isDesktop ? '-190px' : 0 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, borderLeft: '4px solid orange', marginRight: '10px' }} />

              <Grid container spacing={7} justifyContent="center" style={{ marginRight: '20px' }}>
                <div className="category-button-container">
                  <div className="category-button-row" style={{ width: isDesktop ? '550px' : '390px', marginLeft: !isDesktop ? '30px' : 0}}>
                    <Button
                      className={`category-button ${selectedCategory === 'resep' ? 'selected' : ''}`}
                      style={{ marginLeft: !isDesktop ? '20px' : "-200px", fontSize: '9px', width: '900px' }}
                      onClick={() => handleCategoryClick('resep')}
                    >
                      {/* <img src={iconResep} alt="Resep" className="category-icon" style={{ height: '20px' }} /> */}
                     <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "12px" : "18px" }}> {t("button-resep.text")} </label>
                    </Button>

                    <Button
                      className={`category-button ${selectedCategory === 'pengobatan' ? 'selected' : ''}`}
                      style={{ marginLeft: !isDesktop ? '10px' : "-130px", fontSize: '9px' }}
                      onClick={() => handleCategoryClick('pengobatan')}
                    >
                      {/* <img src={iconSehat} alt="Pengobatan" className="category-icon" style={{ height: '20px' }} /> */}
                      <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "12px" : "18px" }}> {t("button-pengobatan.text")} </label>
                    </Button>

                    <Button
                      className={`category-button ${selectedCategory === 'sejarah' ? 'selected' : ''}`}
                      style={{ marginLeft: !isDesktop ? '20px' : "70px", fontSize: '9px' }}
                      onClick={() => handleCategoryClick('sejarah')}
                    >
                      {/* <img src={iconSejarah} alt="Sejarah" className="category-icon" style={{ height: '20px' }} /> */}
                      <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "12px" : "18px" }}> {t("button-sejarah.text")} </label>
                    </Button>

                    <Button
                      className={`category-button ${selectedCategory === 'trend' ? 'selected' : ''}`}
                      style={{ 
                        marginLeft: !isDesktop ? '50px' : "50px", 
                        fontSize: '9px', 
                        width: !isDesktop ? '400px' : "300px", 
                        display: !isDesktop ? 'flex' : 0, 
                        flexDirection: !isDesktop ?  'column' : 0,
                        paddingRight: !isDesktop ? '40px' : 0
                      }}
                      onClick={() => handleCategoryClick('trend')}
                    >
                      {/* <img src={Trending} alt="Trending" className="category-icon" style={{ height: '20px' }} /> */}
                      <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "12px" : "18px", width: isDesktop ? '400px' : "100px"}}> {t("button-trend.text")} </label>
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid container spacing={1} justifyContent="center" style={{ marginTop: !isDesktop ? '10px' : 0 }}>
                {isSearchEmpty ? (
                  <Empty description={t("component-empty.text")} style={{ marginTop: "100px" }} />
                ) : (
                filteredArtikel.map((data) => (
                    <Grid item key={data.id} xs={12} sm={6} md={4}>
                      <div style={{ paddingLeft: !isDesktop ? '10px' : '80px', paddingRight: '8px' }}>
                        <Card
                          style={{
                            width: isDesktop ? '80%' : '93%',
                            margin: '16px',
                            boxShadow: '0px 8px 16px rgba(255, 165, 0, 0.6)',
                          }}
                        >
                          <div style={{ padding: '16px', width: '100%' }}>
                            <img alt={data.nama} src={data[activeLanguage].image} style={{ height: '200px', width: '100%' }} />
                            <Typography>{data[activeLanguage].post}</Typography>
                            <Typography.Title id='description-artikel' level={4}>{data[activeLanguage].nama}</Typography.Title>
                            <Link
                              to={{
                                pathname: `/detail-artikel/${data.id}`,
                              }}
                              state={{ artikelData: data[activeLanguage] }}
                              style={{ textDecoration: 'none' }}
                            >
                              <Button
                                type="primary"
                                style={{
                                  marginTop: '20px',
                                  background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)',
                                  border: 'none',
                                  color: 'white',
                                  fontWeight: 'bold',
                                  textTransform: 'none',
                                  boxShadow: '0px 10px 20px rgba(255, 165, 0, 0.4)',
                                  transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                                  "&:hover": {
                                    boxShadow: '0px 14px 28px rgba(255, 165, 0, 0.6)',
                                    transform: 'translateY(-3px)',
                                  },
                                }}
                                onClick={handleDetailClick}
                              >
                                {t("button-header.text")}
                              </Button>
                            </Link>
                          </div>
                        </Card>
                      </div>
                    </Grid>
                  )))}
              </Grid>
            </div>
          </div>
      </div>


{!isLoading && !['resep', 'pengobatan', 'sejarah'].includes(selectedCategory) && 
  showMore < maxArtikel && filteredArtikel.length >= showMore && (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '300px' }}>
    <Button
      id="load-more"
      type="primary"
      onClick={loadMore}
      style={{
        marginTop: "-300px",
        marginBottom: "50px",
        alignSelf: "center",
        background: "linear-gradient(90deg, #FFD700 0%, #FFA500 100%)",
        border: "none",
        color: "white",
        fontWeight: "bold",
        textTransform: "none",
        boxShadow: "0px 10px 20px rgba(255, 165, 0, 0.4)",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        display: "block",
        position: "relative",
      }}
    >
      {loadingMore ? (
        <PulseLoader style={{ paddingLeft: '10px' }} color="#ffffff" size={10} />
      ) : (
        t("button-lainnya.text")
      )}
    </Button>
  </div>
)}



<div
        style={{
          position: 'fixed',
          bottom: '10px',
          left: isDesktop ? '15px' : '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span
          onClick={handleShoppingClick}
          style={{
            position: 'absolute',
            cursor: 'pointer',
            zIndex: 1,
            top: '45%',
            left: '18%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'sans-serif',
            fontSize: '14px',
            color: 'white',
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
            padding: '5px 10px',
            borderRadius: '5px',
            animation: 'floatText 2s infinite',
          }}
        >
          Shop
        </span>
        <img
          src={Shopping}
          style={{
            height: '90px',
            width: '90px',
            cursor: 'pointer',
          }}
          onClick={handleShoppingClick}
        />
        {showLogoTokopedia && (
          <a id='shopee' href='https://shopee.co.id/tamarindo_group?shopCollection=243096934#product_list' target='_blank'>
          <SiShopee
            style={{
              color: '#e6282b',
              height: '40px',
              width: '40px',
              position: 'absolute',
              bottom: '190px', // Adjust the position as needed
              left: isDesktop ? '26px' : '26px',
              zIndex: '9999', // Ensure the LogoTokopedia is below the Shopping image
            }}
          />
          </a>
        )}
        {showLogoTokopedia && (
          <a id='tokopedia' href='https://www.tokopedia.com/bjayamakmur' target='_blank'>
          <img
            src={LogoTokped}
            style={{
              height: '53px',
              width: '55px',
              position: 'absolute',
              bottom: '100px', // Adjust the position as needed
              left: isDesktop ? '15px' : '16px',
              zIndex: '9999', // Ensure the LogoTokopedia is below the Shopping image
            }}
          />
          </a>
        )}
      </div>
            <div
            style={{
              position: 'fixed',
              bottom: '10px',
              right: !isDesktop ? '20px' : '20px', 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              <img onClick={handleCall} src={IconWhatsapp} 
                  style={{
                    maxWidth: '100%', // Tambahkan ini
                    width: '70px',
                    height: '70px',
                    position: 'fixed', // Tetapkan posisi elemen
                    bottom: '20px',    // Atur jarak dari bawah
                    right: !isDesktop ? '20px' : '20px',     // Atur jarak dari kanan
                    zIndex: '9999',   
                  }} 
                />
                {showCall && (
                  <ReactWhatsapp id="icon-whatsapp" style={{ 
                    width: 0,
                    height: 0,
                    cursor: 'pointer'
                    }} 
                    number="+6282160904267" 
                    message={t("agen.text")}> 
                  <img
                    id="wa-agen"
                    src={Agen}
                    style={{
                      height: '65px',
                      width: '60px',
                      position: 'absolute',
                      top: '-150px',
                      right: !isDesktop ? '5px' : '20px',
                    }}
                  />
                  </ReactWhatsapp>
                 )}
                {showCall && (
                  <ReactWhatsapp id="icon-whatsapp" style={{ 
                    width: 0,
                    height: 0,
                    cursor: 'pointer'
                  }} 
                  number="+62813-1777-9733" 
                  message={t("sales.text")}> 
                  <img
                    id="wa-sales"
                    src={Sales}
                    style={{
                      color: '#e6282b',
                      height: '65px',
                      width: '60px',
                      position: 'absolute',
                      bottom: '180px', // Adjust the position as needed
                      right: !isDesktop ? '5px' : '20px',
                      zIndex: '4', // Ensure the LogoTokopedia is below the Shopping image
                    }}
                  />
                  </ReactWhatsapp>
                )}
            </div>

          {/* Konten footer tetap sama */}
          <Box
        component="footer"
        id="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          [theme.breakpoints.up("sm")]: {
            p: 6,
            flexDirection: "row",
            textAlign: "left",
          },
        }}
      >
        <Grid item xs={12} sm={3}>
          <div className="logo-container">
            <img
              src={LogoGunung}
              width={200}
              height={200}
              className="logo-container"
              style={{
                height: "auto",
                maxWidth: "100%",
              }}
            />
            {isDesktop ? (
              <Grid>
                <div className="logo-text">
                  {t("big-title-1.text")} <span className="gunung-text">{t("big-title-2.text")}</span>
                </div>
              </Grid>
            ) : null}
          </div>
        </Grid>
        <Container maxWidth="lg">
          <Grid container spacing={5} justifyContent="flex-end">
            <Grid item xs={12} sm={3}>
              <Typography
                style={{
                  paddingBottom: "10px",
                  fontWeight: "bold",
                }}
                variant="h6"
                color="text.primary"
                gutterBottom
              >
                 {t("tentang.text")}
                <hr />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                 {t("list-tentang.text")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography
                variant="h6"
                style={{
                  paddingBottom: "10px",
                  fontWeight: "bold",
                }}
                color="text.primary"
                gutterBottom
              >
                 {t("title-kontak.text")}
                <hr />
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ paddingTop: "9px" }}
              >
                <PlaceIcon
                  style={{
                    animation: isRinging
                      ? "ringing 1s infinite alternate"
                      : "none",
                  }}
                />
                <div style={{ width: "100%" }}>
                  <Typography
                    style={{
                      textAlign: !isDesktop ? "center" : "left",
                    }}
                  >
                    {t("detail-kontak.text")}
                  </Typography>
                </div>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ paddingTop: "30px" }}
              >
                <MailIcon
                  style={{
                    animation: isRinging
                      ? "ringing 1s infinite alternate"
                      : "none",
                  }}
                />
                <Typography
                  style={{
                    marginTop: "-10px",
                    paddingTop: "9px",
                  }}
                >
                  <span
                    style={{
                      paddingRight: "5px",
                      paddingLeft: "5px",
                    }}
                  >
                    tamarindogroup3@gmail.com
                  </span>
                  <br />
                  <span
                    style={{
                      paddingLeft: isDesktop ? "5px" : 0,
                    }}
                  >
                    {t("or.text")}
                  </span>
                  <br />
                  <span
                    style={{
                      paddingRight: "10px",
                      paddingLeft: "5px",
                    }}
                  >
                    tamarindotbn@gmail.com
                  </span>
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ paddingTop: "30px" }}
              >
                <PhoneIcon
                  style={{
                    marginRight: "5px",
                    animation: isRinging
                      ? "ringing 1s infinite alternate"
                      : "none",
                  }}
                />
                <Typography>
                  <span
                    style={{
                      paddingRight: "10px",
                      paddingLeft: "5px",
                    }}
                  >
                    081133388188
                  </span>
                </Typography>
              </Typography>
              <Typography
                style={{
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {t("daftar-agen.text")}
                </span>
                <br />
                <span>081317779733</span>
              </Typography>
              <Typography
                style={{
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {t("support.text")}
                </span>
                <br />
                <span>
                  <a
                    href="https://www.instagram.com/asamjawagunung/?hl=en"
                    style={{
                      color: "blue",
                    }}
                  >
                    @asamjawagunung
                  </a>
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography
                variant="h6"
                color="text.primary"
                style={{
                  paddingBottom: "10px",
                  fontWeight: "bold",
                }}
                gutterBottom
              >
                {t("follow.text")}
                <hr />
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ paddingTop: "9px" }}
              >
                <a href='https://www.facebook.com/asamjawacapgunung/'>
                <Facebook
                  style={{
                    color: "#4267B2",
                    fontSize: "30px",
                    marginRight: isDesktop ? "10px" : "30px",
                  }}
                />
                </a>
                <a href='https://twitter.com/Bintang77542150/status/994067149739188224'>
                <Twitter
                  style={{
                    color: "#1DA1F2",
                    fontSize: "30px",
                    marginRight: isDesktop ? "10px" : "30px",
                  }}
                />
                </a>
                <a href="https://www.instagram.com/asamjawagunung/"  >
                <Instagram
                  style={{
                    color: "#C13584",
                    fontSize: "30px",
                    marginRight: isDesktop ? "10px" : "30px",
                  }}
                />
                </a>
                <a href='https://www.youtube.com/channel/UCBkmg3iBjBEan-wk2pMrzXg'>
                <YouTube
                  style={{
                    color: "#FF0000",
                    fontSize: "30px",
                  }}
                />
                </a>
              </Typography>
              <Typography
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    paddingBottom: "5px",
                  }}
                >
                  {t("stay.text")}
                </Typography>
                <Typography>
                  {t("list-stay.text")}
                </Typography>
              </Typography>
              <Typography>
                © {new Date().getFullYear()} {t("title-footer.text")}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
        </>
      )}
    </>
  );
}
