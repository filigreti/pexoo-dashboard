
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div v-if="start">
          <div class="areatwo">
            <h2 class="titles">Add a Schedule</h2>
            <input type="text" placeholder="Enter Title" class="firstInput" name id v-model="title" />
            <div class="duo-input">
              <input type="date" placeholder="Start Date" name id v-model="firstDate" />
              <input
                :disabled="firstDate == ''"
                :min="firstDate"
                v-if="!toggleSecond"
                type="date"
                class="ml-3"
                placeholder="End Date"
                name
                id
                v-model="secondDate"
              />
            </div>
          </div>

          <div class="flex">
            <input type="checkbox" name id v-model="toggleSecond" />
            <span class="pl-2">Same Date</span>
          </div>
          <div class="button-container">
            <button @click="close" class="cancel-btn">Cancel</button>
            <button
              :disabled="title == '' || firstDate == '' "
              @click="add"
              class="schedule-btn"
            >Add Schedule</button>
          </div>
        </div>
        <div v-if="finish"></div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  data() {
    return {
      toggleSecond: false,
      title: "",
      firstDate: "",
      secondDate: "",
      start: true,
      finish: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    add() {
      let id = 6;
      let name = this.title;
      let start = this.firstDate;
      let end = this.secondDate;
      let color = "#ffb603";
      let type = "added";
      let m = { id, name, start, end, color, type };
      this.$emit("newVal", m);
      this.close();
      this.title = "";
      this.firstDate = "";
      this.secondDate = "";
    }
  }
};
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.658);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10vw;
  z-index: 1000;
}

.modal {
  background: #fffdf7;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 55vh;
  position: relative;
  padding: 30px;
  border-radius: 5px;
}
.titles {
  font-family: "Lora";
}
.areatwo input {
  background: #ffffff;
  height: 60px;
  border: 1px solid #dededc;
  width: 100%;
  padding-left: 10px;
  border-radius: 5px;
  outline: none;
}
.duo-input {
  display: flex;
  width: 100%;
  margin-top: 10px;
}
.firstInput {
  margin-top: 30px;
}
.ml-3 {
  margin-left: 20px;
}
.flex {
  display: flex;
  margin-top: 30px;
}
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}
.button-container button {
  width: 200px;
  height: 45px;
  border-radius: 5px;
  outline: none;
}
.cancel-btn {
  margin-right: 20px;
  color: #ffb603;
  border: 1px solid #ffb603;
}
.cancel-btn:hover {
  background: #ffb603;
  color: white;
}
.schedule-btn {
  background: #ffb603;
  color: white;
}
button:disabled,
button[disabled] {
  background-color: #cccccc;
  color: #666666;
}
</style>