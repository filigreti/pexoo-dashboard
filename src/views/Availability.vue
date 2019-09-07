<template>
  <main id="availability">
    <h3 class="title">Availability</h3>
    <div class="container">
      <div class="views container">
        <div @click="changeView('calender')">
          <i class="far fa-calendar-alt"></i>
          <span :class="{underline:calenderView}">Calender View</span>
        </div>
        <div @click="changeView('list')">
          <i class="fas fa-list-ul"></i>
          <span :class="{underline:listview}">List View</span>
        </div>
      </div>
      <div class="search-area">
        <div class="input-area">
          <input type="text" placeholder="Search" />
          <i class="fas fa-search"></i>
        </div>

        <button @click="showModal">
          <i class="fas fa-plus"></i>
          Add Schedule
        </button>
      </div>
    </div>
    <div v-if="calenderView" class="event-area">
      <i @click="clickBack" class="fas fa-caret-left"></i>
      <i @click="clickFront" class="fas fa-caret-right"></i>
      <span>{{current}}</span>
      <button @click="setToday">Today</button>
    </div>
    <div v-if="calenderView" class="calender-area">
      <NewCalender
        :events="events"
        ref="cal"
        @first="current = $event"
        @updated="updatedEvent = $event"
      />
    </div>
    <div v-if="listview" class="calender-area">
      <NewList :events="events" />
    </div>
    <modal v-show="isModalVisible" @close="closeModal" @newVal="newEvent = $event " />
  </main>
</template>

<script>
import Modal from "../components/Modal";
import editModal from "../components/editModal";
import NewCalender from "../components/NewCalender.vue";
import NewList from "../components/NewList.vue";
import Status from "./Status";
import { log } from "util";
export default {
  components: {
    NewCalender,
    NewList,
    Status,
    Modal
  },
  data() {
    return {
      current: null,
      isModalVisible: false,
      calenderView: true,
      listview: false,
      newEvent: null,
      updatedEvent: null,
      events: [
        {
          id: 1,
          name: "Going to the beach!",
          details: "Going to the beach!",
          start: "2019-09-01",
          end: "2019-09-01",
          color: "#ffb603",
          type: "platform"
        },
        {
          id: 2,
          name: "Spending time on how we do not have enough time",
          details: "Spending time on how we do not have enough time",
          start: "2019-09-07",
          end: "2019-09-07",
          color: "#ffb603",
          type: "platform"
        },
        {
          id: 3,
          name:
            "This starts in the middle of an event and spans over multiple events",
          details:
            "This starts in the middle of an event and spans over multiple events",
          start: "2019-09-15",
          end: "2019-09-18",
          color: "#ffb603",
          type: "added"
        },
        {
          id: 4,
          name:
            "This starts in the middle of an event and spans over multiple events",
          details:
            "This starts in the middle of an event and spans over multiple events",
          start: "2019-09-23",
          end: "2019-09-23",
          color: "#ffb603",
          type: "added"
        },
        {
          id: 5,
          name:
            "This starts in the middle of an event and spans over multiple events",
          details:
            "This starts in the middle of an event and spans over multiple events",
          start: "2019-09-30",
          end: "2019-09-30",
          color: "#ffb603",
          type: "platform"
        }
      ]
    };
  },
  methods: {
    changeView(x) {
      if (x == "list") {
        (this.calenderView = false), (this.listview = true);
      } else if (x == "calender") {
        this.calenderView = true;
        this.listview = false;
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    clickBack() {
      this.$refs.cal.prev();
    },
    clickFront() {
      this.$refs.cal.next();
    },
    setToday() {
      this.$refs.cal.setToday();
    }
  },
  watch: {
    newEvent(x) {
      if (x != null) {
        this.events.push(x);
      }
    },
    $route: {
      handler: function(x) {
        if (x.params.status === "list") {
          this.changeView("list");
        }
      },
      deep: true,
      immediate: true
    },
    updatedEvent(x) {
      let index = this.events.findIndex(({ id }) => id === x.id);
      this.$set(this.events, index, x);
    }
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
  cursor: pointer;
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
.underline {
  padding-bottom: 3px;
  border-bottom: 1px solid #ffb603;
}
</style>