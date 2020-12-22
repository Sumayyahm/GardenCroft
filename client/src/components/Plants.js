import React from 'react';
import { Image, Container, Grid, Header } from 'semantic-ui-react';
import annuals from '../images/annuals.jpg';
import perennials from '../images/perennials.jpg';
import succulents from '../images/succulents.jpg';
import houseplants from '../images/houseplants.jpg';
import roses from '../images/roses.jpg';
import { Link } from 'react-router-dom';
import greencroft from  '../images/gclogo.png'


const styles ={
        display: 'block',
        marginLeft: 'auto',
        marginRight:'auto',
        border: 'solid',
        borderColor: 'grey',
        borderWidth: '1px',
        boxShadow: '1px 1px 4px 1px gray'
    }

const style1 = {
    marginRight: "40%"
}

function Plants() { 

  

  return (
  <div style={{backgroundColor:'white'}}>
      <br></br><br></br>
  <Container>
  <Image src={greencroft} style={{display: 'block', marginLeft:'auto', marginRight:'auto'}} size='medium'/>
  <br></br><br></br><br></br>
  
  <Grid>
  <Grid.Row columns={2}>
    <Grid.Column>
        <Link to={`/plants/annual`}>
          <Image 
          fluid
          label={{
            color: 'black',
            content: 'Annuals',
            ribbon: true,
          }}
          as='a' 
          size='huge' 
          src= {annuals} 
          style={styles}/>
        </Link> 
    </Grid.Column>
   
    <Grid.Column>
      <Link to={`/plants/perennial`}>
        <Image 
        fluid
        label={{
          color: 'black',
          content: 'Perennials',
          ribbon: true,
        }}
        as='a' 
        size='huge' 
        src= {perennials} 
        style={styles}/>
      </Link> 
    </Grid.Column>
    </Grid.Row>
    
    <Grid.Row columns={1}>
    <Grid.Column>
      <Link to={`/plants/roses`}> 
        <Image 
        fluid
        label={{
          color: 'black',
          content: 'Roses',
          ribbon: true,
        }}
        as='a' 
        size='big'
        src= {roses} 
        style={styles}/>
      </Link> 
    </Grid.Column>
  </Grid.Row>  

    <Grid.Row columns={2}>   

    <Grid.Column>
      <Link to={`/plants/succulents`}>
        <Image 
        fluid
        label={{
          color: 'black',
          content: 'Succulents',
          ribbon: true,
        }}
        as='a'
        size='huge' 
        src= {succulents} 
        style={styles}/>
      </Link> 
    </Grid.Column>

    <Grid.Column>
      <Link to={`/plants/houseplant`}> 
        <Image 
        fluid
        label={{
          color: 'black',
          content: 'HousePlants',
          ribbon: true,
        }}
        as='a'
        size='huge' 
        src= {houseplants} 
        style={styles}/>
      </Link>
    </Grid.Column>

  </Grid.Row>  
  </Grid>  
    <br></br><br></br>
    </Container>
    <br></br><br></br><br></br><br></br><br></br>
    </div>
)
};

export default Plants