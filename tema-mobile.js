/**
 * Plugins - Init
 **/
;
(function($) {

    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');



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
    });

    var windowsize = $(window).width(); // when the browser resizes, reset the width
    if (windowsize <= 768) {
        $('#wrapper').append('<div class="fundo-loading"><img src="https://images.tcdn.com.br/img/arquivos/372058/images/responsivo/loading.gif"></div>');
    }

    $(document).ready(function() {
        var windowsize = $(window).width(); // when the browser resizes, reset the width
        if (windowsize <= 768) {

            $('.busca-palavra').attr('value', '');
            $('.busca-palavra').attr('placeholder', 'Buscar na loja');

            var corfundo = $('body').css('background-color');
            var corimagem = $('body').css('background-image');

            $('#logotipo').css('background-color', corfundo);
            $('#logotipo').css('background-image', corimagem);

            var htmlBusca = $('.bg-busca').html();
            $('#cabecalho').append('<div class="menu-mobile"><div class="hamburguer color-tone-2"></div>' + htmlBusca + '<div class="menu-conta color-tone-2"></div></div>');
            $('.bg-busca').remove();



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
                
                if($('#NavLateralEsquerda').css('display') == "none") {
                    $('.hamburguer').css('background-image','https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/hamburguer-tema-x.gif?v=4');
                }
                else {
                     $('.hamburguer').css('background-image','https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/hamburguer-tema.png');
                }
                
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
            $('.tablePage tr').find('[colspan=4]').attr('colspan','3');
        }
        
          if ($(location).attr('pathname') == "/loja/central_cliente.php") {
              $('#ProdBlock').remove();
              $('.central-breadcrumb').remove();
          }
        
        


        $(window).scroll(function() {
            if ($('.caixa-overflow').css('display') != "none") {
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