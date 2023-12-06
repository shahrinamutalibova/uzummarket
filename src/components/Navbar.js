import React ,{useState} from 'react'
import {EnvironmentOutlined,DownOutlined, InsertRowAboveOutlined ,CloseOutlined ,InboxOutlined,UserOutlined ,HeartOutlined } from "@ant-design/icons"
import { Input } from 'antd';
import { Button ,Modal ,Menu  } from 'antd';
import {Link , useNavigate ,useLocation } from 'react-router-dom';
import Carousel from "./Carousel"
import { toPrev } from 'react-redux-terminal/t_actions';
export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const { Search } = Input;
    const [openModal , setOpenModal] = useState(false)
    const [openModalEshe , setOpenModalEshe] = useState(false)

    const navigate = useNavigate()
    const location = useLocation();
    const [toggled, setToggled] = useState(false);
    const Users = () =>{
      if (!toggled) {
        navigate('/electronica');
      } else if ((location.pathname === '/electronica')) {
        navigate('/posts');
      }
      setToggled(!toggled);
    setCollapsed(!collapsed)
    }
    const handleAddClick = () => {
        setOpenModal(true);
      };
      const handleAddClick1 = () => {
        setOpenModalEshe(true);
      };
    
      const lovely = () =>{
        navigate('/lovely')
      }
    const corzina = () =>{
        navigate('/corzina')
    }

    
      const handleCancel = () => setOpenModal(false);
      const handleCancel1 = () => setOpenModalEshe(false);

  return (
    <div>
        <nav className='navgrey'>
        <div className='div1'>
        <EnvironmentOutlined />
         <p>Город: </p><p className='h4'>Ташкент</p>
         <p className='p'>Пункты выдачи</p>
        </div>
        <div className='div2'>
           <p className='preverse'>Зопрос-ответ</p>
           <p className='preverse'>Мои заказы</p>
           <img style={{width:"20px",borderRadius:"50%"}} src="https://live.staticflickr.com/65535/49214918628_de55cc9093_o.jpg" alt="" />
           <p>Русский</p>
        </div>
        </nav>
        <nav  className='navbar1'>
            <img src="https://besh.uz/uzum.png" alt="" />
            <Button
                type="text"
                onClick={Users}
                className='catalog'
                >
                {collapsed ?  [<CloseOutlined/>, " Каталог"] : [ <InsertRowAboveOutlined />, " Каталог"]}
                </Button>
                <Search size="large" placeholder='Искать товары и категории' className="my-custom-input" style={{width:"80%",height:"40px",marginLeft:"8px"}}/>
                 <div style={{display:"flex",justifyContent:"end",width:"300px",gap:"23px",fontSize:"20px"}}>
                    <UserOutlined onClick={handleAddClick}/>
                    <Modal onCancel={handleCancel} style={{top:"50px"}} visible={openModal} footer={null} width={350} 
                    > 
       <br/> 
           <h1 style={{fontSize:"24px"}}>Введите номер телефона</h1>
           <p>Отправим смс с кодом подтверждения</p> <br />
           <input style={{width:"100%",height:"40px",padding:"0 10px"}} placeholder='+9989 4 404 39 78' type="phone" /><br /><br />
           <button className='btn1' style={{width:"100%",height:"50px",borderRadius:"10px"}}>Получить код</button>
           <div> <br /><br /><br />
            Авторизуясь, вы соглашаетесь c <br />
            <p style={{color:"blue"}}>политикой обработки персональных данных</p>
           </div>
      </Modal>
                    <HeartOutlined onClick={lovely}/>
                    <InboxOutlined  onClick={corzina}/>
                 </div>
        </nav>
        <nav className='navbar2'>
           <div style={{width:"30%",gap:"5px",display:"flex",alignItems:"center"}}>
           <img style={{width:"25px"}} src="https://static.uzum.uz/product-action/paiment.png" alt="" />
            <h5> Халялная рассрочка</h5>
           </div>
           <div className='links' >
           <Menu className='menu'
          style={{display:"flex"}}
          onClick={(item)=> navigate(item.key) }
      >
          <Menu.Item  className='alink' key='/posts'>
             
          Электроника
                  
          </Menu.Item>
          <Menu.Item className='alink' key="/users" onClick={() => navigate('/users')}>
    
          Бытовая техника
                  
</Menu.Item>
          <Menu.Item  className='alink'key='/albums'>
              
          Одежда
                  
          </Menu.Item>
          <Menu.Item className='alink' key='/todos'>
              
          Обувь
                  
          </Menu.Item>
          <Menu.Item className='alink' key='/aksessuarii'>
              
              
          Аксессуары
                  
                      
              </Menu.Item>
              <Menu.Item className='alink' key='/krasotaa'>
              Красота                          
                  </Menu.Item>
                  <Menu.Item className='alink' key='/zdorovee'>      
                    Здоровье
                  </Menu.Item>
                  <Menu.Item onClick={handleAddClick1} className='alinkk' style={{display:"flex",alignItems:"center"}} key={'/electronica'} >
    Ещё
    <DownOutlined style={{fontSize:"10px"}}/>      
</Menu.Item>

      </Menu>
        
           </div>
        </nav>
        <Carousel/>
    </div>
  )
}
