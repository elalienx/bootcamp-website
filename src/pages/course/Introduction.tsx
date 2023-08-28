interface iProps {
  data: {
    text: string;
    imageUrl: string;
  };
}

export default function Introduction({ data }: iProps) {
  const { text, imageUrl } = data;

  // Properties
  const Image = require("../../assets/images/" + imageUrl);

  return (
    <header className="introduction">
      {/* Mobile hero */}
      <img className="mobile-hero" src={Image} alt="" />

      <div className="container">
        {/* Top - Left */}
        <div className="content">
          <h2>About the Program</h2>
          <p>{text}</p>
        </div>

        {/* Bottom - Right */}
        <img className="support-picture" src={Image} alt="" />
      </div>
    </header>
  );
}
