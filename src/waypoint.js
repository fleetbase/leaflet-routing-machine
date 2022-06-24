export default L.Class.extend({
    options: {
        allowUTurn: false,
    },
    initialize: function (latLng, name, options) {
        L.Util.setOptions(this, options);
        this.latLng = L.latLng(latLng);
        this.name = name;
    },
});
