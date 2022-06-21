<template>
    <div>

         
        <!-- Nav pills -->
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#home">Flat Shipping charge</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#menu1">Free Shipping Setting</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#menu2">Advance Shipping</a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane container active" id="home">
                    <flatship-setting></flatship-setting>
                </div>
                <div class="tab-pane container fade" id="menu1">
                    
                </div>
                <div class="tab-pane container fade" id="menu2">
                    <div class="btn-popup pull-right">
                        <!-- Add tax Modal -->
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-original-title="test" data-target="#shipadModal">Add Shipping rule</button>
                                <shippingadd-modal></shippingadd-modal>
                            <!-- Add tax Modal -->
                            
                    </div>
                    <!-- advance shipping list -->
                     <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th>Rule Name</th>
                                <th>Rule condition</th>
                                <th>Value</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                                <td>john@example.com</td>
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-primary btn-xs">Edit</button>
                                        <button class="btn btn-danger btn-xs">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                    <!-- advance shipping list -->
                </div>
            </div>
        <!-- Nav pills -->
       
    </div>
</template>
<script>
Vue.component('shippingadd-modal', require('./addshippingcomp.vue').default);
Vue.component('flatship-setting', require('./flatShipSetting.vue').default);
export default {
    
}
</script>