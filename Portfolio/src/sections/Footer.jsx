import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex items-center gap-3">
        <a 
          href="http://www.linkedin.com/in/pradeepkumarmeengar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <img src="/assets/socials/linkedIn.svg" className="w-5 h-5" alt="LinkedIn" />
          <span>Connect on LinkedIn</span>
        </a>
        <a 
          href="https://github.com/Prodeep2004" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <img src="/assets/logos/github.svg" className="w-5 h-5" alt="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Footer;
