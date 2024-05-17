const CardSection = () => {
  const content = [
    {
      id: 1,
      title: "RESPONSIBLE PLAY",
      description:
        "To make sure your experience is as enjoyable and lucrative, we limit the number of times you can play real money rummy games.",
    },
    {
      id: 2,
      title: "100% LEGAL",
      description:
        "Rummy was declared to be a game of skill by the Honbl. Supreme Court of India in 1968 and is 100% legal to play for free or cash.",
    },
  ];

  return (
    <div className="card-section">
      <div className="container d-flex flex-column flex-lg-row">
        {content.map((item, index) => (
             <div key={index+'cards'} className="card-section--box">
             <h1>{item.title}</h1>
             <p>{item.description}</p>
           </div>
        ))}
      </div>
    </div>
  );
};
export default CardSection;
