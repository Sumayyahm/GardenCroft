import React from 'react';
import { Item } from 'semantic-ui-react';
import annuals from '../images/annuals.jpg';
import perennials from '../images/perennials.jpg';
import succulents from '../images/succulents.jpg';
import monstera from '../images/monstera_2400px.jpg';
import roses from '../images/roses.jpeg';
import { Link } from 'react-router-dom';
// import SortPlants from './SortPlants';

const styles ={
        display: "block",
        marginLeft: "25%"
    }

const style1 = {
    marginRight: "40%"
}

function Plants() { 

  

  return (
  <div>
      <br></br><br></br><br></br><br></br><br></br>
  <Item.Group>
    <Item>
      <Item.Image size='medium' src= {annuals} style={styles}/>
        <Item.Content>
          <Item.Header as='a'>
            <Link to={`/plants/annuals`}>
                Annuals
            </Link>
          </Item.Header>
            <Item.Description style={style1}>
              Plants that perform their entire life cycle from seed to flower to seed within a single growing season. All roots, stems and leaves of the plant die annually. Only the dormant seed bridges the gap between one generation and the next.
            </Item.Description>
        </Item.Content>
    </Item>

    <Item>
      <Item.Image size='medium' src= {perennials} style={styles}/>
        <Item.Content>
            <Item.Header as='a'>
              <Link to={`/plants/perennial`}>
                 Perennials
              </Link> 
            </Item.Header>
            <Item.Description style={style1}>
            Plants that persist for many growing seasons.Many perennial plants do keep their leaves year round and offer attractive borders and groundcover.(source Wikipedia)
            </Item.Description>
        </Item.Content>
    </Item>

    <Item>
      <Item.Image size='medium' src= {roses} style={styles}/>
        <Item.Content>
            <Item.Header as='a'>
              <Link to={`/plants/roses`}> 
                Roses
              </Link> 
            </Item.Header>
            <Item.Description style={style1}>
            A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears.[1] There are over three hundred species and tens of thousands of cultivars.  Flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds.
            </Item.Description>
        </Item.Content>
    </Item>

    <Item>
      <Item.Image size='medium' src= {succulents} style={styles}/>
        <Item.Content>
            <Item.Header as='a'>
              {/* <Link to={`${url}/succulents`}> */}
                Succulents
              {/* </Link> */}
            </Item.Header>
            <Item.Description style={style1}>
              Succulents are plants with parts that are thickened, fleshy, and engorged, usually to retain water in arid climates or soil conditions.
            </Item.Description>
        </Item.Content>
    </Item>

    <Item>
      <Item.Image size='medium' src= {monstera} style={styles}/>
        <Item.Content>
            <Item.Header as='a'>
              {/* <Link to={`${url}/houseplants`}> */}
                House Plants
              {/* </Link> */}
            </Item.Header>
            <Item.Description style={style1}>
            Houseplants are plants that are grown indoors in places such as residences and offices, mainly for decorative purposes, but they are known to have positive psychological effects and as well as help with indoor air purification and the soil-dwelling microbes associated with them, reduce indoor air pollution.
            </Item.Description>
        </Item.Content>
    </Item>
  </Item.Group>     
    <br></br><br></br>
    </div>
)
};

export default Plants