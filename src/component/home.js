import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import { 
    Layout, 
    Typography, 
    Carousel,
    Row, 
    Col
} from 'antd';
import puasa from '../image/puasa1.png';
import Mobile2 from '../image/mobile2.png';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import Cursor from '../image/cursor.gif';
import LogoGunung from '../image/logo-asam-jawa.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconWhatsapp from '../image/icon-whatsapp.png';
import ReactWhatsapp from 'react-whatsapp';
import { SiShopee } from 'react-icons/si';
import LogoTokped from '../image/logo-tokped.png';
import Container from '@mui/material/Container';
import IconAsam from '../image/250gr.jpg';
import IconAsam2 from '../image/150gr.jpg';
import IconAsam3 from '../image/75gr.jpg';
import IconCompany from '../image/company-asam-gunung.jpeg';
import BackgroundContent from '../image/DaunGugur2.gif';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import logo1 from '../image/logo-1.png';
import logo2 from '../image/logo-2.png';
import logo3 from '../image/logo-3.png';
import logo4 from '../image/logo-4.png';
import logo5 from '../image/logo-5.png';
import ISO from '../image/iso.png';
import Image1 from '../image/header1.png';
import Image2 from '../image/header2.png';
import { Form } from '../component/form';
import Star from '../image/star.gif';
import Sertifikasi1 from '../image/sertifikasi-1.jpg';
import Pelanggan from '../image/pelanggan-1.jpg';
import backgroundHubungiKami from '../image/bg-hubungi.jpg';
import Shopping from '../image/shopping2.png'; 
import ImageBody from '../image/image--body.png';
import '../logo-animation.css';
import 'aos/dist/aos.css';
import 'rc-footer/assets/index.css';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ThreeCircles } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { FormControl, FormGroup, Grid, TextField, Box, Card, CardContent } from '@mui/material';
import Slide1 from '../image/slide10.jpeg';
import Slide2 from '../image/slide12.jpeg';
import Slide3 from '../image/slide13.jpeg';
import Slide4 from '../image/slide14.jpeg';
import Slide5 from '../image/slide15.jpeg';
// import Slide6 from '../image/slide6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import Agen from '../image/Agen.png';
import Sales from '../image/Sales.png';
import { TypeAnimation } from "react-type-animation";
import Image3 from '../image/image-tamarind.png';
import ImageHeader from '../image/image-header.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cards';

import Kontainer from '../image/kontainer.jpg';
import Cek from '../image/cek.jpg';
import Produksi from '../image/produksi.jpg';
import Eksportir from '../image/Eksportir-Andalan.png';
import Kualitas from '../image/Kualitas-Terjamin.png';
import Proses from '../image/Proses-Terpercaya.png';
import Natal from '../image/desain-natal.png';



