<template>
  <div class="status">
    <div>
      <div @click="goBack('list')" class="mm">
        <i class="fas fa-arrow-circle-left"></i>
        Go Back
      </div>
      <h3 class="title">Availability</h3>
      <div class="rect">
        <div class="d-flex">
          <div class="date">{{date}}</div>
          <div class="d-flex" v-if="status == 'added'">
            <div @click="showModal" class="theme one">
              <i class="far fa-edit"></i>
              <span>Edit</span>
            </div>
            <div @click="remove(id)" class="theme two">
              <i class="fas fa-trash"></i>
              <span>Delete</span>
            </div>
          </div>
        </div>
        <div class="text">{{text}}</div>
        <button class="statusbtn">{{status}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      date: null,
      text: null,
      status: null
    };
  },
  methods: {
    goBack(x) {
      this.$router.push({
        name: "availability",
        params: { status: x }
      });
    },
    remove(x) {},
    showModal() {
      $("#Modal").modal("show");
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.date = this.$route.params.start;
    this.text = this.$route.params.details;
    this.status = this.$route.params.type;
  }
};
</script>

<style>
.status {
  padding: 20px;
}
.title {
  font-family: "Lora";
  padding: 20px 0;
}
.rect {
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  height: 177px;
  padding: 20px;
}
.date {
  color: #4d4d4d;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
}
.text {
  color: #4d4d4d;
  font-family: Montserrat;
  font-size: 14px;
  padding-top: 20px;
}
.statusbtn {
  background-color: #4d4d4d;
  border: 1px solid #979797;
  color: white;
  border-radius: 2px;
  font-size: 14px;
  text-transform: capitalize;
  height: 23px;
  padding: 0 5px;
  margin-top: 40px;
}
.mm {
  color: #b58000;
  padding-top: 20px;
  cursor: pointer;
}
.d-flex {
  display: flex;
  cursor: pointer;
}
.theme {
  color: #b58000;
  font-size: 14px;
}
.one {
  margin-left: 10px;
}
.two {
  margin-left: 15px;
}
</style>