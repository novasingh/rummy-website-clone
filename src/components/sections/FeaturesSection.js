import FeaturesImg1 from "../../assets/images/1-1.png";
import FeaturesImg2 from "../../assets/images/2-1.png";
import FeaturesImg3 from "../../assets/images/3.png";
const FeaturesSection = () => {

    const featuresArray = [
        {
            title:'Introduction',
            description:'Rummy game is a famous game kind with 2 to 6 players playing 2 decks of cards.'
        },
        {
            title:'Playing Method',
            description:'Basically, for the purpose of winning game, player has to choose or give up a card from the valid order and 2 stacks given to the group.'
        },
        {
            title:'Contact Us',
            description:'We are here to help. If you are facing any issues or have any queries regarding the Sky Rummy App like please get in touch with us, we will be happy to assist you.'
        },
        {
            title:'Service Content',
            description:'The best part about this game is that you can win REAL PRIZE and WITHDRAW IT！'
        },
    ]
    return (
        <div className="features-section">
            <div className="container">
                <h2>Offer Special Features</h2>
                <div className="d-flex flex-wrap flex-column flex-lg-row">
                    {featuresArray.map((item,i) => (
                        <div className="w-50 cards" key={`cards-features-`+i}>
                        <div className="card-inner">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        </div>   
                    ))}
                </div>
                <div className="features-images mb-4 d-flex flex-wrap flex-column flex-lg-row gap-0 gap-lg-3">
                    <img src={FeaturesImg1} loading="lazy" className="w-30 p-2 p-lg-0"  alt="Piker 1" />
                    <img src={FeaturesImg2} loading="lazy" className="w-30 p-2 p-lg-0" alt="Poker 2" />
                    <img src={FeaturesImg3} loading="lazy" className="w-30 p-2 p-lg-0" alt="Rummy 3" />
                </div>   
            </div>
        </div>
    );
}
export default FeaturesSection;