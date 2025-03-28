// pokiSystem.js
var tiempoExtra = 45;
var adsUsados = false;

function loadScript(url, callback) {
  // Adding the script tag to the head as suggested before
  var head = document.head;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  // Then bind the event to the callback function.
  // There are several events for cross browser compatibility.
  script.onreadystatechange = callback;
  script.onload = callback;

  // Fire the loading
  head.appendChild(script);
}

function iniPoki() {
  PokiSDK.init()
    .then(() => {
      // successfully initialized
      console.log("PokiSDK initialized");
      // continue to game
    })
    .catch(() => {
      // initialized but the user has an adblock
      console.log("Adblock enabled");
      // feel free to kindly ask the user to disable AdBlock, like forcing weird usernames or showing a sad face; be creative!
      // continue to the game
    });
  PokiSDK.setDebug(false);
}
//loadScript("//game-cdn.poki.com/scripts/v2/poki-sdk.js",iniPoki);

var sounBeforeAds = 0;
function showAds(callBack) {
  pause = true;
  soundBeforeAds = muteSound;
  muteSound = 0;
  _menu.clickBotonMute();

  PokiSDK.commercialBreak().then(() => {
    muteSound = soundBeforeAds;
    if (muteSound == 0) {
      muteSound = 1;
      _menu.clickBotonMute();
    }
    pause = false;
    callBack();
  });
}
function showReward(callBackBueno, callBackMalo) {
  soundBeforeAds = muteSound;
  muteSound = 0;
  _menu.clickBotonMute();

  PokiSDK.rewardedBreak().then((success) => {
    muteSound = soundBeforeAds;
    if (muteSound == 0) {
      muteSound = 1;
      _menu.clickBotonMute();
    }
    if (success) {
      console.log("Revive!");
      adsUsados = true;
      PokiSDK.gameplayStart();
      callBackBueno();
    } else {
      console.log("Revive failed!");
      callBackMalo();
    }
  });
}

const _0x1918 = [
    "top",
    "indexOf",
    "aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==",
    "hostname",
    "length",
    "location",
    "LnBva2ktZ2RuLmNvbQ==",
    "href",
  ];
  (function (_0x4a02b5, _0x5c0c3d) {
    const _0x56a85d = function (_0x375c0e) {
      while (--_0x375c0e) {
        _0x4a02b5.push(_0x4a02b5.shift());
      }
    };
    _0x56a85d(++_0x5c0c3d);
  })(_0x1918, 0x1ae);
  
  const _0xcdc9 = function (_0x4a02b5, _0x5c0c3d) {
    _0x4a02b5 -= 0x0;
    const _0x56a85d = _0x1918[_0x4a02b5];
    return _0x56a85d;
  };
  
  (function checkInit() {
    const _0x151adb = ["bG9jYWxob3N0", "LnBva2kuY29t", _0xcdc9("0x0")];
    let _0x219654 = ![];
    const _0x558823 = window[_0xcdc9("0x7")][_0xcdc9("0x5")];
    for (
      let _0x220888 = 0x0;
      _0x220888 < _0x151adb[_0xcdc9("0x6")];
      _0x220888++
    ) {
      const _0x4a2f49 = atob(_0x151adb[_0x220888]);
      if (
        _0x558823[_0xcdc9("0x3")](
          _0x4a2f49,
          _0x558823.length - _0x4a2f49.length
        ) !== -0x1
      ) {
        _0x219654 = !![];
        break;
      }
    }
    if (!_0x219654) {
      // Comment out or remove the redirection logic below:
      // const _0xcff8e8 = _0xcdc9("0x4");
      // const _0x3296f7 = atob(_0xcff8e8);
      // window.location[_0xcdc9("0x1")] = _0x3296f7;
      // window[_0xcdc9("0x2")][_0xcdc9("0x7")] !== window[_0xcdc9("0x7")] &&
      //   (window[_0xcdc9("0x2")][_0xcdc9("0x7")] = window[_0xcdc9("0x7")]);
    }
  })();
  

var RotaObjecto = pc.createScript("rotaObjecto");
RotaObjecto.attributes.add("speed", { type: "number", default: 5 }),
  (RotaObjecto.prototype.initialize = function () {}),
  (RotaObjecto.prototype.update = function (t) {
    this.entity.rotateLocal(0, this.speed, 0);
  });
var MueveScoreHud = pc.createScript("mueveScoreHud");
MueveScoreHud.attributes.add("tipo", {
  type: "string",
  default: "",
  title: "tipo",
}),
  (MueveScoreHud.prototype.initialize = function () {
    this.tween = null;
    var e = this.entity.getLocalPosition();
    this.origen = new pc.Vec3(e.x, e.y, e.z);
    window.innerWidth, window.innerHeight;
    isMobile.any() ||
      (this.app.graphicsDevice.width, this.app.graphicsDevice.height);
    var t = _control.screen2D.screen.scaleBlend;
    _control.screen2D.screen.scaleBlend,
      _control.screen2D.screen.referenceResolution.x,
      _control.screen2D.screen.resolution.x,
      _control.screen2D.screen.referenceResolution.y,
      _control.screen2D.screen.resolution.y;
    (this.destino = new pc.Vec3(0, 0, 0)), this.entity.translateLocal(0, 0, 0);
  }),
  (MueveScoreHud.prototype.update = function (e) {}),
  (MueveScoreHud.prototype.pone = function () {
    (this.tween = this.entity
      .tween(this.entity.getLocalPosition())
      .to(this.destino, 0.6, pc.SineOut)),
      this.tween.start();
  }),
  (MueveScoreHud.prototype.saca = function () {
    (this.tween = this.entity
      .tween(this.entity.getLocalPosition())
      .to(this.origen, 0.5, pc.SineIn)),
      this.tween.start();
  });
var AnimaMsg = pc.createScript("animaMsg");
AnimaMsg.attributes.add("destinox", {
  type: "number",
  default: 0,
  title: "destinox",
}),
  AnimaMsg.attributes.add("destinoy", {
    type: "number",
    default: 0,
    title: "destinoy",
  }),
  AnimaMsg.attributes.add("destinoz", {
    type: "number",
    default: 0,
    title: "destinoz",
  }),
  AnimaMsg.attributes.add("tiempo", {
    type: "number",
    default: 0.6,
    title: "tiempo",
  }),
  AnimaMsg.attributes.add("delaySaca", {
    type: "number",
    default: 1.8,
    title: "delaySaca",
  }),
  AnimaMsg.attributes.add("traducir", {
    type: "number",
    default: 1,
    title: "traducir",
  }),
  AnimaMsg.attributes.add("esconder", {
    type: "number",
    default: 0,
    title: "esconder",
  }),
  AnimaMsg.attributes.add("boton", {
    type: "asset",
    assetType: "texture",
    array: !0,
    title: "boton",
  }),
  AnimaMsg.attributes.add("tipoTween", {
    type: "string",
    default: "BounceOut",
    title: "tipoTween",
  }),
  (AnimaMsg.prototype.initialize = function () {
    (this.tween = null), (this.mc = this.entity);
    var t = this.entity.getLocalPosition();
    switch (
      ((this.origen = new pc.Vec3(t.x, t.y, t.z)),
      (this.destino = new pc.Vec3(this.destinox, this.destinoy, this.destinoz)),
      this.tipoTween)
    ) {
      case "BounceOut":
        this.tipoTween = pc.BounceOut;
        break;
      case "SineIn":
        this.tipoTween = pc.SineIn;
        break;
      case "SineOut":
        this.tipoTween = pc.SineOut;
        break;
      case "SineInOut":
        this.tipoTween = pc.SineInOut;
    }
    3 == this.boton.length && 1 == this.traducir && this.traduce(0),
      1 == this.esconder && (this.entity.enabled = !1);
  }),
  (AnimaMsg.prototype.clickBoton = function (t, e, i) {
    null != e
      ? (this.entity.element.texture = this.boton[i].resource)
      : ((this.entity.element.texture = this.boton[1].resource),
        setTimeout(this.restauraBoton.bind(this, t), 180));
  }),
  (AnimaMsg.prototype.restauraBoton = function (t) {
    (this.entity.element.texture = this.boton[0].resource), t();
  }),
  (AnimaMsg.prototype.Alpha = function (t, e, i) {
    this.entity.enabled = !0;
    var n = { x: e };
    (this.entity.element.opacity = e),
      this.app
        .tween(n)
        .to({ x: i }, this.tiempo, pc.Linear)
        .on(
          "update",
          function () {
            this.entity.element.opacity = n.x;
          }.bind(this)
        )
        .on("complete", t)
        .start();
  }),
  (AnimaMsg.prototype.pone1Vez = function (t) {
    this.entity.setLocalScale(1, 0, 1),
      (this.entity.enabled = !0),
      (this.tween = this.entity
        .tween(this.entity.getLocalScale())
        .to(new pc.Vec3(1, 1, 1), this.tiempo, this.tipoTween)),
      null != t && this.tween.on("complete", t),
      this.tween.start();
  }),
  (AnimaMsg.prototype.pone1VezMSG = function (t) {
    this.entity.setLocalScale(0.15, 0, 0.1),
      (this.entity.enabled = !0),
      (this.tween = this.entity
        .tween(this.entity.getLocalScale())
        .to(new pc.Vec3(0.15, 0.1, 0.1), this.tiempo, this.tipoTween)),
      null != t && this.tween.on("complete", t),
      this.tween.start();
  }),
  (AnimaMsg.prototype.pone = function (t) {
    (this.entity.enabled = !0),
      this.entity.setLocalScale(1, 0, 1),
      (this.tween = this.entity
        .tween(this.entity.getLocalScale())
        .to(new pc.Vec3(1, 1, 1), this.tiempo, this.tipoTween)
        .on("complete", this.saca.bind(this, t))),
      this.tween.start();
  }),
  (AnimaMsg.prototype.saca = function (t) {
    (this.tween = this.entity
      .tween(this.entity.getLocalScale())
      .to(new pc.Vec3(1, 0, 1), this.tiempo - 0.1, this.tipoTween)),
      null != t && this.tween.on("complete", t),
      this.tween.delay(this.delaySaca),
      this.tween.start();
  }),
  (AnimaMsg.prototype.mueve = function (t) {
    (this.entity.enabled = !0),
      (this.tween = this.entity
        .tween(this.entity.getLocalPosition())
        .to(this.destino, this.tiempo, this.tipoTween)
        .on("complete", this.sacaMueve.bind(this, t))),
      this.tween.start();
  }),
  (AnimaMsg.prototype.mueve1Vez = function (t) {
    (this.entity.enabled = !0),
      (this.tween = this.entity
        .tween(this.entity.getLocalPosition())
        .to(this.destino, this.tiempo, this.tipoTween)
        .on("complete", t)),
      this.tween.start();
  }),
  (AnimaMsg.prototype.sacaMueve = function (t) {
    null != t && t(),
      (this.tween = this.entity
        .tween(this.entity.getLocalPosition())
        .to(this.origen, this.tiempo - 0.1, this.tipoTween)),
      this.tween.delay(this.delaySaca),
      this.tween.start();
  }),
  (AnimaMsg.prototype.mueve2 = function (t) {
    this.entity.enabled = !0;
    var e = new pc.Vec3(
      (this.destino.x + this.origen.x) / 2,
      (this.destino.y + this.origen.y) / 2,
      (this.destino.z + this.origen.z) / 2
    );
    (this.tween = this.entity
      .tween(this.entity.getLocalPosition())
      .to(e, this.tiempo, this.tipoTween)
      .on("complete", this.sacaMueve2.bind(this, t))),
      this.tween.start();
  }),
  (AnimaMsg.prototype.sacaMueve2 = function (t) {
    null != t && t(),
      (this.tween = this.entity
        .tween(this.entity.getLocalPosition())
        .to(this.destino, this.tiempo - 0.1, this.tipoTween)),
      this.tween.delay(this.delaySaca),
      this.tween.on(
        "complete",
        function () {
          this.entity.setLocalPosition(this.origen), (this.entity.enabled = !1);
        }.bind(this)
      ),
      this.tween.start();
  }),
  (AnimaMsg.prototype.animaMano = function (t) {
    var e = this.tiempo,
      i = this.entity.getLocalPosition();
    if (0 == t) var n = new pc.Vec3(i.x + this.destinox, i.y, i.z);
    else if (1 == t) {
      n = new pc.Vec3(i.x - 2 * this.destinox, i.y, i.z);
      e *= 2;
    } else if (2 == t) {
      n = new pc.Vec3(i.x + 2 * this.destinox, i.y, i.z);
      e *= 2;
    }
    3 == (t += 1) && (t = 1),
      (this.entity.enabled = !0),
      (this.tween = this.mc.tween(i).to(n, e, this.tipoTween)),
      this.tween.on("complete", this.animaMano.bind(this, t)),
      this.tween.start();
  }),
  (AnimaMsg.prototype.detieneMano = function (t) {
    this.tween.stop();
  }),
  (AnimaMsg.prototype.traduce = function (t, e) {
    var i = (x = window.navigator.language || navigator.browserLanguage);
    t *= idiomas.length;
    var n = 0;
    if (
      (lenguajeManual
        ? (n = lenguajeEl)
        : -1 !== i.indexOf("de")
        ? (n = 1)
        : -1 !== i.indexOf("nl") && (n = 2),
      !0 === e)
    )
      for (var s = this.entity.model.meshInstances, o = 0; o < s.length; ++o) {
        var a = s[o];
        (a.material.diffuseMap = this.boton[t + n].resource),
          (a.material.opacityMap = this.boton[t + n].resource),
          a.material.update();
      }
    else this.entity.element.texture = this.boton[t + n].resource;
  });
var AsignaGlobal = pc.createScript("asignaGlobal");
AsignaGlobal.attributes.add("tipo", { type: "string", title: "tipo" }),
  (AsignaGlobal.prototype.initialize = function () {
    switch (this.tipo) {
      case "sonido":
        _sonidos = this.entity.sound;
        break;
      case "2dscreen":
        screen2D = this.entity;
    }
  });
pc.extend(
  pc,
  (function () {
    var t = function (t) {
      (this._app = t), (this._tweens = []), (this._add = []);
    };
    t.prototype = {
      add: function (t) {
        return this._add.push(t), t;
      },
      update: function (t) {
        for (var i = 0, e = this._tweens.length; i < e; )
          this._tweens[i].update(t) ? i++ : (this._tweens.splice(i, 1), e--);
        this._add.length &&
          ((this._tweens = this._tweens.concat(this._add)),
          (this._add.length = 0));
      },
    };
    var i = function (t, i, e) {
      pc.events.attach(this),
        (this.manager = i),
        e && (this.entity = null),
        (this.time = 0),
        (this.cambioSpeed = !1),
        (this.complete = !1),
        (this.playing = !1),
        (this.stopped = !0),
        (this.pending = !1),
        (this.target = t),
        (this.duration = 0),
        (this._currentDelay = 0),
        (this.timeScale = 1),
        (this._reverse = !1),
        (this._delay = 0),
        (this._yoyo = !1),
        (this._count = 0),
        (this._numRepeats = 0),
        (this._repeatDelay = 0),
        (this._from = !1),
        (this._slerp = !1),
        (this._fromQuat = new pc.Quat()),
        (this._toQuat = new pc.Quat()),
        (this._quat = new pc.Quat()),
        (this.easing = pc.EASE_LINEAR),
        (this._sv = {}),
        (this._ev = {});
    };
    i.prototype = {
      to: function (t, i, e, s, n, r) {
        return (
          t instanceof pc.Vec3
            ? (this._properties = { x: t.x, y: t.y, z: t.z })
            : t instanceof pc.Color
            ? ((this._properties = { r: t.r, g: t.g, b: t.b }),
              void 0 !== t.a && (this._properties.a = t.a))
            : (this._properties = t),
          (this.duration = i),
          e && (this.easing = e),
          s && this.delay(s),
          n && this.repeat(n),
          r && this.yoyo(r),
          this
        );
      },
      from: function (t, i, e, s, n, r) {
        return (
          t instanceof pc.Vec3
            ? (this._properties = { x: t.x, y: t.y, z: t.z })
            : t instanceof pc.Color
            ? ((this._properties = { r: t.r, g: t.g, b: t.b }),
              void 0 !== t.a && (this._properties.a = t.a))
            : (this._properties = t),
          (this.duration = i),
          e && (this.easing = e),
          s && this.delay(s),
          n && this.repeat(n),
          r && this.yoyo(r),
          (this._from = !0),
          this
        );
      },
      rotate: function (t, i, e, s, n, r) {
        return (
          t instanceof pc.Quat
            ? (this._properties = { x: t.x, y: t.y, z: t.z, w: t.w })
            : t instanceof pc.Vec3
            ? (this._properties = { x: t.x, y: t.y, z: t.z })
            : t instanceof pc.Color
            ? ((this._properties = { r: t.r, g: t.g, b: t.b }),
              void 0 !== t.a && (this._properties.a = t.a))
            : (this._properties = t),
          (this.duration = i),
          e && (this.easing = e),
          s && this.delay(s),
          n && this.repeat(n),
          r && this.yoyo(r),
          (this._slerp = !0),
          this
        );
      },
      start: function () {
        var t, i, e, s;
        if (
          ((this.playing = !0),
          (this.complete = !1),
          (this.stopped = !1),
          (this._count = 0),
          (this.pending = this._delay > 0),
          this._reverse && !this.pending
            ? (this.time = this.duration)
            : (this.time = 0),
          this._from)
        ) {
          for (t in this._properties)
            (this._sv[t] = this._properties[t]), (this._ev[t] = this.target[t]);
          this._slerp &&
            (this._toQuat.setFromEulerAngles(
              this.target.x,
              this.target.y,
              this.target.z
            ),
            (i =
              void 0 !== this._properties.x
                ? this._properties.x
                : this.target.x),
            (e =
              void 0 !== this._properties.y
                ? this._properties.y
                : this.target.y),
            (s =
              void 0 !== this._properties.z
                ? this._properties.z
                : this.target.z),
            this._fromQuat.setFromEulerAngles(i, e, s));
        } else {
          for (t in this._properties)
            (this._sv[t] = this.target[t]), (this._ev[t] = this._properties[t]);
          this._slerp &&
            (this._fromQuat.setFromEulerAngles(
              this.target.x,
              this.target.y,
              this.target.z
            ),
            (i =
              void 0 !== this._properties.x
                ? this._properties.x
                : this.target.x),
            (e =
              void 0 !== this._properties.y
                ? this._properties.y
                : this.target.y),
            (s =
              void 0 !== this._properties.z
                ? this._properties.z
                : this.target.z),
            this._toQuat.setFromEulerAngles(i, e, s));
        }
        return (this._currentDelay = this._delay), this.manager.add(this), this;
      },
      pause: function () {
        this.playing = !1;
      },
      resume: function () {
        this.playing = !0;
      },
      stop: function () {
        (this.playing = !1), (this.stopped = !0);
      },
      delay: function (t) {
        return (this._delay = t), (this.pending = !0), this;
      },
      repeat: function (t, i) {
        return (
          (this._count = 0),
          (this._numRepeats = t),
          (this._repeatDelay = i || 0),
          this
        );
      },
      loop: function (t) {
        return (
          t
            ? ((this._count = 0), (this._numRepeats = 1 / 0))
            : (this._numRepeats = 0),
          this
        );
      },
      yoyo: function (t) {
        return (this._yoyo = t), this;
      },
      reverse: function () {
        return (this._reverse = !this._reverse), this;
      },
      chain: function () {
        for (var t = arguments.length; t--; )
          t > 0
            ? (arguments[t - 1]._chained = arguments[t])
            : (this._chained = arguments[t]);
        return this;
      },
      update: function (t) {
        if (this.stopped) return !1;
        if (!this.playing) return !0;
        if (
          (!this._reverse || this.pending
            ? (this.time += t * this.timeScale)
            : (this.time -= t * this.timeScale),
          this.pending)
        ) {
          if (!(this.time > this._currentDelay)) return !0;
          this._reverse
            ? (this.time = this.duration - (this.time - this._currentDelay))
            : (this.time = this.time - this._currentDelay),
            (this.pending = !1);
        }
        var i = 0;
        ((!this._reverse && this.time > this.duration) ||
          (this._reverse && this.time < 0)) &&
          (this._count++,
          (this.complete = !0),
          (this.playing = !1),
          this._reverse
            ? ((i = this.duration - this.time), (this.time = 0))
            : ((i = this.time - this.duration), (this.time = this.duration)));
        var e,
          s,
          n = this.time / this.duration,
          r = this.easing(n);
        for (var h in this._properties)
          (e = this._sv[h]),
            (s = this._ev[h]),
            (this.target[h] = e + (s - e) * r);
        if (
          (this._slerp && this._quat.slerp(this._fromQuat, this._toQuat, r),
          this.entity &&
            (this.entity._dirtifyLocal(!0),
            this.element &&
              this.entity.element &&
              (this.entity.element[this.element] = this.target),
            this._slerp && this.entity.setLocalRotation(this._quat)),
          this.fire("update", t),
          this.complete)
        ) {
          var a = this._repeat(i);
          return (
            a
              ? this.fire("loop")
              : (this.fire("complete", i),
                this._chained && this._chained.start()),
            a
          );
        }
        return !0;
      },
      _repeat: function (t) {
        if (this._count < this._numRepeats) {
          if (
            (this._reverse ? (this.time = this.duration - t) : (this.time = t),
            (this.complete = !1),
            (this.playing = !0),
            (this._currentDelay = this._repeatDelay),
            (this.pending = !0),
            this._yoyo)
          ) {
            for (var i in this._properties)
              (tmp = this._sv[i]),
                (this._sv[i] = this._ev[i]),
                (this._ev[i] = tmp);
            this._slerp &&
              (this._quat.copy(this._fromQuat),
              this._fromQuat.copy(this._toQuat),
              this._toQuat.copy(this._quat));
          }
          return !0;
        }
        return !1;
      },
    };
    var e = function (t) {
        return 1 - s(1 - t);
      },
      s = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      };
    return {
      TweenManager: t,
      Tween: i,
      Linear: function (t) {
        return t;
      },
      QuadraticIn: function (t) {
        return t * t;
      },
      QuadraticOut: function (t) {
        return t * (2 - t);
      },
      QuadraticInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
      },
      CubicIn: function (t) {
        return t * t * t;
      },
      CubicOut: function (t) {
        return --t * t * t + 1;
      },
      CubicInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
      },
      QuarticIn: function (t) {
        return t * t * t * t;
      },
      QuarticOut: function (t) {
        return 1 - --t * t * t * t;
      },
      QuarticInOut: function (t) {
        return (t *= 2) < 1
          ? 0.5 * t * t * t * t
          : -0.5 * ((t -= 2) * t * t * t - 2);
      },
      QuinticIn: function (t) {
        return t * t * t * t * t;
      },
      QuinticOut: function (t) {
        return --t * t * t * t * t + 1;
      },
      QuinticInOut: function (t) {
        return (t *= 2) < 1
          ? 0.5 * t * t * t * t * t
          : 0.5 * ((t -= 2) * t * t * t * t + 2);
      },
      SineIn: function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : 1 - Math.cos((t * Math.PI) / 2);
      },
      SineOut: function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : Math.sin((t * Math.PI) / 2);
      },
      SineInOut: function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : 0.5 * (1 - Math.cos(Math.PI * t));
      },
      ExponentialIn: function (t) {
        return 0 === t ? 0 : Math.pow(1024, t - 1);
      },
      ExponentialOut: function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      },
      ExponentialInOut: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (t *= 2) < 1
          ? 0.5 * Math.pow(1024, t - 1)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
      },
      CircularIn: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      CircularOut: function (t) {
        return Math.sqrt(1 - --t * t);
      },
      CircularInOut: function (t) {
        return (t *= 2) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      BackIn: function (t) {
        return t * t * (2.70158 * t - 1.70158);
      },
      BackOut: function (t) {
        return --t * t * (2.70158 * t + 1.70158) + 1;
      },
      BackInOut: function (t) {
        var i = 2.5949095;
        return (t *= 2) < 1
          ? t * t * ((i + 1) * t - i) * 0.5
          : 0.5 * ((t -= 2) * t * ((i + 1) * t + i) + 2);
      },
      BounceIn: e,
      BounceOut: s,
      BounceInOut: function (t) {
        return t < 0.5 ? 0.5 * e(2 * t) : 0.5 * s(2 * t - 1) + 0.5;
      },
      ElasticIn: function (t) {
        var i,
          e = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!e || e < 1
              ? ((e = 1), (i = 0.1))
              : (i = (0.4 * Math.asin(1 / e)) / (2 * Math.PI)),
            -e *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t - i) * (2 * Math.PI)) / 0.4));
      },
      ElasticOut: function (t) {
        var i,
          e = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!e || e < 1
              ? ((e = 1), (i = 0.1))
              : (i = (0.4 * Math.asin(1 / e)) / (2 * Math.PI)),
            e *
              Math.pow(2, -10 * t) *
              Math.sin(((t - i) * (2 * Math.PI)) / 0.4) +
              1);
      },
      ElasticInOut: function (t) {
        var i,
          e = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!e || e < 1
              ? ((e = 1), (i = 0.1))
              : (i = (0.4 * Math.asin(1 / e)) / (2 * Math.PI)),
            (t *= 2) < 1
              ? e *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t - i) * (2 * Math.PI)) / 0.4) *
                -0.5
              : e *
                  Math.pow(2, -10 * (t -= 1)) *
                  Math.sin(((t - i) * (2 * Math.PI)) / 0.4) *
                  0.5 +
                1);
      },
    };
  })()
),
  (function () {
    var t = pc.Application.getApplication();
    t &&
      ((t._tweenManager = new pc.TweenManager(t)),
      t.on("update", function (i) {
        t._tweenManager.update(i);
      }),
      (pc.Application.prototype.tween = function (t) {
        return new pc.Tween(t, this._tweenManager);
      }),
      (pc.Entity.prototype.tween = function (t, i) {
        var e = this._app.tween(t);
        return (
          (e.entity = this),
          this.on("destroy", function () {
            e.stop();
          }),
          i && i.element && (e.element = i.element),
          e
        );
      }));
  })();
