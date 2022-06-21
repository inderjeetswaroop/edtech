<div class="page-sidebar">
            <div class="sidebar custom-scrollbar">
                <div class="sidebar-user text-center">
                    <div><img class="img-60 rounded-circle lazyloaded blur-up" src="/frontassets/images/logo.png" alt="#">
                    </div>
                    <h6 class="mt-3 f-14">BENBY Admin</h6>
                    
                </div>
                <ul class="sidebar-menu">
                    <li><a class="sidebar-header" href="{{route('adminhome')}}"><i data-feather="home"></i><span>Home</span></a></li>
                    
                    <li><a class="sidebar-header" href="#"><i data-feather="box"></i> <span>Course Setting</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><router-link :to="{name:'courseSetting'}" ><i class="fa fa-circle"></i> Course List</router-link></li>
                            <li><router-link :to="{name:'addnewcourse'}" ><i class="fa fa-circle"></i> Add New Course</router-link></li>
                            <li><router-link :to="{name:'adminCatsetting'}" ><i class="fa fa-circle"></i>Course Category</router-link></li>
                            <li><router-link :to="{name:'courseBundleSetting'}" ><i class="fa fa-circle"></i>Course Bundle Setting</router-link></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="#"><i data-feather="box"></i> <span>Products Setting</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="{{ route('adminCatsetting') }}"><i class="fa fa-circle"></i>Category</a></li>
                            <li><a href="{{route('proSett')}}"><i class="fa fa-circle"></i>Product List</a></li>
                            <li><a href="{{route('addproduct')}}"><i class="fa fa-circle"></i>Add Product</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="#"><i data-feather="box"></i> <span>Articles & Blogs</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="{{ route('blogCatset') }}"><i class="fa fa-circle"></i>Article Category Set.</a></li>
                            <li><a href="{{route('blogset')}}"><i class="fa fa-circle"></i>Article List</a></li>
                            <li><a href="{{route('blogset')}}"><i class="fa fa-circle"></i>Add New Article</a></li>
                            
                            
                        </ul>
                    </li>
                    <li>
                    <router-link :to="{name:'dailymcqset'}" class="sidebar-header"><i data-feather="box"></i> Daily MCQs</router-link>
                    <li><a class="sidebar-header" href="{{route('slidersetting')}}"><i data-feather="box"></i><span>Slider Setting</span></a></li>
                    <li><a class="sidebar-header" href="{{route('popupsetting')}}"><i data-feather="box"></i><span>PopUp Setting</span></a></li>
                    <!-- <li><a class="sidebar-header" href="#"><i data-feather="dollar-sign"></i><span>Sales</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="order.html"><i class="fa fa-circle"></i>Orders</a></li>
                            <li><a href="transactions.html"><i class="fa fa-circle"></i>Transactions</a></li>
                        </ul>
                    </li> -->
                    <!-- <li><a class="sidebar-header" href="#"><i data-feather="tag"></i><span>Coupons</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="coupon-list.html"><i class="fa fa-circle"></i>List Coupons</a></li>
                            <li><a href="coupon-create.html"><i class="fa fa-circle"></i>Create Coupons </a></li>
                        </ul>
                    </li> -->
                    
                    <li><a class="sidebar-header" href="{{route('media')}}"><i data-feather="camera"></i><span>Media</span></a></li>
                   
                    <li><a class="sidebar-header" href="#"><i data-feather="user-plus"></i><span>Users</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="{{ route('userSetting') }}"><i class="fa fa-circle"></i>User List</a></li>
                            <li><a href="{{ route('interviewUser') }}"><i class="fa fa-circle"></i>Interview Registration User</a></li>
                        </ul>
                    </li>
                    
                    <li><a class="sidebar-header" href="#"><i data-feather="chrome"></i><span>Other Setting</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                        
                            <li><a href="{{route('shipSett')}}"><i class="fa fa-circle"></i>Shipping Settings</a></li>
                            <li><a href="{{route('currSett')}}"><i class="fa fa-circle"></i>Currency Setting</a></li>
                            <li><a href="{{ route('adminTaxsetting') }}"><i class="fa fa-circle"></i>Tax Setting</a></li>
                            <li><a href="{{ route('locsetting') }}"><i class="fa fa-circle"></i>Location Setting</a></li>
                        </ul>
                    </li>
                    <!-- <li><a class="sidebar-header" href="reports.html"><i data-feather="bar-chart"></i><span>Reports</span></a></li> -->
                    <!-- <li><a class="sidebar-header" href="invoice.html"><i data-feather="archive"></i><span>Invoice</span></a>
                    </li> -->
                    <li><a class="sidebar-header" href="login.html"><i data-feather="log-in"></i><span>Login</span></a>
                    </li>
                </ul>
            </div>
        </div>