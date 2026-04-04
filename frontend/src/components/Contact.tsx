import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";
import almaLogo from "@/assets/alma-logo.png";

// SVG Icon for WhatsApp
const WhatsAppIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const contactInfo = [
  { 
    icon: WhatsAppIcon, 
    label: "WhatsApp", 
    value: "+54 385 583 2354", 
    href: "https://wa.me/543855832354",
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700"
  },
  { 
    icon: Mail, 
    label: "Email", 
    value: "almaconsultinggroupnoa@gmail.com", 
    href: "mailto:almaconsultinggroupnoa@gmail.com",
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    value: "ALMA Consulting NOA", 
    href: "https://www.linkedin.com/company/alma-consulting-noa",
    color: "from-[#0077B5] to-[#005885]",
    hoverColor: "hover:from-[#005885] hover:to-[#004060]"
  },
  { 
    icon: MapPin, 
    label: "Ubicación", 
    value: "Salta / Santiago del Estero · Región NOA", 
    href: "#",
    color: "from-amber-500 to-amber-600",
    hoverColor: "hover:from-amber-600 hover:to-amber-700"
  },
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
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-primary-foreground/20 hover:border-accent/50 transition-all duration-300 group shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 shadow-md group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h4 className="text-primary-foreground font-bold mb-3 text-lg group-hover:text-accent transition-colors">{item.label}</h4>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed group-hover:text-primary-foreground transition-colors">{item.value}</p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"></div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gradient-to-b from-foreground to-foreground/95">
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Main footer content */}
      <div className="grid md:grid-cols-3 gap-12 mb-10">
        {/* Column 1: About */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src={almaLogo} alt="ALMA" className="h-12 w-12 rounded-full shadow-lg" />
            <div>
              <h3 className="text-background font-bold text-xl">ALMA</h3>
              <p className="text-background/60 text-xs">Consulting Group</p>
            </div>
          </div>
          <p className="text-background/70 text-sm leading-relaxed mb-4">
            Consultoría estratégica y formación de equipos de alto rendimiento en el NOA. 
            Más de 20 años transformando organizaciones.
          </p>
          <p className="text-accent italic text-sm font-medium">
            "Para liderar hace falta estrategia, para trascender, hace falta ALMA."
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-background font-bold text-lg mb-6 border-b border-background/20 pb-2">Enlaces Rápidos</h4>
          <ul className="space-y-3">
            <li>
              <a href="#inicio" className="text-background/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="text-background/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#servicios" className="text-background/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                Servicios
              </a>
            </li>
            <li>
              <a href="#ceo" className="text-background/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                CEO
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-background/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-background font-bold text-lg mb-6 border-b border-background/20 pb-2">Contacto</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-background/70 text-sm">
                Salta / Santiago del Estero<br />
                Región NOA, Argentina
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <a href="mailto:almaconsultinggroupnoa@gmail.com" className="text-background/70 hover:text-accent transition-colors text-sm break-all">
                almaconsultinggroupnoa@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <a href="https://wa.me/543855832354" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-accent transition-colors text-sm">
                +54 385 583 2354
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-background/60 text-sm">
          © {new Date().getFullYear()} ALMA Consulting Group. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/company/alma-consulting-noa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-background/60 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/543855832354" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-background/60 hover:text-accent transition-colors"
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          <a 
            href="mailto:almaconsultinggroupnoa@gmail.com"
            className="text-background/60 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export { Contact, Footer };