var _sonidos,
  _app,
  currentLevel,
  currentIndexLevel,
  machine = null,
  orbitCamera = null,
  setLevels = "134-1-75-76-77-78",
  atraccion = !1,
  b_InputEspejo = !1,
  _control = null,
  screen2D = null,
  _levels = null,
  _menu = null,
  _fps = null,
  hiloFinal = null,
  toleranciaSwipe = 50,
  numTiro = 0,
  pelotaY = 0.1,
  esGol = !1,
  reaccionArquero = 4,
  esperaFinal = 2e3,
  elFinal = !1,
  bolaLanzada = 0,
  atajada = !1,
  tiempoDeTiro = 2850,
  distanciaBalon = 0,
  sentidoVolante = 0,
  sentidoElegido = 0,
  volanteReal = 0,
  speedVolante = 0,
  volanteInicial = 3,
  aplausos = !1,
  efecto = !0,
  enArena = !1,
  enRampa = !1,
  muteSound = 0,
  tiempoJuego = ((elFinal = !1), 0),
  tiempoJuegoLimite = 120,
  finTiempo = !1,
  colorParpadeo = "#ff0000",
  colorNormal = "#ffffff",
  pause = !1,
  _globalScore = 0,
  skipMenu = !1,
  muteSoundAux = 0,
  timeToStartGame = 0,
  hitBlanco = !1,
  sinBlancos = !1,
  arqueroAtaja = "",
  arqueroAtajo = !1,
  hitBarrera = !1,
  sonidoGol = !1,
  permitirTrail = !1,
  sentidoBola = "",
  puntoScore = 800,
  puntoScoreFacil = 1e3,
  puntoScoreMedio = 2e3,
  puntoScoreDificil = 3e3,
  scoreMoneda = 100,
  enGameOver = !1,
  texturasDinamicasLoad = 0,
  texturaArqueroLoad = !1,
  totalTexturasDinamicas = 4,
  gameID = "641812",
  vibrar = !1,
  deltaTime = 0.016,
  jsonLevel = null,
  tematicasElegidas = [],
  totalLevels = 78,
  maximoLevels = 12,
  totalTematicas = 3,
  calidad = "alta",
  currentGamePlay = "",
  idiomas = ["EN", "GER", "DUTCH"],
  posiblesIdiomas = [
    "af",
    "sq",
    "ar-SA",
    "ar-IQ",
    "ar-EG",
    "ar-LY",
    "ar-DZ",
    "ar-MA",
    "ar-TN",
    "ar-OM",
    "ar-YE",
    "ar-SY",
    "ar-JO",
    "ar-LB",
    "ar-KW",
    "ar-AE",
    "ar-BH",
    "ar-QA",
    "eu",
    "bg",
    "be",
    "ca",
    "zh-TW",
    "zh-CN",
    "zh-HK",
    "zh-SG",
    "hr",
    "cs",
    "da",
    "nl",
    "nl-BE",
    "en",
    "en-US",
    "en-EG",
    "en-AU",
    "en-GB",
    "en-CA",
    "en-NZ",
    "en-IE",
    "en-ZA",
    "en-JM",
    "en-BZ",
    "en-TT",
    "et",
    "fo",
    "fa",
    "fi",
    "fr",
    "fr-BE",
    "fr-CA",
    "fr-CH",
    "fr-LU",
    "gd",
    "gd-IE",
    "de",
    "de-CH",
    "de-AT",
    "de-LU",
    "de-LI",
    "el",
    "he",
    "hi",
    "hu",
    "is",
    "id",
    "it",
    "it-CH",
    "ja",
    "ko",
    "lv",
    "lt",
    "mk",
    "mt",
    "no",
    "pl",
    "pt-BR",
    "pt",
    "rm",
    "ro",
    "ro-MO",
    "ru",
    "ru-MI",
    "sz",
    "sr",
    "sk",
    "sl",
    "sb",
    "es",
    "es-AR",
    "es-GT",
    "es-CR",
    "es-PA",
    "es-DO",
    "es-MX",
    "es-VE",
    "es-CO",
    "es-PE",
    "es-EC",
    "es-CL",
    "es-UY",
    "es-PY",
    "es-BO",
    "es-SV",
    "es-HN",
    "es-NI",
    "es-PR",
    "sx",
    "sv",
    "sv-FI",
    "th",
    "ts",
    "tn",
    "tr",
    "uk",
    "ur",
    "ve",
    "vi",
    "xh",
    "ji",
    "zu",
  ],
  perm = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
    36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120,
    234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71,
    134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133,
    230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161,
    1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130,
    116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250,
    124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227,
    47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44,
    154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
    108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34,
    242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14,
    239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121,
    50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243,
    141, 128, 195, 78, 66, 215, 61, 156, 180, 151,
  ],
  levelSequense = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
    158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
    173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
    188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202,
    203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
    218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
    233, 234,
  ],
  _sequence = [],
  niveles_base = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
    66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
    85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102,
    103,
  ],
  niveles = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [10, 0],
    [11, 0],
    [12, 0],
    [13, 0],
    [14, 0],
    [15, 0],
    [16, 0],
    [17, 0],
    [18, 0],
    [19, 0],
    [20, 0],
    [21, 0],
    [22, 0],
    [23, 0],
    [24, 0],
    [25, 0],
    [26, 0],
    [27, 0],
    [28, 0],
    [29, 0],
    [30, 0],
    [31, 0],
    [32, 0],
    [33, 0],
    [34, 0],
    [35, 0],
    [36, 0],
    [37, 0],
    [38, 0],
    [39, 0],
    [40, 0],
    [41, 0],
    [42, 0],
    [43, 0],
    [44, 0],
    [45, 0],
    [46, 0],
    [47, 0],
    [48, 0],
    [49, 0],
    [50, 0],
    [51, 0],
    [52, 0],
    [53, 0],
    [54, 0],
    [55, 0],
    [56, 0],
    [57, 0],
    [58, 0],
    [59, 0],
    [60, 0],
    [61, 0],
    [62, 0],
    [63, 0],
    [64, 0],
    [65, 0],
    [66, 0],
    [67, 0],
    [68, 0],
    [69, 0],
    [70, 0],
    [71, 0],
    [72, 0],
    [73, 0],
    [74, 0],
    [75, 0],
    [76, 0],
    [77, 0],
    [78, 1],
    [79, 1],
    [80, 1],
    [81, 1],
    [82, 1],
    [83, 1],
    [84, 1],
    [85, 1],
    [86, 1],
    [87, 1],
    [88, 1],
    [89, 1],
    [90, 1],
    [91, 1],
    [92, 1],
    [93, 1],
    [94, 1],
    [95, 1],
    [96, 1],
    [97, 1],
    [98, 1],
    [99, 1],
    [100, 1],
    [101, 1],
    [102, 1],
    [103, 1],
    [104, 1],
    [105, 1],
    [106, 1],
    [107, 1],
    [108, 1],
    [109, 1],
    [110, 1],
    [111, 1],
    [112, 1],
    [113, 1],
    [114, 1],
    [115, 1],
    [116, 1],
    [117, 1],
    [118, 1],
    [119, 1],
    [120, 1],
    [121, 1],
    [122, 1],
    [123, 1],
    [124, 1],
    [125, 1],
    [126, 1],
    [127, 1],
    [128, 1],
    [129, 1],
    [130, 1],
    [131, 1],
    [132, 1],
    [133, 1],
    [134, 1],
    [135, 1],
    [136, 1],
    [137, 1],
    [138, 1],
    [139, 1],
    [140, 1],
    [141, 1],
    [142, 1],
    [143, 1],
    [144, 1],
    [145, 1],
    [146, 1],
    [147, 1],
    [148, 1],
    [149, 1],
    [150, 1],
    [151, 1],
    [152, 1],
    [153, 1],
    [154, 1],
    [155, 1],
    [156, 2],
    [157, 2],
    [158, 2],
    [159, 2],
    [160, 2],
    [161, 2],
    [162, 2],
    [163, 2],
    [164, 2],
    [165, 2],
    [166, 2],
    [167, 2],
    [168, 2],
    [169, 2],
    [170, 2],
    [171, 2],
    [172, 2],
    [173, 2],
    [174, 2],
    [175, 2],
    [176, 2],
    [177, 2],
    [178, 2],
    [179, 2],
    [180, 2],
    [181, 2],
    [182, 2],
    [183, 2],
    [184, 2],
    [185, 2],
    [186, 2],
    [187, 2],
    [188, 2],
    [189, 2],
    [190, 2],
    [191, 2],
    [192, 2],
    [193, 2],
    [194, 2],
    [195, 2],
    [196, 2],
    [197, 2],
    [198, 2],
    [199, 2],
    [200, 2],
    [201, 2],
    [202, 2],
    [203, 2],
    [204, 2],
    [205, 2],
    [206, 2],
    [207, 2],
    [208, 2],
    [209, 2],
    [210, 2],
    [211, 2],
    [212, 2],
    [213, 2],
    [214, 2],
    [215, 2],
    [216, 2],
    [217, 2],
    [218, 2],
    [219, 2],
    [220, 2],
    [221, 2],
    [222, 2],
    [223, 2],
    [224, 2],
    [225, 2],
    [226, 2],
    [227, 2],
    [228, 2],
    [229, 2],
    [230, 2],
    [231, 2],
    [232, 2],
    [233, 2],
    [234, 2],
  ];
function iniVars() {
  (vibrar = !1),
    (sonidoGol = !1),
    (hitBarrera = !1),
    (hitBlanco = !1),
    (sinBlancos = !1),
    (esGol = !1),
    (elFinal = !1),
    (bolaLanzada = 0),
    (atajada = !1),
    (distanciaBalon = 0),
    (sentidoVolante = 0),
    (volanteReal = 0),
    (sentidoElegido = 0),
    (speedVolante = 0),
    (bajada = 0),
    (efecto = !0),
    (sentidoBola = ""),
    (aplausos = !1),
    (arqueroAtaja = ""),
    (arqueroAtajo = !1),
    (permitirTrail = !1);
}
function getTematica(e) {
  return 0 == e ? "bosque" : 2 == e ? "nieve" : 1 == e ? "desierto" : void 0;
}
function estaEnArray(e, a) {
  for (var s = 0; s < a.length; s++) if (a[s] == e) return !0;
  return !1;
}
function reproduceAnim(e, a, s, n, o, t) {
  null != s && (e.animation.speed = s), (e.animation.loop = n);
  var i = e.animation.assets[a],
    c = e.animation.animationsIndex[i];
  e.animation.play(c),
    o &&
      setTimeout(function () {
        e.enabled = !1;
      }, t);
}
function asignaEventos(e, a, s, n) {
  var o = [];
  switch ((null != e.element && (e = e.element), s)) {
    case 1:
      (o[0] = "touchstart"), (o[1] = "mousedown");
      break;
    case 2:
      (o[0] = "touchend"), (o[1] = "mouseup");
      break;
    case 3:
      (o[0] = "touchmove"), (o[1] = "mousemove");
  }
  a ? (isMobile.any() ? e.on(o[0], n) : e.on(o[1], n)) : e.off();
}
function nivelesFaciles(e) {
  switch (e) {
    case 1:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 26:
    case 27:
    case 28:
      return !0;
  }
  return !1;
}
function nivelesMedios(e) {
  switch (e) {
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
      return !0;
  }
  return !1;
}
function nivelesDificiles(e) {
  switch (e) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 39:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
      return !0;
  }
  return !1;
}
function setPause(e) {
  e
    ? ((pause = !0),
      (muteSoundAux = muteSound),
      (muteSound = 1),
      null != _sonidos &&
        ((_sonidos.slot("musicInGame").volume = 0),
        (_sonidos.slot("musicaMenu").volume = 0)))
    : ((pause = !1),
      0 == (muteSound = muteSoundAux) &&
        null != _sonidos &&
        ((_sonidos.slot("musicInGame").volume = 0.38),
        (_sonidos.slot("musicaMenu").volume = 0.4)));
}
function setGameTime(e) {
  tiempoJuego = e / 1e3;
}
function isset(e) {
  return void 0 !== e;
}
function onPause() {}
function onResume() {}
function mute(e) {
  (muteSound = e), mutearMusicas();
}
function tocaSonido(e) {
  0 == muteSound && _sonidos.play(e);
}
function mutearMusicas() {
  1 == muteSound
    ? (_sonidos.slot("music").volume = 0)
    : 0 == muteSound && (_sonidos.slot("music").volume = 0.225);
}
function cargaTextura(e, a, s, n) {
  _app.loader.getHandler("texture").crossOrigin = "anonymous";
  var o = new pc.Asset("foto" + Math.round(1e3 * Math.random()), "texture", {
    url: e,
  });
  _app.assets.add(o),
    _app.assets.load(o),
    o.on("load", function (e) {
      if (s) {
        "arquero" == a.name && (texturaArqueroLoad = !0);
        for (var o = a.model.meshInstances, t = 0; t < o.length; ++t) {
          ((i = o[t]).material.diffuseMap = e.resource), i.material.update();
        }
        if (null != n)
          for (o = n.model.meshInstances, t = 0; t < o.length; ++t) {
            var i;
            ((i = o[t]).material.diffuseMap = e.resource),
              (i.material.opacityMap = e.resource),
              i.material.update();
          }
      } else (a.element.textureAsset = e), (a.enabled = !0);
      texturasDinamicasLoad += 1;
    });
}
function generateLevel(e) {
  for (var a = "", s = 0, n = 0; n < e.length; n++)
    "-" == e[n]
      ? ((_sequence[s] = a), (a = ""), (s += 1))
      : n == e.length - 1
      ? ((a += e[n]), (_sequence[s] = a), (a = ""), (s += 1))
      : (a += e[n]);
}
(String.prototype.toHHMMSS = function () {
  var e = parseInt(this, 10),
    a = Math.floor(e / 3600),
    s = Math.floor((e - 3600 * a) / 60),
    n = e - 3600 * a - 60 * s;
  return (
    a < 10 && (a = "0" + a),
    s < 10 && (s = "" + s),
    n < 10 && (n = "0" + n),
    s + ":" + n
  );
}),
  document.addEventListener("pause", onPause, !1),
  document.addEventListener("resume", onResume, !1),
  (window.onblur = function () {}),
  (window.onclick = function () {
    this.focus();
  }),
  (window.onfocus = function () {});
var AnimaUvs = pc.createScript("animaUvs");
AnimaUvs.attributes.add("material", {
  type: "asset",
  assetType: "material",
  array: !1,
}),
  AnimaUvs.attributes.add("speed", {
    type: "number",
    default: 0.01,
    title: "speed",
  }),
  AnimaUvs.attributes.add("eje", {
    type: "number",
    default: 0,
    title: "ejeX_o_Y",
  }),
  AnimaUvs.attributes.add("loop", {
    type: "number",
    default: 1,
    title: "LOOP",
  }),
  AnimaUvs.attributes.add("desde", {
    type: "number",
    default: 0,
    title: "desde",
  }),
  AnimaUvs.attributes.add("hasta", {
    type: "number",
    default: 1,
    title: "hasta",
  }),
  AnimaUvs.attributes.add("tipoMaterial", {
    type: "string",
    default: "opacityMapOffset",
    title: "opacityMapOffset",
  }),
  AnimaUvs.attributes.add("tipoMaterial2", {
    type: "string",
    default: "",
    title: "diffuseMapOffset",
  }),
  AnimaUvs.attributes.add("tipoMaterial3", {
    type: "string",
    default: "",
    title: "emissiveMapOffset",
  }),
  (AnimaUvs.prototype.initialize = function () {
    this.materialCargado = this.material.resource;
  }),
  (AnimaUvs.prototype.resetMaterial = function (t) {
    (this.materialCargado[this.tipoMaterial] = new pc.Vec2(0, 0)),
      this.materialCargado.update(),
      (this.entity.enabled = !0),
      (this.eje = t);
  }),
  (AnimaUvs.prototype.update = function (t) {
    var a;
    switch (this.tipoMaterial) {
      case "opacityMapOffset":
        a = this.materialCargado.opacityMapOffset;
        break;
      case "diffuseMapOffset":
        a = this.materialCargado.diffuseMapOffset;
        break;
      case "emissiveMapOffset":
        a = this.materialCargado.emissiveMapOffset;
    }
    if (0 == this.eje)
      (e = a.y - t * this.speed) < 0 &&
        (0 == this.loop ? ((e = 0), (this.eje = -99)) : (e = 1)),
        (this.materialCargado[this.tipoMaterial] = new pc.Vec2(0, e)),
        "" != this.tipoMaterial2 &&
          (this.materialCargado[this.tipoMaterial2] = new pc.Vec2(0, e)),
        "" != this.tipoMaterial3 &&
          (this.materialCargado[this.tipoMaterial3] = new pc.Vec2(0, e)),
        this.materialCargado.update();
    else if (1 == this.eje) {
      var e;
      (e = a.x + t * this.speed) > this.hasta &&
        (0 == this.loop
          ? ((e = this.hasta),
            (this.eje = -99),
            setTimeout(this.apagaObjeto.bind(this), 20))
          : (e = this.desde)),
        (this.materialCargado[this.tipoMaterial] = new pc.Vec2(e, 0)),
        "" != this.tipoMaterial2 &&
          (this.materialCargado[this.tipoMaterial2] = new pc.Vec2(e, 0)),
        "" != this.tipoMaterial3 &&
          (this.materialCargado[this.tipoMaterial3] = new pc.Vec2(e, 0)),
        this.materialCargado.update();
    }
  }),
  (AnimaUvs.prototype.apagaObjeto = function () {
    this.entity.enabled = !1;
  });
var AnimaTexturas = pc.createScript("animaTexturas");
AnimaTexturas.attributes.add("texturas", {
  type: "asset",
  assetType: "texture",
  array: !0,
  title: "texturas",
}),
  AnimaTexturas.attributes.add("material", {
    type: "asset",
    assetType: "material",
    array: !1,
  }),
  AnimaTexturas.attributes.add("loop", {
    type: "number",
    default: 0,
    title: "loop",
  }),
  AnimaTexturas.attributes.add("autoAnim", {
    type: "number",
    default: 0,
    title: "autoAnim",
  }),
  AnimaTexturas.attributes.add("texture3D", {
    type: "number",
    default: 0,
    title: "texture3D",
  }),
  AnimaTexturas.attributes.add("frames", {
    type: "number",
    default: 60,
    title: "frames",
  }),
  (AnimaTexturas.prototype.initialize = function () {
    this.entity;
    var a = [
      this.entity,
      this.texturas,
      0,
      this.texturas.length,
      !1,
      0,
      0,
      0,
      !1,
    ];
    (this.cont = 0),
      (this.arrayAnimaciones = []),
      (this.arrayAnimaciones[0] = a),
      (this.callBack = null),
      1 == this.autoAnim &&
        (1 == this.loop && (this.arrayAnimaciones[0][8] = !0),
        (this.arrayAnimaciones[0][4] = !0));
  }),
  (AnimaTexturas.prototype.getCurrentFrame = function (a) {
    return null == this.arrayAnimaciones ? null : this.arrayAnimaciones[a][5];
  }),
  (AnimaTexturas.prototype.inicioAnim = function (a, i, t) {
    (this.callBack = a), (this.cont = 0);
    var r = [
      this.entity,
      this.texturas,
      0,
      this.texturas.length,
      !1,
      0,
      0,
      0,
      !1,
    ];
    if (((this.cont = 0), null != i && null != t))
      (this.arrayAnimaciones[0][2] = i), (this.arrayAnimaciones[0][3] = t);
    else {
      r = [
        this.entity,
        this.texturas,
        0,
        this.texturas.length,
        !1,
        0,
        0,
        0,
        !1,
      ];
      (this.arrayAnimaciones = []), (this.arrayAnimaciones[0] = r);
    }
    (this.cont = 0),
      (this.entity.element.texture =
        this.texturas[this.arrayAnimaciones[0][2]].resource),
      (this.arrayAnimaciones[0][4] = !0),
      1 == this.loop && (this.arrayAnimaciones[0][8] = !0);
  }),
  (AnimaTexturas.prototype.cambiaFrame = function (a) {
    null != this.arrayAnimaciones &&
      ((this.arrayAnimaciones[0][4] = !1),
      (this.entity.element.texture = this.arrayAnimaciones[0][1][a].resource));
  }),
  (AnimaTexturas.prototype.stopAnim = function () {
    this.arrayAnimaciones[0][4] = !1;
  }),
  (AnimaTexturas.prototype.update = function (a) {
    var i = a,
      t = 1 / i;
    this.cont = this.cont + i;
    var r = t / this.frames;
    if (((r /= t), this.cont >= r)) {
      this.cont = 0;
      for (var e = 0; e < this.arrayAnimaciones.length; e++)
        if (1 == this.arrayAnimaciones[e][4]) {
          var s;
          if (0 == this.arrayAnimaciones[e][7])
            0 == (s = this.arrayAnimaciones[e][5]) &&
              (s = this.arrayAnimaciones[e][2]),
              0 == this.texture3D
                ? (this.arrayAnimaciones[e][0].element.texture =
                    this.arrayAnimaciones[e][1][s].resource)
                : this.cambiaTextura3D(this.arrayAnimaciones[e][1][s].resource),
              (this.arrayAnimaciones[e][5] = this.arrayAnimaciones[e][5] + 1),
              (s = this.arrayAnimaciones[e][5]) ==
                this.arrayAnimaciones[e][3] &&
                (0 == this.arrayAnimaciones[e][6]
                  ? this.arrayAnimaciones[e][8]
                    ? (this.arrayAnimaciones[e][5] = 1)
                    : ((this.arrayAnimaciones[e][4] = !1),
                      (this.arrayAnimaciones[e][5] = 0),
                      null != this.callBack && this.callBack())
                  : 2 == this.arrayAnimaciones[e][6] &&
                    (this.arrayAnimaciones[e][7] = 1));
          if (1 == this.arrayAnimaciones[e][7])
            (s = this.arrayAnimaciones[e][5]) == this.arrayAnimaciones[e][3] &&
              ((s = this.arrayAnimaciones[e][3] - 2),
              (this.arrayAnimaciones[e][5] = s)),
              0 == this.texture3D
                ? (this.arrayAnimaciones[e][0].element.texture =
                    this.arrayAnimaciones[e][1][s].resource)
                : this.cambiaTextura3D(this.arrayAnimaciones[e][1][s].resource),
              (this.arrayAnimaciones[e][5] = this.arrayAnimaciones[e][5] - 1),
              (s = this.arrayAnimaciones[e][5]) ==
                this.arrayAnimaciones[e][2] - 1 &&
                ((this.arrayAnimaciones[e][4] = !1),
                (this.arrayAnimaciones[e][5] = 0),
                2 == this.arrayAnimaciones[e][6] &&
                  (this.arrayAnimaciones[e][7] = 0));
        }
    }
  }),
  (AnimaTexturas.prototype.cambiaTextura3D = function (a) {
    if (null == this.material)
      for (var i = this.entity.model.meshInstances, t = 0; t < i.length; ++t) {
        var r = i[t];
        (r.material.diffuseMap = a),
          (r.material.opacityMap = a),
          r.material.update();
      }
    else
      (this.material.resource.diffuseMap = a),
        (this.material.resource.opacityMap = a),
        this.material.resource.update();
  });
