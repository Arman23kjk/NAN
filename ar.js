(function () {
    document.onscroll = function () {
        var q = document.body.scrollTop

        if (q > 800) {
            document.getElementById('apranqner').style.opacity = '1';
            document.getElementById('apranqner').style.transition = '1s'
            document.getElementById('apranqner').style.marginTop = '0%'
        }
        if (q < 800) {
            document.getElementById('apranqner').style.opacity = '0';
            document.getElementById('apranqner').style.marginTop = '5%'
            document.getElementById('apranqner').style.transition = '1s'
        }

        if (q > 1550) {
            // document.getElementById('navv').style.backgroundColor = 'black';
            document.getElementById('heraxos').style.transition = '2s'
            document.getElementById('heraxos').style.opacity = '1'
            document.getElementById('qartez').style.marginLeft = '0%'
            document.getElementById('qartez').style.opacity = '1'
            document.getElementById('qartez').style.transition = '1'
            document.getElementById('a').style.transition = '0.2s'
            document.getElementById('a').style.color = 'orange';
        }
        if (q < 1550) {
            // document.getElementById('navv').style.backgroundColor = 'rgba(255, 245, 245, 0.03)';
            document.getElementById('heraxos').style.transition = '2s'
            document.getElementById('heraxos').style.opacity = '0'
            document.getElementById('qartez').style.marginLeft = '-100%'
            document.getElementById('qartez').style.opacity = '0'
            document.getElementById('qartez').style.transition = '1s'
            document.getElementById('a').style.transition = '0.2s'
            document.getElementById('a').style.color = 'white';
            document.getElementById('a2').style.color = 'white';

        }

        if (q > 2200) {
            // document.getElementById('navv').style.backgroundColor = 'black';
            document.getElementById('cardd').style.top = '3%'
            document.getElementById('a2').style.transition = '0.2s'
            document.getElementById('a2').style.color = 'orange';
            document.getElementById('a').style.color = 'white';
        }
        if (q < 2200) {
            // document.getElementById('navv').style.backgroundColor = 'rgba(255, 245, 245, 0.03)';
            document.getElementById('cardd').style.top = '100%'
            document.getElementById('a2').style.transition = '0.2s'
            document.getElementById('a2').style.color = 'white';
        }

    }
})()

var btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    document.getElementById('check1').checked = true;
    document.getElementById('check2').checked = false;
    document.getElementById('check3').checked = false;
}

var btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    document.getElementById('check1').checked = false;
    document.getElementById('check2').checked = true;
    document.getElementById('check3').checked = false;
}

var btn3 = document.getElementById('btn3');
btn3.onclick = function () {
    document.getElementById('check1').checked = false;
    document.getElementById('check2').checked = false;
    document.getElementById('check3').checked = true;
}

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 10,
            "random": false
        },
        "size": {
            "value": 2,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.5
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 200,
                "size": 3,
                "duration": 2,
                "opacity": 1,
                "speed": 1
            }
        }
    },
    "retina_detect": true
});




$(function () {
    $('.intro').addClass('go');

    $('.reload').click(function () {
        $('.intro').removeClass('go').delay(200).queue(function (next) {
            $('.intro').addClass('go');
            next();
        });

    });
})


var e = 0;
var like = document.getElementById('like');
if (sessionStorage.getItem('b') == null) {
    sessionStorage.setItem('b', 0);
}
var q = sessionStorage.getItem('b');
if (q == 1) {
    like.transition = '0.2s'
    like.style.color = 'red'
    like.style.textShadow = '2px 2px 14px black,-2px -2px 14px red'
} else {
    like.transition = '0.2s'
    like.style.color = 'whitesmoke'
    like.style.textShadow = '0px 0px 0px black,-0px -0px 0px red'
}
function l() {
    if (sessionStorage.getItem('b') == 0) {
        sessionStorage.setItem('b', 1);
        like.style.color = 'red'
        like.style.textShadow = '2px 2px 14px black,-2px -2px 14px red'
    } else {
        sessionStorage.setItem('b', 0);
        like.style.color = 'whitesmoke'
        like.style.textShadow = '0px 0px 0px black,-0px -0px 0px red'
    }
    e++
}

