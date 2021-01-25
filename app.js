$(document).ready(function() {
    $("#btn-html").click(function() {
        $("#html-code").show();        
        $("#css-code").hide();
        $("#js-code").hide();
        $("#result-code").hide();
    });

    $("#btn-css").click(function() {
        $("#html-code").hide();
        $("#css-code").show();
        $("#js-code").hide();
        $("#result-code").hide();
    });

    $("#btn-js").click(function() {
        $("#html-code").hide();
        $("#css-code").hide();
        $("#js-code").show();
        $("#result-code").hide();
    });

    $("#btn-result").click(function() {
        $("#html-code").hide();
        $("#css-code").hide();
        $("#js-code").hide();
        $("#result-code").show();
    });

    $("#btn-run").click(function() {
        var htmlCode = $("#in-html").val();
        var cssCode = $("#in-css").val();
        var jsCode = $("#in-js").val();        
        
        $("#in-result").val(htmlCode + "\n<style>\n" + cssCode + "\n</style>\n<script>\n" + jsCode + "\n</script>");

        var resultCode = $("#in-result").val();
        console.log(resultCode);

        $("#result").attr("srcdoc", resultCode);
    });

    $("#btn-html").trigger("click");
});