import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  { id: 1, name: "E-Commerce Website", color: "bg-red-400" },
  { id: 2, name: "Portfolio Website", color: "bg-gray-400" },
  { id: 3, name: "Chat Application", color: "bg-blue-400" },
  { id: 4, name: "AI Image Generator", color: "bg-green-400" },
  { id: 5, name: "Task Management App", color: "bg-orange-400" },
  { id: 6, name: "Crypto Tracker", color: "bg-red-800" },
];

function Project() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="p-10 flex justify-center items-center flex-col">
      <div ref={ref} className="p-10 bg-[url(./assets/image/footer-bg.png)] bg-cover rounded-3xl w-full max-w-7xl">
        <motion.h1
          className="text-center text-5xl text-white font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          PROJECT
        </motion.h1>

        {/* Grid Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${project.color} w-full h-[250px] flex items-center justify-center rounded-xl shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-bold text-white">{project.name}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
