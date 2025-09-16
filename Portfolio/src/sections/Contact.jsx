import { useState } from "react";
import { motion } from "motion/react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xandgqll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        showAlertMessage("success", "Your message has been sent!");
      } else {
        showAlertMessage("danger", "Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <motion.section 
      id="contact" 
      className="relative flex items-center c-space section-spacing"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center w-full max-w-2xl p-8 mx-auto border rounded-2xl bg-gradient-to-b from-storm to-indigo border-white/10 shadow-xl">
        <div className="flex flex-col items-start w-full gap-3 mb-8">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-300">
            Whether you're looking to build a new website, improve your existing platform,
            or bring a unique project to life, I'm here to help.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="feild-label">
              Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="feild-label">
              Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="john.doe@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="6"
              className="field-input field-input-focus resize-y"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 mt-6 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
