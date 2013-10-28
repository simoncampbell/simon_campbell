//////////////////////////////////////
//                                  //
//         GRID-TOGGLE.JS           //
//                                  //
//////////////////////////////////////

// adds a grid and baseline overlay

define(['jquery'], function(jQuery) {
    var GridToggle = function(){
        this.overlays = {
            grid: {
                isOn: false,
                $container: $('<div class="js-grid grid-toggle__container"/>').hide(),
                rotation: 0
            },
            baseline: {
                isOn: false,
                $container: $('<div class="js-baseline grid-toggle__container"/>').hide(),
                rotation: 0
            }
        };
        this.isEnabled = false;
        this.$body = $('body');
        this.init();
    };

    GridToggle.prototype = {
        constructor: GridToggle,
        opts: {
            opacityStep: (1 / 20),
            rotateStep: 90
        },
        init: function() {
            this.appendContainers();
            this.storeInitialOpacities();
            this.bind();
            this.enable();
        },
        bind: function(){
            var _self = this,
                $forms = $('form');

            this.$body.on('keypress.gridToggle.action',function(e){
                _self.dispatcher(e.which);
            });

            $forms.on('focus.gridToggle.disable', '*', function(e){
                _self.disable();
            });

            $forms.on('blur.gridToggle.enable', '*', function(e){
                _self.enable();
            });
        },
        enable: function(){
            this.isEnabled = true;
        },
        disable: function(){
            this.isEnabled = false;
        },
        appendContainers: function(){
            var _self = this;

            $.each(this.overlays, function(key, value){
                _self.$body.append(value.$container);
            });
        },
        dispatcher: function(key){
            if (this.isEnabled){
                switch (String.fromCharCode(key)) {
                    case 'g':
                        this.toggleGrid();
                        break;

                    case 'b':
                        this.toggleBaseline();
                        break;

                    case 'd':
                        this.toggleAll();
                        break;

                    case 'j':
                        this.changeOpacity(- this.opts.opacityStep);
                        break;

                    case  'k':
                        this.changeOpacity(this.opts.opacityStep);
                        break;

                    case 'r':
                        this.reset();
                        break;

                    case 'i':
                        this.rotateColour(this.opts.rotateStep);
                        break;
                }
            }
        },
        toggleGrid: function(){
            this.trigger('grid', 'toggle');
            this.trigger('baseline', 'hide');
        },
        toggleBaseline: function(){
            this.trigger('baseline', 'toggle');
            this.trigger('grid', 'hide');
        },
        reset: function(){
            var _self = this;

            this.resetOpacity();
            $.each(this.overlays, function(key, overlay){
                _self.deInvert(overlay);
                overlay.isInverted = false;
            });
        },
        changeOpacity: function(amount){
            $.each(this.overlays, function(key, overlay){
                var value;

                if (overlay.isOn) {
                    value = parseFloat(overlay.$container.css('opacity')) + amount;
                    overlay.$container.css('opacity', value);
                }
            });

        },
        rotateColour: function(amount){
            var _self = this;

            $.each(this.overlays, function(key, overlay){
                var rotation = amount + overlay.rotation;

                if (overlay.isOn){
                    overlay.$container.css({
                        '-webkit-filter': 'hue-rotate(' + rotation + 'deg)',
                        '-moz-filter': 'hue-rotate(' + rotation + 'deg)',
                        '-o-filter': 'hue-rotate(' + rotation + 'deg)',
                        '-ms-filter': 'hue-rotate(' + rotation + 'deg)',
                        'filter': 'hue-rotate(' + rotation + 'deg)'
                    });

                    overlay.rotation = rotation;
                }
            });
        },
        deInvert: function(overlay){
            overlay.$container.css({
                '-webkit-filter': '',
                '-moz-filter': '',
                '-o-filter': '',
                '-ms-filter': '',
                'filter': ''
            });
        },
        storeInitialOpacities: function(){
            $.each(this.overlays, function(key, overlay){
                overlay.initialOpacity = parseFloat(overlay.$container.css('opacity'));
            });
        },
        resetOpacity: function(){
            $.each(this.overlays, function(key, overlay){
                if (overlay.isOn){
                    overlay.$container.css('opacity', overlay.initialOpacity);
                }
            });
        },
        toggleAll: function(){
            if (this.overlays.grid.isOn && this.overlays.baseline.isOn ){
                this.trigger('grid', 'hide');
                this.trigger('baseline', 'hide');
            }
            else {
                this.trigger('grid', 'show');
                this.trigger('baseline', 'show');
            }
        },
        trigger: function(overlayToSwitch, action){
            var overlay = this.overlays[overlayToSwitch];

            overlay.$container[action]();
            overlay.isOn = overlay.$container.is(':visible');
        }
    };

    return GridToggle;
});