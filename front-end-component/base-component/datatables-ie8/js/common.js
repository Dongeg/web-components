$(function() {
    /*全选*/
    $("table thead th input:checkbox").on("click",function() {
        $(this).closest("table").find("tr > td:first-child input:checkbox").prop("checked", $("table thead th input:checkbox").prop("checked"));
    });
});
