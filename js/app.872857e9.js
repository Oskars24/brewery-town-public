(function(e){function n(n){for(var o,r,c=n[0],s=n[1],u=n[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,c=1;c<t.length;c++){var s=t[c];0!==i[s]&&(o=!1)}o&&(a.splice(n--,1),e=r(r.s=t[0]))}return e}var o={},i={app:0},a=[];function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var d=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"0220":function(e,n,t){"use strict";t("ff19")},"2ea0":function(e,n,t){"use strict";t("f1a6")},7989:function(e,n,t){},c510:function(e,n,t){"use strict";t("7989")},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23"),i={id:"app"};function a(e,n){var t=Object(o["u"])("router-view");return Object(o["n"])(),Object(o["c"])("div",i,[Object(o["d"])(t)])}t("c510");const r={};r.render=a;var c=r,s=t("6c02");function u(e,n,t,i,a,r){var c=Object(o["u"])("new-scene");return Object(o["n"])(),Object(o["c"])("div",null,[Object(o["d"])(c)])}var d=t("d4ec"),l=t("262e"),f=t("2caf"),v=t("9ab4"),y=t("ce1f"),b=Object(o["y"])("data-v-549912f1");Object(o["r"])("data-v-549912f1");var p={class:"container"},m={class:"scene",ref:"sceneRef"};Object(o["o"])();var w=b((function(e,n,t,i,a,r){return Object(o["n"])(),Object(o["c"])("div",p,[Object(o["d"])("div",m,null,512)])})),g=(t("a623"),t("7db0"),t("4160"),t("caad"),t("45fc"),t("b0c0"),t("07ac"),t("2532"),t("159b"),t("5a89")),h=t("4721"),x=t("34ad"),K=t("32d9"),O=t("93e9"),R=t("f7dd"),j={setup:function(){var e,n=new g["Bb"]({antialias:!0}),t=new g["ib"],i=new g["i"],a=new g["gb"],r={},c={},s={},u={},d=Object(o["t"])(null),l=function e(n,t,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,c=t.find((function(e){return e.name===o})),u=n.clipAction(c);u.timeScale=i,s["Robot"][2].isPlaying&&(r=0,setTimeout((function(){e(n,t,o,i,!0,1)}),1e3*s["Robot"][2].duration)),c.isPlaying=!0,a?u.setEffectiveWeight(r).play():(u.setLoop(g["G"]),u.reset().setEffectiveTimeScale(.5).setEffectiveWeight(1).play())},f=function(e,n,t){var o=n.find((function(e){return e.name===t})),i=e.clipAction(o);i.stop()},v=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=e.every((function(e){return!0===u[e]}));if(n){var o=n.every((function(e){return!1===u[e]||void 0===u[e]}));return t&&o}return t},y=function(e){return e.some((function(e){return!0===u[e]}))},b=function(){var e=new g["yb"](r["Robot"].position.x,r["Robot"].position.y,r["Robot"].position.z),n=5;e.y+=n;var t=.18,o=6,i=0,c=new g["yb"];v(["ShiftLeft"])&&(t*=2),v(["KeyW"],["KeyA","KeyS","KeyD"])?(i=180,c.z=-1*t,e.z+=-1*t):v(["KeyA"],["KeyW","KeyS","KeyD"])?(i=-90,c.x=-1*t,e.x+=-1*t):v(["KeyS"],["KeyW","KeyA","KeyD"])?(i=0,c.z=1*t,e.z+=1*t):v(["KeyD"],["KeyW","KeyA","KeyS"])?(i=90,c.x=1*t,e.x+=1*t):v(["KeyW","KeyA"])?(i=-135,c.x=-1*t,c.z=-1*t,e.x+=-1*t,e.z+=-1*t):v(["KeyW","KeyD"])?(i=135,c.x=1*t,c.z=-1*t,e.x+=1*t,e.z+=-1*t):v(["KeyS","KeyA"])?(i=-45,c.x=-1*t,c.z=1*t,e.x+=-1*t,e.z+=1*t):v(["KeyS","KeyD"])&&(i=45,c.x=1*t,c.z=1*t,e.x+=1*t,e.z+=1*t),a.set(e,new g["yb"](0,-1,0));var s=a.intersectObject(r["floor"],!0);return s[0]&&s[0].distance-n<o?(c.y=-s[0].distance+n,{move:c,angle:i}):(c.x=0,c.y=0,c.z=0,{move:c,angle:i})},p=function(){if(c["Robot"]){if(y(["KeyW","KeyA","KeyS","KeyD"])){var e=1;v(["ShiftLeft"])&&(e=2),l(c["Robot"],s["Robot"],"Robot_Running",e)}else f(c["Robot"],s["Robot"],"Robot_Running");y(["Space"])&&l(c["Robot"],s["Robot"],"Robot_Jump",1,!1)}},m=function(e){u[e.code]=!1,p()},w=function(e){u[e.code]=!0,p()};return window.addEventListener("keydown",w),window.addEventListener("keyup",m),Object(o["l"])((function(){var o,a=d.value;e=new g["W"](60,a.clientWidth/a.clientHeight,1,1e3),e.position.set(55,55,55),n.setSize(a.clientWidth,a.clientHeight),a.appendChild(n.domElement);var l=new x["a"];l.load("/peach_castle/scene.gltf",(function(e){var n=e.scene;t.add(n),e.animations.length&&(o=new g["b"](n),o.clipAction(e.animations[0]).play())}),void 0,(function(e){console.error(e)})),l.load("/Robot.gltf",(function(e){var n=e.scene;n.userData.name="Robot",t.add(n),n.position.set(5,12,0),r[n.userData.name]=n,s[n.userData.name]=e.animations,s[n.userData.name].forEach((function(e){e.isPlaying=!1})),c[n.userData.name]=new g["b"](n),c[n.userData.name].addEventListener("finished",(function(e){e.action._clip.isPlaying=!1,console.log("animacja skonczona")}))}),void 0,(function(e){console.error(e)})),l.load("/peach_castle/floor.gltf",(function(e){var n=e.scene;n.userData.name="floor",n.visible=!1,t.add(n),r[n.userData.name]=n}),void 0,(function(e){console.error(e)}));var f=new g["q"](16777215,2236962,1),v=new g["k"](16777215,4);v.position.set(10,10,10),t.add(f,v);var y=new h["a"](e,n.domElement);y.enableDamping=!0,y.dampingFactor=.05,y.screenSpacePanning=!1,y.minDistance=10,y.maxDistance=500;var p=new K["a"](n),m=new O["a"](t,e);p.addPass(m);var w=new R["a"](window.innerWidth*n.getPixelRatio(),window.innerHeight*n.getPixelRatio());p.addPass(w);var j=function(){n.render(t,e)},z=function e(){for(var n in requestAnimationFrame(e),"undefined"!==typeof o&&o.update(i.getDelta()),c)c[n].update(i.getDelta());if(Object.values(u).includes(!0)){var t=b();r["Robot"].position.add(t.move),r["Robot"].rotation.y=t.angle*(Math.PI/180)}y.update(),j()};z()})),Object(o["m"])((function(){window.removeEventListener("keydown",w),window.removeEventListener("keyup",m)})),{camera:e,renderer:n,scene:t,clock:i,raycaster:a,objects:r,mixers:c,animations:s,pressedKeys:u,sceneRef:d,playAnimation:l,stopAnimation:f,testAllKeys:v,testAnyKeys:y,checkKeysState:b,robotRunning:p,keyUp:m,keyDown:w}}};t("0220");j.render=w,j.__scopeId="data-v-549912f1";var z=j,D=Object(o["y"])("data-v-4d3d209c");Object(o["r"])("data-v-4d3d209c");var S={class:"container"},A={class:"scene",ref:"sceneRef"};Object(o["o"])();var P=D((function(e,n,t,i,a,r){return Object(o["n"])(),Object(o["c"])("div",S,[Object(o["d"])("div",A,null,512)])})),E=t("3191"),W=t.n(E);function k(e,n,t){var i=new g["ib"],a=new g["Bb"]({antialias:!0}),r=new g["W"],c=Object(o["t"])(),s=[],u=new h["a"](r,a.domElement),d=function(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight)};return Object(o["l"])((function(){r.fov=60,r.aspect=e.value?e.value.clientWidth/e.value.clientHeight:window.innerWidth/window.innerHeight,r.near=1,r.far=1e3,r.position.set(n.x+t.x,n.y+t.y,n.z+t.z),r.updateProjectionMatrix(),a.setSize(e.value.clientWidth,e.value.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.value.appendChild(a.domElement),window.addEventListener("resize",d);var o=new W.a;o.showPanel(0),document.body.appendChild(o.dom),u.enableDamping=!0,u.dampingFactor=.05,u.screenSpacePanning=!1,u.minDistance=10,u.maxDistance=500,u.enablePan=!1,u.enableRotate=!1,u.enableZoom=!1,u.target=n;var c=function(){a.render(i,r)},l=function e(){o.begin(),requestAnimationFrame(e),u.update(),s.forEach((function(e){e()})),c(),o.end()};l()})),Object(o["m"])((function(){window.removeEventListener("resize",d)})),{scene:i,renderer:a,camera:r,animateFunctions:s,animation:c,controls:u}}function L(e){Object(o["l"])((function(){var n=new g["q"](16777215,2236962,3.5),t=new g["k"](16777215,3);t.position.set(10,30,10),e.add(n)}))}function M(e,n,t){Object(o["l"])((function(){var o=new K["a"](t),i=new O["a"](e,n);o.addPass(i);var a=new R["a"](window.innerWidth*t.getPixelRatio(),window.innerHeight*t.getPixelRatio());o.addPass(a)}))}function _(e,n,t,i,a){Object(o["l"])((function(){e.load(i,(function(e){var t=e.scene;n.add(t)}),void 0,(function(e){console.error(e)})),e.load(a,(function(e){var o=e.scene;o.userData.name="floor",o.visible=!1,n.add(o),t[o.userData.name]=o}),void 0,(function(e){console.error(e)}))}))}var C=t("1209");function H(e,n,t,i,a,r,c,s,u,d,l,f,v,y,b,p,m,w){var h=new g["gb"],x=new g["i"],K=!1,O=null,R=0,j=function(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=n.find((function(e){return e.name===t})),r=e.clipAction(a);r.setEffectiveTimeScale(o),i||r.time!=r.getClip().duration||r.reset(),i||r==O||(K=!0,r.setLoop(g["G"],1),r.setEffectiveWeight(1).reset(),null===O||void 0===O||O.fadeOut(z(O,r)),O=r),K?O&&O.time/O.getClip().duration>=.75&&(K=!1,r.fadeIn(z(r,O)).reset(),O=r):(r.setEffectiveWeight(1),O=r)},z=function(e,n){var t=e.getClip().duration/e.getEffectiveTimeScale(),o=n.getClip().duration/n.getEffectiveTimeScale();return.25*o>t?t:.25*o},D=function(e,n,t){var o=n.find((function(e){return e.name===t})),i=e.clipAction(o);i.setEffectiveWeight(0)},S=function(){w.value=Object(C["a"])({targets:b.position,easing:"easeOutCirc",duration:1e3,complete:function(){w.value=null},x:t["Robot"].position.x+m.x,y:t["Robot"].position.y+m.y,z:t["Robot"].position.z+m.z}),w.value=Object(C["a"])({targets:y.target,easing:"easeOutCirc",duration:2e3,complete:function(){w.value=null},x:t["Robot"].position.x,y:t["Robot"].position.y,z:t["Robot"].position.z})},A=function(){var e=t["Robot"].position.clone(),n=180*t["Robot"].rotation.y/Math.PI,o=W(t["Robot"]),i=o.max.y-o.min.y,a=e.clone();a.y+=i;var r=.18,s=1,u=1.2,l=5,v=n,y=new g["yb"],b=2200==(null===O||void 0===O?void 0:O.loop),p=f();!c(["ShiftLeft"])&&!d([7])||b||(r*=2),c(["KeyW"],["KeyA","KeyS","KeyD"])||d([12],[13,14,15])?(v=180,y.z=-1*r,a.z+=-1*r-s):c(["KeyA"],["KeyW","KeyS","KeyD"])||d([14],[12,13,15])?(v=-90,y.x=-1*r,a.x+=-1*r-s):c(["KeyS"],["KeyW","KeyA","KeyD"])||d([13],[12,14,15])?(v=0,y.z=1*r,a.z+=1*r+s):c(["KeyD"],["KeyW","KeyA","KeyS"])||d([15],[12,13,14])?(v=90,y.x=1*r,a.x+=1*r+s):c(["KeyW","KeyA"])||d([12,14])?(v=-135,y.x=-1*r,y.z=-1*r,a.x+=-1*r-s,a.z+=-1*r-s):c(["KeyW","KeyD"])||d([12,15])?(v=135,y.x=1*r,y.z=-1*r,a.x+=1*r+s,a.z+=-1*r-s):c(["KeyS","KeyA"])||d([13,14])?(v=-45,y.x=-1*r,y.z=1*r,a.x+=-1*r-s,a.z+=1*r+s):(c(["KeyS","KeyD"])||d([13,15]))&&(v=45,y.x=1*r,y.z=1*r,a.x+=1*r+s,a.z+=1*r+s),p&&(v=p.angle,y.x=p.x*r,y.z=p.z*r,a.x+=p.x*r+(p.x>0?s:-s),a.z+=p.z*r+(p.z>0?s:-s)),S();var m=Math.abs(n-v);b&&m>45&&m<315&&(v=n,y.x=0,y.z=0),h.set(a,new g["yb"](0,-1,0));var w=h.intersectObject(t["floor"],!0),x=Math.abs(o.min.y-e.y),K=w[0]?w[0].distance-i:0,j=!(K>=0);return w[0],w[0]&&Math.abs(K)<u+x&&j?b?(x>=Math.abs(K)?y.y=0:R<Math.abs(K+x)?(y.y=Math.abs(K+x),O&&O.warp(O.timeScale,4*O.timeScale,O.getClip().duration-O.time)):y.y=0,R=Math.abs(K+x),{move:y,angle:v}):(R=0,y.y=-w[0].distance+i,{move:y,angle:v}):w[0]&&K<l&&!j?(y.y=-w[0].distance+i,{move:y,angle:v}):(y.x=0,y.y=0,y.z=0,{move:y,angle:v})},P=function(){if(a["Robot"]){if(s(["KeyW","KeyA","KeyS","KeyD"])||l([12,13,14,15])||f()){var e=1;(c(["ShiftLeft"])||d([7]))&&(e=2),j(a["Robot"],i["Robot"],"Robot_Running",e)}else D(a["Robot"],i["Robot"],"Robot_Running");(s(["Space"])||d([0]))&&j(a["Robot"],i["Robot"],"Robot_Jump",.6,!1)}},E=function(){for(var e in a)a[e].update(x.getDelta());if(Object.values(r).includes(!0)||K||u.value[0]){var n=A();t["Robot"].position.add(n.move),t["Robot"].rotation.y=n.angle*(Math.PI/180)}},W=function(e){for(var n=new g["lb"](e),t={x:1/0,y:1/0,z:1/0},o={x:-1/0,y:-1/0,z:-1/0},i=0;i<n.bones.length;i++){var a=n.bones[i],r=new g["yb"];a.getWorldPosition(r),r.x<t.x&&(t.x=r.x),r.y<t.y&&(t.y=r.y),r.z<t.z&&(t.z=r.z),r.x>o.x&&(o.x=r.x),r.y>o.y&&(o.y=r.y),r.z>o.z&&(o.z=r.z)}return{min:t,max:o}};return Object(o["l"])((function(){e.load(v,(function(e){var o=e.scene;o.userData.name="Robot",o.position.set(p.x,p.y,p.z),n.add(o),t[o.userData.name]=o,i[o.userData.name]=e.animations,a[o.userData.name]=new g["b"](o),a[o.userData.name].addEventListener("finished",(function(e){K=!1,P()})),i[o.userData.name].forEach((function(e){a[o.userData.name].clipAction(e).setEffectiveWeight(0).play()}))}),void 0,(function(e){console.error(e)}))})),{robotRunning:P,toAnimate:E}}function F(e){var n=[],t=Object(o["t"])([]),i=function(n){e[n.code]=!1},a=function(n){e[n.code]=!0},r=function(e){console.log(e.gamepad.id,"podłączony")},c=function(e){console.log(e.gamepad.id,"odłączony")},s=function(){t.value=navigator.getGamepads()},u=function(){n.forEach((function(e){e()}))};window.addEventListener("keydown",a),window.addEventListener("keyup",i),window.addEventListener("gamepadconnected",r),window.addEventListener("gamepaddisconnected",c);var d=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=n.every((function(n){return!0===e[n]}));if(t){var i=t.every((function(n){return!1===e[n]||void 0===e[n]}));return o&&i}return o},l=function(n){return n.some((function(n){return!0===e[n]}))},f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=e.every((function(e){var n;return null===(n=t.value[0])||void 0===n?void 0:n.buttons[e].pressed}));if(n){var i=n.every((function(e){var n;return!(null===(n=t.value[0])||void 0===n?void 0:n.buttons[e].pressed)}));return o&&i}return o},v=function(){var e,n;if(t.value[0]){var o=.3,i=null===(e=t.value[0])||void 0===e?void 0:e.axes[0],a=null===(n=t.value[0])||void 0===n?void 0:n.axes[1],r=180*Math.atan2(a,-i)/Math.PI,c={angle:r-90,x:i,z:a};if(Math.abs(i)>o||Math.abs(a)>o)return c}},y=function(e){return e.some((function(e){var n;return null===(n=t.value[0])||void 0===n?void 0:n.buttons[e].pressed}))};return Object(o["m"])((function(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",i),window.removeEventListener("gamepadconnected",r),window.addEventListener("gamepaddisconnected",c)})),{testAllKeys:d,testAnyKeys:l,keysFunctions:n,checkPressedKeys:u,testAllButtons:f,testAnyButton:y,testAxis:v,checkPads:s,gamepads:t}}var I={setup:function(){var e=new g["yb"](5,11.5,0),n=new g["yb"](2.5,15,25),t=Object(o["t"])(null),i=k(t,e,n),a=i.scene,r=i.renderer,c=i.camera,s=i.animateFunctions,u=i.animation,d=i.controls;L(a),M(a,c,r);var l=new x["a"],f={};_(l,a,f,"/peach_castle/scene.gltf","/peach_castle/floor.gltf");var v={},y=F(v),b=y.testAllKeys,p=y.testAnyKeys,m=y.keysFunctions,w=y.checkPressedKeys,h=y.testAllButtons,K=y.testAnyButton,O=y.testAxis,R=y.checkPads,j=y.gamepads;s.push(w,R);var z={},D={},S=H(l,a,f,z,D,v,b,p,j,h,K,O,"/Robot_edited.glb",d,c,e,n,u),A=S.robotRunning,P=S.toAnimate;return s.push(P),m.push(A),{sceneRef:t,camera:c,animations:z,mixers:D}}};t("2ea0");I.render=P,I.__scopeId="data-v-4d3d209c";var T=I,B=function(e){Object(l["a"])(t,e);var n=Object(f["a"])(t);function t(){return Object(d["a"])(this,t),n.apply(this,arguments)}return t}(y["b"]);B=Object(v["a"])([Object(y["a"])({components:{Scene:z,NewScene:T}})],B);var q=B;q.render=u;var J=q,G=[{path:"/",name:"Home",component:J}],N=Object(s["a"])({history:Object(s["b"])("/"),routes:G}),U=N,Z=t("5502"),Q=Object(Z["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["b"])(c).use(Q).use(U).mount("#app")},f1a6:function(e,n,t){},ff19:function(e,n,t){}});
//# sourceMappingURL=app.872857e9.js.map