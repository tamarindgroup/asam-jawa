import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import {
    Layout,
    Carousel,
  } from "antd";
import Lock from '../image/resep/lock.png';
import PromoEtoll from '../image/etoll.jpeg';
import Shopping from '../image/shopping2.png'; 
import LogoTokped from '../image/logo-tokped.png';
import Event1 from '../image/WhatsApp Image 2023-11-10 at 13.44.47.jpeg';
import Event2 from '../image/event-2.png';
import Event3 from '../image/event1.png';
import Event4 from '../image/event2.jpg';
import { Button, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Star from '../image/star.gif';
import Image3 from '../image/image-tamarind.png';
import ReactWhatsapp from 'react-whatsapp';
import { SiShopee } from "react-icons/si";
import VideoAsam100 from '../video/Asam100gr.mp4';
import VideoBahanBaku from '../video/bahan-baku-asam.mp4';
import VideoAsam500 from '../video/Asam500gr.mp4';
import IconWhatsapp from '../image/icon-whatsapp.png';
import LogoGunung from '../image/logo-asam-jawa.png';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import dataArtikel from "../data/artikel";
import { Card, Typography } from "antd";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { ThreeCircles } from 'react-loader-spinner';
import { useTranslation } from "react-i18next";
import Agen from '../image/Agen.png';
import Sales from '../image/Sales.png';  
import img1 from '../image/img-kanan-1.png';
import DownArrow from '../image/down-arrow.png';
import VideoEvent from '../video/video-event.mp4';
import AsamEvent from '../image/asam-event.jpg';



export const Event = () => {
  const [artikel, setArtikel] = useState(dataArtikel);
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const [showMore, setShowMore] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);
  const [linkLoading, setLinkLoading] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [showCall, setCall] = useState(false);
  const [showLogoTokopedia, setShowLogoTokopedia] = useState(false);


  const { Paragraph, Text } = Typography;
  const { t, i18n } = useTranslation("global");
  const theme = useTheme();


  const activeLanguage = i18n.language;

  const maxArtikel = 10;

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  

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

  const contentStyle = {
    height: isDesktop ? '600px' : "500px",
    width: '100%',
    lineHeight: "160px",
    textAlign: "center",
  };

  const flipAnimation = `
    @keyframes flip {
        0% { transform: rotateY(0); }
        50% { transform: rotateY(180deg); }
        100% { transform: rotateY(360deg); }
    }
`;

const [isUnlocked, setIsUnlocked] = useState(false);

    // Fungsi untuk membuka WhatsApp dengan pesan tertentu
    const openWhatsApp = () => {
        const whatsappNumber = '+6282160904267'; // Nomor WhatsApp
        const whatsappMessage = 'Hello, saya ingin membuka kunci.'; // Pesan untuk WhatsApp
        window.open(`https://api.whatsapp.com/send/?phone=6282160904267&text=Hello+selamat+datang%2C+apakah+yang+anda+ingin+tanya+%3F&type=phone_number&app_absent=0`, '_blank');
    };

  const resepElements = [];

// Lakukan iterasi dari Resep2 hingga Resep31 untuk membuat elemen Carousel untuk setiap resep
for (let i = 1; i <= 4; i++) {
  const resepImage = require(`../image/resep/resep-${i}.png`);
    // Tambahkan elemen resep
    resepElements.push(
        <div key={`resep-${i}`}>
            {i === 4 ? (
                <div style={{ position: 'relative' }}>
                <style>{flipAnimation}</style>
                <img src={resepImage} style={{ ...contentStyle, filter: 'blur(5px)' }} alt={`Resep ${i}`} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}>
                    <div 
                        style={{ 
                            width: '100px', 
                            height: '100px', 
                            animation: 'flip 2s infinite', 
                            animationTimingFunction: 'ease-in-out' 
                        }}
                        onClick={openWhatsApp} // Tambahkan onClick untuk membuka WhatsApp
                    >
                        <img src={Lock} style={{ width: '100%', height: '100%' }} alt="Lock" />
                    </div>
                    <p 
                        style={{ 
                            textAlign: 'center',  
                            borderRadius: '20px', 
                            color: 'gray', 
                            marginTop: '10px',
                            background: 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)',
                            height: '30px',
                            paddingTop: '4px',
                            fontWeight: 'bold',
                            fontFamily: 'courier' 
                        }}
                        onClick={openWhatsApp} // Tambahkan onClick untuk membuka WhatsApp
                    >
                        {isUnlocked ? 'Kunci Terbuka' : 'Buka Kunci'}
                    </p>
                </div>
            </div>
            ) : (
                <img src={resepImage} style={contentStyle} alt={`Resep ${i}`} />
            )}
        </div>
    );

}




