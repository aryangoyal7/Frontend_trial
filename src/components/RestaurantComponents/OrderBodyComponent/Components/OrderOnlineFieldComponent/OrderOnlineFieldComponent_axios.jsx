import {useEffect, useState} from 'react'
import {Formik, Form} from 'formik'
import css from './OrderOnlineFieldComponent.module.css'
import FoodItemProduct from '../../../../../utils/RestaurantUtils/FoodItemProduct/FoodItemProduct'
const OrderOnlineFieldComponent = () => {

  const [isActive, setIsActive] = useState({
    
  });
  const [foodType, setFoodType] = useState({
    
  });



  // use the below code to push info into database via an api 
  


  const handleAddToCart = async () => {
    try {
      const user = getUser(); // get the currently logged in user
      const ClubID = "123"; // hardcoded ClubID
      const dataToSend = { price, ttl, user, ClubID }; // data to send in the request
      const response = await axios.post("/api/bookings", dataToSend); // make the request
      console.log(response.data); // log the response
    } catch (error) {
      console.error(error); // log any errors
    }
  };

/*
  
  <button onClick={handleAddToCart}>Add to Cart</button> 
  */
  
  // place this button in a such a way, it sends booking info on click 

       

  

  const initialValues = {veg: false, egg: false}

  const foodItemsData = {
    Couple: [
      { ttl:"Standing table", votes:"12", price:"6900", desc:"Standing table with Full Cover!", },
      { ttl:"Without Table", votes:"12", price:"1000", desc:"Full Cover of the payment",},
     
    ],
    Stags: [
      { ttl:"Standing table", votes:"12", price:"3000", desc:"Standing table with Full Cover!", },
      { ttl:"Without Table", votes:"12", price:"2000", desc:"Full Cover of the payment",}
    ],
     Ladies: [
      { ttl:"Standing table", votes:"12", price:"2000", desc:"Standing table with Full Cover!", },
      { ttl:"Without Table", votes:"12", price:"1000", desc:"Full Cover of the payment",}
    ],
    Table: [
      {ttl:"Standing table", votes:"12", price:"2000", desc:"Standing table with Full Cover!", },
      { ttl:"Without Table", votes:"12", price:"1000", desc:"Full Cover of the payment",}
    ],
  }

  let breakDiv = <hr className={css.hr2} />
  const foodItemsDataLength = Object.keys(foodItemsData).length

  const breakDivFunc = (index) => {
    if(+foodItemsDataLength- 1 > +index){
      return breakDiv;
    }
    breakDiv = ""
    return breakDiv;
  }

  const sideNavHandler = (val) => {
    setIsActive({[val?.[0]] : true});
    document.getElementById(`${val?.[0]}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const allTtls = document.querySelectorAll('[data-id=secTtl]');
    const options = {
      threshold: 0.1
    }

    const handleIntersection = (entries) => {
      entries?.map(entry => {
          if(entry.isIntersecting){
            document.querySelector(`[data-sb-id='${entry.target.id}']`)?.classList.add(css.activeNavTab);
          }else{
            document.querySelector(`[data-sb-id='${entry.target.id}']`)?.classList.remove(css.activeNavTab);
          }
        })
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    allTtls.forEach(post => observer.observe(post))
  }, [])

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.leftBox}>
        {Object.entries(foodItemsData)?.map((val, id) => {
          
          
          return <div data-sb-id={val?.[0]} key={id} onClick={() => sideNavHandler(val)} className={isActive[val?.[0]] ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}>{val?.[0]} ({val?.[1]?.length})</div>
        })}
      </div>
      <div className={css.rightBox}>
      
        <div className={css.tabBox}>
         
          <div className={css.hr} />
          <div className={css.tagLine}>
            
            
          </div>
        </div>
      
        <div className={css.formBox}>
          <Formik initialValues={initialValues}>
              <Form className={css.form}>
                    
                    
               </Form>
          </Formik>
        </div>
        <div className={css.itemsBox} id='itemsBox'>
          {Object.entries(foodItemsData)?.map((val, index) => {
            return <div key={index} >
              <div className={css.sec} >
                <div className={css.secTtl}>{val[0]}</div>
                {foodType.egg ? 
                  val[1]?.map((item, id) => {
                    if(item?.foodType === "egg"){
                      return <FoodItemProduct   key={id} data={item} dataset="secTtl" id={val[0]}  />
                    }
                  })
                : 
                foodType.veg ?
                  val[1]?.map((item, id) => {
                    if(item?.foodType === "veg"){
                      return <FoodItemProduct   key={id} data={item} dataset="secTtl"  id={val[0]} />
                    }
                  })
                : 
                  val[1]?.map((item, id) => {
                    return <FoodItemProduct  key={id} data={item} dataset="secTtl" id={val[0]}  />
                  })
                }
                {/* {val[1]?.map((item, id) => {
                  return <FoodItemProduct key={id} {...item}  />
                })} */}
              </div>
              {breakDivFunc(index)}
            </div>
          })}
        </div>
      </div>
    </div>
   
  </div>
}

export default OrderOnlineFieldComponent