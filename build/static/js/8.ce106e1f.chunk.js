(this['webpackJsonpinterview-manager-system'] = this['webpackJsonpinterview-manager-system'] || []).push([
  [8],
  {
    297: function (e, t, n) {
      'use strict';
      var r = n(12),
        a = n(0),
        i = n.n(a),
        s = n(485),
        c = n(271),
        o = n(1),
        l = i.a.forwardRef(function (e, t) {
          var n,
            a,
            i,
            l,
            d = e.children,
            j = e.type,
            u = e.direction,
            b = e.offset,
            h = e.scale;
          switch (u) {
            case 'up':
            case 'left':
              (i = b), (l = 0);
              break;
            default:
              (i = 0), (l = b);
          }
          var m = Object(s.a)(i, l),
            x = Object(r.a)(m, 2),
            O = x[0],
            p = x[1],
            f = Object(s.a)(i, l),
            v = Object(r.a)(f, 2),
            g = v[0],
            w = v[1];
          switch (j) {
            case 'rotate':
              return Object(o.jsx)(c.a.div, {
                ref: t,
                animate: { rotate: 360 },
                transition: { repeat: 1 / 0, repeatType: 'loop', duration: 2, repeatDelay: 0 },
                children: d
              });
            case 'slide':
              return 'up' === u || 'down' === u
                ? Object(o.jsx)(c.a.div, {
                    ref: t,
                    animate: { y: void 0 !== g ? g : '' },
                    onHoverEnd: function () {
                      return w();
                    },
                    onHoverStart: function () {
                      return w();
                    },
                    children: d
                  })
                : Object(o.jsx)(c.a.div, {
                    ref: t,
                    animate: { x: void 0 !== O ? O : '' },
                    onHoverEnd: function () {
                      return p();
                    },
                    onHoverStart: function () {
                      return p();
                    },
                    children: d
                  });
            default:
              return (
                'number' === typeof h && (h = { hover: h, tap: h }),
                Object(o.jsx)(c.a.div, {
                  ref: t,
                  whileHover: { scale: null === (n = h) || void 0 === n ? void 0 : n.hover },
                  whileTap: { scale: null === (a = h) || void 0 === a ? void 0 : a.tap },
                  children: d
                })
              );
          }
        });
      (l.defaultProps = { type: 'scale', offset: 10, direction: 'right', scale: { hover: 1, tap: 0.9 } }), (t.a = l);
    },
    334: function (e, t, n) {
      'use strict';
      var r = n(6),
        a = n(58),
        i = n(256),
        s = n(126),
        c = n(1),
        o = ['children'];
      t.a = function (e) {
        var t = e.children,
          n = Object(a.a)(e, o);
        return Object(c.jsx)(
          s.a,
          Object(r.a)(
            Object(r.a)(
              {
                sx: { maxWidth: { xs: 400, lg: 475 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } },
                content: !1
              },
              n
            ),
            {},
            { children: Object(c.jsx)(i.a, { sx: { p: { xs: 2, sm: 3, xl: 5 } }, children: t }) }
          )
        );
      };
    },
    335: function (e, t, n) {
      'use strict';
      var r = n(266),
        a = n(82),
        i = n(290),
        s = n(1);
      t.a = function () {
        return Object(s.jsxs)(r.a, {
          direction: 'row',
          justifyContent: 'space-between',
          children: [
            Object(s.jsx)(a.a, {
              variant: 'subtitle2',
              component: i.a,
              href: 'https://beetsoft.com.vn',
              target: '_blank',
              underline: 'hover',
              children: 'beetsoft.com.vn'
            }),
            Object(s.jsx)(a.a, {
              variant: 'subtitle2',
              component: i.a,
              href: 'https://beetsoft.com.vn',
              target: '_blank',
              underline: 'hover',
              children: '\xa9 beetsoft.com.vn'
            })
          ]
        });
      };
    },
    336: function (e, t, n) {
      'use strict';
      var r = n(0);
      t.a = function () {
        var e = Object(r.useRef)(!0);
        return (
          Object(r.useEffect)(function () {
            return function () {
              e.current = !1;
            };
          }, []),
          e
        );
      };
    },
    337: function (e, t, n) {
      'use strict';
      var r = n(7),
        a = Object(r.a)('div')(function (e) {
          var t = e.theme;
          return {
            backgroundColor: 'dark' === t.palette.mode ? t.palette.background.default : t.palette.primary.light,
            minHeight: '100vh'
          };
        });
      t.a = a;
    },
    514: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(261),
        a = n(279),
        i = n(266),
        s = n(82),
        c = n(222),
        o = n(32),
        l = n(30),
        d = n(334),
        j = n(335),
        u = n(6),
        b = n(48),
        h = n(12),
        m = n(58),
        x = n(33),
        O = n.n(x),
        p = n(0),
        f = n.n(p),
        v = n(481),
        g = n.n(v),
        w = n(482),
        y = n.n(w),
        k = n(339),
        C = n(256),
        S = n(518),
        E = n(509),
        H = n(512),
        I = n(519),
        P = n(484),
        B = n(295),
        z = n(529),
        W = n(507),
        q = n(283),
        A = n(338),
        D = n(297),
        F = n(67),
        G = n(336),
        R = n(1),
        J = ['loginProp'],
        M = function (e) {
          var t = e.loginProp,
            n = Object(m.a)(e, J),
            r = Object(l.a)(),
            d = Object(G.a)(),
            j = f.a.useState(!0),
            x = Object(h.a)(j, 2),
            p = x[0],
            v = x[1],
            w = Object(F.a)().login,
            M = f.a.useState(!1),
            T = Object(h.a)(M, 2),
            U = T[0],
            V = T[1],
            _ = function () {
              V(!U);
            },
            K = function (e) {
              e.preventDefault();
            };
          return Object(R.jsxs)(R.Fragment, {
            children: [
              Object(R.jsxs)(a.a, {
                container: !0,
                direction: 'column',
                justifyContent: 'center',
                spacing: 2,
                children: [
                  Object(R.jsx)(a.a, {
                    item: !0,
                    xs: 12,
                    children: Object(R.jsxs)(C.a, {
                      sx: { alignItems: 'center', display: 'flex' },
                      children: [
                        Object(R.jsx)(c.a, { sx: { flexGrow: 1 }, orientation: 'horizontal' }),
                        Object(R.jsx)(c.a, { sx: { flexGrow: 1 }, orientation: 'horizontal' })
                      ]
                    })
                  }),
                  Object(R.jsx)(a.a, {
                    item: !0,
                    xs: 12,
                    container: !0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    children: Object(R.jsx)(C.a, {
                      sx: { mb: 2 },
                      children: Object(R.jsx)(s.a, { variant: 'subtitle1', children: 'Sign in with Email address' })
                    })
                  })
                ]
              }),
              Object(R.jsx)(A.a, {
                initialValues: { email: 'contact@trants.io', password: '123123', submit: null },
                validationSchema: k
                  .a()
                  .shape({
                    email: k.b().email('Must be a valid email').max(255).required('Email is required'),
                    password: k.b().max(255).required('Password is required')
                  }),
                onSubmit: (function () {
                  var e = Object(b.a)(
                    O.a.mark(function e(t, n) {
                      var r, a, i;
                      return O.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (a = n.setStatus),
                                  (i = n.setSubmitting),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  w(t.email, t.password).then(
                                    function () {},
                                    function (e) {
                                      d.current && (a({ success: !1 }), r({ submit: e.message }), i(!1));
                                    }
                                  )
                                );
                              case 4:
                                e.next = 10;
                                break;
                              case 6:
                                (e.prev = 6),
                                  (e.t0 = e.catch(1)),
                                  console.error(e.t0),
                                  d.current && (a({ success: !1 }), r({ submit: e.t0.message }), i(!1));
                              case 10:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 6]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
                children: function (e) {
                  var a = e.errors,
                    c = e.handleBlur,
                    l = e.handleChange,
                    d = e.handleSubmit,
                    j = e.isSubmitting,
                    b = e.touched,
                    h = e.values;
                  return Object(R.jsxs)(
                    'form',
                    Object(u.a)(
                      Object(u.a)({ noValidate: !0, onSubmit: d }, n),
                      {},
                      {
                        children: [
                          Object(R.jsxs)(S.a, {
                            fullWidth: !0,
                            error: Boolean(b.email && a.email),
                            sx: Object(u.a)({}, r.typography.customInput),
                            children: [
                              Object(R.jsx)(E.a, { htmlFor: 'outlined-adornment-email-login', children: 'Email Address / Username' }),
                              Object(R.jsx)(H.a, {
                                id: 'outlined-adornment-email-login',
                                type: 'email',
                                value: h.email,
                                name: 'email',
                                onBlur: c,
                                onChange: l,
                                label: 'Email Address / Username',
                                inputProps: {}
                              }),
                              b.email &&
                                a.email &&
                                Object(R.jsx)(I.a, { error: !0, id: 'standard-weight-helper-text-email-login', children: a.email })
                            ]
                          }),
                          Object(R.jsxs)(S.a, {
                            fullWidth: !0,
                            error: Boolean(b.password && a.password),
                            sx: Object(u.a)({}, r.typography.customInput),
                            children: [
                              Object(R.jsx)(E.a, { htmlFor: 'outlined-adornment-password-login', children: 'Password' }),
                              Object(R.jsx)(H.a, {
                                id: 'outlined-adornment-password-login',
                                type: U ? 'text' : 'password',
                                value: h.password,
                                name: 'password',
                                onBlur: c,
                                onChange: l,
                                endAdornment: Object(R.jsx)(P.a, {
                                  position: 'end',
                                  children: Object(R.jsx)(B.a, {
                                    'aria-label': 'toggle password visibility',
                                    onClick: _,
                                    onMouseDown: K,
                                    edge: 'end',
                                    size: 'large',
                                    children: U ? Object(R.jsx)(g.a, {}) : Object(R.jsx)(y.a, {})
                                  })
                                }),
                                label: 'Password',
                                inputProps: {}
                              }),
                              b.password &&
                                a.password &&
                                Object(R.jsx)(I.a, { error: !0, id: 'standard-weight-helper-text-password-login', children: a.password })
                            ]
                          }),
                          Object(R.jsxs)(i.a, {
                            direction: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            spacing: 1,
                            children: [
                              Object(R.jsx)(z.a, {
                                control: Object(R.jsx)(W.a, {
                                  checked: p,
                                  onChange: function (e) {
                                    return v(e.target.checked);
                                  },
                                  name: 'checked',
                                  color: 'primary'
                                }),
                                label: 'Remember me'
                              }),
                              Object(R.jsx)(s.a, {
                                variant: 'subtitle1',
                                component: o.b,
                                to: t ? 'dashboard' : '/forgot',
                                color: 'secondary',
                                sx: { textDecoration: 'none' },
                                children: 'Forgot Password?'
                              })
                            ]
                          }),
                          a.submit &&
                            Object(R.jsx)(C.a, { sx: { mt: 3 }, children: Object(R.jsx)(I.a, { error: !0, children: a.submit }) }),
                          Object(R.jsx)(C.a, {
                            sx: { mt: 2 },
                            children: Object(R.jsx)(D.a, {
                              children: Object(R.jsx)(q.a, {
                                disableElevation: !0,
                                disabled: j,
                                fullWidth: !0,
                                size: 'large',
                                type: 'submit',
                                variant: 'contained',
                                color: 'secondary',
                                children: 'Sign in'
                              })
                            })
                          })
                        ]
                      }
                    )
                  );
                }
              })
            ]
          });
        },
        T = n(337),
        U = n(137);
      t.default = function () {
        var e = Object(l.a)(),
          t = Object(r.a)(e.breakpoints.down('md'));
        return Object(R.jsx)(T.a, {
          children: Object(R.jsxs)(a.a, {
            container: !0,
            direction: 'column',
            justifyContent: 'flex-end',
            sx: { minHeight: '100vh' },
            children: [
              Object(R.jsx)(a.a, {
                item: !0,
                xs: 12,
                children: Object(R.jsx)(a.a, {
                  container: !0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  sx: { minHeight: 'calc(100vh - 68px)' },
                  children: Object(R.jsx)(a.a, {
                    item: !0,
                    sx: { m: { xs: 1, sm: 3 }, mb: 0 },
                    children: Object(R.jsx)(d.a, {
                      children: Object(R.jsxs)(a.a, {
                        container: !0,
                        spacing: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        children: [
                          Object(R.jsx)(a.a, {
                            item: !0,
                            sx: { mb: 3 },
                            children: Object(R.jsx)(o.b, { to: '#', children: Object(R.jsx)(U.a, {}) })
                          }),
                          Object(R.jsx)(a.a, {
                            item: !0,
                            xs: 12,
                            children: Object(R.jsx)(a.a, {
                              container: !0,
                              direction: t ? 'column-reverse' : 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                              children: Object(R.jsx)(a.a, {
                                item: !0,
                                children: Object(R.jsxs)(i.a, {
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  spacing: 1,
                                  children: [
                                    Object(R.jsx)(s.a, {
                                      color: e.palette.secondary.main,
                                      gutterBottom: !0,
                                      variant: t ? 'h3' : 'h2',
                                      children: 'Hi, Welcome Back'
                                    }),
                                    Object(R.jsx)(s.a, {
                                      variant: 'caption',
                                      fontSize: '16px',
                                      textAlign: t ? 'center' : 'inherit',
                                      children: 'Enter your credentials to continue'
                                    })
                                  ]
                                })
                              })
                            })
                          }),
                          Object(R.jsx)(a.a, { item: !0, xs: 12, children: Object(R.jsx)(M, {}) }),
                          Object(R.jsx)(a.a, { item: !0, xs: 12, children: Object(R.jsx)(c.a, {}) })
                        ]
                      })
                    })
                  })
                })
              }),
              Object(R.jsx)(a.a, { item: !0, xs: 12, sx: { m: 3, mt: 1 }, children: Object(R.jsx)(j.a, {}) })
            ]
          })
        });
      };
    }
  }
]);
//# sourceMappingURL=8.ce106e1f.chunk.js.map
