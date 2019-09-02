<template>
  <main id="side-bar">
    <div class="logo-container">
      <img src="../assets/logo.png" width="138px" height="33px" alt />
    </div>

    <ul class="nav-links">
      <li>
        <router-link to="/dashboard">
          <i class="far fa-chart-bar"></i>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          <i class="fas fa-user"></i>
          <span>Profile</span>
        </router-link>
      </li>
      <li>
        <router-link to="/pricing">
          <i class="fas fa-box"></i>
          <span>Pricing Package</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <i class="far fa-calendar-alt"></i>
          <span>Availablity</span>
        </router-link>
      </li>
      <li>
        <router-link to="/booking">
          <i class="fas fa-camera"></i>
          <span>Booking</span>
        </router-link>
      </li>
      <li>
        <router-link to="/portfolio">
          <i class="fas fa-suitcase"></i>
          <span>Portfolio</span>
        </router-link>
      </li>
      <li>
        <router-link to="/albums">
          <i class="far fa-images"></i>
          <span>Albums</span>
        </router-link>
      </li>
      <li>
        <router-link to="/subscription">
          <i class="fas fa-shopping-bag"></i>
          <span>Subscription</span>
        </router-link>
      </li>
      <li>
        <router-link to="/payment">
          <i class="fas fa-credit-card"></i>
          <span>Payments</span>
        </router-link>
      </li>
      <li>
        <router-link to="settings">
          <i class="fas fa-cog"></i>
          <span>Settings</span>
        </router-link>
      </li>
    </ul>
    <div class="footer-label">© 2019 Peexo Technologies</div>
  </main>
</template>

<script>
export default {};
</script>

<style>
#side-bar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#side-bar .logo-container {
  margin: 3vh 0 3vh;
  padding-left: 3vw;
}
#side-bar .nav-links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#side-bar .nav-links li a {
  display: flex;
  align-items: center;
  align-self: center;
  align-content: center;
  padding: 1.5vw 3vw;
}
#side-bar .nav-links li span {
  font-size: 14px;
  font-weight: 200;
  padding-left: 1vw;
}
.footer-label {
  color: #ffffff;
  font-size: 12px;
  text-align: center;
}
</style>