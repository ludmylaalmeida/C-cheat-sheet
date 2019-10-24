
// search by categories

$(document).ready(
    function(){
        $("#c").click(function () {
            $('.title').removeClass('d-none');
            $('.c-def').removeClass('d-none');
            $('.cplusplus-def').addClass('d-none');
            $('.sorts-def').addClass('d-none');
            $('.tree-def').addClass('d-none');
        });

        $("#cplusplus").click(function () {
            $('.title').removeClass('d-none');
            $('.cplusplus-def').removeClass('d-none');
            $('.c-def').addClass('d-none');
            
        });
        $("#sorts").click(function () {
            $('.title').removeClass('d-none');
            $('.sorts-def').removeClass('d-none');
            $('.c-def').addClass('d-none');
            
        });
        $("#tree").click(function () {
            $('.title').removeClass('d-none');
            $('.c-def').removeClass('d-none');
            
        });

    });

