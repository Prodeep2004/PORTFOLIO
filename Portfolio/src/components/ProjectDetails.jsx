import { motion } from "motion/react";
import { useState } from "react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  const [fillMode, setFillMode] = useState("cover");
  const isCover = fillMode === "cover";
  const toggleFill = () => setFillMode(isCover ? "contain" : "cover");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-auto p-4 backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <div className={`w-full ${isCover ? "max-h-[65vh]" : "max-h-[55vh]"} overflow-hidden rounded-t-2xl`}>
          <img
            src={image}
            alt={title}
            onClick={toggleFill}
            className={`w-full h-full ${isCover ? "object-cover object-[center_95%] cursor-zoom-out" : "object-contain cursor-zoom-in"} bg-black/10`}
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
              View Project
              <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
