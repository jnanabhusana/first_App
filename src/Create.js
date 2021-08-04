import React from 'react'
function image(){
    const name ='jnanabhusan behera';
    const img1="https://picsum.photos/200/300";
    const img2="https://picsum.photos/201/300";
    const img3="https://picsum.photos/203/300";
    const heading={
        color:"rgb(0, 89, 255)",
        textAlign: "center",
        textTransform: "capitalize",
        fontWeight: "bold",
        textShadow: "0px 2px 4px" ,
        fontFamily: '"Style Script", cursive'
      }
      return (
        <div className="App">
     
      <h1 style={heading}>{name}</h1>
      <img src={img1} alt=""/>
      <img src={img2} alt=""/>
      <img src={img3} alt=""/>
        </div>
      );
}
function Create() {
    let curDate= new Date();
    curDate =curDate.getHours();
    let greeting="";
    const cssStyle={};
    if(curDate >=1 && curDate <12){
        greeting="GoodMoring";
        cssStyle.color="green";
    }
   else if(curDate >=12 && curDate <18){
        greeting="GoodAfterNoon";
        cssStyle.color="red";
    }
    else{
        greeting="GoodNight";
        cssStyle.color="blue";
    }
    return (
        <div>
            <h1>Hello sir !! <span style={cssStyle}>{greeting}</span></h1>
        </div>
    )
}

export {Create, image};
