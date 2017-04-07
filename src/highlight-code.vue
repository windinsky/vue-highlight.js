<template lang="html">
	<pre v-if="!inline"><code ref="code" :class="lang"></code></pre>
	<span v-else><code ref="inline-code" :class="lang" :style="inlineCodeStyles"><slot></slot></code></span>
</template>

<script>
import hljs from 'highlight.js';

hljs.configure({
	languages: []
});

export default {
	name: 'highlight-code',
	props: {
		code : String,
		lang: String,
		inline: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			inlineCodeStyles: {
				'display': `inline !important`,
				'vertical-align': `middle`
			}
		};
	},
	methods: {
		init() {

			let code = !this.inline ? this.$refs['code'] : this.$refs['inline-code'];

			/*** 
			 *  somehow hljs.highlightBlock would break the code.innerHTML and prop.code binding, 
			 *  since hljs is using textContent to format, I set that property manully. It's ugly...
			 */

			code.textContent = this.code;
			hljs.highlightBlock(code);
			
		}
	},
	mounted() {
		this.init();
	},
	updated() {
		this.init();
	}
};
</script>
