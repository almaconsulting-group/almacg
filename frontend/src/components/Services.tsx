import { motion } from "framer-motion";
import { Megaphone, BarChart3, Users } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Capacitación de Alto Impacto",
    description:
      "Entrenamiento intensivo en técnicas de cierre, manejo de objeciones para fuerzas de ventas y estrategias de comercialización efectivas.",
    features: ["Técnicas de cierre", "Manejo de objeciones", "Estrategias comerciales"],
  },
  {
    icon: BarChart3,
    title: "Auditoría y Procesos (CRM/ERP)",
    description:
      "Implementación de tableros de control para profesionalizar la gestión comercial y maximizar la rentabilidad.",
    features: ["Tableros de control", "Gestión profesional", "Maximización de rentabilidad"],
  },
  {
    icon: Users,
    title: "Mentoring de Liderazgo",
    description:
      "Formación de supervisores y jefes de ventas bajo la nueva Ley de Modernización Laboral (Febrero 2026).",
    features: ["Formación de líderes", "Supervisión estratégica", "Modernización laboral"],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
            Servicios Estratégicos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Soluciones que <span className="text-primary">transforman resultados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No somos solo una consultoría de ventas; somos un Staff de Estrategia y
            Performance Comercial diseñado para liderar la transformación del NOA.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all group"
            >
              <div className="bg-primary p-8 group-hover:bg-primary/90 transition-colors">
                <service.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary-foreground font-['Playfair_Display']">
                  {service.title}
                </h3>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
