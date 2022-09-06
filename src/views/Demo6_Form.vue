<template>
  <div id="demo6">
    <form @submit.prevent="submit">
      <div>
        <label for="firstname">Firstname : </label>
        <input type="text" name="firstname" v-model.trim="applicant.firstname">
        <br>
        <label for="lastname">Lastname : </label>
        <input type="text" name="lastname" v-model.lazy="applicant.lastname">
        <br>
        <label for="age">Age : </label>
        <input type="number" name="age" v-model.number="applicant.age">
        <br>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex">
        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex">
        <br>
        <select name="courses" v-model="applicant.course">
          <option value="vue">Vue</option>
          <option value="react">React</option>
        </select>
        <br>
        <button type="submit">Submit</button>
        <br>
        <!-- <button type="button" @click="reset">Reset</button> -->
        <button type="button" @click.exact="reset" @click.alt="useDefault">Reset</button>
      </div>
    </form>
    <div>{{ JSON.stringify(applicant) }}</div>
  </div>
</template>

<script>
export default {
  name: 'demo6_form',
  data() {
    return {
      applicant: {
        firstname: '',
        lastname: '',
        age: 0,
        sex: '',
        course: ''
      }
    }
  },
  methods: {
    reset() {
      this.applicant = {
        firstname: '',
        lastname: '',
        age: 0,
        sex: '',
        course: ''
      }
    },
    submit() {
      // event.preventDefault();
      alert(JSON.stringify(this.applicant))
    },
    useDefault() {
      this.applicant = {
        firstname: 'Narapat',
        lastname: '',
        age: 0,
        sex: '',
        course: ''
      }
    }
  }
}
</script>

<style>

</style>