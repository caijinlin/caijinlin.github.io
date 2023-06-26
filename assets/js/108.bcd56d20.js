(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{384:function(r,t,a){"use strict";a.r(t);var e=a(14),v=Object(e.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("blockquote",[t("p",[r._v("<<从0开始学架构>> 学习笔记Day09：单服务器高性能模式")])]),r._v(" "),t("p",[r._v("单服务器高性能的关键之一就是服务器采取的并发模型，并发模型有如下两个关键设计点：")]),r._v(" "),t("ul",[t("li",[r._v("服务器如何管理连接")]),r._v(" "),t("li",[r._v("服务器如何处理请求")])]),r._v(" "),t("h3",{attrs:{id:"ppc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ppc"}},[r._v("#")]),r._v(" PPC")]),r._v(" "),t("p",[r._v("PPC 是 Process Per Connection的缩写，其含义是指每次有新的连接就新建一个进程去专门处理这个连接的请求，这是传统的 UNIX 网络服务器所采用的模型。基本的流程图是：")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/53/ba/53b17d63a31c6b551d3a039a2568daba.jpg?wh=3249*2950",alt:""}})]),r._v(" "),t("p",[r._v("优点：")]),r._v(" "),t("ul",[t("li",[r._v("PPC 模式实现简单，比较适合服务器的连接数没那么多的情况，例如数据库服务器")])]),r._v(" "),t("p",[r._v("缺点：")]),r._v(" "),t("ul",[t("li",[r._v("fork 代价高")]),r._v(" "),t("li",[r._v("父子进程通信复杂")]),r._v(" "),t("li",[r._v("支持的并发连接数量有限")])]),r._v(" "),t("p",[r._v("PPC 模式中，当连接进来时才 fork 新进程来处理连接请求，由于 fork 进程代价高，用户访问时可能感觉比较慢，prefork 模式的出现就是为了解决这个问题。prefork 就是提前创建进程（pre-fork）。系统在启动的时候就预先创建好进程，然后才开始接受用户的请求，当有新的连接进来的时候，就可以省去 fork 进程的操作，让用户访问更快、体验更好")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/3c/2f/3c931b04d3372ebcebe4f2c2cf59d42f.jpg?wh=3219*2430",alt:""}})]),r._v(" "),t("h3",{attrs:{id:"tpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tpc"}},[r._v("#")]),r._v(" TPC")]),r._v(" "),t("p",[r._v("TPC 是 Thread Per Connection 的缩写，其含义是指每次有新的连接就新建一个线程去专门处理这个连接的请求。与进程相比，线程更轻量级，创建线程的消耗比进程要少得多；同时多线程是共享进程内存空间的，线程通信相比进程通信更简单。因此，TPC 实际上是解决或者弱化了 PPC fork 代价高的问题和父子进程通信复杂的问题。")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/25/e7/25b3910c8c5fb0055e184c5c186eece7.jpg?wh=4464*3285",alt:""}})]),r._v(" "),t("p",[r._v("优点：")]),r._v(" "),t("ul",[t("li",[r._v("解决了 fork 代价高和进程通信复杂的问题")])]),r._v(" "),t("p",[r._v("缺点：")]),r._v(" "),t("ul",[t("li",[r._v("创建线程虽然比创建进程代价低，但并不是没有代价，高并发时（例如每秒上万连接）还是有性能问题")]),r._v(" "),t("li",[r._v("无须进程间通信，但是线程间的互斥和共享又引入了复杂度，可能一不小心就导致了死锁问题")]),r._v(" "),t("li",[r._v("多线程会出现互相影响的情况，某个线程出现异常时，可能导致整个进程退出（例如内存越界）")])]),r._v(" "),t("p",[r._v("TPC 模式中，当连接进来时才创建新的线程来处理连接请求，虽然创建线程比创建进程要更加轻量级，但还是有一定的代价，而 prethread 模式就是为了解决这个问题。prethread 模式会预先创建线程，然后才开始接受用户的请求，当有新的连接进来的时候，就可以省去创建线程的操作，让用户感觉更快、体验更好")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/11/4d/115308f686fe0bb1c93ec4b1728eda4d.jpg?wh=4527*3150",alt:""}})]),r._v(" "),t("h3",{attrs:{id:"reactor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reactor"}},[r._v("#")]),r._v(" Reactor")]),r._v(" "),t("p",[r._v("可以通俗地理解为“来了一个事件我就有相应的反应”，比如“去饭店点餐，我们付了钱后给你一个号就可以离开，饭好了老板会叫号，你过来取”，这就是Reactor模型。")]),r._v(" "),t("p",[r._v("最终 Reactor 模式有这三种典型的实现方案：")]),r._v(" "),t("ul",[t("li",[r._v("单 Reactor 单进程 / 线程（比如Redis）")]),r._v(" "),t("li",[r._v("单 Reactor 多线程")]),r._v(" "),t("li",[r._v("多 Reactor 多进程 / 线程")])]),r._v(" "),t("h3",{attrs:{id:"proactor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proactor"}},[r._v("#")]),r._v(" Proactor")]),r._v(" "),t("p",[r._v("可以理解为“来了事件我来处理，处理完了我通知你”，比如“去饭店点餐，我们付了钱后给你一个号就可以坐到坐位上该干啥干啥，饭好了老板会把饭端上来送给你”，这就是Proactor模型。")]),r._v(" "),t("p",[r._v("Reactor 是非阻塞同步网络模型，因为真正的 read 和 send 操作都需要用户进程同步操作。这里的“同步”指用户进程在执行 read 和 send 这类 I/O 操作的时候是同步的，如果把 I/O 操作改为异步就能够进一步提升性能，这就是异步网络模型 Proactor。")]),r._v(" "),t("h1",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),t("p",[r._v("少连接，多请求 - PPC/TPC")]),r._v(" "),t("p",[r._v("多连接，多请求 - Rector/Proactor")]),r._v(" "),t("ul",[t("li",[r._v("单Rector 单线程 (无法充分利用内核，需要业务处理迅速)")]),r._v(" "),t("li",[r._v("单Rector 多线程 (复杂度较高，应对瞬间高并发能力较差)")]),r._v(" "),t("li",[r._v("多Rector 多线程 (复杂度比 单Rector多线程 低，强化应对高并发的能力)")])])])}),[],!1,null,null,null);t.default=v.exports}}]);