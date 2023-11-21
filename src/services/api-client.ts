import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "c042c56cfa974b009b1904424028440d",
	},
});