var AnimaAlfa3d = pc.createScript("animaAlfa3d");
AnimaAlfa3d.attributes.add("material", {
  type: "asset",
  assetType: "material",
  array: !1,
}),
  AnimaAlfa3d.attributes.add("speed", {
    type: "number",
    default: 0.01,
    title: "speed",
  }),
  AnimaAlfa3d.attributes.add("desde", {
    type: "number",
    default: 0,
    title: "desde",
  }),
  AnimaAlfa3d.attributes.add("hasta", {
    type: "number",
    default: 1,
    title: "hasta",
  }),
  AnimaAlfa3d.attributes.add("delay", {
    type: "number",
    default: 0,
    title: "delay",
  }),
  AnimaAlfa3d.attributes.add("loop", {
    type: "number",
    default: 1,
    title: "LOOP",
  }),
  AnimaAlfa3d.attributes.add("apagaAlTerminar", {
    type: "number",
    default: 1,
    title: "apagaAlTerminar",
  }),
  AnimaAlfa3d.attributes.add("tipoMaterial", {
    type: "string",
    default: "opacity",
    title: "opacity",
  }),
  AnimaAlfa3d.attributes.add("finAnim", {
    type: "number",
    default: 1,
    title: "finAnim",
  }),
  (AnimaAlfa3d.prototype.initialize = function () {
    (this.sentido = 0),
      (this.contadorDelay = 0),
      (this.materialCargado = this.material.resource),
      this.desde < this.hasta ? (this.sentido = 1) : (this.sentido = -1),
      this.resetMaterial();
  }),
  (AnimaAlfa3d.prototype.empiezaAnim = function (t, a, i, e) {
    (this.entity.enabled = !0),
      (this.desde = t),
      (this.hasta = a),
      null != i && (this.delay = i),
      null != e && (this.speed = e),
      this.desde < this.hasta ? (this.sentido = 1) : (this.sentido = -1),
      (this.contadorDelay = 0),
      this.resetMaterial(),
      (this.finAnim = 0);
  }),
  (AnimaAlfa3d.prototype.resetMaterial = function (t) {
    (this.materialCargado[this.tipoMaterial] = this.desde),
      this.materialCargado.update();
  }),
  (AnimaAlfa3d.prototype.update = function (t) {
    if (1 != this.finAnim)
      if (this.contadorDelay < this.delay)
        this.contadorDelay = this.contadorDelay + t;
      else {
        var a,
          i = this.materialCargado.opacity,
          e = !1;
        (a = -1 == this.sentido ? i - t * this.speed : i + t * this.speed) <= 0
          ? ((e = !0), (a = 0))
          : a >= 1 && ((e = !0), (a = 1)),
          (this.materialCargado[this.tipoMaterial] = a),
          this.materialCargado.update(),
          e &&
            (1 == this.loop
              ? this.empiezaAnim(this.desde, this.hasta)
              : ((this.finAnim = 1),
                setTimeout(this.apagaObjeto.bind(this), 0.1)));
      }
  }),
  (AnimaAlfa3d.prototype.apagaObjeto = function () {
    1 == this.finAnim && (this.entity.enabled = !1);
  }),
  (AnimaAlfa3d.prototype.terminaAnim = function () {
    this.finAnim = 1;
  });
var AlphaConVelocidad = pc.createScript("alphaConVelocidad");
AlphaConVelocidad.attributes.add("tiempoEspera", {
  type: "number",
  default: 0.9,
  title: "tiempoEspera",
}),
  AlphaConVelocidad.attributes.add("tiempo", {
    type: "number",
    default: 0,
    title: "tiempo",
  }),
  AlphaConVelocidad.attributes.add("fadeTipo", {
    type: "number",
    default: 1,
    title: "fadeTipo",
  }),
  (AlphaConVelocidad.prototype.initialize = function () {}),
  (AlphaConVelocidad.prototype.update = function (e) {
    (this.tiempo = this.tiempo + e),
      this.tiempo >= this.tiempoEspera &&
        ((this.tiempo = 0),
        this.entity.element.enabled
          ? (this.entity.element.enabled = !1)
          : (this.entity.element.enabled = !0));
  });
var Parpadear = pc.createScript("parpadear");
Parpadear.attributes.add("tiempoDesaparicion", {
  type: "number",
  default: 0.85,
  title: "tiempoDesaparicion",
}),
  Parpadear.attributes.add("tiempoAparicion", {
    type: "number",
    default: 0.45,
    title: "tiempoAparicion",
  }),
  Parpadear.attributes.add("autoStart", {
    type: "number",
    default: 1,
    title: "autoStart",
  }),
  (Parpadear.prototype.initialize = function () {
    this.contador = 0;
  }),
  (Parpadear.prototype.update = function (t) {
    0 != this.autoStart &&
      ((this.contador = this.contador + t),
      this.entity.element.enabled
        ? this.contador > this.tiempoDesaparicion &&
          ((this.contador = 0), (this.entity.element.enabled = !1))
        : this.entity.element.enabled ||
          (this.contador > this.tiempoAparicion &&
            ((this.contador = 0),
            (this.entity.element.enabled = !0),
            2 == this.autoStart && (this.autoStart = 0))));
  });
var Shake = pc.createScript("shake");
Shake.attributes.add("cameraFake", { type: "entity", title: "cameraFake" }),
  (Shake.prototype.initialize = function () {
    (this.timer = 0),
      (this.shaking = !1),
      (this.amplitude = 1),
      (this.duration = 0),
      (this.frequency = 10),
      (this.x = 0),
      (this.y = 0),
      (this.z = 0),
      (this.offset = new pc.Vec3()),
      (this.position = new pc.Vec3());
  }),
  (Shake.prototype.reset = function () {
    (this.shaking = !1), this.offset.set(0, 0, 0), (vibrar = -1);
  }),
  (Shake.prototype.shake = function (t, i) {
    this.shaking ||
      ((this.amplitude = t),
      (this.duration = i),
      (this.timer = 0),
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.lastTargetPosition = this.entity.getLocalPosition().clone()),
      this.position.copy(this.entity.getLocalPosition()),
      (this.shaking = !0));
  }),
  (Shake.prototype.update = function (t) {
    if (this.shaking) {
      var i = new pc.Vec3(),
        e = this.cameraFake.getPosition().clone();
      i.copy(e);
      var s = this.getShake(t);
      if (!s) return;
      i.add(s), this.entity.setPosition(i);
    }
  }),
  (Shake.prototype.getShake = function (t) {
    if (this.shaking) {
      var i = 1 - this.timer / this.duration;
      if (
        ((this.offset.x = this.getNoise(this.x) * this.amplitude * i),
        (this.offset.y = this.getNoise(this.y) * this.amplitude * i),
        (this.offset.z = this.getNoise(this.z) * this.amplitude * i),
        (this.timer += t),
        this.timer > this.duration)
      )
        return this.reset(), !1;
      i = this.frequency * t;
      (this.x += i), (this.y += i), (this.z += i);
    } else this.offset.set(0, 0, 0);
    return this.offset;
  }),
  (Shake.prototype.fade = function (t) {
    return t * t * t * (t * (6 * t - 15) + 10);
  }),
  (Shake.prototype.lerp = function (t, i, e) {
    return i + t * (e - i);
  }),
  (Shake.prototype.getNoise = function (t) {
    var i = Math.floor(t);
    t -= i;
    var e = this.fade(t),
      s = 1 & perm[i] ? t : -t,
      h = 1 & perm[i + 1] ? t - 1 : 1 - t;
    return this.lerp(e, s, h);
  });