export const Home = () => {
  const { Header, Content } = Layout;

  const { t, i18n } = useTranslation("global");

  const [isLoading, setIsLoading] = useState(false);

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [kota, setKota] = useState([]);
  const [telepon, setTelepon] = useState('');
  const [detail, setDetail] = useState('')
  const [isVisible, setIsVisible] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [showLogoTokopedia, setShowLogoTokopedia] = useState(false);
  const [showCall, setCall] = useState(false);
  const theme = useTheme();

  const [typewriterText, setTypewriterText] = useState(t("typewriter.text"));

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });



  

    const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
      defaultMatches: true,
    });

  
  const [error, setError] = useState({
    nama: "",
    email: "",
    telepon: "",
    kota: "",
    detail: ""
  })

  const headerContentStyle = {
    position: "relative",
    marginTop: isDesktop ? "-200px" : "-250px",
    left: "0px",
    top: "0px",
    display: "flex",
    padding: "20px",
    overflow: "hidden",
  };

  const handleShoppingClick = () => {
    setShowLogoTokopedia(true);
    setTimeout(() => {
      setShowLogoTokopedia(false);
    }, 50000); // You can adjust the duration as needed
  };

  const handleCall = () => {
    setCall(true);
    setTimeout(() => {
      setCall(false);
    }, 50000)
  };

  const [isUnderlineVisible, setIsUnderlineVisible] = useState(false);

  const handleScroll = () => {
    // Adjust the scroll position threshold as needed
    const scrollThreshold = 100;
    const isScrollPastThreshold = window.scrollY > scrollThreshold;

    setIsUnderlineVisible(isScrollPastThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const formData = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      // Set isLoading to true when sending the email
      setIsLoading(true);
  
      // Validate the form before sending the email
      const isValid = validateForm();
  
      if (isValid) {
        emailjs.sendForm('service_3ukh7m5', 'template_jk10byr', formData.current, '6l0tizyMRcFgGbKIg')
          .then((result) => {
            console.log(result.text);
            // Reset the form
            e.target.reset();
          })
          .catch((error) => {
            console.log(error.text);
          })
          .finally(() => {
            // Set isLoading to false when the email sending is complete (whether success or error)
            setIsLoading(false);
            window.location.reload();
          });
      } else {
        // Set isLoading to false when the form is not valid
        setIsLoading(false);
      }
    };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if(scrollY > 100) {
        setIsRinging(true);
      } else {
        setIsRinging(false)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const validateForm = () => {
    const newError = { ...error };
    let valid = true;

    if (!nama) {
      newError.nama = t("validasi-nama.text");
      valid = false;
    } else {
      newError.nama = "";
    }

    if (!email) {
      newError.email = t("validasi-email.text");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError.email = 'Email tidak valid';
      valid = false;
    } else {
      newError.email = '';
    }

    if (!telepon) {
      newError.telepon = t("validasi-telepon.text");
      valid = false;
    } else {
      newError.telepon = '';
    }

    if (kota.length === 0) {
      newError.kota = t("validasi-kota.text");
      valid = false;
    } else {
      newError.kota = '';
    }

    if (!detail) {
      newError.detail = t("validasi-pesan.text");
      valid = false;
    } else {
      newError.detail = '';
    }

    setError(newError);

    return valid;

  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  let body = { nama, email, telepon, kota, detail };

  const onLoadData = ({ id }) => 
  new Promise ((resolve) => {
   setTimeout(() => {
     resolve(undefined);
   }, 500);
  })

  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, []);


  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Warna latar belakang yang menggelapkan
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // Pastikan lebih tinggi dari elemen lain
  };


    const [isShopeeVisible, setShopeeVisible] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setShopeeVisible((prevVisible) => !prevVisible);
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);
 

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
                <Typography id="text-header" style={{ fontSize: !isDesktop ? '13px' : '29px', width: !isDesktop ? '190px' : '700px' }}>
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
                <Button
                  id="button-header"
                  href='info'
                  style={{
                    fontSize: !isDesktop ? '12px' : '14px',
                    color: "white",
                    background: "orange",
                    width: !isDesktop ? "120px" : "150px",
                    height: !isDesktop ? "30px" : "40px",
                    marginTop: '20px',
                  }}
                  onClick={e => {
                    e.preventDefault(); // Mencegah default action dari link
                    document.getElementById("info").scrollIntoView({ behavior: 'smooth' }); // Scroll ke elemen dengan ID "next-section"
                  }}
                >
                  {t("button-header.text")}
                </Button>
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

    <Layout 
      className='layout' 
      style={{
        background: 'radial-gradient(circle, white, rgba(255, 158, 0, 0.2), white)', /* Gradien oranye */
        backgroundImage: ImageBody, /* Tekstur batu semi-transparan */
        backgroundBlendMode: 'overlay'
      }}
      id='info'
    >  
    
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


      
<Grid 
  container 
  justifyContent="center" 
  alignItems="flex-start" 
  spacing={isDesktop ? 4 : 6} 
  mt={isDesktop ? 20 : '-20px'} 
  mb={20}
  style={{
    backgroundImage: `url(${ImageBody})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '50px 0',
  }}
>
  {/* Left Grid */}
  <Grid 
    item 
    xs={12} md={4} // Pastikan lebar penuh pada mobile, 6 kolom pada desktop
    style={{ 
      display: 'flex', 
      flexDirection: isDesktop ? 'column' : 'row', 
      alignItems: 'center',
      marginBottom: isDesktop ? '0' : '20px', // Jarak antar kolom pada tampilan mobile
      justifyContent: isDesktop ? 'center' : 'center', // Menambahkan center alignment pada tampilan non-desktop
    }}
  >
    <Card sx={{
      width: isDesktop ? '500px' : '90%',
      padding: '20px',
      boxShadow: 10,
      background: 'linear-gradient(135deg, #D87F33, #F9A825)', // Gradient warna coklat keemasan
      transform: 'perspective(500px) rotateY(0deg) rotateX(0deg)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'perspective(500px) rotateY(0deg) rotateX(0deg) translateY(-10px)',
        boxShadow: 20,
      }
    }}>
      <CardContent>
        <Typography variant="h3" style={{
          textAlign: 'center', 
          fontSize: isDesktop ? '50px' : '39px', 
          marginBottom: '20px', 
          width: isDesktop ? '400px' : '100%', 
          color: '#fff', 
          fontFamily: 'Roboto Slab, serif'
        }}>
          Apakah Anda Mencari Supplier atau Produsen Asam Jawa?
        </Typography>
        <Typography id='deskripsi-produk-kami' style={{
                textAlign: 'left', 
                fontSize: '18px', 
                paddingTop: '50px',
                width: isDesktop ? '400px' : '300px'
              }}>
                Kami adalah produsen dan supplier asam jawa yang menyediakan produk berkualitas tinggi dengan 
                harga kompetitif. Sebagai produsen langsung, kami memiliki stok yang cukup untuk memenuhi kebutuhan 
                bisnis Anda dalam jumlah besar. Kami juga berperan sebagai supplier yang menghubungkan Anda dengan produk 
                asam jawa yang diinginkan, baik untuk kebutuhan skala kecil maupun besar. Kami siap melayani Anda dengan layanan pengiriman yang efisien dan harga yang sesuai dengan pasar.
              </Typography>
              <Typography id='deskripsi-produk-kami' style={{
                textAlign: 'left', fontSize: '18px', marginTop: '20px', width: isDesktop ? '400px' : '300px'
              }}>
                Kami memiliki pengalaman bertahun-tahun dalam industri ini dan telah dipercaya oleh berbagai bisnis, dari usaha kecil hingga besar. 
                Kepercayaan yang kami bangun dengan pelanggan kami adalah salah satu alasan utama kami dapat terus berkembang dan menawarkan produk serta layanan terbaik. 
                Kami berkomitmen untuk selalu menjaga kualitas produk kami dan memastikan setiap transaksi berlangsung dengan lancar dan memuaskan.
              </Typography>
      </CardContent>
    </Card>
  </Grid>

  <Grid 
  item 
  xs={12} md={4} // Pastikan lebar penuh pada mobile, 6 kolom pada desktop
  style={{ 
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',  // Menempatkan konten di tengah secara horizontal
    justifyContent: 'center', // Menempatkan konten di tengah secara vertikal
    marginBottom: isDesktop ? '0' : '20px', // Jarak antar kolom pada tampilan mobile
  }}
>
  <img src={puasa} alt="Natal" style={{ maxWidth: '100%', height: 'auto' }} />
</Grid>

  {/* Right Grid */}
  <Grid 
    item 
    xs={12} md={4} // Pastikan lebar penuh pada mobile, 6 kolom pada desktop
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Card sx={{
      width: isDesktop ? '500px' : '90%',
      padding: '20px',
      boxShadow: 10,
      background: 'linear-gradient(135deg, #D87F33, #F9A825)', // Gradient warna coklat keemasan
      transform: 'perspective(500px) rotateY(0deg) rotateX(0deg)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'perspective(500px) rotateY(0deg) rotateX(0deg) translateY(-10px)',
        boxShadow: 20,
      }
    }}>
      <CardContent>
        <Typography variant="h3" style={{
          textAlign: 'center', 
          fontSize: isDesktop ? '50px' : '30px', 
          marginBottom: '20px', 
          width: isDesktop ? '400px' : '100%', 
          color: '#fff', 
          fontFamily: 'Roboto Slab, serif'
        }}>
          Keuntungan yang Anda Dapatkan di Tempat Kami
        </Typography>
        <Typography id='deskripsi-produk-kami' style={{
                textAlign: 'left', fontSize: '18px', width: isDesktop ? '400px' : '300px', paddingTop: '50px'
              }}>
                1. <strong>Kualitas Produk Terjamin:</strong> Kami hanya menyediakan asam jawa dengan kualitas terbaik, yang telah melalui proses seleksi yang ketat. Produk kami memiliki rasa dan tekstur yang konsisten, sehingga dapat memenuhi standar yang Anda butuhkan.
                <br /><br />
                2. <strong>Harga Kompetitif:</strong> Sebagai produsen dan supplier langsung, kami dapat menawarkan harga yang sangat kompetitif di pasar. Kami memastikan Anda mendapatkan harga yang sesuai dengan kualitas produk yang Anda terima.
                <br /><br />
                3. <strong>Stok Terjamin dan Ketersediaan:</strong> Kami memiliki stok asam jawa yang cukup besar dan siap memenuhi kebutuhan bisnis Anda, baik dalam jumlah kecil maupun besar. Dengan sistem pengelolaan stok yang efisien, Anda tidak perlu khawatir kehabisan pasokan.
                <br /><br />
                4. <strong>Layanan Pengiriman Efisien:</strong> Kami menyediakan layanan pengiriman yang cepat dan dapat diandalkan, dengan pengiriman tepat waktu ke lokasi Anda. Kami berkomitmen untuk menjaga kelancaran distribusi produk ke seluruh wilayah.
                <br /><br />
                5. <strong>Fleksibilitas dalam Pembelian:</strong> Kami mendukung berbagai skala pembelian, baik untuk bisnis kecil, menengah, maupun besar. Anda bisa memilih sesuai dengan kebutuhan dan kapasitas bisnis Anda.
                <br /><br />
                6. <strong>Hubungan Bisnis yang Solid:</strong> Kami berkomitmen untuk membangun hubungan jangka panjang dengan pelanggan kami, dengan memberikan layanan yang profesional dan solusi terbaik untuk setiap permintaan.
              </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>



<Box 
  sx={{ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: 'fit-content',
    mx: 'auto',
    marginTop: isDesktop ? '10px' : '10px',
    marginBottom: '100px'
  }}
>
  {/* Left Line */}
  <Box 
    sx={{
      width: '100px', // Adjust width of line as needed
      height: '2px',
      backgroundColor: 'orange', // Color of the line
      marginRight: '8px',
    }} 
  />

  {/* Left Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginRight: '8px',
    }} 
  />

  {/* LogoGunung */}
  <img 
    src={LogoGunung} 
    style={{ 
      width: isDesktop ? '100px' : '80px', 
      height: isDesktop ? '100px' : '80px',
    }} 
  />

  {/* Right Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginLeft: '8px',
    }} 
  />

  {/* Right Line */}
  <Box 
    sx={{
      width: '100px', 
      height: '2px',
      backgroundColor: 'orange', 
      marginLeft: '8px',
    }} 
  />
</Box>



{isDesktop ? (
 <Grid 
 container 
 spacing={2} 
 alignItems="center" 
 justifyContent="center" // Meratakan secara horizontal
 style={{ minHeight: '100vh' }} // Menjadikan kontainer tinggi penuh untuk vertikal rata tengah
 mb={30}
>
 {/* Typography Section */}
 <Grid item xs={12} md={6}>
 {/* Image Eksportir */}
 <img
   src={Eksportir}
   alt="Eksportir Andalan"
   style={{
     width: isDesktop ? '50%' : '70%', // Disesuaikan untuk tampilan responsif
     height: 'auto',
     display: 'block', // Pastikan gambar terpusat
     margin: '0 auto 20px auto', // Menambah margin bawah untuk memberikan ruang ke Typography
   }}
 />

 {/* Deskripsi */}
 <Typography
   id="deskripsi-produk-kami-2"
   style={{
     fontSize: '17px',
     textAlign: 'justify', // Opsional untuk tampilan lebih rapi
     width: '90%', // Kurangi lebar untuk proporsi yang lebih baik
     margin: '0 auto', // Memastikan elemen Typography di tengah pada xs
   }}
 >
   Asam Jawa kami tersedia dalam jumlah besar dan siap memenuhi kebutuhan 
   para pelaku di sektor makanan, minuman, dan kesehatan. Dengan kapasitas 
   stok yang melimpah dan kualitas terjamin, produk kami tidak hanya ideal 
   untuk pasar domestik tetapi juga telah diekspor ke berbagai negara seperti 
   Singapura, Malaysia, Timur Tengah, dan Eropa. Setiap pengiriman kami pastikan 
   memenuhi standar internasional, sehingga dapat mendukung kelancaran proses produksi
   Anda di berbagai belahan dunia.
 </Typography>
</Grid>

 {/* Image Section */}
 <Grid item xs={12} md={6}>
 <img
     src={Kontainer}
     alt="Kontainer Asam Jawa"
     style={{
       width: '80%', // Disesuaikan untuk tampilan responsif
       height: 'auto',
       borderRadius: '8px', // Opsional, untuk estetika
       display: 'block', // Pastikan gambar terpusat
       margin: '0 auto', // Membuat gambar tetap di tengah
       boxShadow: '0 4px 8px rgba(255, 165, 0, 0.5)', // Bayangan oranye
     }}
   />
 </Grid>


 {/* Image Section */}
 <Grid item xs={12} md={6} mt={20}>
 <img
     src={Produksi}
     alt="Kontainer Asam Jawa"
     style={{
       width: '80%', // Disesuaikan untuk tampilan responsif
       height: 'auto',
       borderRadius: '8px', // Opsional, untuk estetika
       display: 'block', // Pastikan gambar terpusat
       margin: '0 auto', // Membuat gambar tetap di tengah
       boxShadow: '0 4px 8px rgba(255, 165, 0, 0.5)', // Bayangan oranye
     }}
   />
 </Grid>

 <Grid item xs={12} md={6} mt={20}>
 <img
   src={Kualitas}
   alt="Kualitas"
   style={{
     width: isDesktop ? '50%' : '70%', // Disesuaikan untuk tampilan responsif
     height: 'auto',
     display: 'block', // Pastikan gambar terpusat
     margin: '0 auto 20px auto', // Menambah margin bawah untuk memberikan ruang ke Typography
   }}
 />

   <Typography
     id="deskripsi-produk-kami-2"
     style={{
       fontSize: '17px',
       textAlign: 'justify', // Opsional untuk tampilan lebih rapi
       width: '90%', // Kurangi lebar untuk proporsi yang lebih baik
       margin: '0 auto', // Memastikan elemen Typography di tengah pada xs
     }}
   >
    Asam Jawa kami diproduksi dengan standar internasional yang ketat untuk memastikan 
    kualitas terbaik di setiap langkahnya. Mulai dari pemilihan bahan baku, proses produksi, 
    hingga pengemasan, semuanya diawasi secara profesional untuk menjaga kebersihan, kesegaran, 
    dan cita rasa alami. Dengan komitmen pada kualitas, produk kami memenuhi kebutuhan pasar global, 
    menjadikannya pilihan ideal untuk berbagai industri, mulai dari makanan dan minuman hingga kesehatan. 
    Kami bangga menghadirkan Asam Jawa berkualitas premium yang siap mendukung kesuksesan bisnis Anda di pasar 
    domestik maupun internasional.
   </Typography>
 </Grid>


 <Grid item xs={12} md={6} mt={20}>
 <img
   src={Proses}
   alt="Proses"
   style={{
     width: isDesktop ? '50%' : '70%', // Disesuaikan untuk tampilan responsif
     height: 'auto',
     display: 'block', // Pastikan gambar terpusat
     margin: '0 auto 20px auto', // Menambah margin bawah untuk memberikan ruang ke Typography
   }}
 />
   <Typography
     id="deskripsi-produk-kami-2"
     style={{
       fontSize: '17px',
       textAlign: 'justify', // Opsional untuk tampilan lebih rapi
       width: '90%', // Kurangi lebar untuk proporsi yang lebih baik
       margin: '0 auto', // Memastikan elemen Typography di tengah pada xs
     }}
   >
     Asam Jawa kami melewati proses pengecekan produk yang teliti di setiap tahap 
     produksi untuk memastikan kualitas terbaik. Mulai dari seleksi bahan baku hingga 
     pengemasan akhir, kami memastikan bahwa setiap produk memenuhi standar kebersihan, 
     kesegaran, dan keamanan internasional. Dengan komitmen pada pengawasan yang ketat, 
     kami hadir untuk mendukung kebutuhan bisnis Anda dengan produk Asam Jawa berkualitas 
     tinggi yang dapat diandalkan untuk pasar domestik maupun ekspor.
   </Typography>
 </Grid>

 {/* Image Section */}
 <Grid item xs={12} md={6} mt={20}>
 <img
     src={Cek}
     alt="Kontainer Asam Jawa"
     style={{
       width: '80%', // Disesuaikan untuk tampilan responsif
       height: 'auto',
       borderRadius: '8px', // Opsional, untuk estetika
       display: 'block', // Pastikan gambar terpusat
       margin: '0 auto', // Membuat gambar tetap di tengah
       boxShadow: '0 4px 8px rgba(255, 165, 0, 0.5)', // Bayangan oranye
     }}
   />
 </Grid>
</Grid>
) : (
  <Grid 
 container 
 spacing={2} 
 alignItems="center" 
 justifyContent="center" // Meratakan secara horizontal
 style={{ minHeight: '100vh' }} // Menjadikan kontainer tinggi penuh untuk vertikal rata tengah
 mb={30}
>
<Grid item xs={12} md={6}>
 <img
     src={Kontainer}
     alt="Kontainer Asam Jawa"
     style={{
       width: '80%', // Disesuaikan untuk tampilan responsif
       height: 'auto',
       borderRadius: '8px', // Opsional, untuk estetika
       display: 'block', // Pastikan gambar terpusat
       margin: '0 auto', // Membuat gambar tetap di tengah
       boxShadow: '0 4px 8px rgba(255, 165, 0, 0.5)', // Bayangan oranye
     }}
   />
 </Grid>
 {/* Typography Section */}
 <Grid item xs={12} md={6} mt={5}>
 {/* Image Eksportir */}
 <img
   src={Eksportir}
   alt="Eksportir Andalan"
   style={{
     width: isDesktop ? '50%' : '70%', // Disesuaikan untuk tampilan responsif
     height: 'auto',
     display: 'block', // Pastikan gambar terpusat
     margin: '0 auto 20px auto', // Menambah margin bawah untuk memberikan ruang ke Typography
   }}
 />

 {/* Deskripsi */}
 <Typography
   id="deskripsi-produk-kami-2"
   style={{
     fontSize: '17px',
     textAlign: 'justify', // Opsional untuk tampilan lebih rapi
     width: '90%', // Kurangi lebar untuk proporsi yang lebih baik
     margin: '0 auto', // Memastikan elemen Typography di tengah pada xs
   }}
 >
   Asam Jawa kami tersedia dalam jumlah besar dan siap memenuhi kebutuhan 
   para pelaku di sektor makanan, minuman, dan kesehatan. Dengan kapasitas 
   stok yang melimpah dan kualitas terjamin, produk kami tidak hanya ideal 
   untuk pasar domestik tetapi juga telah diekspor ke berbagai negara seperti 
   Singapura, Malaysia, Timur Tengah, dan Eropa. Setiap pengiriman kami pastikan 
   memenuhi standar internasional, sehingga dapat mendukung kelancaran proses produksi
   Anda di berbagai belahan dunia.
 </Typography>
</Grid>

 {/* Image Section */}
 <Grid item xs={12} md={6} mt={20}>
 <img
     src={Produksi}
     alt="Kontainer Asam Jawa"
     style={{
       width: '80%', // Disesuaikan untuk tampilan responsif
       height: 'auto',
       borderRadius: '8px', // Opsional, untuk estetika
       display: 'block', // Pastikan gambar terpusat
       margin: '0 auto', // Membuat gambar tetap di tengah
       boxShadow: '0 4px 8px rgba(255, 165, 0, 0.5)', // Bayangan oranye
     }}
   />
 </Grid>

 <Grid item xs={12} md={6} mt={5}>
 <img
   src={Kualitas}
   alt="Kualitas"
   style={{
     width: isDesktop ? '50%' : '70%', // Disesuaikan untuk tampilan responsif
     height: 'auto',
     display: 'block', // Pastikan gambar terpusat
     margin: '0 auto 20px auto', // Menambah margin bawah untuk memberikan ruang ke Typography
   }}
 />

   <Typography
     id="deskripsi-produk-kami-2"
     style={{
       fontSize: '17px',
       textAlign: 'justify', // Opsional untuk tampilan lebih rapi
       width: '90%', // Kurangi lebar untuk proporsi yang lebih baik
       margin: '0 auto', // Memastikan elemen Typography di tengah pada xs
     }}
   >
    Asam Jawa kami diproduksi dengan standar internasional yang ketat untuk memastikan 
    kualitas terbaik di setiap langkahnya. Mulai dari pemilihan bahan baku, proses produksi, 
    hingga pengemasan, semuanya diawasi secara profesional untuk menjaga kebersihan, kesegaran, 
    dan cita rasa alami. Dengan komitmen pada kualitas, produk kami memenuhi kebutuhan pasar global, 
    menjadikannya pilihan ideal untuk berbagai industri, mulai dari makanan dan minuman hingga kesehatan. 
    Kami bangga menghadirkan Asam Jawa berkualitas premium yang siap mendukung kesuksesan bisnis Anda di pasar 
    domestik maupun internasional.
   </Typography>
 </Grid>

 {/* Image Section */}
 <Grid item xs={12} md={6} mt={20}>
 <img
     src={Cek}
     alt="Kontainer Asam Jawa"
     style={{
       width: '80%', // Disesuaikan untuk tampilan responsif
       height: 'auto',
       borderRadius: '8px', // Opsional, untuk estetika
       display: 'block', // Pastikan gambar terpusat
       margin: '0 auto', // Membuat gambar tetap di tengah
       boxShadow: '0 4px 8px rgba(255, 165, 0, 0.5)', // Bayangan oranye
     }}
   />
 </Grid>

 <Grid item xs={12} md={6} mt={5}>
 <img
   src={Proses}
   alt="Proses"
   style={{
     width: isDesktop ? '50%' : '70%', // Disesuaikan untuk tampilan responsif
     height: 'auto',
     display: 'block', // Pastikan gambar terpusat
     margin: '0 auto 20px auto', // Menambah margin bawah untuk memberikan ruang ke Typography
   }}
 />
   <Typography
     id="deskripsi-produk-kami-2"
     style={{
       fontSize: '17px',
       textAlign: 'justify', // Opsional untuk tampilan lebih rapi
       width: '90%', // Kurangi lebar untuk proporsi yang lebih baik
       margin: '0 auto', // Memastikan elemen Typography di tengah pada xs
     }}
   >
     Asam Jawa kami melewati proses pengecekan produk yang teliti di setiap tahap 
     produksi untuk memastikan kualitas terbaik. Mulai dari seleksi bahan baku hingga 
     pengemasan akhir, kami memastikan bahwa setiap produk memenuhi standar kebersihan, 
     kesegaran, dan keamanan internasional. Dengan komitmen pada pengawasan yang ketat, 
     kami hadir untuk mendukung kebutuhan bisnis Anda dengan produk Asam Jawa berkualitas 
     tinggi yang dapat diandalkan untuk pasar domestik maupun ekspor.
   </Typography>
 </Grid>
</Grid>
)}









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
  {/* Left Line */}
  <Box 
    sx={{
      width: '100px', // Adjust width of line as needed
      height: '2px',
      backgroundColor: 'orange', // Color of the line
      marginRight: '8px',
    }} 
  />

  {/* Left Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginRight: '8px',
    }} 
  />

  {/* LogoGunung */}
  <img 
    src={LogoGunung} 
    style={{ 
      width: isDesktop ? '100px' : '80px', 
      height: isDesktop ? '100px' : '80px',
    }} 
  />

  {/* Right Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginLeft: '8px',
    }} 
  />

  {/* Right Line */}
  <Box 
    sx={{
      width: '100px', 
      height: '2px',
      backgroundColor: 'orange', 
      marginLeft: '8px',
    }} 
  />
</Box>



<Box 
  display="flex" 
  justifyContent="center" 
  alignItems="center" 
  mt={10}
>
  <Card 
    sx={{ 
      width: isDesktop ? '60%' : '90%', 
      padding: '20px', 
      boxShadow: '0px 0px 15px rgba(255, 87, 34, 0.5)', // Shadow dengan warna orange
      borderRadius: 3
    }}
  >
    <CardContent>
      <Typography 
        variant="h6" 
        component="div" 
        style={{ textAlign: 'center', fontSize: '50px', fontFamily: 'Roboto Slab, serif' }}
      >
        Produk Kami
      </Typography>

      {/* Grid di dalam CardContent untuk konten kiri dan kanan */}
      <Grid container spacing={4} mt={2} justifyContent="space-between">
        {/* Konten Kiri */}
        <Grid item xs={12} sm={5}>
          <Typography 
            variant="h6" 
            component="div" 
            style={{ textAlign: 'center', fontSize: '28px', fontFamily: 'Roboto Slab, serif', fontWeight: 'bolder' }}
          >
            Pengenalan Produk
          </Typography>
          <Typography id='deskripsi-produk-kami-2'
            style={{ textAlign: 'left', fontSize: '16px', marginTop: '10px' }}
          >
            Kami bangga memperkenalkan Asam Jawa sebagai salah satu produk unggulan kami. Asam jawa yang kami distribusikan merupakan 
                produk berkualitas tinggi yang dipilih dengan teliti untuk memenuhi berbagai kebutuhan kuliner, obat tradisional, dan industri lainnya.
                Dengan pengalaman bertahun-tahun sebagai produsen dan supplier, kami memastikan bahwa setiap pasokan asam jawa selalu segar, berkualitas, dan siap memenuhi kebutuhan Anda.
                Kami melayani pengadaan dalam berbagai jumlah, baik untuk kebutuhan rumah tangga maupun industri besar.
          </Typography>
        </Grid>

        {/* Garis Vertikal Orange */}
        <Grid item xs={12} sm={1}>
          <Box 
            sx={{
              height: '100%',
              borderLeft: '5px solid #FF5722', // Warna orange
              margin: '0 20px',
            }} 
          />
        </Grid>

        {/* Konten Kanan */}
        <Grid item xs={12} sm={5}>
          {/* Carousel untuk gambar produk */}
          <Carousel autoplay speed={300} style={{ height: isDesktop ? '400px' : '400px', width: isDesktop ? '300px' : '500px', marginLeft: isDesktop ? 0 :  '-10px' }}>
            {/* Item pertama di dalam Carousel */}
            <div>
              <Box 
                sx={{ textAlign: 'center', marginTop: '20px', width: '300px' }}
              >
                <img
                  src={IconAsam3}
                  width={isDesktop ? 300 : 400}
                  height={190}
                  style={{
                    marginBottom: '20px',
                    borderRadius: '10px',
                    maxWidth: '100%',
                  }}
                />
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    marginTop: '10px', 
                    flexDirection: 'column' // Menjaga item tetap di tengah secara vertikal
                  }}
                >
                  <img 
                    src={LogoGunung} 
                    width={25} 
                    height={29} 
                    style={{ marginBottom: '10px' }} 
                  />
                  <Typography style={{ textAlign: 'center' }}> {/* Menjaga teks tetap di tengah */}
                    <span
                      className="titleProduk"
                      style={{
                        display: 'inline-block',
                        borderBottom: '2px solid #8BC34A',
                        transformOrigin: '0% 100%',
                        transform: `scaleX(${isUnderlineVisible ? 1 : 0})`,
                        transition: 'transform 0.3s ease-in-out',
                        fontSize: isDesktop ? "18px" : '17px'
                      }}
                    >
                      {t('produk-1.text')}
                    </span>
                  </Typography>
                </div>
                <Link to={{ pathname: `/produk` }}>
                  <Button
                    style={{
                      backgroundColor: '#e6bf0d',
                      color: 'white',
                      marginTop: '30px'
                    }}
                  >
                    {t("button-produk.text")}
                  </Button>
                </Link>
              </Box>
            </div>

            {/* Item kedua di dalam Carousel */}
            <div>
              <Box 
                sx={{ textAlign: 'center', marginTop: '20px', width: '300px' }}
              >
                <img
                  src={IconAsam2}
                  width={300}
                  height={190}
                  style={{
                    marginBottom: '20px',
                    borderRadius: '10px',
                    maxWidth: '100%',
                  }}
                />
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    marginTop: '10px', 
                    flexDirection: 'column' 
                  }}
                >
                  <img 
                    src={LogoGunung} 
                    width={25} 
                    height={29} 
                    style={{ marginBottom: '10px' }} 
                  />
                  <Typography style={{ textAlign: 'center' }}>
                    <span
                      className="titleProduk"
                      style={{
                        display: 'inline-block',
                        borderBottom: '2px solid #8BC34A',
                        transformOrigin: '0% 100%',
                        transform: `scaleX(${isUnderlineVisible ? 1 : 0})`,
                        transition: 'transform 0.3s ease-in-out',
                        fontSize: isDesktop ? "18px" : '17px'
                      }}
                    >
                      {t('produk-2.text')}
                    </span>
                  </Typography>
                </div>
                <Link to={{ pathname: `/produk` }}>
                  <Button
                    style={{
                      backgroundColor: '#e6bf0d',
                      color: 'white',
                      marginTop: '30px'
                    }}
                  >
                    {t("button-produk.text")}
                  </Button>
                </Link>
              </Box>
            </div>

            {/* Item ketiga di dalam Carousel */}
            <div>
              <Box 
                sx={{ textAlign: 'center', marginTop: '20px', width: '300px' }}
              >
                <img
                  src={IconAsam}
                  width={300}
                  height={190}
                  style={{
                    marginBottom: '20px',
                    borderRadius: '10px',
                    maxWidth: '100%',
                  }}
                />
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    marginTop: '10px', 
                    flexDirection: 'column' 
                  }}
                >
                  <img 
                    src={LogoGunung} 
                    width={25} 
                    height={29} 
                    style={{ marginBottom: '10px' }} 
                  />
                  <Typography style={{ textAlign: 'center' }}>
                    <span
                      className="titleProduk"
                      style={{
                        display: 'inline-block',
                        borderBottom: '2px solid #8BC34A',
                        transformOrigin: '0% 100%',
                        transform: `scaleX(${isUnderlineVisible ? 1 : 0})`,
                        transition: 'transform 0.3s ease-in-out',
                        fontSize: isDesktop ? "18px" : '17px'
                      }}
                    >
                      {t('produk-3.text')}
                    </span>
                  </Typography>
                </div>
                <Link to={{ pathname: `/produk` }}>
                  <Button
                    style={{
                      backgroundColor: '#e6bf0d',
                      color: 'white',
                      marginTop: '30px'
                    }}
                  >
                    {t("button-produk.text")}
                  </Button>
                </Link>
              </Box>
            </div>
          </Carousel>

        </Grid>
      </Grid>
    </CardContent>
  </Card>
</Box>





<Box 
  sx={{ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: 'fit-content',
    mx: 'auto',
    marginTop: isDesktop ? '300px' : '200px'
  }}
>
  {/* Left Line */}
  <Box 
    sx={{
      width: '100px', // Adjust width of line as needed
      height: '2px',
      backgroundColor: 'orange', // Color of the line
      marginRight: '8px',
    }} 
  />

  {/* Left Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginRight: '8px',
    }} 
  />

  {/* LogoGunung */}
  <img 
    src={LogoGunung} 
    style={{ 
      width: isDesktop ? '100px' : '80px', 
      height: isDesktop ? '100px' : '80px',
    }} 
  />

  {/* Right Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginLeft: '8px',
    }} 
  />

  {/* Right Line */}
  <Box 
    sx={{
      width: '100px', 
      height: '2px',
      backgroundColor: 'orange', 
      marginLeft: '8px',
    }} 
  />
</Box>


<Box 
  display="flex" 
  justifyContent="center" 
  alignItems="center" 
  mt={10}
>
  <Card sx={{ width: isDesktop ? '70%' : '90%', padding: '20px', boxShadow: 3, boxShadow: '0px 0px 15px rgba(255, 87, 34, 0.5)'  }}>
    <CardContent>
      <Typography
        variant="h6"
        component="div"
        style={{
          textAlign: 'center',
          fontSize: '50px',
          fontFamily: 'Roboto Slab, serif',
        }}
      >
        {t("about.text")}
      </Typography>

      {/* Grid di dalam CardContent untuk konten kiri dan kanan */}
      <Grid container spacing={4} mt={2} justifyContent="space-between">
        {/* Konten Kiri */}
        <Grid item xs={12} sm={5}>
          <Typography id='deskripsi-produk-kami-2'
            style={{
              textAlign: 'left',
              fontSize: '16px',
              marginTop: '10px',
            }}
          >
            {t("list-company.text")}
          </Typography>  
        </Grid>

        {/* Garis Vertikal Orange */}
        <Grid item xs={12} sm={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            sx={{
              height: '100%',
              borderLeft: '5px solid #FF5722', /* Warna orange */
            }}
          />
        </Grid>

        {/* Konten Kanan */}
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              textAlign: 'center',
              marginTop: '20px',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', // Memastikan gambar berada di tengah
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${BackgroundContent})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '80% 100%',
                marginLeft: isDesktop ?  '-120px' : 0,
              }}
            >
              <img
                src={IconCompany}
                width={400}
                height={isDesktop ? 390 : 250}
                style={{
                  marginBottom: '20px',
                  borderRadius: '10px',
                  maxWidth: '100%',
                }}
              />
            </div>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
</Box>





<Box 
  sx={{ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: 'fit-content',
    mx: 'auto',
    marginTop: isDesktop ? '300px' : '200px'
  }}
>
  {/* Left Line */}
  <Box 
    sx={{
      width: '100px', // Adjust width of line as needed
      height: '2px',
      backgroundColor: 'orange', // Color of the line
      marginRight: '8px',
    }} 
  />

  {/* Left Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginRight: '8px',
    }} 
  />

  {/* LogoGunung */}
  <img 
    src={LogoGunung} 
    style={{ 
      width: isDesktop ? '100px' : '80px', 
      height: isDesktop ? '100px' : '80px',
    }} 
  />

  {/* Right Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginLeft: '8px',
    }} 
  />

  {/* Right Line */}
  <Box 
    sx={{
      width: '100px', 
      height: '2px',
      backgroundColor: 'orange', 
      marginLeft: '8px',
    }} 
  />
</Box>

<Box mt={10} sx={{ width: '100%' }}>
  {/* Card utama sebagai container */}
  <Card
    sx={{
      width: '100%',
      height: isDesktop ? '900px' : '2800px',
      padding: '20px',
      boxShadow: 3,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Latar belakang gelap terpisah */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundHubungiKami})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.4)',
        zIndex: 1,
      }}
    />

    {/* CardContent di depan latar belakang gelap */}
    <CardContent sx={{ position: 'relative', zIndex: 2 }}>
      <Typography
        variant="h6"
        component="div"
        style={{
          textAlign: 'center',
          fontSize: '50px',
          fontFamily: 'Roboto Slab, serif',
          color: 'white',
          fontWeight: 'bolder',
          textShadow: '0 0 10px #FF8A65, 0 0 20px #FF8A65, 0 0 30px #FF8A65',
          position: 'relative',
          zIndex: 3,
        }}
      >
        {t("hub.text")}
      </Typography>

      {/* Grid di dalam CardContent untuk konten kiri dan kanan dengan garis vertikal di tengah */}
      <Grid container spacing={4} mt={2} justifyContent="space-between" alignItems="center">
        {/* Konten Kiri */}
        <Grid item xs={12} sm={5}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography id='deskripsi-produk-kami-3' style={{ fontSize: '25px', marginBottom: '20px' }}>
              {t("title-interest.text")}
            </Typography>
          </Box>
        </Grid>

      {/* Garis Tengah (Vertikal atau Horizontal) */}
        <Grid 
          item 
          xs={12} 
          sm={1} 
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box
            sx={{
              height: isDesktop ? '500px' : '5px', // Garis vertikal di desktop, horizontal di mobile
              width: isDesktop ? '5px' : '80%', // Lebar garis jika horizontal pada mobile
              borderLeft: isDesktop ? '5px solid orangered' : 'none',
              borderTop: !isDesktop ? '5px solid orangered' : 'none',
              marginY: !isDesktop ? '20px' : '0', // Spasi vertikal untuk garis horizontal
            }}
          />
        </Grid>

        {/* Konten Kanan */}
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography id='deskripsi-produk-kami-3' style={{ fontSize: '25px' }}>
              {t("deskripsi-interest.text")}
            </Typography>

            {/* Tombol di bawah deskripsi */}
            <a href='#form' target='_blank' style={{ display: 'block', position: 'relative', marginTop: '50px' }}>
              <Button
                href='#form'
                style={{
                  color: 'white',
                  backgroundColor: 'orange',
                  cursor: 'pointer',
                  fontSize: '13px',
                  width: '150px',
                  height: '50px',
                }}
              >
                {t("pesan-form.text")} !
              </Button>
            </a>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
</Box>






<Box 
  sx={{ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: 'fit-content',
    mx: 'auto',
    marginTop: isDesktop ? '300px' : '200px'
  }}
>
  {/* Left Line */}
  <Box 
    sx={{
      width: '100px', // Adjust width of line as needed
      height: '2px',
      backgroundColor: 'orange', // Color of the line
      marginRight: '8px',
    }} 
  />

  {/* Left Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginRight: '8px',
    }} 
  />

  {/* LogoGunung */}
  <img 
    src={LogoGunung} 
    style={{ 
      width: isDesktop ? '100px' : '80px', 
      height: isDesktop ? '100px' : '80px',
    }} 
  />

  {/* Right Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginLeft: '8px',
    }} 
  />

  {/* Right Line */}
  <Box 
    sx={{
      width: '100px', 
      height: '2px',
      backgroundColor: 'orange', 
      marginLeft: '8px',
    }} 
  />
</Box>


<Box sx={{ textAlign: 'center', marginTop: 10 }}>
        <Typography variant="h5" mb={2} style={{ fontSize: '50px', fontFamily: 'Roboto Slab, serif' }}>
          {t("customer.text")}
        </Typography>
        <Typography style={{ fontSize: '20px', paddingTop: isDesktop ? 20 : 40 }}>
          Bukti di mana produk kami terjamin dan menjadi andalan
        </Typography>
      </Box>

      <Box mt={5} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} marginTop={10}>
  <Card
    sx={{
      width: isDesktop ? '1700px' : '90%', // Atur lebar card sesuai kebutuhan
      height: isDesktop ? '700px' : '1100px', // Atur tinggi card sesuai kebutuhan
      position: 'relative', // Mengatur posisi relatif untuk card
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(228, 154, 27, 0.6)', // Shadow oranye pada Card
    }}
  >
    {/* Membuat gradien diagonal, dengan gambar di bagian kiri */}
    <Box
      sx={{
        width: isDesktop ? '50%' : '100%', // Mengambil setengah dari lebar card untuk desktop, penuh untuk mobile
        height: isDesktop ? '100%' : '50%', // Menggunakan tinggi penuh
        backgroundImage: `url(${Pelanggan})`, // Menambahkan gambar sebagai background pada sisi kiri
        backgroundSize: 'cover', // Memastikan gambar menutupi seluruh area
        backgroundPosition: 'center', // Menempatkan gambar di tengah
        backgroundRepeat: 'no-repeat', // Menghindari pengulangan gambar
      }}
    />
    
    {/* Konten card di depan dengan zIndex lebih tinggi */}
    <CardContent
      sx={{
        position: 'absolute',
        top: isDesktop ? 0 : '95%', // Jika mobile, posisikan di tengah secara vertikal
        left: isDesktop ? '50%' : '85%', // Jika mobile, posisikan di tengah secara horizontal
        transform: isDesktop ? 'none' : 'translate(-50%, -50%)', // Jika mobile, gunakan transform untuk memusatkan
        width: isDesktop ? '50%' : '100%', // Lebar penuh di mobile
        height: isDesktop ? '100%' : 'auto', // Tinggi otomatis di mobile
        display: 'flex',
        flexDirection: isDesktop ? 'row' : 'column', // Baris di desktop, kolom di mobile
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 2,
        padding: '20px',
      }}
    >
      
      {/* Carousel di sebelah kanan pada desktop atau di bawah pada mobile */}
      <Carousel 
        autoplay 
        style={{ 
          width: '100%', 
          height: isDesktop ? '580px' : '900px', 
          maxWidth: '600px', 
          margin: !isDesktop ? '20px auto 0' : '0 auto', 
          justifyContent: 'center' 
        }}
      >
        <div>
          <img style={{ height: !isDesktop ? '430px' : "590px", width: !isDesktop ? "350px" : '590px' }} src={Slide1} />
        </div>
        <div>
          <img style={{ height: !isDesktop ? '430px' : "590px", width: !isDesktop ? "350px" : '590px' }} src={Slide2} />
        </div>
        <div>
          <img style={{ height: !isDesktop ? '430px' : "590px", width: !isDesktop ? "350px" : '590px' }} src={Slide3} />
        </div>
        <div>
          <img style={{ height: !isDesktop ? '430px' : "590px", width: !isDesktop ? "350px" : '590px' }} src={Slide4} />
        </div>
      </Carousel>
    </CardContent>
  </Card>
</Box>




<Grid container spacing={3} sx={{ marginTop: 10, marginBottom: '200px' }} alignItems="center">
  
  {/* Kolom kiri untuk Lisensi */}
  <Grid item xs={12} md={6}>
  {/* Box untuk Typography Sertifikasi di atas background image */}
  <Box
    sx={{
      border: '2px solid orange',
      width: isDesktop ? '50%' : '70%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      marginBottom: 2,
    }}
  >
    <Typography
      style={{
        fontSize: '50px',
        fontFamily: 'Roboto Slab, serif',
        color: 'orange',
        fontWeight: 'bolder',
      }}
    >
      Sertifikasi
    </Typography>
  </Box>

  <Box
    sx={{
      padding: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      position: 'relative',
      backgroundImage: `url(${Sertifikasi1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '8px',
      overflow: 'hidden',
    }}
  >
    {/* Overlay untuk efek blur putih */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(8px)',
        zIndex: 0,
      }}
    />

    {/* Overlay efek kilau */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        background: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)',
        animation: 'glint 2s infinite',
      }}
    />

    {/* Define keyframes for the glint effect */}
    <style>
      {`
        @keyframes glint {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}
    </style>

    <Box sx={{ textAlign: 'center', padding: 2, zIndex: 2 }}>
      <div style={{ marginTop: 40, color: 'white' }}>
        <img src={logo1} width={isDesktop ? 150 : 100} height={isDesktop ? 150 : 100} alt="Logo 1" />
        <img src={logo2} width={isDesktop ? 150 : 130} height={isDesktop ? 150 : 130} alt="Logo 2" />
        <img src={logo3} width={isDesktop ? 150 : 130} height={isDesktop ? 150 : 130} alt="Logo 3" />
        <img src={logo4} width={isDesktop ? 150 : 130} height={isDesktop ? 150 : 130} alt="Logo 4" />
        <img src={logo5} width={isDesktop ? 150 : 130} height={isDesktop ? 150 : 130} alt="Logo 5" />
        <img src={ISO} width={isDesktop ? 150 : 130} height={isDesktop ? 120 : 100} style={{ marginTop: '30px' }} alt="ISO Logo" />
      </div>
    </Box>
  </Box>
</Grid>

  {/* Kolom kanan untuk Lokasi */}
  <Grid item xs={12} md={6}>
    {/* Box untuk Typography "Lokasi Kami" di atas elemen utama */}
    <Box
      sx={{
        border: '2px solid orange',
        width: isDesktop ? '50%' : '87%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        marginBottom: 2,
        marginTop: '160px'
      }}
    >
      <Typography
        style={{
          fontSize: '50px',
          fontFamily: 'Roboto Slab, serif',
          color: 'orange',
          fontWeight: 'bolder',
        }}
      >
        Lokasi Kami
      </Typography>
    </Box>

    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Box sx={{ textAlign: 'center', width: '100%' }}>
        <Box sx={{ width: '100%', height: '500px', position: 'relative', overflow: 'hidden', borderRadius: '10px', marginTop: "40px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.804606110058!2d112.68640387582502!3d-7.263064871361731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fe98e5cfd91b%3A0xb0abc40d9731b273!2sJl.%20Satelit%20Utara%20IV%20No.29%2C%20Tanjungsari%2C%20Surabaya%2C%20Jawa%20Timur%2060187!5e0!3m2!1sen!2sid!4v1701221504919!5m2!1sen!2sid"
            width= {isDesktop ?  "60%" : "90%"} 
            height="60%"
            style={{ border: 'none', borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  </Grid>
</Grid>


<Box 
  sx={{ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: 'fit-content',
    mx: 'auto',
    marginTop: isDesktop ? '-100px' : '-200px'
  }}
>
  {/* Left Line */}
  <Box 
    sx={{
      width: '100px', // Adjust width of line as needed
      height: '2px',
      backgroundColor: 'orange', // Color of the line
      marginRight: '8px',
    }} 
  />

  {/* Left Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginRight: '8px',
    }} 
  />

  {/* LogoGunung */}
  <img 
    src={LogoGunung} 
    style={{ 
      width: isDesktop ? '100px' : '80px', 
      height: isDesktop ? '100px' : '80px',
    }} 
  />

  {/* Right Star */}
  <img 
    src={Star} 
    style={{ 
      width: isDesktop ? '40px'  : '30px', 
      height: '40px',
      marginLeft: '8px',
    }} 
  />

  {/* Right Line */}
  <Box 
    sx={{
      width: '100px', 
      height: '2px',
      backgroundColor: 'orange', 
      marginLeft: '8px',
    }} 
  />
</Box>

<div id='form'>
  <Form />
</div>





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
                    maxWidth: '100%',
                    width: '70px',
                    height: '70px',
                    position: 'fixed',
                    bottom: '20px',
                    right: !isDesktop ? '20px' : '20px',
                    zIndex: '999',
                    cursor: 'pointer', // Pastikan kursor berubah saat mouse berada di atas ikon
                    pointerEvents: 'auto' 
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

    </Layout>
    </>
  );
};
