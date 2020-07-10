<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.includeFBPixelCode();
  },
  methods: {
    includeFBPixelCode() {
      let code = document.createElement("script");
      code.innerHTML =
        "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '198691414887719');fbq('track', 'PageView');";
      let nosrcipt = document.createElement("noscript");
      let img = document.createElement("img");
      img.setAttribute("height", 1);
      img.setAttribute("width", 1);
      img.setAttribute("style", "display: none");
      img.setAttribute(
        "src",
        "https://www.facebook.com/tr?id=198691414887719&ev=PageView&noscript=1"
      );
      nosrcipt.appendChild(img);
      document.head.appendChild(code);
      document.head.appendChild(nosrcipt);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap");
body {
  font-family: "Poppins", sans-serif !important;
}
</style>
