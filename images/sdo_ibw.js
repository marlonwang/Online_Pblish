function using(d,m){d=(d||"").split(/\s*\.\s*/g);var i=window,j,k;for(var l=0,n=d.length;l<n;l++){k=d[l];if(j){j+="."+k}else{j=k}if(!i[k]){i[k]={}}if(m!==true&&!i[k].$name){i[k].$name=j}i=i[k]}return i}(function(e){var f=0,d=(new Date()).getTime();e.startTime=d;e.FRAME_FIX_HTML='<iframe style="position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;" frameborder="0" allowTransparency="true"></iframe>';e.guid=function(a){return(a||"")+d+"_"+(++f)};e.type=function(a){var c=typeof(a);try{if(a&&a.constructor){c=(a.constructor.toString().toLowerCase().match(/^\s*function (\w+)\(/i))[1]}}catch(b){}if(c=="number"&&isNaN(c)){c="NaN"}return c};e.extend=function(b,h,a){for(var c in (h||{})){if(a||c!="$name"){b[c]=h[c]}}return b};e.apply=function(b,a,c){if(c){e.apply(b,c)}if(b&&a&&typeof a=="object"){for(var h in a){b[h]=a[h]}}return b};e.applyIf=function(b,a,c){if(b){for(var h in a){if((c||h!="$name")&&typeof b[h]==="undefined"){b[h]=a[h]}}}return b};e.implement=function(a,c,b){if(c){e[b?"extend":"applyIf"](a.prototype,c)}};e.override=function(c,a){if(a){var b=c.prototype;e.apply(b,a);if(e.is_trident&&a.hasOwnProperty("toString")){b.toString=a.toString}}};e.each=function(l,a,b){var c=e.type(l);switch(c){case"array":for(var i=0,k=l.length;i<k;i++){a.call(b,l[i],i,l)}break;case"object":for(var i in l){a.call(b,l[i],i,l)}break}};e.id=function(a){return typeof(a)=="string"?document.getElementById(a):(a||null)};e.time=function(){return(new Date()).getTime()};e.clear=function(a){clearTimeout(a);clearInterval(a);return null};e.empty=function(a){return a===""};e.Class=function(a){var b=function(){return this.initialize?this.initialize.apply(this,arguments):this};b.constructor=e.Class;b.prototype.constructor=b;e.override(b,a);return b};e.encode=function(b,c,a){c=c||"uri";switch(c){case"uri":default:return window["encodeURI"+(a?"":"Component")](b)}};e.decode=function(b,c,a){c=c||"uri";switch(c){case"uri":default:return window["decodeURI"+(a?"":"Component")](b)}};e.toString=function(){return"Author: \u5f71\u4e4b\u8ff7\u60d1\nQQ: 9537905\nMSN: zfkun@msn.com"}})(using("Ku6"));(function(o){o.Engine={name:"unknown",version:0};o.Platform={name:(window.orientation!=undefined)?"ipod":(navigator.platform.match(/mac|win|linux/i)||["other"])[0].toLowerCase()};o.Platform[o.Platform.name]=true;o.Features={xpath:!!(document.evaluate),air:!!(window.runtime),query:!!(document.querySelector)};o.Plugins={range:document.implementation.hasFeature("Range","2.0")};var m,l,k={presto:function(){return(!window.opera)?false:((arguments.callee.caller)?960:((document.getElementsByClassName)?950:925))},trident:function(){return(!window.ActiveXObject)?false:((window.XMLHttpRequest)?((document.querySelectorAll)?6:5):4)},webkit:function(){return(navigator.taintEnabled)?false:((o.Features.xpath)?((o.Features.query)?525:420):419)},gecko:function(){return(!document.getBoxObjectFor&&window.mozInnerScreenX==null)?false:((document.getElementsByClassName)?19:18)}};for(l in k){m=k[l]();if(m){o.Engine={name:l,version:m};Ku6["is_"+l]=o.Engine[l]=o.Engine[l+m]=true;break}}l=m=null;if(o.is_trident&&o.Engine.version<4){try{document.execCommand("BackgroundImageCache",false,true)}catch(n){}}o.Request=function(){try{return new XMLHttpRequest()}catch(a){try{return new ActiveXObject("MSXML2.XMLHTTP")}catch(a){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){}}}return};o.Features.xhr=!!(o.Request());Ku6.extend(o.Plugins,{Flash:(function(){var b;try{b=navigator.plugins["Shockwave Flash"].description}catch(a){try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(a){}}b=(b||"0 r0").match(/\d+/g);return{version:parseInt(b[0]||0+"."+b[1],10)||0,build:parseInt(b[2],10)||0}})()});o.POSITION_FIXED=o.Engine.trident&&o.Engine.version<=4;var r=navigator.userAgent;o.isMaxthon=(function(){var b;try{b=window.external.tab_count;return typeof(b)!="undefined"}catch(a){}return false})();o.isTT=(function(){if(o.isMaxthon||r.indexOf("Tencent")==-1){return false}try{window.external.ShowBrowserUI("ku6");return true}catch(a){}return false})();if(o.isTT){try{var e=window.external.getTTVerStr();if(e.indexOf("Tencent")>=0){o.TTVer=e;var q=o.TTVer.replace("Tencent Traveler ","").split(" ")[0].split(".");o.TTVerMaj=parseInt(q[0]+q[1])||0}}catch(n){}}o.getTTVer=function(){return o.TTVer?o.TTVer.replace("Tencent Traveler ",""):""};if(o.isMaxthon){try{o.MAXVer=window.external.max_version;var p=o.MAXVer.split(".");o.MAXVerMaj=parseInt(p[0]+p[1]+p[2])||0}catch(n){}}o.getMaxVer=function(){return o.MAXVer||""};o.isMatterExplorer=o.isMaxthon||o.isTT;if(Ku6.is_webkit){Ku6["is_"+(/chrome/i.test(r)&&/mozilla/i.test(r)?"chrome":"safari")]=true}if(o.isMatterExplorer&&(o.MAXVerMaj>254||o.TTVerMaj>44)){o.swfWmodeTrouble=true}})(using("Ku6.Browser"));(function(d){var c=Ku6.extend;d.write=function(b,a,g){a=encodeURIComponent(a);g=c({doc:document},g);if(g.domain){a+="; domain="+g.domain}if(g.path){a+="; path="+g.path}if(g.duration){var h=new Date();h.setTime(h.getTime()+g.duration*24*60*60*1000);a+="; expires="+h.toGMTString()}if(g.secure){a+="; secure"}g.doc.cookie=b+"="+a};d.read=function(b,f){f=c({doc:document},f);var a=f.doc.cookie.match("(?:^|;)\\s*"+b.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")+"=([^;]*)");return(a)?decodeURIComponent(a[1]):null};d.dispose=function(a,b){this.write(a,"",c(c({},b),{duration:-1}))}})(using("Ku6.Cookie"));(function(l){var r="addEventListener",p="attachEvent",m="removeEventListener",j="detachEvent",q="preventDefault",n="stopPropagation",k="cancelBubble",o="returnValue";l.adds=function(a,c){for(var b in c){l.add(a,b,c[b])}return this};l.add=function(c,a,b){if(c){c[r]?c[r](a,b,false):c[p]("on"+a,b)}return this};l.removes=function(a,c){for(var b in c){l.remove(a,b,c[b])}return this};l.remove=function(c,a,b){if(c){c[m]?c[m](a,b,false):c[j]("on"+a,b)}return this};l.stop=function(a){return this.stopPropagation(a).preventDefault(a)};l.stopPropagation=function(a){a=a||window.event;if(a){a[n]?a[n]():a[k]=true}return this};l.preventDefault=function(a){a=a||window.event;if(a){a[q]?a[q]():a[o]=false}return this}})(using("Ku6.Event"));(function(f){var g="http://",e="ku6.com",h={root:g+e,www:g+"www."+e,so:g+"so."+e,podcast:g+"v."+e,passport:g+"passport."+e,blog:g+"blog."+e,space:g+"zone."+e,hd:g+"hd."+e,jc:g+"www.juchang.com",juchang:g+"juchang.com",comment:g+"comment."+e,player:g+"player."+e,filmcomment:g+"filmcomment."+e,group:"http://group.ku6.com",wap:"http://wap.ku6.com",visitor:"http://visitor.ku6.com",user:g+"user."+e,imgCode:g+"check."+e+"/checkEncodeCodes",js:g+"js."+e,cdn:g+"static."+e,img:g+"img."+e,image:g+"image."+e};Ku6.each(h,function(a,b){f[b]=a;f["_"+b]=a.replace(/^http(s?):\/\//i,"")})})(using("Ku6.Urls"));(function(f){var e=Ku6.Urls,d=using("Ku6.RunTime");f.copyString=function(a,b,h){var c=h!==true;if(window.clipboardData){clipboardData.setData("text",a);if(c&&b){alert(b||"文字已经复制到您的剪贴板中\r\n您可以使用Ctrl+v快捷键粘贴到需要的地方")}}else{if(c){alert("当前浏览器无法自动复制到剪贴板，请使用Ctrl+c快捷键手动复制")}return false}return true};f.between=function(a,c,i){var b=a.indexOf(c);if(b==-1){return""}b+=c.length;var j=a.indexOf(i,b);if(j==-1){return""}return a.substr(b,j-b)};f.getLength=function(a,b){if(typeof a!="string"&&typeof a!="number"&&!a){return 0}a=""+a;return b?a.length:a.replace(/[^\x00-\xff]/gi,"..").length};f.cutString=function(a,k,l){var i=0,b=0;if(k>=f.getLength(a)){return a}var c="";while(i<k){c+=a.charAt(b);i+=f.getLength(a.charAt(b));b++}if(i>k){c=c.substr(0,c.length-1)}if(l){c+=l}return c};f.getTpl=function(c,b){var h=d.TPL_CACHES||(d.TPL_CACHES={});if(h[c]){return h[c]}else{var a=b||(document.documentElement||document.body).innerHTML;return h[c]=f.between(a,"<!--"+c,c+"-->")}};f.importJs=function(q,a){if(!q){return}var p,b,o=a||{};if(o&&o.singleton){var r=document.getElementsByTagName("script");for(var i=0,n=r.length;i<n;i++){if(r[i]&&r[i].src&&r[i].src==q){b=r[i];break}}r=null}if(!b){p=document.createElement("script");p.type="text/javascript";p.src=q;if(o.charset){p.charset=o.charset}if(o.id){p.id=o.id}if(o.name||o.id){p.name=o.name||o.id}document.getElementsByTagName("head")[0].appendChild(p)}if(o&&$type(o.onLoad)=="function"){if(b){o.onLoad(b)}else{var c=o.onLoad;if(Ku6.is_trident){p.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){c(this)}}}else{p.onload=function(){c(this)}}}}if(o.get){return b||p}b=null;p=null};f.importCss=function(b,c){var h,a=c||{};if(b){h=document.createElement("link");h.rel=a.rel||"stylesheet";h.media=a.media||"screen";h.type="text/css";h.href=b;if(a.charset){h.charset=a.charset}if(a.id){h.id=a.id}if(a.name||a.id){h.name=a.name||a.id}document.getElementsByTagName("head")[0].appendChild(h)}if(c&&c.get){return h}h=null};f.substitute=function(a,c,b){return a.replace(b||(/\\?\{([^{}]+)\}/g),function(i,j){if(i.charAt(0)=="\\"){return i.slice(1)}return(c[j]!=undefined)?c[j]:""})};f.capitalize=function(a){return a.replace(/\b[a-z]/g,function(b){return b.toUpperCase()})};f.getCoverUrl=function(b,a){var c=f.assureUrl(a||b);if(c){return c.replace("http://i.ku6.com","http://i2.ku6.com").replace("http://i6.ku6.com","http://i2.i6.ku6.com")}return e.img+"/common/defcover/default_mv.gif"};f.getPlayerUrl=function(b,a){return e.player+"/refer/"+b+"/v.swf"};f.getJCPlayerUrl=function(a,b){return e.player+"/jcrefer/"+a+"/"+b+"/v.swf"};f.getVideoUrl=function(a){return a?e.podcast+"/show/"+a+".html":null};f.getJCVideoUrl=function(a,b){return a?e.podcast+(b?"/film/show_"+a+"/"+b:"/film/index_"+a)+".html":null};f.getHDVideoUrl=function(a){return a?e.hd+"/show/"+a+".html":null};f.getPlaylistUrl=function(a,b){return a?e.podcast+(b?"/special/show_"+a+"/"+b:"/playlist/index_"+a)+".html":null};f.getPodcastUrl=function(a,b){a=parseInt(a);if(b){return e.podcast+(/^\//.test(b)?"":"/")+b}else{if(a==a&&a>9999){return e.podcast+"/u/"+a}}return null};f.getSpaceUrl=function(a,b){a=parseInt(a);if(b&&b.length>0){return"http://"+b+"."+e._space}else{if(a==a&&a>9999){return e.space+"/u/"+a}}return null};f.getSpaceHomeUrl=function(a){return a?"http://"+a+"."+e._space:e.space};f.bizPoiseServer=function(a){a=parseInt(a);return a==a?a%4:0};f.statPoiseServer=function(a){a=parseInt(a);return a==a?a%8:0};f.assureUrl=function(a){if(a){return"http://"+a.replace(/^http:\/\//,"")}return null};f.absoluteURI=function(h){h=h||"";if(/^http[s]?\:\/\//.test(h)){return h}var a=location,b=a.pathname;if(!(/^\//.test(h))){var c=b.lastIndexOf("/");h=(c<0?"":b.substr(0,c+1))+h}return a.protocol+"//"+a.host+h};f.redirect=function(i,a,b){if(!i){return}var j=location.href,c=f.absoluteURI(i);if(j==c&&!!a){location.reload()}else{if(!!b){location.replace(c)}else{location.href=c}}};f.getUser=function(a){var b=Ku6.User[f.capitalize(a)];return b?b.get():null}})(using("Ku6.Utils"));(function(h){var f=Ku6.Cookie,g=Ku6.Utils,j=Ku6.Urls;h.TYPE_PASSPORT="passport";h.TYPE_PODCAST="podcast";h.TYPE_SPACE="space";h.TYPE_JUCHANG="juchang";h.DEFAULT_COVER=j.img+"/common/defcover/{gender}_{size}.gif";var i={sp:";",_get:function(d,b){if(!d){return null}var c=d.split(this.sp),a=c.length;if(a==1){return c[0]}return c[Math.min(a-1,b)]}};Ku6.each("Big,0,big|Small,1,small|Middle,2,small".split("|",3),function(c,b){var a=c.split(",",3);if(a){i["get"+g.capitalize(a[0])]=function(e,d){return this._get(e,a[1])||g.substitute(h.DEFAULT_COVER,{gender:(["boy","girl","both"][d]||"both"),size:a[2]})}}});h[g.capitalize(h.TYPE_PASSPORT)]={getIcon:function(a){return{small:i.getSmall(a),middle:i.getMiddle(a),big:i.getBig(a)}},get:function(){var a=f.read("systemPPCLoginUser");if(!a){return null}var b=a.split("_--_");if(b.length!=5||isNaN(b[0])||parseInt(b[0])<=999){return null}var d=f.read("systemPPCLoginUserNickName"),e=f.read("systemPPCLoginUserHeadFace"),c=this.getIcon(e);return{id:parseInt(b[0]),uid:parseInt(b[0]),url:b[1],username:b[2],email:b[3],service:b[4],nick:(d==null?"":unescape(d.replace(/\\/ig,"%"))),icon:e,bigIcon:c.big,middleIcon:c.middle,smallIcon:c.small}},clean:function(){Ku6.each(["","NickName","Secure","HeadFace","Service"],function(a){f.dispose("systemPPCLoginUser"+a,{domain:j._root,path:"/"})});Ku6.each(["Name","Id","State","Secure","SaveLogin","Sex"],function(a){f.dispose("sysUser"+a,{domain:j._root,path:"/"})})},getHistory:function(){var a=f.read("systemPPCLoginedUserName");return a?unescape(a.replace(/\\/ig,"%")).split(";"):[]}};h[g.capitalize(h.TYPE_PODCAST)]={getIcon:function(a){return{small:i.getSmall(a),middle:i.getMiddle(a),big:i.getBig(a)}},get:function(){var a=f.read("podcast");if(!a){return null}var b=a.split("|");if(b.length<7||isNaN(b[0])||parseInt(b[0])<=999){return null}b[5]=unescape(b[5].replace(/\\/ig,"%"));var c=this.getIcon(b[6]);return{id:parseInt(b[0]),uid:parseInt(b[0]),status:parseInt(b[1]),email:b[2],username:b[3],url:b[4],nick:(b[5]==null?"":unescape(b[5].replace(/\\/ig,"%"))),icon:b[6],bigIcon:c.big,middleIcon:c.middle,smallIcon:c.small}},clean:function(){f.dispose("podcast",{domain:j._podcast,path:"/"})}};h[g.capitalize(h.TYPE_SPACE)]={getIcon:function(a){return{small:i.getSmall(a),middle:i.getMiddle(a),big:i.getBig(a)}},get:function(){var a=f.read("space");if(!a){return null}var b=a.split("|");if(b.length<8||isNaN(b[0])||parseInt(b[0])<=999){return null}b[3]=unescape(b[3].replace(/\\/ig,"%"));var c=this.getIcon(b[6]);return{id:parseInt(b[0]),uid:parseInt(b[0]),status:b[1],email:b[2],username:b[3],domain:b[4],nick:(b[5]==null?"":unescape(b[5].replace(/\\/ig,"%"))),icon:b[6],bigIcon:c.big,middleIcon:c.middle,smallIcon:c.small}},clean:function(){f.dispose("space",{domain:j._space,path:"/"})}};h[g.capitalize(h.TYPE_JUCHANG)]={getIcon:function(a){return{small:i.getSmall(a),middle:i.getMiddle(a),big:i.getBig(a)}},get:function(){var a=f.read("loginUser");if(!a){return null}var b=a.split("|");if(b.length!=4||isNaN(b[0])||parseInt(b[0])<=999){return null}var c=this.getIcon(decodeURIComponent(b[3]));return{id:parseInt(b[0]),uid:parseInt(b[0]),url:b[1]||null,nick:b[2]?decodeURIComponent(b[2].replace(/\\/ig,"%")):null,icon:b[3],bigIcon:c.big,middleIcon:c.middle,smallIcon:c.small}},clean:function(){f.dispose("loginUser",{domain:j._juchang,path:"/"})}}})(using("Ku6.User"));(function(b){b.getTimeSpan=function(u,m,d){u=parseInt(u);u=u==u?u:0;d=(d||60*1000)/1000;var t=60,h=Math.abs($time()-u),q=m||(Ku6.empty(m)?"":"刚刚");var a=Math.floor(h/(t*1000)),s=Math.floor(a/60),r=Math.floor(s/24),v=Math.floor(r/30),p=Math.floor(v/12);if(p){q=p+"年"}else{if(v){q=v+"月"}else{if(r){q=r+"天"}else{if(s>0&&s*t*60>=d){q=s+"小时"}else{if(a>0&&a*t>=d){q=a+"分钟"}else{return q}}}}}if(h>(d||t)*1000){q+="前"}return q};b.getFormatMVTime=function(g){var h=0,a=0,i=0,j=parseInt(g,0);i=j%60;a=Math.floor((j-i)/60);h=Math.ceil((j-a*60-i)/3600);return(h?(h<10?"0":"")+h+":":"")+(a<10?"0":"")+a+":"+(i<10?"0":"")+i};b.getMVTime=function(r,o,m,h,s,t){var n=0,q=0,a=0,p=parseInt(r,0),m=m||3;a=p%60;q=Math.floor((p-a)/60);n=Math.ceil((p-q*60-a)/3600);if(m<3&&(!n&&!q)){q=1}else{if(m<2&&!n){n=1}}return(n?(o&&n<10?"0":"")+n+(h||(Ku6.empty(h)?"":":")):"")+(m>1&&q?(o&&q<10?"0":"")+q+(s||(Ku6.empty(s)?"":":")):"")+(m>2&&a?(o&&a<10?"0":"")+a+(t||""):"")};b.getAge=function(a){return(new Date()).getFullYear()-(new Date(a)).getFullYear()}})(using("Ku6.Utils"));(function(b){b.videoTagToHTML=function(a){return(a||"").clean().split(" ").map(function(d){return'<a href="../出错页_files/'+Ku6.Urls.so+"/v/q"+encodeURIComponent(d)+'" title="'+d.escHtmlEp()+'" target="_blank">'+d.escHtml()+"</a>"}).join(" ")};b.tagToHTML=function(d,a){if(d&&d.length>0){return d.clean().split(" ").map(function(c){return'<a href="../出错页_files/'+(a::KU6_URLS.so+"/v/q{key}").replace("{key}",encodeURIComponent(c))+'" title="'+c.escHtmlEp()+'" target="_blank">'+c.escHtml()+"</a>"}).join(" ")}return""}})(using("Ku6.Utils"));(function(c){var d={unknown:{text:"未知",codes:",0,"},normal:{text:"正常",codes:",19,20,21,22,"},converting:{text:"转换中",codes:",1,"},auditing:{text:"审核中",codes:",10,11,12,13,"},covertFaild:{text:"转换失败",codes:",-10,"},removedBySelf:{text:"自己删除",codes:",-30,-31,-32,-33,"},removedBySystem:{text:"编辑删除",codes:",-20,-40,"}};c.VideoStatus={get:function(a){a=parseInt(a);a=a==a?a:0;var b={text:"未知"};Ku6.each(d,function(g,h){b[h]=g.codes.indexOf(","+a+",")>=0;if(b[h]){b.text=g.text}});return b}}})(using("Ku6.Utils"));(function(c){var d={normal:{text:"普通",code:",0,"},applying:{text:"申请推荐或加精中",code:",1,"},recommend:{text:"已推荐",code:",2,"},jinghua1:{text:"一级精华",code:",3,"},jinghua2:{text:"二级精华",code:",4,"},jinghua3:{text:"三级精华",code:",5,"},applyFail:{text:"申请推荐或加精失败",code:",-1,"}};c.VideoVouch={get:function(a){a=parseInt(a);a=a==a?a:0;var b={text:"未知"};Ku6.each(d,function(g,h){b[h]=g.codes.indexOf(","+a+",")>=0;if(b[h]){b.text=g.text}});return b}}})(using("Ku6.Utils"));var IbwHelper={appid:window.IBW_APPID||626,enable:!(Ku6.is_safari||Ku6.is_presto),autoSync:!!window.LOGON_AUTO_SYNC,onCheck:function(h){var f=App.Logon;if(IbwHelper.autoSync&&h){if(f.ready){f.sync(f.LOGON_TYPE_IN)}else{f.setAutoSync(true)}}else{if(h){var g=using("Ku6.User").Passport,e=g&&g.get();if(!e){if(f.ready){f.update(true)}else{f.setActiveUpdate(true)}}}}},onLogon:function(c){var d=App.Logon;if(d){d.sync(c)}if(window.ibw_public){ibw_public.updateLoginStatus()}},onBeforeInit:function(){},onAfterInit:function(){}};function ibwSpInit(){try{IbwHelper.onBeforeInit()}catch(b){}ibw.appid=IbwHelper.appid;ibw.horBarModeBeforeLogin=1;ibw.horBarStatusBeforeLogin=1,ibw.barMode=2;ibw.color="86";ibw.brightness="1.56";ibw.saturation="1.22";ibw.isLoadIBWDirectly=true;ibw.loginStatusNotifyFn=IbwHelper.onCheck;ibw.loginCompleteCallFn=IbwHelper.onLogon;try{IbwHelper.onAfterInit()}catch(b){}}(function(Q){var ah=Ku6,M=ah.Urls,ad=ah.Utils,N=Cookie;var L="logon",ae="sync",O="render",an="LOGON_TYPE_IN",Z="LOGON_TYPE_OUT",aj="logon",ac="sync",W="init",H="update",af="error",S="exception",I="wait",U="syncRD"+ah.startTime,aa=["sso","async","autoSync","referKey","redirectUrl","domainId","ssoHost","lc","dm","ibw","domains","activeUpdate"],ag={},V="/sso/sso.html?action={0}&callback={1}&lc={2}&dm={3}&ids={4}",P=M.passport+"/crossdomain.jsp?domainid={0}&action={1}&redirect={2}";$extend(Q,new Events);$each(aa,function(a){Q["set"+ad.capitalize(a)]=function(b){Q[a]=b;return this};Q["get"+ad.capitalize(a)]=function(){return Q[a]}});Q.setDomains([2,3,4]).setReferKey("www").setSso(true).setAsync(true);Q[an]="login";Q[Z]="logout";ag[Q[an]]="http://www.sdo.com/LoginPT.asp?domain=ku6.com&service={service}";ag[Q[Z]]="https://cas.sdo.com/cas/logout?url={service}";var ai="https://cas.sdo.com/cas/login?gateway=true&service={service}";var K="http://www.sdo.com/LoginFrame.asp?appDomain={domain}&CSSURL={css}&returnURL={service}";function Y(a){return(a==Q[an]||a==Q[Z])}function X(d,c,b){var a;if(c){a=c}else{$each($splat(Q.getDomains()),function(f,e){a=P.substitute({0:f,1:d,2:ah.encode(e>0?a:location.href)})})}if(a){N.write(b||U,a,{path:"/sso",domain:"."+(Q.getDomainId()==2?M._jc:M._root)})}}function ak(c,b,a){return(Q.getDomainId()==2?M.jc:M.space)+"/sso/logon.jsp?action={0}&iframe={1}&key={2}".substitute({0:c,1:b?1:0,2:a||U})}function am(b,a){var c=ak(b,a);if(Q.getIbw()){return ai.substitute({service:ah.encode(c)})}else{if(c){return ag[b].substitute({service:ah.encode(c)})}}return null}Q.login=function(a){if(a){new Event(a).preventDefault()}var b=Q[an];if(Q.getIbw()){if(window.ibw&&ibw.getDataComplete==1&&window.ibw_public){if(ibw.userIsLogin){if(Q.iUser()){Q.update()}else{Q.sync(b)}}else{if(ibw_public){ibw_public.openLoginWindow()}}}else{Q.fireEvent(I)}}else{X(b);ad.redirect(am(b))}};Q.logout=function(a){if(a){new Event(a).preventDefault()}var b=Q[Z];if(Q.getIbw()){if(window.ibw&&ibw.getDataComplete==1&&window.ibw_public){if(ibw.userIsLogin){ibw_public.openLogoutWindow()}else{if(Q.iUser()){Q.sync(b)}else{Q.update()}}}else{Q.fireEvent(I)}}else{X(b);ad.redirect(am(b))}};function al(){var a=Q.getRedirectUrl();if(a&&a!=""){ad.redirect(a)}}function T(d,a,b){if(!Q.getAsync()){var c;$each($splat(Q.getDomains()),function(e){c=Q.synced.hasOwnProperty(e)});if(!c){return}}Q.update();if(a){Q.fireEvent(aj,[d,b]);al()}else{Q.fireEvent(af,[L,d,b])}}var R={};R[Q[an]]="onLoginSync";R[Q[Z]]="onLogoutSync";function ab(c,a,b){if(Q.getSso()&&!Q.getAsync()){if(Q.synced){Q.synced={}}Q.synced[b]=a}T(c,a,b);if(a){Q.fireEvent(ac,[c,b])}else{Q.fireEvent(af,[ae,c,a,b])}}$each(R,function(a,b){Q[a]=function(c,d){ab(b,c,d)}});function J(d){var b=R[d];if(!b){return Q.fireEvent(S,[ae,d])}var c;Q.synced=null;if(Q.getSso()){c=(Q.getSsoHost()||(window.opera?"http://"+location.hostname:(Q.getDomainId()==2?M.jc:M.space)))+V.substitute({0:d,1:Q.$name+"."+b,3:(Q.getDm()||""),2:(Q.getLc()||""),4:((Q.getDomains()).join(",")||"")});c+=(c.indexOf("?")<0?"?":"&")+"from="+Ku6.encode(location.href)+"&"+ah.time();if(!Q.getAsync()){Q.synced={}}}X(d,c);c=am(d,true);var a="ku6_sso_frame",e=$(a,true);try{if(!e){e=new Element("iframe",{id:a,name:a,styles:{width:0,height:0,position:"absolute",zIndex:-1,visibility:"hidden"}}).inject(document.body)}e.set("src",c)}catch(f){Q.fireEvent(S,[ae,d,f])}finally{e=null}}Q.sync=function(a){if(Y(a)){J(a)}else{Q.fireEvent(S,[ae,a,"access deny"])}};Q.update=function(b){var d=Q.options||{},e;try{e=Q.iUser()}catch(c){}if(d.panel){try{Q.iRenderPanel(e,b)}catch(c){Q.fireEvent(S,[O,"panel",c])}}if(d.frame){try{var a="syncRDC"+ah.startTime;Q.iRenderFrame(e,M._root,ah.encode(M.img+"/sdo/css/IframeLogin.css"),ak(Q[an],true,a),a);X(Q[an],null,a)}catch(c){Q.fireEvent(S,[O,"frame",c])}}Q.fireEvent(H,[e,b]);return this};Q.init=function(a){Q.ready=true;Q.options=$extend({},a);Q.fireEvent(W,[Q.options]);if(Q.getAutoSync()&&!Q.iUser()){Q.sync(Q[an])}else{Q.update(!!Q.getActiveUpdate())}Q.init=null;delete Q.init};Q.iRenderPanel=function(c,a){var b=Q.options,d=$(b.panel,true);if(d){$(d).set("html",c?ad.getTpl("LG.INFO").substitute({nickTitle:c.nick.escHtmlEp(),nick:c.nick,ico:c.smallIcon,middleIco:c.middleIcon,bigIco:c.bigIcon,podcast:ad.getPodcastUrl(c.id,c.url),space:ad.getSpaceUrl(c.id,c.url),spaceHome:ad.getSpaceHomeUrl(c.url)}):(a?ad.getTpl("LG.AUTOBUTTON"):ad.getTpl("LG.BUTTON")))}return this};Q.iRenderFrame=function(d,e,i,a,c){var g=Q.options,h=$(g.frame,true);if(h){($(h)[d?"hide":"show"])();if(!d){var b=g.frameId||"sdo_sso_frame",f=$(b,true);if(!f){f=new Element("iframe",{id:b,name:b,frameBorder:0,scrolling:"no",styles:{width:g.frameWidth||"100%",height:g.frameHeight||90}}).inject(h)}f.set("src",K.substitute({domain:e,css:i,service:a}))}}return this};Q.iUser=function(){var a=ah.User?ah.User.Passport:null;return a?a.get():null};Ku6.Logon=Q})(using("App.Logon"));