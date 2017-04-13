<template lang="html">
	<pre v-if="hasCode && !inline"><code ref="code-elm" :class="lang">{{ code }}</code></pre>
	<pre v-else-if="!hasCode && !inline"><code ref="code-elm" :class="lang"><slot></slot></code></pre>

	<span v-else-if="hasCode && inline"><code ref="code-elm" :class="lang" :style="codeStyles">{{ code }}</code></span>
	<span v-else="!hasCode && inline"><code ref="code-elm" :class="lang" :style="codeStyles"><slot></slot></code></span>
</template>


<script>

import hljs from 'highlight.js';

export default {
	name: 'highlight-code',
    computed:{
		hasCode() {
			return (typeof this.code === 'string') && (this.code.length > 0);
		}
    },
	props: {
		lang: String,
		inline: {
			type: Boolean,
			default: false
		},
		code: String
	},
    methods: {
		init() {
			let codeElm = this.$refs['code-elm'];
			if (this.hasCode) {
				codeElm.textContent = this.code;
			}
			hljs.highlightBlock(codeElm);
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