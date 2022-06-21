<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <h1>{{tiger}}</h1>
                        I'm an example component.
                        <button @click="changeText">Click Me</button>

                        <!-- <router-view></router-view> -->
                        <router-view name="exam2nested"></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data(){
            return{
                tiger: "I am tiger"
            }
        },
        methods: {
           changeText()
           {
                this.tiger = "Tiger is my nick name I am inderjeet";
           }
        }
    }
</script>