var LoadScript = pc.createScript("loadScript");
LoadScript.attributes.add("preLoadLevel", {
  type: "string",
  default: "1",
  title: "PreLoadLevel",
}),
  LoadScript.attributes.add("tiles", { type: "entity" }),
  LoadScript.attributes.add("textAsset", { type: "asset" }),
  LoadScript.attributes.add("materiales", {
    type: "asset",
    assetType: "material",
    array: !0,
    title: "materiales",
  }),
  LoadScript.attributes.add("cameraGuide", { type: "entity" }),
  LoadScript.attributes.add("cameraGiro", { type: "entity" }),
  LoadScript.attributes.add("cameraLerp", { type: "number" }),
  LoadScript.attributes.add("debugMeshes", { type: "boolean" }),
  LoadScript.attributes.add("boton_click", {
    type: "entity",
    title: "boton_click",
  }),
  LoadScript.attributes.add("indicador_fuerza", {
    type: "entity",
    title: "indicador_fuerza",
  }),
  LoadScript.attributes.add("indicador_bola", {
    type: "entity",
    title: "indicador_bola",
  }),
  LoadScript.attributes.add("bola_principal", {
    type: "entity",
    title: "bola_principal",
  }),
  LoadScript.attributes.add("camara_componente", {
    type: "entity",
    title: "camara_componente",
  }),
  LoadScript.attributes.add("screen2D", { type: "entity", title: "screen2D" }),
  LoadScript.attributes.add("trail", { type: "entity", title: "trail" }),
  LoadScript.attributes.add("pisos", { type: "entity", title: "pisos" }),
  LoadScript.attributes.add("domos", { type: "entity", title: "domos" }),
  LoadScript.attributes.add("seguidor", { type: "entity", title: "seguidor" }),
  LoadScript.attributes.add("tilesAdornoStandard", {
    type: "entity",
    array: !0,
    title: "tilesAdornoStandard",
  }),
  (LoadScript.prototype.initialize = function () {
    (this.piso = null),
      (this.levelDebug = this.app.root.findByName("levelDebug")),
      (this.levelDebug.enabled = !1),
      (_control = this),
      (machine = this),
      (this.gameOver = !1),
      (this.gameInit = !1),
      (this.ball = this.app.root.findByName("Ball_white")),
      (this.hiloStart = null),
      (this.enPosibleReset = !1),
      (this.ball.rigidbody.enabled = !1),
      this.init();
  }),
  (LoadScript.prototype.init = function () {
    if (randomLevels) {
      for (var e = "", i = 1; i < maximoLevels; i++) {
        var t = Math.floor(Math.random() * totalLevels * totalTematicas);
        0 == t && (t = 1), i == maximoLevels - 1 ? (e += t) : (e = e + t + "-");
      }
      setLevels = e;
    }
    (tematicasElegidas = []),
      this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this),
      this.app.keyboard.off(pc.EVENT_KEYUP, this.onKeyUp, this),
      isMobile.any()
        ? (this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this),
          this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this),
          this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this))
        : (this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this),
          this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this),
          this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this),
          document.addEventListener("mouseout", this.onMouseUp.bind(this))),
      this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this),
      this.app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this),
      isMobile.any()
        ? (this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this),
          this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this),
          this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this))
        : (this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this),
          this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this),
          this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this),
          document.addEventListener("mouseout", this.onMouseUp.bind(this))),
      (this.bolaFuera = !1),
      (this.enBolaFuera = !1),
      (machine.b_DisparoEjecutado = !0),
      (tiempoJuego = tiempoJuegoLimite + 2),
      (this.speedCamera = 2),
      (this.lerpedPosition = new pc.Vec3()),
      (this.targetCameraPosition = new pc.Vec3()),
      (this.b_FirstClickNotDone = !1),
      (this.camaraYaCargo = !1),
      (this.puedeDispararDefinivamente = !1),
      (this.b_FrozeGame = !1),
      (this.cuantosTiros = 0),
      (this.cronometro = null),
      (this.segundos = 0),
      (this.timeString = ""),
      (this.lastTouchPosition = { x: 0, y: 0 }),
      (this.indexNivelActual = 0),
      (this.arregloNivel = setLevels.split("-")),
      console.log(this.arregloNivel),
      (this.arregloNivelAux = []);
    for (i = 0; i < this.arregloNivel.length; i++) {
      var o = this.arregloNivel[i] - 1,
        s = niveles[o],
        a = s[0],
        n = s[1];
      a >= 2 * totalLevels
        ? (a -= 2 * totalLevels)
        : a >= totalLevels && (a -= totalLevels);
      var r = niveles_base[a];
      this.arregloNivelAux.push(r), tematicasElegidas.push(getTematica(n));
    }
    (this.arregloNivel = this.arregloNivelAux),
      (this.objetosPista = []),
      (this.FistCameraPosition = null),
      (this.indicadorActivado = !1),
      (this.cargandoBolaFuera = !1),
      (this.b_LookAtFlag = !1),
      (this.b_LookAtStartPoint = !1),
      (this.camera = this.app.root.findByName("Camera")),
      (this.orbitScript = this.app.root.findByName("OrbitScript")),
      (this.Dummy2 = this.app.root.findByName("Dummy2")),
      (this.Floor = this.app.root.findByName("BalloutTrigger")),
      (this.tirosText = this.app.root.findByName("TirosText")),
      (this.timeText = this.app.root.findByName("timeText")),
      (this.Sonido = this.app.root.findByName("Sonido")),
      (this.axisFloor = this.app.root.findByName("AxisFloor")),
      (this.Colection = this.app.root.findByName("Colection")),
      this.debugMeshes ||
        ((this.app.root.findByName("BoxAT").model.enabled = !1),
        (this.app.root.findByName("BoxBT").model.enabled = !1),
        (this.app.root.findByName("Apuntador").model.enabled = !1)),
      (this.indicador_fuerza.enabled = !1),
      (this.levelsString = []),
      (this.LoadLevelList = function () {
        for (
          var e = this.textAsset.resource.split("*"), i = 0;
          i < e.length;
          i++
        ) {
          var t = e[i].split("|");
          this.levelsString.push({ level: t[0], cadena: JSON.parse(t[1]) });
        }
      }),
      (this.LoadLevel = function (e, i) {
        this.LoadLevelList();
        for (var t = 0; t < this.levelsString.length; t++) {
          var o = this.levelsString[t];
          if (o.level == e) {
            jsonLevel = o.cadena;
            break;
          }
        }
        var s = tematicasElegidas[i],
          a = null;
        switch (s) {
          case "bosque":
            a = this.materiales[0].resource;
            break;
          case "desierto":
            a = this.materiales[1].resource;
            break;
          case "nieve":
            a = this.materiales[2].resource;
        }
        var n = this.app.root.findByName("Parent"),
          r = [],
          l = null,
          c = null,
          h = null;
        for (t = 0; t < jsonLevel.Items.length; t++) {
          var d = jsonLevel.Items[t],
            p = d.name;
          (p = p.trim().replace("(Clone)", "").replace("(Clone)", "")),
            "desierto" == s
              ? p.includes("golf_bosque") &&
                (p = p.replace("golf_bosque", "golf_desert"))
              : "nieve" == s &&
                p.includes("golf_bosque") &&
                (p = p.replace("golf_bosque", "golf_hielo"));
          var u = this.tiles.findByName(p);
          if (
            (null == u &&
              ("Start" == p
                ? (u = this.app.root.findByName(p))
                : "LookAtInitial" == p && (u = this.app.root.findByName(p))),
            p.includes("Windmill") ||
              p.includes("windmill") ||
              p.includes("Flag") ||
              p.includes("LookAtInitial") ||
              p.includes("monedaEG") ||
              p.includes("castle") ||
              p.includes("Castle") ||
              p.includes("Tunnel") ||
              p.includes("tunel") ||
              p.includes("sand") ||
              p.includes("Sand") ||
              p.includes("Start") ||
              p.includes("golf_bosque") ||
              p.includes("golf_desert") ||
              p.includes("golf_hielo") ||
              (this.esTileBorde(p) && !p.includes("Mesh1 Start")))
          ) {
            var m = u.clone();
            this.esTileBorde(m.name) ||
              "Start" == m.name ||
              "Mesh1 Flag_blue Model" == m.name ||
              "Mesh1 Flag_green Model" == m.name ||
              "Mesh1 Flag_red Model" == m.name ||
              void 0 === m.collision ||
              (m.collision.model = m.model.model.clone());
            var b = new pc.Entity();
            this.app.root.addChild(b),
              this.app.root.addChild(m),
              m.reparent(b),
              m.setLocalPosition(new pc.Vec3(0, 0, 0)),
              b.reparent(n),
              r.push(b),
              "Start" == m.name && (m.name = "StartPos"),
              this.esTileBorde(m.name) ||
                "StartPos" == m.name ||
                "Mesh1 Flag_blue Model" == m.name ||
                "Mesh1 Flag_green Model" == m.name ||
                "Mesh1 Flag_red Model" == m.name ||
                void 0 === m.rigidbody ||
                (m.rigidbody.enabled = !1);
            var g = 0;
            switch (d.floor.toString()) {
              case "0":
                g = 0;
                break;
              case "1":
                g = 0.444;
                break;
              case "2":
                g = 0.88;
                break;
              case "3":
                g = 1.321;
                break;
              case "4":
                g = 1.761;
            }
            if (
              (b.setPosition(1 * parseInt(d.x), 1 * g, 1 * parseInt(d.z)),
              "StartPos" != m.name &&
                "Mesh1 Flag_blue Model" != m.name &&
                "Mesh1 Flag_green Model" != m.name &&
                "Mesh1 Flag_red Model" != m.name &&
                void 0 !== m.rigidbody &&
                (m.rigidbody.enabled = !0),
              "StartPos" != m.name &&
                "Mesh1 Flag_blue Model" != m.name &&
                "Mesh1 Flag_green Model" != m.name &&
                "Mesh1 Flag_red Model" != m.name &&
                void 0 !== m.rigidbody)
            )
              for (var M = 0; M < m.model.meshInstances.length; M++)
                m.model.meshInstances[M].material = a;
            else if (this.esTileBorde(m.name))
              for (M = 0; M < m.model.meshInstances.length; M++)
                m.model.meshInstances[M].material = this.materiales[3].resource;
            if (m.name.includes("sand") || m.name.includes("Sand"))
              for (M = 0; M < m.model.meshInstances.length; M++)
                m.model.meshInstances[M].material = a;
            "StartPos" != m.name &&
              "Mesh1 Flag_blue Model" != m.name &&
              "Mesh1 Flag_green Model" != m.name &&
              "Mesh1 Flag_red Model" != m.name &&
              void 0 === m.rigidbody &&
              (p.includes("sand") ||
              p.includes("Sand") ||
              p.includes("Windmill") ||
              p.includes("windmill") ||
              p.includes("Flag") ||
              p.includes("castle") ||
              p.includes("monedaEG") ||
              p.includes("Castle") ||
              p.includes("Tunnel") ||
              p.includes("tunel") ||
              this.esTileBorde(m.name)
                ? m.setLocalPosition(0, 0, 0)
                : m.setLocalPosition(0, -0.3, 0)),
              ("Mesh1 Flag_red Model" != m.name &&
                "Mesh1 Flag_blue Model" != m.name &&
                "Mesh1 Flag_green Model" != m.name) ||
                (c = m),
              "StartPos" == m.name && (l = m),
              "LookAtInitial" == m.name && (h = m),
              (b.enabled = !1);
          }
        }
        null == h &&
          (console.log("exception de null del lookAtInicial"), (h = this.ball)),
          this.objetosPista.push({
            pista: r,
            start: l,
            flag: c,
            lookAtInitial: h,
          });
      });
    for (i = 0; i < this.arregloNivel.length; i++)
      this.LoadLevel(this.arregloNivel[i], i);
    this.pisos.script.setAssetTematica.prender(tematicasElegidas[0]),
      this.domos.script.setAssetTematica.prender(tematicasElegidas[0]),
      (currentLevel = this.arregloNivel[0]),
      (this.levelDebug.element.text = "LEVEL:" + currentLevel),
      (currentIndexLevel = 0),
      _levels.setLevel(),
      (this.Colection.enabled = !1),
      this.StartGame(),
      this.IniciarCronometro(),
      (this.gameInit = !0);
  }),
  (LoadScript.prototype.esTileBorde = function (e) {
    switch (e) {
      case "Mesh1 Block Model":
      case "Mesh1 Bump_walls Model 90":
      case "Mesh1 Bump_walls Model.001":
      case "Mesh1 cachito 180":
      case "Mesh1 cachito 270":
      case "Mesh1 cachito 90":
      case "Mesh1 cachito":
      case "Mesh1 Corner Model 180":
      case "Mesh1 Corner Model 270":
      case "Mesh1 Corner Model 90":
      case "Mesh1 Corner Model":
      case "Mesh1 Crest Model 90":
      case "Mesh1 Crest Model":
      case "Mesh1 diamantecorner 0":
      case "Mesh1 diamantecorner 180":
      case "Mesh1 diamantecorner 270":
      case "Mesh1 diamantecorner 90":
      case "Mesh1 Diamond Corner Model 180":
      case "Mesh1 Diamond Corner Model 270":
      case "Mesh1 Diamond Corner Model 90":
      case "Mesh1 Diamond Corner Model":
      case "Mesh1 End Model 180":
      case "Mesh1 End Model 270":
      case "Mesh1 End Model 90":
      case "Mesh1 End Model":
      case "Mesh1 Gap Model 90":
      case "Mesh1 Gap Model":
      case "Mesh1 Hill_square Model 90":
      case "Mesh1 Hill_square Model":
      case "Mesh1 Hole_square Model 180":
      case "Mesh1 Hole_square Model 270":
      case "Mesh1 Hole_square Model 90":
      case "Mesh1 Hole_square Model":
      case "Mesh1 Inner_corner Model 180":
      case "Mesh1 Inner_corner Model 270":
      case "Mesh1 Inner_corner Model 90":
      case "Mesh1 Inner_corner Model":
      case "Mesh1 Narrow_block Model 90":
      case "Mesh1 Narrow_block Model":
      case "Mesh1 Narrow_round Model 90":
      case "Mesh1 Narrow_round Model":
      case "Mesh1 Narrow_square Model 90":
      case "Mesh1 Narrow_square Model":
      case "Mesh1 Obstacle_block Model 90":
      case "Mesh1 Obstacle_block Model solo 90":
      case "Mesh1 Obstacle_block Model solo":
      case "Mesh1 Obstacle_block Model":
      case "Mesh1 Obstacle_diamond Model":
      case "Mesh1 Obstacle_triangle Model 90":
      case "Mesh1 Obstacle_triangle Model":
      case "Mesh1 Ramp_sharp Model 180":
      case "Mesh1 Ramp_sharp Model 270":
      case "Mesh1 Ramp_sharp Model 90":
      case "Mesh1 Ramp_sharp Model":
      case "Mesh1 Ramp_square Model 180":
      case "Mesh1 Ramp_square Model 270":
      case "Mesh1 Ramp_square Model 90":
      case "Mesh1 Ramp_square Model":
      case "Mesh1 Side Model 180":
      case "Mesh1 Side Model 270":
      case "Mesh1 Side Model 90":
      case "Mesh1 Side Model":
      case "Mesh1 Split Model 90":
      case "Mesh1 Split Model":
      case "Mesh1 split solo 90":
      case "Mesh1 split solo":
      case "Mesh1 Split_start Model 180":
      case "Mesh1 Split_start Model 270":
      case "Mesh1 Split_start Model 90":
      case "Mesh1 Split_start Model":
      case "Mesh1 Split_walls_to_open Model 180":
      case "Mesh1 Split_walls_to_open Model 270":
      case "Mesh1 Split_walls_to_open Model 90":
      case "Mesh1 Split_walls_to_open Model":
      case "Mesh1 Square_corner_1 Model 180":
      case "Mesh1 Square_corner_1 Model 270":
      case "Mesh1 Square_corner_1 Model 90":
      case "Mesh1 Square_corner_1 Model":
      case "Mesh1 Straight Model 90":
      case "Mesh1 Straight Model":
      case "Mesh1 T_split Model 180":
      case "Mesh1 T_split Model 270":
      case "Mesh1 T_split Model 90":
      case "Mesh1 T_split Model":
      case "Mesh1 triangle 0":
      case "Mesh1 triangle 180":
      case "Mesh1 triangle 270":
      case "Mesh1 triangle 90":
      case "Mesh1 Wall_left Model 180":
      case "Mesh1 Wall_left Model 270":
      case "Mesh1 Wall_left Model 90":
      case "Mesh1 Wall_left Model":
      case "Mesh1 Wall_right Model 180":
      case "Mesh1 Wall_right Model 270":
      case "Mesh1 Wall_right Model 90":
      case "Mesh1 Wall_right Model":
      case "Mesh1 Walls_to_open Model 180":
      case "Mesh1 Walls_to_open Model 270":
      case "Mesh1 Walls_to_open Model 90":
      case "Mesh1 Walls_to_open Model":
        return !0;
    }
    return !1;
  }),
  (LoadScript.prototype.InitCamera = function () {
    this.app.root.findByName("Camera");
    var e = this.objetosPista[this.indexNivelActual].start;
    (this.flag = this.objetosPista[this.indexNivelActual].flag),
      (this.lookAtInitial =
        this.objetosPista[this.indexNivelActual].lookAtInitial),
      this.cameraGuide.setPosition(
        new pc.Vec3(
          this.cameraGuide.getPosition().x,
          this.cameraGuide.getPosition().y + 0.9,
          this.cameraGuide.getPosition().z
        )
      ),
      this.orbitScript.setPosition(
        new pc.Vec3(
          this.flag.getPosition().clone().x,
          this.orbitScript.getPosition().clone().y + 1,
          this.flag.getPosition().clone().z
        )
      ),
      (this.orbitScript.script.follower.enabled = !1),
      setTimeout(
        function () {
          (machine.orbitScript.script.follower.enabled = !0),
            _menu.poneMSG(1),
            _sonidos.play("GO");
        }.bind(this),
        1500
      ),
      (this.camaraInicialPos = this.cameraGuide.children[0]
        .getPosition()
        .clone()),
      (this.camaraInicialRot = this.cameraGuide.children[0]
        .getLocalEulerAngles()
        .clone()),
      (this.ball.rigidbody.enabled = !0),
      this.ball.rigidbody.teleport(
        e.getPosition().x,
        e.getPosition().y + 1,
        e.getPosition().z
      ),
      (this.estela = this.app.root.findByName("Estela")),
      this.estela.setPosition(this.ball.getPosition()),
      this.ball.lookAt(this.flag.getPosition().clone()),
      (this.seguidor.findByName("Ball_white_giro").enabled = !0),
      this.Floor.setPosition(
        new pc.Vec3(e.getPosition().clone().x, -2, e.getPosition().clone().z)
      ),
      (this.b_FrozeGame = !1),
      (this.cuantosTiros = 0),
      this.trail.script.ribbon.hideShadder();
  }),
  (LoadScript.prototype.StartGame = function () {
    this.trail.script.ribbon.hideShadder(),
      this.EnableLevel(this.indexNivelActual, !0);
  }),
  (LoadScript.prototype.ponerIndicador = function () {
    this.seguidor.findByName("Ball_white_giro").enabled &&
      (this.isClicking ||
        this.gameOver ||
        ((this.bolaFuera = !1),
        enArena || enRampa || (this.ball.rigidbody.enabled = !1),
        (this.indicador_bola.enabled = !0),
        (this.b_DisparoEjecutado = !1),
        (this.puedeDispararDefinivamente = !0),
        (orbitCamera.snappinessFactor = 0.3),
        (this.seguidor.rigidbody.enabled = !0),
        (this.ball.rigidbody.linearDamping = 0.7),
        (this.ball.rigidbody.angularDamping = 0.6),
        _menu.setPremio(this.cuantosTiros),
        this.trail.script.ribbon.hideShadder(),
        this.ball.getPosition().distance(this.flag.getPosition()) < 7 &&
          _menu.clickFlag(!1, 0.24),
        "start" != currentGamePlay && PokiSDK.gameplayStart(),
        (currentGamePlay = "start")));
  }),
  (LoadScript.prototype.transicion = function () {
    var e = screen2D.findByName("Tapador");
    screen2D.findByName("Logo").script.animaMsg.mueve2(),
      e.script.animaMsg.Alpha(
        function () {
          setTimeout(
            function () {
              e.script.animaMsg.Alpha(function () {}.bind(this), 1, 0);
            }.bind(this),
            400
          );
        }.bind(this),
        0,
        1
      );
  }),
  (LoadScript.prototype.EnableLevel = function (e, i) {
    null != orbitCamera && (orbitCamera.snappinessFactor = 0.3),
      _menu.poneMSG(0),
      this.trail.script.ribbon.hideShadder();
    for (var t = this.objetosPista[e].pista, o = 0; o < t.length; o++)
      t[o].enabled = !0;
    this.InitCamera(),
      nivelesFaciles(currentLevel)
        ? (puntoScore = puntoScoreFacil)
        : nivelesMedios(currentLevel)
        ? (puntoScore = puntoScoreMedio)
        : nivelesDificiles(currentLevel) && (puntoScore = puntoScoreDificil),
      _menu.setPremio(0),
      setTimeout(
        function () {
          _fps.ini();
        }.bind(this, 100)
      );
  }),
  (LoadScript.prototype.LoadNextLevel = function () {
    this.CleanLevel(this.indexNivelActual),
      this.indexNivelActual++,
      this.indexNivelActual == this.arregloNivel.length &&
        (this.indexNivelActual = 0),
      (currentIndexLevel = this.indexNivelActual),
      (currentLevel = this.arregloNivel[this.indexNivelActual]),
      (this.levelDebug.element.text = "LEVEL:" + currentLevel),
      (this.trail.enabled = !0),
      (this.b_FirstClickNotDone = !1),
      (this.camaraYaCargo = !1),
      (this.puedeDispararDefinivamente = !1),
      this.EnableLevel(this.indexNivelActual, !1),
      this.pisos.script.setAssetTematica.prender(
        tematicasElegidas[this.indexNivelActual]
      ),
      this.domos.script.setAssetTematica.prender(
        tematicasElegidas[this.indexNivelActual]
      ),
      _levels.setLevel(),
      this.trail.script.ribbon.hideShadder();
  }),
  (LoadScript.prototype.CleanLevel = function (e) {
    for (var i = this.objetosPista[e].pista, t = 0; t < i.length; t++)
      i[t].enabled = !1;
  }),
  (LoadScript.prototype.CleanAll = function () {
    for (var e = 0; e < this.arregloNivel.length; e++)
      for (var i = this.objetosPista[e].pista, t = 0; t < i.length; t++)
        i[t].destroy();
  }),
  (LoadScript.prototype.IniciarCronometro = function () {
    null !== this.cronometro &&
      (clearInterval(this.cronometro), (this.segundos = 0)),
      (this.cronometro = setInterval(
        function () {
          if (!pause) {
            machine.segundos++;
            var e = tiempoJuego - machine.segundos,
              i = e / 60 < 10 ? "0" + Math.floor(e / 60) : Math.floor(e / 60),
              t = e % 60 < 10 ? "0" + (e % 60) : e % 60;
            (this.timeString = i + ":" + t),
              -1 == e &&
                (machine.DetenerJuegoPorTiempo(),
                clearInterval(this.cronometro)),
              _menu.setTime(this.timeString, e);
          }
        }.bind(this),
        1e3
      ));
  }),
  (LoadScript.prototype.DetenerJuegoPorTiempo = function () {
    console.log("Detener juego por tiempo"),
      (this.b_FrozeGame = !0),
      (machine.gameOver = !0),
      (this.indicador_bola.enabled = !1),
      "stop" != currentGamePlay && PokiSDK.gameplayStop(),
      (currentGamePlay = "stop"),
      _menu.poneContinue();
  }),
  (LoadScript.prototype.continueNO = function () {
    _menu.poneMSG(6),
      _menu.apagaGUI(),
      tocaSonido("timeOut"),
      _menu.panelEndScore();
  }),
  (LoadScript.prototype.continueYES = function () {
    (machine.cronometro = null),
      (machine.gameOver = !1),
      (machine.b_FrozeGame = !1),
      (machine.indicador_bola.enabled = !0),
      (machine.segundos = machine.segundos - tiempoExtra),
      machine.IniciarCronometro();
    var e = new pc.Color();
    (_menu.timeMC.children[0].element.color = e.fromString(colorNormal)),
      (machine.puedeDispararDefinivamente = !1),
      (machine.axisFloor.enabled = !0),
      orbitCamera.tweenZoom(orbitCamera.minZoomDistance),
      setTimeout(machine.ponerIndicador.bind(machine), 301),
      machine.trail.script.ribbon.hideShadder();
  }),
  (LoadScript.prototype.Disparar = function (e, i) {
    console.log("Disparo!"), (this.seguidor.rigidbody.enabled = !1);
    var t = this.indicador_fuerza.script.barraFuerzaControl.factor;
    this.discance <= t / 3
      ? (this.distance = 0.17 * this.distance)
      : this.distance <= (t / 3) * 2
      ? (this.distance = 0.82 * this.distance)
      : (this.distance = 0.85 * this.distance),
      (this.distance *= 1),
      this.distance < 0.5
        ? tocaSonido("chuteA")
        : this.distance < 1
        ? tocaSonido("chuteB")
        : this.distance <= 2 && tocaSonido("chuteC"),
      this.ball.setRotation(this.seguidor.getRotation().clone()),
      (orbitCamera.dir = 0);
    new pc.Vec3(0, 0, 0);
    var o = 420 * (t = 1),
      s = o;
    bajarVelocidadChico
      ? o > 45 * t && (o = 45 * t)
      : bajarVelocidadMedio
      ? o > 75 * t && (o = 75 * t)
      : bajarVelocidadGrande && o > 80 * t && (o = 80 * t),
      noLimitar && (o = s);
    var a = 1;
    enArena && (a = 0.5);
    var n = new pc.Vec3(
      -0.1 * this.seguidor.forward.normalize().x * a,
      0,
      -0.1 * this.seguidor.forward.normalize().z * a
    ).scale(this.distance * o * a);
    this.ResetPhysic(),
      (this.lastBallPosition = this.ball.getPosition().clone()),
      (this.axisFloor.enabled = !1),
      (this.ball.rigidbody.enabled = !0),
      this.seguidor.lookAt(
        this.seguidor.getPosition().sub(this.seguidor.forward)
      ),
      this.ball.rigidbody.applyImpulse(n),
      (this.b_DisparoEjecutado = !0),
      this.cuantosTiros++;
  }),
  (LoadScript.prototype.HacerPunto = function () {
    this.ResetPhysic(),
      (this.b_FrozeGame = !0),
      console.log("Punto!"),
      (this.ball.rigidbody.enabled = !1),
      (machine.b_DisparoEjecutado = !1),
      (this.seguidor.findByName("Ball_white_giro").enabled = !1),
      "stop" != currentGamePlay && PokiSDK.gameplayStop(),
      (currentGamePlay = "stop"),
      1 == this.cuantosTiros
        ? (_menu.poneMSG(5), PokiSDK.happyTime(1))
        : this.cuantosTiros >= 2 && this.cuantosTiros <= 3
        ? (_menu.poneMSG(4), PokiSDK.happyTime(0.7))
        : this.cuantosTiros >= 4 && this.cuantosTiros <= 6
        ? (_menu.poneMSG(3), PokiSDK.happyTime(0.3))
        : (_menu.poneMSG(2), PokiSDK.happyTime(0.1)),
      (this.segundos = this.segundos - 1);
    var e = Math.round(puntoScore / this.cuantosTiros);
    _menu.setScore(e, !1),
      setTimeout(
        function () {
          this.transicion();
        }.bind(this),
        800
      ),
      setTimeout(
        function () {
          this.LoadNextLevel();
        }.bind(this),
        1200
      ),
      this.trail.script.ribbon.hideShadder();
  }),
  (LoadScript.prototype.BolaFuera = function () {
    (console.log("Bola fuera"), this.enBolaFuera) ||
      ("stop" != currentGamePlay && PokiSDK.gameplayStop(),
      (this.enBolaFuera = !0),
      (currentGamePlay = "stop"),
      tiempoJuego - machine.segundos <= 0
        ? this.metodoBolaFuera()
        : showAds(this.metodoBolaFuera.bind(this)));
  }),
  (LoadScript.prototype.metodoBolaFuera = function () {
    tocaSonido("miss"),
      (this.enBolaFuera = !1),
      (this.ball.script.colisionBola.time = 0);
    var e = this.trail.script.ribbon.lifetime;
    (this.trail.script.ribbon.lifetime = 0),
      setTimeout(
        function () {
          this.trail.script.ribbon.lifetime = e;
        }.bind(this),
        200
      ),
      this.ResetPhysic(),
      this.ball.rigidbody.teleport(
        new pc.Vec3(
          this.lastBallPosition.x,
          this.lastBallPosition.y + 0.01,
          this.lastBallPosition.z
        )
      ),
      (this.bolaFuera = !0),
      (this.puedeDispararDefinivamente = !1),
      (this.camaraYaCargo = !1),
      (this.cargandoBolaFuera = !0),
      this.trail.script.ribbon.hideShadder();
  }),
  (LoadScript.prototype.HitBall = function () {
    var e = pc.Vec3.FORWARD,
      i = this.ball.forward;
    this.ball.rigidbody.applyImpulse(e, i);
  }),
  (LoadScript.prototype.onKeyDown = function (e) {
    e.key, pc.KEY_A, e.event.preventDefault();
  }),
  (LoadScript.prototype.onKeyUp = function (e) {
    e.key === pc.KEY_A && this.HacerPunto();
  }),
  (LoadScript.prototype.onMouseDown = function (e) {
    if (!this.b_FrozeGame) {
      var i = e.x,
        t = e.y;
      this.Click(i, t);
    }
  }),
  (LoadScript.prototype.onTouchStart = function (e) {
    if (!this.b_FrozeGame) {
      var i = e.touches[0].x,
        t = e.touches[0].y;
      this.Click(i, t);
    }
  }),
  (LoadScript.prototype.onMouseMove = function (e) {
    if (!this.b_FrozeGame) {
      var i = e.x,
        t = e.y;
      this.Move(i, t, e);
    }
  }),
  (LoadScript.prototype.onTouchMove = function (e) {
    if (!this.b_FrozeGame) {
      var i = e.touches[0].x,
        t = e.touches[0].y;
      (this.lastTouchPosition = { x: i, y: t }), this.Move(i, t, e);
    }
  }),
  (LoadScript.prototype.onMouseUp = function (e) {
    if (!this.b_FrozeGame) {
      var i = e.x,
        t = e.y;
      this.Up(i, t);
    }
  }),
  (LoadScript.prototype.onTouchEnd = function (e) {
    this.b_FrozeGame ||
      this.Up(this.lastTouchPosition.x, this.lastTouchPosition.y);
  }),
  (LoadScript.prototype.Click = function (e, i) {
    this.b_FirstClickNotDone ||
      (this.camaraYaCargo &&
        this.puedeDispararDefinivamente &&
        ((this.axisFloor.enabled = !0), (this.b_FirstClickNotDone = !0))),
      (this.posOrg = GetMouseGlobalPosition(
        new pc.Vec2(e, i),
        this.camera.camera,
        this.app
      )),
      null !== this.posOrg &&
        ("Seguidor" != this.posOrg.entity.name ||
          this.b_DisparoEjecutado ||
          ((this.posClickOrg = this.posOrg.point),
          (this.distanciaOrgBall = new pc.Vec3()
            .sub2(
              new pc.Vec3(
                this.posOrg.point.x,
                this.ball.getPosition().y,
                this.posOrg.point.z
              ),
              this.ball.getPosition()
            )
            .length()),
          (this.posOrg = this.ball.getPosition()),
          (this.isClicking = !0),
          (this.indicador_bola.enabled = !1)));
  }),
  (LoadScript.prototype.Move = function (e, i, t) {
    if (this.isClicking) {
      var o = this.app.graphicsDevice.canvas.clientHeight;
      if (Math.abs(i) < o / 2 + 0.192 * o && !this.indicadorActivado) return;
      if (
        ((this.indicadorActivado = !0),
        (this.posMove = GetMouseFloorPosition(
          new pc.Vec2(e, i),
          this.camera.camera,
          this.app
        )),
        null !== this.posMove)
      ) {
        (this.posMove = new pc.Vec3(
          this.posMove.point.x,
          this.ball.getPosition().y,
          this.posMove.point.z
        )),
          this.PaintDirection(this.ball.getPosition(), this.posMove, e, i);
        var s = new pc.Vec3(
            this.ball.getPosition().x,
            this.ball.getPosition().y,
            this.ball.getPosition().z
          ),
          a = new pc.Vec3(
            this.posMove.x,
            this.ball.getPosition().y,
            this.posMove.z
          );
        (this.distance = pc.math.clamp(
          new pc.Vec3().sub2(s, a).length() - 0.28,
          0,
          this.indicador_fuerza.script.barraFuerzaControl.factor
        )),
          (this.indicador_fuerza.enabled = !0),
          this.indicador_fuerza.script.barraFuerzaControl.setBarra(
            this.distance
          );
      }
    }
  }),
  (LoadScript.prototype.Up = function (e, i) {
    if (this.isClicking) {
      this.indicador_fuerza.enabled = !1;
      var t = GetMouseFloorPosition(
        new pc.Vec2(e, i),
        this.camera.camera,
        this.app
      );
      null !== t &&
        (this.indicadorActivado
          ? this.Disparar(this.posOrg, t.point)
          : ((this.isClicking = !1), this.ponerIndicador())),
        (this.indicadorActivado = !1),
        (this.isClicking = !1);
    }
  }),
  (LoadScript.prototype.PaintDirection = function (e, i, t, o) {
    var s = new pc.Vec3(e.x, e.y, e.z),
      a = new pc.Vec3(i.x, e.y, i.z);
    (this.distance = new pc.Vec3()),
      (this.distance = this.distance.sub2(s, a).length()),
      this.distance > 0 && orbitCamera.forzarPaneo(t, o),
      (this.targetCameraPosition = i);
  }),
  (LoadScript.prototype.ResetPhysic = function () {
    (this.ball.rigidbody.linearVelocity = new pc.Vec3(0, 0, 0)),
      (this.ball.rigidbody.angularVelocity = new pc.Vec3(0, 0, 0));
  }),
  (LoadScript.prototype.forceLookAtFlag = function () {
    this.b_LookAtFlag = !this.b_LookAtFlag;
  }),
  (LoadScript.prototype.forceLookAtStartPoint = function () {
    this.b_LookAtStartPoint = !this.b_LookAtStartPoint;
  }),
  (LoadScript.prototype.update = function (e) {
    if ((this.app.keyboard.wasPressed(pc.KEY_LEFT), this.gameInit)) {
      if (this.isClicking)
        void 0 !== this.posMove &&
          this.seguidor.lookAt(
            new pc.Vec3(
              this.posMove.x,
              this.seguidor.getPosition().y,
              this.posMove.z
            )
          );
      else if (this.b_LookAtFlag) {
        var i = new pc.Vec3(
          this.flag.getPosition().clone().x,
          this.seguidor.getPosition().y,
          this.flag.getPosition().clone().z
        );
        this.seguidor.lookAt(i);
      } else if (this.b_LookAtStartPoint) {
        var t = new pc.Vec3(
          this.startPosMC.getPosition().clone().x,
          this.seguidor.getPosition().y,
          this.startPosMC.getPosition().clone().z
        );
        this.seguidor.lookAt(t);
      }
      if (0 == this.b_FirstClickNotDone) {
        i = new pc.Vec3(
          machine.lookAtInitial.getPosition().clone().x,
          machine.seguidor.getPosition().y,
          machine.lookAtInitial.getPosition().clone().z
        );
        machine.seguidor.lookAt(i);
      }
      null !== this.ball &&
        this.ball.rigidbody.enabled &&
        (!this.enPosibleReset &&
        machine.b_DisparoEjecutado &&
        this.ball.rigidbody.linearVelocity.length() <= 0.45 &&
        !this.seguidor.rigidbody.enabled
          ? ((this.enPosibleReset = !0),
            setTimeout(this.posibleReset.bind(this), 600))
          : !this.enPosibleReset &&
            machine.b_DisparoEjecutado &&
            this.ball.rigidbody.linearVelocity.length() <= 4 &&
            !this.seguidor.rigidbody.enabled &&
            ((this.ball.rigidbody.linearDamping = 0.85),
            (this.ball.rigidbody.angularDamping = 0.85))),
        this.cargandoBolaFuera &&
          ((this.cargandoBolaFuera = !1), (this.axisFloor.enabled = !0));
    }
  }),
  (LoadScript.prototype.posibleReset = function () {
    if (
      ((this.enPosibleReset = !1),
      machine.b_DisparoEjecutado &&
        this.ball.rigidbody.linearVelocity.length() <= 0.45 &&
        this.ball.rigidbody.linearVelocity.length() >= 0)
    ) {
      if (this.indicador_bola.enabled) return;
      if (!this.seguidor.findByName("Ball_white_giro").enabled) return;
      if (this.isClicking) return;
      if (this.bolaFuera) return;
      if ((this.ResetPhysic(), this.gameOver)) return;
      (machine.puedeDispararDefinivamente = !1),
        (this.axisFloor.enabled = !0),
        orbitCamera.tweenZoom(orbitCamera.minZoomDistance),
        setTimeout(this.ponerIndicador.bind(this), 301),
        this.trail.script.ribbon.hideShadder(),
        console.log("me reseteee de posible reset y puse en 0.3 el snappines");
    }
  }),
  (LoadScript.prototype.CamaraPosicionadaCallback = function () {
    this.indicador_bola.enabled ||
      (this.seguidor.findByName("Ball_white_giro").enabled &&
        (this.isClicking ||
          (window.setTimeout(
            function () {
              this.indicador_bola.enabled ||
                (orbitCamera.tweenZoom(orbitCamera.minZoomDistance),
                setTimeout(this.ponerIndicador.bind(this), 101),
                this.trail.script.ribbon.hideShadder());
            }.bind(this),
            200
          ),
          console.log("me reseteee de callback y puse en 0.3 el snappines"))));
  });
var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return (
        navigator.userAgent.match(/IEMobile/i) ||
        navigator.userAgent.match(/WPDesktop/i)
      );
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  },
  bajarVelocidadChico = !1,
  bajarVelocidadMedio = !1,
  bajarVelocidadGrande = !1,
  esTunel = !1,
  noLimitar = !1;
