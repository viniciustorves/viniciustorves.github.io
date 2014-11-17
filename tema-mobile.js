/**
 * Plugins - Init
 **/
;
(function($) {

    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
    $('head').append('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');


    $(window).resize(function() {
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

        $('header').find('.lupa-resp').click(function() {
            $('#form-auto-complete').toggle();
        });



        $('header').find('.login-resp').click(function() {
            var loja = $('input[name="loja"]').val();
            document.location.href = 'login_layout.php?loja=' + loja + '&origem=central&f=';
        });

        $('header').find('.carrinho-resp').click(function() {
            var loja = $('input[name="loja"]').val();
            document.location.href = 'carrinho.php?loja=' + loja;
        });

        $('header').find('.hamburguer').click(function() {
            $('header').css('position', 'relative');
            $('.first-level').fadeIn('fast');
            if (!$('.fundo-close').length) {
                $('body > div').before('<div class="fundo-close"></div>');
            } else {
                $('.fundo-close').fadeIn('fast');
            }
            $('.close-x').click(function() {
                $('.fundo-close').fadeOut('fast');
                $('.first-level').fadeOut('fast');
                $('header').css('position', 'fixed');

            })
        })
    });

    var windowsize = $(window).width(); // when the browser resizes, reset the width
    if (windowsize <= 768) {
        $('#wrapper').append('<div class="fundo-loading"><img src="https://images.tcdn.com.br/img/arquivos/372058/images/responsivo/loading.gif"></div>');
    }

    $(document).ready(function() {
        var windowsize = $(window).width(); // when the browser resizes, reset the width
        if (windowsize <= 768) {

            $('#cabecalho').append('<div class="menu-mobile"><div class="menu-conta"></div><div class="hamburguer"></div></div>');
           
            $('.menu-conta').click(function() {
                if ($('#NavLateralEsquerda').css('display') == "block") {
                    
                    $('#NavLateralEsquerda').toggle('fast');
                }
                $('.cabecalho .caixa-overflow').toggle('fast');
            })

            $('.hamburguer').click(function() {
                if ($('.cabecalho .caixa-overflow').css('display') == "block") {
                    $('.cabecalho .caixa-overflow').toggle('fast');
                }
 
                $('html, body').scrollTop(0);
                $('#NavLateralEsquerda').toggle('fast');
            })
            
            

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
                $('#tabela_carrinho tr').not('#tabela_carrinho tr:first-child').each(function() {
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

                $('.tit-nome-produto').each(function() {
                    var nome = $(this).html();
                    $(this).parent('tr').before('<tr><td colspan="6" class="nome-produto-pagamento">' + nome + '</td></tr>');
                    $(this).remove();
                });

                $('.tit-produto-total').attr('colspan', '3');

            }
            /* Carrinho */

            $('#cep1').replaceWith($('#cep1').clone().attr('type', 'number'));
            $('#cep2').replaceWith($('#cep2').clone().attr('type', 'number'));

            $('#search-key').replaceWith($('#search-key').clone().attr('type', 'search'));

        }

        $('.fundo-loading').remove();

        $('#FormasPagamento #ProdBlock').each(function() {
            $(this).click(function() {
                $(this).siblings('.lista-formas-pagamento').toggle('slow');
            })
        })

        if ($(location).attr('pathname') == "/loja/retorno_pagamento.php") {
            $('#Page').addClass('msg-finalizar');
            $('#Page p').addClass('msg-p-finalizar');
            $('#Page p').addClass('msg-p-finalizar');
        }


        $(window).scroll(function(){
            if($('.caixa-overflow').css('display') != "none") {
                $('.caixa-overflow').fadeOut();
            }
        })



        var loja = $('input[name="loja"]').val();
        var carrinho = quantidade_carrinho(loja, "quantidade", "");
        if (carrinho > 0) {

            $('.carrinho-resp').append('<span class="qtd-carrinho">' + carrinho + '</span>');

        }


    })

})(jQuery);