<template>
	<!-- App -->
	<div id="app">
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
		<app-left-panel></app-left-panel>
		<app-right-panel></app-right-panel>
		<app-view></app-view>
		<app-popup></app-popup>
		<app-login-screen></app-login-screen>
	</div>
</template>

<script>
	import LeftPanel from './assets/vue/components/left-panel';
	import RightPanel from './assets/vue/components/right-panel';
	import Popup from './assets/vue/components/popup';
	import LoginScreen from './assets/vue/components/login-screen';
	import View from './assets/vue/pages/main-view';
	export default {
		components: {
			'app-left-panel' : LeftPanel,
			'app-right-panel' : RightPanel,
			'app-popup' : Popup,
			'app-login-screen' : LoginScreen,
			'app-view' : View
		}
	}
</script>
