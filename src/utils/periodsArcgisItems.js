import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import TileLayer from "@arcgis/core/layers/TileLayer"
import Basemap from "@arcgis/core/Basemap"
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery"
import Expand from "@arcgis/core/widgets/Expand"
import Locate from "@arcgis/core/widgets/Locate"
import Swipe from "@arcgis/core/widgets/Swipe"
import MapImageLayer from "@arcgis/core/layers/MapImageLayer"

const url = window.location.href
const origin = new URL(url).origin

const colors = ["#f22f00", "#26ffff", "#d99800", "#ffdd00", "#ff4dc4", "#5ff500", "#0040ff"]

export const objectRenderer = {
	type: "unique-value",
	field: "Klasė",
	uniqueValueInfos: [
		{
			value: 1,
			symbol: {
				type: "simple-line",
				cap: "butt",
				color: colors[0],
			},
		},
		{
			value: 2,
			symbol: {
				type: "simple-line",
				cap: "butt",
				color: colors[1],
			},
		},
		{
			value: 3,
			symbol: {
				type: "simple-line",
				cap: "butt",
				color: colors[2],
			},
		},
		{
			value: 4,
			symbol: {
				type: "simple-line",
				cap: "butt",
				color: colors[3],
			},
		},
		{
			value: 5,
			symbol: {
				type: "simple-line",
				cap: "butt",
				color: colors[4],
			},
		},
		{
			value: 6,
			symbol: {
				type: "simple-line",
				cap: "butt",
				color: colors[5],
			},
		},
		{
			value: 7,
			symbol: {
				type: "simple-line",
				cap: "butt",
				color: colors[6],
			},
		},
	],
	visualVariables: [
		{
			type: "size",
			valueExpression: "$view.scale",
			stops: [
				{ size: 14, value: 500 },
				{ size: 11, value: 1000 },
				{ size: 8, value: 2000 },
				{ size: 5, value: 5000 },
				{ size: 2, value: 10000 },
			],
		},
	],
}

export const objects = new FeatureLayer({
	url: "https://services1.arcgis.com/usA3lHW20rGU6glp/ArcGIS/rest/services/VIGIS_05_16/FeatureServer/7",
	outFields: ["*"],
	title: "Periodas",
	renderer: objectRenderer,
})

const period_1808 = new MapImageLayer({
	url: "https://atviras.vplanas.lt/arcgis/rest/services/VilniausDNR/VilniausDNR2/MapServer",
	title: "Periodas 1808",
	sublayers: [
		{
			id: 49,
		},
	],
})
const period_1845 = new MapImageLayer({
	url: "https://atviras.vplanas.lt/arcgis/rest/services/VilniausDNR/VilniausDNR2/MapServer",
	title: "Periodas 1845",
  sublayers: [
		{
			id: 69,
		},
	],
})
const period_1911 = new MapImageLayer({
	url: "https://atviras.vplanas.lt/arcgis/rest/services/VilniausDNR/VilniausDNR2/MapServer",
	title: "Periodas 1911",
  sublayers: [
		{
			id: 75,
		},
	],
})
const period_1938 = new MapImageLayer({
	url: "https://atviras.vplanas.lt/arcgis/rest/services/VilniausDNR/VilniausDNR2/MapServer",
	title: "Periodas 1938",
  sublayers: [
		{
			id: 80,
		},
	],
})
const period_1977 = new MapImageLayer({
	url: "https://atviras.vplanas.lt/arcgis/rest/services/VilniausDNR/VilniausDNR2/MapServer",
	title: "Periodas 1977",
  sublayers: [
		{
			id: 84,
		},
	],
})
const period_2021 = new MapImageLayer({
	url: "https://atviras.vplanas.lt/arcgis/rest/services/VilniausDNR/VilniausDNR2/MapServer",
	title: "Periodas 2021",
  sublayers: [
		{
			id: 87,
		},
	],
})
export const periods = [period_1808, period_1845, period_1911, period_1938, period_1977, period_2021]

const basemap1 = new Basemap({
	baseLayers: [
		new TileLayer({
			// url: "https://atviras.vplanas.lt/arcgis/rest/services/Baziniai_zemelapiai/Vilnius_basemap_light_LKS/MapServer",
			url: "https://gis.vplanas.lt/arcgis/rest/services/Baziniai_zemelapiai/Vilnius_basemap_LKS_su_rajonu/MapServer",
		}),
	],
	id: "light",
	thumbnailUrl: `${origin}/vilniausdnr/signIcons/basemap_light.png`,
})
const basemap2 = new Basemap({
	baseLayers: [
		new TileLayer({
			// url: "https://atviras.vplanas.lt/arcgis/rest/services/Baziniai_zemelapiai/Vilnius_basemap_dark_LKS/MapServer",
			url: "https://gis.vplanas.lt/arcgis/rest/services/Baziniai_zemelapiai/Vilnius_basemap_dark_calibrated/MapServer",
		}),
	],
	id: "dark",
	thumbnailUrl: `${origin}/vilniausdnr/signIcons/basemap_dark.png`,
})

export const map = new Map({
	basemap: basemap2,
	layers: [objects],
})
export const map2 = new Map({
	basemap: basemap2,
	layers: [period_1808],
})

export const view = new MapView({
	map: map,
	zoom: 2,
	slider: false,
	//popup: {
	//	dockEnabled: true,
	//	dockOptions: {
	//		buttonEnabled: false,
	//		breakpoint: false,
	//		position: "top-right",
	//	},
	//},
	ui: {
		components: ["attribution"],
	},
	highlightOptions: {
		color: "#FFFFFF",
		fillOpacity: 1,
		haloColor: "#FF0026",
		haloOpacity: 1,
	},
})

export const view2 = new MapView({
	map: map2,
	zoom: 2,
	slider: false,
	constraints: {
		snapToZoom: false,
	},
	ui: {
		components: ["attribution"],
	},
	highlightOptions: {
		color: "#FF0000",
		haloColor: "#FF0000",
	},
})

const basemapGallery = new BasemapGallery({
	view: view,
	source: [basemap1, basemap2],
})

export const bgExpand = new Expand({
	view: view,
	content: basemapGallery,
	autoCollapse: true,
	collapseIconClass: "esri-icon-left",
	//collapseTooltip: "Suskleisti",
	//expandTooltip: "Išskleisti bazinius žemėlapius",
})

export const locateWidget = new Locate({
	view: view,
	popupEnabled: false,
})

export const swipe = new Swipe({
	view: view,
	leadingLayers: [],
	trailingLayers: [],
	direction: "horizontal", // swipe widget will move from top to bottom of view
	position: 50, // position set to middle of the view (50%)
})
