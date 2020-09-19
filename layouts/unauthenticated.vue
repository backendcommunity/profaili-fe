<template>
  <div>
    <UnauthNav />
    <Nuxt />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: process.env.APP_NAME || "Profaili",
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
        }
      ]
    };
  }
};
</script>
<style>
* {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box
}
.e-container {
  width: 100%;
  padding: 0 120px;
  margin: 0;
}
</style>