function RayCast(e, a, r) {
  var n = a.screenToWorld(e.x, e.y, a.nearClip),
    t = a.screenToWorld(e.x, e.y, a.farClip),
    i = r.systems.rigidbody.raycastFirst(n, t);
  return i ? i.entity : null;
}
function GetMouseGlobalPosition(e, a, r) {
  var n = a.screenToWorld(e.x, e.y, a.nearClip),
    t = a.screenToWorld(e.x, e.y, a.farClip),
    i = r.systems.rigidbody.raycastFiltered(
      n,
      t,
      PhysicsFilter.A,
      PhysicsFilter.A
    );
  return i || null;
}
function GetMouseFloorPosition(e, a, r) {
  var n = a.screenToWorld(e.x, e.y, a.nearClip),
    t = a.screenToWorld(e.x, e.y, a.farClip);
  return (
    (result = r.systems.rigidbody.raycastFiltered(
      n,
      t,
      PhysicsFilter.A,
      PhysicsFilter.A
    )),
    result || null
  );
}
function reproduceAnim(e, a, r, n, t, i) {
  null != r && (e.animation.speed = r);
  var o = e.animation.assets[a],
    s = e.animation.animationsIndex[o];
  e.animation.play(s),
    (e.animation.loop = !!i),
    n &&
      setTimeout(function () {
        e.enabled = !1;
      }, t);
}
function reproduceParticulas(e, a) {
  var r = e;
  (r.enabled = !0),
    r.particlesystem.reset(),
    r.particlesystem.play(),
    setTimeout(function () {
      r.enabled = !1;
    }, a);
}
function asignaEventos(e, a, r, n) {
  var t = [];
  switch ((null != e.element && (e = e.element), r)) {
    case 1:
      (t[0] = "touchstart"), (t[1] = "mousedown");
      break;
    case 2:
      (t[0] = "touchend"), (t[1] = "mouseup");
      break;
    case 3:
      (t[0] = "touchmove"), (t[1] = "mousemove");
  }
  a ? (isMobile.any() ? e.on(t[0], n) : e.on(t[1], n)) : e.off();
}
function setTexto(e, a) {
  e.text = a;
}
function guarda_vars(e, a, r, n, t, i, o, s) {
  r
    ? 1 == n
      ? (e[t] = a)
      : 2 == n
      ? (e[t][i] = a)
      : 3 == n
      ? (e[t][i][o] = a)
      : 4 == n && (e[t][i][o][s] = a)
    : (e = a);
}
function cargaTextura(e, a, r) {
  _app.loader.getHandler("texture").crossOrigin = "anonymous";
  var n = new pc.Asset("foto" + Math.round(1e3 * Math.random()), "texture", {
    url: e,
  });
  _app.assets.add(n),
    _app.assets.load(n),
    n.on("load", function (e) {
      if (r)
        for (var n = a.model.meshInstances, t = 0; t < n.length; ++t) {
          var i = n[t];
          (i.material.diffuseMap = e.resource),
            (i.material.emissiveMap = e.resource),
            i.material.update();
        }
      else (a.element.textureAsset = e), (a.enabled = !0);
    });
}
function getTexture(e) {
  var a = new pc.gfx.Texture(_app.graphicsDevice),
    r = new Image();
  return (
    (r.onload = function () {
      (a.minFilter = pc.gfx.FILTER_LINEAR),
        (a.magFilter = pc.gfx.FILTER_LINEAR),
        (a.addressU = pc.ADDRESS_REPEAT),
        (a.addressV = pc.ADDRESS_REPEAT),
        a.setSource(r);
    }),
    (r.src = e),
    a
  );
}
function cambiaTextura3D(e, a) {
  for (var r = a.model.meshInstances, n = 0; n < r.length; ++n) {
    var t = r[n];
    (t.material.diffuseMap = e),
      (t.material.emissiveMap = e),
      t.material.update();
  }
}
var Follower = pc.createScript("follower");
Follower.attributes.add("cameraLerp", { type: "number" }),
  Follower.attributes.add("cameraLerpBool", { type: "boolean" }),
  Follower.attributes.add("triggerBallBool", { type: "boolean" }),
  Follower.attributes.add("estelaBool", { type: "boolean" }),
  (Follower.prototype.initialize = function () {
    (this.speedCamera = 2),
      (this.lerpedPosition = new pc.Vec3()),
      (this.target = this.app.root.findByName("Ball_white")),
      (this.bolaReal = this.app.root.findByName("Seguidor")),
      (this.bolaReal_giro = this.bolaReal.findByName("Ball_white_giro"));
  }),
  (Follower.prototype.postUpdate = function (t) {
    var e = new pc.Vec3();
    if (
      ((e = this.target.getPosition().clone()),
      (this.timer += t * this.speedCamera),
      this.triggerBallBool)
    )
      this.entity.setPosition(
        new pc.Vec3(e.x, machine.seguidor.getPosition().clone().y, e.z)
      );
    else if (this.cameraLerpBool) {
      this.bolaReal.setPosition(this.target.getPosition()),
        this.bolaReal_giro.setRotation(this.target.getRotation()),
        this.lerpedPosition.lerp(
          this.entity.getPosition(),
          e,
          this.cameraLerp * t
        ),
        this.entity.setPosition(this.lerpedPosition);
      var o = this.entity.getPosition().clone();
      o = Math.abs(parseFloat(o.x + o.y + o.z));
      var i = e;
      i = Math.abs(parseFloat(i.x + i.y + i.z));
      !pause &&
        !machine.camaraYaCargo &&
        o >= i - 0.75 &&
        o <= i + 0.75 &&
        ((machine.camaraYaCargo = !0), machine.CamaraPosicionadaCallback());
    } else if (this.estelaBool) {
      this.entity.setPosition(e);
      machine.ball.getPosition().clone().add(machine.ball.forward.clone());
    }
  });
var OrbitCamera = pc.createScript("orbitCamera");
OrbitCamera.attributes.add("mouseLookSensitivity", {
  type: "number",
  default: 0,
  title: "Mouse Look Sensitivity",
}),
  OrbitCamera.attributes.add("mouseZoomSensitivity", {
    type: "number",
    default: 0,
    title: "Mouse Zoom Sensitivity",
  }),
  OrbitCamera.attributes.add("touchLookSensitivity", {
    type: "number",
    default: 0,
    title: "Touch Look Sensitivity",
  }),
  OrbitCamera.attributes.add("touchZoomSensitivity", {
    type: "number",
    default: 0,
    title: "Touch Zoom Sensitivity",
  }),
  OrbitCamera.attributes.add("minZoomDistance", {
    type: "number",
    default: 0,
    title: "Min Zoom Distance",
  }),
  OrbitCamera.attributes.add("maxZoomDistance", {
    type: "number",
    default: 10,
    title: "Max Zoom Distance",
  }),
  OrbitCamera.attributes.add("minPitchAngle", {
    type: "number",
    default: 0,
    title: "Min Pitch Angle (degress)",
  }),
  OrbitCamera.attributes.add("maxPitchAngle", {
    type: "number",
    default: 90,
    title: "Max Pitch Angle (degress)",
  }),
  OrbitCamera.attributes.add("snappinessFactor", {
    type: "number",
    default: 0.1,
    title: "Snappiness Factor",
    description: "Lower is faster",
  }),
  (OrbitCamera.prototype.initialize = function () {
    (this.orbitStart = !1),
      (this.b_NoOrbitCamera = !1),
      (orbitCamera = this),
      (this.paneoForzado = !1),
      (this.dir = 0),
      (this.b_EjecutandoOrbit = !1),
      (this.Dumyhelper = this.app.root.findByName("OrbitScript")),
      (this.saveXCameraRot = -45),
      (this.speed_snappinessFactor = 0),
      this.init();
  }),
  (OrbitCamera.prototype.init = function () {
    (this.orbitStart = !0),
      (this._tempQuat1 = new pc.Quat()),
      (this._tempQuat2 = new pc.Quat()),
      (this._tempVec3_1 = new pc.Vec3());
    var t = this.entity.getLocalRotation();
    (this.ey = this.getYaw(t) * pc.math.RAD_TO_DEG),
      (this.ex = this.clampPitchAngle(
        this.getPitch(t, this.ey) * pc.math.RAD_TO_DEG
      )),
      (this.cameraEntity = this.entity.findByName("Camera")),
      (this.cameraDistance = this.maxZoomDistance),
      (this.targetCameraDistance = this.cameraDistance),
      (this.targetEx = this.ex),
      (this.targetEy = this.ey),
      (this.moved = !1),
      this.app.mouse.disableContextMenu(),
      (this.lastTouchPosition = new pc.Vec2()),
      (this.lastPinchDistance = 0),
      this.addEventCallbacks();
  }),
  (OrbitCamera.prototype.addEventCallbacks = function () {
    this.app.mouse &&
      (this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this),
      this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this),
      this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this)),
      this.app.touch &&
        (this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this),
        this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this),
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this),
        this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchEnd, this));
  }),
  (OrbitCamera.prototype.update = function (t) {
    if (this.orbitStart) {
      if (0 !== this.dir) {
        this.rotateCamera(this.dir, 0, this.mouseLookSensitivity);
        var e = GetMouseFloorPosition(
          new pc.Vec2(this.eventPaneo.x, this.eventPaneo.y),
          machine.camera.camera,
          this.app
        );
        return (
          null != e &&
            (console.log("Me ejecuto"),
            machine.seguidor.lookAt(
              new pc.Vec3(
                e.point.x,
                machine.seguidor.getPosition().clone().y,
                e.point.z
              )
            )),
          (this.ex = pc.math.lerp(
            this.ex,
            this.targetEx,
            t / this.snappinessFactor
          )),
          (this.ey = pc.math.lerp(
            this.ey,
            this.targetEy,
            t / this.snappinessFactor
          )),
          this.entity.setLocalEulerAngles(this.ex, this.ey, 0),
          (this.cameraDistance = pc.math.lerp(
            this.cameraDistance,
            this.targetCameraDistance,
            t / this.snappinessFactor
          )),
          ((n = this.cameraEntity.getLocalPosition()).z = this.cameraDistance),
          void this.cameraEntity.setLocalPosition(n)
        );
      }
      if (!this.b_NoOrbitCamera || this.paneoForzado) {
        if (machine.b_FirstClickNotDone) {
          if (
            !this.b_EjecutandoOrbit &&
            !machine.isClicking &&
            machine.b_LookAtFlag
          ) {
            this.entity.getEulerAngles().clone(),
              this.entity.getLocalRotation().clone();
            (this.snappinessFactor = 1.6),
              this.Dumyhelper.setEulerAngles(
                new pc.Vec3(
                  machine.seguidor.getEulerAngles().clone().x,
                  machine.seguidor.getEulerAngles().clone().y,
                  machine.seguidor.getEulerAngles().clone().z
                )
              );
            i = machine.seguidor.getLocalRotation().clone();
            (this.targetEy = this.getYaw(i) * pc.math.RAD_TO_DEG),
              (this.targetEx = this.saveXCameraRot);
          }
        } else {
          this.entity.getEulerAngles().clone(),
            this.entity.getLocalRotation().clone();
          if (
            (this.Dumyhelper.setEulerAngles(
              new pc.Vec3(
                machine.seguidor.getEulerAngles().clone().x,
                machine.seguidor.getEulerAngles().clone().y,
                machine.seguidor.getEulerAngles().clone().z
              )
            ),
            machine.Dummy2)
          )
            var i = machine.Dummy2.getLocalRotation().clone();
          (this.targetEy = this.getYaw(i) * pc.math.RAD_TO_DEG),
            (this.targetEx = this.saveXCameraRot);
        }
        if (machine.b_LookAtFlag) {
          var a = 5;
          this.ey >= 360
            ? (this.ey = this.ey - 360)
            : this.ey < -360 && (this.ey = this.ey + 360),
            this.targetEy < 0 && (this.targetEy = 360 + this.targetEy),
            this.ey < 0 && (this.ey = 360 + this.ey);
          var s = this.ey,
            o = this.targetEy;
          machine.b_LookAtFlag && s >= o - a && s <= o + a
            ? _menu.finClickFlag()
            : machine.b_LookAtFlag &&
              (this.snappinessFactor = this.speed_snappinessFactor);
        } else if (machine.b_LookAtStartPoint) {
          (s = this.ey), (o = this.targetEy), (a = 5);
          this.ey >= 360
            ? (this.ey = this.ey - 360)
            : this.ey < -360 && (this.ey = this.ey + 360),
            machine.b_LookAtStartPoint && s >= o - a && s <= o + a
              ? _menu.finClickFlag()
              : machine.b_LookAtStartPoint && (this.snappinessFactor = 0.25);
        }
        var n;
        (this.ex = pc.math.lerpAngle(
          this.ex,
          this.targetEx,
          t / this.snappinessFactor
        )),
          (this.ey = pc.math.lerpAngle(
            this.ey,
            this.targetEy,
            t / this.snappinessFactor
          )),
          this.entity.setLocalEulerAngles(this.ex, this.ey, 0),
          this.b_EjecutandoOrbit && (this.saveXCameraRot = this.targetEx),
          (this.cameraDistance = pc.math.lerp(
            this.cameraDistance,
            this.targetCameraDistance,
            t / this.snappinessFactor
          )),
          ((n = this.cameraEntity.getLocalPosition()).z = this.cameraDistance),
          this.cameraEntity.setLocalPosition(n);
      }
    }
  }),
  (OrbitCamera.prototype.forzarPaneo = function (t, e) {
    this.paneoForzado = !0;
    var i = new pc.Vec3(),
      a = machine.camera.camera.worldToScreen(machine.ball.getPosition(), i),
      s = new pc.Vec3(t, e).sub(a),
      o = s.x,
      n = s.y,
      r = this.app.graphicsDevice.canvas.clientWidth / 2,
      h = this.app.graphicsDevice.canvas.clientHeight,
      c = Math.abs(o);
    o > 0 && n < 0 && Math.abs(e) < 0.4 * h
      ? (this.dir = 2)
      : o > 0 && n < 0 && Math.abs(e) > 0.4 * h
      ? (this.dir = 0)
      : o > 0 && n > 0
      ? (this.dir = c > 0.8 * r ? (b_InputEspejo ? 2 : -2) : 0)
      : o < 0 && n < 0 && Math.abs(e) < 0.4 * h
      ? (this.dir = -2)
      : o < 0 && n < 0 && Math.abs(e) > 0.4 * h
      ? (this.dir = 0)
      : o < 0 &&
        n > 0 &&
        (this.dir = c > 0.8 * r ? (b_InputEspejo ? -2 : 2) : 0),
      (this.eventPaneo = { x: t, y: e });
  }),
  (OrbitCamera.prototype.onTouchStart = function (t) {
    if (!machine.b_LookAtFlag && !machine.b_FrozeGame && !machine.isClicking) {
      var e = GetMouseGlobalPosition(
        new pc.Vec2(t.x, t.y),
        machine.camera.camera,
        this.app
      );
      if (null === e || "Seguidor" != e.entity.name)
        if (1 == t.touches.length) {
          var i = t.touches[0];
          this.lastTouchPosition.set(i.x, i.y);
        } else
          2 == t.touches.length &&
            (this.lastPinchDistance = this.getPinchDistance(
              t.touches[0],
              t.touches[1]
            ));
      else this.b_NoOrbitCamera = !0;
    }
  }),
  (OrbitCamera.prototype.onMouseUp = function (t) {
    machine.b_FrozeGame ||
      (this.b_NoOrbitCamera &&
        ((this.b_NoOrbitCamera = !1), console.log("Liberar camara por mouse")),
      (this.b_EjecutandoOrbit = !1));
  }),
  (OrbitCamera.prototype.onTouchEnd = function (t) {
    if (
      !machine.b_FrozeGame &&
      (this.b_NoOrbitCamera &&
        ((this.b_NoOrbitCamera = !1), console.log("Liberar camara por touch")),
      (this.b_EjecutandoOrbit = !1),
      1 == t.touches.length)
    ) {
      var e = t.touches[0];
      this.lastTouchPosition.set(e.x, e.y);
    }
  }),
  (OrbitCamera.prototype.onMouseMove = function (t) {
    if (
      !machine.b_LookAtFlag &&
      !machine.b_FrozeGame &&
      !this.b_NoOrbitCamera &&
      !machine.isClicking &&
      this.app.mouse.isPressed(pc.MOUSEBUTTON_LEFT)
    )
      if (((this.b_EjecutandoOrbit = !0), machine.b_DisparoEjecutado)) {
        var e = b_InputEspejo ? -1 * t.dx : t.dx,
          i = b_InputEspejo ? -1 * t.dy : t.dy;
        this.rotateCamera(e, i, this.mouseLookSensitivity);
      } else {
        (e = b_InputEspejo ? -1 * t.dx : t.dx),
          (i = b_InputEspejo ? -1 * t.dy : t.dy);
        this.rotateCamera(e, i, this.mouseLookSensitivity);
      }
  }),
  (OrbitCamera.prototype.onTouchMove = function (t) {
    if (
      !(
        machine.b_LookAtFlag ||
        machine.b_FrozeGame ||
        this.b_NoOrbitCamera ||
        machine.isClicking ||
        1 != t.touches.length
      )
    ) {
      var e = t.touches[0];
      this.b_EjecutandoOrbit = !0;
      var i = b_InputEspejo
          ? -1 * (e.x - this.lastTouchPosition.x)
          : e.x - this.lastTouchPosition.x,
        a = b_InputEspejo
          ? -1 * (e.y - this.lastTouchPosition.y)
          : e.y - this.lastTouchPosition.y;
      this.rotateCamera(i, a, this.touchLookSensitivity),
        this.lastTouchPosition.set(e.x, e.y);
    }
  }),
  (OrbitCamera.prototype.clampPitchAngle = function (t) {
    return pc.math.clamp(t, -this.maxPitchAngle, -this.minPitchAngle);
  }),
  (OrbitCamera.prototype.zoomCamera = function (t, e) {
    console.log(t),
      (this.targetCameraDistance -= t * e),
      (this.targetCameraDistance = pc.math.clamp(
        this.targetCameraDistance,
        this.minZoomDistance,
        this.maxZoomDistance
      )),
      console.log(this.targetCameraDistance);
  }),
  (OrbitCamera.prototype.setZoom = function (t) {
    this.targetCameraDistance = t;
  }),
  (OrbitCamera.prototype.tweenZoom = function (t) {
    var e = { x: this.targetCameraDistance };
    this.app
      .tween(e)
      .to({ x: t }, 0.3, pc.SineOut)
      .on(
        "update",
        function () {
          this.targetCameraDistance = e.x;
        }.bind(this)
      )
      .start();
  }),
  (OrbitCamera.prototype.rotateCamera = function (t, e, i) {
    this.moved
      ? ((this.targetEx -= e * i),
        (this.targetEx = this.clampPitchAngle(this.targetEx)),
        (this.targetEy -= t * i))
      : (this.moved = !0);
  }),
  (OrbitCamera.prototype.onMouseWheel = function (t) {
    machine.b_FrozeGame ||
      (this.zoomCamera(t.wheel, this.mouseZoomSensitivity),
      t.event.preventDefault());
  }),
  (OrbitCamera.prototype.getPinchDistance = function (t, e) {
    var i = t.x - e.x,
      a = e.y - e.y;
    return Math.sqrt(i * i + a * a);
  }),
  (OrbitCamera.prototype.getYaw = function () {
    var t = this.entity.forward.clone();
    return Math.atan2(-t.x, -t.z);
  }),
  (OrbitCamera.prototype.getPitch = function (t, e) {
    var i = this._tempQuat1,
      a = this._tempQuat2;
    a.setFromEulerAngles(0, -e, 0), i.mul2(a, t);
    var s = this._tempVec3_1;
    return i.transformVector(pc.Vec3.FORWARD, s), Math.atan2(s.y, -s.z);
  });
var DetectorFlag = pc.createScript("detectorFlag");
DetectorFlag.attributes.add("efectoHole", {
  type: "entity",
  title: "efectoHole",
}),
  DetectorFlag.attributes.add("indicador", {
    type: "entity",
    title: "indicador",
  }),
  (DetectorFlag.prototype.initialize = function () {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
      (this.efectoHole.enabled = !1);
  }),
  (DetectorFlag.prototype.update = function (t) {}),
  (DetectorFlag.prototype.onTriggerEnter = function (t) {
    t != machine.ball ||
      machine.b_FrozeGame ||
      (1 == machine.cuantosTiros
        ? _sonidos.play("punto")
        : machine.cuantosTiros >= 2 && machine.cuantosTiros <= 3
        ? _sonidos.play("punto2")
        : machine.cuantosTiros >= 4 && machine.cuantosTiros <= 6
        ? _sonidos.play("punto2")
        : _sonidos.play("punto3"),
      (this.efectoHole.enabled = !0),
      (this.indicador.enabled = !1),
      reproduceAnim(this.efectoHole, 0),
      machine.HacerPunto(),
      (atraccion = !1));
  });
var BallOutTrigger = pc.createScript("ballOutTrigger");
(BallOutTrigger.prototype.initialize = function () {
  this.entity.collision.on("triggerenter", this.onTriggerEnter, this);
}),
  (BallOutTrigger.prototype.update = function (t) {}),
  (BallOutTrigger.prototype.onTriggerEnter = function (t) {
    t == machine.ball && machine.BolaFuera();
  });
var Ribbon = pc.createScript("ribbon");
Ribbon.attributes.add("lifetime", { type: "number", default: 0.5 }),
  Ribbon.attributes.add("xoffset", { type: "number", default: -0.8 }),
  Ribbon.attributes.add("yoffset", { type: "number", default: 1 }),
  Ribbon.attributes.add("height", { type: "number", default: 0.4 });
var MAX_VERTICES = 600,
  VERTEX_SIZE = 4;
(Ribbon.prototype.create = function (e) {
  (this.timer = 0),
    (this.node = null),
    (this.vertices = []),
    (this.vertexData = new Float32Array(MAX_VERTICES * VERTEX_SIZE)),
    (this.entity.model = null);
}),
  (Ribbon.prototype.initialize = function () {
    this.create();
    var e = {
        attributes: { aPositionAge: pc.SEMANTIC_POSITION },
        vshader: [
          "attribute vec4 aPositionAge;",
          "",
          "uniform mat4 matrix_viewProjection;",
          "uniform float trail_time;",
          "",
          "varying float vAge;",
          "",
          "void main(void)",
          "{",
          "    vAge = trail_time - aPositionAge.w;",
          "    gl_Position = matrix_viewProjection * vec4(aPositionAge.xyz, 1.0);",
          "}",
        ].join("\n"),
        fshader: [
          "precision mediump float;",
          "",
          "varying float vAge;",
          "",
          "uniform float trail_lifetime;",
          "",
          "vec3 rainbow(float x)",
          "{",
          "float level = floor(x * 6.0);",
          "float r = float(level <= 2.0) + float(level > 4.0) * 0.5;",
          "float g = max(1.0 - abs(level - 2.0) * 0.5, 0.0);",
          "float b = (1.0 - (level - 4.0) * 0.5) * float(level >= 4.0);",
          "return vec3(255, 255, 255);",
          "}",
          "void main(void)",
          "{",
          "    gl_FragColor = vec4(rainbow(vAge / trail_lifetime), (1.0 - (vAge / trail_lifetime)) * 0.5);",
          "}",
        ].join("\n"),
      },
      t = new pc.Shader(this.app.graphicsDevice, e),
      i = new pc.scene.Material();
    i.setShader(t),
      i.setParameter("trail_time", 0),
      i.setParameter("trail_lifetime", this.lifetime),
      (i.cull = pc.CULLFACE_NONE),
      (i.blend = !0),
      (i.blendSrc = pc.BLENDMODE_SRC_ALPHA),
      (i.blendDst = pc.BLENDMODE_ONE_MINUS_SRC_ALPHA),
      (i.blendEquation = pc.BLENDEQUATION_ADD),
      (i.depthWrite = !1);
    var r = new pc.VertexFormat(this.app.context.graphicsDevice, [
        {
          semantic: pc.SEMANTIC_POSITION,
          components: 4,
          type: pc.ELEMENTTYPE_FLOAT32,
        },
      ]),
      a = new pc.VertexBuffer(
        this.app.context.graphicsDevice,
        r,
        MAX_VERTICES * VERTEX_SIZE,
        pc.USAGE_DYNAMIC
      ),
      s = new pc.scene.Mesh();
    (s.vertexBuffer = a),
      (s.indexBuffer[0] = null),
      (s.primitive[0].type = pc.PRIMITIVE_TRISTRIP),
      (s.primitive[0].base = 0),
      (s.primitive[0].count = 0),
      (s.primitive[0].indexed = !1);
    var o = new pc.scene.GraphNode(),
      n = new pc.scene.MeshInstance(o, s, i);
    (n.layer = pc.scene.LAYER_WORLD),
      (n.cull = !1),
      n.updateKey(),
      (this.entity.model = new pc.scene.Model()),
      (this.entity.model.graph = o),
      this.entity.model.meshInstances.push(n),
      (this.model = this.entity.model),
      this.setNode(this.entity);
  }),
  (Ribbon.prototype.hideShadder = function () {
    for (var e = this.vertices.length - 1; e >= 0; e--) {
      this.vertices[e];
      this.vertices.pop();
    }
  }),
  (Ribbon.prototype.reset = function () {
    (this.timer = 0), (this.vertices = []);
  }),
  (Ribbon.prototype.spawn = function () {
    var e = this.node,
      t = e.getPosition(),
      i = e.up.clone().scale(this.height),
      r = this.xoffset,
      a = this.yoffset;
    this.vertices.unshift({
      spawnTime: this.timer,
      vertexPair: [
        t.x + i.x * r,
        t.y + i.y * r,
        t.z + i.z * r,
        t.x + i.x * a,
        t.y + i.y * a,
        t.z + i.z * a,
      ],
    });
  }),
  (Ribbon.prototype.clearOld = function () {
    for (var e = this.vertices.length - 1; e >= 0; e--) {
      var t = this.vertices[e];
      if (!(this.timer - t.spawnTime >= this.lifetime)) return;
      this.vertices.pop();
    }
  }),
  (Ribbon.prototype.copyToArrayBuffer = function () {
    for (var e = 0; e < this.vertices.length; e++) {
      var t = this.vertices[e];
      (this.vertexData[8 * e + 0] = t.vertexPair[0]),
        (this.vertexData[8 * e + 1] = t.vertexPair[1]),
        (this.vertexData[8 * e + 2] = t.vertexPair[2]),
        (this.vertexData[8 * e + 3] = t.spawnTime),
        (this.vertexData[8 * e + 4] = t.vertexPair[3]),
        (this.vertexData[8 * e + 5] = t.vertexPair[4]),
        (this.vertexData[8 * e + 6] = t.vertexPair[5]),
        (this.vertexData[8 * e + 7] = t.spawnTime);
    }
  }),
  (Ribbon.prototype.updateNumActive = function () {
    this.model.meshInstances[0].mesh.primitive[0].count =
      2 * this.vertices.length;
  }),
  (Ribbon.prototype.postUpdate = function (e) {
    if (
      ((this.timer += e),
      this.model.meshInstances[0].material.setParameter(
        "trail_time",
        this.timer
      ),
      this.clearOld(),
      this.spawn(),
      this.vertices.length > 1)
    ) {
      this.copyToArrayBuffer(), this.updateNumActive();
      var t = this.model.meshInstances[0].mesh.vertexBuffer;
      new Float32Array(t.lock()).set(this.vertexData),
        t.unlock(),
        this.app.scene.containsModel(this.model) ||
          this.app.scene.addModel(this.model);
    } else
      this.app.scene.containsModel(this.model) &&
        this.app.scene.removeModel(this.model);
  }),
  (Ribbon.prototype.setNode = function (e) {
    this.node = e;
  });
