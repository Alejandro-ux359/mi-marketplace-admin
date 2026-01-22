"use client";
import * as React from "react";
import HeroBanner from "@/components/landing/layout/HeroBanner";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  // CardMedia,
  Typography,
  Container,
} from "@mui/material";
import {
  CurrencyExchange,
  // ShoppingCart,
  Storefront,
  LocalShipping,
  TrendingUp,
  Security,
  // SupportAgent,
  Inventory,
  BarChart,
  RocketLaunch,
} from "@mui/icons-material";
import { keyframes } from "@mui/system";

// Animaciones
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(99, 102, 241, 0); }
  100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
`;

export default function Home() {
  const [, setSelectedCard] = React.useState(0);

  const cards = [
    {
      id: 1,
      title: "Crear Tienda",
      description: "Configura tu tienda en minutos sin conocimientos técnicos",
      icon: <Storefront />,
      color: "#6366f1",
    },
    {
      id: 2,
      title: "Gestionar Productos",
      description: "Sube y administra tu catálogo fácilmente",
      icon: <Inventory />,
      color: "#8b5cf6",
    },
    {
      id: 3,
      title: "Analizar Ventas",
      description: "Métricas detalladas para optimizar tu negocio",
      icon: <BarChart />,
      color: "#ec4899",
    },
  ];

  const cardsIncrement = [
    {
      id: 4,
      icon: <CurrencyExchange sx={{ fontSize: 50 }} />,
      title: "Amplía más, gasta menos",
      description:
        "Optimiza tus costos logísticos con nuestras soluciones integradas. Reduzce hasta un 70% en envíos y gestiona pedidos de manera eficiente.",
      image: "/landing/grafica.svg",
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    },
    {
      id: 5,
      icon: <TrendingUp sx={{ fontSize: 50 }} />,
      title: "Impulsa tus Ventas",
      description:
        "Herramientas inteligentes para aumentar tu conversión. Analytics en tiempo real y recomendaciones personalizadas.",
      image: "/landing/ventas.svg",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
    {
      id: 6,
      icon: <LocalShipping sx={{ fontSize: 50 }} />,
      title: "Logística Simplificada",
      description:
        "Gestión completa de envíos y almacenamiento. Integración con principales transportistas y seguimiento en tiempo real.",
      image: "/landing/envios.svg",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
    {
      id: 7,
      icon: <RocketLaunch sx={{ fontSize: 50 }} />,
      title: "Marketing Inteligente",
      description:
        "Campañas automatizadas y herramientas de promoción. Aumenta tu visibilidad y atrae más clientes cualificados.",
      image: "/landing/promocion.svg",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    },
  ];

  const featureTexts = [
    {
      id: 8,
      icon: <Storefront sx={{ fontSize: 40 }} />,
      title: "Expande tu negocio fácilmente",
      description:
        "Crea tu tienda online en minutos, sin complicaciones técnicas. Llega a miles de clientes y escala tu negocio rápidamente.",
    },
    {
      id: 9,
      icon: <Inventory sx={{ fontSize: 40 }} />,
      title: "Gestión completa y eficiente",
      description:
        "Controla inventario, pedidos y finanzas desde un solo dashboard. Automatiza procesos y optimiza tu tiempo.",
    },
    {
      id: 10,
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: "Promoción y visibilidad garantizada",
      description:
        "Aparece en búsquedas destacadas y utiliza herramientas de marketing avanzadas para maximizar tu alcance.",
    },
    {
      id: 11,
      icon: <Security sx={{ fontSize: 40 }} />,
      title: "Seguridad y soporte confiable",
      description:
        "Protección de datos y transacciones seguras. Soporte especializado disponible 24/7 para resolver tus dudas.",
    },
  ];

  function selectActionCardBanner() {
    return (
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            margin: "auto",
            transform: "translateY(-60px)",
            position: "relative",
            zIndex: 10,
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={card.id}
              sx={{
                minHeight: 200,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${card.color}20 0%, ${card.color}10 100%)`,
                backdropFilter: "blur(10px)",
                border: `1px solid ${card.color}30`,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 20px 40px ${card.color}30`,
                },
              }}
            >
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                sx={{
                  height: "100%",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}80 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    color: "white",
                    fontSize: 30,
                  }}
                >
                  {card.icon}
                </Box>
                <Typography
                  variant="h5"
                  component="div"
                  fontWeight={700}
                  sx={{ color: "#1e293b", mb: 1 }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#64748b", lineHeight: 1.6 }}
                >
                  {card.description}
                </Typography>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    );
  }

  function incrementCard() {
    return (
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gap: 4,
            py: { xs: 6, md: 10 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "1fr 1fr",
            },
            justifyItems: "center",
          }}
        >
          {cardsIncrement.map((card) => (
            <Card
              key={card.id}
              sx={{
                width: { xs: "100%", sm: "90%", md: 500 },
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardActionArea>
                {/* Encabezado con gradiente */}
                <Box
                  sx={{
                    height: 8,
                    background: card.gradient,
                  }}
                />

                {/* Icono */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 4,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: card.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      animation: `${floatAnimation} 3s ease-in-out infinite`,
                    }}
                  >
                    {card.icon}
                  </Box>
                </Box>

                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={700}
                    sx={{ color: "#1e293b", mb: 2 }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.7,
                      fontSize: "1rem",
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    );
  }

  function empiezaVender() {
    return (
      <Container maxWidth="md">
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 4,
            overflow: "hidden",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            color: "white",
            boxShadow: "0 25px 50px rgba(99, 102, 241, 0.3)",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-50%",
              right: "-50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              p: { xs: 4, md: 6 },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              component="div"
              variant="h4"
              fontWeight={800}
              sx={{ mb: 2 }}
            >
              ¡Comienza tu éxito ahora!
            </Typography>
            <Typography
              component="div"
              variant="subtitle1"
              sx={{ mb: 4, opacity: 0.9 }}
            >
              Únete a miles de vendedores que ya están creciendo con
              RenshaMarket. Sin complicaciones, sin riesgos.
            </Typography>
            <Button
              variant="contained"
              sx={{
                alignSelf: "flex-start",
                background: "white",
                color: "#6366f1",
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: 3,
                "&:hover": {
                  background: "rgba(255,255,255,0.9)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
                animation: `${pulseAnimation} 2s infinite`,
              }}
            >
              Registrarme gratis
            </Button>
          </Box>
          <Box
            sx={{
              flex: 1,
              minHeight: { xs: 200, md: "auto" },
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 3,
            }}
          >
            <Box
              component="img"
              src="/landing/envios.svg"
              alt="Ilustración"
              sx={{
                width: "100%",
                maxWidth: 300,
                height: "auto",
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
              }}
            />
          </Box>
        </Card>
      </Container>
    );
  }

  return (
    <>
      <main>
        <HeroBanner />

        {/* Sección de tarjetas superpuestas */}
        <Box
          sx={{
            position: "relative",
            zIndex: 5,
            mb: { xs: 4, md: 8 },
          }}
        >
          {selectActionCardBanner()}
        </Box>

        {/* Sección Cómo te apoyamos */}
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 8, md: 12 },
            px: 2,
            background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h2"
              component="h1"
              fontWeight={800}
              gutterBottom
              sx={{
                color: "#1e293b",
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cómo te apoyamos
            </Typography>

            <Typography
              variant="h6"
              component="p"
              fontWeight={400}
              sx={{
                color: "#64748b",
                maxWidth: 800,
                mx: "auto",
                mt: 2,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                lineHeight: 1.7,
              }}
            >
              Desde la creación de tu tienda hasta el análisis avanzado de
              ventas, te proporcionamos todas las herramientas necesarias para
              que tu negocio crezca exponencialmente.
            </Typography>
          </Container>
        </Box>

        {/* Sección de beneficios */}
        <Box sx={{ background: "#f8fafc", pb: { xs: 8, md: 12 } }}>
          {incrementCard()}
        </Box>

        {/* Sección ¿Por qué crear una cuenta? */}
        <Box
          sx={{
            position: "relative",
            py: { xs: 10, md: 15 },
            overflow: "hidden",
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
            },
          }}
        >
          {/* Elementos decorativos */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: "10%",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <Container maxWidth="lg">
            {/* Título */}
            <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #c7d2fe 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
                }}
              >
                ¿Por qué crear una cuenta de vendedor?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#cbd5e1",
                  maxWidth: 800,
                  mx: "auto",
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  opacity: 0.9,
                }}
              >
                Descubre las ventajas exclusivas de formar parte de nuestra
                comunidad
              </Typography>
            </Box>

            {/* Grid de características */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: { xs: 4, md: 6 },
                position: "relative",
                zIndex: 1,
              }}
            >
              {featureTexts.map((text) => (
                <Box
                  key={text.id}
                  sx={{
                    background: "rgba(30, 41, 59, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 3,
                    p: { xs: 3, md: 4 },
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "rgba(99, 102, 241, 0.3)",
                      background: "rgba(30, 41, 59, 0.9)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}
                  >
                    <Box
                      sx={{
                        minWidth: 70,
                        height: 70,
                        borderRadius: "20px",
                        background:
                          "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#818cf8",
                      }}
                    >
                      {text.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: { xs: "1.2rem", md: "1.4rem" },
                          mb: 1,
                        }}
                      >
                        {text.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#cbd5e1",
                          fontSize: { xs: "0.95rem", md: "1rem" },
                          lineHeight: 1.7,
                          mb: 2,
                        }}
                      >
                        {text.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Sección de registro */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
          }}
        >
          <Container maxWidth="lg">{empiezaVender()}</Container>
        </Box>
      </main>
    </>
  );
}
