import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar, IconButton, ListItem, ListItemText, Button, ListItemIcon, Menu, MenuItem, Container, Box } from '@mui/material';
import flagIndo from '../image/flag-indo.png';
import flagInggris from '../image/flag-inggris.png';
import flagChina from '../image/flag-china.png';
import flagArab from '../image/flag-arab.png';
import LogoGunung from '../image/logo-asam-jawa.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventIcon from '@mui/icons-material/Event';
import Countdown from "react-countdown";
import LanguageIcon from '@mui/icons-material/Language'; 
import { useAnimate, stagger, motion } from "framer-motion";
// import downloadIcon from "./assets/DOWNLOAD.svg";
// import forwardIcon from "./assets/FORWARD.svg";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false); 
  const theme = useTheme();
  const { t, i18n } = useTranslation("global");
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // const Completionist = () => <span>HUT RI ke 79</span>;

  // Date target (17 Agustus tahun ini)
  // const targetDate = new Date(new Date().getFullYear(), 7, 17);

  const handleClickOutside = (event) => {
    if (!scope.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (scope.current) {
      animate(
        scope.current.querySelectorAll("ul"),
        {
          width: open ? 70 : 0,
          height: open ? 100 : 0,
          opacity: open ? 1 : 0,
          position: 'absolute',
          top: '20px',
          left: '-60px',
          paddingTop: '20px',
          borderRadius: '10px'
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.4
        }
      );
      animate(
        scope.current.querySelectorAll("li"),
        open
          ? { opacity: 1, scale: 1, x: 0 }
          : { opacity: 0, scale: 0.3, x: 0 },
        {
          duration: 0.2,
          delay: open ? staggerList : 0
        }
      );
    }
  }, [open, animate, scope]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const languageMenu = (
    <Menu
      anchorEl={languageDropdownOpen}
      open={Boolean(languageDropdownOpen)}
      onClose={() => setLanguageDropdownOpen(false)}
      sx={{ mt: !isDesktop ? '-600px' && '-300px' : '-780px' }}
      anchorOrigin={{
        vertical: 'bottom', 
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem onClick={() => changeLanguage('en')}>
        <img src={flagInggris} style={{ height: 20, width: 35 }} />
        English
      </MenuItem>
      <MenuItem onClick={() => changeLanguage('id')}>
        <img src={flagIndo} style={{ height: 20, width: 35 }} />
        Indonesian
      </MenuItem>
      <MenuItem onClick={() => changeLanguage('ar')}>
        <img src={flagArab} style={{ height: 20, width: 30, paddingLeft: '4px', paddingRight: '3px' }} />
        Arabic
      </MenuItem>
      <MenuItem onClick={() => changeLanguage('zh')}>
        <img src={flagChina} style={{ height: 20, width: 20, paddingLeft: '8px', paddingRight: '7px' }} />
        Chinese
      </MenuItem>
    </Menu>
  );

  const navLinks = [
    { text: t("profil.text"), path: '/', icon: <AccountCircleIcon /> },
    { text: t("artikel-navbar.text"), path: '/artikel', icon: <ArticleIcon /> },
    { text: t("produk-navbar.text"), path: '/produk', icon: <ShoppingCartIcon /> },
    { text: t("event-navbar.text"), path: '/event', icon: <EventIcon /> },
  ];

  const [background, setBackground] = useState('rgba(255, 255, 255, 0)'); // Transparan awal

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Jika scroll lebih dari 50px, ubah background menjadi semi transparan
      if (scrollY > 50) {
        setBackground('rgba(255, 255, 255, 0.7)');
      } else {
        setBackground('rgba(255, 255, 255, 0)'); // Transparan saat di atas
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
 <Box 
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: background, // Menggunakan background dari state
          transition: 'background-color 0.3s ease', // Transisi halus
          boxShadow: 'none',
        }}
      >
  {/* Konten Logo */}
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={LogoGunung} alt="Logo" style={{ height: '50px', marginLeft: '16px' }} />
    <div className="logo-text-2">
      {t("big-title-1.text")} <span className="gunung-text">{t("big-title-2.text")}</span>
    </div>
  </div>

  {/* Judul Besar */}
  {!isMobile && (
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography
        id="title-header-1"
        style={{
          color: "rgb(204, 21, 21)",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        {t("asam-jawa.text")}
      </Typography>
      <Typography
        id="title-header"
        style={{
          color: "rgb(204, 21, 21)",
          fontSize: "40px",
          textAlign: "center",
          marginLeft: "10px",
        }}
      >
        {t("cap-gunung.text")}
      </Typography>
    </div>
  )}

        <Toolbar style={{ backgroundColor: 'transparent' }}>
          {isMobile ? (
            <div ref={scope} anchor="right">
              <div>
                <motion.button style={{ 
                  position: 'relative', 
                  left: '20px', 
                  border: 'none',
                  borderRadius: '20px' 
                  }}  
                  onClick={() => setOpen(!open)} 
                  whileTap={{ scale: 0.95 }}>
                  <MenuIcon style={{ color: 'gray', position: 'relative', top: '2px' }}/>
                </motion.button>
              </div>
              <div>
            <ul style={{
              listStyleType: 'none',
              display: 'flex', // Gunakan flexbox untuk menyusun tombol secara horizontal
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '-33px',
            }}>
              {navLinks.map((item, index) => (
               <Button
               id='menu-list'
               component={Link}
               to={item.path}
               onClick={() => setOpen(false)}
               sx={{
                 width: '120px', 
                 position: 'relative', 
                 marginTop: '10px',
                 display: 'flex', // Flexbox untuk pengaturan item dalam tombol
                 alignItems: 'center', // Menyusun elemen vertikal
                 justifyContent: 'center', // Menyusun konten horizontal
                 backgroundColor: 'orange', // Warna background tombol
                 marginRight: '20px',
                 borderRadius: '12px', // Border radius untuk efek rounded
                 padding: '8px 16px', // Padding agar tombol tidak terlalu kecil
                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Shadow untuk efek mendalam
                 transition: 'all 0.3s ease', // Transisi untuk efek smooth saat hover
                 '&:hover': {
                   backgroundColor: '#505050', // Warna saat hover
                   boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Shadow lebih besar saat hover
                   transform: 'scale(1.05)', // Membesarkan tombol sedikit saat hover
                 },
               }}
               key={index}
             >
               <motion.li style={{ color: 'white' }}>
                 {item.text}
               </motion.li>
             </Button>
              ))}
            </ul>
          </div>
            </div>
          ) : (
            <ul style={{
              listStyleType: 'none',
              display: 'flex', // Gunakan flexbox untuk menyusun tombol secara horizontal
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '20px'
            }}>
            { navLinks.map((navLink, index) => (
                <Button
                id='menu-list'
                component={Link}
                to={navLink.path}
                primary={navLink.text}
                disableRipple={false}
                sx={{
                  '& .MuiTypography-root': {
                    fontFamily: "'Fjalla One', sans-serif",
                    padding: 3,
                  },
                  marginRight: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  // transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transisi halus untuk efek glow
                  // boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)', // Shadow normal
          
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 0px 20px 8px rgba(255, 140, 0, 0.6)', // Shadow dan glow warna oranye saat hover
                  },
          
                  '&:active': {
                    boxShadow: '0px 0px 12px 6px rgba(255, 140, 0, 0.8)', // Efek shadow lebih intens saat ditekan
                  },
                }}
                key={index}
              >
               <motion.li style={{ color: 'black' }}>
                 {navLink.text}
               </motion.li>
              </Button>
            ))}
            </ul>
          )}

          <div style={{ marginLeft: '50px', display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => setLanguageDropdownOpen(true)}>
              <LanguageIcon style={{ color: 'black' }} />
            </IconButton>
            {languageMenu}
          </div>
        </Toolbar>
      </Box>  

    </>
  );
};

export default Navbar;
