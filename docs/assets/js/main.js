"use strict";const designContainer=document.querySelector(".js-designContainer"),fillContainer=document.querySelector(".js-fillContainer"),shareContainer=document.querySelector(".js-shareContainer"),designCollapsable=document.querySelector(".js-designCollapsable"),fillCollapsable=document.querySelector(".js-fillCollapsable"),shareCollapsable=document.querySelector(".js-shareCollapsable");function hideDesign(){designContainer.classList.toggle("hidden"),designContainer.classList.toggle("margins"),designCollapsable.classList.toggle("rotate")}function hideFill(){fillContainer.classList.toggle("hidden"),fillContainer.classList.toggle("margins"),fillCollapsable.classList.toggle("rotate")}function hideShare(){shareContainer.classList.toggle("hidden"),shareContainer.classList.toggle("margins"),shareCollapsable.classList.toggle("rotate")}designCollapsable.addEventListener("click",hideDesign),fillCollapsable.addEventListener("click",hideFill),shareCollapsable.addEventListener("click",hideShare);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t),console.log(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click(),console.log("hola")}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const inputList=document.querySelectorAll(".js-input"),data={name:"",job:"",email:"",phone:"",linkedin:"",github:"",palette:1,photo:""},saveField=function(e){data[e.currentTarget.name]=e.currentTarget.value,render()};for(const e of inputList)e.addEventListener("keyup",saveField);const render=function(){document.querySelector(".js-cardName").innerHTML=data.name||"Lisa Simpson",document.querySelector(".js-cardPosition").innerHTML=data.job||"Saxophonist",document.querySelector(".js-cardEmail").href="mailto:"+data.email,document.querySelector(".js-cardPhone").href="tel:"+data.phone,document.querySelector(".js-cardLinkedin").href="https://www.linkedin.com/in/"+data.linkedin,document.querySelector(".js-cardGithub").href="https://www.github.com/"+data.github},buttonShare=document.querySelector(".js-button--create"),twitterContainer=document.querySelector(".js-twitterContainer"),shareTwitter=document.querySelector(".js-section__link--share");function hideTwitter(){twitterContainer.classList.remove("hidden"),shareTwitter.classList.remove("hidden--border"),buttonShare.classList.add("change-button")}buttonShare.addEventListener("click",hideTwitter);const designCard=document.querySelector(".section__article"),design1=document.querySelector(".js-design-1"),design2=document.querySelector(".js-design-2"),design3=document.querySelector(".js-design-3");function changeDesign(e){"design-1"===e.currentTarget.value&&(designCard.classList.add("palets-1"),designCard.classList.remove("palets-2"),designCard.classList.remove("palets-3"),console.log("121")),"design-2"===e.currentTarget.value&&(designCard.classList.add("palets-2"),designCard.classList.remove("palets-3"),designCard.classList.remove("palets-1")),"design-3"===e.currentTarget.value&&(designCard.classList.add("palets-3"),designCard.classList.remove("palets-2"),designCard.classList.remove("palets-1"))}design1.addEventListener("click",changeDesign),design2.addEventListener("click",changeDesign),design3.addEventListener("click",changeDesign);const buttonReset=document.querySelector(".js-button--reset"),profileImageCard=document.querySelector(".js__profile-image"),url="./assets/images/lisa_simpson.png",smallImage=document.querySelector(".js__profile-preview"),urlSmall=" ";function reset(){data.name="",data.job="",data.email="",data.phone="",data.linkedin="",data.github="",data.palette=1,data.photo="";for(const e of inputList)e.value="";render(),profileImageCard.style.backgroundImage=`url(${url})`,smallImage.style.backgroundImage="url( )"}buttonReset.addEventListener("click",reset);