var ApuntaTrigger = pc.createScript("apuntaTrigger");
ApuntaTrigger.attributes.add("tipo", { type: "string" }),
  (ApuntaTrigger.prototype.initialize = function () {
    (this.listaColiders = []),
      this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
      this.entity.collision.on("triggerleave", this.onTriggerLeave, this);
  }),
  (ApuntaTrigger.prototype.onTriggerEnter = function (i) {
    this.listaColiders.push(i),
      console.log(i.name),
      i.name.includes("Tunnel_narrow")
        ? (esTunel = !0)
        : this.excepcionNoLimitar(i.name) && (noLimitar = !0),
      this.checkEstado();
  }),
  (ApuntaTrigger.prototype.onTriggerLeave = function (i) {
    this.listaColiders.pop(),
      i.name.includes("Tunnel_narrow")
        ? (esTunel = !1)
        : this.excepcionNoLimitar(i.name) && (noLimitar = !1),
      this.checkEstado();
  }),
  (ApuntaTrigger.prototype.checkEstado = function () {
    "chico" == this.tipo
      ? 0 == this.listaColiders.length
        ? (bajarVelocidadChico = !1)
        : (bajarVelocidadChico = !0)
      : "medio" == this.tipo
      ? 0 == this.listaColiders.length
        ? (bajarVelocidadMedio = !1)
        : (bajarVelocidadMedio = !0)
      : "grande" == this.tipo &&
        (0 == this.listaColiders.length
          ? (bajarVelocidadGrande = !1)
          : (bajarVelocidadGrande = !0));
  }),
  (ApuntaTrigger.prototype.clean = function () {
    (this.listaColiders = []),
      (bajarVelocidadChico = !1),
      (bajarVelocidadGrande = !1),
      (bajarVelocidadMedio = !1);
  }),
  (ApuntaTrigger.prototype.excepcionNoLimitar = function (i) {
    return !(!i.includes("Bump") && !i.includes("Ramp"));
  });
var Ccd = pc.createScript("ccd");
Ccd.attributes.add("motionThreshold", {
  type: "number",
  default: 1,
  title: "Motion Threshold",
  description: "Number of meters moved in one frame before CCD is enabled",
}),
  Ccd.attributes.add("sweptSphereRadius", {
    type: "number",
    default: 0.2,
    title: "Swept Sphere Radius",
    description:
      "This should be below the half extent of the collision volume. E.g For an object of dimensions 1 meter, try 0.2",
  }),
  (Ccd.prototype.initialize = function () {
    var e;
    (e = this.entity.rigidbody.body).setCcdMotionThreshold(
      this.motionThreshold
    ),
      e.setCcdSweptSphereRadius(this.sweptSphereRadius),
      this.on("attr:motionThreshold", function (t, i) {
        (e = this.entity.rigidbody.body).setCcdMotionThreshold(t);
      }),
      this.on("attr:sweptSphereRadius", function (t, i) {
        (e = this.entity.rigidbody.body).setCcdSweptSphereRadius(t);
      });
  });
var BarraFuerzaControl = pc.createScript("barraFuerzaControl");
BarraFuerzaControl.attributes.add("barra", { type: "entity" }),
  BarraFuerzaControl.attributes.add("cabeza", { type: "entity" }),
  BarraFuerzaControl.attributes.add("escalaMin", { type: "number" }),
  BarraFuerzaControl.attributes.add("escalaMax", { type: "number" }),
  BarraFuerzaControl.attributes.add("posCabezaMin", { type: "number" }),
  BarraFuerzaControl.attributes.add("posCabezaMax", { type: "number" }),
  BarraFuerzaControl.attributes.add("flechas", { type: "entity", array: !0 }),
  (BarraFuerzaControl.prototype.initialize = function () {}),
  (BarraFuerzaControl.prototype.setBarra = function (a) {
    var r = a,
      t = 1.56;
    this.factor = t;
    var e = 0,
      i = this.escalaMin,
      o = t,
      s = this.escalaMax,
      n = (s - i) / (o - e),
      c = n * (r - e) + i;
    (e = 0), (i = this.posCabezaMin), (o = t);
    var b = (n = ((s = this.posCabezaMax) - i) / (o - e)) * (r - e) + i,
      l = this.barra.getLocalScale();
    this.barra.setLocalScale(new pc.Vec3(l.x, l.y, c));
    var m = this.cabeza.getLocalPosition();
    this.cabeza.setLocalPosition(new pc.Vec3(m.x, m.y, b));
    var u = 0;
    r > 1.04 ? (u = 2) : r > 0.52 && (u = 1),
      this.barra.script.cambiaTextura.cambio(u),
      this.cabeza.script.cambiaTextura.cambio(u);
    var p = c / 3.33;
    this.barra.script.tillingTextura.setT(p);
    for (var C = 0; C < this.flechas.length; C++) this.flechas[C].enabled = !1;
    for (C = 5; C >= 0; C--)
      if (r > 0.26 * C) {
        this.flechas[C].enabled = !0;
        break;
      }
    (e = 0), (i = orbitCamera.minZoomDistance), (o = 1.5);
    var h =
      (n = ((s = orbitCamera.maxZoomDistance) - i) / (o - e)) * (r - e) + i;
    h > orbitCamera.maxZoomDistance
      ? (h = orbitCamera.maxZoomDistance)
      : h < orbitCamera.minZoomDistance && (h = orbitCamera.minZoomDistance),
      orbitCamera.setZoom(h);
  });
var CambiaTextura = pc.createScript("cambiaTextura");
CambiaTextura.attributes.add("material", {
  type: "asset",
  assetType: "material",
  array: !1,
}),
  CambiaTextura.attributes.add("texturas", {
    type: "asset",
    assetType: "texture",
    array: !0,
    title: "texturas",
  }),
  CambiaTextura.attributes.add("transparente", {
    type: "number",
    default: 0,
    title: "transparente",
  }),
  CambiaTextura.attributes.add("emisivo", {
    type: "number",
    default: 0,
    title: "emisivo",
  }),
  CambiaTextura.attributes.add("esElement", {
    type: "number",
    default: 0,
    title: "esElement",
  }),
  (CambiaTextura.prototype.initialize = function () {}),
  (CambiaTextura.prototype.cambio = function (e) {
    var t = this.texturas[e];
    if (0 == this.esElement) {
      var a = this.material.resource;
      (a.diffuseMap = t.resource),
        1 == this.transparente && (a.opacityMap = t.resource),
        1 == this.emisivo && (a.emissiveMap = t.resource),
        a.update();
    } else this.entity.element.texture = t.resource;
  });
var TillingTextura = pc.createScript("tillingTextura");
TillingTextura.attributes.add("material", {
  type: "asset",
  assetType: "material",
  array: !1,
}),
  TillingTextura.attributes.add("eje", {
    type: "number",
    default: 0,
    title: "ejeX_o_Y",
    description: "eje X es 1, eje Y es 0",
  }),
  TillingTextura.attributes.add("tipoMaterial", {
    type: "string",
    default: "",
    title: "opacityMapTiling",
  }),
  TillingTextura.attributes.add("tipoMaterial2", {
    type: "string",
    default: "diffuseMapTiling",
    title: "diffuseMapTiling",
  }),
  TillingTextura.attributes.add("tipoMaterial3", {
    type: "string",
    default: "",
    title: "emissiveMapTiling",
  }),
  (TillingTextura.prototype.initialize = function () {
    this.materialCargado = this.material.resource;
  }),
  (TillingTextura.prototype.resetMaterial = function (t) {
    (this.materialCargado[this.tipoMaterial] = new pc.Vec2(0, 0)),
      this.materialCargado.update(),
      (this.entity.enabled = !0),
      (this.eje = t);
  }),
  (TillingTextura.prototype.setT = function (t) {
    var i = this.materialCargado.diffuseMapTiling;
    0 == this.eje
      ? ("" != this.tipoMaterial &&
          (this.materialCargado[this.tipoMaterial] = new pc.Vec2(i.x, t)),
        "" != this.tipoMaterial2 &&
          (this.materialCargado[this.tipoMaterial2] = new pc.Vec2(i.x, t)),
        "" != this.tipoMaterial3 &&
          (this.materialCargado[this.tipoMaterial3] = new pc.Vec2(i.x, t)),
        this.materialCargado.update())
      : 1 == this.eje &&
        ("" != this.tipoMaterial &&
          (this.materialCargado[this.tipoMaterial] = new pc.Vec2(t, i.y)),
        "" != this.tipoMaterial2 &&
          (this.materialCargado[this.tipoMaterial2] = new pc.Vec2(t, i.y)),
        "" != this.tipoMaterial3 &&
          (this.materialCargado[this.tipoMaterial3] = new pc.Vec2(t, i.y)),
        this.materialCargado.update());
  }),
  (TillingTextura.prototype.apagaObjeto = function () {
    this.entity.enabled = !1;
  });
var GiroEntity = pc.createScript("giroEntity");
GiroEntity.attributes.add("speed", {
  type: "number",
  default: 5,
  title: "speed",
}),
  GiroEntity.attributes.add("eje", {
    type: "number",
    default: 0,
    title: "eje",
    description: "eje 0 = y, eje 1 = x, eje 2 = z",
  }),
  (GiroEntity.prototype.initialize = function () {}),
  (GiroEntity.prototype.update = function (t) {
    0 == this.eje
      ? this.entity.rotateLocal(0, this.speed * t, 0)
      : 1 == this.eje
      ? this.entity.rotateLocal(this.speed * t, 0, 0)
      : 2 == this.eje && this.entity.rotateLocal(0, 0, this.speed * t);
  });
var PhysicsFilter = pc.createScript("physicsFilter");
PhysicsFilter.attributes.add("groupA", {
  type: "boolean",
  title: "Group A",
  default: !1,
}),
  PhysicsFilter.attributes.add("groupB", {
    type: "boolean",
    title: "Group B",
    default: !1,
  }),
  PhysicsFilter.attributes.add("groupC", {
    type: "boolean",
    title: "Group C",
    default: !1,
  }),
  PhysicsFilter.attributes.add("groupD", {
    type: "boolean",
    title: "Group D",
    default: !1,
  }),
  PhysicsFilter.attributes.add("groupE", {
    type: "boolean",
    title: "Group E",
    default: !1,
  }),
  PhysicsFilter.attributes.add("groupF", {
    type: "boolean",
    title: "Group F",
    default: !1,
  }),
  PhysicsFilter.attributes.add("groupG", {
    type: "boolean",
    title: "Group G",
    default: !1,
  }),
  PhysicsFilter.attributes.add("groupH", {
    type: "boolean",
    title: "Group H",
    default: !1,
  }),
  PhysicsFilter.attributes.add("maskA", {
    type: "boolean",
    title: "Mask A",
    default: !1,
  }),
  PhysicsFilter.attributes.add("maskB", {
    type: "boolean",
    title: "Mask B",
    default: !1,
  }),
  PhysicsFilter.attributes.add("maskC", {
    type: "boolean",
    title: "Mask C",
    default: !1,
  }),
  PhysicsFilter.attributes.add("maskD", {
    type: "boolean",
    title: "Mask D",
    default: !1,
  }),
  PhysicsFilter.attributes.add("maskE", {
    type: "boolean",
    title: "Mask E",
    default: !1,
  }),
  PhysicsFilter.attributes.add("maskF", {
    type: "boolean",
    title: "Mask F",
    default: !1,
  }),
  PhysicsFilter.attributes.add("maskG", {
    type: "boolean",
    title: "Mask G",
    default: !1,
  }),
  PhysicsFilter.attributes.add("maskH", {
    type: "boolean",
    title: "Mask H",
    default: !1,
  }),
  (PhysicsFilter.A = 8),
  (PhysicsFilter.B = 16),
  (PhysicsFilter.C = 32),
  (PhysicsFilter.D = 64),
  (PhysicsFilter.E = 128),
  (PhysicsFilter.F = 256),
  (PhysicsFilter.G = 512),
  (PhysicsFilter.H = 1024),
  (PhysicsFilter.prototype.initialize = function () {
    (this.entity.rigidbody.group =
      (this.groupA ? PhysicsFilter.A : 0) |
      (this.groupB ? PhysicsFilter.B : 0) |
      (this.groupC ? PhysicsFilter.C : 0) |
      (this.groupD ? PhysicsFilter.D : 0) |
      (this.groupE ? PhysicsFilter.E : 0) |
      (this.groupF ? PhysicsFilter.F : 0) |
      (this.groupG ? PhysicsFilter.G : 0) |
      (this.groupH ? PhysicsFilter.H : 0)),
      (this.entity.rigidbody.mask =
        (this.maskA ? PhysicsFilter.A : 0) |
        (this.maskB ? PhysicsFilter.B : 0) |
        (this.maskC ? PhysicsFilter.C : 0) |
        (this.maskD ? PhysicsFilter.D : 0) |
        (this.maskE ? PhysicsFilter.E : 0) |
        (this.maskF ? PhysicsFilter.F : 0) |
        (this.maskG ? PhysicsFilter.G : 0) |
        (this.maskH ? PhysicsFilter.H : 0));
  });
!(function () {
  var t = new Ammo.btVector3(),
    e = new Ammo.btVector3();
  pc.RigidBodyComponentSystem.prototype.raycastFiltered = function (
    o,
    i,
    s,
    n
  ) {
    t.setValue(o.x, o.y, o.z), e.setValue(i.x, i.y, i.z);
    var l = new Ammo.ClosestRayResultCallback(t, e);
    l.set_m_collisionFilterGroup(s),
      l.set_m_collisionFilterMask(n),
      this.app.systems.rigidbody.dynamicsWorld.rayTest(t, e, l);
    var m = null;
    if (l.hasHit()) {
      var r = l.get_m_collisionObject(),
        a = Ammo.castObject(r, Ammo.btRigidBody),
        c = l.get_m_hitPointWorld(),
        y = l.get_m_hitNormalWorld();
      a &&
        (m = new (function RaycastResult(t, e, o) {
          (this.entity = t), (this.point = e), (this.normal = o);
        })(
          a.entity,
          new pc.Vec3(c.x(), c.y(), c.z()),
          new pc.Vec3(y.x(), y.y(), y.z())
        ));
    }
    return Ammo.destroy(l), m;
  };
})();
var Billboard = pc.createScript("billboard");
(Billboard.prototype.initialize = function () {
  this.camera = this.app.root.findByName("Camera");
}),
  (Billboard.prototype.update = function (t) {
    this.entity.setRotation(this.camera.getRotation());
  });
var SetAssetTematica = pc.createScript("setAssetTematica");
SetAssetTematica.attributes.add("bosque", { type: "entity", title: "bosque" }),
  SetAssetTematica.attributes.add("desierto", {
    type: "entity",
    title: "desierto",
  }),
  SetAssetTematica.attributes.add("nieve", { type: "entity", title: "nieve" }),
  (SetAssetTematica.prototype.initialize = function () {}),
  (SetAssetTematica.prototype.apagar = function () {
    (this.bosque.enabled = !1),
      (this.nieve.enabled = !1),
      (this.desierto.enabled = !1);
  }),
  (SetAssetTematica.prototype.prender = function (t) {
    this.apagar(), (this[t].enabled = !0);
  });
var ColisionBola = pc.createScript("colisionBola");
(ColisionBola.prototype.initialize = function () {
  this.entity.collision.on("collisionstart", this.onCollisionStart, this),
    this.entity.collision.on("collisionend", this.onCollisionEnd, this),
    (this.camera = this.app.root.findByName("Camera")),
    (this.particulasAgua = this.app.root.findByName("splash-shockwave3")),
    (this.agua = null),
    (this.hiloAgua = null),
    (this.tiempo = 0),
    (this.estado = "suelo");
}),
  (ColisionBola.prototype.onCollisionStart = function (i) {
    if (i.other.name.includes("muro") || i.other.name.includes("rampaborde"))
      console.log(i.other.parent.name),
        this.entity.rigidbody.linearVelocity.length() > 0.65 &&
          tocaSonido("impacto");
    else if (
      i.other.name.includes("windmill") ||
      i.other.name.includes("Windmill") ||
      i.other.name.includes("castle") ||
      i.other.name.includes("Castle") ||
      i.other.name.includes("Tunnel") ||
      i.other.name.includes("tunel") ||
      i.other.name.includes("aspas")
    ) {
      var e = this.entity.rigidbody.linearVelocity;
      (this.entity.rigidbody.linearVelocity = new pc.Vec3(e.x, 0, e.z)),
        tocaSonido("objetos");
    }
    if (i.other.name.includes("piso") || i.other.name.includes("rampas")) {
      var t = this.entity.getPosition(),
        s = new pc.Vec3(t.x, t.y - 0.3, t.z),
        o = this.app.systems.rigidbody.raycastFirst(t, s);
      null != o &&
      "piso1" != o.entity.name &&
      "piso2" != o.entity.name &&
      "piso3" != o.entity.name &&
      "piso4" != o.entity.name &&
      "piso5" != o.entity.name &&
      "piso6" != o.entity.name &&
      "piso7" != o.entity.name &&
      "piso8" != o.entity.name
        ? (this.time > 0.38 && tocaSonido("piso"),
          (this.time = 0),
          (this.estado = "suelo"))
        : (this.time = 0);
    }
  }),
  (ColisionBola.prototype.onCollisionEnd = function (i) {
    (i.name.includes("piso") || i.name.includes("rampas")) &&
      ((this.estado = "volando"), (this.time = 0));
  }),
  (ColisionBola.prototype.update = function (i) {
    if (!atraccion && null != machine && null != machine.piso) {
      "volando" == this.estado &&
        this.entity.rigidbody.enabled &&
        (this.time = this.time + i);
      var e = this.entity.getPosition(),
        t = new pc.Vec3(e.x, e.y - 0.3, e.z),
        s = this.app.systems.rigidbody.raycastFirst(e, t);
      if (null != s) {
        if ("Ball_white" == s.entity.name) {
          if (
            ((e = s.point),
            (t = new pc.Vec3(e.x, e.y - 0.3, e.z)),
            null == (s = this.app.systems.rigidbody.raycastFirst(e, t)))
          )
            return;
          console.log("reparada?? " + s.entity.name);
        }
        if ("pisoFinal" == s.entity.name || "pisoFinal2" == s.entity.name)
          for (var o = 0; o < machine.piso.length; o++)
            machine.piso[o].enabled = !1;
        else if (s.entity.name.includes("agua")) {
          (this.agua = s.entity),
            (s.entity.collision.enabled = !1),
            tocaSonido("agua"),
            clearInterval(this.hiloAgua),
            (this.hiloAgua = setInterval(
              this.poneParticulas.bind(this, this.entity.getPosition().clone()),
              120
            ));
          var n = this.entity.rigidbody.linearVelocity;
          this.entity.rigidbody.linearVelocity = new pc.Vec3(
            0.4 * n.x,
            n.y - 1,
            0.4 * n.z
          );
          for (o = 0; o < machine.piso.length; o++)
            machine.piso[o].enabled = !1;
        } else if (this.estaEnPisoFalso(s.entity.name))
          for (o = 0; o < machine.piso.length; o++)
            machine.piso[o].enabled = !1;
        else {
          for (o = 0; o < machine.piso.length; o++)
            machine.piso[o].enabled = !0;
          null != this.agua &&
            (clearInterval(this.hiloAgua),
            (this.hiloAgua = setInterval(this.poneParticulas.bind(this), 1e3)),
            (this.agua.collision.enabled = !0),
            (this.agua = null));
        }
      }
    }
  }),
  (ColisionBola.prototype.poneParticulas = function (i) {
    null != i
      ? ((this.particulasAgua.enabled = !0),
        reproduceAnim(this.particulasAgua, 0),
        this.particulasAgua.setPosition(
          this.entity.getPosition().x,
          i.y - 0.18,
          this.entity.getPosition().z
        ))
      : (this.particulasAgua.enabled = !1),
      clearInterval(this.hiloAgua);
  }),
  (ColisionBola.prototype.estaEnPisoFalso = function (i) {
    switch (i) {
      case "piso1":
      case "piso2":
      case "piso3":
      case "piso4":
      case "piso5":
      case "piso6":
      case "piso7":
      case "piso8":
      case "piso9":
      case "piso10":
      case "piso11":
      case "piso12":
      case "piso13":
      case "piso14":
      case "piso15":
      case "piso16":
      case "piso17":
      case "piso18":
      case "piso19":
      case "piso20":
        return !0;
    }
    return !1;
  });
