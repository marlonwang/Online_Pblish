Element.implement({toggle:function(){return this[this.offsetWidth>0?"hide":"show"]()}});String.implement({htmlToText:function(){return this.replace(/<br\s*\/?>/ig,"\r\n").replace(/\?/g," ").replace(/</g,"<").replace(/>/g,">").replace(/\&/g,"&")},escHtml:function(a){return(a===true?this.replace(/<br\s*\/?>/gi,"\n"):this).replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g,function(b){return"&#"+b.charCodeAt(0)+";"}).replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/\r/g,"<br/>").replace(/ /g,"?")},escHtmlEp:function(){return this.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g,function(a){return"&#"+a.charCodeAt(0)+";"})},fixTo:function(a){a=Math.max((a||2)-this.length+1,0);return new Array(a).join("0")+this}});Number.implement({fixTo:function(a){return(this+"").fixTo(a)}});Date.implement({format:function(e){var i=this.getFullYear(),g=this.getMonth()+1,f=this.getDate(),c=this.getHours(),a=this.getMinutes(),b=this.getSeconds();return(e||"yyyy-MM-dd").replace(/yyyy/gi,i).replace(/yy/gi,i).replace(/MM/g,g.fixTo()).replace(/M/g,g).replace(/dd/gi,f.fixTo()).replace(/d/gi,f).replace(/hh/gi,c.fixTo()).replace(/h/gi,c).replace(/mm/g,a.fixTo()).replace(/m/g,a).replace(/ss/gi,b.fixTo()).replace(/s/gi,b)}});Browser.Features.range=document.implementation.hasFeature("Range","2.0");(function(a){var b={root:"http://ku6.com",www:"http://www.ku6.com",so:"http://so.ku6.com",podcast:"http://v.ku6.com",passport:"http://zone.ku6.com",blog:"http://blog.ku6.com",space:"http://zone.ku6.com",imgCode:"http://check.ku6.com/checkEncodeCodes",js:"http://js.ku6.com",cdn:"http://static.ku6.com",img:"http://img.ku6.com",image:"http://image.ku6.com"};Hash.each(b,function(d,c){a[c]=d;a["_"+c]=d.replace(/^http(s?):\/\//i,"")})})(using("Ku6.Urls"));(function(a){a.Action={comment:"/comment.htm?t=entryComments",leaveword:"/leaveword.htm?t=leavewords",entryTags:"/tag/tag.htm?t=tagList",userPanel:"/user.htm?t=infoindex"}})(using("Ku6.Library"));(function(e){var d=Ku6.Urls;var f=Ku6.Urls.img+"/common/defcover/{gender}_{size}.gif";var a=function(i){return["boy","girl","both"][i]||"both"};var c={sp:";",_get:function(j,l){if(!j){return null}var k=j.split(this.sp),m=k.length;if(m==1){return k[0]}return k[Math.min(m-1,l)]},getBig:function(i,j){return this._get(i,0)||f.substitute({gender:a(j),size:"big"})},getSmall:function(i,j){return this._get(i,1)||f.substitute({gender:a(j),size:"small"})},getMiddle:function(i,j){return this._get(i,2)||f.substitute({gender:a(j),size:"small"})}};var g=$merge(c,{});var h=$merge(c,{});var b=$merge(c,{});e.Passport={getIcon:function(k,i){var j=g;return{small:j.getSmall(k,i),middle:j.getMiddle(k,i),big:j.getBig(k,i)}},get:function(){var n=Cookie.read("systemPPCLoginUser");if(!n){return null}var l=n.split("_--_");if(l.length!=5||isNaN(l[0])||parseInt(l[0])<=999){return null}var j=Cookie.read("systemPPCLoginUserNickName");var i=Cookie.read("systemPPCLoginUserHeadFace"),k=this.getIcon(i);var m=["女","男"][Cookie.read("sysUserSex")]||"保密";return{id:parseInt(l[0]),uid:parseInt(l[0]),sex:m,url:l[1].toLowerCase(),username:l[2],email:l[3],service:l[4],nick:(j==null?"":unescape(j.replace(/\\/ig,"%"))),icon:i,bigIcon:k.big,middleIcon:k.middle,smallIcon:k.small}},clean:function(){["","NickName","Secure","HeadFace","Service"].each(function(i){Cookie.dispose("systemPPCLoginUser"+i,{domain:d._root,path:"/"})});["Name","Id","State","Secure","SaveLogin","Sex"].each(function(i){Cookie.dispose("sysUser"+i,{domain:d._root,path:"/"})})},getHistory:function(){var i=Cookie.read("systemPPCLoginedUserName");return i?unescape(i.replace(/\\/ig,"%")).split(";"):[]}};e.Podcast={getIcon:function(k,i){var j=h;return{small:j.getSmall(k,i),middle:j.getMiddle(k,i),big:j.getBig(k,i)}},get:function(){var k=Cookie.read("podcast");if(!k){return null}var j=k.split("|");if(j.length<7||isNaN(j[0])||parseInt(j[0])<=999){return null}j[5]=unescape(j[5].replace(/\\/ig,"%"));var i=this.getIcon(j[6]);return{id:parseInt(j[0]),uid:parseInt(j[0]),status:parseInt(j[1]),email:j[2],username:j[3],url:j[4].toLowerCase(),nick:(j[5]==null?"":unescape(j[5].replace(/\\/ig,"%"))),icon:j[6],bigIcon:i.big,middleIcon:i.middle,smallIcon:i.small}},clean:function(){Cookie.dispose("podcast",{domain:d._podcast,path:"/"})}};e.Space={getIcon:function(k,i){var j=b;return{small:j.getSmall(k,i),middle:j.getMiddle(k,i),big:j.getBig(k,i)}},get:function(){var k=Cookie.read("space");if(!k){return null}var j=k.split("|");if(j.length<8||isNaN(j[0])||parseInt(j[0])<=999){return null}j[3]=unescape(j[3].replace(/\\/ig,"%"));var i=this.getIcon(j[6]);return{id:parseInt(j[0]),uid:parseInt(j[0]),status:parseInt(j[1]),email:j[2],username:j[3],domain:j[4].toLowerCase(),url:j[4].toLowerCase(),nick:(j[5]==null?"":unescape(j[5].replace(/\\/ig,"%"))),icon:j[6],bigIcon:i.big,middleIcon:i.middle,smallIcon:i.small}},clean:function(){Cookie.dispose("space",{domain:d._space,path:"/"})}}})(using("Ku6.User"));(function(b){var a=Ku6.Urls;b.Detecter={isURL:function(c){return(/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/).test($pick(c,"").trim())},isEmail:function(c){return(/^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/).test($pick(c,"").trim())}};b.assureUrl=function(c){if(c){return"http://"+c.replace(/^http:\/\//,"")}return null};b.getCoverUrl=function(d,e){var c=b.assureUrl(e||d);if(c){return c.replace("http://i.ku6.com","http://i2.ku6.com").replace("http://i6.ku6.com","http://i2.i6.ku6.com")}return a.img+"/common/defcover/default_mv.gif"};b.getVideoUrl=function(c){return c?a.podcast+"/show/"+c+".html":""};b.getPlaylistUrl=function(d,c){return d?a.podcast+(c?"/special/show_"+d+"/"+c:"/playlist/index_"+d)+".html":null};b.getPodcastUrl=function(d,c){var e=a.podcast;d=parseInt(d);if(c){return e+(c.test("^/")?"":"/")+c}else{if(d==d&&d>9999){return e+"/u/"+d}}return null};b.getSpaceUrl=function(d,c){d=parseInt(d);if(c&&c.length>0){return"http://"+c+"."+Ku6.Urls._space}else{if(d==d&&d>9999){return"http://"+Ku6.Urls._space}}return null};b.getLength=function(d,c){if(typeof d!="string"&&typeof d!="number"&&!d){return 0}d=""+d;return c?d.length:d.replace(/[^\x00-\xff]/gi,"..").length};b.cutString=function(h,d,c){var e=0,g=0;if(d>=b.getLength(h)){return h}var f="";while(e<d){f+=h.charAt(g);e+=b.getLength(h.charAt(g));g++}if(e>d){f=f.substr(0,f.length-1)}if(c){f+=c}return f};b.getTimeSpan=function(e){e=parseInt(e);e=e==e?e:0;var c=new Date().getTime(),l=Math.abs(c-e),j="刚刚";var n=Math.floor(l/(60*1000)),g=Math.floor(n/60),i=Math.floor(g/24),f=Math.floor(i/30),k=Math.floor(f/12);if(k){j=k+"年"}else{if(f){j=f+"月"}else{if(i){j=i+"天"}else{if(g>0){j=g+"小时"}else{if(n>0){j=n+"分钟"}}}}}if(l>60*1000){j+="前"}return j};b.getAge=function(c){return(new Date()).getFullYear()-(new Date(c)).getFullYear()};b.tagToHTML=function(d,c){if(d&&d.length>0){return d.clean().split(" ").map(function(e){return'<a href="../出错页_files/'+(c::a.space)+"/tag/"+encodeURIComponent(e)+'.html" title="'+e.escHtmlEp()+'" target="_blank">'+e.escHtml()+"</a>"}).join(" ")}return""};b.addFavorite=function(f,d){var e=f||"酷6空间",c=d||window.location.href;if(document.all&&!window.opera){window.external.addFavorite(c,e)}else{if(window.sidebar){window.sidebar.addPanel(e,c,"")}else{alert("请使用Ctrl+D将本页加入收藏夹")}}};b.setHome=function(f,d){try{f.style.behavior="url(#default#homepage)";f.setHomePage(d)}catch(g){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(g){alert("抱歉！您的浏览器不支持直接设为首页。\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为“true”，点击“加入收藏”后忽略安全提示，即可设置成功。")}try{var c=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);c.setCharPref("browser.startup.homepage",d)}catch(g){}}}};b.getFormatMVTime=function(g){var f=0,c=0,e=0,d=parseInt(g,10);e=d%60;c=Math.floor((d-e)/60);f=Math.ceil((d-c*60-e)/3600);return(f?(f<10?"0":"")+f+":":"")+(c<10?"0":"")+c+":"+(e<10?"0":"")+e}})(using("Ku6.Utils"));(function(a){a.bizPoiseServer=function(d){d=parseInt(d);return"http://stat"+(d==d?d%4:0)+".888.ku6.com"};a.statPoiseServer=function(d){d=parseInt(d);return"http://v"+(d==d?d%4:0)+".stat.ku6.com"};var c="http://stat0.zone.ku6.com";var b=function(d){return"&dm="+(d&&document.domain!=Ku6.Urls._space?(d+"."):"")+Ku6.Urls._space};a.getEntryStat=function(d,g,e,f){return c+"/dostatb.do?method=getBlogPlayCount&v="+d.join("|")+"&n="+g+"&cp="+(f||0)+"&rd="+$time()+b(e)};a.setEntryStat=function(e,d,h,f,g){return c+"/dostatb.do?method=setBlogPlayCount&v="+e+"&o="+d+"&n="+h+"&cp="+(g||0)+"&rd="+$time()+b(f)};a.getUserStat=function(d,g,e,f){return c+"/dostatu.do?method=getUserPlayCount&&cp="+(f||0)+"&oid="+d+"&n="+g+"&rd="+$time()+b(e)};a.getUserIncome=function(d,g,e,f){return a.bizPoiseServer(d)+"/fetch.do?m=getUserInfo&type=blog&uid="+d+"&funcname="+g+"&cp="+(f||0)+"&rd="+$time()+b(e)};a.getVideoIncome=function(d,e,h,f,g){return a.bizPoiseServer(e)+"/fetch.do?m=getUserInfo&type=video&vid="+d+"&uid="+e+"&funcname="+h+"&cp="+(g||0)+"&rd="+$time()+b(f)};a.getVideoStat=function(d,e,h,f,g){return a.statPoiseServer(d)+"/dostatv.do?method=getVideoPlayCount&v="+$splat(e).join("|")+"&n="+h+"&cp="+(g||0)+"&rd="+$time()+b(f)};a.setVideoStat=function(e,g,d,i,f,h){return a.statPoiseServer(e)+"/dostatv.do?method=setVideoPlayCount&o="+e+"&c="+g+"&v="+d+"&n="+i+"&cp="+(h||0)+"&rd="+$time()+b(f)};a.getPlaylistStat=function(d,e,h,f,g){return a.statPoiseServer(d)+"/dostatc.do?method=getCardPlayCount&vc="+$splat(e).join("|")+"&n="+h+"&cp="+(g||0)+"&rd="+$time()+b(f)};a.setPlaylistStat=function(d,f,i,h,e,g){return a.statPoiseServer(d)+"/dostatc.do?method=setCardPlayCount&o="+d+"&c="+f+"&vc="+i+"&n="+h+"&cp="+(g||0)+"&rd="+$time()+b(e)};a.getHotVideoStat=function(e,d,h,f,g){return Ku6.Utils.statPoiseServer(e)+"/dostatv.do?method=getUserVideoTop&uid="+e+"&Num="+d+"&n="+h+"&cp="+(g||0)+"&rd="+$time()+b(f)};a.getIncome=function(g,f,d){var e=a.bizPoiseServer(f)+"/fetch.do?m=getUserInfo&funcname="+g+"&type="+(d?"video":"blog")+"&uid="+f;Asset.javascript(e)}})(using("Ku6.Utils"));(function(d){var b=function(e){e=parseInt(e);return e==e?e:0};var a={unknown:{text:"未知",codes:[0]},normal:{text:"正常",codes:[19,20,21,22]},converting:{text:"转换中",codes:[1]},auditing:{text:"审核中",codes:[10,11,12,13]},covertFaild:{text:"转换失败",codes:[-10]},removedBySelf:{text:"自己删除",codes:[-30,-31,-32,-33]},removedBySystem:{text:"编辑删除",codes:[-20,-40]}};d.VideoStatus={get:function(f){f=b(f);var e={text:"未知"};Hash.each(a,function(h,g){e[g]=h.codes.contains(f);if(e[g]){e.text=h.text}});return e}};var c={normal:{text:"普通",code:0},applying:{text:"申请推荐或加精中",code:1},recommend:{text:"已推荐",code:2},jinghua1:{text:"一级精华",code:3},jinghua2:{text:"二级精华",code:4},jinghua3:{text:"三级精华",code:5},applyFail:{text:"申请推荐或加精失败",code:-1}};d.VideoVouch={get:function(f){f=b(f);var e={text:"未知"};Hash.each(c,function(h,g){e[g]=h.code==f;if(e[g]){e.text=h.text}});return e}}})(using("Ku6.Utils"));(function(c){c.joinGroup=function(g,f,i,h){if(g&&f>0){Ku6.Api.Group.join({data:{gid:g},events:{onSuccess:function(j){App.Alert({title:"信息提示",content:j||"加入成功",doClose:function(){if(top.location.hash.length>1){top.location.reload()}else{top.location.reload()}}})},onFailure:function(j){App.Alert({title:"信息提示",content:j||"加入失败"})}}})}else{App.Confirm({title:"信息确认",content:"您还没有登录酷6通行证. 请先登录, 然后再加入群组。<br />确认现在登录？(确认之后自动转到登录页面)",doOk:function(){url="http://zone.ku6.com/?jumpUrl=http%3A%2F%2F"+i+"."+h;top.location.href=url;target="_blank";return false}})}};var a=Ku6.User.Space;var d=function(h,i){var g={id:i},f=$(h.parentNode.parentNode).getElement("p.pic a");g.icon=f.getFirst().src;g.nick=f.get("title");return g};if(!c.addFrend){function e(g,f){Ku6.Api.Friend.friendAdd({data:{uid:f.id,message:g},events:{onRequest:function(){App.onProcess({title:"加为好友"})},onFailure:function(h){App.onError({title:"加为好友",content:h||"添加失败",doOk:function(){e(g)}})},onSuccess:function(){var i=f,h=[];h.push('<div class="user"><em><img class="icon_small" src="../出错页_files/'+i.icon+'" /></em><em class="name">'+i.nick+"</em></div>");h.push('<div class="info"><em>好友请求已经发送！</em><em>请耐心等待“'+i.nick+"”的确认后，你们即可成为好友。</em></div>");App.onSuccess({title:"加为好友",content:h.join(""),closeDelay:10000})}}})}c.addFriend=function(h,j,i){var g=[],f=i||d(h,j);g.push('<div class="user"><em><img class="icon_small" src="../出错页_files/'+f.icon+'" /></em><em class="name">'+f.nick+"</em></div>");g.push('<div class="info"><em>需通过“'+f.nick+'”的验证才能将其加为好友。</em><em><b>附加信息：</b></em><em><textarea name="content"></textarea></em></div>');App.Confirm({title:"加为好友",width:350,height:187,content:g.join(""),doOk:function(k){var l=k.contenter.getElement("textarea[name=content]").value;if(l.length==0){App.onError({title:"加为好友",content:"请填写附加信息",buttons:{ok:{text:"返回"}},doOk:function(){c.addFriend(h,j,f)}})}else{e(l,f);return true}}})}}if(!c.sendMessage){function b(f){Ku6.Api.Message.add({data:{uid:f.id,title:f.subject||"",content:f.content||""},events:{onRequest:function(){App.onProcess({title:"发送消息"})},onFailure:function(g){App.onError({title:"发送消息",content:g||"发送失败",doOk:function(){b(f)}})},onSuccess:function(){App.onSuccess({title:"发送消息",closeDelay:1500,content:"消息发送成功！"})}}})}c.sendMessage=function(h,j,i){var g=i||d(h,j),f=[];f.push('<div class="user"><em><img class="icon_small" src="../出错页_files/'+a.getIcon(g.icon).small+'" /></em><em class="name">'+g.nick+"</em></div>");f.push('<div class="info">');f.push('<dl class="clearfix"><dt>主题：</dt><dd><input name="subject" type="text" value="'+(i?i.subject||"":"")+'" /></dd></dl>');f.push('<dl class="clearfix"><dt>内容：</dt><dd><textarea name="content">'+(i?i.content||"":"")+"</textarea></dd></dl>");f.push("</div>");App.Confirm({title:"发送消息",width:350,height:165,content:f.join(""),doOk:function(m){var n=m.contenter,l=n.getElement("input[name=subject]").value,p=n.getElement("textarea[name=content]").value,o=[];g.subject=l;g.content=p;if(l.length==0){o.push("主题不能为空")}else{if(l.length>14){o.push("主题长度超过14个字符")}}if(p.length==0){o.push("内容不能为空")}else{if(p.length>140){o.push("内容长度超过140个字符")}}if(o.length>0){var k=o.map(function(q,r){return(r+1)+". "+q}).join("<br/>");App.onError({title:"发送消息",content:k,buttons:{ok:{text:"返回"}},doOk:function(){c.sendMessage(n,j,g)}})}else{b(g);return true}}})}}})(using("App.Common"));