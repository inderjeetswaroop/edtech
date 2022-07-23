<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div id="app">
	<!-- <example-component></example-component><br><br>
	<example-component></example-component><br><br>
	<example-component></example-component><br><br>
	<example-component></example-component><br><br>
	<example-component></example-component><br><br>
	<router-link to="/example">Example</router-link>
   <router-link to="/contact">Contact</router-link>
   <router-view></router-view> -->
   <form action="{{route('updatePay')}}" method="post" >
   			@csrf
			<br><br>
			<input type="text" name="cAmount" class="form-control" placeholder="amount">
			<input type="datetime-local" name="startDate" class="form-control" placeholder="start date">
			<input type="datetime-local" name="endDate" class="form-control" placeholder="end date">
			<input type="text" name="paymentNote" class="form-control" placeholder="pay note">
			<input type="text" name="payId" class="form-control" value="125">
			
			   
		<button type="Submit">Submit</button>
   </form>

</div>
<script type="text/javascript" src="/js/app.js"></script>
</body>
</html>