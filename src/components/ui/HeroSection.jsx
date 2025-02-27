import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi a
            iusto libero molestias eum distinctio sint, quisquam ipsam laborum
            autem facere est facilis dolore ducimus corporis labore omnis quod
            ab!lore1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi dicta aliquid neque provident laudantium dolorem, sapiente vel eveniet est. Culpa, consectetur molestiae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam soluta exercitationem delectus nulla. Voluptatum odio quaerat maxime pariatur itaque iste autem expedita saepe cupiditate error, eum incidunt ipsum illo possimus harum ratione impedit cumque!
            ab!lore1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi dicta aliquid neque provident laudantium dolorem, sapiente vel eveniet est. Culpa, consectetur molestiae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam soluta exercitationem delectus nulla. Voluptatum odio quaerat maxime pariatur itaque iste autem expedita saepe cupiditate error, eum incidunt ipsum illo possimus harum ratione impedit cumque!
          </p>
          <NavLink
            className="btn btn-darken btn-inline bg-white-box expor"
            to="/country"
          >
            Start Exploring <FaArrowCircleRight />
          </NavLink>
        </div>
        <div className="hero-image">
          <img src="/images/earth.jpg" alt="world" className="banner-image" />
        </div>
      </div>
    </main>
  );
};
