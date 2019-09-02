<template>
  <main id="availability">
    <h3 class="title">Availability</h3>
    <div class="container">
      <div class="views container">
        <div>
          <i class="far fa-calendar-alt"></i>
          <span>Calender View</span>
        </div>
        <div>
          <i class="fas fa-list-ul"></i>
          <span>List View</span>
        </div>
      </div>
      <div class="search-area">
        <div class="input-area">
          <input type="text" placeholder="Search" />
          <i class="fas fa-search"></i>
        </div>

        <button>
          <i class="fas fa-plus"></i>
          Add Schedule
        </button>
      </div>
    </div>
    <div class="event-area">
      <i class="fas fa-caret-left"></i>
      <i class="fas fa-caret-right"></i>
      <span>September 2019</span>
      <button>Today</button>
    </div>
    <div class="calender-area">
      <Calender />
    </div>
  </main>
</template>

<script>
import Calender from "../components/Calender.vue";
export default {
  components: {
    Calender
  }
};
</script>

<style>
#availability {
  padding: 3vh 2vw;
}
#availability .title {
  font-family: "Lora";
}
#availability .container {
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
}
#availability .views {
  color: #b58000;
  align-items: center;
}
#availability .views span {
  padding-left: 5px;
}
#availability .views .fa-list-ul {
  padding-left: 20px;
}
#availability .search-area {
  display: flex;
  margin-top: 10px;
}
#availability .input-area {
  position: relative;
}
#availability .input-area input {
  background-color: #fffefc;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  width: 350px;
  height: 41px;
  margin-right: 20px;
  outline: none;
  padding-left: 20px;
  font-size: 14px;
  z-index: -1;
}
#availability .search-area button {
  background-color: #ffb603;
  border-radius: 5px;
  border: none;
  width: 171px;
  height: 43px;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
}
#availability .input-area .fa-search {
  position: absolute;
  right: 35px;
  color: #d4d4d4;
  top: 14px;
  font-size: 18px;
}
input::placeholder {
  color: #d5d5d5;
}
#availability .event-area {
  margin-top: 30px;
  display: flex;
  align-items: center;
  color: #4d4d4d;
}
#availability .fa-caret-right {
  padding-left: 10px;
}
#availability .event-area span {
  font-size: 14px;
  font-weight: 200;
  padding-left: 10px;
}
#availability .event-area button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #ffb603;
  width: 80px;
  height: 30px;
  color: #ffb603;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  margin-left: 10px;
}
#availability .calender-area {
  margin-top: 30px;
  width: 100%;
  height: 100%;
}
</style>