<template>
    <f7-page>
        <f7-button back>Back</f7-button>
        <gmap-map
        :center="center"
        :zoom="7"
        style="width: 500px; height: 400px"
        >
            <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            >
            <gmap-info-window>Hi!</gmap-info-window>
            </gmap-marker>
        </gmap-map>
    </f7-page>
</template>
 
<script>
    import Vue from 'vue';
    import * as VueGoogleMaps from 'vue2-google-maps';

    Vue.use(VueGoogleMaps, {
        load: {
            key: '',
            v: '3.30'
            // libraries: 'places', //// If you need to use place input
        }
    });
    export default {
        data () {
            return {
                center: {
                    lat: 1.0,
                    lng: 33.5
                },
                markers: [
                    {
                        position: {
                            lat: 0.3,
                            lng: 32.6
                        }
                    },
                    {
                        position: {
                            lat: 1.050,
                            lng: 34.175
                        }
                    }
                ]
            }
        }
    }
</script> 