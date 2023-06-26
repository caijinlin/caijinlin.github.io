(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{309:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"线程安全之锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程安全之锁"}},[t._v("#")]),t._v(" 线程安全之锁")]),t._v(" "),a("h3",{attrs:{id:"互斥锁-mutex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#互斥锁-mutex"}},[t._v("#")]),t._v(" 互斥锁（mutex）")]),t._v(" "),a("p",[t._v("同一时刻只能有一个线程获得互斥锁，其余线程处于挂起状态")]),t._v(" "),a("p",[t._v("优点：cpu利用最大化。它发现资源被锁住，请求就排队等候。线程切换到别处干活，直到接受到可用信号，线程再切回来继续处理请求")]),t._v(" "),a("p",[t._v("缺点：获取不到锁的时候会进入阻塞状态，从而进入内核态；当获取到锁的时候会从内核态切换到用户态，需要线程上下文切换;线程的休眠和唤醒都是相当昂贵的操作，它们需要大量的CPU指令")]),t._v(" "),a("p",[a("em",[t._v("加锁")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("void mutex_lock() {\n    lock(bus);    //给总线加锁,防止其他核的线程访问到lock\n    if (mutex == 0) {\n        mutex = 1\n        return\n    } else {\n         block() // 调用系统函数将当前线程阻塞,进入内核态（内核调用）\n         goto lock\n    }\n    unlock(bus);  \n}\n")])])]),a("p",[a("em",[t._v("释放锁")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("void mutex_unlock() {\n    lock(bus);    //给总线加锁,防止其他核的线程访问到lock\n    mutex = 0\n    wakeup() // 唤醒等待Mutex的线程（内核调用）\n    unlock(bus)\n}\n")])])]),a("h3",{attrs:{id:"自旋锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自旋锁"}},[t._v("#")]),t._v(" 自旋锁")]),t._v(" "),a("p",[t._v("当某个线程获得自旋锁后,别的线程会一直做循环,尝试加锁")]),t._v(" "),a("p",[t._v("优点：自旋锁不会使线程状态发生切换，一直处于用户态，即线程一直都是active的；不会使线程进入阻塞状态，减少了不必要的上下文切换，执行速度快")]),t._v(" "),a("p",[t._v("缺点：1.长时间获取不到锁的话，cpu空转，耗cpu; 2. 不适用单核/单CPU的系统上，无法解锁")]),t._v(" "),a("p",[a("em",[t._v("加锁")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("void spin_lock() {\n    // cas原子操作 CMPXCHG （cas是硬件支持的原子操作，不需要进入内核态）\n    while(!cas(state, 0, 1)) {\n    \n    }\n    持有者 = 当前线程\n}\n")])])]),a("p",[a("em",[t._v("释放锁")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("void spin_unlock() {\n    if(持有者 == 当前线程) {\n        持有者 = null\n        state = 1\n    } else {\n        throw Exception\n    }\n}\n")])])]),a("h3",{attrs:{id:"混合锁-互斥锁-自旋锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合锁-互斥锁-自旋锁"}},[t._v("#")]),t._v(" 混合锁：互斥锁+自旋锁")]),t._v(" "),a("p",[t._v("混合锁是先自旋锁一段时间或自旋多少次，再转成互斥锁")]),t._v(" "),a("p",[t._v("优点：互斥锁和自旋锁的折中方案，利用前二者优点，避免出现极端情况（自旋时间过长，互斥锁切换过多）")]),t._v(" "),a("p",[t._v("缺点：自旋多少时间、自旋多少次，这些策略很难把控。")])])}),[],!1,null,null,null);a.default=n.exports}}]);