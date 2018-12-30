$(function(){
	activation()
	active()
	fenyeColor()
	totop()	
	others()
	tab()

		
			
		// tab切换
		function tab(){
			var allDiv = $('.cont>div')
			var list = $('.fenlei-ul>li')
			var addDemo = $('#demo>div')
			$('.fenlei-ul>li').click(function(){
				list.removeClass('now')
				$(this).addClass('now')
				allDiv.css('display','none')
				addDemo.css('display','none')
				var index = $(this).index()
				allDiv.eq(index).css('display','block')
				addDemo.eq(index).css('display','block')
				$('body,html').animate({
					scrollTop: 1480
				},300)
			})
		}

		function others(){
			addProduct("fushi-all","demo1", "./json/product.json")
			addProduct("fushi-nv","demo2", "./json/nvzhuang.json")
			addProduct("fushi-baby","demo3", "./json/baby.json")
			addProduct("fushi-toile","demo4", "./json/toile.json")
			addProduct("fushi-family","demo5", "./json/family.json")
			addProduct("fushi-shoes","demo6", "./json/shoes.json")
			addProduct("fushi-eat","demo7", "./json/eat.json")
			addProduct("fushi-car","demo8", "./json/car.json")
			addProduct("fushi-digtil","demo9", "./json/digtil.json")
			addProduct("fushi-man","demo10", "./json/man.json")
			addProduct("fushi-shirt","demo11", "./json/shirt.json")
		}


		// ajax产品信息请求
		function addProduct(id, demo, name){
			layui.use(['laypage', 'layer'], function(){
			  var laypage = layui.laypage
			  layer = layui.layer;		
			  //调用分页
			  $.ajax({
					url: name,
					data: 'get',
					dataType: 'json',
					async: false,
					success: function(result){
						var len = result.length
						laypage.render({
							elem: demo, //id
							count: len ,
							limit: 20,
							groups: 3,
							curr: location.hash.replace('#!fenye=', ''), //获取hash值为fenye的当前页
							hash: 'number',
							jump: function(obj){
									 $('#'+id).html(
										 function(){
											var arr = []
											var thisData = result.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);
										 
											layui.each(thisData, function(index, values){
												arr.push("<div class='fushi-pros'><a href='detail.html"+ '?'+ id +"?id="+ values['id'] +"' class='clicka' target='_blank'><img src="+ values['img']+" ></a> <div class='fushi-prob'> <div class='fushi-msgt'><i>￥</i><b>"+values['price']+"</b><sub>券后</sub><s>￥"+values['cost']+"</s><span><em class='fushi-eml'></em>券￥"+values['quan']+"<em class='fushi-emr'></em></span></div> <div class='fushi-msgb'><a href='#'>"+ values['title'] +"</a><i>s</i></div> </div></div>");
											});
											return arr.join('');	
																	
										 }()
									 ) 
									
									$('.layui-laypage>a').click(function(){
										$('body,html').animate({
											scrollTop: 1480
										},300)
									})
									
							}
							
						})
					}
			  
				})
			})
		}


	
	// 回顶部
	function totop (){
		var top = $('.to-top')
		top.click(function(){
			$('body,html').animate({
				scrollTop: 0
			},400)
		})
	}
	
	// 分页切换图标效果
	function fenyeColor (){
		var lis = $('.pagination > li:gt("0"):lt("6")')
		lis.click(function(){
			lis.removeClass('active')
			$(this).addClass('active')
		})
	}
	
	// 鼠标mousemove增加border
	function active(){
		var lis = $('.fushi-qieu > li:gt("0")')   //嵌套字符串注意引号问题
		lis.mousemove(function(){
			$(this).addClass('active')
		})
		lis.mouseleave(function(){
				$(this).removeClass('active')
		})	
	}
	// 激活bootstrap轮播图
	function activation (){
		$('.carousel').carousel({
			interval: 2000
		})
	}
	
	
})