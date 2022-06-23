import 'leaflet';
import Control from './control';
import Itinerary from './itinerary';
import Line from './line';
import OSRMv1 from './osrm-v1';
import Plan from './plan';
import Waypoint from './waypoint';
import Autocomplete from './autocomplete';
import Formatter from './formatter';
import GeocoderElement from './geocoder-element';
import Localization from './localization';
import ItineraryBuilder from './itinerary-builder';
import Mapbox from './mapbox';
import ErrorControl from './error-control';
import { set } from './utils';

const legacyRouting = {
    control: function(options) { return new Control(options); },
    itinerary: function(options) {
        return Itinerary(options);
    },
    line: function(route, options) {
        return new Line(route, options);
    },
    plan: function(waypoints, options) {
        return new Plan(waypoints, options);
    },
    waypoint: function(latLng, name, options) {
        return new Waypoint(latLng, name, options);
    },
    osrmv1: function(options) {
        return new OSRMv1(options);
    },
    localization: function(options) {
        return new Localization(options);
    },
    formatter: function(options) {
        return new Formatter(options);
    },
    geocoderElement: function(wp, i, nWps, plan) {
        return new L.Routing.GeocoderElement(wp, i, nWps, plan);
    },
    itineraryBuilder: function(options) {
        return new ItineraryBuilder(options);
    },
    mapbox: function(accessToken, options) {
        return new Mapbox(accessToken, options);
    },
    errorControl: function(routingControl, options) {
        return new ErrorControl(routingControl, options);
    },
    autocomplete: function(elem, callback, context, options) {
        return new Autocomplete(elem, callback, context, options);
    }
};

const Routing = {
    Control: Control,
    Itinerary: Itinerary,
    Line: Line,
    OSRMv1: OSRMv1,
    Plan: Plan,
    Waypoint: Waypoint,
    Autocomplete: Autocomplete,
    Formatter: Formatter,
    GeocoderElement: GeocoderElement,
    Localization: Localization,
    ItineraryBuilder: ItineraryBuilder,
    ...legacyRouting
};

L.routing = legacyRouting;
L.Routing = Routing;

export {
    Control,
    Itinerary,
    Line,
    OSRMv1,
    Plan,
    Waypoint,
    Autocomplete,
    Formatter,
    GeocoderElement,
    Localization,
    ItineraryBuilder
};

export default Routing;

