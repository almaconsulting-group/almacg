import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, MapPin } from "lucide-react";
import almaLogo from "@/assets/alma-logo.png";

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "+54 385 583 2354 / 387 444 1818", href: "tel:+543855832354" },
  { icon: Mail, label: "Email", value: "almaconsultinggroupnoa@gmail.com", href: "mailto:almaconsultinggroupnoa@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "ALMA Consulting NOA", href: "https://www.linkedin.com/company/alma-consulting-noa" },
  { icon: MapPin, label: "Ubicación", value: "Salta / Santiago del Estero · Región NOA", href: "#" },
];

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
            Ponemos nuestra experiencia a tu servicio
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            ¿Listo para transformar tu organización? Conversemos sobre cómo podemos ayudarte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/10 rounded-lg p-8 text-center hover:bg-primary-foreground/15 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-primary-foreground font-semibold mb-2">{item.label}</h4>
              <p className="text-primary-foreground/70 text-sm">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={almaLogo} alt="ALMA" className="h-10 w-10 rounded-full" />
        <span className="text-background/80 text-sm">
          © {new Date().getFullYear()} ALMA Consulting Group. Todos los derechos reservados.
        </span>
      </div>
      <p className="text-background/50 text-sm italic">
        "Porque para liderar hace falta estrategia, pero para trascender, hace falta ALMA."
      </p>
    </div>
  </footer>
);

export { Contact, Footer };
