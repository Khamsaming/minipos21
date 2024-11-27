<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App Minipos</title>
    @vite('resources/css/app.css')

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ url('assets/vendor/css/core.css') }}" class="template-customizer-core-css">
    <link rel="stylesheet" href="{{ url('assets/vendor/css/theme-default.css') }}" class="template-customizer-theme-css">
    <link rel="stylesheet" href="{{ url('assets/css/demo.css') }}">
    
    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{ url('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}"> 
    <link rel="stylesheet" href="{{ url('assets/vendor/libs/apex-charts/apex-charts.css') }}">

    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>
    <!-- Page CSS -->
</head>
<body>

    <div id="app-vue"></div>

  <script src="{{ url('assets/vendor/libs/jquery/jquery.js') }}"></script>
  <script src="{{ url('assets/vendor/libs/popper/popper.js') }}"></script>
  <script src="{{ url('assets/vendor/js/bootstrap.js') }}"></script>
  <script src="{{ url('assets/vendor/libs/node-waves/node-waves.js') }}"></script>
  <script src="{{ url('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
  <script src="{{ url('assets/vendor/js/menu.js') }}"></script>
    @vite('resources/js/app.js')
</body>
</html>