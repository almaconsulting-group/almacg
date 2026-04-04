import { motion } from "framer-motion";
import { Handshake, MapPin, GraduationCap, Target } from "lucide-react";

const pillars = [
  {
    icon: Handshake,
    title: "Lealtad Estratégica",
    description: "Somos el socio que camina a la par del cliente en cada etapa.",
  },
  {
    icon: Target,
    title: "Excelencia en el Terreno",
    description: "20 años de experiencia gerencial y liderazgo en el NOA avalan nuestra gestión.",
  },
  {
    icon: MapPin,
    title: "Visión Regional",
    description: "Entendemos la idiosincrasia de la región para generar soluciones que funcionen en la realidad local.",
  },
  {
    icon: GraduationCap,
    title: "Formación con Propósito",
    description: "Forjamos líderes que impulsan el desarrollo económico genuino.",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Más que consultoría, <span className="text-primary">compromiso real</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            ALMA C.G nace de la convicción de que los resultados sólidos no surgen del azar,
            sino de la integridad, la constancia y el valor de los vínculos humanos. Nuestra firma
            es el reflejo de más de 20 años de trayectoria regional.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-['Playfair_Display']">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-lg p-10"
          >
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Nuestra Misión</h3>
            <p className="text-primary-foreground/85 leading-relaxed">
              Transformar el potencial comercial del NOA mediante el liderazgo estratégico y el
              mentoring de alto impacto. Profesionalizar a las empresas y organismos de la región,
              brindando herramientas de gestión que aseguren su rentabilidad y sostenibilidad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-10 border-2 border-primary"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser la firma de consultoría estratégica referente en el norte argentino para el año 2028,
              reconocida por su integridad, su capacidad de innovación y su impacto real en la creación
              de empleo genuino y el crecimiento económico de nuestras provincias.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
