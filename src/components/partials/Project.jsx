import React from "react";
import Stack from "./Stack";
// Icons/Logos
import carbooking from "../../assets/images/car-booking.png";
import MoneyManager from "../../assets/images/money-manager.png";
import Pizza from "../../assets/images/pizza.png";
import MovieTicketing from "../../assets/images/movie-ticket.png";
import zodiac from "../../assets/images/zodiac_quest.png";
import ghlogo from "../../assets/icons/github.svg";
import streamline from "../../assets/images/streamline.png";

// The projects array contains project objects which are then each mapped onto a component which is added to the page.
const projects = [
  {
    title: "Car-Booking",
    img: carbooking,
    desc: "A livestream platform that hosts creator streams - with integrated booking",
    //stack: ["React", "Nodejs", "Express", "Mongo"],
    link: "https://glowing-shortbread-ba8683.netlify.app/",
    frontend: "https://github.com/kayathiriramesh/car-booking-frontend",
    backend:"https://github.com/kayathiriramesh/car-booking-backend"
  },
  {
    title: "Money-Manager",
    img: MoneyManager,
    desc: " A platform is to manage income and expense.",
    //stack: ["React", "Nodejs", "Express", "MongoDB"],
    link: "https://soft-tartufo-b17203.netlify.app/",
    frontend: "https://github.com/kayathiriramesh/money-manger-frontend",
    backend:"https://github.com/kayathiriramesh/money-manager-backend"
  },
  {
    title: "Movie-Ticketing",
    img:  MovieTicketing,
    desc: "A livestream platform that hosts creator streams - with integrated ticketing.",
    //stack: ["React", "Tailwind", "Express", "MangoDB"],
    link: "https://meek-donut-5eeab6.netlify.app/",
    frontend: "https://github.com/kayathiriramesh/movie-booking-frontend",
    backend:"https://github.com/kayathiriramesh/movie-ticket-booking"
  },
  {
    title: "Pizza-delivery-App",
    img:  Pizza,
    desc: "A livestream platform that hosts creator streams - with integrated ticketing",
    //stack: ["React", "Tailwind", "Express", "MangoDB"],
    link: "https://marvelous-twilight-364e0e.netlify.app/",
    frontend: "https://github.com/kayathiriramesh/pizzaapp-frontend",
    backend:"https://github.com/kayathiriramesh/pizzaapp-backend"
  }
];

function Project() {
  // For each project, map its properties onto html and add it to projectCards array.
  // TODO: Drop down for description on project cards.
  const projectCards = projects.map((proj, index) => {
    return (
      // The whole card will be a link
      <a
        href={proj.link}
        target="_blank"
        rel="noreferrer"
        className="hover:project-card-hover shadow-lg shadow-black bg-zinc-800 space-evenly rounded-md"
      >
        {/* Image */}

        <img className="object-fit p-5" src={proj.img} alt="Project Preview" />

        {/* Name, Phase, Stack */}
        <section className="title-bar border-b-2 border-stone-700">
          {/* Title */}
          <div className="p-4 border-r-2 border-stone-700 xl:p-5">
            <h1
              id="proj-name"
              className="font-heading text-2xl  lg:text-xl xl:text-2xl 2xl:text-3xl font-bold "
            >
              {proj.title}
            </h1>
          </div>
          {/* Stack */}
          {/*<div className="sm:p-4 p-1 self-center lg:p-1 xl:p-4">
            <Stack stack={proj.stack} />
          </div>
          {/* Repo Link */}
          <div className="border-l-2 border-stone-700 p-4 self-center">
            <a
              href={proj.frontend}
              className="flex"
              rel="noreferrer"
              target="_blank"
            >
              <img src={ghlogo} alt="" className="w-[25px]" />
              <h2>frontend</h2>
            </a>
            <br></br>
            <a
              href={proj.backend}
              className="flex"
              rel="noreferrer"
              target="_blank"
            >
              <img src={ghlogo} alt="" className="w-[25px]" />
              <h2>backend</h2>
            </a>
          </div>
        </section>
        {/* Description */}

        <section className=" p-5">
          <p className="text-md align-middle">{proj.desc}</p>
        </section>

        {/* View */}
      </a>
    );
  });

  // We will return a component which contains this array of project cards.
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-y-5 md:gap-y-8 lg:gap-5 xl:gap-10 w-11/12 mx-auto grid-cols-1 ">
        {projectCards}
      </div>
    </div>
  );
}

export default Project;
