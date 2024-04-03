showshirtsonly=()=>{
    let a=document.getElementById("shirtschecked");
    if(a.checked==true){
        let b=document.getElementById("jeanschecked");
         b.checked=false;
         let c=document.getElementById("tshirtschecked");
         c.checked=false;
         let d=document.getElementById("trouserschecked");
         d.checked=false;
    let jeans=document.getElementById("tshirts");
    jeans.style.display="none";
    let tshirts=document.getElementById("jeans");
    tshirts.style.display="none";
    let trousers=document.getElementById("trousers");
    trousers.style.display="none";
    let shirts=document.getElementById("shirts");
    shirts.style.display="block";
}
else{
    jeans.style.display="block";
    tshirts.style.display="block";
    trousers.style.display="block";
    shirts.style.display="block";
   
}}
showjeansonly=()=>{
    let a=document.getElementById("jeanschecked");
    if(a.checked==true){
        let b=document.getElementById("shirtschecked");
        b.checked=false;
        let c=document.getElementById("tshirtschecked");
        c.checked=false;
        let d=document.getElementById("trouserschecked");
        d.checked=false;
    let jeans=document.getElementById("shirts");
    jeans.style.display="none";
    let tshirts=document.getElementById("tshirts");
    tshirts.style.display="none";
    let trousers=document.getElementById("trousers");
    trousers.style.display="none";
    let shirts=document.getElementById("jeans");
    shirts.style.display="block";
}
else{
    jeans.style.display="block";
    tshirts.style.display="block";
    trousers.style.display="block";
    shirts.style.display="block";
   
}}
showtshirtsonly=()=>{
    let a=document.getElementById("tshirtschecked");
    if(a.checked==true){
        let b=document.getElementById("jeanschecked");
        b.checked=false;
        let c=document.getElementById("shirtschecked");
        c.checked=false;
        let d=document.getElementById("trouserschecked");
        d.checked=false;
    let jeans=document.getElementById("shirts");
    jeans.style.display="none";
    let tshirts=document.getElementById("jeans");
    tshirts.style.display="none";
    let trousers=document.getElementById("trousers");
    trousers.style.display="none";
    let shirts=document.getElementById("tshirts");
    shirts.style.display="block";
}
else{
    jeans.style.display="block";
    tshirts.style.display="block";
    trousers.style.display="block";
    shirts.style.display="block";
   
}}
showtrousersonly=()=>{
    let a=document.getElementById("trouserschecked");
    if(a.checked==true){
        let b=document.getElementById("jeanschecked");
        b.checked=false;
        let c=document.getElementById("shirtschecked");
        c.checked=false;
        let d=document.getElementById("tshirtschecked");
        d.checked=false;
    let jeans=document.getElementById("shirts");
    jeans.style.display="none";
    let tshirts=document.getElementById("jeans");
    tshirts.style.display="none";
    let trousers=document.getElementById("tshirts");
    trousers.style.display="none";
    let shirts=document.getElementById("trousers");
    shirts.style.display="block";
}
else{
    jeans.style.display="block";
    tshirts.style.display="block";
    trousers.style.display="block";
    shirts.style.display="block";
   
}}






