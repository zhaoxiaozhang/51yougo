var url = window.location.href
console.log(url)
var count = url.split('=')
var reg = /\?[A-z-]+\?/
var lis = reg.exec(url)[0]
var id = count[1]

show()
	function show(){
		if(lis == "?fushi-all?"){
			add('../json/product.json')
		}else if(lis == "?fushi-nv?" ){
			add('../json/nvzhuang.json')
		}else if(lis == "?fushi-baby?" ){
			add('../json/baby.json')
		}else if(lis == "?fushi-toile?"){
			add('../json/toile.json')
		}else if(lis == "?fushi-family?"){
			add('../json/family.json')
		}else if(lis == "?fushi-shoes?"){
			add('../json/shoes.json')
		}else if(lis == "?fushi-eat?"){
			add('../json/eat.json')
		}else if(lis == "?fushi-car?"){
				add('../json/car.json')
		}else if(lis == "?fushi-digtil?"){
			add('../json/digtil.json')
		}else if(lis == "?fushi-man?"){
			add('../json/man.json')
		}else if(lis == "?fushi-shirt?"){
			add('../json/shitt.json')
		}
		
	}

	function add(test){
		$.ajax({
			type: 'get',
			url: test,
			dataType: 'json',
			success: function(res){
				
				$.each( res, function(index, values){
					var html = ''
					if(values['id'] == id){
						console.log(values)
						html =  "<div class=''detail-l-l'>" +
										"<a href='#'>" + "<img src='" + values['img'] + "'>" + "</a>" + "</div>" +
										"<div class='detail-l-r'>" + "<div>" + "<em></em>" + "<h3>"+ values['title'] +"</h3>" +
										"<p>推荐理由：耐克同款原版几千块！潮流撞色，帅气侧漏，穿上没有任何负重感，一步一步轻盈得飞起，运动不累，防磨脚海绵设计，穿着好看，时尚百搭。【赠运费险】</p>" +
										"</div>" + "<div>" + "<b>(独享)</b>" + "<span>券后价</span>" + "<b>￥</b>" + "<span>"+ values['price'] +"</span>" +
										"<span>在售价格&nbsp;&nbsp;￥</span>" + "<span>"+ values['cost'] +"</span>" + "</div>" + "<div>" + 
										"<span>已领券</span>" + "<b>7711</b>" + "<span>张，手慢无</span>" + "<span>|</span>" + "<span>已有</span>" +
										"<b>447</b>" + "<span>人购买</span>" +"</div>" + "<div>" + "<div>" + "<span>优惠券</span>" + "<p>￥"+ values['quan'] +"</p>" +
										"</div>" + "<a href='http://www.taobao.com'>领券购买</a>" + "</div>" + "<div>" + "<span>如果您喜欢此宝贝，记得分享给您的朋友，一起享优惠:</span>" +
										"<div class='bshare-custom'><a title='分享到' href='http://www.bShare.cn/' id='bshare-shareto' class='bshare-more'></a>" +
										"<a title='分享到微信' class='bshare-weixin'></a>" +
										"<a title='分享到QQ好友' class='bshare-qqim'></a><a title='分享到新浪微博' class='bshare-sinaminiblog'></a><a title='分享到QQ空间' class='bshare-qzone'></a>" +
										"<a title='更多平台' class='bshare-more bshare-more-icon more-style-addthis'></a><span class='BSHARE_COUNT bshare-share-count'>0</span></div>" +
										"</div></div>"
					var center = $('.detail-l-center')
					center.html(html)
					}
					
				})
			}
		})
	}