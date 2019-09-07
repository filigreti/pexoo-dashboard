<template>
  <main class="height">
    <v-app>
      <v-row>
        <v-col>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :event-margin-bottom="3"
              :type="type"
              @click:event="showEvent"
              @change="updateRange"
            ></v-calendar>
            <editModal
              v-if="isModalVisible"
              @close="closeModal"
              @newVal="newEvent = $event"
              :updata="updata"
            />
            <!-- <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card color="grey lighten-4" min-width="350px" flat>
                <v-toolbar :color="selectedEvent.color" dark>
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-toolbar-title v-html="selectedEvent.details"></v-toolbar-title>
                  <div class="flex-grow-1"></div>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="secondary" @click="selectedOpen = false">Cancel</v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>-->
          </v-sheet>
        </v-col>
      </v-row>
    </v-app>
  </main>
</template>

<script>
import editModal from "./editModal";
export default {
  components: {
    editModal
  },
  props: {
    events: Array
  },
  data: () => ({
    newEvent: null,
    isModalVisible: false,
    today: new Date().toLocaleDateString(),
    focus: new Date().toLocaleDateString(),
    type: "month",
    typeToLabel: {
      month: "Month"
    },
    current: null,
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    updata: null
  }),
  watch: {
    newEvent(x) {
      if (x) {
        this.$emit("updated", x);
      }
    }
  },
  computed: {
    title() {
      const { start, end } = this;

      if (!start || !end) {
        this.$emit("first", this.current);
        return this.current;
      }

      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? "" : endMonth;

      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? "" : endYear;

      const startDay = start.day + this.nth(start.day);
      const endDay = end.day + this.nth(end.day);

      switch (this.type) {
        case "month":
          let k = `${startMonth} ${startYear}`;
          this.$emit("first", k);
          return k;
      }
      return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      });
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      this.showModal();
      this.updata = event;

      // const open = () => {
      //   this.showModal();
      //   this.updata = event;
      //   this.selectedEvent = event;
      //   this.selectedElement = nativeEvent.target;
      //   setTimeout(() => (this.selectedOpen = true), 10);
      // };

      // if (this.selectedOpen) {
      //   this.selectedOpen = false;
      //   setTimeout(open, 10);
      // } else {
      //   open();
      // }
    },
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    }
  },
  updated() {
    this.title();
  },
  mounted() {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var date = new Date();
    this.current = months[date.getMonth()] + " " + date.getFullYear();
    this.title();
  }
};
</script>
<style>
.red {
  background: red !important;
}
.theme--light.v-application {
  background: none !important;
}
.v-calendar-weekly__head {
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday {
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.theme--light.v-calendar-weekly {
  border-left: 1px solid #d4d4d4;
}
.v-calendar-weekly__head:first-child {
  border-left: none;
  border-right: none;
}
.pl-1 {
  margin-left: 5px;
}
/* .v-calendar-weekly__head-weekday .v-past {
  border: 1px solid #d4d4d4;
  height: 100%;
} */
/* .left {
  margin-top: -20vh;
  margin-left: -10vw;
}
.right {
  margin-top: -20vh;
  padding: 0;
}
.title {
  position: absolute;
  margin-top: -10vh;
  margin-left: 5vw;
} */
</style>
