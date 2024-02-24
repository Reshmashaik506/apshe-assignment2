import './App.css';
import { Card } from './components/card/Card';
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import image4 from './images/image4.jpeg'
import image5 from './images/image5.jpeg'
import image6 from './images/image6.jpeg'



function App() {
  const cards = [
    {
      url:image1,
      title:"Formal Dress",
      description:"Dresses are outer garments made up of a bodice and a skirt and can be made in one or more pieces."
    },
    {
      url:image2,
      title:"Mini Dress",
      description:"Dresses are outer garments made up of a bodice and a skirt and can be made in one or more pieces. "
    },
    {
      url:image3,
      title:"Skirt",
      description:"Dresses are outer garments made up of a bodice and a skirt and can be made in one or more pieces. "
    },
    {
      url:image4,
      title:"Party Wear",
      description:"Dresses are outer garments made up of a bodice and a skirt and can be made in one or more pieces. "
    },
    {
      url:image5,
      title:"Wedding Dress",
      description:"Dresses are outer garments made up of a bodice and a skirt and can be made in one or more pieces. "
    },
    {
      url:image6,
      title:"Western Dress",
      description:"Dresses are outer garments made up of a bodice and a skirt and can be made in one or more pieces. "
    },
  ]
  return (
     <div className="app">
       {
         cards.map((card,index)=><Card key={index} card={card}/>)
       }
     </div>
  );
}

export default App;
