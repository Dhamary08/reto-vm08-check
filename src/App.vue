<template>
  <div id="page-top">
    <div id="wrapper">
      <!--=================== NAVBAR ===================-->
      <nav class="sidebar sidebar-color sidebar-dark accordion p-0">
        <!-- Logo -->
        <img
          src="/assets/img/logo-checklaboral-3.png"
          class="img-responsive-logo"
          alt=""
        />

        <ul class="nav navbar-nav text-light" id="accordionSidebar">
          <li class="nav-item">
            <p class="nav-link">
              <span class="text-roboto-bold" disabled> Dashboard </span>
            </p>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/"
              ><i class="fas fa-file-signature"></i><span>Resumen</span></a
            >
          </li>
          <li class="nav-item border-top">
            <p class="nav-link">
              <span class="text-roboto-bold"> Estados de Pago</span>
            </p>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/estadosadc"
              ><i class="fas fa-chart-bar"></i><span>ADC</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contratista"
              ><i class="fas fa-cogs"></i><span>Contratista</span></a
            >
          </li>
          <li class="nav-item border-top">
            <p class="nav-link">
              <span class="text-roboto-bold">Contratos</span>
            </p>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ContratoADC"
              ><i class="fas fa-chart-pie"></i><span>ADC</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Detalle"
              ><i class="fas fa-file-alt"></i><span>Detalles ADC</span></a
            >
          </li>
        </ul>
        <!-- <button
          class="btn rounded-circle d-flex mx-auto"
          id="sidebarToggle"
          type="button"
        ></button> -->
      </nav>
      <div class="d-flex flex-column" id="content-wrapper">
        <!--=================== HEADER ===================-->
        <div id="content">
          <nav
            class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"
          >
            <ul class="nav navbar-nav flex-nowrap ml-auto">
              <li class="nav-item text-roboto-bold px-3">Root Admin</li>
              <li class="nav-item"><i class="fas fa-cog px-3"></i></li>
              <li class="nav-item"><i class="fas fa-sign-in-alt px-3"></i></li>
            </ul>
          </nav>
          <!--=================== CONTENIDO ===================-->
          <div class="container-fluid">
            <div
              class="d-sm-flex justify-content-between align-items-center mb-4"
            >
              <!--        <h3 class="text-dark mb-0">Dashboard </h3> -->
            </div>
            <router-view />
          </div>
        </div>
        <!--=================== FOOTER ===================-->
        <footer class="py-2" style="background-color: rgb(239, 234, 245)">
          <p class="pl-5 my-0 text-roboto-regular">
            <strong>Copyright</strong>&copy; 2014-2020 Sourcing
          </p>
        </footer>
        <!--=================== SLIDER Navbar ===================-->
      </div>
      <a class="border rounded d-inline scroll-to-top" href="#page-top"
        ><i class="fas fa-angle-up"></i
      ></a>
    </div>
  </div>
</template>


