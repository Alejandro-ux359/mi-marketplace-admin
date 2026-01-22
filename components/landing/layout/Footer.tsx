"use client";

import { 
    Box, 
    Container,
     Typography, 
     Link, 
    // IconButton, 
    // Stack 
    } 
     from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";

export default function SimpleFooter() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to top, #1e293b, #ffffff)",
        py: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" }, 
          justifyContent: "space-between", 
          alignItems: "center", 
          gap: 3,
        }}>
          
          {/* Logo */}
          {/* <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#818cf8" }}>
              TuMarketplace
            </Typography>
            <Typography variant="body2" sx={{ color: "#cbd5e1", mt: 1 }}>
              Transformando la manera de vender en línea
            </Typography>
          </Box> */}

          {/* Enlaces */}
          {/* <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/" color="#cbd5e1" underline="hover">
              Inicio
            </Link>
            <Link href="/precios" color="#cbd5e1" underline="hover">
              Precios
            </Link>
            <Link href="/contacto" color="#cbd5e1" underline="hover">
              Contacto
            </Link>
            <Link href="/blog" color="#cbd5e1" underline="hover">
              Blog
            </Link>
          </Stack> */}

          {/* Redes sociales */}
          {/* <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton sx={{ color: "#cbd5e1", "&:hover": { color: "#818cf8" } }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#cbd5e1", "&:hover": { color: "#818cf8" } }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#cbd5e1", "&:hover": { color: "#818cf8" } }}>
              <TwitterIcon />
            </IconButton>
          </Box> */}
        </Box>

        {/* Copyright */}
        <Box sx={{ 
          textAlign: "center", 
          mt: 3, 
          pt: 3, 
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}>
          <Typography variant="body2" sx={{ color: "#000" }}>
            © {new Date().getFullYear()} RenshaMarket. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
            <Link href="/privacidad" color="#000" underline="hover" variant="body2">
              Privacidad
            </Link>
            <Link href="/terminos" color="#000" underline="hover" variant="body2">
              Términos
            </Link>
            <Link href="/cookies" color="#000" underline="hover" variant="body2">
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}