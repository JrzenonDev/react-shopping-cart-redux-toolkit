import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>
            Cartsy Medicine - All right reserved - Design & Develop{" "}
            <strong>JrzenonDev</strong>
          </p>
          <div className="social">
            <a
              href="http://github.com/JrzenonDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/jose-roberto-oliveira-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
