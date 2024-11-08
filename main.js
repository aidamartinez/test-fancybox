import './style.css'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {});
Fancybox.bind("[data-fancybox='gallery-a']", {
	Thumbs: {
		type: "classic",
	},
});
  
Fancybox.bind("[data-fancybox='gallery-c']", {
	Thumbs: false,
});
  
Fancybox.bind("[data-fancybox='gallery-less-options']", {
	Carousel: {
		Navigation: false,
	},
	Toolbar: {
		display: {
			left: [],
			middle: ["prev", "infobar", "next"],
			right: ["close"],
		},
	},
	Thumbs: false,
});

Fancybox.bind("[data-fancybox='gallery-protected']", {
	Toolbar: {
		display: {
			left: [],
			middle: [],
			right: ["close"],
		},
	},
	Thumbs: false,
	Images: {
		protected: true
	},
});
  
