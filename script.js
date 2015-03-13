/**
 * Created by z9764 on 2015/3/13.
 */

function xxajax_process(data){
    jQuery('#xxdirectrt').html(data.hdata);
    xxright_resize();
}

function xxajax_get(){

    var pageid= jQuery("#xxpageid").val();
    var mdata=new Object();
    mdata['pageid']="en:"+pageid;
    mdata['call']="fftest";
    var url = DOKU_BASE + 'lib/exe/ajax.php';
    if(jQuery("#xxckpage").prop("checked")==true){
        mdata['target']="page";
        jQuery.ajax({url:url,data:mdata,success:xxajax_process,dataType:"jsonp",crossDomain:true});
    }else if(jQuery("#xxcktoc").prop("checked")==true){
        mdata['target']="toc";
        jQuery.ajax({url:url,data:mdata,success:xxajax_process,dataType:"jsonp",crossDomain:true});
    }
    if(jQuery("#xxckvoice").prop("checked")==true){
        voice_mx(pageid);
    }
//    jQuery.post("http://w.ct.com/lib/exe/ajax.php",mdata,ajax_process,"json");
//    jQuery.ajax(url:"http://w.ct.com/lib/exe/ajax.php",type:"get",dataType:"jsonp",data:mdata,success:ajax_process )

}


function xxright_resize(){
    var top_width = jQuery("#dokuwiki__header").width();
    var win_width =jQuery(window).width();

    if(win_width<1200){
        jQuery(".desktop .xxtest").attr("display","none");
        return;
    }else{
        jQuery(".desktop .xxtest").attr("display","block");
    }

    var bar_width = (win_width-top_width)/2 - 35;

    jQuery(".desktop .xxtest").width(bar_width);
//    jQuery(".desktop .xxtest").maxWidth(bar_width);
}

function xxinit_ff(){

    jQuery("#xxsearch").click(xxajax_get);
    jQuery(window).resize(xxright_resize);
}

jQuery(xxinit_ff);