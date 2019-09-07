<template>
  <main>
    <div v-for="(event,index) in events" :key="index">
      <div class="card">
        <span @click="push(event)" class="pl-2">{{event.start}}</span>
        <span @click="push(event)">{{event.name}}</span>
        <span class="pl">{{event.type}}</span>
        <span v-if="event.type == 'added' ">
          <i @click="remove(index)" class="fas fa-trash"></i>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
import Modal from "./Modal";
export default {
  props: {
    events: Array
  },
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    push(x) {
      this.$router.push({
        name: "status",
        params: { id: x.id, start: x.start, details: x.name, type: x.type }
      });
    },
    remove(x) {
      this.$delete(this.events, x);
    }
  }
};
</script>

<style>
.card {
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 58px;
  box-shadow: 0 1px 2px 0 rgba(226, 226, 226, 0.5);
  color: #4d4d4d;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  display: grid;
  grid-template-columns: 250px 400px 280px 300px;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  text-transform: capitalize;
  align-items: center;
}
.pl {
  padding-left: 60px;
}
.pl-2 {
  padding-left: 20px;
}
.fa-trash {
  color: #ffb603;
}
</style>