// resepElements.push(
//   <div key="lock-slide">
//       <LockOutlined style={{ fontSize: '60px', color: 'gray' }} />
//   </div>
// );

  return (
    <>
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
        margin: !isDesktop ? 'auto' : 'auto'
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


<Grid container justifyContent="center" style={{ width: '100%', position: 'relative', height: isDesktop ? '900px' : '900px' }}>
  {/* Video Background */}
  <Grid item xs={12} style={{ height:'100%' }}>
    <video
      src={VideoEvent}
      autoPlay
      loop
      muted
      style={{
        width: '100%',
        height: '100%',     // Menyelaraskan tinggi video dengan kontainer Grid
        objectFit: 'cover', // Memastikan video menutupi seluruh area Grid
        display: 'block',
        filter: 'blur(5px)', // Efek blur
        opacity: 0.7,        // Transparansi untuk efek hitam
      }}
    />
  </Grid>

  {/* Overlay Gelap di Atas Video */}
  <Grid item xs={12} style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Lapisan hitam semi-transparan
  }} />

  {/* Teks "Event" di Tengah */}
  <Grid item xs={12} style={{
    position: 'absolute',
    top: isDesktop ? 0 : '-120px',
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column', // Menyusun elemen secara vertikal
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', // Menyelaraskan teks ke tengah
  }}>
    <Typography
      style={{
        fontSize: '64px',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '0 0 10px rgba(255, 158, 0, 0.8), 0 0 20px rgba(255, 158, 0, 0.6), 0 0 30px rgba(255, 158, 0, 0.4)',
        marginBottom: '20px', // Memberikan jarak antara judul dan deskripsi
      }}
    >
      Event
    </Typography>
    <Typography
      id="text-event"
      style={{
        fontSize: '20px', // Ukuran font untuk deskripsi
        color: 'white',   // Warna teks putih
        maxWidth: '800px', // Membatasi lebar teks agar tidak terlalu lebar
      }}
    >
      Menampilkan berbagai acara kuliner dan rempah, seperti festival makanan, workshop masak, dan pameran rempah, yang mengangkat kekayaan rasa dan manfaat bahan alami.
    </Typography>

    {/* Tanda Panah */}
    <Grid item style={{
      marginTop: '30px', // Jarak antara deskripsi dan panah
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Warna latar belakang semi-transparan
      borderRadius: '50%', // Membuat bingkai bulat
      padding: '10px',
      border: '1px solid white',
      backdropFilter: 'blur(10px)', // Efek blur untuk memberikan kesan kaca
      WebkitBackdropFilter: 'blur(10px)', // Menambahkan dukungan untuk Safari
    }}>
      <a
        href="#event"
        onClick={(e) => {
          e.preventDefault(); // Mencegah default action dari link
          document.getElementById("event").scrollIntoView({ behavior: 'smooth' }); // Scroll ke elemen dengan ID "next-section"
        }}
        style={{
          display: 'block',
          textAlign: 'center',
        }}
      >
        <img 
          src={DownArrow} 
          alt="Down Arrow" 
          style={{
            width: '40px', // Ukuran panah
            height: '40px', // Menjaga ukuran panah tetap konsisten
            display: 'block',
            margin: '0 auto', // Menyelaraskan gambar ke tengah
          }} 
        />
      </a>
    </Grid>
  </Grid>
