(function(){
  var KEY = "claridadseguro_cookie_consent";
  if (localStorage.getItem(KEY)) return;

  var bar = document.createElement("div");
  bar.setAttribute("role","dialog");
  bar.setAttribute("aria-label","Aviso de cookies");
  bar.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:999;background:#142238;color:#fff;padding:18px 20px;display:flex;gap:16px;align-items:center;flex-wrap:wrap;justify-content:space-between;font-family:Inter,system-ui,sans-serif;box-shadow:0 -8px 24px rgba(0,0,0,.18);";

  var text = document.createElement("p");
  text.style.cssText = "margin:0;font-size:.9rem;max-width:60ch;color:#E7ECF3;";
  text.innerHTML = 'Usamos cookies propias y de terceros (incluida publicidad de Google AdSense) para analizar la navegación y mostrar anuncios. Puedes aceptar, rechazar las no esenciales, o revisar la <a href="' + (location.pathname.indexOf("/blog/")>-1 ? "../" : "") + 'politica-cookies.html" style="color:#C79A34;">política de cookies</a>.';

  var actions = document.createElement("div");
  actions.style.cssText = "display:flex;gap:10px;flex-wrap:wrap;";

  function btn(labelText, primary){
    var b = document.createElement("button");
    b.textContent = labelText;
    b.style.cssText = "padding:10px 18px;border-radius:30px;font-weight:600;font-size:.88rem;cursor:pointer;border:1px solid " + (primary ? "#C79A34" : "#8FA0BC") + ";background:" + (primary ? "#C79A34" : "transparent") + ";color:" + (primary ? "#142238" : "#fff") + ";";
    return b;
  }

  var acceptBtn = btn("Aceptar todas", true);
  var rejectBtn = btn("Rechazar no esenciales", false);

  acceptBtn.addEventListener("click", function(){
    localStorage.setItem(KEY, "accepted");
    bar.remove();
  });
  rejectBtn.addEventListener("click", function(){
    localStorage.setItem(KEY, "rejected");
    bar.remove();
  });

  actions.appendChild(rejectBtn);
  actions.appendChild(acceptBtn);
  bar.appendChild(text);
  bar.appendChild(actions);
  document.body.appendChild(bar);
})();
