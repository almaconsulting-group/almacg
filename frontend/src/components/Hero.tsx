import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-semibold text-sm uppercase tracking-[0.3em] mb-6"
        >
          Consultoría Estratégica & Formación de Equipos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8"
        >
          Para liderar hace falta estrategia,{" "}
          <span className="text-accent">para trascender</span>, hace falta ALMA.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          Transformamos el potencial comercial del NOA mediante liderazgo estratégico
          y mentoring de alto impacto. +20 años de experiencia regional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacto"
            className="bg-accent text-accent-foreground px-8 py-4 rounded font-semibold text-lg hover:bg-accent/90 transition-colors"
          >
            Agendar Reunión
          </a>
          <a
            href="#servicios"
            className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded font-semibold text-lg hover:border-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            Nuestros Servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
