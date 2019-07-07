function cbReady() { 
    let pathName = window.location.pathname;      

    if (pathName == '/' || pathName == '/index.html' || pathName == '/en/') {
        document.querySelector('.item-about').style.display = 'none';
    }

    if (pathName == '/neler-yaptim.html' || pathName == '/en/portfolio.html') {
        document.querySelector('.item-portfolio').style.display = 'none';    
    }

    if (pathName == '/basinda-projelerim.html' || pathName == '/en/in-the-press.html') {
        document.querySelector('.item-in-the-press').style.display = 'none'; 
    }
}

function ready(cbReady) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    cbReady();
  } else {
    document.addEventListener('DOMContentLoaded', cbReady);
  }
}

ready(cbReady);
