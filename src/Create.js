import React from 'react'


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

export default Create
