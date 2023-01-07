import React, {useState} from "react";
import "./landing_page.css";
import Editor from "../Components/Editor";

export default function LandingPage() {

    var path = process.env.PUBLIC_URL;
  let cardGrid = ['/imagi-son.jpg','/fa-bike.png','/car.jpg','/dis.jpeg','/dog.jpg','fam.jpg','glasses.jpg','lion.jpg','story.jpg','toy.jpg']

  const [text, setText] = useState('');
  const [activeImg, setActiveImg] = useState(0);
  const [emojiVisible, setEmojiVisible] = useState(false);


  return (
    <div className="page-wrapper">
        <div className="d-flex justify-content-between align-items-center bri-nav-bar">
            <img src="./bri_logo.svg" className="logo"/>
            <div className="btn-wrapper">
                <button className="bri-btn theme-btn"><i class="fas fa-image"  style={{color:"black"}}></i> Change Theme</button>
                <button className="bri-btn user-btn"><i class="fas fa-user"></i> <span style={{marginRight:'20px'}}>John Doe</span> <i class="fas fa-caret-down"></i></button>
            </div>  
        </div>
        <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex side-img-wrapper">
               <p className="side-img-num">1</p>
               <img src="./imagi-son.jpg" className="side-img"/>
              </div>
              <div className="d-flex side-img-wrapper">
               <p className="side-img-num">2</p>
               <img src="./fa-bike.png" className="side-img"/>
              </div>
            </div>
            <div>
                <div className="book-wrapper">
                    <div>
                        <div className="d-flex bri-book-effect">
                        <div className="page" style={{zIndex:'999'}}></div>
                        <div className="page"></div>
                        </div>
                        <div className="img-page">
                            <img src={path+cardGrid[activeImg]} style={{width:"900px",height:'550px'}}/>
                        </div>
                    </div>
                    <div className="inpt-wrapper">    
                    {emojiVisible ? <Editor setEmojiVisible={setEmojiVisible} /> : <input type="text" value={text} onChange={e=>setText(e.target.value)} onFocus={()=>setEmojiVisible(true)} placeholder="Start Typing Here" className="inpt"/>}
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="bri-btn help-btn"> <i class="fas fa-robot" style={{color:"black"}}></i> Help Me</button>
                    <button className="bri-btn rev-btn"> <i class="fas fa-eye"></i> Book Review</button>
                    <button className="bri-btn add-btn"> <i class="fas fa-plus"></i>Add New Page</button>
                </div>
            </div>
            <div className="bg-selector-cont">
            <div className="cont-wrapper">
                <div className="cont-content">
                <div className="d-flex justify-content-between">
                    <p style={{fontWeight:'bold',color:'gray'}}>Change Background</p>
                    <div><img src="./sec-icon.png" style={{width:'20px'}}/></div>
                </div>
                <div className="d-flex justify-content-between align-items-center drop-sel">
                    <span>Imagination</span>
                    <i class="fas fa-caret-down"></i>
                </div>
                <div className="d-flex justify-content-between flex-wrap" >
                    {cardGrid.map((item, index)=>{
                        console.log( activeImg.target,index, activeImg == index);
                        return  <img src={path + item}  value={index} className={activeImg == index ? 'active-img' : "grid-img" } key={index} onClick={()=>setActiveImg(index)}/>
                    })}
                </div>
                </div>
            </div>
                <div className="upload-btn">Upload A Custom Image</div>
            </div>    
        </div>
    </div>
  );
}
