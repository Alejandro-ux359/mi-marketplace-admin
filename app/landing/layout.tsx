 import Header from "@/components/landing/layout/Header";
 import Footer from "@/components/landing/layout/Footer";

// export default function LandingLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <Header />
//       {children}
//       <Footer />
//     </>
//   );
// }

// app/landing/layout.tsx
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Aquí puedes agregar cualquier elemento común o estructura */}
       <Header />
      {children} {/* Esto es importante para que el contenido de la ruta se renderice */}
      <Footer />
    </div>
  );
}