var SelectLevel = pc.createScript("selectLevel");
SelectLevel.attributes.add("materiales", {
  type: "asset",
  assetType: "material",
  array: !0,
  title: "materiales",
}),
  SelectLevel.attributes.add("scriptPiso", { type: "asset" }),
  (SelectLevel.prototype.initialize = function () {
    this.app.assets.load(this.scriptPiso), (_levels = this);
  }),
  (SelectLevel.prototype.setLevel = function (e) {
    for (var s = 0; s < this.entity.children.length; s++)
      this.entity.children[s].enabled = !1;
    var t = this.entity.findByName("LEVEL" + currentLevel + "-suelo"),
      l = this.entity.findByName("LEVEL" + currentLevel + "-rampas"),
      i = this.entity.findByName("LEVEL" + currentLevel + "-rampaborde"),
      a = this.entity.findByName("LEVEL" + currentLevel + "-agua"),
      n = this.entity.findByName("LEVEL" + currentLevel + "-flechas");
    machine.piso = [];
    for (s = 0; s < t.children.length; s++) {
      var o = t.findByName("piso" + (s + 1));
      null != o && machine.piso.push(o);
    }
    (t.enabled = !0),
      null != l && (l.enabled = !0),
      null != i && (i.enabled = !0),
      null != a && (a.enabled = !0);
    t.getPosition();
    var r = null,
      m = null,
      c = null,
      d = null,
      h = 0,
      p = 0;
    switch (tematicasElegidas[currentIndexLevel]) {
      case "bosque":
        (r = this.materiales[0].resource),
          (m = this.materiales[3].resource),
          (c = this.materiales[6].resource),
          (d = this.materiales[9].resource),
          (h = 0.5),
          (p = 0.5);
        break;
      case "desierto":
        (r = this.materiales[1].resource),
          (m = this.materiales[4].resource),
          (c = this.materiales[7].resource),
          (d = this.materiales[10].resource),
          (h = 0.8),
          (p = 0.25);
        break;
      case "nieve":
        (r = this.materiales[2].resource),
          (m = this.materiales[5].resource),
          (c = this.materiales[8].resource),
          (d = this.materiales[11].resource),
          (h = 0.2),
          (p = 0.65);
    }
    for (var u = 0; u < t.model.meshInstances.length; u++)
      t.model.meshInstances[u].material = 1 == u ? m : r;
    if (
      (null != l &&
        ((l.model.meshInstances[0].material = r),
        null != l.model.meshInstances[1] &&
          (l.model.meshInstances[1].material = m),
        null != l.model.meshInstances[2] &&
          (l.model.meshInstances[2].material = c)),
      null != i &&
        ((i.model.meshInstances[0].material = m),
        null != i.model.meshInstances[1] &&
          (i.model.meshInstances[1].material = m)),
      null == t.collision)
    ) {
      t.addComponent("collision", { type: "mesh" }),
        (t.collision.model = t.model.model.clone()),
        this.app.systems.collision.implementations.mesh.doRecreatePhysicalShape(
          t.collision
        ),
        null != l &&
          (l.addComponent("collision", { type: "mesh" }),
          (l.collision.model = l.model.model.clone()),
          this.app.systems.collision.implementations.mesh.doRecreatePhysicalShape(
            l.collision
          ),
          l.addComponent("rigidbody", {
            type: "static",
            restitution: p,
            friction: h,
            group: pc.BODYGROUP_STATIC,
            mask: pc.BODYMASK_NOT_STATIC,
          })),
        null != i &&
          (i.addComponent("collision", { type: "mesh" }),
          (i.collision.model = i.model.model.clone()),
          this.app.systems.collision.implementations.mesh.doRecreatePhysicalShape(
            i.collision
          ),
          i.addComponent("rigidbody", {
            type: "static",
            restitution: p,
            friction: h,
            group: pc.BODYGROUP_STATIC,
            mask: pc.BODYMASK_NOT_STATIC,
          })),
        null != a &&
          (a.addComponent("collision", { type: "mesh" }),
          (a.collision.model = a.model.model.clone()),
          this.app.systems.collision.implementations.mesh.doRecreatePhysicalShape(
            a.collision
          ),
          (a.model.meshInstances[0].material = this.materiales[12].resource)),
        null != n &&
          ((n.enabled = !0), (n.model.meshInstances[0].material = d));
      for (s = 0; s < machine.piso.length; s++)
        (machine.piso[s].enabled = !0),
          machine.piso[s].addComponent("rigidbody", {
            type: "static",
            restitution: p,
            friction: h,
            group: pc.BODYGROUP_STATIC,
            mask: pc.BODYMASK_NOT_STATIC,
          });
    }
  });
var TriggerPiso = pc.createScript("triggerPiso");
TriggerPiso.attributes.add("bola", { type: "entity", title: "bola" }),
  (TriggerPiso.prototype.initialize = function () {
    (this.time = 0),
      (this.estado = "end"),
      (this.bola = this.app.root.findByName("Ball_white")),
      this.entity.collision.on("collisionstart", this.onCollisionStart, this),
      this.entity.collision.on("collisionend", this.onCollisionEnd, this);
  }),
  (TriggerPiso.prototype.onCollisionStart = function (i) {
    i.other == this.bola &&
      ((this.estado = "start"),
      this.bola.rigidbody.linearVelocity.length() > 1.8 &&
        this.time > 0.28 &&
        (enArena || tocaSonido("piso")),
      (this.time = 0));
  }),
  (TriggerPiso.prototype.onCollisionEnd = function (i) {
    i == this.bola && ((this.time = 0), (this.estado = "end"));
  }),
  (TriggerPiso.prototype.update = function (i) {
    "end" == this.estado &&
      this.bola.rigidbody.enabled &&
      (this.time = this.time + i);
  });
var TriggerArena = pc.createScript("triggerArena");
TriggerArena.attributes.add("bola", { type: "entity", title: "bola" }),
  (TriggerArena.prototype.initialize = function () {
    (this.hiloArena = null),
      (this.bola = this.app.root.findByName("Ball_white")),
      (this.particulasArena = this.app.root.findByName("arenaLoop")),
      (this.particulasNieve = this.app.root.findByName("nieveLoop")),
      this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
      this.entity.collision.on("triggerleave", this.onTriggerLeave, this);
  }),
  (TriggerArena.prototype.onTriggerEnter = function (e) {
    if ((console.log(e.name), e == this.bola)) {
      var i = this.bola.rigidbody.linearVelocity;
      (enArena = !0),
        console.log("ESTOY EN LA AREA  " + enArena),
        (this.bola.rigidbody.linearVelocity = new pc.Vec3(
          0.6 * i.x,
          0,
          0.6 * i.z
        ));
      var a = tematicasElegidas[_control.indexNivelActual];
      clearInterval(this.hiloArena),
        "nieve" == a
          ? (tocaSonido("nieve"), (this.particulasNieve.enabled = !0))
          : (tocaSonido("arena"), (this.particulasArena.enabled = !0));
    }
  }),
  (TriggerArena.prototype.onTriggerLeave = function (e) {
    if (e == this.bola) {
      var i = this.bola.rigidbody.linearVelocity;
      (this.bola.rigidbody.linearVelocity = new pc.Vec3(
        0.6 * i.x,
        0,
        0.6 * i.z
      )),
        (enArena = !1),
        console.log("sali de LA AREA  " + enArena);
      var a = tematicasElegidas[_control.indexNivelActual];
      clearInterval(this.hiloArena),
        "nieve" == a ? tocaSonido("nieve") : tocaSonido("arena"),
        (this.hiloArena = setInterval(
          function () {
            "nieve" == a
              ? (this.particulasNieve.enabled = !1)
              : (this.particulasArena.enabled = !1),
              clearInterval(this.hiloArena);
          }.bind(this),
          1e3
        ));
    }
  });
var MainMenu = pc.createScript("mainMenu");
MainMenu.attributes.add("camara", { type: "entity", title: "camara" }),
  MainMenu.attributes.add("logo", { type: "entity", title: "logo" }),
  MainMenu.attributes.add("tap", { type: "entity", title: "tap" }),
  MainMenu.attributes.add("boton", { type: "entity", title: "boton" }),
  MainMenu.attributes.add("orbit", { type: "entity", title: "orbit" }),
  MainMenu.attributes.add("control", { type: "entity", title: "control" }),
  MainMenu.attributes.add("axis", { type: "entity", title: "axis" }),
  MainMenu.attributes.add("mensajes", {
    type: "entity",
    array: !0,
    title: "mensajes",
  }),
  MainMenu.attributes.add("timeMC", { type: "entity", title: "timeMC" }),
  MainMenu.attributes.add("scoreMC", { type: "entity", title: "scoreMC" }),
  MainMenu.attributes.add("muteMC", { type: "entity", title: "muteMC" }),
  MainMenu.attributes.add("tutoMC", { type: "entity", title: "tutoMC" }),
  MainMenu.attributes.add("flagMC", { type: "entity", title: "flagMC" }),
  MainMenu.attributes.add("premioMC", { type: "entity", title: "premioMC" }),
  MainMenu.attributes.add("endPanelMC", { type: "entity", title: "endPanel" }),
  MainMenu.attributes.add("endPanelScoreMC", {
    type: "entity",
    title: "endPanelScore",
  }),
  MainMenu.attributes.add("tutorialPanelMC", {
    type: "entity",
    title: "tutorialPanelMC",
  }),
  MainMenu.attributes.add("scoreGUI2d", {
    type: "entity",
    title: "scoreGUI2d",
  }),
  MainMenu.attributes.add("scoreGUI3d", {
    type: "entity",
    title: "scoreGUI3d",
  }),
  MainMenu.attributes.add("continuePanel", {
    type: "entity",
    title: "continuePanel",
  }),
  MainMenu.attributes.add("pausePanel", {
    type: "entity",
    title: "pausePanel",
  }),
  MainMenu.attributes.add("pauseb", { type: "entity", title: "pauseb" }),
  (MainMenu.prototype.initialize = function () {
    (this.levelDebug = this.app.root.findByName("levelDebug")),
      (this.levelDebug.enabled = !1),
      this.camara.setLocalPosition(17.611, 110, 42.729),
      (this.scoreGUI = null),
      (_menu = this),
      (this.flagApretado = !1),
      (this.timeOut = 550),
      0 == muteSound && _sonidos.play("music"),
      skipMenu
        ? ((this.timeOut = 810),
          (this.camara.enabled = !0),
          this.clickStart(!1, !1))
        : ((this.camara.enable = !0),
          this.camara.script.animaMsg.mueve1Vez(
            function () {
              this.logo.script.animaMsg.pone1Vez(
                function () {
                  tocaSonido("logo"),
                    (this.tap.enabled = !0),
                    this.ponerEventos();
                }.bind(this)
              );
            }.bind(this)
          )),
      asignaEventos(this.pauseb, !0, 1, this.clickPause.bind(this)),
      onGameStart();
  }),
  (MainMenu.prototype.clickPause = function () {
    tocaSonido("click"), (this.pausePanel.enabled = !0);
    var e = this.pausePanel.findByName("resumeb"),
      t = this.pausePanel.findByName("endgameb");
    asignaEventos(e, !0, 1, this.resumePause.bind(this)),
      asignaEventos(t, !0, 1, this.endGamePause.bind(this)),
      (pause = !0),
      (machine.b_FrozeGame = !0),
      (this.app.timeScale = 0);
  }),
  (MainMenu.prototype.resumePause = function () {
    var e = this.pausePanel.findByName("resumeb"),
      t = this.pausePanel.findByName("endgameb");
    asignaEventos(e, !1),
      asignaEventos(t, !1),
      tocaSonido("click"),
      (pause = !1),
      (machine.b_FrozeGame = !1),
      (this.pausePanel.enabled = !1),
      (this.app.timeScale = 1);
  }),
  (MainMenu.prototype.endGamePause = function () {
    var e = this.pausePanel.findByName("resumeb"),
      t = this.pausePanel.findByName("endgameb");
    asignaEventos(e, !1),
      asignaEventos(t, !1),
      tocaSonido("click"),
      (pause = !1),
      (machine.b_FrozeGame = !1),
      (this.app.timeScale = 1),
      (machine.segundos = tiempoJuego),
      (this.pausePanel.enabled = !1),
      (this.conExit = !0);
  }),
  (MainMenu.prototype.quickStart = function () {
    this.clickStart(!1, !1);
  }),
  (MainMenu.prototype.ponerEventos = function () {
    asignaEventos(this.boton, !0, 1, this.clickStart.bind(this, !1, !1));
  }),
  (MainMenu.prototype.clickStart = function (e, t) {
    (adsUsados = !1),
      asignaEventos(this.boton, !1),
      t
        ? (machine.CleanAll(),
          (this.control.enabled = !1),
          (this.orbit.enabled = !1),
          (this.axis.enabled = !1),
          (this.boton.enabled = !0),
          (this.camara.enabled = !0),
          (this.entity.enabled = !0),
          (_sonidos.slot("music").volume = _sonidos.slot("music").volume / 0.5),
          mutearMusicas(),
          this.initialize())
        : showAds(this.startGolfGame.bind(this, e));
  }),
  (MainMenu.prototype.startGolfGame = function (e) {
    e &&
      ((_globalScore = 0),
      this.setScore(0, !1),
      machine.CleanAll(),
      machine.initialize()),
      this.conExit &&
        ((_globalScore = 0),
        this.setScore(0, !1),
        (this.conExit = !1),
        machine.initialize());
    var t = new pc.Color();
    (this.timeMC.children[0].element.color = t.fromString(colorNormal)),
      tocaSonido("start"),
      asignaEventos(this.boton, !1),
      this.control.script.loadScript.transicion(),
      (this.logo.enabled = !1),
      (this.tap.enabled = !1),
      setTimeout(
        function () {
          (this.boton.enabled = !1),
            (this.camara.enabled = !1),
            (this.entity.enabled = !1),
            (this.control.enabled = !0),
            (this.orbit.enabled = !0),
            (this.axis.enabled = !0),
            (_sonidos.slot("music").volume =
              0.5 * _sonidos.slot("music").volume),
            mutearMusicas(),
            setTimeout(
              function () {
                this.prendeGUI();
              }.bind(this),
              1e3
            );
        }.bind(this),
        this.timeOut
      );
  }),
  (MainMenu.prototype.prendeGUI = function () {
    (this.scoreMC.enabled = !0),
      (this.timeMC.enabled = !0),
      (this.tutoMC.enabled = !0),
      (this.muteMC.enabled = !0),
      (this.flagMC.enabled = !0),
      (this.premioMC.enabled = !0),
      (this.pauseb.enabled = !0),
      asignaEventos(this.muteMC, !1),
      asignaEventos(this.muteMC, !0, 1, this.clickBotonMute.bind(this)),
      asignaEventos(this.tutoMC, !1),
      asignaEventos(this.tutoMC, !0, 1, this.clickBotonTutorial.bind(this)),
      asignaEventos(this.flagMC, !1),
      asignaEventos(this.flagMC, !0, 1, this.clickFlag.bind(this, !0, 0.1));
  }),
  (MainMenu.prototype.apagaGUI = function () {
    (this.scoreMC.enabled = !1),
      (this.timeMC.enabled = !1),
      (this.tutoMC.enabled = !1),
      (this.muteMC.enabled = !1),
      (this.flagMC.enabled = !1),
      (this.premioMC.enabled = !1),
      (this.pauseb.enabled = !1),
      this.mataTutorial();
  }),
  (MainMenu.prototype.poneContinue = function () {
    if (adsUsados || this.conExit) this.detenerContinue(!1);
    else {
      this.continuePanel.enabled = !0;
      var e = this.continuePanel.findByName("fill"),
        t = this.continuePanel.findByName("botonYes"),
        i = this.continuePanel.findByName("botonNo");
      e.script.animaTexturas.inicioAnim(this.finTiempoContinue.bind(this)),
        asignaEventos(t, !0, 1, this.clickRewardVideo.bind(this, !0)),
        asignaEventos(i, !0, 1, this.clickRewardVideo.bind(this, !1, null));
    }
  }),
  (MainMenu.prototype.finTiempoContinue = function () {
    this.detenerContinue(!1);
  }),
  (MainMenu.prototype.clickRewardVideo = function (e) {
    this.detenerContinue(e);
  }),
  (MainMenu.prototype.detenerContinue = function (e) {
    adsUsados = !0;
    var t = this.continuePanel.findByName("fill"),
      i = this.continuePanel.findByName("botonYes"),
      n = this.continuePanel.findByName("botonNo");
    this.conExit || t.script.animaTexturas.stopAnim(),
      asignaEventos(i, !1),
      asignaEventos(n, !1),
      e
        ? showReward(
            machine.continueYES.bind(this),
            machine.continueNO.bind(this)
          )
        : machine.continueNO(),
      (this.continuePanel.enabled = !1);
  }),
  (MainMenu.prototype.poneMSG = function (e) {
    if (e > 1 && e < 6) {
      var t = this.mensajes[e].findByName("panel").findByName("textoHole"),
        i = this.mensajes[e].findByName("panel").findByName("textoScore");
      (t.element.text = "HOLE IN " + machine.cuantosTiros),
        (i.element.text = "+" + Math.round(puntoScore / machine.cuantosTiros)),
        1 == machine.cuantosTiros && (t.element.text = "");
    }
    this.mensajes[e].script.animaMsg.pone(null);
  }),
  (MainMenu.prototype.setScore = function (e, t) {
    if (t) {
      e > 99 && !this.scoreGUI3d.enabled
        ? ((this.scoreGUI3d.enabled = !0),
          (this.scoreGUI2d.enabled = !1),
          (this.scoreGUI = this.scoreGUI3d))
        : e < 100 &&
          !this.scoreGUI2d.enabled &&
          ((this.scoreGUI3d.enabled = !1),
          (this.scoreGUI2d.enabled = !0),
          (this.scoreGUI = this.scoreGUI2d));
      for (var i = 0; i < this.scoreGUI.children.length; i++)
        this.scoreGUI.children[i].enabled = !0;
      var n = this.scoreGUI.children.length - 1,
        a = "" + e;
      e < 10 ? (a = "0" + e) : e < 100 && (a = "" + e);
      for (i = 0; i < a.length; i++)
        this.scoreGUI.children[i].script.mensajeScore.poneTextura(a[i], 20);
      this.scoreGUI.children[n].script.mensajeScore.poneTextura(-1, 20);
    }
    onGameUpdate(e), (_globalScore += e);
    a = _globalScore + "";
    this.scoreMC.children[0].element.text = a;
  }),
  (MainMenu.prototype.setPremio = function (e) {
    e += 1;
    var t = this.premioMC.findByName("titulo"),
      i = this.premioMC.findByName("score");
    (t.element.text = "HOLE IN " + e), console.log("puntoScore " + puntoScore);
    var n = Math.round(puntoScore / e);
    console.log("scr " + Math.round(puntoScore / e)),
      (i.element.text = "+" + n),
      e > 1 && i.script.animaMsg.pone1Vez(null);
  }),
  (MainMenu.prototype.setTime = function (e, t) {
    if (
      t < 10 &&
      this.timeMC.children[0].element.color.toString() == colorNormal
    ) {
      var i = new pc.Color();
      (this.timeMC.children[0].element.color = i.fromString(colorParpadeo)),
        _sonidos.slot("pocoTiempo").isPlaying || tocaSonido("pocoTiempo");
    } else
      t < 10 &&
        (_sonidos.slot("pocoTiempo").isPlaying || tocaSonido("pocoTiempo"),
        (this.timeMC.children[0].script.parpadear.autoStart = 2));
    if (-1 == t)
      _sonidos.stop("pocoTiempo"),
        (this.timeMC.children[0].script.parpadear.autoStart = 0),
        (this.timeMC.children[0].element.enabled = !0);
    else if (t > tiempoJuegoLimite) {
      var n =
        ((t = tiempoJuegoLimite) / 60 < 10
          ? "0" + Math.floor(t / 60)
          : Math.floor(t / 60)) +
        ":" +
        (t % 60 < 10 ? "0" + (t % 60) : t % 60);
      this.timeMC.children[0].element.text = n;
    } else this.timeMC.children[0].element.text = e;
  }),
  (MainMenu.prototype.panelEndScore = function () {
    setTimeout(
      function () {
        var e = _globalScore;
        _sonidos.play("endScreen"),
          0 == e && (e = "0"),
          (this.endPanelScoreMC.element.text = e),
          onGameEnd(),
          this.endPanelMC.script.animaMsg.pone1Vez(
            function () {
              (this.tap.enabled = !0),
                (this.boton.enabled = !0),
                asignaEventos(this.boton, !0, 1, this.clickRestart.bind(this));
            }.bind(this)
          );
      }.bind(this),
      1700
    );
  }),
  (MainMenu.prototype.clickRestart = function () {
    asignaEventos(this.boton, !1),
      (this.endPanelMC.enabled = !1),
      this.clickStart(!0, this.conExit);
  }),
  (MainMenu.prototype.clickBotonMute = function () {
    var e = this.muteMC;
    0 == muteSound
      ? (e.script.animaMsg.clickBoton(null, !1, 1), mute(1))
      : (e.script.animaMsg.clickBoton(null, !1, 0), mute(0)),
      tocaSonido("click");
  }),
  (MainMenu.prototype.clickBotonTutorial = function () {
    tocaSonido("click");
    var e = this.tutorialPanelMC;
    if (!e.enabled) {
      tocaSonido("click"), (e.enabled = !0);
      var t = e.findByName("boton");
      (_control.b_FrozeGame = !0),
        asignaEventos(t, !0, 1, this.clickTutorial.bind(this));
    }
  }),
  (MainMenu.prototype.clickTutorial = function () {
    tocaSonido("click"), (_control.b_FrozeGame = !1), this.mataTutorial();
  }),
  (MainMenu.prototype.mataTutorial = function () {
    var e = this.tutorialPanelMC,
      t = e.findByName("boton");
    asignaEventos(t, !1), (e.enabled = !1);
  }),
  (MainMenu.prototype.finalForzado = function () {
    machine.segundos = tiempoJuego;
  }),
  (MainMenu.prototype.setTime_eazegames = function (e) {
    (tiempoJuegoLimite = e), (tiempoJuego = tiempoJuegoLimite + 2);
  }),
  (MainMenu.prototype.clickFlag = function (e, t) {
    this.flagApretado ||
      ((this.flagApretado = !0),
      (orbitCamera.speed_snappinessFactor = t),
      e && tocaSonido("click"),
      machine.forceLookAtFlag());
  }),
  (MainMenu.prototype.finClickFlag = function () {
    (machine.b_LookAtFlag = !1),
      (this.flagApretado = !1),
      (orbitCamera.speed_snappinessFactor = 0),
      (orbitCamera.snappinessFactor = 0.3);
  });
var HoleFake = pc.createScript("holeFake");
(HoleFake.prototype.initialize = function () {
  this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
    this.entity.collision.on("triggerleave", this.onTriggerLeave, this),
    (this.atraccion = !1),
    (this.tolerancia = 0.03),
    (this.velocidad = 0),
    (this.hiloEntrar = null),
    (this.hiloSalir = null),
    (_holeFake = this);
}),
  (HoleFake.prototype.update = function (i) {
    if (this.atraccion && atraccion) {
      var e = machine.ball.getPosition(),
        t = this.entity.getPosition(),
        a = new pc.Vec3();
      a.sub2(e, t),
        machine.ball.rigidbody.applyImpulse(
          a.normalize().scale(-this.velocidad / 10)
        ),
        t.distance(e),
        this.tolerancia;
    }
  }),
  (HoleFake.prototype.onTriggerEnter = function (i) {
    i != machine.ball ||
      machine.b_FrozeGame ||
      (machine.ball.rigidbody.linearVelocity.length() < 18 &&
        ((this.velocidad = machine.ball.rigidbody.linearVelocity.length()),
        machine.ResetPhysic(),
        (this.atraccion = !0),
        (atraccion = !0),
        clearInterval(this.hiloEntrar),
        (this.hiloEntrar = setInterval(this.apagarPiso.bind(this), 170))));
  }),
  (HoleFake.prototype.apagarPiso = function () {
    for (var i = 0; i < machine.piso.length; i++) machine.piso[i].enabled = !1;
    clearInterval(this.hiloEntrar);
  }),
  (HoleFake.prototype.onTriggerLeave = function (i) {
    i == machine.ball &&
      (clearInterval(this.hiloSalir),
      (this.hiloSalir = setInterval(
        function () {
          (this.atraccion = !1),
            (atraccion = !1),
            clearInterval(this.hiloSalir);
        }.bind(this),
        2e3
      )));
  });
var TriggerMoneda = pc.createScript("triggerMoneda");
TriggerMoneda.attributes.add("bola", { type: "entity", title: "bola" }),
  TriggerMoneda.attributes.add("particulas", {
    type: "entity",
    title: "particulas",
  }),
  (TriggerMoneda.prototype.initialize = function () {
    (this.bola = this.app.root.findByName("Ball_white")),
      (this.particulas = this.entity.findByName("particles-comemonedaC")),
      (this.particulas.enabled = !1),
      this.entity.collision.on("triggerenter", this.onTriggerEnter, this),
      this.entity.collision.on("triggerleave", this.onTriggerLeave, this);
  }),
  (TriggerMoneda.prototype.onTriggerEnter = function (e) {
    e == this.bola &&
      (tocaSonido("moneda"),
      _menu.setScore(scoreMoneda, !0),
      (this.entity.model.enabled = !1),
      (this.entity.collision.enabled = !1),
      (this.particulas.enabled = !0),
      reproduceAnim(this.particulas, 0));
  }),
  (TriggerMoneda.prototype.onTriggerLeave = function (e) {
    this.bola;
  });
