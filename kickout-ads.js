//    kickout-ads.js 1.0.0
//    https://github.com/vkorotenko/kickout-ads
//    (c) 2019-2019 Vladimir N. Korotenko developer
//    kickout-ads may be freely distributed under the MIT license.

var kickoutAds = (function () {
    if (window.document !== undefined) {
        window.document.addEventListener("DOMContentLoaded", function (event) {
            var badSource = [
                { url: "p.tlrtb.com\/ad\/base.js", name: "Tele2 / Rostelecom" },
                { url: "evil.com\/ad\/base.js", name: "Evil site" }];

            var  scripts = document.getElementsByTagName('script');
            for (var ix in scripts) {
                if (scripts.hasOwnProperty(ix)) {
                    var item = scripts[ix];
                    if (item !== undefined && item.outerHTML !== undefined) {
                        var body = scripts[ix].outerHTML.toLowerCase();

                        for (var i = 0; i < badSource.length; i++) {
                            if (body.indexOf(badSource[i].url) !== -1) {
                                showInfo(badSource[i].url, badSource[i].name);
                                break;
                            }
                        }
                    }
                }
            }
            /**
             * Формируем окно для отображения провайдера и подозрительного скрипта.
             *
             * @param {any} url - Скрипт который задетектирован
             * @param {any} name - Имя  провайдера
             */
            function showInfo(url, name) {
                console.log(info)
                var body, info = document.createElement('div');
                info.classList.add("kickoffdiv");
                body = 'Обнаружено изменение оригинального кода страницы со стороны провайдера: ' + name;
                body += '<br>Адрес скрипта: ' + url;
                body += ' <a href="https://github.com/vkorotenko/kickout-ads">Как бороться?</a>';
                body += '<br><button>Понимаю /закрыть и не показывать</button>';

                info.innerHTML = body;
                info.style.position = 'absolute';
                info.style.top = '30px';
                info.style.padding = '5px';
                info.style.right = '10px';
                info.style.backgroundColor = 'lightgoldenrodyellow';
                info.style.border = '1px solid lightgray';
                document.body.appendChild(info);
            }
        });
    }
    
})();
