import { motion } from "framer-motion";
import { Linkedin, Briefcase, Award, Globe } from "lucide-react";

const stats = [
  { value: "+20", label: "Años de experiencia", icon: Briefcase },
  { value: "+50", label: "Personas lideradas", icon: Award },
  { value: "NOA/NEA", label: "Cobertura regional", icon: Globe },
];

const CEO = () => {
  return (
    <section id="ceo" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
            Liderazgo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
            Conoce a nuestro <span className="text-primary">Founder & CEO</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Alejandro Saravia
            </h3>
            <p className="text-accent font-semibold uppercase tracking-wider text-sm">
              Consultor Estratégico & Formador de Equipos de Alto Rendimiento
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Con más de 20 años de experiencia en posiciones gerenciales y desarrollo de negocios
              corporativos en el sector Automotriz, Financiero, Telecomunicaciones y Retail en la
              Región NOA y NEA.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              8 años de gestión exitosa en Santiago del Estero, liderando equipos de más de 50 personas.
              Experto en transformar estructuras comerciales tradicionales en unidades de alta eficiencia operativa.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center bg-muted rounded-lg p-5">
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="http://www.linkedin.com/in/alesaravia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary/90 transition-colors mt-4"
            >
              <Linkedin className="w-5 h-5" />
              Ver perfil en LinkedIn
            </a>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-primary rounded-lg p-10 text-center">
              <div className="w-32 h-32 bg-primary-foreground/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl font-bold text-primary-foreground font-['Playfair_Display']">AS</span>
              </div>
              <h4 className="text-xl font-bold text-primary-foreground mb-2">Alejandro Saravia</h4>
              <p className="text-primary-foreground/70 text-sm mb-6">Founder & CEO</p>

              <div className="space-y-4 text-left">
                <div className="bg-primary-foreground/10 rounded p-4">
                  <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">Formación</p>
                  <p className="text-primary-foreground text-sm">Administración de Empresas, Análisis de Sistemas</p>
                </div>
                <div className="bg-primary-foreground/10 rounded p-4">
                  <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">Idiomas</p>
                  <p className="text-primary-foreground text-sm">Español 100% · Inglés 70%</p>
                </div>
                <div className="bg-primary-foreground/10 rounded p-4">
                  <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">Base</p>
                  <p className="text-primary-foreground text-sm">Salta / Santiago del Estero · Región NOA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
