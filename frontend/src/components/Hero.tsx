import hero from "../assets/images/hero2.jpg";
const Hero = () => {
  return (
    <div>
      <img
        src={hero}
        className="w-full max-h-[600px] object-cover"
        alt="hero section"
      />
    </div>
  );
};

export default Hero;
