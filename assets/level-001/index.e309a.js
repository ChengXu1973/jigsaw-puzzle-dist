System.register("chunks:///level-001.js",["./rollupPluginModLoBabelHelpers-ec5e44d8.js","cc","./event-bus-3e1eb33c.js"],(function(){var e,t,n,r,o,i,s,u,c,a,l;return{setters:[function(o){e=o._,t=o.a,n=o.b,r=o.c},function(e){o=e.cclegacy,i=e._decorator,s=e.CCInteger,u=e.v3,c=e.Component},function(e){a=e.E,l=e.a}],execute:function(){var p,h,_,d,f;o._RF.push({},"c8d28hXm1hC4L52zWHG0pLe","model-control",void 0);var m=i.ccclass,v=i.property;p=m("ModelControl"),h=v(s),p((f=e((d=function(e){function o(){for(var t,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,n(t,"speed",f,r(t)),t._euler=u(0,0,0),t._spin=!1,t}t(o,e);var i=o.prototype;return i.onLoad=function(){a.on(l.GAME_OVER,this._gameOver,this),a.on(l.GAME_START,this._gameStart,this)},i.update=function(){this._spin&&(this._euler.set(0,this._euler.y+this.speed,0),this.node.setRotationFromEuler(this._euler))},i._gameOver=function(){this._spin=!0},i._gameStart=function(){this._spin=!1,this._euler.set(0,0,0),this.node.setRotationFromEuler(this._euler)},o}(c)).prototype,"speed",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),_=d));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/level-001', 'chunks:///level-001.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});