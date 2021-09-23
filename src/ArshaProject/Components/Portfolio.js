import React, { useState , useEffect} from 'react';
import { Images } from "./Images";
import { Button, Card, Col , Row } from "reactstrap";
import './Portfolio.css';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Portfolio() {

  useEffect(() => {
    AOS.init({
        duration : 1000
    });
    
  }, []);

  let menuItems = [{ title: 'All', category: null }, { title: 'App', category: 'app' }, { title: 'Card', category: 'card' }, { title: 'Web', category: 'web' }];

  const [portfolioItems, setPortfolioItems] = useState(Images);
  const [portfolioItemsFiltered, setPortfolioItemsFiltered] = useState(portfolioItems);


  const setItems = (category) => {
    if (category) {
      setPortfolioItemsFiltered(portfolioItems.filter(x => x.category === category));
    }
    else
    setPortfolioItemsFiltered(portfolioItems);
  }

  return (
    <div className="container mt-5" >
        <Row>
           <Col xs="12"><h1 className="aboutHeader">PORTFOLIO</h1> </Col>
           <Col xs="12" className="p-3">
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
        </Row>
      <div className="portfolioButtons">
      {
        menuItems.map(item =>
          <Button className="folioButtons" outline onClick={() => setItems(item.category)}>{item.title}</Button>
        )
      }
      </div>
      
            <div className="portfolioFlex" data-aos="zoom-in" data-aos-once="true">
              <Row>
              {
                  portfolioItemsFiltered.map((item) => {
                    return (
                      <Col md="4"> 
                        <Card className="portfolioCard">
                          <img src={item.imgName} alt="portfolio" className="portfolioImg " height={item.height} ></img>
                        </Card>
                      </Col>  
                      );
                  })
              }
              </Row>
            </div>
        
    </div>
  );
}
