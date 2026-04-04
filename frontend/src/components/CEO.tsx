import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import ceoPhoto from "@/assets/ceo-photo.png";

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
            Conoce a nuestro <span className="text-primary">Director General</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo & Basic Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-center shadow-xl">
                <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-accent/30 shadow-lg">
                  <img src={ceoPhoto} alt="Alejandro Saravia" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-2xl font-bold text-primary-foreground mb-2">Alejandro Saravia</h4>
                <p className="text-accent font-semibold text-base mb-6">Director General</p>

                <div className="space-y-3 text-left mb-6">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3.5 border border-primary-foreground/10">
                    <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">Formación</p>
                    <p className="text-primary-foreground text-sm font-medium">Administración de Empresas, Análisis de Sistemas</p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3.5 border border-primary-foreground/10">
                    <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">Base de operaciones</p>
                    <p className="text-primary-foreground text-sm font-medium">Salta / Santiago del Estero · Región NOA</p>
                  </div>
                </div>

                <a
                  href="http://www.linkedin.com/in/alesaravia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-md"
                >
                  <Linkedin className="w-5 h-5" />
                  Ver perfil en LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 space-y-5"
            >
              <div>
                <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-3">
                  Consultor Estratégico & Formador de Equipos de Alto Rendimiento
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  +20 años transformando organizaciones
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base">
                Experto en desarrollo de negocios corporativos en los sectores Automotriz, Financiero, 
                Telecomunicaciones y Retail en la Región NOA y NEA.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base">
                Con una trayectoria destacada liderando equipos de más de 50 personas en Santiago del Estero, 
                especializado en transformar estructuras comerciales tradicionales en unidades de alta 
                eficiencia operativa.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <p className="text-foreground font-medium">Posiciones gerenciales de alto nivel</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <p className="text-foreground font-medium">Gestión estratégica y operativa</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <p className="text-foreground font-medium">Desarrollo de equipos comerciales</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
