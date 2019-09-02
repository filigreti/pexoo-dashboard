<template>
  <div id="profile-area">
    <ul class="profile-nav">
      <li>
        <router-link to="/photos">
          <span>Explore photos</span>
        </router-link>
      </li>
      <li>
        <router-link to="/photographer">
          <span>Find a Photographer</span>
        </router-link>
      </li>
      <li>
        <i class="far fa-sticky-note"></i>
      </li>
      <li>
        <i class="far fa-bell"></i>
      </li>
      <li>
        <i class="far fa-envelope"></i>
      </li>
      <li>
        <div class="image-container">
          <img src="../assets/avatar.png" alt />
        </div>
      </li>
      <li>
        <span class="name">Oghenetega</span>
      </li>
      <li>
        <i class="fas fa-angle-down"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
#profile-area {
  font-size: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
#profile-area .profile-nav {
  list-style: none;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: space-evenly;
  width: 55%;
}
#profile-area .profile-nav a {
  color: #4d4d4d;
  background: transparent;
  border: none;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
}
#profile-area .profile-nav a:hover {
  color: #4d4d4d;
}
#profile-area .image-container {
  width: 50px;
  height: 50px;
}
#profile-area .image-container img {
  height: 100%;
  width: 100%;
}
</style>