</Grid>


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



     {isDesktop ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column', // Membuat elemen berada secara vertikal
          justifyContent: 'center',
          alignItems: 'center',
          height: isDesktop ? '1250px' : '900px', // Memastikan elemen terpusat secara vertikal di layar penuh
          width: '100%',
          marginTop: isDesktop ? '20px' : '600px'
        }}>
          {/* Grid pertama di tengah */}
          <Grid 
          container
          style={{
            width: '80%', 
            height: isDesktop ? '1200px' : '600px', // Sesuaikan tinggi jika mobile
            justifyContent: 'center', 
            alignItems: 'center',
            display: isDesktop ? 0 : 'flex'
          }}
        >
          {/* Bagian Kiri dengan Latar Belakang Orange */}
          <Grid 
            item 
            xs={isDesktop ? 4 : 12} // Isi seluruh lebar jika mobile
            style={{
              backgroundColor: 'orange',
              height: isDesktop ? '100%' : 'auto', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              width: isDesktop ? '100%' : '100%' 
            }}
          >
            <div style={{  
              width: isDesktop ? '100%' : '90%', 
              height: isDesktop ? '500px' : '100%', 
              marginTop: isDesktop ? '-100px' : '0px', 
            }}>
              <Carousel autoplay speed={100}>
                {/* <div>
                  <img src={Event3} style={contentStyle} alt="Carousel 2" />
                </div> */}
                <div>
                  <img src={Event4} style={contentStyle} alt="Carousel 2" />
                </div>
                <div>
                  <img src={Event1} style={contentStyle} alt="Carousel 1" />
                </div>
                {/* <div>
                  <img src={PromoEtoll} style={contentStyle} alt="Carousel 1" />
                </div> */}
                <div>
                  <img src={Event2} style={contentStyle} alt="Carousel 2" />
                </div>
              </Carousel>
            </div>
          </Grid>

          {/* Bagian Kanan dengan Latar Belakang Kaca (Efek Blur) */}
          <Grid 
            item 
            xs={isDesktop ? 6 : 12} // Isi seluruh lebar jika mobile
            style={{
              position: 'relative', 
              height: isDesktop ? '100%' : 'auto', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              boxShadow: '0px 4px 10px rgba(255, 165, 0, 0.6)',
              width: '100%',
              marginTop: isDesktop ? '0px' : '20px' // Beri jarak di mobile
            }}
          >
            {/* Overlay Buram */}
            <div style={{
              position: isDesktop ? 'absolute' : 'relative',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${img1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)',
              zIndex: -1,
            }}></div>

            {/* Konten Typography */}
            <Typography 
              id="text-event-card" 
              style={{
                color: 'gray',
                textAlign: 'center',
                fontSize: isDesktop ? '20px' : '15px',
                width: isDesktop ? '600px' : '700px',
              }}
            >
              Bergabunglah dalam event-event seru kami dan rasakan manfaat serta kelezatan dari asam jawa, 
              bahan alami yang kaya manfaat! Dari resep kreatif hingga informasi kesehatan yang bermanfaat, 
              setiap acara kami dirancang untuk memperkenalkan kekayaan tradisional Indonesia dalam setiap rasa dan manfaat. 
              Jangan lewatkan kesempatan untuk menjadi bagian dari perjalanan ini—daftarkan diri Anda sekarang dan nikmati 
              pengalaman luar biasa!
            </Typography>
          </Grid>
        </Grid>



            {/* Grid kedua di bawah Grid pertama */}
            
            <Grid container 
              style={{
                width: isDesktop ? '80%' : "100%", 
                height: isDesktop ? '900px' : '600px', 
                marginTop: isDesktop ? '50px' : '300px', // Memberikan jarak antara Grid pertama dan kedua
                justifyContent: 'center', 
                alignItems: 'center',
                display : isDesktop ? 0 : 'flex',
                flexDirection: isDesktop ? 0 : 'column',
              }}>
              {/* Bagian Kanan dengan Latar Belakang Orange */}
              <Grid item xs={4} style={{
                backgroundColor: 'orange',
                height: '100%',
              }}>
                <Carousel>
                  {resepElements}
                </Carousel>
              </Grid>

              {/* Bagian Kiri dengan Latar Belakang Kaca (Efek Blur) */}
              <Grid item xs={6} style={{
                position: 'relative', // Mengatur posisi relatif untuk penggunaan overlay
                height: isDesktop ? '100%' : '60%',
                display: 'flex', // Menjadikan Grid sebagai flex container
                justifyContent: 'center', // Menyusun konten secara horizontal di tengah
                alignItems: 'center', // Menyusun konten secara vertikal di tengah
                boxShadow: '0px 4px 10px rgba(255, 165, 0, 0.6)', // Bayangan oranye
                width: isDesktop ? 0 : '700px'
              }}>
                {/* Overlay Buram */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${img1})`, // Gambar latar
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(2px)', // Efek buram
                  zIndex: -1, // Membuat overlay berada di belakang konten
                }}></div>

                {/* Konten Typography */}
                <Typography id="text-event-card" style={{
                  color: 'gray',
                  textAlign: 'center',
                  fontSize: isDesktop ? '20px' : '15px',
                  width: '600px',
                  
                }}>
                  Acara spesial ini mengajak Anda untuk mengeksplorasi kelezatan dan keunikan resep-resep 
                  tradisional serta modern yang berbahan dasar asam jawa. Setiap resep dirancang untuk 
                  menginspirasi dan memberikan pengalaman rasa yang tak terlupakan, memperkenalkan cara baru 
                  dan kreatif dalam menggunakan asam jawa, dari hidangan pembuka hingga penutup. Bergabunglah 
                  dengan kami untuk belajar langsung dari para ahli, mengeksplorasi cita rasa khas Indonesia, 
                  dan temukan rahasia di balik manfaat kesehatan asam jawa yang telah dikenal sejak lama. 
                  Jangan lewatkan kesempatan untuk memperkaya wawasan kuliner Anda dan menciptakan hidangan istimewa dari bahan yang kaya manfaat ini!
                </Typography>
              </Grid>

            </Grid>
          </div>
     ) : (
      <>

        <div id="event" style={{  
          width: '100%', 
          height: '500px', 
          marginTop: '50px', 
        }}>
          <Box style={{
            position: 'relative', // Agar overlay berada di atas gambar latar
            backgroundImage: `url(${AsamEvent})`, // Gambar latar
            backgroundSize: 'cover', // Menutup seluruh area Box dengan gambar
            backgroundPosition: 'center', // Menempatkan gambar di tengah
            padding: '20px', // Memberikan jarak antara teks dan sisi Box
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Bayangan di sekitar Box
            overflow: 'hidden', // Menyembunyikan bagian luar radius
          }}>

            {/* Overlay Buram */}
            <div style={{
              position: 'absolute', // Agar overlay berada di atas gambar latar
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Warna putih transparan untuk memberi efek kabur
              filter: 'blur(8px)', // Efek blur untuk latar belakang
              zIndex: 1, // Menempatkan overlay di belakang konten teks
            }}></div>

            {/* Teks */}
            <Typography style={{
              textAlign: 'center',
              fontSize: '40px',
              color: 'white',
              fontWeight: 800,
              textShadow: '2px 2px 5px #D2691E', // Shadow warna kulit asam jawa
              position: 'relative', // Pastikan teks berada di atas overlay
              zIndex: 1, // Menempatkan teks di atas overlay
            }}>
              Event Bervariasi
            </Typography>

          </Box>



          <Carousel style={{ marginTop: 0 }} autoplay speed={100}>
            <div>
              <img src={Event3} style={contentStyle} alt="Carousel 2" />
            </div>
            <div>
              <img src={Event4} style={contentStyle} alt="Carousel 2" />
            </div>
            <div>
              <img src={Event1} style={contentStyle} alt="Carousel 1" />
            </div>
            <div>
              <img src={PromoEtoll} style={contentStyle} alt="Carousel 1" />
            </div>
            <div>
              <img src={Event2} style={contentStyle} alt="Carousel 2" />
            </div>
          </Carousel>
        </div>



        <div style={{  
          width: '100%', 
          height: '500px', 
          marginTop: '200px', 
        }}>
               <Box style={{
                position: 'relative', // Agar overlay berada di atas gambar latar
                backgroundImage: `url(${AsamEvent})`, // Gambar latar
                backgroundSize: 'cover', // Menutup seluruh area Box dengan gambar
                backgroundPosition: 'center', // Menempatkan gambar di tengah
                padding: '20px', // Memberikan jarak antara teks dan sisi Box
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Bayangan di sekitar Box
                overflow: 'hidden', // Menyembunyikan bagian luar radius
              }}>

                {/* Overlay Buram */}
                <div style={{
                  position: 'absolute', // Agar overlay berada di atas gambar latar
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Warna putih transparan untuk memberi efek kabur
                  filter: 'blur(8px)', // Efek blur untuk latar belakang
                  zIndex: 1, // Menempatkan overlay di belakang konten teks
                }}></div>

                {/* Teks */}
                <Typography style={{
                  textAlign: 'center',
                  fontSize: '40px',
                  color: 'white',
                  fontWeight: 800,
                  textShadow: '2px 2px 5px #D2691E', // Shadow warna kulit asam jawa
                  position: 'relative', // Pastikan teks berada di atas overlay
                  zIndex: 1, // Menempatkan teks di atas overlay
                }}>
                  Event Kuliner
                </Typography>

              </Box>
            <Carousel style={{ height: '500px', marginTop: 0 }}>
              {resepElements}
            </Carousel>
          </div>
      </>
     )}
        

            
          {/* {isDesktop ? (
          <div id="event" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{  
            width: isDesktop ? '30%' : '90%', 
            margin: 'auto', 
            marginTop: isDesktop ? '200px' : '-70px'
            }}>
            <Carousel autoplay speed={100}>
            <div>
                <img src={Event3} style={contentStyle} alt="Carousel 2" />
            </div>
            <div>
                <img src={Event4} style={contentStyle} alt="Carousel 2" />
            </div>
            <div>
                <img src={Event1} style={contentStyle} alt="Carousel 1" />
            </div>
            <div>
                <img src={PromoEtoll} style={contentStyle} alt="Carousel 1" />
            </div>
            <div>
                <img src={Event2} style={contentStyle} alt="Carousel 2" />
            </div>
            <div>
                <video 
                 style={contentStyle} 
                 controls
                 >
                  <source src={VideoAsam100} type="video/mp4"  />
                </video>
            </div>
            <div>
                <video 
                 style={contentStyle} 
                 controls
                 >
                  <source src={VideoBahanBaku} type="video/mp4"  />
                </video>
            </div>
            <div>
                <video 
                 style={contentStyle} 
                 controls
                 >
                  <source src={VideoAsam500} type="video/mp4"  />
                </video>
            </div>
            </Carousel>
            </div>
            <div style={{  
            width: isDesktop ? '30%' : '90%', 
            margin: 'auto', 
            marginTop: isDesktop ? '200px' : '-70px'
            }}>
            <Carousel style={{ marginTop: isDesktop ? "0px" : "100px" }}>
             {resepElements}
            </Carousel>
          </div>
          </div>
          ) : (
            <>
            <div style={{  
              width: isDesktop ? '30%' : '90%', 
              margin: 'auto', 
              marginTop: isDesktop ? '-100px' : '-70px'
              }}>
              <Carousel autoplay speed={100}>
              <div>
                <img src={Event3} style={contentStyle} alt="Carousel 2" />
            </div>
            <div>
                <img src={Event4} style={contentStyle} alt="Carousel 2" />
            </div>
              <div>
                  <img src={Event1} style={contentStyle} alt="Carousel 1" />
              </div>
              <div>
                  <img src={PromoEtoll} style={contentStyle} alt="Carousel 1" />
              </div>
              <div>
                  <img src={Event2} style={contentStyle} alt="Carousel 2" />
              </div>
              
              <div>
                  <video 
                   style={contentStyle} 
                   controls
                   >
                    <source src={VideoAsam100} type="video/mp4"  />
                  </video>
              </div>
              <div>
                <video 
                 style={contentStyle} 
                 controls
                 >
                  <source src={VideoBahanBaku} type="video/mp4"  />
                </video>
            </div>
              <div>
                  <video 
                   style={contentStyle} 
                   controls
                   >
                    <source src={VideoAsam500} type="video/mp4"  />
                  </video>
              </div>
              </Carousel>
              <Carousel style={{ marginTop: isDesktop ? "0px" : "100px" }}>
               {resepElements}
              </Carousel>
            </div>
            </>
          )} */}




          {/* {isDesktop ? (
  <div
    style={{
      background: 'rgb(255, 177, 76)',
      height: '200px',
      width: '1000px',
      borderTopLeftRadius: '200px',
      borderBottomLeftRadius: '200px',
      marginTop: '100px',
      float: 'right',
      animation: 'rollLeft 2s infinite',
    }}
  >
    <Typography style={{
      width: '900px',
      color: 'white',
      paddingTop: '40px',
      paddingLeft: '130px',
      fontSize: '20px',
      fontFamily: 'Roboto Mono, monospace',
    }}>
      {t("list-event-2.text")}
    </Typography>
  </div>
) : (
  <div
    style={{
      // marginBottom: '700px',
      background: 'rgb(255, 177, 76)',
      height: '100px',
      width: '350px',
      borderTopLeftRadius: '200px',
      borderBottomLeftRadius: '200px',
      marginTop: '40px',
      float: 'right',
      animation: 'rollLeft 2s infinite',
    }}
  >
    <Typography style={{
      width: '330px',
      color: 'white',
      paddingTop: '20px',
      paddingLeft: '40px',
      fontSize: '10px',
      // fontFamily: 'Roboto Mono, monospace',
    }}>
      {t("list-event-2.text")}
    </Typography>
  </div>
)} */}





          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              width: '80%',
              margin: '0 auto',
              marginTop: !isDesktop ? '-190px' : 0,
            }}
          >


            
          </div> */}


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
          marginTop: isDesktop ? '150px' : '200px'
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
