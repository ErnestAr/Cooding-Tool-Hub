const addTech=async a=>{a.preventDefault();const b=document.querySelector("#title").value.trim(),c=document.querySelector("#desc").value.trim(),d=document.querySelector("#language").value,e=document.querySelector("#project").value.trim(),f=document.querySelector("#category").value,g=document.querySelector("#source").value.trim(),h=await fetch("/api/tech",{method:"POST",body:JSON.stringify({techTitle:b,techDesc:c,techProject:e,techCategory:f,techLanguage:d,techSource:g}),headers:{"Content-Type":"application/json"}});h.ok?document.location.replace("/account/page"):alert("Failed to save")};document.querySelector("#contact-submit").addEventListener("click",addTech);
