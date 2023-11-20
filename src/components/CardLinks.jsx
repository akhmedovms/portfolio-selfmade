import Home from "../page/Home";

function CardLinks() {
  const links = [
    { id: 1, image: "", github: "", netlify: "" },
    { id: 2, image: "", github: "", netlify: "" },
  ];

  return <Home links={links} />;
}

export default CardLinks;
