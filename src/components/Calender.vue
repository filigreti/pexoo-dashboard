<template>
  <div>
    <div class="calender">
      <div v-for="(week,index) in weeks" :key="index">
        <div class="week-area">{{week}}</div>
      </div>
    </div>
    <div class="calender-two">
      <div v-for="i in 35" :key="i">
        <div class="days-container" :id="`days${i}`">
          <span :id="`number${i}`">{{i}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weeks: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    };
  },
  mounted() {
    let node = document.createElement("DIV");
    let node2 = document.createElement("DIV");
    let node3 = document.createElement("DIV");
    let newWord = document.createTextNode(
      "Mrs. Steven daughter’s wedding photography"
    );
    let newWord2 = document.createTextNode(
      "Mrs. Steven daughter’s wedding photography"
    );
    let newWord3 = document.createTextNode(
      "Mrs. Steven daughter’s wedding photography"
    );
    node.className = "wedding-text";
    node2.className = "wedding-text";
    node3.className = "long-wedding-text";
    node.appendChild(newWord);
    node2.appendChild(newWord2);
    node3.appendChild(newWord3);
    document.getElementById("number28").appendChild(node2);
    document.getElementById("number2").appendChild(node);
    document.getElementById("number11").appendChild(node3);

    // document.getElementById("number28").appendChild(node);
  }
};
</script>

<style>
.calender {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: white;
}
.calender-two {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: white;
  margin-top: 1px;
  grid-gap: 1px;
}
.calender .week-area {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d4d4d4;
  height: 50px;
  color: #4d4d4d;
  font-size: 12px;
}
.calender-two .days-container {
  position: relative;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d4d4d4;
  font-size: 12px;
}
.calender-two #days31,
#days32,
#days33,
#days34,
#days35 {
  color: white;
}
.calender-two #days2,
#days11,
#days12,
#days13,
#days28 {
  background: #fff3d4;
}
.calender-two #days11 {
  border-right: none;
  margin-right: -1px;
}
.calender-two #days12 {
  border-right: none;
  border-left: none;
  margin-right: -1px;
}
.calender-two #days13 {
  border-left: none;
}
.calender-two #number2,
#number11,
#number12,
#number13,
#number28 {
  text-align: center;
  position: absolute;
  top: 10px;
}
.wedding-text {
  background: #ffb603;
  padding: 5px;
  margin: 7px;
  color: #ffffff;
  text-align: left;
}
.long-wedding-text {
  position: absolute;
  left: -55px;
  background: #ffb603;
  width: 370px;
  z-index: 10;
  color: #ffffff;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #d4d4d4;
}
</style>