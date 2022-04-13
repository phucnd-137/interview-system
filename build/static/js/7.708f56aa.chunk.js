(this['webpackJsonpinterview-manager-system'] = this['webpackJsonpinterview-manager-system'] || []).push([
  [7],
  {
    297: function (e, t, n) {
      'use strict';
      var a = n(12),
        r = n(0),
        i = n.n(r),
        c = n(485),
        s = n(271),
        o = n(1),
        l = i.a.forwardRef(function (e, t) {
          var n,
            r,
            i,
            l,
            u = e.children,
            d = e.type,
            j = e.direction,
            b = e.offset,
            m = e.scale;
          switch (j) {
            case 'up':
            case 'left':
              (i = b), (l = 0);
              break;
            default:
              (i = 0), (l = b);
          }
          var h = Object(c.a)(i, l),
            x = Object(a.a)(h, 2),
            f = x[0],
            O = x[1],
            v = Object(c.a)(i, l),
            p = Object(a.a)(v, 2),
            g = p[0],
            w = p[1];
          switch (d) {
            case 'rotate':
              return Object(o.jsx)(s.a.div, {
                ref: t,
                animate: { rotate: 360 },
                transition: { repeat: 1 / 0, repeatType: 'loop', duration: 2, repeatDelay: 0 },
                children: u
              });
            case 'slide':
              return 'up' === j || 'down' === j
                ? Object(o.jsx)(s.a.div, {
                    ref: t,
                    animate: { y: void 0 !== g ? g : '' },
                    onHoverEnd: function () {
                      return w();
                    },
                    onHoverStart: function () {
                      return w();
                    },
                    children: u
                  })
                : Object(o.jsx)(s.a.div, {
                    ref: t,
                    animate: { x: void 0 !== f ? f : '' },
                    onHoverEnd: function () {
                      return O();
                    },
                    onHoverStart: function () {
                      return O();
                    },
                    children: u
                  });
            default:
              return (
                'number' === typeof m && (m = { hover: m, tap: m }),
                Object(o.jsx)(s.a.div, {
                  ref: t,
                  whileHover: { scale: null === (n = m) || void 0 === n ? void 0 : n.hover },
                  whileTap: { scale: null === (r = m) || void 0 === r ? void 0 : r.tap },
                  children: u
                })
              );
          }
        });
      (l.defaultProps = { type: 'scale', offset: 10, direction: 'right', scale: { hover: 1, tap: 0.9 } }), (t.a = l);
    },
    334: function (e, t, n) {
      'use strict';
      var a = n(6),
        r = n(58),
        i = n(256),
        c = n(126),
        s = n(1),
        o = ['children'];
      t.a = function (e) {
        var t = e.children,
          n = Object(r.a)(e, o);
        return Object(s.jsx)(
          c.a,
          Object(a.a)(
            Object(a.a)(
              {
                sx: { maxWidth: { xs: 400, lg: 475 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } },
                content: !1
              },
              n
            ),
            {},
            { children: Object(s.jsx)(i.a, { sx: { p: { xs: 2, sm: 3, xl: 5 } }, children: t }) }
          )
        );
      };
    },
    335: function (e, t, n) {
      'use strict';
      var a = n(266),
        r = n(82),
        i = n(290),
        c = n(1);
      t.a = function () {
        return Object(c.jsxs)(a.a, {
          direction: 'row',
          justifyContent: 'space-between',
          children: [
            Object(c.jsx)(r.a, {
              variant: 'subtitle2',
              component: i.a,
              href: 'https://beetsoft.com.vn',
              target: '_blank',
              underline: 'hover',
              children: 'beetsoft.com.vn'
            }),
            Object(c.jsx)(r.a, {
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
      var a = n(0);
      t.a = function () {
        var e = Object(a.useRef)(!0);
        return (
          Object(a.useEffect)(function () {
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
      var a = n(7),
        r = Object(a.a)('div')(function (e) {
          var t = e.theme;
          return {
            backgroundColor: 'dark' === t.palette.mode ? t.palette.background.default : t.palette.primary.light,
            minHeight: '100vh'
          };
        });
      t.a = r;
    },
    515: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(261),
        r = n(279),
        i = n(266),
        c = n(82),
        s = n(222),
        o = n(32),
        l = n(30),
        u = n(334),
        d = n(335),
        j = n(48),
        b = n(12),
        m = n(58),
        h = n(6),
        x = n(33),
        f = n.n(x),
        O = n(0),
        v = n.n(O),
        p = n(339),
        g = n(518),
        w = n(509),
        y = n(512),
        k = n(519),
        C = n(256),
        S = n(283),
        H = n(277),
        E = n(338),
        I = n(275),
        P = n(297),
        B = n(67),
        q = n(336),
        A = n(1),
        T = ['forgotProp'],
        D = v.a.forwardRef(function (e, t) {
          return Object(A.jsx)(I.a, Object(h.a)({ elevation: 6, ref: t, variant: 'filled' }, e));
        });
      var F = function (e) {
          e.forgotProp;
          var t = Object(m.a)(e, T),
            n = Object(l.a)(),
            a = Object(q.a)(),
            r = v.a.useState(!1),
            i = Object(b.a)(r, 2),
            c = i[0],
            s = i[1],
            o = Object(B.a)().login,
            u = function () {
              s(!0);
            },
            d = function (e, t) {
              'clickaway' !== t && s(!1);
            };
          return Object(A.jsx)(A.Fragment, {
            children: Object(A.jsx)(E.a, {
              initialValues: { email: '', password: '', submit: null },
              validationSchema: p
                .a()
                .shape({
                  email: p.b().email('Must be a valid email').max(255).required('Email is required'),
                  password: p.b().max(255).required('Password is required')
                }),
              onSubmit: (function () {
                var e = Object(j.a)(
                  f.a.mark(function e(t, n) {
                    var r, i, c;
                    return f.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = n.setErrors),
                                (i = n.setStatus),
                                (c = n.setSubmitting),
                                (e.prev = 1),
                                (e.next = 4),
                                o(t.email, t.password).then(
                                  function () {},
                                  function (e) {
                                    a.current && (i({ success: !1 }), r({ submit: e.message }), c(!1));
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
                                a.current && (i({ success: !1 }), r({ submit: e.t0.message }), c(!1));
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
                  r = e.handleBlur,
                  i = e.handleChange,
                  s = e.handleSubmit,
                  o = e.isSubmitting,
                  l = e.touched,
                  j = e.values;
                return Object(A.jsxs)(
                  'form',
                  Object(h.a)(
                    Object(h.a)({ noValidate: !0, onSubmit: s }, t),
                    {},
                    {
                      children: [
                        Object(A.jsxs)(g.a, {
                          fullWidth: !0,
                          error: Boolean(l.email && a.email),
                          sx: Object(h.a)({}, n.typography.customInput),
                          children: [
                            Object(A.jsx)(w.a, { htmlFor: 'outlined-adornment-email-login', children: 'Email Address / Username' }),
                            Object(A.jsx)(y.a, {
                              id: 'outlined-adornment-email-login',
                              type: 'email',
                              value: j.email,
                              name: 'email',
                              onBlur: r,
                              onChange: i,
                              label: 'Email Address / Username',
                              inputProps: {}
                            }),
                            l.email &&
                              a.email &&
                              Object(A.jsx)(k.a, { error: !0, id: 'standard-weight-helper-text-email-login', children: a.email })
                          ]
                        }),
                        Object(A.jsx)(C.a, {
                          sx: { mt: 2 },
                          children: Object(A.jsxs)(P.a, {
                            children: [
                              Object(A.jsx)(S.a, {
                                href: 'login',
                                onClick: u,
                                disabled: o,
                                fullWidth: !0,
                                size: 'large',
                                type: 'submit',
                                variant: 'contained',
                                color: 'secondary',
                                children: 'Submit'
                              }),
                              Object(A.jsx)(H.a, {
                                open: c,
                                autoHideDuration: 6e3,
                                onClose: d,
                                children: Object(A.jsx)(D, {
                                  onClose: d,
                                  severity: 'success',
                                  sx: { width: '100%' },
                                  children: 'This is a success message!'
                                })
                              })
                            ]
                          })
                        })
                      ]
                    }
                  )
                );
              }
            })
          });
        },
        R = n(337),
        W = n(137);
      t.default = function () {
        var e = Object(l.a)(),
          t = Object(a.a)(e.breakpoints.down('md'));
        return Object(A.jsx)(R.a, {
          children: Object(A.jsxs)(r.a, {
            container: !0,
            direction: 'column',
            justifyContent: 'flex-end',
            sx: { minHeight: '100vh' },
            children: [
              Object(A.jsx)(r.a, {
                item: !0,
                xs: 12,
                children: Object(A.jsx)(r.a, {
                  container: !0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  sx: { minHeight: 'calc(100vh - 68px)' },
                  children: Object(A.jsx)(r.a, {
                    item: !0,
                    sx: { m: { xs: 1, sm: 3 }, mb: 0 },
                    children: Object(A.jsx)(u.a, {
                      children: Object(A.jsxs)(r.a, {
                        container: !0,
                        spacing: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        children: [
                          Object(A.jsx)(r.a, {
                            item: !0,
                            sx: { mb: 3 },
                            children: Object(A.jsx)(o.b, { to: '#', children: Object(A.jsx)(W.a, {}) })
                          }),
                          Object(A.jsx)(r.a, {
                            item: !0,
                            xs: 12,
                            children: Object(A.jsx)(r.a, {
                              container: !0,
                              direction: t ? 'column-reverse' : 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                              children: Object(A.jsx)(r.a, {
                                item: !0,
                                children: Object(A.jsxs)(i.a, {
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  spacing: 1,
                                  children: [
                                    Object(A.jsx)(c.a, {
                                      color: e.palette.secondary.main,
                                      gutterBottom: !0,
                                      variant: t ? 'h3' : 'h2',
                                      children: 'Forgot password?'
                                    }),
                                    Object(A.jsx)(c.a, {
                                      variant: 'caption',
                                      fontSize: '16px',
                                      textAlign: 'center',
                                      children: "Enter your email address below and we'll send you password reset OTP."
                                    })
                                  ]
                                })
                              })
                            })
                          }),
                          Object(A.jsx)(r.a, { item: !0, xs: 12, children: Object(A.jsx)(F, {}) }),
                          Object(A.jsx)(r.a, { item: !0, xs: 12, children: Object(A.jsx)(s.a, {}) }),
                          Object(A.jsx)(r.a, {
                            item: !0,
                            xs: 12,
                            children: Object(A.jsx)(r.a, {
                              item: !0,
                              container: !0,
                              direction: 'column',
                              alignItems: 'center',
                              xs: 12,
                              children: Object(A.jsx)(c.a, {
                                component: o.b,
                                to: '/login',
                                variant: 'subtitle1',
                                sx: { textDecoration: 'none' },
                                children: 'Already have an account?'
                              })
                            })
                          })
                        ]
                      })
                    })
                  })
                })
              }),
              Object(A.jsx)(r.a, { item: !0, xs: 12, sx: { m: 3, mt: 1 }, children: Object(A.jsx)(d.a, {}) })
            ]
          })
        });
      };
    }
  }
]);
//# sourceMappingURL=7.708f56aa.chunk.js.map
