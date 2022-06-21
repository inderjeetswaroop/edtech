<template>
    <div>
        <br>
        <p class="text-warning">
            {{successmsg}}
        </p>
        <form @submit.prevent>
            <div class="form-check">
            <label class="form-check-label">
                <input v-model="taxoption" value="1" type="radio" class="form-check-input" name="optradio" >Show Product Price with tax
            </label>
            </div>
            
            <div class="form-check">
            <label class="form-check-label">
                <input  v-model="taxoption" value="0" type="radio" class="form-check-input" name="optradio">Show Product Price without tax
            </label>
            </div><br>
            <button type="submit" @click="saveNow" class="btn btn-primary">Save</button>
        </form>
    </div>
</template>
<script>
export default {
   data(){
       return {
           taxoption:"",
           successmsg:"",
           
       }
   },
   created(){
        axios.get("selected-tax-standards")
            .then((response) => {
               this.taxoption= response.data; 
            })
            .catch((error) => console.log(error));
   },
   methods:{
        saveNow(){
            this.successmsg = "Please wait..";
             const formdata = new FormData();
                formdata.append("taxstd",this.taxoption);
                
             axios.post("taxStd",formdata)
                .then((data) =>{
                    // console.log(data.data);
                 this.successmsg = "updated successfully";
                })
                .catch(error => {
                    this.error = error.response.data.errors;
                    this.successmsg = this.error;
                    console.log(this.error);
                })
        }
   }    
    
}
</script>
<style scoped>

</style>