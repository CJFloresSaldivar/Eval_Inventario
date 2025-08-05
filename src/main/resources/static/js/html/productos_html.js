export function generarPaginaProductos(usuario,rol) {

    let SidebarSection = '';
    let altaProducto='';


    switch(rol){
        case '1':
             SidebarSection = `
                                <!-- Sidebar - Brand -->
                                <a id="sindex" onclick='window.generatePage("index","${usuario}","${rol}")'  class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                                    <div class="sidebar-brand-icon rotate-n-15">
                                        <i class="fas fa-warehouse-wink"></i>
                                    </div>
                                    <div class="sidebar-brand-text mx-3"> <sup>Inventario</sup></div>
                                </a>

                                <!-- Divider -->
                                <hr class="sidebar-divider my-0">

                                <!-- Nav Item - Dashboard -->
                                <li class="nav-item active">
                                    <a id="sentrada" onclick='window.generatePage("productos","${usuario}","${rol}")' class="nav-link" href="#">
                                        <i class="fas fa-fw fa-tachometer-alt"></i>
                                        <span>Inventario</span></a>
                                </li>

                                <!-- Divider -->
                                <hr class="sidebar-divider">




                                <!-- Nav Item - Tables -->
                                <li class="nav-item">
                                    <a id="sjournal" onclick='window.generatePage("journal","${usuario}","${rol}")' class="nav-link" href="#">
                                        <i class="fas fa-fw fa-table"></i>
                                        <span>Histórico</span></a>
                                </li>

                                <!-- Divider -->
                                <hr class="sidebar-divider d-none d-md-block">

                                <!-- Sidebar Toggler (Sidebar) -->
                                <div class="text-center d-none d-md-inline">
                                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                                </div>

            `;
            altaProducto=`
                                            <div class="card border-left-success shadow h-100 py-2">
                                                    <div class="card-body">
                                                        <div class="row no-gutters align-items-center">
                                                            <div class="col mr-2">
                                                                <button type="button" class="btn btn-outline-success"  id="nuevo_producto">Agregar nuevo Producto</button>
                                                            </div>
                                                            <div class="col-auto">
                                                                <i class="fas fa-plus fa-2x text-gray-300"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
            `;

            break;
        case '2':
             SidebarSection = `
                                            <!-- Sidebar - Brand -->
                                            <a id="sindex" onclick='window.generatePage("index","${usuario}","${rol}")'  class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                                                <div class="sidebar-brand-icon rotate-n-15">
                                                    <i class="fas fa-warehouse-wink"></i>
                                                </div>
                                                <div class="sidebar-brand-text mx-3"> <sup>Inventario</sup></div>
                                            </a>

                                            <!-- Divider -->
                                            <hr class="sidebar-divider my-0">




                                            <!-- Nav Item - Charts -->
                                            <li class="nav-item">
                                                <a id="ssalida" onclick='window.generatePage("productos","${usuario}","${rol}")' class="nav-link" href="#">
                                                    <i class="fas fa-fw fa-chart-area"></i>
                                                    <span>Salida productos</span></a>
                                            </li>



                                            <!-- Divider -->
                                            <hr class="sidebar-divider d-none d-md-block">

                                            <!-- Sidebar Toggler (Sidebar) -->
                                            <div class="text-center d-none d-md-inline">
                                                <button class="rounded-circle border-0" id="sidebarToggle"></button>
                                            </div>

            `;
            altaProducto=`

            `;

            break;
    }

    const ss_val = SidebarSection
    const ap_val = altaProducto

    const htmlContent = `


    <!DOCTYPE html>
    <html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>SB Admin 2 - Dashboard</title>

        <!-- Custom fonts for this template-->
        <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
        <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet">

        <!-- Custom styles for this template-->
        <link href="css/sb-admin-2.min.css" rel="stylesheet">
        <link href="css/stylev.css" rel="stylesheet">
        <link href="css/stylev2.css" rel="stylesheet">
    </head>

    <body id="page-top">

        <!-- Page Wrapper -->
        <div id="wrapper">

            <!-- Sidebar -->
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                ${ss_val}



            </ul>
            <!-- End of Sidebar -->

            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">

                <!-- Main Content -->
                <div id="content">

                    <!-- Topbar -->
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        <!-- Sidebar Toggle (Topbar) -->
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>




                        <!-- Topbar Navbar -->
                        <ul class="navbar-nav ml-auto">

                            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                            <li class="nav-item dropdown no-arrow d-sm-none">
                                <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-search fa-fw"></i>
                                </a>
                                <!-- Dropdown - Messages -->
                                <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form class="form-inline mr-auto w-100 navbar-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2">
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="button">
                                                    <i class="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>



                            <div class="topbar-divider d-none d-sm-block"></div>

                            <!-- Nav Item - User Information -->
                            <li class="nav-item dropdown no-arrow">
                                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">${usuario}</span>
                                    <img class="img-profile rounded-circle"
                                        src="img/undraw_profile.svg">
                                </a>
                                <!-- Dropdown - User Information -->
                                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="userDropdown">
                                    <a class="dropdown-item" href="#">
                                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Profile
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Settings
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Activity Log
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>

                        </ul>

                    </nav>
                    <!-- End of Topbar -->

                    <!-- Begin Page Content -->
                    <div class="container-fluid">

                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Productos</h1>
                        <p class="mb-4"> </p>
                        <div class="row">
                            <div class="col-xl-3 col-md-6 mb-4"></div>
                            <div class="col-xl-3 col-md-6 mb-4"></div>
                            <div class="col-xl-3 col-md-6 mb-4"></div>
                            <div class="col-xl-3 col-md-6 mb-4">
                                ${ap_val}
                            </div>
                        </div>
                        <!-- DataTales Example -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Listado de Productos</h6>
                            </div>
                            <div class="card-body">
                                <input type="hidden" id="id_rolGral" value="${rol}">
                                <div class="table-responsive">

                                    <table class="table table-bordered" id="productos" width="100%" cellspacing="0">
                                        <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Nombre</th>
                                            <th>Cantidad</th>
                                            <th>Estatus</th>

                                        </tr>
                                        </thead>

                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- /.container-fluid -->
                </div>
                <!-- End of Main Content -->

                <!-- Footer -->
                <footer class="sticky-footer bg-white">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
                <!-- End of Footer -->

            </div>
            <!-- End of Content Wrapper -->

        </div>
        <!-- End of Page Wrapper -->

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

        <!-- Logout Modal-->
        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a class="btn btn-primary" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bootstrap core JavaScript-->
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Core plugin JavaScript-->
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        <!-- Custom scripts for all pages-->
        <script src="js/sb-admin-2.min.js"></script>

        <!-- Page level plugins -->
        <script src="vendor/chart.js/Chart.min.js"></script>

        <!-- Page level custom scripts -->
        <script src="js/demo/chart-area-demo.js"></script>
        <script src="js/demo/chart-pie-demo.js"></script>
        <script src="js/login.js"></script>

        <script src="js/productos.js"></script>

        <!-- Modal para nuevo producto -->
        <div class="modal fade" id="productoModal" tabindex="-1" role="dialog" aria-labelledby="productoModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productoModalLabel">Nuevo Producto</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Formulario -->
                        <form id="formProducto">
                            <div class="form-group">
                                <label for="nombreProducto">Nombre del Producto</label>
                                <input type="text"  class="form-control" id="nombreProducto" >
                            </div>
                            <div class="form-group">
                                <label>Cantidad</label>
                                <input type="number" value=0 class="form-control" id="cantidad" required disabled>
                            </div>
                            <div class="form-group">
                                <label>Estado</label>
                                 <select class="form-control" id="status" disabled>
                                    <option value="1" selected>Activo</option>
                                    <option value="0">Inactivo</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" id="guardarProducto">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal incrementar  -->
        <div class="modal fade" id="producto_plusModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Agregar Productos</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="formCantidad">
                            <input type="hidden" id="id_producto">
                            <input type="hidden" id="cantidadActualHidden">
                            <div class="form-group">
                                <label for="cantidadInput">Cantidad</label>
                                <input type="number" class="form-control" id="cantidadInput" min="0" required>
                                <small id="cantidadError" class="text-danger d-none">La cantidad no puede ser menor a la actual (<span id="cantidadActualText"></span>)</small>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" id="confirmarCantidad">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal salida  -->
            <div class="modal fade" id="producto_minusModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Salida de Productos</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="formCantidad">
                                <input type="hidden" id="id_productol">
                                <input type="hidden" id="cantidadActualHiddenl">
                                <div class="form-group">
                                    <label id="nombreproductol"></label>
                                </div>
                                <div class="form-group">
                                    <label for="cantidadInput">Cantidad</label>
                                    <input type="number" class="form-control" id="cantidadInputl" min="0" required>
                                    <small id="cantidadErrorl" class="text-danger d-none">No puede extraer mas productos de los que existen (<span id="cantidadActualTextl"></span>)</small>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" id="confirmarCantidadl">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>



    </body>

    </html>
`;


     document.write(htmlContent);
     document.close();

}