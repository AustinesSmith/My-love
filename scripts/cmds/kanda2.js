/*

hahaha dont worry about nnn who cares brother who carese
enjoy kanda cmd and shake your banana 7 times a day haha


*/


module.exports = {
	config: {
		name: "kda",
		aliases: ["kanda2.0"],
		version: "2.0",
		author: "kshitiz",
		countDown: 30,
		role: 2,
		shortDescription: "",
		longDescription: "get kanda/p***n video hilake sojaa",
		category: "𝟭𝟴+",
		guide: "{p}{n}",
	},

	sentVideos: [],

	onStart: async function ({ api, event, message }) {
		const senderID = event.senderID;

		const loadingMessage = await message.reply({
			body: "kanda aaudaixa... ekxin parkhi muji! 🤡",
		});

		const link = [
			"https://drive.google.com/uc?export=download&id=1-gJdG8bxmZLyOC7-6E4A5Hm95Q9gWIPO",
			"https://drive.google.com/uc?export=download&id=1-ryNR8j529EZyTCuMur9wmkFz4ahlv-f",
			"https://drive.google.com/uc?export=download&id=1-vHh7XBtPOS3s42q-s8s30Bzsx2u6czu",
			"https://drive.google.com/uc?export=download&id=11IUd-PDHozLmh_RtvSf0S-f3G6wut1ZT",
			"https://drive.google.com/uc?export=download&id=12YCqZovJ8sVZZZTDLu8dv8NAwsMGfqiB",
			"https://drive.google.com/uc?export=download&id=12eIiCYpd_Jm8zIVRSkqlSt7W-7OsxB6g",
			"https://drive.google.com/uc?export=download&id=13utWruipZ_3fR0QSMtGMnFjGt3bthnbf",
			"https://drive.google.com/uc?export=download&id=14GYNaYL-pkEh3UH0oIUXVamru5h830DY",
			"https://drive.google.com/uc?export=download&id=14UGb2fH4wyUbVSQ-Vt5yf-4sH3-icXGC",
			"https://drive.google.com/uc?export=download&id=161O9_EbCQJ8nHTT7VeE7BWtHvEjHAT4k",
			"https://drive.google.com/uc?export=download&id=170YWB4jpMfR5GpmPb_Lymh6OmrmWDE0x",
			"https://drive.google.com/uc?export=download&id=17nvXNBpMWVmuWLK-kkLzkbrbpW43rD4r",
			"https://drive.google.com/uc?export=download&id=17w7sehThOv6IRrcsLboi7Zk6zZvfBHr5",
			"https://drive.google.com/uc?export=download&id=17yaPd3PoYJkuL0IEZHzcBic9pX4AmGiK",
			"https://drive.google.com/uc?export=download&id=18Dyc1vkysNhHSGi5OYpa6AzD5rk3_vkf",
			"https://drive.google.com/uc?export=download&id=18brau5aYmiMAxfhDTLz_nFWuIcb_mja5",
			"https://drive.google.com/uc?export=download&id=19GcLpOzFYypYFu1FboQyVjWxC9Jh3JC5",
			"https://drive.google.com/uc?export=download&id=19lKQChg0hv2MOTphkyI4zTiUIxuujd03",
			"https://drive.google.com/uc?export=download&id=1AjrBOBRWKpKjLOYV1oof2mVZBzx0ebgD",
			"https://drive.google.com/uc?export=download&id=1BPOEwIt7lGv66w5pUTDU937q4i5ym5S_",
			"https://drive.google.com/uc?export=download&id=1C-VxCoO5gMKCq2rg7PxjlitK4bOg7pt2",
			"https://drive.google.com/uc?export=download&id=1C9t9VNpLT9DelBeDnbFNjdAA0tK_cXh-",
			"https://drive.google.com/uc?export=download&id=1DrhAOOeYIHlTWJU5e26OMjO0R5nueyf7",
			"https://drive.google.com/uc?export=download&id=1Dz7UfOejW9rDFYFAtxmAq_ncv04WaTTL",
			"https://drive.google.com/uc?export=download&id=1EcBmrdqYfQbwSPr2kiKY2QV_6CXLJJj6",
			"https://drive.google.com/uc?export=download&id=1F5Xc5Qff4RGyUuHzuqPfmOn2EZKQIn7P",
			"https://drive.google.com/uc?export=download&id=1FTxkmgt2sWf8U2h8a5HszyKINMr6Gnwm",
			"https://drive.google.com/uc?export=download&id=1Frf4GUg26Abw2lJdQ_RHycNhDMZXfMm2",
			"https://drive.google.com/uc?export=download&id=1FtdiGL244Kcj7tiA6F_2mKeTmMpVCyjr",
			"https://drive.google.com/uc?export=download&id=1G2tE1VdFzzqochfGwXwc46nuwkTeRRSc",
			"https://drive.google.com/uc?export=download&id=1GB6VOhgA3-JUSUZ3D1xgjlKH1Jswy0Z4",
			"https://drive.google.com/uc?export=download&id=1G_04XtbUP-QZNWFzdLohwY_w6BRdmijk",
			"https://drive.google.com/uc?export=download&id=1GpvlwryNcsRz2i6VYEV3NqSLr0WtGGn_",
			"https://drive.google.com/uc?export=download&id=1HYn-ZCVB0JcipKWrMxPnSrAVP4oSjePT",
			"https://drive.google.com/uc?export=download&id=1H_5i2V6W8Fl0N5QIKPACEUcljd8-q_dT",
			"https://drive.google.com/uc?export=download&id=1HhFPMOMXI7DDKc371C-12A0yfC0101x7",
			"https://drive.google.com/uc?export=download&id=1JNRfPMJe1_SodueqhMVf4so0-vjWaK9V",
			"https://drive.google.com/uc?export=download&id=1Jjy85bIGE9efsUIlmHykEistAquEB9oT",
			"https://drive.google.com/uc?export=download&id=1JoXCYZz4YoKpWe809ttUaaSsJdsCJZNf",
			"https://drive.google.com/uc?export=download&id=1Ko-ScBYddulpKX4I4xS7BRkndIaZZ3gT",
			"https://drive.google.com/uc?export=download&id=1LU4PTBFjWlhgzP2HiiJX_Esw2iIq7Zpj",
			"https://drive.google.com/uc?export=download&id=1LaM2kIlZUdA_UbCzX8s92nxcqEJieHLN",
			"https://drive.google.com/uc?export=download&id=1LcClA0b5Qih_tIv_wVRUsWX9gk3bVmzj",
			"https://drive.google.com/uc?export=download&id=1LgVpbMhe0CXM7rIUr9pJNK46QtZcpRtK",
			"https://drive.google.com/uc?export=download&id=1MB-KTUmPMkSb1o4J_EIRQ8mJ3w-cUOtY",
			"https://drive.google.com/uc?export=download&id=1M_cHjSaNWT5b_8p9VSPmzVyz-rqBqo3S",
			"https://drive.google.com/uc?export=download&id=1NC3fFj68PqqvZeg67AdA_cHyNdOBlRfF",
			"https://drive.google.com/uc?export=download&id=1Nk534yO5owt7IaMOKjbT6IGLGW96Gv0f",
			"https://drive.google.com/uc?export=download&id=1O1Cej8MFdytRun3RmGTnmT6uk1T-Zcmu",
			"https://drive.google.com/uc?export=download&id=1O801cupSBdjgkEHcRj9gZgyj2UVbyBZ_",
			"https://drive.google.com/uc?export=download&id=1OZUKqC7ooU572Vice1a0w3O3qRbC1F-r",
			"https://drive.google.com/uc?export=download&id=1P36Avho0fdTGnIm--wsIbSXqvTtaNbGA",
			"https://drive.google.com/uc?export=download&id=1PU4U-VHzWzZ_3chEOUdUJOeOj_8QTC19",
			"https://drive.google.com/uc?export=download&id=1Q-ZiZE9B1nADleloUlZPk9Yt2UcT9Jli",
			"https://drive.google.com/uc?export=download&id=1Q6ZlUc7gYbKng2T5BW8ihDXSohNVvl9i",
			"https://drive.google.com/uc?export=download&id=1QS5LbZmGXsHynBSVP2eNMBctjp7i8Veh",
			"https://drive.google.com/uc?export=download&id=1QoegqFfHWnaSRimcwZouya7xM9aIYOLO",
			"https://drive.google.com/uc?export=download&id=1RFtXmVTzPt6LkpX2q_2co9_-lpKI5czZ",
			"https://drive.google.com/uc?export=download&id=1Rtx9IpniEP0RQ8cREvf4q5OjoBvlxlVd",
			"https://drive.google.com/uc?export=download&id=1RwR0hE9oroYy1r92qySPSFbddsBdnGZd",
			"https://drive.google.com/uc?export=download&id=1TAshp38cUnJ0bQxSnlur_srBG-iSmhKZ",
			"https://drive.google.com/uc?export=download&id=1V5IB7_yn1mPhgnY15Zqo7hl6_ypAj-c_",
			"https://drive.google.com/uc?export=download&id=1VdwLFjOyTX0n5UwyqMtC8_xnwVCEFx3Y",
			"https://drive.google.com/uc?export=download&id=1Wja3iI8LALkZs_XIMLRziTrcPGMipAvW",
			"https://drive.google.com/uc?export=download&id=1X84nddHJ-_4Lc6p9Hj-IXaBmwVkx4alc",
			"https://drive.google.com/uc?export=download&id=1Xw8Mxk3RJJ3Rc1wCZiRg5oKGRN4e_l2L",
			"https://drive.google.com/uc?export=download&id=1Y34gETXZwRBXf60nYOyDNjMEb3GcHw_p",
			"https://drive.google.com/uc?export=download&id=1Z8fRrmLaq2VopeJDxBRyB6m6Aupq38Fw",
			"https://drive.google.com/uc?export=download&id=1ZHd4NUAaWrlyvysQ1VnfkeexlK2t3u46",
			"https://drive.google.com/uc?export=download&id=1ZW_b6EQ4DQI-hSFw3wJeekaSuL-CTt-X",
			"https://drive.google.com/uc?export=download&id=1ZWnRry0HcXUAkeqvEHR51ukzVMWP4q1j",
			"https://drive.google.com/uc?export=download&id=1_7LZ4go5LMgWvRPoKJIku0_Tz3rxdgS-",
			"https://drive.google.com/uc?export=download&id=1_8uTqb3XQcKdLxg-kCPose2zizbjuEfh",
			"https://drive.google.com/uc?export=download&id=1a3nlk9nFVQ4UHNpXzxWZWz1kzcVW2q3f",
			"https://drive.google.com/uc?export=download&id=1ajf90OK-R27jrqJ_ot8O6bCdtQn8PYo0",
			"https://drive.google.com/uc?export=download&id=1auj8r7iOzIAfxhH0GI9JvuYaPxFs6Or3",
			"https://drive.google.com/uc?export=download&id=1b6O6LdfitQLU5o8YnyOUjRP422eE9qwA",
			"https://drive.google.com/uc?export=download&id=1bZIPoHp6UcMXHIISvA0PNirfnQGN0Fdp",
			"https://drive.google.com/uc?export=download&id=1cDyFQ9BfrqKZH1AYgjT9DDxpR7pTcKVI",
			"https://drive.google.com/uc?export=download&id=1e9Ut8dt4BpEwEoaIbh_4ktCY8pLm_90R",
			"https://drive.google.com/uc?export=download&id=1eBj_m0bsySjUcsJEm8DJ-zGaq9tI3gK4",
			"https://drive.google.com/uc?export=download&id=1eEaIBikLu5kwOw3U3xmowlu7TxNFCYGG",
			"https://drive.google.com/uc?export=download&id=1fltQlOK7O4hBNjzqFrhTcZkkalyX-xtP",
			"https://drive.google.com/uc?export=download&id=1iCgSIdDe3OAlbLfHj9MOM5r4p2wJ3IVX",
			"https://drive.google.com/uc?export=download&id=1iDsDpwRTyqVtlkK1cr2yCmX9RWBqro83",
			"https://drive.google.com/uc?export=download&id=1ilsbQ41h27oYFLTkF7DGh5E1y87Fb4Li",
			"https://drive.google.com/uc?export=download&id=1kvPCFpazUyG4kweLotGo4MBOV6ITbDhO",
			"https://drive.google.com/uc?export=download&id=1l-F5zFd9n3xkpNVQVfEQ1QY5Qk0vSuRP",
			"https://drive.google.com/uc?export=download&id=1lHlClK9_bIsIg4GZXTmtcD2uL7HCBidC",
			"https://drive.google.com/uc?export=download&id=1ldhd9bDe5P7dr5IjRSFNw7_p4-T-bUHq",
			"https://drive.google.com/uc?export=download&id=1lgy4CM0dZTgUQe97cHv8ckI-TH1fEdDA",
			"https://drive.google.com/uc?export=download&id=1mr8XTjOfylN4RU8qHQGGLpdBhD9u1922",
			"https://drive.google.com/uc?export=download&id=1mviQxG7P__nj6pzHykEdOxLERwIJCp8E",
			"https://drive.google.com/uc?export=download&id=1pMNK9J3016kHBePSN0yr0QnDSifDlmvX",
			"https://drive.google.com/uc?export=download&id=1q6BysXVGDKrkoV9cLsdtJf37bkCSpxYf",
			"https://drive.google.com/uc?export=download&id=1qOB3u_06QrNcaKcJrnH27db5gplNCv8n",
			"https://drive.google.com/uc?export=download&id=1qWNdqTwOrc7RJUqgHO9vnC_zWqhobg-8",
			"https://drive.google.com/uc?export=download&id=1qZGH73eGzBngq6tzHtm9ssc3nHRG7gdP",
			"https://drive.google.com/uc?export=download&id=1rGfGZT9gu5H9ABnHN5ekXIb7600gFm9d",
			"https://drive.google.com/uc?export=download&id=1rLAG_cGzBAYE1l2OZCs8tdRtCHFpBmz9",
			"https://drive.google.com/uc?export=download&id=12Q0PJAVmHVgsRF7akn3PNRru-tepia5y",
			"https://drive.google.com/uc?export=download&id=1rULVaU0D727BpFK2Rzuw5quMrYXQuT6T",
			"https://drive.google.com/uc?export=download&id=1s3qb7YOWbuy3yRD9TPyCKVolT15MECKe",
			"https://drive.google.com/uc?export=download&id=1s3qb7YOWbuy3yRD9TPyCKVolT15MECKe",
			"https://drive.google.com/uc?export=download&id=1soaiC_lLQboDwSeIJpse6diMEpcvXQv-",
			"https://drive.google.com/uc?export=download&id=1sxPeSpyIXO-hitBSGElJBzasuSOJXVM4",
			"https://drive.google.com/uc?export=download&id=1vg49E9Hw4w56CSISINZH_ZSQRSIfCVHN",
			"https://drive.google.com/uc?export=download&id=1vmZKmjJmgsDSbtlUqIRCa1rNjKzq_B9v",
			"https://drive.google.com/uc?export=download&id=1woxnScrA2ADpZnTQeQt3tidrXDVGN6Z-",
			"https://drive.google.com/uc?export=download&id=1x164E3sV32WaeduO14BbbNSVjqm-zBW3",
			"https://drive.google.com/uc?export=download&id=1x3N_JlNIROo_2v7A4jYsIzIYd3Ez-0ep",
			"https://drive.google.com/uc?export=download&id=1yZMUmIIq8nvbannu3DUmLy7SOzgw0TMe",
			"https://drive.google.com/uc?export=download&id=1ymACbIzXyMNJIF8O_XImq9QA4fZcTNdR",
			"https://drive.google.com/uc?export=download&id=1zRAFPp3sMPOlVyhoEPnHflRpiRe6C2pt",

		];

		const availableVideos = link.filter(video => !this.sentVideos.includes(video));

		if (availableVideos.length === 0) {
			this.sentVideos = [];
		}

		const randomIndex = Math.floor(Math.random() * availableVideos.length);
		const randomVideo = availableVideos[randomIndex];

		this.sentVideos.push(randomVideo);

		if (senderID !== null) {
			message.reply({
				body: 'xolera bas aba 🤡',
				attachment: await global.utils.getStreamFromURL(randomVideo),
			});

			setTimeout(() => {
				api.unsendMessage(loadingMessage.messageID);
			}, 50000);
		}
	},
};