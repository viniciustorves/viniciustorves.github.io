/**
 * Plugins - Init
 **/
;
(function ($) {
    $('head').append('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
    $('head').append('<meta name="mobileoptimized" content="0" />');



    var windowsize = $(window).width(); // when the browser resizes, reset the width
    if (windowsize <= 768) {

        $(window).resize(function () {
            var windowsize = $(window).width(); // when the browser resizes, reset the width
            $('html').css('width', windowsize);
            $('header').css('width', windowsize);
            $('body').css('width', windowsize);
            $('#NavCentral').css('width', windowsize);
            $('footer').css('width', windowsize);
            $('#NavSuperior').css('width', windowsize);
            $('#div2bg').css('width', windowsize);
            $('#div1bg').css('width', windowsize);
            $('#NavInferior').css('width', windowsize);
            $('#Body').css('width', windowsize);
            $('#Page').css('width', windowsize);
            $('#NavLogoTray').css('display', 'none');
        });

        $('#wrapper').append('<div class="fundo-loading"><img src="https://images.tcdn.com.br/img/arquivos/372058/images/responsivo/loading.gif"></div>');
    }

    $(document).ready(function () {
        var windowsize = $(window).width(); // when the browser resizes, reset the width
        if (windowsize <= 768) {

            $('.mousetrap').each(function () {
                $('.mousetrap').remove();
            });
            
            $("LINK[href*='theme-advanced.css']").remove();


            $('.busca-palavra').attr('value', '');
            $('.busca-palavra').attr('placeholder', 'Buscar na loja');

            var corfundo = $('body').css('background-color');
            var corimagem = $('body').css('background-image');

            $('#logotipo').css('background-color', corfundo);
            $('#logotipo').css('background-image', corimagem);



            var htmlBusca = $('.bg-busca').html();
             var htmlLogo = $('#logotipo').html();

            var headerHtml = '<header>';
            headerHtml += htmlLogo;
            headerHtml += '<div class="">'
            headerHtml += '                    <div class="lupa-resp"></div>'
            headerHtml += '                    <div class="login-resp"></div>'
            headerHtml += '                    <div class="carrinho-resp"></div>'
            headerHtml += '                    <div class="hamburguer"></div>'
            headerHtml += '                    <div class="env-busca">'
            headerHtml += htmlBusca;
            headerHtml += '                    </div>'
            headerHtml += '                </div><!-- .center -->'
            headerHtml += '            </header>';

            //$('#cabecalho').append('<div class="menu-mobile bgcolor"><div class="hamburguer bgcolor"></div>' + htmlBusca + '<div class="menu-conta bgcolor"></div></div>');

            $('#cabecalho').append(headerHtml);

            $('button').addClass('bgcolor');
            $('.botao-commerce').addClass('bgcolor');

            $('#button-buy').html('COMPRAR');



//            $('.menu-conta').click(function () {
//                if ($('#NavLateralEsquerda').css('display') == "block") {
//                    $('#NavLateralEsquerda').toggle('fast');
//                    $('.hamburguer').css('background', '  url(https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/hamburguer-tema.png) center center no-repeat transparent');
//                }
//
//                if ($('.cabecalho .caixa-overflow').css('display') == "none") {
//                    $('.menu-conta').css('background', 'url(https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/hamburguer-tema-x.png?v=7) center center no-repeat transparent');
//                }
//                else {
//                    $('.menu-conta').css('background', 'url(https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/conta-tema.png?v=2) no-repeat scroll center center transparent');
//                }
//
//                $('.cabecalho .caixa-overflow').toggle('fast');
//            });


            $('.hamburguer').click(function () {
                if ($('.cabecalho .caixa-overflow').css('display') == "block") {
                    $('.cabecalho .caixa-overflow').toggle('fast');
                }
                $('html, body').scrollTop(0);
                $('#NavLateralEsquerda').toggle('fast');
                $('.env-busca').fadeOut('fast');
            })

            $('header').find('.lupa-resp').click(function () {
                $('.env-busca').toggle('fast');
                $('.cabecalho .caixa-overflow').fadeOut('fast');
                $('#NavLateralEsquerda').fadeOut('fast');
                
            });

            $('header').find('.login-resp').click(function () {
                var loja = $('input[name="loja"]').val();
                document.location.href = 'login_layout.php?loja=' + loja + '&origem=central&f=';
            });

            $('header').find('.carrinho-resp').click(function () {
                var loja = $('input[name="loja"]').val();
                document.location.href = 'carrinho.php?loja=' + loja;
            });


            $('html').css('width', windowsize);
            $('header').css('width', windowsize);
            $('body').css('width', windowsize);
            $('#NavCentral').css('width', windowsize);
            $('footer').css('width', windowsize);
            $('#NavSuperior').css('width', windowsize);
            $('#div2bg').css('width', windowsize);
            $('#div1bg').css('width', windowsize);
            $('#NavInferior').css('width', windowsize);
            $('#Body').css('width', windowsize);
            $('#Body').css('min-width', windowsize);
            $('#Page').css('width', windowsize);
            $('#NavLogoTray').css('display', 'none');

            if ($('#tabela_carrinho').length) {

                $('#tabela_carrinho tr').not('#tabela_carrinho tr:first-child').each(function () {
                    var nome = $(this).find('strong').html();
                    $(this).before('<tr><td colspan="6" class="nome-produto-carrinho">' + nome + '</td></tr>');
                    $(this).find('td:nth-child(2)').hide();
                });

                $('.nome-produto-carrinho td:first-child').remove();
                $('table.tablePage:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(1)').attr('colspan', '4');
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(1)').attr('colspan', '8');
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)').attr('colspan', '8');
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)').remove();
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)').remove();
            }

            if ($('.caixa-detalhes-compra').length) {
                $('.caixa-detalhes-compra tr:first-child').remove();

                $('.tit-nome-produto').each(function () {
                    var nome = $(this).html();
                    $(this).parent('tr').before('<tr><td colspan="6" class="nome-produto-pagamento">' + nome + '</td></tr>');
                    $(this).remove();
                });

                $('.tit-produto-total').attr('colspan', '3');

            }
            /* Carrinho */

            $('#cep1').replaceWith($('#cep1').clone().attr('type', 'number'));
            $('#cep2').replaceWith($('#cep2').clone().attr('type', 'number'));

            $('#quant').replaceWith($('#quant').clone().attr('type', 'number'));
            $('#email_login').replaceWith($('#email_login').clone().attr('type', 'email'));
            $('#email_cadastro').replaceWith($('#email_cadastro').clone().attr('type', 'email'));
            
            $('#numero_cartao').replaceWith($('#numero_cartao').clone().attr('type', 'number'));
            $('#codigo_seguranca').replaceWith($('#codigo_seguranca').clone().attr('type', 'number'));
            $('#validade_cartao_mes').replaceWith($('#validade_cartao_mes').clone().attr('type', 'number'));
            $('#validade_cartao_ano').replaceWith($('#validade_cartao_ano').clone().attr('type', 'number'));


            var f = $('iframe#none');
            f.load(function() {
                alert('aa');
                    f.contents().find('.img_lighwindow').css('max-width','100%');
            });


            $('#search-key').replaceWith($('#search-key').clone().attr('type', 'search'));

            $('.fundo-loading').remove();

            $('#FormasPagamento #ProdBlock').each(function () {
                $(this).click(function () {
                    $(this).siblings('.lista-formas-pagamento').toggle('slow');
                })
            })

            if ($(location).attr('pathname') == "/loja/retorno_pagamento.php") {
                $('#Page').addClass('msg-finalizar');
                $('#Page p').addClass('msg-p-finalizar');
                $('#Page p').addClass('msg-p-finalizar');
            }

            if ($(location).attr('pathname') == "/loja/carrinho.php") {
                $('div.container:nth-child(4)').remove();
                $('.container3').css('display', 'block');
            }
            
            

            if ($(location).attr('pathname') == "/loja/central_detalhe_pedido.php") {
                $('p').css('display', 'block');
                $('p').css('padding', '10px 0');
                $('.tablePage img').css('display', 'none');
                $('.tablePage tr th:nth-child(3)').css('display', 'none');
                $('.tablePage tr td:nth-child(4)').css('display', 'none');
                $('.tablePage tr').find('[colspan=4]').attr('colspan', '3');
            }

            if ($(location).attr('pathname') == "/loja/central_cliente.php") {
                $('#ProdBlock').remove();
                $('.central-breadcrumb').remove();
            }
            
            if ($(location).attr('pathname') == "/loja/central_confirmar_pagamento.php") {
                $('form').find('input[type=text]').css('width','100%');
                $('form').find('textarea').css('width','100%');
                $('form').find('input[type=image]').attr('src','https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/bt-confirmar-pagamento.png');
            }
            
           
            
            



            $(window).scroll(function () {
                if ($('.caixa-overflow').css('display') != "none") {
                    $('.caixa-overflow').fadeOut();
                    $('.menu-conta').css('background', 'url(https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/conta-tema.png?v=2) no-repeat scroll center center transparent');
                }
            })
            
            var sair = $("li").find("[data-tray-tst='sair']").attr('href');
            $('.central-menu').append('<div class="icoFilho central-icons"> <p>Sair</p><a href="'+sair+'"></a></div>');
            
            


            var numItems = $('.prodBox').length;

            for (var i = 0; i < numItems; i++) {
                $('.prodBox').eq(i).appendTo($('.abasProduto').find('li').eq(i));

            }





            var loja = $('input[name="loja"]').val();
            var carrinho = quantidade_carrinho(loja, "quantidade", "");
            if (carrinho > 0) {

                $('.menu-conta').append('<span class="qtd-carrinho">' + carrinho + '</span>');

            }

        }




    })

})(jQuery);

function openLightWindow(url,titulo,altura,largura, iframeNome){

	var myLightWindow = new lightwindow();
	if(iframeNome == undefined){iframeNome = "none"};
	myLightWindow.activateWindow({
		href: url,
		title: titulo,
		width: largura,
		height: altura,
		type: 'external'
	});
        alert('aaa');
	return false;
}