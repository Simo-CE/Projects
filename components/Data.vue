<template>
  <div class="container">
    <ul>
      <li>
        <p>{{description}}</p>
        <small>Forks: {{forks}} | Issues: {{issues}}</small>
      </li>
    </ul>
  </div>
</template>

<script>
const GITAPI = "https://api.github.com/repos/vuejs/vue";
export default {
  data() {
    return {
      description: "",
      forks: "",
      issues: ""
    };
  },
  async fetch() {
    const data = await (await fetch(GITAPI)).json();
    this.description = data.description;
    this.forks = data.forks;
    this.issues = data.open_issues;

    /* await fetch(GITAPI)
      .then(response => response.json())
      .then(data => console.log(data)); */

  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  border: 1px gray solid;
  border-radius: 10px;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
}

li {
  padding: 5px;
  background-color: lightblue;
  border-radius: 10px;
  font-style: oblique;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
}
</style>