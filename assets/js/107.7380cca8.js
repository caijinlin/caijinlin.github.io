(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{377:function(v,_,t){"use strict";t.r(_);var s=t(14),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("<<从0开始学架构>> 学习笔记Day08：高性能缓存架构")])]),v._v(" "),_("p",[v._v("在某些复杂的业务场景下，单纯依靠存储系统的性能提升不够的，典型的场景有：")]),v._v(" "),_("ul",[_("li",[v._v("需要经过复杂运算后得出的数据，存储系统无能为力")]),v._v(" "),_("li",[v._v("读多写少的数据，存储系统有心无力")])]),v._v(" "),_("p",[v._v("缓存就是为了弥补存储系统在这些复杂业务场景下的不足，其基本原理是将可能重复使用的数据放到内存中，一次生成、多次使用，避免每次使用都去访问存储系统。")]),v._v(" "),_("p",[v._v("使用缓存引入的问题：")]),v._v(" "),_("h3",{attrs:{id:"缓存穿透"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[v._v("#")]),v._v(" 缓存穿透")]),v._v(" "),_("p",[v._v("缓存穿透是指查询一个缓存中和数据库中"),_("strong",[v._v("都不存在")]),v._v("的key，导致每次查询这条数据都会透过缓存，直接查库，最后返回空。当用户使用这条不存在的数据疯狂发起查询请求的时候，对数据库造成的压力就非常大，甚至可能直接挂掉")]),v._v(" "),_("p",[v._v("解决方案：")]),v._v(" "),_("ul",[_("li",[v._v("缓存空对象 (当访问缓存和DB都没有查询到值时，可以将空值写进缓存)")]),v._v(" "),_("li",[v._v("使用布隆过滤器 (使用布隆过滤器存储所有可能访问的 key，不存在的 key 直接被过滤)")])]),v._v(" "),_("h3",{attrs:{id:"缓存雪崩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[v._v("#")]),v._v(" 缓存雪崩")]),v._v(" "),_("p",[v._v("缓存雪崩是指当缓存中有"),_("strong",[v._v("大量的key")]),v._v("在同一时刻"),_("strong",[v._v("过期")]),v._v("，或者Redis直接宕机了，导致大量的查询请求全部到达数据库，造成数据库查询压力骤增，甚至直接挂掉")]),v._v(" "),_("p",[v._v("解决方案：")]),v._v(" "),_("ul",[_("li",[v._v("设置永不过期")]),v._v(" "),_("li",[v._v("key过期时间打散")]),v._v(" "),_("li",[v._v("更新锁机制（保证只有一个业务线程能够进行缓存更新)")]),v._v(" "),_("li",[v._v("后台更新机制 (后台线程来更新缓存，而不是由业务线程来更新缓存)")])]),v._v(" "),_("h3",{attrs:{id:"缓存击穿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[v._v("#")]),v._v(" 缓存击穿")]),v._v(" "),_("p",[v._v("缓存击穿是指当缓存中"),_("strong",[v._v("某个热点key")]),v._v("过期了，在该热点数据重新载入缓存之前，有大量的查询请求穿过缓存，直接查询数据库。这种情况会导致数据库压力瞬间骤增，造成大量请求阻塞，甚至直接挂掉。")]),v._v(" "),_("p",[v._v("对于特别热点的key，如果大部分甚至所有的业务请求都命中同一份缓存数据，则这份数据所在的缓存服务器的压力也很大")]),v._v(" "),_("p",[v._v("解决方案：")]),v._v(" "),_("ul",[_("li",[v._v("设置永不过期")]),v._v(" "),_("li",[v._v("更新锁机制")]),v._v(" "),_("li",[v._v("复制多份缓存副本，将请求分散到多个缓存服务器上，减轻缓存热点导致的单台缓存服务器压力")])])])}),[],!1,null,null,null);_.default=a.exports}}]);