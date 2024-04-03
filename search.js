let shirts=document.getElementById("shirts");
let jeans=document.getElementById("jeans");
let tshirts=document.getElementById("tshirts");
let trousers=document.getElementById("trousers");
function search(){
    let searchitem=document.getElementById("searchitem").value;
    if(searchitem=="shirts" || searchitem=="shirt")
    {
        let a=document.getElementById("tshirts");
        a.style.display="none";
        let b=document.getElementById("jeans");
        b.style.display="none";
        let c=document.getElementById("trousers");
        c.style.display="none";
        let d=document.getElementById("shirt1");
        let e=document.getElementById("shirt2");
        let f=document.getElementById("shirt3");
        let g=document.getElementById("shirt4");
        e.style.display="block";
        d.style.display="block";
        f.style.display="block";
        g.style.display="block";
    }
    else if(searchitem=="jeans"){
        let a=document.getElementById("shirts");
        a.style.display="none";
        let b=document.getElementById("tshirts");
        b.style.display="none";
        let c=document.getElementById("trousers");
        c.style.display="none";
        let d=document.getElementById("jeans1");
        let e=document.getElementById("jeans2");
        let f=document.getElementById("jeans3");
        let g=document.getElementById("jeans4");
        e.style.display="block";
        d.style.display="block";
        f.style.display="block";
        g.style.display="block";
    }
    else if(searchitem=="tshirts" || searchitem=="tshirt"){
        let a=document.getElementById("shirts");
        a.style.display="none";
        let b=document.getElementById("jeans");
        b.style.display="none";
        let c=document.getElementById("trousers");
        c.style.display="none";
        let d=document.getElementById("tshirt1");
        let e=document.getElementById("tshirt2");
        let f=document.getElementById("tshirt3");
        let g=document.getElementById("tshirt4");
        f.style.display="block";
        g.style.display="block";
        e.style.display="block";
        d.style.display="block";
    }
    else if(searchitem=="trousers" || searchitem=="trouser"){
        let a=document.getElementById("shirts");
        a.style.display="none";
        let b=document.getElementById("jeans");
        b.style.display="none";
        let c=document.getElementById("tshirts");
        c.style.display="none";
        let d=document.getElementById("trouser1");
        let e=document.getElementById("trouser2");
        let f=document.getElementById("trouser3");
        let g=document.getElementById("trouser4");
        e.style.display="block";
        d.style.display="block";
        f.style.display="block";
        g.style.display="block";
    }
    else if(searchitem=="shirts under 2000" || searchitem=="shirt under 2000"){
        let a=document.getElementById("tshirts");
        a.style.display="none";
        let b=document.getElementById("jeans");
        b.style.display="none";
        let c=document.getElementById("trousers");
        c.style.display="none";
       let d=document.getElementById("shirt1");
       let e=document.getElementById("shirt2");
       let f=document.getElementById("shirt3");
       let g=document.getElementById("shirt4");
       e.style.display="none";
       d.style.display="block";
       f.style.display="block";
       g.style.display="block";
    }
    else if(searchitem=="jeans under 2000"){
        let a=document.getElementById("shirts");
        a.style.display="none";
        let b=document.getElementById("tshirts");
        b.style.display="none";
        let c=document.getElementById("trousers");
        c.style.display="none";
        let d=document.getElementById("jeans1");
        let e=document.getElementById("jeans2");
        let f=document.getElementById("jeans3");
        let g=document.getElementById("jeans4");
        e.style.display="none";
        d.style.display="block";
        f.style.display="block";
        g.style.display="block";
    }
    else if(searchitem=="tshirts under 1500" || searchitem=="tshirt under 1500")
    {
        let a=document.getElementById("shirts");
        a.style.display="none";
        let b=document.getElementById("jeans");
        b.style.display="none";
        let c=document.getElementById("trousers");
        c.style.display="none";
        let d=document.getElementById("tshirt1");
        let e=document.getElementById("tshirt2");
        let f=document.getElementById("tshirt3");
        let g=document.getElementById("tshirt4");
        e.style.display="block";
        d.style.display="block";
        f.style.display="none";
        g.style.display="none";
    }
    else if(searchitem=="trousers under 2000" || searchitem=="trouser under 2000"){
        let a=document.getElementById("shirts");
        a.style.display="none";
        let b=document.getElementById("jeans");
        b.style.display="none";
        let c=document.getElementById("tshirts");
        c.style.display="none";
        let d=document.getElementById("trouser1");
        let e=document.getElementById("trouser2");
        let f=document.getElementById("trouser3");
        let g=document.getElementById("trouser4");
        e.style.display="none";
        d.style.display="block";
        f.style.display="block";
        g.style.display="block";
    }
    else{
        let a=document.getElementById("shirts");
        a.style.display="block";
        let b=document.getElementById("jeans");
        b.style.display="block";
        let c=document.getElementById("tshirts");
        c.style.display="block";let d=document.getElementById("trousers");
        d.style.display="block";
    }
}