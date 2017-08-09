<template>
  <aside>
    <div id="sidebar" class="nav-collapse">
      <!-- sidebar menu start-->
      <div class="leftside-navigation">
        <ul class="sidebar-menu" id="nav-accordion">
          <li>
            <a class="active" href="index.html">
              <i class="fa fa-dashboard"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-laptop"></i>
              <span>Layouts</span>
            </a>
            <ul class="sub">
              <li><a href="boxed_page.html">Boxed Page</a></li>
              <li><a href="horizontal_menu.html">Horizontal Menu</a></li>
              <li><a href="language_switch.html">Language Switch Bar</a></li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-book"></i>
              <span>UI Elements</span>
            </a>
            <ul class="sub">
              <li><a href="general.html">General</a></li>
              <li><a href="buttons.html">Buttons</a></li>
              <li><a href="typography.html">Typography</a></li>
              <li><a href="widget.html">Widget</a></li>
              <li><a href="slider.html">Slider</a></li>
              <li><a href="tree_view.html">Tree View</a></li>
              <li><a href="nestable.html">Nestable</a></li>
              <li><a href="grids.html">Grids</a></li>
              <li><a href="calendar.html">Calender</a></li>
              <li><a href="draggable_portlet.html">Draggable Portlet</a></li>
            </ul>
          </li>
          <li>
            <a href="fontawesome.html">
              <i class="fa fa-bullhorn"></i>
              <span>Fontawesome </span>
            </a>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-th"></i>
              <span>Data Tables</span>
            </a>
            <ul class="sub">
              <li><a href="basic_table.html">Basic Table</a></li>
              <li><a href="responsive_table.html">Responsive Table</a></li>
              <li><a href="dynamic_table.html">Dynamic Table</a></li>
              <li><a href="editable_table.html">Editable Table</a></li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-tasks"></i>
              <span>Form Components</span>
            </a>
            <ul class="sub">
              <li><a href="form_component.html">Form Elements</a></li>
              <li><a href="advanced_form.html">Advanced Components</a></li>
              <li><a href="form_wizard.html">Form Wizard</a></li>
              <li><a href="form_validation.html">Form Validation</a></li>
              <li><a href="file_upload.html">Muliple File Upload</a></li>

              <li><a href="dropzone.html">Dropzone</a></li>
              <li><a href="inline_editor.html">Inline Editor</a></li>

            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-envelope"></i>
              <span>Mail </span>
            </a>
            <ul class="sub">
              <li><a href="mail.html">Inbox</a></li>
              <li><a href="mail_compose.html">Compose Mail</a></li>
              <li><a href="mail_view.html">View Mail</a></li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class=" fa fa-bar-chart-o"></i>
              <span>Charts</span>
            </a>
            <ul class="sub">
              <li><a href="morris.html">Morris</a></li>
              <li><a href="chartjs.html">Chartjs</a></li>
              <li><a href="flot_chart.html">Flot Charts</a></li>
              <li><a href="c3_chart.html">C3 Chart</a></li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class=" fa fa-bar-chart-o"></i>
              <span>Maps</span>
            </a>
            <ul class="sub">
              <li><a href="google_map.html">Google Map</a></li>
              <li><a href="vector_map.html">Vector Map</a></li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-glass"></i>
              <span>Extra</span>
            </a>
            <ul class="sub">
              <li><a href="blank.html">Blank Page</a></li>
              <li><a href="lock_screen.html">Lock Screen</a></li>
              <li><a href="profile.html">Profile</a></li>
              <li><a href="invoice.html">Invoice</a></li>
              <li><a href="pricing_table.html">Pricing Table</a></li>
              <li><a href="timeline.html">Timeline</a></li>
              <li><a href="gallery.html">Media Gallery</a></li><li><a href="404.html">404 Error</a></li>
              <li><a href="500.html">500 Error</a></li>
              <li><a href="registration.html">Registration</a></li>
            </ul>
          </li>
          <li>
            <a href="login.html">
              <i class="fa fa-user"></i>
              <span>Login Page</span>
            </a>
          </li>
        </ul>            </div>
      <!-- sidebar menu end-->
    </div>
  </aside>
  <!--sidebar end-->
</template>

<script>

</script>
<style>
  /*---*/
  .nav-collapse.collapse {
    display:inline;
  }
  ul.sidebar-menu,ul.sidebar-menu li ul.sub {
    margin:-2px 0 0;
    padding:0;
  }
  ul.sidebar-menu {
    padding-top:80px;

  }
  #sidebar>ul>li>ul.sub {
    display:none;
  }
  #sidebar .sub-menu>.sub li a {
    padding-left:46px;
  }
  #sidebar>ul>li.active>ul.sub,#sidebar>ul>li>ul.sub>li>a {
    display:block;
  }
  ul.sidebar-menu li ul.sub li {
    background:#28282e;
    margin-bottom:0;
    margin-left:0;
    margin-right:0;
  }
  ul.sidebar-menu li ul.sub li a {
    font-size:12px;
    padding-top:13px;
    padding-bottom:13px;
    -webkit-transition:all 0.3s ease;
    -moz-transition:all 0.3s ease;
    -o-transition:all 0.3s ease;
    -ms-transition:all 0.3s ease;
    transition:all 0.3s ease;
    color:#aeb2b7;
  }
  ul.sidebar-menu li ul.sub li a:hover,ul.sidebar-menu li ul.sub li.active a {
    color:#1fb5ad;
    -webkit-transition:all 0.3s ease;
    -moz-transition:all 0.3s ease;
    -o-transition:all 0.3s ease;
    -ms-transition:all 0.3s ease;
    transition:all 0.3s ease;
    display:block;
    background:#202025;
  }
  ul.sidebar-menu li {
    border-bottom:1px solid rgba(255,255,255,0.05);
  }
  ul.sidebar-menu li.sub-menu {
    line-height:15px;
  }
  ul.sidebar-menu ul.sub li {
    border-bottom:none;
  }
  ul.sidebar-menu li a span {
    display:inline-block;
  }
  ul.sidebar-menu li a {
    color:#aeb2b7;
    text-decoration:none;
    display:block;
    padding:18px 0 18px 25px;
    font-size:12px;
    outline:none;
    -webkit-transition:all 0.3s ease;
    -moz-transition:all 0.3s ease;
    -o-transition:all 0.3s ease;
    -ms-transition:all 0.3s ease;
    transition:all 0.3s ease;
  }
  ul.sidebar-menu li a.active,ul.sidebar-menu li a:hover,ul.sidebar-menu li a:focus {
    background:#28282e;
    color:#1FB5AD;
    display:block;
    -webkit-transition:all 0.3s ease;
    -moz-transition:all 0.3s ease;
    -o-transition:all 0.3s ease;
    -ms-transition:all 0.3s ease;
    transition:all 0.3s ease;
  }
  ul.sidebar-menu li a i {
    font-size:15px;
    padding-right:6px;
  }
  ul.sidebar-menu li a:hover i,ul.sidebar-menu li a:focus i {
    color:#1fb5ad;
  }
  ul.sidebar-menu li a.active i {
    color:#1fb5ad;
  }
  .mail-info,.mail-info:hover {
    margin:-3px 6px 0 0;
    font-size: 11px;
  }

</style>
