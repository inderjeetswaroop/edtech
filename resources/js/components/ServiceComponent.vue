<template>
    <div>
        {{$route.params.sname}}
            <router-link :to="{name:'mytesting'}">Testing</router-link>
            <router-link to="/testing/t2">Testing2</router-link>
            <router-link to="/testing/profile">Profile</router-link>

    </div>
</template>