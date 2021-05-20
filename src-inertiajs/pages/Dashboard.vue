<template>
	<div class="flex flex-row space-x-6">
		<div class="flex-col w-1/3 p-3" :class="_config.theme.bgColor">
			<div class="text-white">用户</div>
			<div style="width:calc(100% - 0.5rem)"><canvas id="myChart1"></canvas></div>
		</div>
		
		<div class="flex-col w-1/3 p-3"  :class="_config.theme.bgColor">
			<div class="text-white">订单</div>
			<div style="width:calc(100% - 0.5rem)"><canvas id="myChart2"></canvas></div>
		</div>
		
		<div class="flex-col w-1/3 p-3"  :class="_config.theme.bgColor">
			<div class="text-white">客服</div>
			<div style="width:calc(100% - 0.5rem)"><canvas id="myChart3"></canvas></div>
		</div>
	</div>
	
	<div class="flex">
		<c-table 
				class="w-1/2"
				:columns='[{"name":"ID",fieldName:"img"},{"name":"名字",fieldName:"loation"},{"name":"邮箱",fieldName:"precentage"}]'
				:show="false"
				:data='[{img:"http://www.baidu.com",precentage:"20%",loation:"上海"},{img:"http://www.baidu.com",precentage:"20%",loation:"上海"},{img:"http://www.baidu.com",precentage:"20%",loation:"上海"}]'
		>
			<template v-slot:title><div class="p-3 pt-0 pl-0">区域占比</div></template>
			<template v-slot:action><span></span></template>
		</c-table>
	</div>
	
	<div class="flex py-3" :class="_config.theme.bgColor">
		<c-form title="Form表单" :fields="[{name:'账号'},{name:'密码'},{name:'密码'},{name:'密码'},{name:'密码'}]"></c-form>
	</div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
	name:"Dashboard",
	mounted:() => {
		Chart.overrides.bar.categoryPercentage = .5
		Chart.overrides.bar.barPercentage = .5
		Chart.overrides.line.tension = .3
		
		Chart.defaults.color = 'white'
		Chart.defaults.plugins.legend.labels.color = 'white'
		Chart.defaults.font.family = "system-ui"
		
		
		var ctx = document.getElementById('myChart1');
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		    	labels:['一月','二月','三月','四月'],
		        datasets: [
			        		{
					            label: '用户',
					            data: [{x:0, y:36},{x:1, y:174},{x:2, y:52},{x:3, y:280}],
					            borderWidth: 1,
					            backgroundColor:'blue'
					        },
					        
			        		{
					            label: '会员',
					            data: [{x:0, y:23},{x:1, y:124},{x:2, y:42},{x:3, y:250}],
					            borderWidth: 1,
					            backgroundColor:'green'
					        }
				        ]
			},
				    options: {
				    	parsing:false,
				        scales: {
				            y: {
				                beginAtZero: true
				            }
				        }
				    }
				}
			)
			
					
		var ctx = document.getElementById('myChart2');
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		    	labels:['一月','二月','三月','四月'],
		        datasets: [
			        		{
					            label: '成功',
					            data: [{x:0, y:36},{x:1, y:74},{x:2, y:52},{x:3, y:80}],
					            borderWidth: 1,
					            backgroundColor:'orange',
					            borderColor:'orange'
					        },
			        		{
					            label: '取消',
					            data: [{x:0, y:16},{x:1, y:34},{x:2, y:22},{x:3, y:50}],
					            borderWidth: 1,
					            backgroundColor:'gray',
					            borderColor:'gray'
					        }
					        ,
			        		{
					            label: '总单数',
					            type: 'bar',
					            barPercentage:.5,
					            data: [{x:0, y:52},{x:1, y:108},{x:2, y:74},{x:3, y:130}],
					            borderWidth: 1,
					            backgroundColor:'yellow',
					            borderColor:'yellow'
					        }
				        ]
			},
				    options: {
				    	parsing:false,
				        scales: {
				            y: {
				                beginAtZero: true
				            }
				        }
				    }
				}
			)
			
		var ctx = document.getElementById('myChart3');
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		    	labels:['一月','二月','三月','四月'],
		        datasets: [
			        		{
					            label: '接待人数',
					            data: [{x:0, y:36},{x:1, y:74},{x:2, y:52},{x:3, y:80}],
					            borderWidth: 1,
					            backgroundColor:'green'
					        }
				        ]
			},
				    options: {
				    	parsing:false,
				        scales: {
				            y: {
				                beginAtZero: true
				            }
				        }
				    }
				}
			)
	}
}
</script>