define([
], function(){

    var CalcView = Backbone.View.extend({

        events: {
            'keyup input#calc-usd': 'usdChanged',
            'keyup input#calc-ltc': 'ltcChanged',
            'keyup input#calc-btc': 'btcChanged'

        },

        initialize: function () {
            this.$('.calc-content-wrapper').trigger( "create" );
        },

        usdChanged: function (e) {
            var usdVal = $(e.target).val();
            var ltcVal = usdVal / this.model.get('usd').ticker.last;
            var btcVal = ltcVal * this.model.get('btc').ticker.last;

            this.$('#calc-ltc').val(ltcVal);
            this.$('#calc-btc').val(btcVal);
        },

        ltcChanged: function (e) {
            var ltcVal = $(e.target).val();
            var usdVal = ltcVal * this.model.get('usd').ticker.last;
            var btcVal = ltcVal * this.model.get('btc').ticker.last;

            this.$('#calc-usd').val(usdVal);
            this.$('#calc-btc').val(btcVal);

        },

        btcChanged: function (e) {
            var btcVal = $(e.target).val();
            var ltcVal = btcVal / this.model.get('btc').ticker.last;
            var usdVal = ltcVal * this.model.get('usd').ticker.last;

            this.$('#calc-usd').val(usdVal);
            this.$('#calc-ltc').val(ltcVal);

        }

    });

    return CalcView;
});




