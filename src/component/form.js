import React, {useState, useRef} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import emailjs from '@emailjs/browser';
import FormBackground from '../image/background-form2.jpg.png';
import { Card, Typography, message } from "antd";
import { Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";  
import { Divider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageBody from '../image/image--body.png';
import { useTheme } from '@mui/material/styles';
import LogoGunung from '../image/logo-asam-jawa.png';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import { ThreeCircles } from 'react-loader-spinner';
import TextArea from 'antd/es/input/TextArea';
import { FormControl, FormGroup, TextField } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";


export const Form = () => {

    const theme = useTheme();
    const formData = useRef();
    const [isRinging, setIsRinging] = useState(false);
    const { t, i18n } = useTranslation("global");
    const [isLoading, setIsLoading] = useState(false);
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [kota, setKota] = useState([]);
    const [telepon, setTelepon] = useState('');
    const [detail, setDetail] = useState('');
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';


    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });

      const sendEmail = (e) => {
        e.preventDefault();
        // Set isLoading to true when sending the email
        setIsLoading(true);
      
        // Validate the form before sending the email
        const isValid = validateForm();
      
        if (isValid) {
          emailjs
            .sendForm('service_3ukh7m5', 'template_jk10byr', formData.current, '6l0tizyMRcFgGbKIg')
            .then((result) => {
              console.log(result.text);
              // Reset the form
              e.target.reset();
              // Move the openMessage call here
              openMessage();
            })
            .catch((error) => {
              console.log(error.text);
              // Set isLoading to false when there is an error
              setIsLoading(false);
            })
            .finally(() => {
              // Set isLoading to false when the email sending is complete (whether success or error)
              setIsLoading(false);
            });
        } else {
          // Set isLoading to false when the form is not valid
          setIsLoading(false);
        }
      };

      const openMessage = () => {
        if (validateForm()) {
            messageApi.open({
              key,
              type: 'loading',
              content: 'Loading...',
            });
            setTimeout(() => {
              messageApi.success('Pesan Anda Terkirim', 2);
              setTimeout(() => {
                window.location.replace('/');
              }, 1000);
            }, 3000);
          }
      };

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

      const [error, setError] = useState({
        nama: "",
        email: "",
        telepon: "",
        kota: "",
        detail: ""
      })

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


    return (
        <>

<Grid
  justifyContent="center"
  alignItems="center"
  style={{ height: '100%', marginBottom: isDesktop ? '300px' : 0, marginTop: '30px' }}
>
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        background: `url(${ isDesktop ? FormBackground : ImageBody}) center center / cover`,
        position: "relative",
        height: isDesktop ? "700px" : "1500px",
        width: isDesktop ? '70%' : '90%',
        display: isDesktop ? "flex" : "block",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        padding: 2,
      }}
    >
      {/* Kolom Kiri */}
      <Box sx={{ marginRight: isDesktop ? '40px' : 0, marginTop: isDesktop ? 0 : 0 }}>
        <Typography
          style={{
            textAlign: "center",
            paddingBottom: 20,
            fontSize: isDesktop ? "50px" : '30px',
            fontFamily: "Roboto Slab, serif",
          }}
        >
          Ayo Segera Dapatkan !
        </Typography>
        <Typography id="deskripsi-form" style={{ width: isDesktop ? '500px' : '300px', fontSize: isDesktop ? '17px' : '13px' }}>
          Asam jawa pilihan kami bukan hanya sekadar bumbu dapur, tetapi juga bahan alami yang penuh manfaat. 
          Dikenal dengan rasa asam yang unik, asam jawa kami dapat meningkatkan cita rasa masakan Anda, 
          memperkaya minuman tradisional, atau digunakan dalam berbagai produk kesehatan. Dengan proses seleksi yang ketat, 
          kami pastikan hanya produk terbaik yang sampai ke tangan Anda. Dapatkan asam jawa berkualitas dengan harga terjangkau, 
          dan nikmati kemudahan dalam berbelanja hanya dengan sekali klik! Jangan sampai kehabisan, segera pesan sekarang dan rasakan keuntungannya!
        </Typography>
      </Box>

      {/* Kolom Kanan */}
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: isDesktop ? '30%' : "40%",
          marginLeft: isDesktop ? '40px' : '100px', // Menambahkan jarak ke kolom kanan
          marginTop: isDesktop ? 0 : 10, 
        }}>
        <form ref={formData} onSubmit={sendEmail}>
          <Typography
            style={{
              textAlign: "center",
              paddingBottom: 20,
              fontSize: "50px",
              fontFamily: "Roboto Slab, serif",
              width: isDesktop ? 350 : 320
            }}
          >
            {t("lengkapi.text")}
          </Typography>
          <TextField
            style={{
              width: "100%", // Disesuaikan agar semua elemen memiliki lebar yang sama
              marginBottom: 16,
            }}
            id="outlined-name-input"
            label={t("nama.text")}
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            type="text"
            autoComplete="current-name"
          />
          {error.nama && <div style={{ color: "red" }}>{error.nama}</div>}

          <TextField
            style={{
              width: "100%",
              marginBottom: 16,
            }}
            id="outlined-email-input"
            label={t("email.text")}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="current-email"
          />
          {error.email && <div style={{ color: "red" }}>{error.email}</div>}

          <TextField
            style={{
              width: "100%",
              marginBottom: 16,
            }}
            id="outlined-number-input"
            label={t("nomor.text")}
            type="number"
            name="telepon"
            value={telepon}
            onChange={(e) => setTelepon(e.target.value)}
            autoComplete="current-number"
          />
          {error.telepon && <div style={{ color: "red" }}>{error.telepon}</div>}

          <TextField
            style={{
              width: "100%",
              marginBottom: 16,
            }}
            id="outlined-number-input"
            label={t("kota.text")}
            type="text"
            name="kota"
            value={kota}
            onChange={(e) => setKota(e.target.value)}
            autoComplete="current-number"
          />
          {error.kota && <div style={{ color: "red" }}>{error.kota}</div>}

          <TextArea
            placeholder={t("pesan.text")}
            style={{
              marginTop: "20px",
              marginBottom: "16px",
              height: "100px",
              width: "100%",
            }}
            name="detail"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          {error.detail && <div style={{ color: "red" }}>{error.detail}</div>}

          {contextHolder}

          <Button
            onClick={openMessage}
            id="submit-data"
            type="submit"
            style={{
              width: "100%",
              color: "white",
              backgroundColor: "#a8c9a6",
              fontFamily: "sans-serif",
            }}
          >
            {t("kirim.text")}
          </Button>
        </form>
      </Box>
    </Box>
  </Grid>
</Grid>


        </>
    )
}