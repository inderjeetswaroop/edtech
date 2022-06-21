<button id="rzp-button1" hidden>Pay</button>  
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
    <?php 
        $userName = $payInfo->fname." ".$payInfo->lname;
    ?>
var options = {
    "key": "{{$razorpayId}}", // Enter the Key ID generated from the Dashboard
    "amount": "{{$payInfo->amount}}", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "{{$userName}}",
    "description": "{{$payInfo->description}}",
    "image": "http://127.0.0.1:8000/frontassets/images/logo.png", // You can give your logo url
    "order_id": "{{$payInfo->orderId}}", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        // After payment successfully made response will come here
        // send this response to Controller for update the payment response
        // Create a form for send this data
        // Set the data in form
        document.getElementById('rzp_paymentid').value = response.razorpay_payment_id;
        document.getElementById('rzp_orderid').value = response.razorpay_order_id;
        document.getElementById('rzp_signature').value = response.razorpay_signature;
        // auto Submit the form
        document.getElementById('rzp-response').click();
    },
    "prefill": {
        "name": "{{$userName}}",
        "email": "{{$payInfo->email}}",
        "contact": "{{$payInfo->phone}}"
    },
    "notes": {
        "address": "{{$payInfo->address}}"
    },
    "theme": {
        "color": "#F37254"
    }
};
var rzp1 = new Razorpay(options);
window.onload = function(){
    document.getElementById('rzp-button1').click();
};

document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
</script>
<form action="{{route('finalcheck')}}" method="post" hidden>
    <input type="hidden" value="{{ csrf_token()}}" name="_token" />
    <input type="text" id="rzp_paymentid" name="rzp_paymentid" />
    <input type="text" id="rzp_orderid" name="rzp_orderid" />
    <input type="text" id="rzp_signature" name="rzp_signature" />
    <button type="submit" class="btn btn-primary" id="rzp-response">Submit</button>
</form>