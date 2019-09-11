$(document).ready(() => {
    let topBefore = 0;
    let leftbefore = 0;

    $(".content-wrapper").on('scroll', event => {
        let scrollAmount = $(event.currentTarget).scrollTop();
        let moonTop = $(".moon").position().top;
        let planetTop = $(".planet").position().top;

        $(".moon").css({top: `${moonTop + ((scrollAmount - topBefore) * 0.5)}px`});
        $(".planet").css({top: `${planetTop + ((scrollAmount - topBefore) * 0.3)}px`});

        topBefore = scrollAmount;
    });

    $(".project-slider").on('scroll', event => {
        let scrollAmount = $(event.currentTarget).scrollLeft();
        let illustrationLeft = $(".project-illustration").position().left;
        let treeLeft = $(".tree").position().left;
        let grassLeft = parseFloat($(".grass").css("background-position").split(" ")[0].replace("px", ""));
        let opacityTrigger = (370 - illustrationLeft) / 60.0;
        let opacity = (opacityTrigger > 1) ? 1 : ((opacityTrigger < 0) ? 0 : opacityTrigger);
        console.log(grassLeft);

        $(".project-illustration").css({
            left: `${illustrationLeft + ((scrollAmount - leftbefore) * 0.2)}px`,
            opacity: opacity
        });
        $(".tree").css({left: `${treeLeft + ((leftbefore - scrollAmount) * 0.1)}px`});
        $(".grass").css({"background-position": `${grassLeft + ((leftbefore - scrollAmount) * 0.5)}px bottom`});

        leftbefore = scrollAmount;
    });
});