<template lang="">

    <!-- Layout wrapper -->
<div class="layout-wrapper layout-content-navbar  ">
  <div class="layout-container">

    
  

<!-- Menu -->

<Menu/>

<!-- / Menu -->

    <!-- Layout container -->
    <div class="layout-page">
      
    
<!-- Navbar -->

<nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
  
      
      
      <div class="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0   d-xl-none ">
        <a class="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
          <i class="ri-menu-fill ri-24px"></i>
        </a>
      </div>
      

      <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

        
        

        
        <!-- Search -->
        <div class="navbar-nav align-items-center">
          <div class="nav-item d-flex align-items-center">
            <i class="ri-search-line ri-22px me-2"></i>
            <input type="text" class="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search...">
          </div>
        </div>
        <!-- /Search -->
        

        <ul class="navbar-nav flex-row align-items-center ms-auto">

          
          
          <!-- Place this tag where you want the button to render. -->
          <li class="nav-item lh-1 me-4">
            <a class="github-button" href="https://github.com/themeselection/materio-bootstrap-html-admin-template-free" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themeselection/materio-bootstrap-html-admin-template-free on GitHub">Star</a>
          </li>
          
          <!-- User -->
          <li class="nav-item navbar-dropdown dropdown-user dropdown">
            <a class="nav-link dropdown-toggle hide-arrow p-0" href="javascript:void(0);" data-bs-toggle="dropdown">
              <div class="avatar avatar-online">
                <img src="../assets/img/avatars/1.png" alt="" class="w-px-40 h-auto rounded-circle">
              </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end mt-3 py-2">
              <li>
                <a class="dropdown-item" href="#">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-2">
                      <div class="avatar avatar-online">
                        <img src="../assets/img/avatars/1.png" alt="" class="w-px-40 h-auto rounded-circle">
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-0 small">John Doe</h6>
                      <small class="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="ri-user-3-line ri-22px me-2"></i>
                  <span class="align-middle">My Profile</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="ri-settings-4-line ri-22px me-2"></i>
                  <span class="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <span class="d-flex align-items-center align-middle">
                    <i class="flex-shrink-0 ri-file-text-line ri-22px me-3"></i>
                    <span class="flex-grow-1 align-middle">Billing</span>
                    <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger h-px-20 d-flex align-items-center justify-content-center">4</span>
                  </span>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <div class="d-grid px-4 pt-2 pb-1">
                  <a class="btn btn-danger d-flex" href="javascript:void(0);">
                    <small class="align-middle">Logout</small>
                    <i class="ri-logout-box-r-line ms-2 ri-16px"></i>
                  </a>
                </div>
              </li>
            </ul>
          </li>
          <!--/ User -->
          


        </ul>
      </div>

      
      
  
</nav>

<!-- / Navbar -->

      

      <!-- Content wrapper -->
      <div class="content-wrapper">

        <!-- Content -->
        
          <div class="container-xxl flex-grow-1 container-p-y">
            
            <router-view></router-view>

          </div>
          <!-- / Content -->

          
          

<!-- Footer -->
<footer class="content-footer footer bg-footer-theme">
  <div class="container-xxl">
    <div class="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
      <div class="text-body mb-2 mb-md-0">
        © , made with <span class="text-danger"><i class="tf-icons ri-heart-fill"></i></span> by <a href="https://themeselection.com" target="_blank" class="footer-link">ThemeSelection</a>
      </div>
      <div class="d-none d-lg-inline-block">
        
        <a href="https://themeselection.com/license/" class="footer-link me-4" target="_blank">License</a>
        <a href="https://themeselection.com/" target="_blank" class="footer-link me-4">More Themes</a>
        
        <a href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/" target="_blank" class="footer-link me-4">Documentation</a>
        
        <a href="https://github.com/themeselection/materio-bootstrap-html-admin-template-free/issues" target="_blank" class="footer-link">Support</a>
        
        
      </div>
    </div>
  </div>
</footer>
<!-- / Footer -->

          
          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    
    
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
    
    
  </div>
  <!-- / Layout wrapper -->

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>