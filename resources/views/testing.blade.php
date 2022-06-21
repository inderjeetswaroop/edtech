<!DOCTYPE html>
<html>
<head>
	<title></title>
    <meta name="title" content="">
    <meta name="keywords" content="">
    <meta name="description" content="">
</head>
<body>
<div id="app">
   
    <router-link to="/indertest">InderTest</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/service/website-development">Service</router-link>
    <router-link :to="{name:'mytesting'}">Testing</router-link>
    <router-link to="/testing/t2">Testing2</router-link>
    <router-link to="/testing/profile">Profile</router-link>
    <router-link to="/testing/profiletest">ProfileTest</router-link>
    <router-link to="/homepage2">Homepage</router-link>
    <router-view></router-view>
    <router-view name="sidebar"></router-view>
    <router-view name="indertesting"></router-view>


</div>
<script type="text/javascript" src="../js/app.js"></script>
</body>
</html>