$(document).ready(function () {
    $('table').each(function () {
        $(this).dragtable();
        $(this).on('scroll', function () {
            $("table > *").width($("table").width() + $("table").scrollLeft());
        });
    })

    $('input').keyup(function () {
        var rows = $('tbody').find("tr").hide();
        var searchRows = $("tbody").find("tr").eq(0).show();
        if (this.value.length) {
            var data = this.value.split(" ");
            $.each(data, function (i, v) {
                rows.filter(":contains('" + v + "')").show();
            });
        } else rows.show();
    });

    $(".rowfilter").keyup(function (event) {
        var colIndex = event.target.name.split('col')[1];
        var value = event.target.value;
        console.log(value);
        var ref = $("tbody").find("tr");
        var rows = $("tbody").find("tr").hide();
        var searchRows = $("tbody").find("tr").eq(0).show();
        if (value.length) {
            rows.filter(function (index, row) {
                var data = row.children[colIndex - 1].innerText;
                return data.startsWith(value);
            }).show();
        } else rows.show();
    });

});
