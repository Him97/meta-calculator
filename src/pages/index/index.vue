<template>
	<view class="content">
		<el-container class="calculator">
			<el-header class="calc-header">{{ current || '0' }}</el-header>
			<el-main class="calc-main">
				<el-row :gutter="0">
					<el-col :span="6"><el-button @click="method.clear" type="info">C</el-button></el-col>
					<el-col :span="6"><el-button @click="method.sign" type="info">+/-</el-button></el-col>
					<el-col :span="6"><el-button @click="method.percent" type="info">%</el-button></el-col>
					<el-col :span="6"><el-button @click="method.divide" type="warning">÷</el-button></el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="6"><el-button @click="method.append('7')">7</el-button></el-col>
					<el-col :span="6"><el-button @click="method.append('8')">8</el-button></el-col>
					<el-col :span="6"><el-button @click="method.append('9')">9</el-button></el-col>
					<el-col :span="6"><el-button @click="method.multiply" type="warning">x</el-button></el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="6"><el-button @click="method.append('4')">4</el-button></el-col>
					<el-col :span="6"><el-button @click="method.append('5')">5</el-button></el-col>
					<el-col :span="6"><el-button @click="method.append('6')">6</el-button></el-col>
					<el-col :span="6"><el-button @click="method.minus" type="warning">-</el-button></el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="6"><el-button @click="method.append('1')">1</el-button></el-col>
					<el-col :span="6"><el-button @click="method.append('2')">2</el-button></el-col>
					<el-col :span="6"><el-button @click="method.append('3')">3</el-button></el-col>
					<el-col :span="6"><el-button @click="method.plus" type="warning">+</el-button></el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="12"><el-button @click="method.append('0')">0</el-button></el-col>
					<el-col :span="6"><el-button @click="method.dot">.</el-button></el-col>
					<el-col :span="6"><el-button @click="method.equal" type="warning">=</el-button></el-col>
				</el-row>
			</el-main>
		</el-container>
	</view>
</template>

<script setup lang="ts">
import ref  from 'vue';
const current = ref('');
let prev: string | null = null;

type Operator = (a: string, b: string) => number;
let operator: Operator | null = null;
let operatorClicked: boolean = false;

const method = {
  clear() {
    current.value = '';
  },
  sign() {
    current.value =
      current.value.charAt(0) === '-'
        ? current.value.slice(1)
        : `-${current.value}`;
  },
  percent() {
    current.value = (parseFloat(current.value) / 100).toString();
  },
  append(number: string) {
    if (operatorClicked === true) {
      current.value = '';
      operatorClicked = false;
    }
    current.value += number;
  },
  dot() {
    if (!current.value.includes('.')) {
      current.value += '.';
    }
  },
  setPrev() {
    operatorClicked = true;
    prev = current.value;
  },
  plus() {
    operator = (a: string, b: string) => Number(a) + Number(b);
    method.setPrev();
  },
  minus() {
    operator = (a: string, b: string) => Number(a) - Number(b);
    method.setPrev();
  },
  multiply() {
    operator = (a: string, b: string) => Number(a) * Number(b);
    method.setPrev();
  },
  divide() {
    operator = (a: string, b: string) => Number(a) / Number(b);
    method.setPrev();
  },
  equal() {
    if (operator && prev !== null) {
      current.value = operator(prev, current.value).toString();
    }
    prev = null;
  },
};
</script>

<style scoped>
.calc-header {
  padding: 1rem;
  text-align: end;
  font-size: larger;
  font-weight: 600;
  background-color: #393a3c;
  border-radius: 5px;
}

.calc-main {
  padding: 0;
}

.el-button {
  width: 100%;
}
</style>
