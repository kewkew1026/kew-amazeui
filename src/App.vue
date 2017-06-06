<template>
  <div id="app">
    <header class="am-topbar admin-header">
      <div class="am-topbar-brand">
        <strong>amazeui-vue</strong> <small>components</small>
      </div>

      <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

      <div class="am-collapse am-topbar-collapse">

        <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
          <li><a href="javascript:;"><span class="am-icon-envelope-o"></span> 收件箱 <span class="am-badge am-badge-warning">5</span></a></li>
          <li class="am-dropdown">
            <a class="am-dropdown-toggle" href="javascript:;">
              <span class="am-icon-users"></span> 管理员 <span class="am-icon-caret-down"></span>
            </a>
            <ul class="am-dropdown-content">
              <li><a href="#"><span class="am-icon-user"></span> 资料</a></li>
              <li><a href="#"><span class="am-icon-cog"></span> 设置</a></li>
              <li><a href="#"><span class="am-icon-power-off"></span> 退出</a></li>
            </ul>
          </li>
          <li class="am-hide-sm-only"><a href="javascript:;"><span class="am-icon-arrows-alt"></span> <span class="admin-fullText">开启全屏</span></a></li>
        </ul>
      </div>
    </header>

    <div class="am-cf admin-main">

      <!-- sidebar start -->
      <div class="admin-sidebar am-offcanvas">
        <div class="am-offcanvas-bar admin-offcanvas-bar">
          <ul class="am-list admin-sidebar-list">
            <li><router-link to="/"><span class="am-icon-home"></span> Home</router-link></li>
            <li class="admin-parent">
              <a class="am-cf"><span class="am-icon-file"></span> Components <span class="am-icon-angle-right am-fr am-margin-right"></span></a>
              <ul class="am-list am-collapse admin-sidebar-sub am-in">
                <li><router-link to="/forms"><span class="am-icon-edit"></span> Forms</router-link></li>
                <li><router-link to="/buttons"><span class="am-icon-square-o"></span> Buttons</router-link></li>
                <li><router-link to="/lists"><span class="am-icon-th"></span> Lists</router-link></li>
                <li><router-link to="/panels"><span class="am-icon-calendar"></span> Panels</router-link></li>
                <li><router-link to="/modals"><span class="am-icon-bug"></span> Modals</router-link></li>
                <li><router-link to="/paginations"><span class="am-icon-bug"></span> Paginations</router-link></li>
                <li><router-link to="/breadcrumb"><span class="am-icon-bug"></span> Breadcrumbs</router-link></li>
                <li><router-link to="/article"><span class="am-icon-bug"></span> Articles</router-link></li>
                <li><router-link to="/datetimepicker"><span class="am-icon-bug"></span> DateTimePickers</router-link></li>
                <li><router-link to="/navs"><span class="am-icon-bug"></span> Navs</router-link></li>
                <li><router-link to="/tabs"><span class="am-icon-bug"></span> Tabs</router-link></li>
              </ul>
            </li>
            <li class="admin-parent">
              <a class="am-cf"><span class="am-icon-file"></span> Advanced <span class="am-icon-angle-right am-fr am-margin-right"></span></a>
              <ul class="am-list am-collapse admin-sidebar-sub am-in">
                <li><router-link to="/datatables"><span class="am-icon-edit"></span> DataTables</router-link></li>
              </ul>
            </li>
          </ul>

          <div class="am-panel am-panel-default admin-sidebar-panel">
            <div class="am-panel-bd">
              <p><span class="am-icon-github"></span> Github</p>
              <p><a href="https://github.com/zcoding/amazeui-vue">amazeui-vue</a></p>
            </div>
          </div>

          <div class="am-panel am-panel-default admin-sidebar-panel">
            <div class="am-panel-bd">
              <p><span class="am-icon-bookmark"></span> NPM</p>
              <p>npm install amazeui-vue</p>
              <p><a href="https://www.npmjs.com/package/amazeui-vue">amazeui-vue package</a></p>
            </div>
          </div>

          <div class="am-panel am-panel-default admin-sidebar-panel">
            <div class="am-panel-bd">
              <p><span class="am-icon-github-square"></span> wiki</p>
              <p><a href="https://github.com/zcoding/amazeui-vue/wiki">amazeui-vue wiki</a></p>
            </div>
          </div>
        </div>
      </div>
      <!-- sidebar end -->

      <!-- content start -->
      <div class="admin-content">
        <router-view></router-view>
      </div>
      <!-- content end -->

    </div>

    <a href="#" class="am-icon-btn am-icon-th-list am-show-sm-only admin-menu" data-am-offcanvas="{target: '#admin-offcanvas"></a>
  </div>
</template>

<script>
export default {
  name: 'app',
  created:function () {
    console.log("create");
  }
}
</script>

<style>
@import "assets/css/admin.css";
</style>
