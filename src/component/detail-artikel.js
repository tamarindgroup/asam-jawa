import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { SiShopee } from 'react-icons/si';
import LogoGunung from '../image/logo-asam-jawa.png';
import LogoTokped from '../image/logo-tokped.png';
import ReactWhatsapp from 'react-whatsapp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import { useTranslation } from "react-i18next";
import IconWhatsapp from '../image/icon-whatsapp.png';
import { useTheme } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import Shopping from '../image/shopping2.png'; 
import PlaceIcon from '@mui/icons-material/Place';
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { Button, Container, Typography, useMediaQuery, Grid } from '@mui/material';
import Agen from '../image/Agen.png';
import Sales from '../image/Sales.png';

export const DetailArtikel = () => {
    const componentPDF = useRef();
    const { id } = useParams();
    const { t, i18n } = useTranslation("global");
    const activeLanguage = i18n.language;
    const location = useLocation();
    const theme = useTheme();
    const [isRinging, setIsRinging] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 
    const artikelData = location?.state?.artikelData;
    const [showCall, setCall] = useState(false);


    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: 'PDF',
      });

    const handlePrint = () => {
      console.log('click print');
      generatePDF()
    }

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    })

    console.log('Lokasi:', location);
    console.log('ID:', id);
    console.log('Data Artikel:', artikelData);


    const [isShopeeVisible, setShopeeVisible] = useState(true);
    const [showLogoTokopedia, setShowLogoTokopedia] = useState(false);

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

    // Memisahkan data bahan menjadi sebuah array
    const bahanString = artikelData?.masak?.bahan;
    const bahanArray = bahanString ? bahanString.split(/\d+\)/).filter(Boolean).map(bahan => bahan.trim()) : [];

    // Memisahkan data bumbu menjadi sebuah array jika data tersedia
    const bumbuString = artikelData?.masak?.bumbu;
    const bumbuArray = bumbuString ? bumbuString.split(/\d+\)/).filter(Boolean).map(bumbu => bumbu.trim()) : [];

    // Memisahkan data cara memasak menjadi sebuah array langkah-langkah jika data tersedia
    const caraMasakString = artikelData?.masak?.cara_masak;
    const caraMasakArray = caraMasakString ? caraMasakString.split('.').filter(Boolean).map(langkah => langkah.trim()) : [];

    return (
        <>
             <Container maxWidth="md" sx={{ mt: isDesktop ? 50 : 10 }}>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          {/* Tombol Kembali */}
            <Link to={{ pathname: `/artikel` }}>
            <Button
              type="primary"
              style={{
                background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)',
                border: 'none',
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: '0px 10px 20px rgba(255, 165, 0, 0.4)',
                transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                marginRight: '10px',
                "&:hover": {
                  boxShadow: '0px 14px 28px rgba(255, 165, 0, 0.6)',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              <ArrowBackIcon /> {t("kembali.text")}
            </Button>
            </Link>
          {/* Tombol Print */}
          <Button
            onClick={handlePrint}
            type="primary"
            style={{
              background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)',
              border: 'none',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: '0px 10px 20px rgba(255, 165, 0, 0.4)',
              transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
              marginRight: '10px',
              "&:hover": {
                boxShadow: '0px 14px 28px rgba(255, 165, 0, 0.6)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            <PrintIcon style={{ marginRight: '5px' }} /> {t("cetak.text")}
          </Button>
        </div>
    <div ref={componentPDF}>
      <img src={artikelData?.image} alt={artikelData?.nama} 
      style={{  
          maxWidth: '100%',
          margin: '0 auto',
          display: 'block', 
    }} />
      <Typography variant="body1" mt={10} mb={4}>
        {/* Judul Artikel */}
        <Typography id='description-artikel'  variant="h4">{artikelData[activeLanguage]?.nama}</Typography>
        {/* Keterangan */}
        {artikelData?.deskripsi.split('\n').map((paragraph, index) => (
          <p id='description-artikel' key={index}>{paragraph}</p>
        ))}
      </Typography>
      {/* Tampilkan judul "Bahan:" hanya jika ada data bahan */}
      {bahanArray.length > 0 && (
        <>
          <Typography id='description-artikel' variant="h5">{t("bahan.text")}:</Typography>
          <ul>
            {bahanArray.map((bahan, index) => (
              <li id='description-artikel' key={index}>{bahan}</li>
            ))}
          </ul>
        </>
      )}
      {/* Tampilkan judul "Bumbu:" hanya jika ada data bumbu */}
      {bumbuArray.length > 0 && (
        <>
          <Typography id='description-artikel' variant="h5">{t("bumbu.text")}:</Typography>
          <ul>
            {bumbuArray.map((bumbu, index) => (
              <li id='description-artikel' key={index}>{bumbu}</li>
            ))}
          </ul>
        </>
      )}
      {/* Tampilkan judul "Cara Memasak:" hanya jika ada data langkah-langkah */}
      {caraMasakArray.length > 0 && (
        <>
          <Typography id='description-artikel' variant="h5">{t("cara-memasak.text")}:</Typography>
          <ol>
            {caraMasakArray.map((langkah, index) => (
              <li id='description-artikel' key={index}>{langkah}</li>
            ))}
          </ol>
        </>
      )}

        {artikelData?.referensi && (
           <div style={{ marginTop: '20px', marginBottom: '50px'}}>
           <Typography id='description-artikel' style={{ marginRight: '10px' }}>Referensi Lainnya:</Typography>
           <a id='description-artikel' href={artikelData?.referensi} target='_blank'>{artikelData?.referensi}</a>
         </div>
        )}
      </div>
    </Container>

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
                    id='wa-agen'
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
                    id='wa-sales'
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
    )
}
