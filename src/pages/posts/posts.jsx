import React, { useState, useEffect } from 'react';
import { Card, Row, Col ,Modal ,Button  } from 'antd';
import {  HeartFilled, StarFilled ,HeartOutlined ,PlusOutlined } from "@ant-design/icons"
import axios from 'axios';

const DEFAULT_HEART_COLORS = {};

const ItemsPage = ({count ,setCount}) => {
  const [items, setItems] = useState([]);
  const [buttons, setButtons] = useState(true); 
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [counterOnModal, setCounterOnModal] = useState(0);
  const [initialPrice, setInitialPrice] = useState(0);
  const [selectedItemPrice, setSelectedItemPrice] = useState(0);
  const [heartColors, setHeartColors] = useState(DEFAULT_HEART_COLORS);
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCounterOnModal(count);
    if (selectedItem) {
      setSelectedItemPrice(selectedItem.price * count);
    }
  }, [count]);
  useEffect(() => {
    const newColors = {};
    items.forEach(item => {
      newColors[item.id] = 'white'; 
    });
    setHeartColors(newColors);
  }, [items]);
  
  const toggleHeartColor = (id) => {
    setHeartColors(prevColors => {
      const newColors = {...prevColors};
      newColors[id] = newColors[id] === 'red' ? 'white' : 'red';
      return newColors;
    });
  };
  
  useEffect(() => {
    if (selectedItem) {
      const price = selectedItem.price * counterOnModal;
      setSelectedItemPrice(price);
    }
  }, [counterOnModal, selectedItem]);
  
  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
    setInitialPrice(item.price);
    setSelectedItemPrice(item.price);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setCounterOnModal(0);
  };
 
  const handleOk = () => {
    setIsModalVisible(false);
    const updatedItems = items.map(item => {
      if (item.id === selectedItem.id) {
        return {
          ...item,
          count: counterOnModal,
          price: selectedItemPrice,  
        };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
    setCounterOnModal(0);
    setSelectedItemPrice(0); 
  };
  

  const incrementCounter = () => {
    var incrementedCounter = counterOnModal + 1;
    setCounterOnModal(incrementedCounter);
  
    if (selectedItem) {
      const newPrice = initialPrice * incrementedCounter;
      setSelectedItemPrice(newPrice);
    }
  };
  const decrementCounter = () => {
    if (counterOnModal > 0) {
      var decrementedCounter = counterOnModal - 1;
      setCounterOnModal(decrementedCounter);
  
      if (selectedItem) {
        const newPrice = initialPrice * decrementedCounter;
        setSelectedItemPrice(newPrice);
      }
    }
  };
  
  
  const fetchData = async () => {
    try {
      const imagesResponse = await fetch('https://f-07-backend.vercel.app/api/v1/image');
      const pricesResponse = await axios.get('http://localhost:5000/prices');

      const imageData = await imagesResponse.json();
      const pricesData = pricesResponse.data;

      const combinedData = imageData.map((item, index) => ({
        ...item,
        price: pricesData[index] ? pricesData[index].price : '',
        count: 0 
      }));

      setItems(combinedData);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  

  return (
    <div>
       <h1 style={{marginLeft:"30px",marginTop:"20px"}}> Модная осень  </h1>
       <Row gutter={[10,10]} style={{padding:" 50px 25px",width:"100%"}}>
<Col className='col' style={{ display: "flex", gap:"10px",flexWrap:"wrap" }}>
<Card className='card' >
              <div style={{width:"100%",display:"flex",borderRadius:"5px",justifyContent:"center",alignItems:"end",height:"180px"}}>
                  <img className='img' style={{ width: "185px",borderRadius:"10px",margin:"auto"}} src="https://cdn.skidka-msk.ru/images/prodacts/sourse/67374/67374091_krossovki-dlya-fitnesa-rapidaflex-adidas-performance.jpg" alt="" />
                {
                  heartColors === 'red' ? 
                  <HeartFilled className='heart' onClick={() => toggleHeartColor()} style={{position:"absolute",fontSize:"18px",top:"35px",right:"35px", color:'red'}}/> :
                  <HeartOutlined className='heart' onClick={() => toggleHeartColor()} style={{position:"absolute",fontSize:"18px",top:"35px",right:"35px", color:'white'}}/>
                }
                </div>
                <h3 style={{fontWeight:"700",fontSize:"15px",marginTop:"20px"}}>Krassovka</h3>
                <StarFilled  style={{color:"gold"}}/> 29 (29 оценок ) <br />
                <p style={{fontSize:"12px"}}><mark style={{borderRadius:"5px",padding:"2px 5px"}}>12.35/ месяц</mark></p>
                <br />
                <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{width:"65%"}}>
                  <del>299 000 so`m</del>
                <p style={{color:"#7000FF"}}>250 000 so`m</p>  
                  </div>
                  <div style={{width:"20%"}}>
                    <button onClick={showModal} style={{padding:"8px 10px",border:"1px solid lightgrey",borderRadius:"50%",backgroundColor:"white"}}>
                      <PlusOutlined/>
                    </button>
                  </div>
                  </div> 
              </Card>
              <Card className='card' >
              <div style={{width:"100%",display:"flex",borderRadius:"5px",justifyContent:"center",alignItems:"end",height:"180px"}}>
                  <img className='img' style={{ width: "185px",borderRadius:"10px",margin:"auto"}} src="https://cdn.skidka-msk.ru/images/prodacts/sourse/67374/67374091_krossovki-dlya-fitnesa-rapidaflex-adidas-performance.jpg" alt="" />
                {
                  heartColors === 'red' ? 
                  <HeartFilled className='heart' onClick={() => toggleHeartColor()} style={{position:"absolute",fontSize:"18px",top:"35px",right:"35px", color:'red'}}/> :
                  <HeartOutlined className='heart' onClick={() => toggleHeartColor()} style={{position:"absolute",fontSize:"18px",top:"35px",right:"35px", color:'white'}}/>
                }
                </div>
                <h3 style={{fontWeight:"700",fontSize:"15px",marginTop:"20px"}}>Krassovka</h3>
                
                <StarFilled  style={{color:"gold"}}/> 29 (29 оценок ) <br />
                <p style={{fontSize:"12px"}}><mark style={{borderRadius:"5px",padding:"2px 5px"}}>12.35/ месяц</mark></p>
                <br />
                <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{width:"65%"}}>
                  <del>299 000 so`m</del>
                <p style={{color:"#7000FF"}}>250 000 so`m</p>  
                  </div>
                  <div style={{width:"20%"}}>
                    <button onClick={showModal} style={{padding:"8px 10px",border:"1px solid lightgrey",borderRadius:"50%",backgroundColor:"white"}}>
                      <PlusOutlined/>
                    </button>
                  </div>
                  </div> 
              </Card> <Card className='card' >
              <div style={{width:"100%",display:"flex",borderRadius:"5px",justifyContent:"center",alignItems:"end",height:"180px"}}>
                  <img className='img' style={{ width: "185px",borderRadius:"10px",margin:"auto"}} src="https://cdn.skidka-msk.ru/images/prodacts/sourse/67374/67374091_krossovki-dlya-fitnesa-rapidaflex-adidas-performance.jpg" alt="" />
                {
                  heartColors === 'red' ? 
                  <HeartFilled className='heart' onClick={() => toggleHeartColor()} style={{position:"absolute",fontSize:"18px",top:"35px",right:"35px", color:'red'}}/> :
                  <HeartOutlined className='heart' onClick={() => toggleHeartColor()} style={{position:"absolute",fontSize:"18px",top:"35px",right:"35px", color:'white'}}/>
                }
                </div>
                <h3 style={{fontWeight:"700",fontSize:"15px",marginTop:"20px"}}>Krassovka</h3>
                                <StarFilled  style={{color:"gold"}}/> 29 (29 оценок ) <br />
                <p style={{fontSize:"12px"}}><mark style={{borderRadius:"5px",padding:"2px 5px"}}>12.35/ месяц</mark></p>
                <br />
                <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{width:"65%"}}>
                  <del>299 000 so`m</del>
                <p style={{color:"#7000FF"}}>250 000 so`m</p>  
                  </div>
                  <div style={{width:"20%"}}>
                    <button onClick={showModal} style={{padding:"8px 10px",border:"1px solid lightgrey",borderRadius:"50%",backgroundColor:"white"}}>
                      <PlusOutlined/>
                    </button>
                  </div>
                  </div> 
              </Card> <Card className='card' >
              <div style={{width:"100%",display:"flex",borderRadius:"5px",justifyContent:"center",alignItems:"end",height:"180px"}}>
                  <img className='img' style={{ width: "185px",borderRadius:"10px",margin:"auto"}} src="https://cdn.skidka-msk.ru/images/prodacts/sourse/67374/67374091_krossovki-dlya-fitnesa-rapidaflex-adidas-performance.jpg" alt="" />
                {
                  heartColors === 'red' ? 
                  <HeartFilled className='heart' onClick={() => toggleHeartColor()} style={{position:"absolute",fontSize:"18px",top:"35px",right:"35px", color:'red'}}/> :
                  <HeartOutlined className='heart' onClick={() => toggleHeartColor()} style={{position:"absolute",fontSize:"18px",top:"35px",right:"35px", color:'white'}}/>
                }
                </div>
                <h3 style={{fontWeight:"700",fontSize:"15px",marginTop:"20px"}}>Krassovka</h3>
                
                <StarFilled  style={{color:"gold"}}/> 29 (29 оценок ) <br />
                <p style={{fontSize:"12px"}}><mark style={{borderRadius:"5px",padding:"2px 5px"}}>12.35/ месяц</mark></p>
                <br />
                <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{width:"65%"}}>
                  <del>299 0000 so`m</del>
                <p style={{color:"#7000FF"}}>250 000 so`m</p>  
                  </div>
                  <div style={{width:"20%"}}>
                    <button onClick={showModal} style={{padding:"8px 10px",border:"1px solid lightgrey",borderRadius:"50%",backgroundColor:"white"}}>
                      <PlusOutlined/>
                    </button>
                  </div>
                  </div> 
              </Card>
      <Modal footer={null} style={{width:"100%",height:"100vh",marginTop:"-20px"}} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{display:"flex",gap:"20px"}}>
<img src="https://cdn.skidka-msk.ru/images/prodacts/sourse/67374/67374091_krossovki-dlya-fitnesa-rapidaflex-adidas-performance.jpg"  style={{ width: '50%',height:"300px" }}/>    
 <div>
  <Button style={{color:"white",background:"#705FFF",height:"37px"}} onClick={incrementCounter}>
          +
        </Button>

        <Button style={{color:"white",marginLeft:"5px",background:"yellow",height:"37px",border:"3px solid yellow"}} onClick={decrementCounter} disabled={counterOnModal === 1}>
          -
        </Button>

        <p>Current count: {count}</p>
        <p>Price: {selectedItemPrice  * selectedItem}</p>
  </div>
</div>
  </Modal>
</Col>

        {items.map((item, index) => {
          return (
            <Col className='col'  key={item.id} style={{ display: "flex", gap:"10px",flexWrap:"wrap" }}>
               
            <Card className='card' >
              <div style={{width:"100%",display:"flex",borderRadius:"5px",justifyContent:"center",background:"lightgrey",alignItems:"end",height:"180px"}}>
                  <img className='img' style={{ width: "185px",borderRadius:"10px",margin:"auto"}} src="https://allegrobowling.ru/wp-content/uploads/a/f/a/afa692b0f3d4d0338dca1b38e0061637.jpeg" alt="" />
                  {
                  heartColors[item.id] === 'red' ? 
                  <HeartFilled className='heart' onClick={() => toggleHeartColor(item.id)} style={{position:"absolute",fontSize:"18px",top:"35px",right:"35px", color:'red'}}/> :
                  <HeartOutlined className='heart' onClick={() => toggleHeartColor(item.id)} style={{position:"absolute",fontSize:"18px",top:"35px",right:"35px", color:'white'}}/>
                }
                </div>
                <h3 style={{fontWeight:"700",fontSize:"15px"}}>{item.text}</h3>
                <StarFilled  style={{color:"gold"}}/> 29 (29 оценок ) <br />
                <p style={{fontSize:"12px"}}><mark style={{borderRadius:"5px",padding:"2px 5px"}}>12.35/ месяц</mark></p>
                <br />
                <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{width:"65%"}}>
                  <del>1{item.price} so`m</del>
                <p style={{color:"#7000FF"}}>{item.price} so`m</p>  
                  </div>
                  <div style={{width:"20%"}}>
                    <button onClick={showModal} style={{padding:"8px 10px",border:"1px solid lightgrey",borderRadius:"50%",backgroundColor:"white"}}>
                      <PlusOutlined/>
                    </button>
                  </div>
                  </div> 
              </Card>
              {
selectedItem && (
      <Modal title={selectedItem.text} footer={null} style={{width:"100%",height:"100%",marginTop:"-20px"}} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{display:"flex",gap:"20px"}}>
<img src={selectedItem.url} style={{ width: '50%',height:"300px" }} alt={selectedItem.text} />    
 <div>
  <Button style={{color:"white",background:"#7000FF",height:"37px"}} onClick={incrementCounter}>
          +
        </Button>

        <Button style={{color:"white",marginLeft:"5px",background:"yellow",height:"37px",border:"3px solid yellow"}} onClick={decrementCounter} disabled={counterOnModal === 1}>
          -
        </Button>

        <p>Current count: {counterOnModal}</p>
        <p>Price: {selectedItemPrice * selectedItem.price}</p>
  </div>
</div>
  </Modal>
)
}

            </Col>
          )
        })}
      </Row> 
    </div>
  );
}; 

export default ItemsPage;