window.onload = () => {

    document.getElementById('nkarner').style.display = 'flex';
    document.getElementById('a1').onclick = function () {
        document.getElementById('apranqianuny').innerHTML = 'Էլեգանտ զգեստ';
        document.getElementById('apranqigin').innerText = '25.000 դր';
        document.getElementById('nkarner').style.display = 'none';
        document.getElementById('nkar').style.backgroundImage = 'url(1.jpg)';
        document.getElementById('nkar').style.backgroundSize = '80%';
    };


    document.getElementById('aa').onclick = function () {
        document.getElementById('apranqianuny').innerHTML = 'Հարսանեկան բաճկոն Կորսետով';
        document.getElementById('apranqigin').innerText = '50.000 դր';
        document.getElementById('nkarner').style.display = 'none';
        document.getElementById('nkar').style.backgroundImage = 'url(2.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
    };

    document.getElementById('aaa').onclick = function () {
        document.getElementById('apranqianuny').innerHTML = 'Գլխարկով Կոմբինեզոն';
        document.getElementById('apranqigin').innerText = '8.000 դր';
        document.getElementById('nkarner').style.display = 'none';
        document.getElementById('nkar').style.backgroundImage = 'url(3.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
    };

    document.getElementById('a4').onclick = function () {
        document.getElementById('apranqianuny').innerHTML = 'Հարսանեկան Զգեստ';
        document.getElementById('apranqigin').innerText = '40.000 դր';
        document.getElementById('nkarner').style.display = 'none';
        document.getElementById('nkar').style.backgroundImage = 'url(4.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
    };

    document.getElementById('a5').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու hoodie սև';
        document.getElementById('apranqigin').innerText = '10.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/body/xudi1/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/body/xudi1/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/body/xudi1/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/body/xudi1/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi1/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/body/xudi1/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi1/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/body/xudi1/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi1/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/body/xudi1/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi1/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/body/xudi1/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi1/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };

    };

    document.getElementById('a6').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու hoodie սև';
        document.getElementById('apranqigin').innerText = '10.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/body/xudi2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/body/xudi2/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/body/xudi2/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/body/xudi2/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi2/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/body/xudi2/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi2/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/body/xudi2/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi2/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/body/xudi2/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi2/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/body/xudi2/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi2/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('a7').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու hoodie սև';
        document.getElementById('apranqigin').innerText = '10.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/body/xudi3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/body/xudi3/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/body/xudi3/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/body/xudi3/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi3/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/body/xudi3/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi3/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/body/xudi3/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi3/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/body/xudi3/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi3/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/body/xudi3/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi3/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };

        var nkar7 = document.getElementById('nkar7');
        nkar7.style.backgroundImage = 'url(images2/txamardu/body/xudi3/7.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr7 = ['7.jpg'];
        i = 0;
        nkar7.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi3/' + arr7[i] + ')';
            i++;
            if (i == arr7.length) {
                i = 0;
            }
        };
    };

    document.getElementById('a8').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու hoodie սև';
        document.getElementById('apranqigin').innerText = '10.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/body/xudi4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/body/xudi4/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/body/xudi4/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/body/xudi4/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi4/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/body/xudi4/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi4/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/body/xudi4/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi4/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/body/xudi4/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi4/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/body/xudi4/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi4/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };

        var nkar7 = document.getElementById('nkar7');
        nkar7.style.backgroundImage = 'url(images2/txamardu/body/xudi4/7.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr7 = ['7.jpg'];
        i = 0;
        nkar7.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/body/xudi4/' + arr7[i] + ')';
            i++;
            if (i == arr7.length) {
                i = 0;
            }
        };
    };

    document.getElementById('sarochka').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու Վերնաշապիկ';
        document.getElementById('apranqigin').innerText = '15.500 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka1/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('sarochka2').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու երկարավուն Վերնաշապիկ սև';
        document.getElementById('apranqigin').innerText = '15.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka2/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('sarochka3').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու Վերնաշապիկ բամբակյա';
        document.getElementById('apranqigin').innerText = '15.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka3/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };


    document.getElementById('sarochka4').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու Կոճակով վերնաշապիկ';
        document.getElementById('apranqigin').innerText = '15.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/sarochka/sarochka4/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };


    document.getElementById('futbolka1').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'տղամարդու շապիկ սև';
        document.getElementById('apranqigin').innerText = '5.500 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka1/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };
    };

    document.getElementById('futbolka2').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'տղամարդու շապիկ սպիտակ';
        document.getElementById('apranqigin').innerText = '4.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka2/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka2/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka2/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka2/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka2/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka2/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka2/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka2/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };
    };

    document.getElementById('futbolka3').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'տղամարդու շապիկ կապույտ';
        document.getElementById('apranqigin').innerText = '5.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka3/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka3/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka3/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka3/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka3/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka3/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka3/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka3/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };
    };

    document.getElementById('futbolka4').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'տղամարդու շապիկ';
        document.getElementById('apranqigin').innerText = '3.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka4/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka4/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka4/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka4/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka4/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka4/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka4/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/futbolka/futbolka4/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };
    };


    document.getElementById('txutabat1').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';

        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու ձմեռային տաբատ';
        document.getElementById('apranqigin').innerText = '7.600 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };

        var nkar7 = document.getElementById('nkar7');
        nkar7.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/7.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr7 = ['7.jpg'];
        i = 0;
        nkar7.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar1/' + arr7[i] + ')';
            i++;
            if (i == arr7.length) {
                i = 0;
            }
        };
    };

    document.getElementById('txutabat2').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու սպորտային տաբատ';
        document.getElementById('apranqigin').innerText = '14.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };

        var nkar7 = document.getElementById('nkar7');
        nkar7.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/7.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr7 = ['7.jpg'];
        i = 0;
        nkar7.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar2/' + arr7[i] + ')';
            i++;
            if (i == arr7.length) {
                i = 0;
            }
        };
    };

    document.getElementById('txutabat3').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'սպորտային տաբատ';
        document.getElementById('apranqigin').innerText = '13.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };

        var nkar7 = document.getElementById('nkar7');
        nkar7.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/7.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr7 = ['7.jpg'];
        i = 0;
        nkar7.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar3/' + arr7[i] + ')';
            i++;
            if (i == arr7.length) {
                i = 0;
            }
        };
    };



    document.getElementById('txutabat4').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Տղամարդու ձմեռային տաբատ';
        document.getElementById('apranqigin').innerText = '20.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/1.avif)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/1.avif)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.avif'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/2.avif)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.avif'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/3.avif)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.avif'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/4.avif)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.avif'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/5.avif)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.avif'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/6.avif)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.avif'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };

        var nkar7 = document.getElementById('nkar7');
        nkar7.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/7.avif)';
        nkar3.style.backgroundSize = 'cover';
        var arr7 = ['7.avif'];
        i = 0;
        nkar7.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/shalvar/shalvar4/' + arr7[i] + ')';
            i++;
            if (i == arr7.length) {
                i = 0;
            }
        };
    };


    document.getElementById('txukastyum1').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'բաճկոն';
        document.getElementById('apranqigin').innerText = '14.600 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/kost/kost1/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/kost/kost1/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/kost/kost1/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/kost/kost1/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost1/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/kost/kost1/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost1/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/kost/kost1/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost1/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/kost/kost1/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost1/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/kost/kost1/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost1/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };


    document.getElementById('txukastyum2').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'բաճկոն';
        document.getElementById('apranqigin').innerText = '21.800 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/kost/kost2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/kost/kost2/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/kost/kost2/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/kost/kost2/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost2/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/kost/kost2/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost2/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/kost/kost2/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost2/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/kost/kost2/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost2/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/kost/kost2/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost2/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };
    document.getElementById('txukastyum3').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'բաճկոն';
        document.getElementById('apranqigin').innerText = '51.800 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/kost/kost3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/kost/kost3/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/kost/kost3/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/kost/kost3/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost3/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/kost/kost3/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost3/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/kost/kost3/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost3/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/kost/kost3/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost3/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/kost/kost3/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost3/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('txukastyum4').onclick = function () {
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'բաճկոն';
        document.getElementById('apranqigin').innerText = '58.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/kost/kost4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/txamardu/kost/kost4/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/txamardu/kost/kost4/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/txamardu/kost/kost4/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost4/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/txamardu/kost/kost4/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost4/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/txamardu/kost/kost4/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost4/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/txamardu/kost/kost4/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost4/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/txamardu/kost/kost4/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/txamardu/kost/kost4/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };


    document.getElementById('a9').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Մեծ չափի hoodie';
        document.getElementById('apranqigin').innerText = '25.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/xudi1/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/xudi1/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/xudi1/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/xudi1/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi1/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/xudi1/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi1/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/xudi1/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi1/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/xudi1/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi1/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/xudi1/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi1/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('a10').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Մեծ չափի hoodie';
        document.getElementById('apranqigin').innerText = '25.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/xudi2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/xudi2/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/xudi2/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/xudi2/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi2/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/xudi2/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi2/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/xudi2/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi2/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/xudi2/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi2/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/xudi2/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi2/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('a11').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Մեծ չափի hoodie';
        document.getElementById('apranqigin').innerText = '25.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/xudi3/1.avif)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/xudi3/1.avif)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.avif'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/xudi3/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/xudi3/2.avif)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.avif'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi3/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/xudi3/3.avif)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.avif'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi3/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/xudi3/4.avif)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.avif'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi3/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/xudi3/5.avif';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.avif'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi3/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/xudi3/6.avif)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.avif'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi3/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('a12').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Մեծ չափի hoodie';
        document.getElementById('apranqigin').innerText = '25.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/xudi4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/xudi4/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/xudi4/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/xudi4/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi4/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/xudi4/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi4/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/xudi4/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi4/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/xudi4/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi4/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/xudi4/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/xudi4/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('tabat1').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Տաք ձմեռային տաբատ';
        document.getElementById('apranqigin').innerText = '17.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/tabat/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/tabat/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/tabat/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/tabat/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/tabat/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/tabat/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/tabat/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/tabat/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('tabat2').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Կանացի տաբատ բուրդով';
        document.getElementById('apranqigin').innerText = '12.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/tabat2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/tabat2/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onclick = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/tabat2/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/tabat2/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat2/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/tabat2/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat2/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/tabat2/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat2/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/tabat2/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat2/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/tabat2/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat2/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('tabat3').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Սպորտային տաբատ բուրդով';
        document.getElementById('apranqigin').innerText = '9.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/tabat3/1.avif)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/tabat3/1.avif)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.avif'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/tabat3/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/tabat3/2.avif';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.avif'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat3/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/tabat3/3.avif)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.avif'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat3/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/tabat3/4.avif)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.avif'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat3/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/tabat3/5.avif)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.avif'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat3/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/tabat3/6.avif)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.avif'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat3/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('tabat4').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Սպորտային տաբատ բուրդով';
        document.getElementById('apranqigin').innerText = '17.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/tabat4/1.avif)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/tabat4/1.avif)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.avif'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/tabat4/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/tabat4/2.avif';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.avif'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat4/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/tabat4/3.avif)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.avif'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat4/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/tabat4/4.avif)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.avif'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat4/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/tabat4/5.avif)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.avif'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat4/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/tabat4/6.avif)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.avif'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/tabat4/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };


    document.getElementById('shorik').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Կանացի շրջազգեստ';
        document.getElementById('apranqigin').innerText = '25.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/shrjazgest/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/shrjazgest/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/shrjazgest/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/shrjazgest/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/shrjazgest/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/shrjazgest/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/shrjazgest/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/shrjazgest/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };


    document.getElementById('shorik2').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Ամենօրյա շրջազգեստ';
        document.getElementById('apranqigin').innerText = '21.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/shrjazgest2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/shrjazgest2/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest2/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('shorik3').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'Էլեգանտ ընդգծող շրջազգեստ';
        document.getElementById('apranqigin').innerText = '16.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/shrjazgest3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/shrjazgest3/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/shrjazgest3/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('shorik4').onclick = function () {
        document.getElementById('apranqianuny').innerHTML = 'Էլեգանտ զգեստ';
        document.getElementById('apranqigin').innerText = '25.000 դր';
        document.getElementById('nkarner').style.display = 'none';
        // document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar').style.backgroundImage = 'url(1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
    };
    document.getElementById('yubka1').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'Կաշվե մինի Կիսաշրջազգեստ';
        document.getElementById('apranqigin').innerText = '15.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };


    document.getElementById('yubka2').onclick = function () {
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('apranqianuny').innerHTML = 'մինի Կիսաշրջազգեստ';
        document.getElementById('apranqigin').innerText = '13.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest2/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('yubka3').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'Զամշե մինի Կիսաշրջազգեստ';
        document.getElementById('apranqigin').innerText = '14.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest3/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('yubka4').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Կարճ Կիսաշրջազգեստ';
        document.getElementById('apranqigin').innerText = '8.500 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kisashrjazgest4/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };


    document.getElementById('kostyum1').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'բաճկոն';
        document.getElementById('apranqigin').innerText = '8.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kostyum/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/kostyum/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kostyum/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/kostyum/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/kostyum/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum/' + arr3[i] + ')';
            i++;
            if (i == arr3.length) {
                i = 0;
            }
        };

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/kostyum/4.jpg)';
        nkar4.style.backgroundSize = 'cover';
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum/' + arr4[i] + ')';
            i++;
            if (i == arr4.length) {
                i = 0;
            }
        };

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/kostyum/5.jpg)';
        nkar5.style.backgroundSize = 'cover';
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum/' + arr5[i] + ')';
            i++;
            if (i == arr5.length) {
                i = 0;
            }
        };

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/kostyum/6.jpg)';
        nkar6.style.backgroundSize = 'cover';
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum/' + arr6[i] + ')';
            i++;
            if (i == arr6.length) {
                i = 0;
            }
        };
    };

    document.getElementById('kostyum2').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Երկարավուն բաճկոն';
        document.getElementById('apranqigin').innerText = '15.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kostyum2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/kostyum2/1.jpg)';
        nkar1.style.backgroundSize = 'cover';
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kostyum2/' + arr[i] + ')';
            i++;
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover';

        };
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/kostyum2/2.jpg)';
        nkar2.style.backgroundSize = 'cover';
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum2/' + arr2[i] + ')';
            i++;
            if (i == arr2.length) {
                i = 0;
            }
        };

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/kostyum2/3.jpg)';
        nkar3.style.backgroundSize = 'cover';
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum2/' + arr3[i] + ')';
            i++;
            if (i == arr3.length)
                o;
            i = 0;
        };
    };

    var nkar4 = document.getElementById('nkar4');
    nkar4.style.backgroundImage = 'url(images2/kanaci/kostyum2/4.jpg)';
    nkar4.style.backgroundSize = 'cover';
    var arr4 = ['4.jpg'];
    i = 0;
    nkar4.onmouseover = function () {
        nkar.style.backgroundImage = 'url(images2/kanaci/kostyum2/' + arr4[i] + ')';
        i++;
        if (i == arr4.length) {
            i = 0;
        }
    };

    var nkar5 = document.getElementById('nkar5');
    nkar5.style.backgroundImage = 'url(images2/kanaci/kostyum2/5.jpg)';
    nkar5.style.backgroundSize = 'cover';
    var arr5 = ['5.jpg'];
    i = 0;
    nkar5.onmouseover = function () {
        nkar.style.backgroundImage = 'url(images2/kanaci/kostyum2/' + arr5[i] + ')';
        i++;
        if (i == arr5.length) {
            i = 0;
        }
    };

    var nkar6 = document.getElementById('nkar6');
    nkar6.style.backgroundImage = 'url(images2/kanaci/kostyum2/6.jpg)';
    nkar6.style.backgroundSize = 'cover';
    var arr6 = ['6.jpg'];
    i = 0;
    nkar6.onmouseover = function () {
        nkar.style.backgroundImage = 'url(images2/kanaci/kostyum2/' + arr6[i] + ')';
        i++;
        if (i == arr6.length) {
            i = 0;
        }
    };

    document.getElementById('kostyum3').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Երկարավուն բաճկոն';
        document.getElementById('apranqigin').innerText = '18.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kostyum3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/kanaci/kostyum3/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/kanaci/kostyum3/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/kanaci/kostyum3/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum3/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/kanaci/kostyum3/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum3/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/kanaci/kostyum3/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum3/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/kanaci/kostyum3/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum3/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/kanaci/kostyum3/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/kanaci/kostyum3/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }

    document.getElementById('kostyum4').onclick = function () {
        document.getElementById('apranqianuny').innerHTML = 'Հարսանեկան բաճկոն Կորսետով';
        document.getElementById('apranqigin').innerText = '50.000 դր';
        document.getElementById('nkarner').style.display = 'none';
        document.getElementById('nkar').style.backgroundImage = 'url(2.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
    }


    document.getElementById('a13').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Կոմբինեզոն';
        document.getElementById('apranqigin').innerText = '10.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon1/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('a14').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'Կոմբինեզոն';
        document.getElementById('apranqigin').innerText = '16.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon2/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('a15').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Կոմբինեզոն';
        document.getElementById('apranqigin').innerText = '10.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon3/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('a16').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'Կոմբինեզոն';
        document.getElementById('apranqigin').innerText = '10.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/kombinezon/kombinezon4/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('poqrishapik1').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'Շապիկ երեխաների համար';
        document.getElementById('apranqigin').innerText = '1.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka1/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }

    document.getElementById('poqrishapik2').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'Շապիկ երեխաների համար';
        document.getElementById('apranqigin').innerText = '1.900 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka2/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }
    }


    document.getElementById('poqrishapik3').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Շապիկ';
        document.getElementById('apranqigin').innerText = '1.700 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka3/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('poqrishapik4').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar4').style.display = 'none';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'Շապիկ երեխաների համար';
        document.getElementById('apranqigin').innerText = '1.900 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/futbolka/futbolka4/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }

    document.getElementById('bodi1').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('nkar4').style.display = 'none';
        document.getElementById('nkar3').style.display = 'none';
        document.getElementById('apranqianuny').innerHTML = 'Բոդի փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '3.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/bodi/bodi1/1.avif)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/bodi/bodi1/1.avif)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.avif'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/bodi/bodi1/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/bodi/bodi1/2.avif)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.avif'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi1/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }


    }

    document.getElementById('bodi2').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar5').style.display = 'block';
        document.getElementById('nkar4').style.display = 'block';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Բոդի փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '7.900 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi2/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }

    document.getElementById('bodi3').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkar5').style.display = 'block';
        document.getElementById('nkar4').style.display = 'block';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Բոդի փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '5.000 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi3/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('bodi4').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('nkar4').style.display = 'none';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Բոդի փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '7.900 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/bodi/bodi4/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }

    document.getElementById('topik1').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar5').style.display = 'block';
        document.getElementById('nkar4').style.display = 'block';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տոպիկ փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '2.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/topikner/topik1/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/topikner/topik1/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik1/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('topik2').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkar5').style.display = 'block';
        document.getElementById('nkar4').style.display = 'block';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տոպիկ փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '2.600 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/topikner/topik2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/topikner/topik2/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik2/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }

    document.getElementById('topik3').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('nkar4').style.display = 'block';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տոպիկ փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '1.500 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/topikner/topik3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/topikner/topik3/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik3/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('topik4').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkar5').style.display = 'block';
        document.getElementById('nkar4').style.display = 'block';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տոպիկ փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '3.900 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/topikner/topik4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/topikner/topik4/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/topikner/topik4/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }

    document.getElementById('erexutabat1').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('nkar4').style.display = 'none';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տաբատ փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '6.400 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat1/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('erexutabat2').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'block';
        document.getElementById('nkar5').style.display = 'block';
        document.getElementById('nkar4').style.display = 'block';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տաբատ փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '2.600 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat2/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('erexutabat3').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar5').style.display = 'none';
        document.getElementById('nkar4').style.display = 'none';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տաբատ փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '1.700 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat3/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }
    }


    document.getElementById('erexutabat4').onclick = function () {
        document.getElementById('nkarner').style.display = 'block';
        document.getElementById('nkarner').style.display = 'flex';
        document.getElementById('nkar6').style.display = 'none';
        document.getElementById('nkar5').style.display = 'block';
        document.getElementById('nkar4').style.display = 'block';
        document.getElementById('nkar3').style.display = 'block';
        document.getElementById('apranqianuny').innerHTML = 'Տաբատ փոքրիկի համար';
        document.getElementById('apranqigin').innerText = '2.900 դր';
        document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/1.jpg)';
        document.getElementById('nkar').style.backgroundSize = 'cover';
        var nkar1 = document.getElementById('nkar1');
        nkar1.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/1.jpg)';
        nkar1.style.backgroundSize = 'cover'
        var arr = ['1.jpg'];
        i = 0;
        nkar1.onmouseover = function () {
            document.getElementById('nkar').style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/' + arr[i] + ')';
            i++
            if (i == arr.length) {
                i = 0;
            }
            nkar.style.backgroundSize = 'cover'

        }
        var nkar2 = document.getElementById('nkar2');
        nkar2.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/2.jpg)';
        nkar2.style.backgroundSize = 'cover'
        var arr2 = ['2.jpg'];
        i = 0;
        nkar2.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/' + arr2[i] + ')';
            i++
            if (i == arr2.length) {
                i = 0;
            }
        }

        var nkar3 = document.getElementById('nkar3');
        nkar3.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/3.jpg)';
        nkar3.style.backgroundSize = 'cover'
        var arr3 = ['3.jpg'];
        i = 0;
        nkar3.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/' + arr3[i] + ')';
            i++
            if (i == arr3.length) {
                i = 0;
            }
        }

        var nkar4 = document.getElementById('nkar4');
        nkar4.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/4.jpg)';
        nkar4.style.backgroundSize = 'cover'
        var arr4 = ['4.jpg'];
        i = 0;
        nkar4.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/' + arr4[i] + ')';
            i++
            if (i == arr4.length) {
                i = 0;
            }
        }

        var nkar5 = document.getElementById('nkar5');
        nkar5.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/5.jpg)';
        nkar5.style.backgroundSize = 'cover'
        var arr5 = ['5.jpg'];
        i = 0;
        nkar5.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/' + arr5[i] + ')';
            i++
            if (i == arr5.length) {
                i = 0;
            }
        }

        var nkar6 = document.getElementById('nkar6');
        nkar6.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/6.jpg)';
        nkar6.style.backgroundSize = 'cover'
        var arr6 = ['6.jpg'];
        i = 0;
        nkar6.onmouseover = function () {
            nkar.style.backgroundImage = 'url(images2/mankakan/tabatner/tabat4/' + arr6[i] + ')';
            i++
            if (i == arr6.length) {
                i = 0;
            }
        }


    }

}

