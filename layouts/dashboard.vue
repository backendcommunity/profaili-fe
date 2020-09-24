<template>
<div class="dashboard">
  <Sidebar />
  <div class="main-content">
    <DashboardNav />
    <Nuxt />
  </div>
</div>
</template>
<style lang="sass">
*
  box-sizing: border-box
.main-content
  margin-left: 5vw
  h2
    font-weight: 600
    color: #333
  .sub-text
    font-weight: 600
    color: #777
    font-size: 1.3rem
.e-content
  margin-top: 2rem
.e-grid-row
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
  grid-auto-rows: minmax(150px, auto)
  column-gap: 60px
  row-gap: 30px
  &.squared
    grid-template-rows: minmax(200px, auto)
    grid-auto-rows: minmax(150px, auto)
.add-button
  background: linear-gradient(180deg, #02C78C 0%, rgba(5, 83, 231, 0.35) 100%)
  border: none
    radius: 7px
  text-transform: uppercase
  font-weight: 700
  color: white
  padding: 10px 50px
  text-decoration: none
  &:hover
    color: white
    text-decoration: none
.button-container
  display: flex
  justify-content: center
  margin-top: 3rem
  img
    margin-right: 10px
.marginTop
  margin-top: 3rem
.title-h2
  margin-bottom: 1rem
</style>
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