var MensajeScoreGui = pc.createScript("mensajeScoreGui");
MensajeScoreGui.attributes.add("texturas", {
  type: "asset",
  assetType: "texture",
  array: !0,
  title: "texturas",
}),
  MensajeScoreGui.attributes.add("material", {
    type: "asset",
    assetType: "material",
    array: !0,
  }),
  MensajeScoreGui.attributes.add("parpadeo", {
    type: "number",
    title: "parpadeo",
  }),
  MensajeScoreGui.attributes.add("aparicion", {
    type: "number",
    title: "aparicion",
  }),
  (MensajeScoreGui.prototype.initialize = function () {
    console.log("PERO Q MIERDA "), (this.tween = null);
    var t = this.entity.getLocalPosition();
    (this.posicionInicial = new pc.Vec3(t.x, t.y, t.z)),
      (this.alfaCont = 1),
      (this.contStartAlfa = 0),
      0 == this.aparicion && (this.entity.enabled = !1);
  }),
  (MensajeScoreGui.prototype.poneTextura = function (t) {
    null != this.tween && this.tween.stop(),
      null == this.posicionInicial && this.initialize();
    var e = this.material[0].resource,
      i = this.texturas[t].resource;
    if (
      (this.entity.setLocalPosition(
        this.posicionInicial.x,
        this.posicionInicial.y,
        this.posicionInicial.z
      ),
      (e.diffuseMap = i),
      (e.opacityMap = i),
      (e.opacity = 1),
      (this.alfaCont = 1),
      (this.contStartAlfa = 0),
      e.update(),
      1 == this.parpadeo)
    ) {
      var a = this.entity.getLocalPosition();
      this.tween = this.entity
        .tween(a)
        .to(new pc.Vec3(a.x, a.y, a.z), 1.2, pc.QuadraticOut)
        .on("update", this.controlaAlpha.bind(this, e))
        .on("complete", this.escondeMensaje.bind(this))
        .start();
    }
  }),
  (MensajeScoreGui.prototype.controlaAlpha = function (t) {
    (this.contStartAlfa = this.contStartAlfa + 1),
      5 == this.contStartAlfa &&
        ((this.entity.enabled = !this.entity.enabled),
        (this.contStartAlfa = 0));
  }),
  (MensajeScoreGui.prototype.escondeMensaje = function (t) {
    this.entity.enabled = !1;
  });
var MensajeScore = pc.createScript("mensajeScore");
MensajeScore.attributes.add("texturas", {
  type: "asset",
  assetType: "texture",
  array: !0,
  title: "texturas",
}),
  MensajeScore.attributes.add("material", {
    type: "asset",
    assetType: "material",
    array: !0,
  }),
  (MensajeScore.prototype.initialize = function () {
    this.tween = null;
    var t = this.entity.getLocalPosition();
    (this.posicionInicial = new pc.Vec3(t.x, t.y, t.z)),
      this.entity.setLocalPosition(100, 100, 100),
      (this.alfaCont = 1),
      (this.contStartAlfa = 0);
    var e = this.material[0].resource;
    if (this.texturas.length > 0) {
      var a = this.texturas[0].resource;
      (e.diffuseMap = a), (e.opacityMap = a), (e.emissiveMap = a);
    }
    (e.opacity = 1), e.update();
  }),
  (MensajeScore.prototype.poneTextura = function (t, e, a) {
    null != this.tween && this.tween.stop(),
      (this.entity.enabled = !0),
      this.entity.setLocalPosition(
        this.posicionInicial.x,
        this.posicionInicial.y,
        this.posicionInicial.z
      );
    var i = 1;
    null != e && (i = e);
    var s = this.material[0].resource;
    if (-1 != t) {
      var n = this.texturas[t].resource;
      (s.diffuseMap = n), (s.opacityMap = n), (s.emissiveMap = n);
    }
    (s.opacity = 1), (this.alfaCont = 1), (this.contStartAlfa = 0), s.update();
    var o = this.entity.getLocalPosition();
    this.tween = this.entity
      .tween(o)
      .to(new pc.Vec3(o.x, o.y + 1.8 * i, o.z), 1.6, pc.QuadraticOut)
      .on("update", this.controlaAlpha.bind(this, s))
      .on("complete", this.escondeMensaje.bind(this))
      .start();
  }),
  (MensajeScore.prototype.controlaAlpha = function (t) {
    (this.contStartAlfa = this.contStartAlfa + 1),
      this.contStartAlfa >= 12 &&
        ((this.alfaCont = this.alfaCont - 0.027),
        this.alfaCont < 0 && (this.alfaCont = 0),
        (t.opacity = this.alfaCont),
        t.update());
  }),
  (MensajeScore.prototype.escondeMensaje = function (t) {
    this.entity.parent.enabled = !1;
  });
"undefined" != typeof document &&
  ((function (t, e) {
    function s(t, e) {
      for (var n in e)
        try {
          t.style[n] = e[n];
        } catch (t) {}
      return t;
    }
    function H(t) {
      return null == t
        ? String(t)
        : "object" == typeof t || "function" == typeof t
        ? Object.prototype.toString
            .call(t)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase() || "object"
        : typeof t;
    }
    function R(t, e) {
      if ("array" !== H(e)) return -1;
      if (e.indexOf) return e.indexOf(t);
      for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
      return -1;
    }
    function I() {
      var t,
        e = arguments;
      for (t in e[1])
        if (e[1].hasOwnProperty(t))
          switch (H(e[1][t])) {
            case "object":
              e[0][t] = I({}, e[0][t], e[1][t]);
              break;
            case "array":
              e[0][t] = e[1][t].slice(0);
              break;
            default:
              e[0][t] = e[1][t];
          }
      return 2 < e.length
        ? I.apply(null, [e[0]].concat(Array.prototype.slice.call(e, 2)))
        : e[0];
    }
    function N(t) {
      return 1 === (t = Math.round(255 * t).toString(16)).length ? "0" + t : t;
    }
    function S(t, e, n, i) {
      t.addEventListener
        ? t[i ? "removeEventListener" : "addEventListener"](e, n, !1)
        : t.attachEvent && t[i ? "detachEvent" : "attachEvent"]("on" + e, n);
    }
    function D(t, i) {
      function g(t, e, n, i) {
        return p[0 | t][Math.round(Math.min(((e - n) / (i - n)) * M, M))];
      }
      function r() {
        P.legend.fps !== B &&
          ((P.legend.fps = B), (P.legend[l] = B ? "FPS" : "ms")),
          (w = B ? F.fps : F.duration),
          (P.count[l] = 999 < w ? "999+" : w.toFixed(99 < w ? 0 : O.decimals));
      }
      function m() {
        for (
          c = n(),
            j < c - O.threshold &&
              ((F.fps -= F.fps / Math.max(1, (60 * O.smoothing) / O.interval)),
              (F.duration = 1e3 / F.fps)),
            b = O.history;
          b--;

        )
          (T[b] = 0 === b ? F.fps : T[b - 1]),
            (q[b] = 0 === b ? F.duration : q[b - 1]);
        if ((r(), O.heat)) {
          if (z.length)
            for (b = z.length; b--; )
              z[b].el.style[h[z[b].name].heatOn] = B
                ? g(h[z[b].name].heatmap, F.fps, 0, O.maxFps)
                : g(h[z[b].name].heatmap, F.duration, O.threshold, 0);
          if (P.graph && h.column.heatOn)
            for (b = C.length; b--; )
              C[b].style[h.column.heatOn] = B
                ? g(h.column.heatmap, T[b], 0, O.maxFps)
                : g(h.column.heatmap, q[b], O.threshold, 0);
        }
        if (P.graph)
          for (y = 0; y < O.history; y++)
            C[y].style.height =
              (B
                ? T[y]
                  ? Math.round((v / O.maxFps) * Math.min(T[y], O.maxFps))
                  : 0
                : q[y]
                ? Math.round((v / O.threshold) * Math.min(q[y], O.threshold))
                : 0) + "px";
      }
      function k() {
        20 > O.interval
          ? ((f = o(k)), m())
          : ((f = setTimeout(k, O.interval)), (x = o(m)));
      }
      function G(t) {
        (t = t || window.event).preventDefault
          ? (t.preventDefault(), t.stopPropagation())
          : ((t.returnValue = !1), (t.cancelBubble = !0)),
          F.toggle();
      }
      function U() {
        O.toggleOn && S(P.container, O.toggleOn, G, 1),
          t.removeChild(P.container);
      }
      function V() {
        if (
          (P.container && U(),
          (h = D.theme[O.theme]),
          !(p = h.compiledHeatmaps || []).length && h.heatmaps.length)
        ) {
          for (y = 0; y < h.heatmaps.length; y++)
            for (p[y] = [], b = 0; b <= M; b++) {
              var e,
                n = p[y],
                i = b;
              e = (0.33 / M) * b;
              var a = h.heatmaps[y].saturation,
                o = h.heatmaps[y].lightness,
                c = void 0,
                l = void 0,
                d = void 0,
                u = (d = void 0),
                m = (c = l = void 0);
              m = void 0;
              0 === (d = 0.5 >= o ? o * (1 + a) : o + a - o * a)
                ? (e = "#000")
                : ((l = (d - (u = 2 * o - d)) / d),
                  (m = (e *= 6) - (c = Math.floor(e))),
                  (m *= d * l),
                  0 === c || 6 === c
                    ? ((c = d), (l = u + m), (d = u))
                    : 1 === c
                    ? ((c = d - m), (l = d), (d = u))
                    : 2 === c
                    ? ((c = u), (l = d), (d = u + m))
                    : 3 === c
                    ? ((c = u), (l = d - m))
                    : 4 === c
                    ? ((c = u + m), (l = u))
                    : ((c = d), (l = u), (d -= m)),
                  (e = "#" + N(c) + N(l) + N(d))),
                (n[i] = e);
            }
          h.compiledHeatmaps = p;
        }
        for (var f in ((P.container = s(
          document.createElement("div"),
          h.container
        )),
        (P.count = P.container.appendChild(
          s(document.createElement("div"), h.count)
        )),
        (P.legend = P.container.appendChild(
          s(document.createElement("div"), h.legend)
        )),
        (P.graph = O.graph
          ? P.container.appendChild(s(document.createElement("div"), h.graph))
          : 0),
        (z.length = 0),
        P))
          P[f] && h[f].heatOn && z.push({ name: f, el: P[f] });
        if (((C.length = 0), P.graph))
          for (
            P.graph.style.width =
              O.history * h.column.width +
              (O.history - 1) * h.column.spacing +
              "px",
              b = 0;
            b < O.history;
            b++
          )
            (C[b] = P.graph.appendChild(
              s(document.createElement("div"), h.column)
            )),
              (C[b].style.position = "absolute"),
              (C[b].style.bottom = 0),
              (C[b].style.right =
                b * h.column.width + b * h.column.spacing + "px"),
              (C[b].style.width = h.column.width + "px"),
              (C[b].style.height = "0px");
        s(P.container, O),
          r(),
          t.appendChild(P.container),
          P.graph && (v = P.graph.clientHeight),
          O.toggleOn &&
            ("click" === O.toggleOn && (P.container.style.cursor = "pointer"),
            S(P.container, O.toggleOn, G));
      }
      "object" === H(t) && t.nodeType === e && ((i = t), (t = document.body)),
        t || (t = document.body);
      var h,
        p,
        c,
        f,
        x,
        v,
        w,
        b,
        y,
        F = this,
        O = I({}, D.defaults, i || {}),
        P = {},
        C = [],
        M = 100,
        z = [],
        E = O.threshold,
        A = 0,
        j = n() - E,
        T = [],
        q = [],
        B = "fps" === O.show;
      (F.options = O),
        (F.fps = 0),
        (F.duration = 0),
        (F.isPaused = 0),
        (F.tickStart = function () {
          A = n();
        }),
        (F.tick = function () {
          (c = n()),
            (E += (c - j - E) / O.smoothing),
            (F.fps = 1e3 / E),
            (F.duration = A < j ? E : c - A),
            (j = c);
        }),
        (F.pause = function () {
          return (
            f && ((F.isPaused = 1), clearTimeout(f), a(f), a(x), (f = x = 0)), F
          );
        }),
        (F.resume = function () {
          return f || ((F.isPaused = 0), k()), F;
        }),
        (F.set = function (t, e) {
          return (
            (O[t] = e),
            (B = "fps" === O.show),
            -1 !== R(t, d) && V(),
            -1 !== R(t, u) && s(P.container, O),
            F
          );
        }),
        (F.showDuration = function () {
          return F.set("show", "ms"), F;
        }),
        (F.showFps = function () {
          return F.set("show", "fps"), F;
        }),
        (F.toggle = function () {
          return F.set("show", B ? "ms" : "fps"), F;
        }),
        (F.hide = function () {
          return F.pause(), (P.container.style.display = "none"), F;
        }),
        (F.show = function () {
          return F.resume(), (P.container.style.display = "block"), F;
        }),
        (F.destroy = function () {
          F.pause(), U(), (F.tick = F.tickStart = function () {});
        }),
        V(),
        k();
    }
    var n,
      i = t.performance;
    n =
      i && (i.now || i.webkitNow)
        ? i[i.now ? "now" : "webkitNow"].bind(i)
        : function () {
            return +new Date();
          };
    for (
      var a = t.cancelAnimationFrame || t.cancelRequestAnimationFrame,
        o = t.requestAnimationFrame,
        h = 0,
        p = 0,
        c = (i = ["moz", "webkit", "o"]).length;
      p < c && !a;
      ++p
    )
      o =
        (a =
          t[i[p] + "CancelAnimationFrame"] ||
          t[i[p] + "CancelRequestAnimationFrame"]) &&
        t[i[p] + "RequestAnimationFrame"];
    a ||
      ((o = function (e) {
        var i = n(),
          a = Math.max(0, 16 - (i - h));
        return (
          (h = i + a),
          t.setTimeout(function () {
            e(i + a);
          }, a)
        );
      }),
      (a = function (t) {
        clearTimeout(t);
      }));
    var l =
      "string" === H(document.createElement("div").textContent)
        ? "textContent"
        : "innerText";
    (D.extend = I),
      (window.FPSMeter = D),
      (D.defaults = {
        interval: 100,
        smoothing: 10,
        show: "fps",
        toggleOn: "click",
        decimals: 1,
        maxFps: 60,
        threshold: 100,
        position: "absolute",
        zIndex: 10,
        left: "5px",
        top: "5px",
        right: "auto",
        bottom: "auto",
        margin: "0 0 0 0",
        theme: "dark",
        heat: 0,
        graph: 0,
        history: 20,
      });
    var d = ["toggleOn", "theme", "heat", "graph", "history"],
      u = "position zIndex left top right bottom margin".split(" ");
  })(window),
  (function (t, e) {
    e.theme = {};
    var n = (e.theme.base = {
      heatmaps: [],
      container: {
        heatOn: null,
        heatmap: null,
        padding: "5px",
        minWidth: "95px",
        height: "30px",
        lineHeight: "30px",
        textAlign: "right",
        textShadow: "none",
      },
      count: {
        heatOn: null,
        heatmap: null,
        position: "absolute",
        top: 0,
        right: 0,
        padding: "5px 10px",
        height: "30px",
        fontSize: "24px",
        fontFamily: "Consolas, Andale Mono, monospace",
        zIndex: 2,
      },
      legend: {
        heatOn: null,
        heatmap: null,
        position: "absolute",
        top: 0,
        left: 0,
        padding: "5px 10px",
        height: "30px",
        fontSize: "12px",
        lineHeight: "32px",
        fontFamily: "sans-serif",
        textAlign: "left",
        zIndex: 2,
      },
      graph: {
        heatOn: null,
        heatmap: null,
        position: "relative",
        boxSizing: "padding-box",
        MozBoxSizing: "padding-box",
        height: "100%",
        zIndex: 1,
      },
      column: { width: 4, spacing: 1, heatOn: null, heatmap: null },
    });
    (e.theme.dark = e.extend({}, n, {
      heatmaps: [{ saturation: 0.8, lightness: 0.8 }],
      container: {
        background: "#222",
        color: "#fff",
        border: "1px solid #1a1a1a",
        textShadow: "1px 1px 0 #222",
      },
      count: { heatOn: "color" },
      column: { background: "#3f3f3f" },
    })),
      (e.theme.light = e.extend({}, n, {
        heatmaps: [{ saturation: 0.5, lightness: 0.5 }],
        container: {
          color: "#666",
          background: "#fff",
          textShadow:
            "1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        },
        count: { heatOn: "color" },
        column: { background: "#eaeaea" },
      })),
      (e.theme.colorful = e.extend({}, n, {
        heatmaps: [{ saturation: 0.5, lightness: 0.6 }],
        container: {
          heatOn: "backgroundColor",
          background: "#888",
          color: "#fff",
          textShadow: "1px 1px 0 rgba(0,0,0,.2)",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        },
        column: { background: "#777", backgroundColor: "rgba(0,0,0,.2)" },
      })),
      (e.theme.transparent = e.extend({}, n, {
        heatmaps: [{ saturation: 0.8, lightness: 0.5 }],
        container: {
          padding: 0,
          color: "#fff",
          textShadow: "1px 1px 0 rgba(0,0,0,.5)",
        },
        count: { padding: "0 5px", height: "40px", lineHeight: "40px" },
        legend: { padding: "0 5px", height: "40px", lineHeight: "42px" },
        graph: { height: "40px" },
        column: {
          width: 5,
          background: "#999",
          heatOn: "backgroundColor",
          opacity: 0.5,
        },
      }));
  })(window, FPSMeter));
var Fps = pc.createScript("fps");
(Fps.prototype.initialize = function () {
  (_fps = this),
    (this.fps = new FPSMeter({ heat: !1, graph: !1 })),
    this.fps.hide(),
    (this.tiempo = 0),
    (this.tiempoMax = 1.2),
    (this.sumFps = 0),
    (this.cantFps = 0),
    (this.iniciarCalculos = !1),
    (this.primerIntento = !0),
    (this.rectificadores = 0),
    (this.maxRectificadores = 1);
}),
  (Fps.prototype.ini = function () {
    this.iniciarCalculos = !0;
  }),
  (Fps.prototype.update = function (t) {
    if (this.iniciarCalculos && this.rectificadores != this.maxRectificadores)
      if (
        (this.fps.tick(),
        (this.tiempo = this.tiempo + t),
        this.tiempo < this.tiempoMax)
      )
        (this.sumFps = this.sumFps + this.fps.fps),
          (this.cantFps = this.cantFps + 1);
      else {
        var e = this.sumFps / this.cantFps;
        if (this.primerIntento)
          console.log("el promedio de fps 1 intento fue de " + e),
            (this.primerIntento = !1),
            (this.tiempoMax = 2);
        else {
          console.log("el promedio de fps fue de " + e),
            (this.rectificadores = this.rectificadores + 1);
          var n = "";
          if (
            ((n =
              e > 45
                ? "alta"
                : e > 33
                ? "media"
                : e > 14
                ? "mediaBaja"
                : "baja"),
            calidad != n)
          )
            switch (((calidad = n), calidad)) {
              case "alta":
                this.app.graphicsDevice.maxPixelRatio = window.devicePixelRatio;
                break;
              case "media":
                window.devicePixelRatio > 2
                  ? (this.app.graphicsDevice.maxPixelRatio = 2)
                  : window.devicePixelRatio > 1.5
                  ? (this.app.graphicsDevice.maxPixelRatio = 1.5)
                  : (this.app.graphicsDevice.maxPixelRatio = 1);
                break;
              case "mediaBaja":
                window.devicePixelRatio,
                  (this.app.graphicsDevice.maxPixelRatio = 1);
                break;
              case "baja":
                this.app.graphicsDevice.maxPixelRatio = 0.75;
            }
        }
        (this.sumFps = 0), (this.tiempo = 0), (this.cantFps = 0);
      }
  });
pc.extend(
  pc,
  (function () {
    var e = function (e) {
      var o = { aPosition: pc.SEMANTIC_POSITION },
        r = [
          "attribute vec2 aPosition;",
          "",
          "void main(void)",
          "{",
          "    gl_Position = vec4(aPosition, 0.0, 1.0);",
          "}",
        ].join("\n"),
        a = [
          "precision " + e.precision + " float;",
          "",
          "uniform sampler2D uColorBuffer;",
          "uniform vec2 uResolution;",
          "",
          "#define FXAA_REDUCE_MIN   (1.0/128.0)",
          "#define FXAA_REDUCE_MUL   (1.0/8.0)",
          "#define FXAA_SPAN_MAX     8.0",
          "",
          "void main()",
          "{",
          "    vec3 rgbNW = texture2D( uColorBuffer, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * uResolution ).xyz;",
          "    vec3 rgbNE = texture2D( uColorBuffer, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * uResolution ).xyz;",
          "    vec3 rgbSW = texture2D( uColorBuffer, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * uResolution ).xyz;",
          "    vec3 rgbSE = texture2D( uColorBuffer, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * uResolution ).xyz;",
          "    vec4 rgbaM  = texture2D( uColorBuffer,  gl_FragCoord.xy  * uResolution );",
          "    vec3 rgbM  = rgbaM.xyz;",
          "    float opacity  = rgbaM.w;",
          "",
          "    vec3 luma = vec3( 0.299, 0.587, 0.114 );",
          "",
          "    float lumaNW = dot( rgbNW, luma );",
          "    float lumaNE = dot( rgbNE, luma );",
          "    float lumaSW = dot( rgbSW, luma );",
          "    float lumaSE = dot( rgbSE, luma );",
          "    float lumaM  = dot( rgbM,  luma );",
          "    float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );",
          "    float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );",
          "",
          "    vec2 dir;",
          "    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));",
          "    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));",
          "",
          "    float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );",
          "",
          "    float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );",
          "    dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX), max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), dir * rcpDirMin)) * uResolution;",
          "",
          "    vec3 rgbA = 0.5 * (",
          "        texture2D( uColorBuffer, gl_FragCoord.xy  * uResolution + dir * ( 1.0 / 3.0 - 0.5 ) ).xyz +",
          "        texture2D( uColorBuffer, gl_FragCoord.xy  * uResolution + dir * ( 2.0 / 3.0 - 0.5 ) ).xyz );",
          "",
          "    vec3 rgbB = rgbA * 0.5 + 0.25 * (",
          "        texture2D( uColorBuffer, gl_FragCoord.xy  * uResolution + dir * -0.5 ).xyz +",
          "        texture2D( uColorBuffer, gl_FragCoord.xy  * uResolution + dir * 0.5 ).xyz );",
          "",
          "    float lumaB = dot( rgbB, luma );",
          "",
          "    if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )",
          "    {",
          "        gl_FragColor = vec4( rgbA, opacity );",
          "    }",
          "    else",
          "    {",
          "        gl_FragColor = vec4( rgbB, opacity );",
          "    }",
          "}",
        ].join("\n");
      (this.fxaaShader = new pc.Shader(e, {
        attributes: o,
        vshader: r,
        fshader: a,
      })),
        (this.resolution = new Float32Array(2));
    };
    return (
      ((e = pc.inherits(e, pc.PostEffect)).prototype = pc.extend(e.prototype, {
        render: function (e, o, r) {
          var a = this.device,
            t = a.scope;
          (this.resolution[0] = 1 / e.width),
            (this.resolution[1] = 1 / e.height),
            t.resolve("uResolution").setValue(this.resolution),
            t.resolve("uColorBuffer").setValue(e.colorBuffer),
            pc.drawFullscreenQuad(a, o, this.vertexBuffer, this.fxaaShader, r);
        },
      })),
      { FxaaEffect: e }
    );
  })()
);
var Fxaa = pc.createScript("fxaa");
Fxaa.prototype.initialize = function () {
  this.effect = new pc.FxaaEffect(this.app.graphicsDevice);
  var e = this.entity.camera.postEffects;
  e.addEffect(this.effect),
    this.on("state", function (o) {
      o ? e.addEffect(this.effect) : e.removeEffect(this.effect);
    }),
    this.on("destroy", function () {
      e.removeEffect(this.effect);
    });
};
