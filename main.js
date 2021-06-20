/*
Thanks to "Daniel Puhe" for this particle design
http://www.spielzeugz.de/lab/
*/
(function() {
    function w() {
        h.globalCompositeOperation = "source-over";
        h.fillStyle = "rgba(8,8,12," + v + ")";
        h.fillRect(0, 0, f, k);
        h.globalCompositeOperation = "lighter";
        0.75 > v && (v += 0.05);
        D = s - x;
        E = t - y;
        x = s;
        y = t;
        for (
            var a = f / 1.15,
                l = f / 8,
                p = f / 2,
                r = Math.random,
                F = Math.abs,
                w = Math.sqrt,
                A = Math.cos,
                B = Math.sin,
                C = Math.atan2,
                G = 1350; G--;

        ) {
            var e = H[G],
                g = e.x,
                c = e.y,
                d = e.vX,
                b = e.vY,
                q = g - s,
                m = c - t,
                n = w(q * q + m * m),
                m = C(m, q),
                q = A(m),
                m = B(m);
            if (z && n < p)
                var u = 14 * (1 - n / p),
                    d = d + (q * u + 0.5 - r()),
                    b = b + (m * u + 0.5 - r());
            n < a && ((u = (1 - n / a) * f * 0.0014), (d -= q * u), (b -= m * u));
            n < l && ((n = (1 - n / l) * f * 2.2e-4), (d += D * n), (b += E * n));
            d *= 0.96;
            b *= 0.96;
            F(d);
            F(b);
            g += d;
            c += b;
            g > f ? (g -= f) : 0 > g && (g = f + g);
            c > k ? (c -= k) : 0 > c && (c = k + c);
            e.vX = d;
            e.vY = b;
            e.x = g;
            e.y = c;
            d = e;
            b = g / f * Math.PI * 2;
            c = c / k * Math.PI;
            b = {
                theta: b,
                phi: c,
                x: -100 * Math.sin(c) * Math.sin(b),
                y: -100 * Math.cos(c),
                z: -100 * Math.sin(c) * Math.cos(b)
            };
            d.pos3D = b;
            e.pos3D.z -= 200; -
            299 > e.pos3D.z ||
                ((d = 300 / (300 + e.pos3D.z)), (b = e.pos3D.x * d + f / 2), (c =
                    e.pos3D.y * d + k / 2), (h.fillStyle = e.color), h.beginPath(), h.arc(
                    b,
                    c,
                    d,
                    0,
                    I, !0
                ), h.closePath(), h.fill());
        }
    }

    function r(a) {
        f = document.documentElement.clientWidth;
        k = document.documentElement.clientHeight;
        p.width = f;
        p.height = k;
    }

    function A(a) {
        a = a ? a : window.event;
        s = x = a.pageX;
        t = y = a.pageY;
        document.onmousemove = B;
    }

    function B(a) {
        a = a ? a : window.event;
        s = a.pageX;
        t = a.pageY;
    }

    function C(a) {
        z = !0;
        return !1;
    }

    function J(a) {
        return (z = !1);
    }

    function K() {
        this.color =
            "rgb(" +
            Math.floor(255 * Math.random()) +
            "," +
            Math.floor(255 * Math.random()) +
            "," +
            Math.floor(255 * Math.random()) +
            ")";
        this.size = this.vY = this.vX = this.x = this.y = 0;
        this.pos3D = { x: 0, y: 0, z: 100 };
    }
    var p,
        h,
        f = 1e3,
        k = 560,
        H = [],
        I = 2 * Math.PI,
        v = 0,
        s,
        t,
        D = 0,
        E = 0,
        x = 0,
        y = 0,
        z = !1;
    window.onload = function() {
        p = document.getElementById("mainCanvas");
        if (p.getContext) {
            document.getElementById("outer");
            document.getElementById("canvasContainer");
            h = p.getContext("2d");
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
            r(null);
            for (var a = 1350; a--;) {
                var l = new K();
                l.x = 0.5 * f;
                l.y = 0.5 * k;
                l.vX = Math.cos(a) * Math.random() * 40;
                l.vY = Math.sin(a) * Math.random() * 20;
                l.size = 2;
                H[a] = l;
            }
            document.onmousedown = C;
            document.onmouseup = J;
            document.onmousemove = A;
            window.onresize = r;
            r(null);
            setInterval(w, 33);
        }
    };
})();