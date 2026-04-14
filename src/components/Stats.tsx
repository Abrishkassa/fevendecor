import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, Users, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: 500, suffix: "+", label: "Events Decorated" },
  { icon: Clock, value: 8, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 450, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 12, suffix: "", label: "Awards Won" },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4 bg-secondary relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--gold) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      
      <div className="container-max relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <stat.icon size={36} className="mx-auto mb-4 text-gold" />
              <div className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  "0"
                )}
              </div>
              <p className="font-body text-sm tracking-wider uppercase text-cream/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
