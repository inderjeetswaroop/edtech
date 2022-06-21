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
   <form action="{{route('addnewchapter')}}" method="post" >
   			@csrf
			<br><br>
			<input type="text" name="chaptername" class="form-control" placeholder="Chapter or module Name">
			<input type="text" name="chapterduration" class="form-control" placeholder="Chapter or module Duration">
			<input type="text" name="topicnotes" class="form-control" placeholder="topicnotes">
			<input type="text" name="attempts" class="form-control" placeholder="attempts">
			<input type="datetime-local" name="scheludTime" class="form-control" placeholder="scheludTime">
			<input type="text" name="corseId" class="form-control" value="4">
			
			   
		<button type="Submit">Submit</button>
   </form>

</div>
<script type="text/javascript" src="/js/app.js"></script>
</body>
</html>