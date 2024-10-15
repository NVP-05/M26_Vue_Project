<template>
  <div 
  class="flex justify-center items-center h-screen bg-gray-100 bg-cover"
  :style="{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/m26vue-d98dd.appspot.com/o/upload%2Fbackground-login.jpg?alt=media&token=712b473e-0bf9-4c6b-8362-0ec76488b1e0)'}"
  >
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-center text-xl font-semibold mb-4">Log in</h2>
      
      <!-- Input fields -->
      <input
        type="text"
        placeholder="Mobile/Email"
        class="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="password"
        placeholder="Password"
        class="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      <!-- Forgot password link -->
      <div class="text-right mb-4">
        <a href="#" class="text-red-500 hover:underline">Forgot your Password?</a>
      </div>

      <!-- Login button -->
      <button
        class="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition duration-300"
      >
        Login
      </button>

      <!-- Sign up link -->
      <div class="text-center text-sm mt-4">
        <p class="text-gray-600">
          New to Bookswagon? <a href="#" class="text-red-500 hover:underline">Sign up</a>
        </p>
      </div>

      <!-- Terms and conditions -->
      <p class="text-center text-xs text-gray-500 mt-4">
        By continuing, I agree to the <a href="#" class="text-red-500 hover:underline">Terms of Use</a> & 
        <a href="#" class="text-red-500 hover:underline">Privacy Policy</a>
      </p>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>