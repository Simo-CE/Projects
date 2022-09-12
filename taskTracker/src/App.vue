<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->

  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppings', sans-serif;
  background-color: white !important;
  color: black;
}

.container {
  max-width: 600px;
  min-height: 300px;
  margin: 30px auto;
  overflow: hidden;
  border: 1px steelblue solid;
  padding: 30px;
  border-radius: 5px;
  color: black;
}
.btn {
  display: inline;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>