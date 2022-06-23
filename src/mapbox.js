import * as L from 'leaflet';
import OSRMv1 from './osrm-v1';

/**
 * Works against OSRM's new API in version 5.0; this has
 * the API version v1.
 */
export default OSRMv1.extend({
    options: {
        serviceUrl: 'https://api.mapbox.com/directions/v5',
        profile: 'mapbox/driving',
        useHints: false,
    },

    initialize: function (accessToken, options) {
        L.Routing.OSRMv1.prototype.initialize.call(this, options);
        this.options.requestParameters = this.options.requestParameters || {};
        /* jshint camelcase: false */
        this.options.requestParameters.access_token = accessToken;
        /* jshint camelcase: true */
    },
});
