
xs=()=>{
    const a= document.getElementById("xs").innerHTML;
    document.getElementById("sizeofcart").innerHTML="S I Z E"+"-"+a;
 }
 s=()=>{
     const a= document.getElementById("s").innerHTML;
     document.getElementById("sizeofcart").innerHTML="S I Z E"+"-"+a;
  }
  m=()=>{
     const a= document.getElementById("m").innerHTML;
     document.getElementById("sizeofcart").innerHTML="S I Z E"+"-"+a;
  }
  l=()=>{
     const a= document.getElementById("l").innerHTML;
     document.getElementById("sizeofcart").innerHTML="S I Z E"+"-"+a;
  }
  xl=()=>{
     const a= document.getElementById("xl").innerHTML;
     document.getElementById("sizeofcart").innerHTML="S I Z E"+"-"+a;
  }
  xxl=()=>{
     const a= document.getElementById("xxl").innerHTML;
     document.getElementById("sizeofcart").innerHTML="S I Z E"+"-"+a;
  }
//   var priceofproduct=parseInt(document.getElementById("priceofcart").innerHTML);
//   minusquantity=()=>{
//      let a=document.getElementById("quantitycart").innerHTML;
//      a=a-1;
//      document.getElementById("quantitycart").innerHTML=a;
//      let b=parseInt(document.getElementById("cartprice").innerHTML);
//      b=a*priceofproduct;
//      document.getElementById("cartprice").innerHTML="P R I Z E"+"-"+"$"+b;
//   }
 
//   plusquantity=()=>{
//      let a=parseInt(document.getElementById("quantitycart").innerHTML);
//      a=a+1;
//      document.getElementById("quantitycart").innerHTML=a;
//      let b=parseInt(document.getElementById("cartprice").innerHTML);
//      b=a*priceofproduct;
//      document.getElementById("cartprice").innerHTML="P R I Z E"+"-"+"$"+b;
//   }
  cart=()=>{
     let a=document.getElementById("nameofcart").innerHTML;
     let b=document.getElementById("priceofcart").innerHTML;
     document.getElementById("cartname").innerHTML="N A M E"+"-"+a;
     document.getElementById("quantitycart").innerHTML="Q U A N T I T Y"+"-"+"1";
     document.getElementById("cartprice").innerHTML="P R I Z E"+"-"+" "+b;
     document.getElementById("payment").innerHTML="PAYMENT";
     let show=document.getElementById("cartbody");
     show.style.display="block"; 
  }
//   var stripe=Stripe("pk_test_51OtlYHSFKJjgSrdzOTmR9xnSpP4kImFxDlVCinP2Lxi9X8EesgMvai4Fd0eloSujoTu1Xj3Holg2x4v62vltu3mT00QPkQJLSG");
//   document.getElementById("payment").addEventListener("click",function(){
//     stripe.redirectToCheckout({
//        lineItems: [
//           {
//              price: "price_1OtobbSFKJjgSrdzG1TpdkGs",
//              quantiry: 1,
//           },
//        ],
//        mode: "subscription",
//        successUrl: "https://www.google.com/",
//        cancelUrl: "https://www.google.com/",
//     })
//  .then(function(result){
 
//     });
//   })
pay=()=>{
   window.location.href="https://buy.stripe.com/test_14k5kG0nngIg5CUeV0"
}