$(function () {
	let ts = {
		init() {

			// 常量
			this.screenHeight = window.screen.height
			this.screenWidth = window.screen.width
			this.isFullScreen = false

			// 方法
			this.initBody()
			this.appendImgWrapper()
			this.appendImg(10)
			this.appendMsg()
			this.addEventListener()	
		},
		// 打乱数据顺序
		randomSort(length) {
			let arr = []
			for(let i=0;i<length;i++){
				arr.push(i)
			}
			arr.sort(()=>Math.random()-0.5)
			return arr
		},
		// 初始化body的宽高
		initBody() {
			// let height =  window.screen.height
			// let width = window.screen.width			
			$(document.body).height(this.screenHeight)
			$(document.body).width(this.screenWidth)
		},
		// 全屏
		fullScreen() {
			var el = document.documentElement,
			  rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
			  wscript;

			if (typeof rfs != "undefined" && rfs) {
			  rfs.call(el);
			  return;
			}

			if (typeof window.ActiveXObject != "undefined") {
			  wscript = new ActiveXObject("WScript.Shell");
			  if (wscript) {
			    wscript.SendKeys("{F11}");
			  }
			}
		},
		// 退出全屏
		exitFullScreen() {
			var el = document,
			    cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,
			    wscript;
			
			if (typeof cfs != "undefined" && cfs) {
			  cfs.call(el);
			  return;
			}
			
			if (typeof window.ActiveXObject != "undefined") {
			  wscript = new ActiveXObject("WScript.Shell");
			  if (wscript != null) {
			      wscript.SendKeys("{F11}");
			  }
			}
		},
		// 插入消息
		appendMsg() {
			let left = $('.content-right').width() + 30 
			let $msgList = $('.msg-list')
			let dom = 
			`
				<li class="msg" style="bottom:30px;left:${left}px">
					<img class="avatar" src="/img/avatar2.jpg" >
					<div class="detail">
						<h3 class="name">王小七</h3>
						<p class="msg-content">热烈庆祝香港回归20周年13213123</p>
					</div>
				</li>
			`	
			$msgList.prepend(dom)
		 	$msgList.children().each(function(index) {
				this.style.bottom  = (index * (this.offsetHeight + 12))+ 'px' 
			})
			$('.msg:eq(0)').css('left',2)
			// 清除隐藏的消息
			$('.msg:gt(10)').remove()
		},
		// 插入图片方格
		appendImgWrapper() {
			let $contentLeft = $('.content-left')
			let $imgsWrapper = $('.imgs-wrapper')
			let domH = Math.floor($contentLeft.height() / 9)
			let cols = Math.floor($contentLeft.width() / domH)
			let width = domH * cols 
			$('.imgs-wrapper').width(width)
			let sum = cols * 9
			let arr = this.randomSort(sum)
			for(let i=0;i<arr.length;i++){
				let dom = 
				`
					<div class="img-wrapper" id="${arr[i]}" style="height:${domH}px;width:${domH}px"></div>		
				`
				$imgsWrapper.append(dom)
			}
		},
		// 插入头像
		appendImg(i) {
			let num = $('.img-wrapper').length
			let index = i % num
			let $bigImg =  $('.bigImg')
			let $imgWrapper = $('.img-wrapper[id='+index+']')
			let img = 
				`
					<img src="/img/avatar.jpg">
				`
			// 小图的位置的和大小
			let height = $imgWrapper.height()
			let width = $imgWrapper.width()
			let left = $imgWrapper.position().left
			let top = $imgWrapper.position().top

			$bigImg.find('img').attr('src','/img/avatar.jpg')
			 $bigImg.fadeIn(1000)
				setTimeout(function () {
					 $bigImg.animate({
						width: width,
						height: height,
						left: left,
						top: top,
						marginTop: 0,
						marginLeft: 0,
						padding: 0
						},1000,function () {
						  $bigImg.hide().css({
						 		width: 300,
						 		height: 400,
						 		left: '50%',
						 		top: '50%',
						 		marginTop: -200,
						 		marginLeft: -150,
						 		padding: '30px 30px 130px 30px'
						 	})
						 	$imgWrapper.append(img)
			})
			},1500)
		},
		// 事件监听
		addEventListener() {
			// 切换全屏
			$('.icon-lambda_ic_fullscreen').on('click', () => {
				if(!this.isFullScreen){
					fullScreen()
					this.isFullScreen = !this.isFullScreen
				}
				else{
					exitFullScreen()
					this.isFullScreen = !this.isFullScreen
				}
			})

			// 切换签到墙和消息墙 
			let $contentLeft = $('.content-left')
			let $contentRight = $('.content-right')
			let $signWallState =  $('.signWallState')
			let $msgWallState = $('.msgWallState')
			let $signWallButton  = $('.signWallButton')
			let $msgWallButton  =  $('.msgWallButton')

			let lWidth = $contentLeft.width()
			let rWidth =  $contentRight.width()
			let padding = parseInt( $contentRight.css('paddingRight'))
			rWidth += padding
			let contentWidth  =  $('.content').width() 

			// =====================切换签到墙
			$('.signWallButton').on('click',function () {
				if( $signWallState.html() === '开'){
					$msgWallButton.css('pointer-events','none')
					$signWallState.html('关')
		 			$contentLeft.css('transform','translateX(-'+lWidth+'px)')
		 			$contentLeft.css('width',0)
					$contentRight.css('width',contentWidth)
				}
				else if( $signWallState.html() === '关'){
					$msgWallButton.css('pointer-events','auto')
					 $signWallState.html('开')
					$contentLeft.css('transform','translateX(0)')
					$contentLeft.css('width',lWidth)
					$contentRight.css('width',rWidth)
				}
			})

			// 切换消息墙
			$('.msgWallButton').on('click',function () {
				if($msgWallState.html() === '开'){
					$signWallButton.css('pointer-events','none')
					$msgWallState.html('关')
					$contentRight.css('width',0)
				}
				else if($msgWallState.html() === '关'){
					$signWallButton.css('pointer-events','auto')
					$msgWallState.html('开') 
					$contentRight.css('width',rWidth)
				}
			})
			// =====================切换消息墙和消息墙end
			

			// =====================切换二维码大小
			let $header = $('.header')
			let $code = $('.code')
			let $mask = $('.mask')
			let sWidth = $code.width()
			let bWidth = window.screen.height * 0.8
			let top = ($header.height() - $code.height())/2
			let left = parseInt($header.css('paddingRight'))
			let tDistance = window.screen.height * 0.1 - top
			let lDistance = window.screen.width *0.5 - left - bWidth / 2 
			$('.code').on('click',() =>{
				$code.css({
					width: bWidth,
					height: bWidth,
					transform: `translate(-${lDistance}px,${tDistance}px)`,
				})
				$mask.fadeIn(1000)
			})
			$('.mask').on('click',() =>{
				$code.css({
					width: sWidth,
					height: sWidth,
					transform: 'translate(0,0)'
				})
				$mask.fadeOut(1000)
			})
			// =====================切换二维码大小end
		},
	}
	ts.init()
})













