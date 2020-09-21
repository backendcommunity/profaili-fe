<template>

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