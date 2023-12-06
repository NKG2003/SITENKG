<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name">
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>
  
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email">
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
  
      <div>
        <label for="age">Age:</label>
        <input type="number" id="age" v-model.number="formData.age">
        <span v-if="errors.age" class="error">{{ errors.age }}</span>
      </div>
  
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  export default {
  name: "Test",
    setup() {
      const formData = ref({
        name: '',
        email: '',
        age: null,
      });
  
      const errors = ref({});
  
      const submitForm = () => {
        errors.value = {};
  
        if (!formData.value.name) {
          errors.value.name = 'Please enter your name';
        }
  
        if (!formData.value.email) {
          errors.value.email = 'Please enter your email';
        } else if (!isValidEmail(formData.value.email)) {
          errors.value.email = 'Please enter a valid email address';
        }
  
        if (!formData.value.age) {
          errors.value.age = 'Please enter your age';
        } else if (formData.value.age <= 0) {
          errors.value.age = 'Age must be a positive number';
        }
  
        if (Object.keys(errors.value).length === 0) {
          // Отправка данных, если форма прошла валидацию
          console.log('Form submitted successfully!', formData.value);
          // Добавьте здесь логику отправки данных (например, через AJAX)
        }
      };
  
      const isValidEmail = (email) => {
        // Простейшая проверка email на корректность
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
  
      return {
        formData,
        errors,
        submitForm,
      };
    },
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>