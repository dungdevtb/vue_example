<script>
export default {
  name: "HelloWorld",
};
</script>

<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

// handling input
const textHello = ref("Hello Word!");
const handleReverseText = () => {
  textHello.value = textHello.value.split("").reverse().join("");
};

//attribute Binding
const msg = ref("Im showingg after hover text");
const isRed = ref(true);
const color = ref("violet");
const toggleRed = () => {
  isRed.value = !isRed.value;
};

const toggleColor = () => {
  color.value = color.value === "violet" ? "blue" : "violet";
};

// Conditional Binding
const show = ref(true);
const list = ref([1, 2, 3]);

// Form Binding
const text = ref("Enter text");
const checked = ref(true);
const checkedName=ref(['HN'])
const radioEd=ref("One")
const selected=ref("abc")
const multiSelect=ref(['abc','cba'])

//Props Component
const fastFoodList=ref([
    {id:0, name: 'Snackkkkk'},
    {id:1, name: 'Chicken'},
    {id:2, name: 'Hambuger'},
    {id:3, name: 'Ice Cream'},
    {id:4, name: 'Milk Tea'},
    {id:5, name: 'Something Else'},
])
</script>

<template>
  <div class="flex-evenly">
    <div class="hello">
      <h1 class="text-title">Handling User Input</h1>
      <h3>{{ textHello }}</h3>
      <button @click="handleReverseText">Reverse Text</button>
      <button @click="textHello += ' !'">Add !</button>
    </div>
    <div class="hello">
      <h1 class="text-title">Attribute Bindings</h1>
      <p><span :title="msg">Hover to show text</span></p>
      <p :class="{ red: isRed }" @click="toggleRed">
        Toggle Text default and red
      </p>
      <p :style="{ color }" @click="toggleColor">Toggle colorrrrrrr</p>
    </div>
  </div>

  <div class="flex-evenly">
    <div class="hello">
        <div>
            <h1>Conditional and Loop</h1>
            <button @click="show = !show">Toggle List</button>
            <button @click="list.push(list.length + 1)">Push Number</button>
            <button @click="list.pop()">Pop Number</button>
            <button @click="list.reverse()">Reverse List</button>
      
            <ul v-if="show && list.length">
              <li v-for="item of list" :key="item">{{ item }}</li>
            </ul>
            <p v-else-if="list.length">List is not empty ,but hidden</p>
            <p v-else>List is empty</p>
        </div>
        <div>
            <h1>Prop Component</h1>
            <ol>
                <Child v-for="objItem in fastFoodList" :key="objItem?.id" :todo="objItem"/>
            </ol>
        </div>
    </div>
    <div class="hello">
      <h1>Form Binding</h1>

      <div class="flex-evenly">
        <div class="mr--15">
          <h4>Input Text</h4>
          <input v-model="text" />
          <div>{{ text }}</div>
        </div>
        <div class="mr--15">
          <h4>Input Checkbox</h4>
          <input type="checkbox" name="" :id="checked" v-model="checked" /> -
          <span>Checked: {{ checked }}</span>
        </div>   
        <div>
          <h4>Multiple Checkbox</h4>
          <input type="checkbox" id="hn" value="HN" v-model="checkedName" /> - <label for="hn">Hà Nội</label> &nbsp;
          <input type="checkbox" id="dn" value="DN" v-model="checkedName" /> - <label for="dn">Đà Nẵng</label> &nbsp;
          <input type="checkbox" id="hcm" value="HCM" v-model="checkedName" /> - <label for="hcm">TP.HCM</label>
          <p>CheckedName: <pre>{{ checkedName }}</pre></p>
        </div>
      </div>

      <div class="flex-evenly">
        <div class="mr--15">
          <h4>Radio Checkbox</h4>
          <input type="radio" id="one" value="One" v-model="radioEd"> <label for="one">One</label>
          <input type="radio" id="two" value="Two" v-model="radioEd"> <label for="two">Two</label>
          <div>radio checked: {{ radioEd }}</div>
        </div>
        <div class="mr--15">
            <h4>Select</h4>
            <select v-model="selected" class="mr--15">
                <option value="abc">Abc</option>
                <option value="acb">Acb</option>
                <option value="cba">cba</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>
        <div>
            <h4>Multi Select</h4>
            <select v-model="multiSelect" multiple class="mr--15">
                <option value="abc">Abc</option>
                <option value="acb">Acb</option>
                <option value="cba">cba</option>
            </select>
            <span>MultiSelect: {{ multiSelect }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  color: red;
}

.mr--15{
  margin-right: 15px;
}

h3 {
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
