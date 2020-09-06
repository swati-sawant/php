let url=new URL(location.href).href+"Controller/Request_handler.php?req_type=";
            $(document).ready(function(){
                getProductName();
                $("#menu_item_dpdo").change(function(){
                    getProductDetails($("#menu_item_dpdo").val());
                });
            });
            function getProductName(){
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',function(){
                $.get(url+"prname",function(data,status){
                    if(status.localeCompare("success")==0)
                    {
                        for (const key in data) {
                            if (data.hasOwnProperty(key)) {
                                $("#menu_item_dpdo").append("<option value='"+data[key].Id+"'>"+data[key].Name+"</option>");
                                $("#menu_item_dpdo").formSelect();
                            }
                        }
                    }
                });
            });
            }
            function getProductDetails(product_id){
                $.get(url+"prdetails&id="+product_id,function(data,status){
                    if(status.localeCompare("success")==0)
                    {
                        $("#ch").empty();
                        $("#ch").append("<h4>Description:</h5><table><tbody><tr><td><b>Short Name:</b></td><td>"+data.short_name+"</td></tr><tr><td><b>Name:</b></td><td>"+data.name+"</td></tr><tr><td><b>Description:</b></td><td>"+data.description+"</td></tr><tr><td><b>Price:</b></td><td><u><strong>Small:</strong></u>&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-size:14px; font-weight:bold;margin-right:4px;'>&#8377;</span>"+data.price_small+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><strong>Large:</strong></u>&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-size:14px; font-weight:bold;margin-right:4px;'>&#8377;</span>"+data.price_large+"</td></tr></tbody></table>");

                    }
                });
            }