import { useEffect, useState, useRef } from "react";
import { Menu, Dropdown, Empty, Layout } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { Facebook, Instagram, Label, Twitter, YouTube } from "@mui/icons-material";
import { Card, Tooltip, Typography, Image } from "antd";
import { useTheme } from "@mui/material/styles";
import { Button, Container } from "@mui/material";
import { ThreeCircles } from 'react-loader-spinner';
import { PulseLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import { CaretDownOutlined } from '@ant-design/icons';
import Shopping from '../image/shopping2.png'; 
import dataProduk from "../data/produk.js";
import ReactSearchBox from "react-search-box";
import Icon from "@mui/material/Icon";
import ReactWhatsapp from "react-whatsapp";
import { SiShopee } from "react-icons/si";
import LogoTokped from '../image/logo-tokped.png';
import IconWhatsapp from "../image/icon-whatsapp.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./styles";
import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LogoGunung from "../image/logo-asam-jawa.png";
import "react-spinner-animated/dist/index.css";
import Ramadhan from '../image/ramadhan-asam-jawa.gif';
import Agen from '../image/Agen.png';
import ImageBody from '../image/image--body.png';
import Sales from '../image/Sales.png';
import Star from '../image/star.gif';
import Image3 from '../image/image-tamarind.png';
import Produk1 from '../image/image-produk-1.png';
import Produk2 from '../image/image-produk-2.png';
import Produk3 from '../image/image-produk-3.png';
import Produk4 from '../image/image-produk-4.png';


export const Produk = () => {
  const { t, i18n } = useTranslation("global")
  const activeLanguage = i18n.language;
  const [data, setData] = useState([]);
  console.log('data', data);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showMore, setShowMore] = useState(6);
  const [isCardFlipped, setIsCardFlipped] = useState(
    data.map(() => false)
  );
  const [displayedProductIds, setDisplayedProductIds] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [isLoading, setIsLoading] = useState(true);
  const { Link, Paragraph, Text } = Typography;
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRinging, setIsRinging] = useState(false);
  const [sortBy, setSortBy] = useState("asc");
  const [showCall, setCall] = useState(false);
  const { Meta } = Card;
  const theme = useTheme();
  const [showLogoTokopedia, setShowLogoTokopedia] = useState(false);

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [isShopeeVisible, setShopeeVisible] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsRinging(true);
      } else {
        setIsRinging(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 15000);
  }, []);

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      try {
        const startIdx = showMore;
        const endIdx = startIdx + 3;
        const newProducts = dataProduk.slice(startIdx, endIdx);
  
        const filteredData = newProducts.filter((item) => {
          const productId = item._id;
          return (
            !displayedProductIds.has(productId) &&
            (selectedCategory === "Semua" ||
              item[activeLanguage].kategori.toLowerCase() ===
                selectedCategory.toLowerCase())
          );
        });
  
        // Perbarui state data dan tambahkan ID produk ke dalam Set
        setData((prevData) => {
          const updatedData = [...prevData, ...filteredData];
          setDisplayedProductIds((prevIds) => new Set([...prevIds, ...filteredData.map((item) => item._id)]));
          return updatedData;
        });
  
        setShowMore(endIdx);
      } catch (error) {
        console.error("Error loading more data:", error);
      } finally {
        setLoadingMore(false);
      }
    }, 1000);
  };

  const menu = (
    <Menu onClick={({ key }) => setSelectedCategory(key)}>
      <Menu.Item key="Semua" id="hover-menu">
        {t("list-kategori-1.text")}
      </Menu.Item>
      <Menu.Item key="Biji" id="hover-menu">
      {t("list-kategori-2.text")}
      </Menu.Item>
      <Menu.Item key="Daging" id="hover-menu">
      {t("list-kategori-3.text")}
      </Menu.Item>
      <Menu.Item key="Baru" id="hover-menu">
      {t("new.text")}
      </Menu.Item>
      {/* <Menu.Item key="Bahan-Baku" id="hover-menu">
      {t("list-kategori-4.text")}
      </Menu.Item> */}
      {/* <Menu.SubMenu title={t("rempah.text")}  onClick={({ key }) => setSelectedCategory(key)}>
        <Menu.Item key="Kemiri" id="hover-menu">
        {t("kemiri.text")}
        </Menu.Item>
        <Menu.Item key="Kayu Manis" id="hover-menu">
        {t("kayu-manis.text")}
        </Menu.Item>
        <Menu.Item key="Kerupuk" id="hover-menu">
        {t("kerupuk.text")}
        </Menu.Item>
      </Menu.SubMenu> */}
    </Menu>
  );
  

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  const cardActions = [
    <div style={styles.actions}>
      <Tooltip placement="top" title="Like" color="magenta">
        <HeartTwoTone twoToneColor="magenta" />
      </Tooltip>
    </div>,
    <Tooltip placement="top" title="Edit"></Tooltip>,
    <Tooltip placement="top" title="Delete" color="red"></Tooltip>,
  ];

  useEffect(() => {
    let loadingTimeout;

    const getProduk = async () => {
      try {
        setData(dataProduk);
        setDataLoaded(true);
      } catch (err) {
        console.error("Error loading data:", err);
        setDataLoaded(true);
      }
    };

    loadingTimeout = setTimeout(() => {
      getProduk()
        .then(() => {
          const searchData = data.map((e) => ({
            key: e._id,
            value: e[activeLanguage].nama,
          }));
          setSearchResults(searchData);
        })
        .catch((err) => {
          setData(err.message);
        })
        .finally(() => {
          setIsLoadingData(false);
        });
    }, 2000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [selectedCategory]);

  const filteredAndSortedData = data
    .filter((e) => {
      if (selectedCategory === "Semua") {
        return  e[activeLanguage].kategori.toLowerCase() !== "bahan-baku" 
        // return e.kategori.toLowerCase() !== "bahan-baku";
      } else {
        return (
          e[activeLanguage].kategori.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
    })
    // .filter((item) => item[activeLanguage].brand && item[activeLanguage].brand.toLowerCase() === "gunung")
    // .filter((e) => e[activeLanguage].nama && e[activeLanguage].kategori)
    .filter((e) =>
      e[activeLanguage].nama.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const hasBrandGunungA = a[activeLanguage].brand && a[activeLanguage].brand.toLowerCase() === "gunung";
      const hasBrandGunungB = b[activeLanguage].brand && b[activeLanguage].brand.toLowerCase() === "gunung";

      if (hasBrandGunungA && !hasBrandGunungB) {
        return -1;
      } else if (!hasBrandGunungA && hasBrandGunungB) {
        return 1;
      } else {
      if (
        selectedCategory === "Semua" ||
        selectedCategory === "Daging" ||
        selectedCategory === "Biji" ||
        selectedCategory === "Baru" ||
        selectedCategory === "Kemiri" ||
        selectedCategory === "Kayu Manis" ||
        selectedCategory === "Kerupuk"
      ) {
        if (a[activeLanguage].kategori.toLowerCase() < b[activeLanguage].kategori.toLowerCase())
          return -1;
        if (a[activeLanguage].kategori.toLowerCase() > b[activeLanguage].kategori.toLowerCase())
          return 1;

        if (a[activeLanguage].ukuran && b[activeLanguage].ukuran) {
          return a[activeLanguage].ukuran - b[activeLanguage].ukuran;
        } else {
          return a[activeLanguage].nama
            .toLowerCase()
            .localeCompare(b[activeLanguage].nama.toLowerCase());
        }
      } else if (sortBy === "bahan-baku") {
        if (
          a[activeLanguage].kategori.toLowerCase() === "bahan-baku" &&
          b[activeLanguage].kategori.toLowerCase() !== "bahan-baku"
        ) {
          return -1;
        } else if (
          a[activeLanguage].kategori.toLowerCase() !== "bahan-baku" &&
          b[activeLanguage].kategori.toLowerCase() === "bahan-baku"
        ) {
          return 1;
        } else {
          return a[activeLanguage].kategori
            .toLowerCase()
            .localeCompare(b[activeLanguage].kategori.toLowerCase());
        }
      }
      return 0;
    }});

  const shouldRenderLoadMoreButton =
    !isLoadingMore && showMore < filteredAndSortedData.length;

  const toggleCardFlip = (index) => {
    const updatedIsCardFlipped = [...isCardFlipped];
    updatedIsCardFlipped[index] = !updatedIsCardFlipped[index];
    setIsCardFlipped(updatedIsCardFlipped);
  };

  return (
    <>
      {/* <img src={logonewYear} style={{ width: isDesktop ? '30%' : '50%', top: !isDesktop ? '350px' : '400px', margin: isDesktop ? 'auto' : 'auto', position: 'relative', left: isDesktop ? '650px' : '100px' }}  />  */}

      {/* <div style={{ display: 'flex', top: !isDesktop ? '150px' : '100px', position: 'relative', marginBottom: isDesktop ? '300px' : '300px' }}>
      <img src={Waisak} style={{ width: isDesktop ? '30%' : '80%', margin: !isDesktop ? 'auto' : 'auto', borderRadius: '20px' }}  /> 
      </div> */}

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


<Layout 
      className='layout' 
      style={{
        background: 'radial-gradient(circle, white, rgba(255, 158, 0, 0.2), white)', /* Gradien oranye */
        backgroundImage: ImageBody, /* Tekstur batu semi-transparan */
        backgroundBlendMode: 'overlay'
      }}
    >  

<Grid justifyContent="center" alignItems="center" spacing={4} style={{ marginTop: '100px', width:  '100%' }}>
<Typography id="text-header-produk" style={{ fontSize: '50px', textAlign: 'center' }}>
  Daftar Produk
</Typography>
</Grid>


<Grid container spacing={4} style={{ marginTop: '20px' }}>
  {/* Tulisan "Produk Terbaik" di kiri */}
  <Grid item xs={2} container alignItems="center" justifyContent="center">
        <Typography 
        id="text-header-kiri-kanan" 
        style={{
          writingMode: 'vertical-rl',
          color: 'rgba(255, 158, 0, 0.8)',
          fontSize: '50px',
          position: 'relative', // Membutuhkan posisi relatif untuk pseudo-element
          overflow: isDesktop ? 'hidden' : 'visible', // Untuk memastikan efek tidak melewati batas teks
          left: isDesktop ?  0 : '40px'
        }}
      >
        Produk Terbaik
      </Typography>
  </Grid>

  {/* Container untuk semua produk */}
  <Grid item xs={8} container direction="column" spacing={4}>
  {/* Row 1: Produk1 and Produk2 */}
  <Grid item container justifyContent="center" spacing={4}>
    <Grid item md={3}>
      <img src={Produk1} style={{
        width: isDesktop ? "250px" : '150px',
        height: isDesktop ? '300px' : '180px',
        borderRadius: '15px',
        border: '5px solid rgba(255, 158, 0, 0.8)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        padding: '10px',
        backgroundColor: 'white',
        animation: 'jump 1s infinite',
        animationDelay: '0s',
        transition: 'transform 0.6s', // Tambahkan transisi untuk flip
      }} 
      className="flip-on-hover"
      />
    </Grid>
    <Grid item>
      <img src={Produk2} style={{
        width: isDesktop ? "250px" : '150px',
        height: isDesktop ? '300px' : '180px',
        borderRadius: '15px',
        border: '5px solid rgba(255, 158, 0, 0.8)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        padding: '10px',
        backgroundColor: 'white',
        animation: 'jump 1s infinite',
        animationDelay: '1s',
        transition: 'transform 0.6s',
      }} 
      className="flip-on-hover"
      />
    </Grid>
  </Grid>

  {/* Row 2: Produk3 and Produk4 */}
  <Grid item container justifyContent="center" spacing={4} style={{ marginTop: '20px' }}>
    <Grid item md={3}>
      <img src={Produk3} style={{
        width: isDesktop ? "250px" : '150px',
        height: isDesktop ? '300px' : '180px',
        borderRadius: '15px',
        border: '5px solid rgba(255, 158, 0, 0.8)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        padding: '10px',
        backgroundColor: 'white',
        animation: 'jump 1s infinite',
        animationDelay: '2s',
        transition: 'transform 0.6s',
      }} 
      className="flip-on-hover"
      />
    </Grid>
    <Grid item>
      <img src={Produk4} style={{
        width: isDesktop ? "270px" : '150px',
        height: isDesktop ? '300px' : '180px',
        borderRadius: '15px',
        border: '5px solid rgba(255, 158, 0, 0.8)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        padding: '10px',
        backgroundColor: 'white',
        animation: 'jump 1s infinite',
        animationDelay: '3s',
        transition: 'transform 0.6s',
      }} 
      className="flip-on-hover"
      />
    </Grid>
  </Grid>
</Grid>

  {/* Tulisan "Produk Terbaik" di kanan */}
  <Grid item xs={2} container alignItems="center" justifyContent="center">
    <Typography id="text-header-kiri-kanan" style={{
      writingMode: 'vertical-rl',
      color: 'rgba(255, 158, 0, 0.8)',
      fontSize: '50px',
      right: isDesktop ? 0 : '40px'
    }}>
      Produk Terbaik
    </Typography>
  </Grid>
</Grid>



      <Grid container justifyContent="center" alignItems="center" spacing={isDesktop ? 0 : 4} mt={10}>
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
      

      <Container
        sx={{ mt: 20, display: "flex", width: "100%", mb: 10 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Dropdown overlay={menu}>
              <Button>
                {t("kategori.text")} <CaretDownOutlined style={{ paddingLeft: '10px' }} /> <Icon type="down" />
              </Button>
            </Dropdown>
          </Grid>
          <Grid item xs={12} sm={9}>
            <ReactSearchBox
              placeholder={t("cari-produk.text")}
              data={searchResults}
              onSelect={() => console.log("")}
              onChange={(value) => setSearchTerm(value)}
              autoFocus
              leftIcon={<span role="img" aria-label="search icon">🔍</span>}
              iconBoxSize="50px"
              style={{ border: "2px solid red" }}
            />
          </Grid>
          {isLoadingData ? (
            <div style={overlayStyle}>
              <ThreeCircles color="#FFA500" />
            </div>
          ) : data.length === 0 ? (
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
              }}
            >
              <Empty description="Tidak ada data yang tersedia" />
            </Container>
          ) : (
            <Container
              sx={{ mt: 20, display: "flex", width: "100%", mb: 50 }}
            >
              <Grid container spacing={12}>
                {filteredAndSortedData
                  ?.slice(0, showMore)
                  .map((e, index) => (
                    <Grid item key={e._id} xs={12} sm={4} md={4} lg={4}>
                      {isCardFlipped[index] ? (
                        <div
                          className={`product-card flipped-card`}
                          style={{
                            width: isDesktop ? "350px" : "100%",
                            height: "600px",
                            backgroundColor: "#f8f8f8",
                            borderRadius: "8px",
                            boxShadow:
                              "0px 8px 16px rgba(255, 165, 0, 0.6)",
                            transform: isCardFlipped[index]
                              ? "rotateY(180deg)"
                              : "rotateY(0deg)",
                            transformStyle: "preserve-3d",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "100px",
                              backgroundColor: "#e6bf0d",
                              position: "relative",
                              borderRadius: "10px",
                              zIndex: "1",
                            }}
                          >
                            <Typography
                              id="title-produk"
                              style={{
                                textAlign: "center",
                                // fontFamily: "'Brush Script MT', cursive",
                                margin: 22,
                                color: "green",
                                fontSize: 35,
                                transform: isCardFlipped[index]
                                  ? "rotateY(180deg)"
                                  : "none",
                                transformStyle: "preserve-3d",
                              }}
                            >
                              {selectedCategory === "Kemiri" ? 
                               <> {t("kemiri.text")} </>
                               :
                               <> {t("asam-jawa.text")} </>
                               && 
                               selectedCategory === "Kerupuk" ?
                               <> {t("kerupuk.text")} </>
                               : <> {t("asam-jawa.text")} </>
                               &&
                               selectedCategory === "Kayu Manis" ?
                               <> {t("kayu-manis.text")} </>
                               : <> {t("asam-jawa.text")} </>
                               }
                            </Typography>
                          </div>
                          <Box sx={{
                       background: `
                       linear-gradient(to right, #FFD580 50%, #FFE0B2 50%)`,
                     borderBottom: "2px solid #FFC107",
                        width: '300px',
                        height: '400px',
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px',
                        transform: isCardFlipped[index]
                          ? "rotateY(180deg)"
                          : "none",
                        fontFamily: 'Merriweather, serif', // Font yang digunakan
                        color: '#4E342E', // Warna teks
                      }}>
                        {/* Logo di atas teks dan diposisikan di tengah */}
                        <Box sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          width: '100%',
                          mb: '20px',
                          mt: '-60px'
                        }}>
                          <img src={LogoGunung} alt="Logo Gunung" style={{ width: '100px', height: 'auto' }} />
                        </Box>
                        
                        {/* Teks */}
                        <Box sx={{
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'space-between',
                          mb: '10px',
                        }}>
                          <Box sx={{
                            width: '40%',
                            textAlign: 'left',
                            fontSize: '18px',
                            fontWeight: 'bold',
                          }}>
                             {e[activeLanguage].jenis}
                          </Box>
                          <Box sx={{
                            width: '60%',
                            textAlign: 'right',
                            fontSize: '18px',
                            fontWeight: 'bold',
                          }}>
                            {e[activeLanguage].asam}
                          </Box>
                        </Box>
                        <Box sx={{
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'space-between',
                          mb: '10px',
                        }}>
                          <Box sx={{
                            width: '50%',
                            textAlign: 'left',
                            fontSize: '16px',
                            fontWeight: 'normal',
                          }}>
                            {e[activeLanguage].kemasan}
                          </Box>
                          <Box sx={{
                            width: '50%',
                            textAlign: 'right',
                            fontSize: '16px',
                            fontWeight: 'normal',
                          }}>
                            {e[activeLanguage].tradisional}
                          </Box>
                        </Box>
                        <Box sx={{
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'space-between',
                          mb: '10px',
                        }}>
                          <Box sx={{
                            width: '50%',
                            textAlign: 'left',
                            fontSize: '16px',
                            fontWeight: 'normal',
                          }}>
                            {e[activeLanguage].harga}
                          </Box>
                          <Box sx={{
                            width: '50%',
                            textAlign: 'right',
                            fontSize: '15px',
                            fontWeight: 'normal',
                          }}>
                            {e[activeLanguage].total}
                          </Box>
                        </Box>
                        <Box sx={{
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'space-between',
                          mb: '10px',
                        }}>
                          <Box sx={{
                            width: '50%',
                            textAlign: 'left',
                            fontSize: '16px',
                            fontWeight: 'normal',
                          }}>
                            {e[activeLanguage].isi}
                          </Box>
                          <Box sx={{
                            width: '50%',
                            textAlign: 'right',
                            fontSize: '16px',
                            fontWeight: 'normal',
                          }}>
                            {e[activeLanguage].total_isi}
                          </Box>
                        </Box>
                        <Box sx={{
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'space-between',
                        }}>
                          <Box sx={{
                            width: '50%',
                            textAlign: 'left',
                            fontSize: '16px',
                            fontWeight: 'normal',
                          }}>
                            {e[activeLanguage].pack}
                          </Box>
                          <Box sx={{
                            width: '50%',
                            textAlign: 'right',
                            fontSize: '16px',
                            fontWeight: 'normal',
                          }}>
                            {e[activeLanguage].total_pack}
                          </Box>
                        </Box>
                      </Box>

                          {/* <Text
                            type="secondary"
                            style={{
                              width: "100%",
                              textAlign: "justify",
                              paddingTop: "30px",
                              fontSize: !isDesktop ? "10px" : "10px",
                              transform: isCardFlipped[index]
                                ? "rotateY(180deg)"
                                : "none",
                              transformStyle: "preserve-3d",
                              whiteSpace: 'pre-line'
                            }}
                          >
                            {e[activeLanguage].deskripsi.split('\n').map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                          </Text> */}
                          <br />
                          <Button
                            id="kembali"
                            style={{
                              marginTop: 0,
                              transform: isCardFlipped[index]
                                ? "rotateY(180deg)"
                                : "none",
                                backgroundColor: 'orange',
                                color: 'white'
                            }}
                            onClick={() => toggleCardFlip(index)}
                          >
                            {t("Kembali.text")}
                          </Button>
                        </div>
                      ) : (
                        <div
                          className={`product-card`}
                          style={{
                            width: isDesktop ? "350px" : "100%",
                            height: "600px",
                            backgroundColor: "#f8f8f8",
                            borderRadius: "8px",
                            boxShadow:
                              "0px 8px 16px rgba(255, 165, 0, 0.6)",
                            transform: isCardFlipped[index]
                              ? "rotateY(180deg)"
                              : "rotateY(0deg)",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                            display: "flex",
                            margin: isDesktop ? "20px" : "6.5px",
                            flexDirection: "column",
                            padding: "20px",
                          }}
                        >
                          {e[activeLanguage].versi && e[activeLanguage].versi === "baru" && (
                            <div
                             className="waving-flag"
                              style={{
                                zIndex: 3,
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                backgroundColor: 'green',
                                color: 'white',
                                padding: '5px',
                                borderRadius: '5px',
                                animation: 'wavingFlagAnimation 1s infinite'
                              }}
                            >
                              New
                            </div>
                          )}
                           {e[activeLanguage].versi && e[activeLanguage].versi === "favorite" && (
                            <div class="favorite-container">
                            <div class="favorite-flag">
                              Favorite
                            </div>
                            <div class="stars"></div>
                          </div>
                          )}
                          <div
                            style={{
                              width: "100%",
                              height: "100px",
                              backgroundColor: "#e6bf0d",
                              position: "relative",
                              borderRadius: "10px",
                              top: "-20px",
                              zIndex: "1",
                            }}
                          >
                            <Typography
                              id="title-produk"
                              style={{
                                textAlign: "center",
                                // fontFamily: "'Brush Script MT', cursive",
                                margin: 22,
                                color: "green",
                                fontSize: 35,
                              }}
                            >
                              {selectedCategory === "Kemiri" ? 
                               <> {t("kemiri.text")} </>
                               :
                               <> {t("asam-jawa.text")} </>
                               && 
                               selectedCategory === "Kerupuk" ?
                               <> {t("kerupuk.text")} </>
                               : <> {t("asam-jawa.text")} </>
                               &&
                               selectedCategory === "Kayu Manis" ?
                               <> {t("kayu-manis.text")} </>
                               : <> {t("asam-jawa.text")} </>
                               }
                              
                            </Typography>
                          </div>
                              <Image src={e[activeLanguage].image} style={{ height: "300px" }} />
                           
                          <Meta
                            title={
                              e[activeLanguage].kategori === "bahan-baku" ? "" : e[activeLanguage].nama
                            }
                            style={{
                              marginTop: "30px",
                              marginBottom: "5px",
                              fontFamily: "'PT Serif', serif",
                              textAlign: "center",
                            }}
                          />
                          <Button
                            id="review"
                            style={{
                              alignSelf: "center",
                              backgroundColor: 'orange',
                              color: 'white'
                            }}
                            onClick={() => toggleCardFlip(index)}
                          >
                            {t("review.text")}
                          </Button>
                        </div>
                      )}
                    </Grid>
                  ))}
              </Grid>
            </Container>
          )}
        </Grid>
      </Container>

      {shouldRenderLoadMoreButton && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-170px",
          }}
        >
          <Button
            id="load-more"
            style={{
              marginTop: "-300px",
              marginBottom: "50px",
              alignSelf: "center",
              background:
                "linear-gradient(90deg, #FFD700 0%, #FFA500 100%)",
              border: "none",
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: "0px 10px 20px rgba(255, 165, 0, 0.4)",
              transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
              display: "block",
              position: "relative",
            }}
            onClick={loadMore}
          >
            {loadingMore ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <PulseLoader color="#ffffff" size={10} />
              </div>
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