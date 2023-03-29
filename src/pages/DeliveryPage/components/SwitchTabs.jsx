import React from "react";

export const SwitchTabs = () => {
	return (
		<React.Fragment>
			<h2>Выберите способ получения товара</h2>

			<div className="tabs-block__tabs">
				<div className="tab active" data-tab="pickup" tabIndex="0">
					<span>Самовывоз</span>
					<svg
						width="288"
						height="78"
						viewBox="0 0 288 78"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M197 78C198.105 78 199 77.1046 199 76V2.00001C199 0.895442 198.105 1.04033e-05 197 1.04033e-05L148 6.03217e-06L128 4.28372e-06L112 2.88495e-06L104 2.18557e-06L96 1.48619e-06L88 7.86805e-07L79 0C77.8954 -9.65638e-08 77 0.895431 77 2V19.8122C76.1905 20.3132 75.3825 20.8085 74.5778 21.3017L74.5763 21.3026L74.5761 21.3027C72.6233 22.4996 70.6904 23.6842 68.8053 24.9098C63.991 28.0398 59.5851 31.3836 56.4821 35.6835H51V32C51 31.4477 50.5523 31 50 31H40C39.4477 31 39 31.4477 39 32V66H17C16.4477 66 16 66.4477 16 67C16 67.5523 16.4477 68 17 68H39V69C39 69.5523 39.4477 70 40 70H50C50.5523 70 51 69.5523 51 69V65.6834H59.536C62.0109 68.5672 64.4279 70.3324 67.074 71.365C69.8109 72.4331 72.7097 72.6834 76 72.6834H77V76C77 77.1046 77.8954 78 79 78H138L197 78ZM79 72.6834V76H137V20.3333L135.268 18.0235L133.928 21.3714C133.782 21.737 133.435 21.9828 133.042 21.9991C132.648 22.0155 132.282 21.7994 132.106 21.4472L130.726 18.6882L128.707 20.7071C128.421 20.9931 127.991 21.0787 127.617 20.9239C127.244 20.7691 127 20.4045 127 20V2L112 2L106.414 2L112.707 8.2929C113.098 8.68342 113.098 9.31658 112.707 9.70711C112.317 10.0976 111.683 10.0976 111.293 9.70711L103.586 2L98.4142 2L104.707 8.29289C105.098 8.68342 105.098 9.31658 104.707 9.70711C104.317 10.0976 103.683 10.0976 103.293 9.70711L95.5858 2L90.4142 2L96.7071 8.29289C97.0976 8.68342 97.0976 9.31658 96.7071 9.70711C96.3166 10.0976 95.6834 10.0976 95.2929 9.70711L87.5858 2L79 2V18.5615C80.8146 17.4128 82.6282 16.2197 84.4187 14.9408C88.0419 12.3527 91.275 12.8608 92.9262 14.5118C95.2619 16.8476 95.3274 20.6067 92.9246 22.9987C91.9244 23.9945 89.5771 26.3418 87.4787 28.4413C86.6626 29.2578 85.8844 30.0366 85.2382 30.6835H92C92.5523 30.6835 93 31.1312 93 31.6835C93 32.2357 92.5523 32.6835 92 32.6835H82.8257C82.4213 32.6835 82.0568 32.4399 81.9019 32.0664C81.7471 31.6929 81.8324 31.2629 82.1181 30.9768L82.1195 30.9754L83.3043 29.7893C84.0285 29.0644 85.015 28.0771 86.0641 27.0275C88.1617 24.9287 90.5111 22.5793 91.5136 21.5813C93.1162 19.9858 93.0816 17.4956 91.512 15.9261C90.7253 15.1394 88.6261 14.3933 85.5813 16.5682C82.2909 18.9185 78.8381 21.0361 75.5163 23.0734C73.5787 24.2617 71.6856 25.4227 69.8954 26.5866C64.9694 29.7892 60.7071 33.0776 57.8227 37.2519C57.636 37.5222 57.3285 37.6835 57 37.6835H51V63.6834H60C60.2968 63.6834 60.5782 63.8153 60.7682 64.0433C63.1867 66.9454 65.4305 68.5768 67.801 69.5019C70.1891 70.4338 72.7903 70.6834 76 70.6834H108C110.209 70.6834 112 68.8926 112 66.6834C112 64.4742 110.209 62.6834 108 62.6834H93C92.4477 62.6834 92 62.2357 92 61.6834C92 61.1312 92.4477 60.6834 93 60.6834H116C118.209 60.6834 120 58.8926 120 56.6834C120 54.4742 118.209 52.6834 116 52.6834H95C94.4477 52.6834 94 52.2357 94 51.6834C94 51.1312 94.4477 50.6834 95 50.6834H121C123.209 50.6834 125 48.8926 125 46.6834C125 44.4743 123.209 42.6835 121 42.6835H96C95.4477 42.6835 95 42.2357 95 41.6835C95 41.1312 95.4477 40.6835 96 40.6835H118C120.209 40.6835 122 38.8926 122 36.6835C122 34.4743 120.209 32.6835 118 32.6835H98C97.4477 32.6835 97 32.2357 97 31.6835C97 31.1312 97.4477 30.6835 98 30.6835H118C121.314 30.6835 124 33.3697 124 36.6835C124 38.2932 123.366 39.7548 122.334 40.8324C125.006 41.439 127 43.8283 127 46.6834C127 49.9972 124.314 52.6834 121 52.6834H120.472C121.422 53.7449 122 55.1467 122 56.6834C122 59.9972 119.314 62.6834 116 62.6834H112.472C113.422 63.7449 114 65.1467 114 66.6834C114 69.9972 111.314 72.6834 108 72.6834H79ZM129 17.5858V2L147 2.00001V17.5858L145.707 16.2929C145.495 16.0811 145.2 15.9754 144.901 16.0049C144.603 16.0344 144.334 16.196 144.168 16.4453L142.845 18.4304L141.707 17.2929C141.37 16.9558 140.842 16.9035 140.445 17.168L138.232 18.6432L135.8 15.4C135.583 15.1109 135.227 14.9613 134.869 15.0086C134.511 15.056 134.206 15.2931 134.072 15.6286L132.899 18.561L131.894 16.5528C131.751 16.2653 131.477 16.0644 131.16 16.0129C130.843 15.9614 130.52 16.0656 130.293 16.2929L129 17.5858ZM149 20V2.00001L197 2.00001V76L139 76V20.5352L140.873 19.2868L142.293 20.7071C142.505 20.919 142.8 21.0247 143.099 20.9951C143.397 20.9656 143.666 20.804 143.832 20.5547L145.155 18.5696L147.293 20.7071C147.579 20.9931 148.009 21.0787 148.383 20.9239C148.756 20.7691 149 20.4045 149 20ZM41 68H49V33H41V68ZM0 34C0 33.4477 0.447715 33 1 33H5C5.55228 33 6 33.4477 6 34C6 34.5523 5.55228 35 5 35H1C0.447715 35 0 34.5523 0 34ZM10 34C10 33.4477 10.4477 33 11 33H33C33.5523 33 34 33.4477 34 34C34 34.5523 33.5523 35 33 35H11C10.4477 35 10 34.5523 10 34ZM2 67C2 66.4477 2.44772 66 3 66H8C8.55228 66 9 66.4477 9 67C9 67.5523 8.55228 68 8 68H3C2.44772 68 2 67.5523 2 67ZM255.136 14.9406C251.711 12.4939 248.294 12.8463 246.629 14.5117C244.283 16.8578 244.318 20.6963 246.63 22.9985C247.591 23.9546 249.938 26.3019 252.046 28.4114L254.317 30.6833H221.555C218.241 30.6833 215.555 33.3695 215.555 36.6833C215.555 38.293 216.189 39.7546 217.221 40.8322C214.549 41.4389 212.555 43.8281 212.555 46.6833C212.555 49.997 215.241 52.6833 218.555 52.6833H219.083C218.133 53.7448 217.555 55.1465 217.555 56.6833C217.555 59.997 220.241 62.6833 223.555 62.6833H227.083C226.133 63.7448 225.555 65.1465 225.555 66.6833C225.555 69.997 228.241 72.6833 231.555 72.6833H238C238.552 72.6833 239 72.2355 239 71.6833C239 71.131 238.552 70.6833 238 70.6833H231.555C229.346 70.6833 227.555 68.8925 227.555 66.6833C227.555 64.4741 229.346 62.6833 231.555 62.6833H246.555C247.107 62.6833 247.555 62.2356 247.555 61.6833C247.555 61.131 247.107 60.6833 246.555 60.6833H223.555C221.346 60.6833 219.555 58.8925 219.555 56.6833C219.555 54.4741 221.346 52.6833 223.555 52.6833H244.555C245.107 52.6833 245.555 52.2356 245.555 51.6833C245.555 51.131 245.107 50.6833 244.555 50.6833H218.555C216.346 50.6833 214.555 48.8925 214.555 46.6833C214.555 44.4741 216.346 42.6833 218.555 42.6833H243.555C244.107 42.6833 244.555 42.2356 244.555 41.6833C244.555 41.131 244.107 40.6833 243.555 40.6833H221.555C219.346 40.6833 217.555 38.8925 217.555 36.6833C217.555 34.4741 219.346 32.6833 221.555 32.6833H256.729C257.133 32.6833 257.498 32.4398 257.653 32.0662C257.808 31.6927 257.722 31.2626 257.437 30.9765L256.239 29.778C255.509 29.0469 254.515 28.0521 253.461 26.9975C251.353 24.8888 249.004 22.5394 248.041 21.5812C246.508 20.0547 246.484 17.485 248.043 15.9259C248.815 15.1535 251.087 14.5061 253.974 16.568C257.275 18.9264 260.791 21.0688 264.175 23.1313L264.175 23.1314L264.18 23.1342L264.185 23.1375L264.189 23.1398C266.141 24.3299 268.05 25.4934 269.849 26.6566C274.844 29.8863 279.088 33.166 281.715 37.2265C281.9 37.5113 282.216 37.6833 282.555 37.6833H287C287.552 37.6833 288 37.2356 288 36.6833C288 36.131 287.552 35.6833 287 35.6833H283.091C280.206 31.461 275.792 28.1174 270.935 24.9771C269.036 23.749 267.081 22.5583 265.108 21.3565L265.107 21.356C261.776 19.3276 258.393 17.2672 255.136 14.9406ZM286 64.6833C286 64.131 285.552 63.6833 285 63.6833H279.555C279.258 63.6833 278.977 63.8151 278.787 64.0431C276.383 66.9278 274.008 68.5642 271.493 69.4955C268.957 70.4341 266.209 70.6833 263 70.6833C262.448 70.6833 262 71.131 262 71.6833C262 72.2355 262.448 72.6833 263 72.6833C266.291 72.6833 269.32 72.4324 272.187 71.3711C274.961 70.3441 277.519 68.5833 280.018 65.6833H285C285.552 65.6833 286 65.2355 286 64.6833ZM258 71.6833C258 71.131 257.552 70.6833 257 70.6833H244C243.448 70.6833 243 71.131 243 71.6833C243 72.2355 243.448 72.6833 244 72.6833H257C257.552 72.6833 258 72.2355 258 71.6833ZM191 68C191 69.1046 190.105 70 189 70H164C162.895 70 162 69.1046 162 68V57C162 55.8954 162.895 55 164 55H189C190.105 55 191 55.8954 191 57V68ZM164 68H189V57H164V68ZM173.707 14.7071C174.098 15.0976 174.098 15.7308 173.707 16.1213C173.317 16.5119 172.683 16.5119 172.293 16.1213L169 12.8284V23.4142C169 23.9665 168.552 24.4142 168 24.4142C167.448 24.4142 167 23.9665 167 23.4142V12.8284L163.707 16.1213C163.317 16.5119 162.683 16.5119 162.293 16.1213C161.902 15.7308 161.902 15.0976 162.293 14.7071L168 9.00001L173.707 14.7071ZM189.707 14.7071C190.098 15.0976 190.098 15.7308 189.707 16.1213C189.317 16.5119 188.683 16.5119 188.293 16.1213L185 12.8284V23.4142C185 23.9665 184.552 24.4142 184 24.4142C183.448 24.4142 183 23.9665 183 23.4142V12.8284L179.707 16.1213C179.317 16.5119 178.683 16.5119 178.293 16.1213C177.902 15.7308 177.902 15.0976 178.293 14.7071L184 9.00001L189.707 14.7071ZM163 30.4142H189C189.552 30.4142 190 29.9665 190 29.4142C190 28.8619 189.552 28.4142 189 28.4142H163C162.448 28.4142 162 28.8619 162 29.4142C162 29.9665 162.448 30.4142 163 30.4142Z"
						/>
					</svg>
				</div>
				<div className="tab" data-tab="delivery" tabIndex="1">
					<span>Доставка курьером</span>
					<svg
						width="288"
						height="78"
						viewBox="0 0 288 78"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M48 48H84.0799L87.7465 4L87.9132 2H85.9063H15C14.4477 2 14 1.55228 14 1C14 0.447715 14.4477 0 15 0H87.9132C89.0833 0 90.0035 1.00006 89.9063 2.16609L86.073 48.1661C85.9866 49.2027 85.12 50 84.0799 50H48H4C3.44772 50 3 49.5523 3 49C3 48.4477 3.44772 48 4 48H48ZM61.4166 54H89.7692L93.913 10.9043C93.9624 10.3914 94.3932 10 94.9085 10H121.307C121.724 10 122.097 10.2586 122.243 10.6489L130.923 33.7955C130.974 33.9302 130.995 34.0743 130.984 34.2179L129.714 52L129.571 54H131.577H138.867C139.469 54 139.934 54.5272 139.859 55.124L139.109 61.124C139.047 61.6245 138.622 62 138.117 62H128.069H127.496C125.72 55.0991 119.455 50 112 50C104.545 50 98.2802 55.0991 96.5041 62H90.1008H63.4959C62.9235 59.7761 61.885 57.7393 60.4907 56C59.9133 55.2797 59.2749 54.6104 58.5833 54H61.4166ZM137.234 60H128.975C126.504 53.0098 119.839 48 112 48C104.161 48 97.4959 53.0098 95.0248 60H90.1008H64.9752C64.4716 58.5753 63.7942 57.2335 62.9686 56H89.7692H91.5862L91.7601 54.1914L95.8169 12H120.614L128.974 34.2932L127.577 53.8575L127.423 56H129.571H137.734L137.234 60ZM102.411 16C100.862 16 99.5683 17.1784 99.4237 18.72L101.415 18.9067L99.4237 18.72L98.1112 32.72C97.9463 34.4797 99.3307 36 101.098 36H120.54C122.649 36 124.099 33.8821 123.337 31.916L117.912 17.916C117.465 16.7611 116.354 16 115.115 16H102.411ZM101.415 18.9067C101.463 18.3928 101.895 18 102.411 18H115.115C115.528 18 115.898 18.2537 116.047 18.6387L121.472 32.6387C121.726 33.294 121.243 34 120.54 34H101.098C100.509 34 100.048 33.4932 100.103 32.9067L101.415 18.9067ZM17.2656 60L17.7656 56H33.0314C32.2058 57.2335 31.5284 58.5753 31.0248 60H17.2656ZM16.8828 54H34.5834H37.4167C36.7251 54.6104 36.0867 55.2797 35.5093 56C34.115 57.7393 33.0765 59.7761 32.5041 62H16.1328C15.5313 62 15.0659 61.4728 15.1405 60.876L15.8905 54.876C15.9531 54.3755 16.3785 54 16.8828 54ZM5 0C4.44772 0 4 0.447715 4 1C4 1.55228 4.44772 2 5 2H9C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0H5ZM20 6C19.4477 6 19 6.44772 19 7C19 7.55228 19.4477 8 20 8H26C26.5523 8 27 7.55228 27 7C27 6.44772 26.5523 6 26 6H20ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H24C24.5523 14 25 13.5523 25 13C25 12.4477 24.5523 12 24 12H1ZM7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44772 20 7 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H7ZM14 24C13.4477 24 13 24.4477 13 25C13 25.5523 13.4477 26 14 26H24C24.5523 26 25 25.5523 25 25C25 24.4477 24.5523 24 24 24H14ZM2 30C1.44772 30 1 30.4477 1 31C1 31.5523 1.44772 32 2 32H13C13.5523 32 14 31.5523 14 31C14 30.4477 13.5523 30 13 30H2ZM5 36C4.44772 36 4 36.4477 4 37C4 37.5523 4.44772 38 5 38H19C19.5523 38 20 37.5523 20 37C20 36.4477 19.5523 36 19 36H5ZM10 42C9.44771 42 9 42.4477 9 43C9 43.5523 9.44771 44 10 44H24C24.5523 44 25 43.5523 25 43C25 42.4477 24.5523 42 24 42H10ZM48 76C53.5229 76 58 71.5229 58 66C58 60.4772 53.5229 56 48 56C42.4772 56 38 60.4772 38 66C38 71.5229 42.4772 76 48 76ZM48 78C54.6274 78 60 72.6274 60 66C60 59.3726 54.6274 54 48 54C41.3726 54 36 59.3726 36 66C36 72.6274 41.3726 78 48 78ZM112 76C117.523 76 122 71.5229 122 66C122 60.4772 117.523 56 112 56C106.477 56 102 60.4772 102 66C102 71.5229 106.477 76 112 76ZM112 78C118.627 78 124 72.6274 124 66C124 59.3726 118.627 54 112 54C105.373 54 100 59.3726 100 66C100 72.6274 105.373 78 112 78ZM52 66C52 68.2091 50.2091 70 48 70C45.7909 70 44 68.2091 44 66C44 63.7909 45.7909 62 48 62C50.2091 62 52 63.7909 52 66ZM54 66C54 69.3137 51.3137 72 48 72C44.6863 72 42 69.3137 42 66C42 62.6863 44.6863 60 48 60C51.3137 60 54 62.6863 54 66ZM112 70C114.209 70 116 68.2091 116 66C116 63.7909 114.209 62 112 62C109.791 62 108 63.7909 108 66C108 68.2091 109.791 70 112 70ZM112 72C115.314 72 118 69.3137 118 66C118 62.6863 115.314 60 112 60C108.686 60 106 62.6863 106 66C106 69.3137 108.686 72 112 72ZM191 1C191 0.447715 191.448 0 192 0H287C287.552 0 288 0.447715 288 1C288 1.55228 287.552 2 287 2H193V57C193 57.5523 192.552 58 192 58H173C172.448 58 172 57.5523 172 57V53C172 52.4477 172.448 52 173 52C173.552 52 174 52.4477 174 53V56H191V1ZM166 36.4172V56H156C155.448 56 155 56.4477 155 57C155 57.5523 155.448 58 156 58H167C167.552 58 168 57.5523 168 57V36.8569C168.655 36.9513 169.323 37 170 37C170.677 37 171.345 36.9513 172 36.8569V47C172 47.5523 172.448 48 173 48C173.552 48 174 47.5523 174 47V36.4172C180.901 34.3635 186 27.1203 186 18.5C186 8.28273 178.837 0 170 0C161.163 0 154 8.28273 154 18.5C154 27.1203 159.099 34.3635 166 36.4172ZM267 57C267 56.4477 267.448 56 268 56H280C280.552 56 281 56.4477 281 57C281 57.5523 280.552 58 280 58H268C267.448 58 267 57.5523 267 57ZM69 77C69 76.4477 69.4477 76 70 76H91C91.5523 76 92 76.4477 92 77C92 77.5523 91.5523 78 91 78H70C69.4477 78 69 77.5523 69 77ZM135 77C135 76.4477 135.448 76 136 76H226C226.552 76 227 76.4477 227 77C227 77.5523 226.552 78 226 78H136C135.448 78 135 77.5523 135 77ZM231 77C231 76.4477 231.448 76 232 76H272C272.552 76 273 76.4477 273 77C273 77.5523 272.552 78 272 78H232C231.448 78 231 77.5523 231 77ZM184 18.5C184 27.8951 177.469 35 170 35C162.531 35 156 27.8951 156 18.5C156 9.10488 162.531 2 170 2C177.469 2 184 9.10488 184 18.5ZM201 10H202H218H219V11V27V28H218H215C214.448 28 214 27.5523 214 27C214 26.4477 214.448 26 215 26H217V12H203V26H209C209.552 26 210 26.4477 210 27C210 27.5523 209.552 28 209 28H202H201V27V11V10ZM202 36H201V37V53V54H202H218H219V53V45C219 44.4477 218.552 44 218 44C217.448 44 217 44.4477 217 45V52H203V38H218C218.552 38 219 37.5523 219 37C219 36.4477 218.552 36 218 36H202ZM227 11C227 10.4477 227.448 10 228 10H244H245V11V27V28H244H228H227V27V17C227 16.4477 227.448 16 228 16C228.552 16 229 16.4477 229 17V26H243V12H228C227.448 12 227 11.5523 227 11ZM228 36H227V37V53V54H228H231C231.552 54 232 53.5523 232 53C232 52.4477 231.552 52 231 52H229V38H233C233.552 38 234 37.5523 234 37C234 36.4477 233.552 36 233 36H228ZM245 42C245 41.4477 244.552 41 244 41C243.448 41 243 41.4477 243 42V52H237C236.448 52 236 52.4477 236 53C236 53.5523 236.448 54 237 54H244H245V53V42ZM253 36H254H263C263.552 36 264 36.4477 264 37C264 37.5523 263.552 38 263 38H255V41C255 41.5523 254.552 42 254 42C253.448 42 253 41.5523 253 41V37V36ZM254 10H253V11V27V28H254H266C266.552 28 267 27.5523 267 27C267 26.4477 266.552 26 266 26H255V12H270C270.552 12 271 11.5523 271 11C271 10.4477 270.552 10 270 10H254Z"
						/>
					</svg>
				</div>
			</div>
		</React.Fragment>
	);
};
