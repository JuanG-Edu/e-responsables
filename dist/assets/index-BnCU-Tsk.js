(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <div class="container">
      <h1>E-Responsables</h1>
      <p class="lead">Sustentabilidad en tus manos: La era de los E-Responsables.</p>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <div class="hero-text">
        <h2>¿Por qué es peligroso?</h2>
        <p>Los dispositivos como teléfonos, computadoras y baterías contienen plomo, mercurio, cadmio, arsénico y otros compuestos. Cuando se tiran a la basura, estos metales pueden filtrarse en el suelo y el agua.</p>
        <br/>
        <p>El mundo genera más de 50 millones de toneladas de e-waste anualmente. Su peso es mayor que el de todos los aviones comerciales jamás construidos.</p>
        <p>El e-waste es el flujo de residuos de mayor crecimiento en el mundo, incrementándose entre un 3% y un 5% cada año.</p>
        <p>Menos del 20% de los residuos electrónicos se reciclan correctamente a nivel mundial.</p>
        <div class="cta-row">
          <button id="find-recycle" class="btn primary">Encontrar punto de reciclaje</button>
          <button id="share" class="btn">Compartir conciencia</button>
          <button id="open-instructions" class="btn">Sustentabilidad UANL</button>
        </div>
      </div>
      
        <div class="hero-card">
          <img id="hero-image" src="EWasteMonitor2024.jpg" alt="EWaste Monitor 2024"/>
        </div>
    </section>

    <section>
      <h3>Efectos en la salud y el ambiente</h3>
      <p>La exposición prolongada a metales pesados puede causar problemas neurológicos, renales, respiratorios y enfermedades crónicas. Además, los residuos electrónicos generan contaminantes que afectan ya no solo ecosistemas, sino a cada individuo que habite en el planeta.</p>

      <div class="grid">
        <article class="card">
          <h4>Enfermedades</h4>
          <p>Problemas de aprendizaje, daño neurológico, enfermedades cardiovasculares.</p>
        </article>
        <article class="card">
          <h4>Contaminación</h4>
          <p>Suelos y acuíferos contaminados; bioacumulación en la cadena alimentaria.</p>
        </article>
        <article class="card">
          <h4>Economía</h4>
          <p>Perdida de materiales valiosos; coste de limpieza ambiental.</p>
        </article>
      </div>
    </section>

    <section>
      <h3>¿Qué puedes hacer?</h3>
      <div class="actions-grid">
        <article class="action-card">
          <h4>Reducir (Consumo Responsable)</h4>
          <p>Pregúntate si realmente necesitas un nuevo dispositivo o si el actual puede seguir funcionando.</p>
          <p>Al comprar, elige productos de mayor calidad, con buenas garantías, y que sean conocidos por ser fáciles de reparar y no caer en la obsolescencia programada.</p>
        </article>

        <article class="action-card">
          <h4>Reutilizar (Alarga la vida útil)</h4>
          <p>Si vas a reemplazar un equipo, véndelo en el mercado de segunda mano o dónalo.</p>
          
          <p>Dale un reacondicionamiento creativo al dispositivo; intenta darle otro uso distinto.</p>
        </article>

        <article class="action-card">
          <h4>Reparar antes de reemplazar</h4>
          <p>Antes de desecharlo, consulta con un técnico especializado.</p>
          <p>Elige marcas que ofrezcan repuestos y manuales de reparación de forma accesible.</p>
        </article>

        <article class="action-card">
          <h4>Reciclar</h4>
          <p>Nunca tires la electrónica a la basura común.</p>
          <p>Llévala a los puntos limpios o centros de recolección específicos para Residuos de Aparatos Eléctricos y Electrónicos.</p>
        </article>
      </div>
    </section>

    <footer class="site-footer">
      <p>¿Listo para actuar? Comparte esta página y ayuda a reducir la contaminación.</p>
    </footer>
  </main>

  <!-- Modal: Sustentabilidad UANL - mapa embebido y enlace -->
  <div id="instructions-modal" class="modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="modal-overlay" data-modal-close></div>
    <div class="modal-dialog" role="document" aria-labelledby="modal-title">
      <header class="modal-header">
        <h2 id="modal-title">Sustentabilidad UANL</h2>
        <button class="modal-close" aria-label="Cerrar" data-modal-close>&times;</button>
        
      </header>
      <div class="modal-body">
        <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14377.670908869944!2d-100.307522!3d25.723696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866295554ef37c21%3A0x99c9f04accf71ba0!2sSecretar%C3%ADa%20de%20Sustentabilidad%2C%20UANL!5e0!3m2!1ses!2sus!4v1763309012799!5m2!1ses!2sus" style="border:0;position:absolute;left:0;top:0;width:100%;height:100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p style="margin-top:1rem;">Si quieres saber más, visita: <a href="https://sds.uanl.mx/residuos-electronicos/" target="_blank" rel="noopener">https://sds.uanl.mx/residuos-electronicos/</a></p>
      </div>
      <footer class="modal-footer">
        <button class="btn" data-modal-close>Cerrar</button>
      </footer>
    </div>
  </div>
  
    <!-- Modal: imagen amplia -->
    <div id="image-modal" class="modal" role="dialog" aria-modal="true" aria-hidden="true">
      <div class="modal-overlay" data-modal-close></div>
      <div class="modal-dialog" role="document" aria-labelledby="image-modal-title">
        <header class="modal-header">
          <h2 id="image-modal-title">E-Waste 2024 en America</h2>

          <button class="modal-close" aria-label="Cerrar" data-modal-close>&times;</button>
        </header>
        <div class="modal-body">
            <a href="https://ewastemonitor.info/wp-content/uploads/2024/12/GEM_2024_ES_11_NOV-web.pdf">Fuente: E-Waste Monitor</a>

          <img src="EWasteMonitor2024.jpg" alt="EWaste Monitor 2024 - vista ampliada" />
        </div>
        <footer class="modal-footer">
          <button class="btn" data-modal-close>Cerrar</button>
        </footer>
      </div>
    </div>
`;document.getElementById("find-recycle").addEventListener("click",()=>{const e=encodeURIComponent("puntos reciclaje electronicos cerca de mi");window.open(`https://www.google.com/search?q=${e}`,"_blank")});document.getElementById("share").addEventListener("click",async()=>{const e={title:"Conciencia sobre residuos electrónicos",text:"El desecho de dispositivos electrónicos contamina por metales pesados. Aprende cómo reciclar y reducir.",url:window.location.href};try{navigator.share?await navigator.share(e):alert("Comparte este enlace manualmente: "+window.location.href)}catch(a){console.warn("Compartir falló",a)}});document.querySelectorAll(".collapsible").forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("open")})});const i=document.getElementById("instructions-modal"),f=document.getElementById("open-instructions"),c='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';let r=null;function h(){r=document.activeElement,i.setAttribute("aria-hidden","false"),i.classList.add("open");const e=i.querySelector(c);e&&e.focus(),document.body.style.overflow="hidden"}function m(){i.setAttribute("aria-hidden","true"),i.classList.remove("open"),document.body.style.overflow="",r&&typeof r.focus=="function"&&r.focus()}f.addEventListener("click",h);i.querySelectorAll("[data-modal-close]").forEach(e=>{e.addEventListener("click",m)});i.addEventListener("keydown",e=>{if(e.key==="Escape"&&m(),e.key==="Tab"){const a=Array.from(i.querySelectorAll(c)).filter(l=>!l.hasAttribute("disabled"));if(a.length===0)return;const n=a.indexOf(document.activeElement);e.shiftKey&&n===0?(e.preventDefault(),a[a.length-1].focus()):!e.shiftKey&&n===a.length-1&&(e.preventDefault(),a[0].focus())}});const s=document.getElementById("image-modal"),u=document.getElementById("hero-image");function b(){r=document.activeElement,s.setAttribute("aria-hidden","false"),s.classList.add("open");const e=s.querySelector(c)||s.querySelector("img");e&&typeof e.focus=="function"&&e.focus(),document.body.style.overflow="hidden"}function p(){s.setAttribute("aria-hidden","true"),s.classList.remove("open"),document.body.style.overflow="",r&&typeof r.focus=="function"&&r.focus()}u&&u.addEventListener("click",b);s.querySelectorAll("[data-modal-close]").forEach(e=>{e.addEventListener("click",p)});s.addEventListener("keydown",e=>{if(e.key==="Escape"&&p(),e.key==="Tab"){const a=Array.from(s.querySelectorAll(c)).filter(l=>!l.hasAttribute("disabled"));if(a.length===0)return;const n=a.indexOf(document.activeElement);e.shiftKey&&n===0?(e.preventDefault(),a[a.length-1].focus()):!e.shiftKey&&n===a.length-1&&(e.preventDefault(),a[0].focus())}});
