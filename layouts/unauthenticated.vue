<template>
  <b-container fluid class="pr-md-4 pl-md-5">
    <UnauthNav />
    <Nuxt />
  </b-container>
</template>
<script>
export default {
  head() {
    return {
      title: process.env.APP_NAME || 'Profaili',
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}
.e-container {
  width: 100%;
  padding: 0 120px;
  margin: 0;
}
.illustration {
  width: 100%;
  height: auto;
}
.content {
  padding-top: 8vh;
}
</style>
