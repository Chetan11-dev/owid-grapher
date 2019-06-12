import * as React from 'react'
import { computed } from 'mobx'

export type LogoOption = 'owid' | 'core+owid'

const OWID_LOGO_SVG = `<svg width="210" height="120" viewBox="0 0 210 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
        <path d="M0 0H210V107.89H0V0Z" fill="#002147"/>
        <path d="M40.9788 32.248C40.9788 34.6093 40.6048 36.78 39.8568 38.76C39.1088 40.7253 38.0528 42.4193 36.6888 43.842C35.3248 45.2647 33.6821 46.372 31.7608 47.164C29.8541 47.9413 27.7421 48.33 25.4248 48.33C23.1074 48.33 20.9954 47.9413 19.0888 47.164C17.1821 46.372 15.5468 45.2647 14.1828 43.842C12.8188 42.4193 11.7628 40.7253 11.0148 38.76C10.2668 36.78 9.89277 34.6093 9.89277 32.248C9.89277 29.8867 10.2668 27.7233 11.0148 25.758C11.7628 23.778 12.8188 22.0767 14.1828 20.654C15.5468 19.2167 17.1821 18.102 19.0888 17.31C20.9954 16.518 23.1074 16.122 25.4248 16.122C27.7421 16.122 29.8541 16.518 31.7608 17.31C33.6821 18.102 35.3248 19.2167 36.6888 20.654C38.0528 22.0767 39.1088 23.778 39.8568 25.758C40.6048 27.7233 40.9788 29.8867 40.9788 32.248ZM36.6008 32.248C36.6008 30.312 36.3368 28.574 35.8088 27.034C35.2808 25.494 34.5328 24.196 33.5648 23.14C32.5968 22.0693 31.4234 21.248 30.0448 20.676C28.6661 20.104 27.1261 19.818 25.4248 19.818C23.7381 19.818 22.2054 20.104 20.8268 20.676C19.4481 21.248 18.2674 22.0693 17.2848 23.14C16.3168 24.196 15.5688 25.494 15.0408 27.034C14.5128 28.574 14.2488 30.312 14.2488 32.248C14.2488 34.184 14.5128 35.922 15.0408 37.462C15.5688 38.9873 16.3168 40.2853 17.2848 41.356C18.2674 42.412 19.4481 43.226 20.8268 43.798C22.2054 44.3553 23.7381 44.634 25.4248 44.634C27.1261 44.634 28.6661 44.3553 30.0448 43.798C31.4234 43.226 32.5968 42.412 33.5648 41.356C34.5328 40.2853 35.2808 38.9873 35.8088 37.462C36.3368 35.922 36.6008 34.184 36.6008 32.248ZM62.8234 25.714V48H60.4914C59.9341 48 59.5821 47.7287 59.4354 47.186L59.1274 44.788C58.1594 45.8587 57.0741 46.724 55.8714 47.384C54.6687 48.0293 53.2901 48.352 51.7354 48.352C50.5181 48.352 49.4401 48.154 48.5014 47.758C47.5774 47.3473 46.8001 46.7753 46.1694 46.042C45.5387 45.3087 45.0621 44.4213 44.7394 43.38C44.4314 42.3387 44.2774 41.1873 44.2774 39.926V25.714H48.1934V39.926C48.1934 41.6127 48.5747 42.918 49.3374 43.842C50.1147 44.766 51.2954 45.228 52.8794 45.228C54.0381 45.228 55.1161 44.9567 56.1134 44.414C57.1254 43.8567 58.0567 43.094 58.9074 42.126V25.714H62.8234ZM71.4305 30.18C72.1346 28.6547 72.9999 27.4667 74.0266 26.616C75.0532 25.7507 76.3072 25.318 77.7886 25.318C78.2579 25.318 78.7052 25.3693 79.1306 25.472C79.5706 25.5747 79.9592 25.736 80.2966 25.956L80.0106 28.882C79.9226 29.2487 79.7026 29.432 79.3506 29.432C79.1452 29.432 78.8446 29.388 78.4486 29.3C78.0526 29.212 77.6052 29.168 77.1066 29.168C76.4026 29.168 75.7719 29.2707 75.2146 29.476C74.6719 29.6813 74.1806 29.9893 73.7406 30.4C73.3152 30.796 72.9266 31.2947 72.5746 31.896C72.2372 32.4827 71.9292 33.1573 71.6506 33.92V48H67.7125V25.714H69.9566C70.3819 25.714 70.6752 25.7947 70.8366 25.956C70.9979 26.1173 71.1079 26.396 71.1666 26.792L71.4305 30.18ZM132.589 16.474L122.755 48H118.927L110.941 23.954C110.867 23.7193 110.794 23.47 110.721 23.206C110.662 22.942 110.596 22.6633 110.523 22.37C110.449 22.6633 110.376 22.942 110.303 23.206C110.23 23.47 110.156 23.7193 110.083 23.954L102.053 48H98.2248L88.3908 16.474H91.9328C92.3142 16.474 92.6295 16.5693 92.8788 16.76C93.1428 16.9507 93.3115 17.1927 93.3848 17.486L99.8968 39.398C99.9995 39.794 100.095 40.2193 100.183 40.674C100.285 41.1287 100.381 41.6127 100.469 42.126C100.571 41.6127 100.674 41.1287 100.777 40.674C100.894 40.2047 101.019 39.7793 101.151 39.398L108.565 17.486C108.653 17.2367 108.821 17.0093 109.071 16.804C109.335 16.584 109.65 16.474 110.017 16.474H111.249C111.63 16.474 111.938 16.5693 112.173 16.76C112.407 16.9507 112.583 17.1927 112.701 17.486L120.093 39.398C120.225 39.7793 120.342 40.19 120.445 40.63C120.562 41.07 120.672 41.532 120.775 42.016C120.848 41.532 120.929 41.07 121.017 40.63C121.105 40.19 121.2 39.7793 121.303 39.398L127.837 17.486C127.91 17.222 128.072 16.9873 128.321 16.782C128.585 16.5767 128.9 16.474 129.267 16.474H132.589ZM141.94 25.362C143.568 25.362 145.034 25.6333 146.34 26.176C147.645 26.7187 148.76 27.4887 149.684 28.486C150.608 29.4833 151.312 30.6933 151.796 32.116C152.294 33.524 152.544 35.1007 152.544 36.846C152.544 38.606 152.294 40.19 151.796 41.598C151.312 43.006 150.608 44.2087 149.684 45.206C148.76 46.2033 147.645 46.9733 146.34 47.516C145.034 48.044 143.568 48.308 141.94 48.308C140.297 48.308 138.816 48.044 137.496 47.516C136.19 46.9733 135.076 46.2033 134.152 45.206C133.228 44.2087 132.516 43.006 132.018 41.598C131.534 40.19 131.292 38.606 131.292 36.846C131.292 35.1007 131.534 33.524 132.018 32.116C132.516 30.6933 133.228 29.4833 134.152 28.486C135.076 27.4887 136.19 26.7187 137.496 26.176C138.816 25.6333 140.297 25.362 141.94 25.362ZM141.94 45.25C144.14 45.25 145.782 44.5167 146.868 43.05C147.953 41.5687 148.496 39.508 148.496 36.868C148.496 34.2133 147.953 32.1453 146.868 30.664C145.782 29.1827 144.14 28.442 141.94 28.442C140.825 28.442 139.85 28.6327 139.014 29.014C138.192 29.3953 137.503 29.9453 136.946 30.664C136.403 31.3827 135.992 32.27 135.714 33.326C135.45 34.3673 135.318 35.548 135.318 36.868C135.318 39.508 135.86 41.5687 136.946 43.05C138.046 44.5167 139.71 45.25 141.94 45.25ZM159.908 30.18C160.612 28.6547 161.478 27.4667 162.504 26.616C163.531 25.7507 164.785 25.318 166.266 25.318C166.736 25.318 167.183 25.3693 167.608 25.472C168.048 25.5747 168.437 25.736 168.774 25.956L168.488 28.882C168.4 29.2487 168.18 29.432 167.828 29.432C167.623 29.432 167.322 29.388 166.926 29.3C166.53 29.212 166.083 29.168 165.584 29.168C164.88 29.168 164.25 29.2707 163.692 29.476C163.15 29.6813 162.658 29.9893 162.218 30.4C161.793 30.796 161.404 31.2947 161.052 31.896C160.715 32.4827 160.407 33.1573 160.128 33.92V48H156.19V25.714H158.434C158.86 25.714 159.153 25.7947 159.314 25.956C159.476 26.1173 159.586 26.396 159.644 26.792L159.908 30.18ZM174.946 15.594V48H171.03V15.594H174.946ZM194.496 31.016C193.763 30.0333 192.971 29.3513 192.12 28.97C191.269 28.574 190.316 28.376 189.26 28.376C187.192 28.376 185.601 29.1167 184.486 30.598C183.371 32.0793 182.814 34.1913 182.814 36.934C182.814 38.386 182.939 39.6327 183.188 40.674C183.437 41.7007 183.804 42.5513 184.288 43.226C184.772 43.886 185.366 44.37 186.07 44.678C186.774 44.986 187.573 45.14 188.468 45.14C189.759 45.14 190.881 44.8467 191.834 44.26C192.802 43.6733 193.689 42.8447 194.496 41.774V31.016ZM198.412 15.594V48H196.08C195.523 48 195.171 47.7287 195.024 47.186L194.672 44.48C193.719 45.624 192.633 46.548 191.416 47.252C190.199 47.956 188.791 48.308 187.192 48.308C185.916 48.308 184.757 48.066 183.716 47.582C182.675 47.0833 181.787 46.3573 181.054 45.404C180.321 44.4507 179.756 43.2627 179.36 41.84C178.964 40.4173 178.766 38.782 178.766 36.934C178.766 35.2913 178.986 33.766 179.426 32.358C179.866 30.9353 180.497 29.7033 181.318 28.662C182.139 27.6207 183.144 26.8067 184.332 26.22C185.535 25.6187 186.884 25.318 188.38 25.318C189.744 25.318 190.91 25.5527 191.878 26.022C192.861 26.4767 193.733 27.1147 194.496 27.936V15.594H198.412ZM46.6139 70.714V93H42.6979V70.714H46.6139ZM47.4499 63.718C47.4499 64.0993 47.3692 64.4587 47.2079 64.796C47.0612 65.1187 46.8559 65.412 46.5919 65.676C46.3425 65.9253 46.0419 66.1233 45.6899 66.27C45.3525 66.4167 44.9932 66.49 44.6119 66.49C44.2305 66.49 43.8712 66.4167 43.5339 66.27C43.2112 66.1233 42.9252 65.9253 42.6759 65.676C42.4265 65.412 42.2285 65.1187 42.0819 64.796C41.9352 64.4587 41.8619 64.0993 41.8619 63.718C41.8619 63.3367 41.9352 62.9773 42.0819 62.64C42.2285 62.288 42.4265 61.9873 42.6759 61.738C42.9252 61.474 43.2112 61.2687 43.5339 61.122C43.8712 60.9753 44.2305 60.902 44.6119 60.902C44.9932 60.902 45.3525 60.9753 45.6899 61.122C46.0419 61.2687 46.3425 61.474 46.5919 61.738C46.8559 61.9873 47.0612 62.288 47.2079 62.64C47.3692 62.9773 47.4499 63.3367 47.4499 63.718ZM55.4242 73.948C55.9082 73.4053 56.4215 72.914 56.9642 72.474C57.5068 72.034 58.0788 71.66 58.6802 71.352C59.2962 71.0293 59.9415 70.7873 60.6162 70.626C61.3055 70.45 62.0462 70.362 62.8382 70.362C64.0555 70.362 65.1262 70.5673 66.0502 70.978C66.9888 71.374 67.7662 71.946 68.3822 72.694C69.0128 73.4273 69.4895 74.3147 69.8122 75.356C70.1348 76.3973 70.2962 77.5487 70.2962 78.81V93H66.3582V78.81C66.3582 77.1233 65.9695 75.818 65.1922 74.894C64.4295 73.9553 63.2635 73.486 61.6942 73.486C60.5355 73.486 59.4502 73.7647 58.4382 74.322C57.4408 74.8793 56.5168 75.6347 55.6662 76.588V93H51.7282V70.714H54.0822C54.6395 70.714 54.9842 70.9853 55.1162 71.528L55.4242 73.948ZM113.129 77.248C113.129 79.6093 112.755 81.758 112.007 83.694C111.259 85.63 110.203 87.2873 108.839 88.666C107.475 90.0447 105.832 91.1153 103.911 91.878C102.004 92.626 99.8925 93 97.5751 93H85.8051V61.474H97.5751C99.8925 61.474 102.004 61.8553 103.911 62.618C105.832 63.366 107.475 64.4367 108.839 65.83C110.203 67.2087 111.259 68.866 112.007 70.802C112.755 72.738 113.129 74.8867 113.129 77.248ZM108.751 77.248C108.751 75.312 108.487 73.5813 107.959 72.056C107.431 70.5307 106.683 69.24 105.715 68.184C104.747 67.128 103.574 66.3213 102.195 65.764C100.816 65.2067 99.2765 64.928 97.5751 64.928H90.0731V89.546H97.5751C99.2765 89.546 100.816 89.2673 102.195 88.71C103.574 88.1527 104.747 87.3533 105.715 86.312C106.683 85.256 107.431 83.9653 107.959 82.44C108.487 80.9147 108.751 79.184 108.751 77.248ZM128.553 82.968C126.749 83.0267 125.209 83.1733 123.933 83.408C122.672 83.628 121.638 83.9213 120.831 84.288C120.039 84.6547 119.46 85.0873 119.093 85.586C118.741 86.0847 118.565 86.642 118.565 87.258C118.565 87.8447 118.661 88.3507 118.851 88.776C119.042 89.2013 119.299 89.5533 119.621 89.832C119.959 90.096 120.347 90.294 120.787 90.426C121.242 90.5433 121.726 90.602 122.239 90.602C122.929 90.602 123.559 90.536 124.131 90.404C124.703 90.2573 125.239 90.052 125.737 89.788C126.251 89.524 126.735 89.2087 127.189 88.842C127.659 88.4753 128.113 88.0573 128.553 87.588V82.968ZM115.903 73.86C117.135 72.672 118.463 71.7847 119.885 71.198C121.308 70.6113 122.885 70.318 124.615 70.318C125.862 70.318 126.969 70.5233 127.937 70.934C128.905 71.3447 129.719 71.9167 130.379 72.65C131.039 73.3833 131.538 74.2707 131.875 75.312C132.213 76.3533 132.381 77.4973 132.381 78.744V93H130.643C130.262 93 129.969 92.9413 129.763 92.824C129.558 92.692 129.397 92.4427 129.279 92.076L128.839 89.964C128.253 90.5067 127.681 90.9907 127.123 91.416C126.566 91.8267 125.979 92.1787 125.363 92.472C124.747 92.7507 124.087 92.9633 123.383 93.11C122.694 93.2713 121.924 93.352 121.073 93.352C120.208 93.352 119.394 93.2347 118.631 93C117.869 92.7507 117.201 92.384 116.629 91.9C116.072 91.416 115.625 90.8073 115.287 90.074C114.965 89.326 114.803 88.446 114.803 87.434C114.803 86.554 115.045 85.7107 115.529 84.904C116.013 84.0827 116.798 83.3567 117.883 82.726C118.969 82.0953 120.384 81.582 122.129 81.186C123.875 80.7753 126.016 80.5407 128.553 80.482V78.744C128.553 77.0133 128.179 75.708 127.431 74.828C126.683 73.9333 125.591 73.486 124.153 73.486C123.185 73.486 122.371 73.6107 121.711 73.86C121.066 74.0947 120.501 74.366 120.017 74.674C119.548 74.9673 119.137 75.2387 118.785 75.488C118.448 75.7227 118.111 75.84 117.773 75.84C117.509 75.84 117.282 75.774 117.091 75.642C116.901 75.4953 116.739 75.3193 116.607 75.114L115.903 73.86ZM143.568 93.352C141.808 93.352 140.451 92.8607 139.498 91.878C138.559 90.8953 138.09 89.48 138.09 87.632V73.992H135.406C135.171 73.992 134.973 73.926 134.812 73.794C134.65 73.6473 134.57 73.4273 134.57 73.134V71.572L138.222 71.11L139.124 64.224C139.168 64.004 139.263 63.828 139.41 63.696C139.571 63.5493 139.776 63.476 140.026 63.476H142.006V71.154H148.452V73.992H142.006V87.368C142.006 88.3067 142.233 89.0033 142.688 89.458C143.142 89.9127 143.729 90.14 144.448 90.14C144.858 90.14 145.21 90.0887 145.504 89.986C145.812 89.8687 146.076 89.744 146.296 89.612C146.516 89.48 146.699 89.3627 146.846 89.26C147.007 89.1427 147.146 89.084 147.264 89.084C147.469 89.084 147.652 89.2087 147.814 89.458L148.958 91.328C148.283 91.9587 147.469 92.4573 146.516 92.824C145.562 93.176 144.58 93.352 143.568 93.352ZM163.253 82.968C161.449 83.0267 159.909 83.1733 158.633 83.408C157.372 83.628 156.338 83.9213 155.531 84.288C154.739 84.6547 154.16 85.0873 153.793 85.586C153.441 86.0847 153.265 86.642 153.265 87.258C153.265 87.8447 153.36 88.3507 153.551 88.776C153.742 89.2013 153.998 89.5533 154.321 89.832C154.658 90.096 155.047 90.294 155.487 90.426C155.942 90.5433 156.426 90.602 156.939 90.602C157.628 90.602 158.259 90.536 158.831 90.404C159.403 90.2573 159.938 90.052 160.437 89.788C160.95 89.524 161.434 89.2087 161.889 88.842C162.358 88.4753 162.813 88.0573 163.253 87.588V82.968ZM150.603 73.86C151.835 72.672 153.162 71.7847 154.585 71.198C156.008 70.6113 157.584 70.318 159.315 70.318C160.562 70.318 161.669 70.5233 162.637 70.934C163.605 71.3447 164.419 71.9167 165.079 72.65C165.739 73.3833 166.238 74.2707 166.575 75.312C166.912 76.3533 167.081 77.4973 167.081 78.744V93H165.343C164.962 93 164.668 92.9413 164.463 92.824C164.258 92.692 164.096 92.4427 163.979 92.076L163.539 89.964C162.952 90.5067 162.38 90.9907 161.823 91.416C161.266 91.8267 160.679 92.1787 160.063 92.472C159.447 92.7507 158.787 92.9633 158.083 93.11C157.394 93.2713 156.624 93.352 155.773 93.352C154.908 93.352 154.094 93.2347 153.331 93C152.568 92.7507 151.901 92.384 151.329 91.9C150.772 91.416 150.324 90.8073 149.987 90.074C149.664 89.326 149.503 88.446 149.503 87.434C149.503 86.554 149.745 85.7107 150.229 84.904C150.713 84.0827 151.498 83.3567 152.583 82.726C153.668 82.0953 155.084 81.582 156.829 81.186C158.574 80.7753 160.716 80.5407 163.253 80.482V78.744C163.253 77.0133 162.879 75.708 162.131 74.828C161.383 73.9333 160.29 73.486 158.853 73.486C157.885 73.486 157.071 73.6107 156.411 73.86C155.766 74.0947 155.201 74.366 154.717 74.674C154.248 74.9673 153.837 75.2387 153.485 75.488C153.148 75.7227 152.81 75.84 152.473 75.84C152.209 75.84 151.982 75.774 151.791 75.642C151.6 75.4953 151.439 75.3193 151.307 75.114L150.603 73.86Z" fill="white"/>
        <rect y="106.789" width="210" height="13.211" fill="#D42B21"/>
    </g>
    <defs>
        <clipPath id="clip0">
            <rect width="210" height="120" fill="white"/>
        </clipPath>
    </defs>
</svg>`

const CORE_LOGO_SVG = `<svg width="102" height="37" viewBox="0 0 102 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M47 0H0V37H47V0Z" fill="#EA4148"/>
    <path d="M3.78448 11.8471C3.78448 8.29581 6.4514 6.24184 9.45661 6.24184C10.5862 6.22139 11.6845 6.61681 12.547 7.35439L10.8535 9.70712C10.536 9.39217 10.1133 9.20888 9.66865 9.19339C8.31383 9.19339 7.50968 10.2205 7.50968 11.8465C7.50968 13.4724 8.39833 14.4993 9.54143 14.4993C10.1632 14.4577 10.7559 14.218 11.2346 13.8147L12.6315 16.2106C11.6462 17.0381 10.3987 17.4787 9.11799 17.4515C6.11213 17.4521 3.78448 15.3981 3.78448 11.8471Z" fill="white"/>
    <path d="M18.8533 11.8468C18.8533 10.2208 18.4299 9.1937 17.3295 9.1937C16.2291 9.1937 15.8057 10.2208 15.8057 11.8468C15.8057 13.4728 16.2288 14.4996 17.3295 14.4996C18.4302 14.4996 18.8533 13.4728 18.8533 11.8468ZM12.0805 11.8468C12.0805 8.29548 14.6205 6.24152 17.3295 6.24152C20.0385 6.24152 22.5785 8.29548 22.5785 11.8468C22.5785 15.3981 20.0388 17.4518 17.3295 17.4518C14.6202 17.4518 12.0805 15.3978 12.0805 11.8468" fill="white"/>
    <path d="M23.3444 6.49837H26.3078L26.5629 8.33833H26.6477C27.4305 6.88351 28.616 6.24183 29.653 6.24183C30.1005 6.21786 30.5479 6.2907 30.9654 6.4555L30.3726 9.62169C29.9857 9.51704 29.5878 9.45969 29.1874 9.45088C28.4254 9.45088 27.494 9.92142 26.9873 11.2477V17.1949H23.3444V6.49837Z" fill="white"/>
    <path d="M36.9755 10.5631C36.9755 9.7503 36.6369 9.02289 35.5365 9.02289C34.732 9.02289 34.0548 9.49343 33.843 10.5631H36.9755ZM30.372 11.8468C30.372 8.38121 32.8696 6.24152 35.4517 6.24152C38.5841 6.24152 40.0655 8.55202 40.0655 11.4188C40.0678 11.9359 40.0182 12.452 39.9176 12.959H33.8845C34.2231 14.2427 35.1545 14.6704 36.3397 14.6704C37.1026 14.652 37.8473 14.4306 38.4987 14.0287L39.6838 16.2109C38.5453 16.9915 37.2075 17.4225 35.8321 17.4518C32.7417 17.4518 30.3713 15.3978 30.3713 11.8468" fill="white"/>
    <path d="M10.432 23.8695C10.432 23.0567 10.0934 22.3293 8.993 22.3293C8.18853 22.3293 7.51128 22.7998 7.29956 23.8695H10.432ZM3.82849 25.1532C3.82849 21.6876 6.32609 19.5479 8.90818 19.5479C12.0406 19.5479 13.522 21.8584 13.522 24.7252C13.5243 25.2423 13.4747 25.7584 13.3741 26.2654H7.34196C7.68059 27.5491 8.61197 27.9768 9.79716 27.9768C10.5601 27.9583 11.3047 27.737 11.9561 27.3351L13.1413 29.5173C12.0027 30.2979 10.665 30.7288 9.28954 30.7582C6.19918 30.7582 3.82881 28.7042 3.82881 25.1532" fill="#1A1818"/>
    <path d="M13.9034 25.1532C13.9034 21.6019 16.5703 19.5479 19.5755 19.5479C20.7051 19.5275 21.8034 19.9229 22.6659 20.6605L20.9724 23.0132C20.6549 22.6983 20.2322 22.515 19.7875 22.4995C18.4327 22.4995 17.6286 23.5266 17.6286 25.1526C17.6286 26.7785 18.5172 27.8054 19.6603 27.8054C20.282 27.764 20.8747 27.5245 21.3534 27.1215L22.7504 29.5174C21.7651 30.3449 20.5176 30.7854 19.2369 30.7582C16.2313 30.7582 13.9034 28.7042 13.9034 25.1532" fill="#1A1818"/>
    <path d="M28.9741 25.1532C28.9741 23.5272 28.5507 22.5001 27.4503 22.5001C26.3499 22.5001 25.9265 23.5272 25.9265 25.1532C25.9265 26.7792 26.3496 27.806 27.4503 27.806C28.551 27.806 28.9741 26.7792 28.9741 25.1532ZM22.2013 25.1532C22.2013 21.6019 24.7413 19.5479 27.4503 19.5479C30.1593 19.5479 32.6993 21.6019 32.6993 25.1532C32.6993 28.7045 30.1583 30.7591 27.449 30.7591C24.7397 30.7591 22.2 28.7052 22.2 25.1542" fill="#1A1818"/>
    <path d="M33.5449 19.8048H36.5084L36.7635 21.0885H36.8483C37.6945 20.2757 38.7528 19.5483 40.1921 19.5483C42.5198 19.5483 43.4939 21.2596 43.4939 23.9124V30.5013H39.8522V24.383C39.8522 23.0139 39.5136 22.6716 38.7939 22.6716C38.1167 22.6716 37.7356 22.971 37.1856 23.4844V30.5013H33.5449V19.8048Z" fill="#1A1818"/>
    <rect width="54" height="37" transform="translate(48)" fill="white"/>
    <path d="M48 0H101.93V32.9917H48V0Z" fill="#002147"/>
    <path d="M58.4185 10.86C58.4185 11.4733 58.3189 12.0387 58.1195 12.5562C57.9202 13.0737 57.6384 13.5203 57.2743 13.896C56.9139 14.2678 56.4789 14.5592 55.969 14.77C55.463 14.9808 54.8995 15.0863 54.2785 15.0863C53.6614 15.0863 53.0979 14.9808 52.588 14.77C52.082 14.5592 51.6469 14.2678 51.2828 13.896C50.9186 13.5203 50.6369 13.0737 50.4375 12.5562C50.2382 12.0387 50.1385 11.4733 50.1385 10.86C50.1385 10.2467 50.2382 9.68125 50.4375 9.16375C50.6369 8.64625 50.9186 8.19967 51.2828 7.824C51.6469 7.44833 52.082 7.15508 52.588 6.94425C53.0979 6.73342 53.6614 6.628 54.2785 6.628C54.8995 6.628 55.463 6.73342 55.969 6.94425C56.4789 7.15508 56.9139 7.44833 57.2743 7.824C57.6384 8.19967 57.9202 8.64625 58.1195 9.16375C58.3189 9.68125 58.4185 10.2467 58.4185 10.86ZM57.0443 10.86C57.0443 10.3847 56.9791 9.95725 56.8488 9.57775C56.7223 9.19825 56.5383 8.87625 56.2968 8.61175C56.0591 8.34725 55.7697 8.14408 55.4285 8.00225C55.0874 7.86042 54.704 7.7895 54.2785 7.7895C53.8569 7.7895 53.4754 7.86042 53.1343 8.00225C52.7931 8.14408 52.5018 8.34725 52.2603 8.61175C52.0188 8.87625 51.8329 9.19825 51.7025 9.57775C51.5722 9.95725 51.507 10.3847 51.507 10.86C51.507 11.3392 51.5722 11.7685 51.7025 12.148C51.8329 12.5275 52.0188 12.8495 52.2603 13.114C52.5018 13.3747 52.7931 13.5759 53.1343 13.7177C53.4754 13.8557 53.8569 13.9247 54.2785 13.9247C54.704 13.9247 55.0874 13.8557 55.4285 13.7177C55.7697 13.5759 56.0591 13.3747 56.2968 13.114C56.5383 12.8495 56.7223 12.5275 56.8488 12.148C56.9791 11.7685 57.0443 11.3392 57.0443 10.86ZM64.1841 9.135V15H63.4366C63.2717 15 63.1663 14.9214 63.1203 14.7642L63.0283 14.218C62.9056 14.3483 62.7753 14.4672 62.6373 14.5745C62.5031 14.6818 62.3594 14.7738 62.2061 14.8505C62.0527 14.9272 61.8879 14.9866 61.7116 15.0288C61.5391 15.0709 61.3531 15.092 61.1538 15.092C60.8318 15.092 60.5481 15.0383 60.3028 14.931C60.0575 14.8237 59.8505 14.6722 59.6818 14.4767C59.517 14.2812 59.3924 14.0474 59.3081 13.7752C59.2237 13.4992 59.1816 13.1964 59.1816 12.8667V9.135H60.4178V12.8667C60.4178 13.2616 60.5079 13.5682 60.6881 13.7867C60.8721 14.0052 61.15 14.1145 61.5218 14.1145C61.794 14.1145 62.047 14.0532 62.2808 13.9305C62.5185 13.804 62.7408 13.6315 62.9478 13.413V9.135H64.1841ZM66.5076 10.2217C66.6916 9.84992 66.9139 9.55858 67.1746 9.34775C67.4353 9.13308 67.7477 9.02575 68.1119 9.02575C68.2384 9.02575 68.3572 9.04108 68.4684 9.07175C68.5795 9.09858 68.6792 9.14075 68.7674 9.19825L68.6811 10.1297C68.6658 10.1949 68.6409 10.2409 68.6064 10.2677C68.5757 10.2907 68.5335 10.3022 68.4799 10.3022C68.4224 10.3022 68.3399 10.2927 68.2326 10.2735C68.1253 10.2505 68.0122 10.239 67.8934 10.239C67.7209 10.239 67.5675 10.2639 67.4334 10.3137C67.303 10.3636 67.1842 10.4364 67.0769 10.5322C66.9734 10.6281 66.8814 10.745 66.8009 10.883C66.7204 11.021 66.6456 11.1782 66.5766 11.3545V15H65.3404V9.135H66.0591C66.1894 9.135 66.2795 9.15992 66.3294 9.20975C66.3792 9.25575 66.4137 9.33817 66.4329 9.457L66.5076 10.2217ZM82.5146 6.72L79.9386 15H78.7254L76.7819 9.0545C76.7589 8.98933 76.7359 8.91842 76.7129 8.84175C76.6937 8.76508 76.6745 8.68267 76.6554 8.5945C76.6362 8.68267 76.6151 8.76508 76.5921 8.84175C76.5729 8.91842 76.5519 8.98933 76.5289 9.0545L74.5681 15H73.3549L70.7789 6.72H71.9059C72.0209 6.72 72.1167 6.74875 72.1934 6.80625C72.2739 6.85992 72.3275 6.93467 72.3544 7.0305L73.9069 12.3377C73.9375 12.4527 73.9663 12.5773 73.9931 12.7115C74.0199 12.8457 74.0468 12.9856 74.0736 13.1312C74.1004 12.9856 74.1292 12.8457 74.1599 12.7115C74.1944 12.5735 74.2308 12.4489 74.2691 12.3377L76.0459 7.0305C76.0727 6.95383 76.1264 6.88292 76.2069 6.81775C76.2874 6.75258 76.3832 6.72 76.4944 6.72H76.8854C77.0042 6.72 77.1 6.75067 77.1729 6.812C77.2457 6.8695 77.3013 6.94233 77.3396 7.0305L79.1106 12.3377C79.1489 12.4489 79.1834 12.5697 79.2141 12.7C79.2486 12.8265 79.2793 12.9607 79.3061 13.1025C79.3329 12.9607 79.3579 12.8265 79.3809 12.7C79.4077 12.5697 79.4364 12.4489 79.4671 12.3377L81.0139 7.0305C81.0369 6.94617 81.0886 6.87333 81.1691 6.812C81.2534 6.75067 81.3512 6.72 81.4624 6.72H82.5146ZM84.9222 9.043C85.3553 9.043 85.7463 9.11392 86.0952 9.25575C86.4478 9.39758 86.7468 9.59883 86.9922 9.8595C87.2413 10.1202 87.433 10.4364 87.5672 10.8082C87.7013 11.1801 87.7684 11.5979 87.7684 12.0617C87.7684 12.5256 87.7013 12.9434 87.5672 13.3152C87.433 13.6871 87.2413 14.0052 86.9922 14.2697C86.7468 14.5304 86.4478 14.7317 86.0952 14.8735C85.7463 15.0153 85.3553 15.0863 84.9222 15.0863C84.4852 15.0863 84.0903 15.0153 83.7377 14.8735C83.3888 14.7317 83.0898 14.5304 82.8407 14.2697C82.5915 14.0052 82.3998 13.6871 82.2657 13.3152C82.1315 12.9434 82.0644 12.5256 82.0644 12.0617C82.0644 11.5979 82.1315 11.1801 82.2657 10.8082C82.3998 10.4364 82.5915 10.1202 82.8407 9.8595C83.0898 9.59883 83.3888 9.39758 83.7377 9.25575C84.0903 9.11392 84.4852 9.043 84.9222 9.043ZM84.9222 14.1202C85.4512 14.1202 85.8441 13.9439 86.1009 13.5912C86.3616 13.2347 86.4919 12.7268 86.4919 12.0675C86.4919 11.4082 86.3616 10.9002 86.1009 10.5437C85.8441 10.1834 85.4512 10.0032 84.9222 10.0032C84.3855 10.0032 83.9868 10.1834 83.7262 10.5437C83.4655 10.9002 83.3352 11.4082 83.3352 12.0675C83.3352 12.7268 83.4655 13.2347 83.7262 13.5912C83.9868 13.9439 84.3855 14.1202 84.9222 14.1202ZM89.7785 10.2217C89.9625 9.84992 90.1848 9.55858 90.4455 9.34775C90.7061 9.13308 91.0186 9.02575 91.3827 9.02575C91.5092 9.02575 91.6281 9.04108 91.7392 9.07175C91.8504 9.09858 91.9501 9.14075 92.0382 9.19825L91.952 10.1297C91.9366 10.1949 91.9117 10.2409 91.8772 10.2677C91.8466 10.2907 91.8044 10.3022 91.7507 10.3022C91.6932 10.3022 91.6108 10.2927 91.5035 10.2735C91.3961 10.2505 91.2831 10.239 91.1642 10.239C90.9917 10.239 90.8384 10.2639 90.7042 10.3137C90.5739 10.3636 90.4551 10.4364 90.3477 10.5322C90.2442 10.6281 90.1522 10.745 90.0717 10.883C89.9912 11.021 89.9165 11.1782 89.8475 11.3545V15H88.6112V9.135H89.33C89.4603 9.135 89.5504 9.15992 89.6002 9.20975C89.6501 9.25575 89.6846 9.33817 89.7037 9.457L89.7785 10.2217ZM93.7706 6.49V15H92.5343V6.49H93.7706ZM98.6948 10.5782C98.5223 10.3559 98.3325 10.2007 98.1255 10.1125C97.9185 10.0243 97.6943 9.98025 97.4528 9.98025C96.9698 9.98025 96.5922 10.1585 96.32 10.515C96.0478 10.8677 95.9118 11.3909 95.9118 12.0847C95.9118 12.4451 95.9424 12.7537 96.0038 13.0105C96.0651 13.2635 96.1533 13.4705 96.2683 13.6315C96.3833 13.7925 96.5232 13.9094 96.688 13.9822C96.8528 14.0551 97.0388 14.0915 97.2458 14.0915C97.5601 14.0915 97.8303 14.0244 98.0565 13.8902C98.2865 13.7522 98.4993 13.5587 98.6948 13.3095V10.5782ZM99.931 6.49V15H99.1835C99.0187 15 98.9133 14.9214 98.8673 14.7642L98.758 14.126C98.5127 14.4135 98.2328 14.6454 97.9185 14.8217C97.608 14.9981 97.2458 15.0863 96.8318 15.0863C96.5021 15.0863 96.2031 15.0211 95.9348 14.8907C95.6664 14.7566 95.4364 14.563 95.2448 14.31C95.0531 14.057 94.9036 13.7446 94.7963 13.3727C94.6928 12.9971 94.641 12.5677 94.641 12.0847C94.641 11.6477 94.6985 11.2433 94.8135 10.8715C94.9323 10.4997 95.101 10.1777 95.3195 9.9055C95.538 9.6295 95.8025 9.41483 96.113 9.2615C96.4273 9.10433 96.7781 9.02575 97.1653 9.02575C97.5103 9.02575 97.8035 9.08133 98.045 9.1925C98.2865 9.29983 98.5031 9.45125 98.6948 9.64675V6.49H99.931ZM60.0273 21.135V27H58.7911V21.135H60.0273ZM60.2343 19.364C60.2343 19.4752 60.2113 19.5806 60.1653 19.6802C60.1231 19.7799 60.0637 19.8681 59.9871 19.9447C59.9104 20.0176 59.8203 20.077 59.7168 20.123C59.6171 20.1652 59.5098 20.1862 59.3948 20.1862C59.2836 20.1862 59.1782 20.1652 59.0786 20.123C58.9827 20.077 58.8984 20.0176 58.8256 19.9447C58.7527 19.8681 58.6933 19.7799 58.6473 19.6802C58.6051 19.5806 58.5841 19.4752 58.5841 19.364C58.5841 19.249 58.6051 19.1417 58.6473 19.042C58.6933 18.9423 58.7527 18.8561 58.8256 18.7832C58.8984 18.7066 58.9827 18.6472 59.0786 18.605C59.1782 18.559 59.2836 18.536 59.3948 18.536C59.5098 18.536 59.6171 18.559 59.7168 18.605C59.8203 18.6472 59.9104 18.7066 59.9871 18.7832C60.0637 18.8561 60.1231 18.9423 60.1653 19.042C60.2113 19.1417 60.2343 19.249 60.2343 19.364ZM62.3914 21.9112C62.5179 21.7809 62.6482 21.664 62.7824 21.5605C62.9204 21.4532 63.066 21.3612 63.2194 21.2845C63.3727 21.2078 63.5356 21.1484 63.7081 21.1062C63.8806 21.0641 64.0684 21.043 64.2716 21.043C64.5936 21.043 64.8754 21.0967 65.1169 21.204C65.3622 21.3113 65.5673 21.4627 65.7321 21.6582C65.9008 21.8537 66.0273 22.0895 66.1116 22.3655C66.1959 22.6377 66.2381 22.9386 66.2381 23.2682V27H65.0076V23.2682C65.0076 22.8734 64.9156 22.5667 64.7316 22.3482C64.5514 22.1297 64.2754 22.0205 63.9036 22.0205C63.6276 22.0205 63.3708 22.0837 63.1331 22.2102C62.8993 22.3367 62.6789 22.5092 62.4719 22.7277V27H61.2356V21.135H61.9831C62.1518 21.135 62.2591 21.2136 62.3051 21.3707L62.3914 21.9112ZM77.3537 22.86C77.3537 23.4733 77.254 24.0349 77.0547 24.5447C76.8553 25.0507 76.5736 25.4858 76.2094 25.85C75.8491 26.2142 75.414 26.4978 74.9042 26.701C74.3982 26.9003 73.8347 27 73.2137 27H70.0857V18.72H73.2137C73.8347 18.72 74.3982 18.8216 74.9042 19.0247C75.414 19.2241 75.8491 19.5058 76.2094 19.87C76.5736 20.2342 76.8553 20.6712 77.0547 21.181C77.254 21.687 77.3537 22.2467 77.3537 22.86ZM75.9794 22.86C75.9794 22.3847 75.9143 21.9572 75.7839 21.5777C75.6574 21.1982 75.4734 20.8782 75.2319 20.6175C74.9943 20.3568 74.7048 20.1575 74.3637 20.0195C74.0225 19.8777 73.6392 19.8067 73.2137 19.8067H71.4369V25.9132H73.2137C73.6392 25.9132 74.0225 25.8442 74.3637 25.7062C74.7048 25.5682 74.9943 25.3689 75.2319 25.1082C75.4734 24.8437 75.6574 24.5237 75.7839 24.148C75.9143 23.7685 75.9794 23.3392 75.9794 22.86ZM81.247 24.4355C80.8061 24.4508 80.4343 24.4872 80.1315 24.5447C79.8286 24.5984 79.5833 24.6693 79.3955 24.7575C79.2076 24.8418 79.0715 24.9434 78.9872 25.0622C78.9067 25.1811 78.8665 25.3114 78.8665 25.4532C78.8665 25.5912 78.8875 25.7101 78.9297 25.8097C78.9757 25.9056 79.037 25.9861 79.1137 26.0512C79.1942 26.1126 79.2862 26.1586 79.3897 26.1892C79.497 26.2161 79.614 26.2295 79.7405 26.2295C80.0625 26.2295 80.3385 26.1701 80.5685 26.0512C80.8023 25.9286 81.0285 25.7522 81.247 25.5223V24.4355ZM77.9695 21.9515C78.6326 21.3343 79.4223 21.0257 80.3385 21.0257C80.6758 21.0257 80.9748 21.0813 81.2355 21.1925C81.5 21.2998 81.7204 21.4532 81.8967 21.6525C82.0769 21.8518 82.213 22.0895 82.305 22.3655C82.4008 22.6377 82.4487 22.9405 82.4487 23.274V27H81.8967C81.7779 27 81.6878 26.9827 81.6265 26.9482C81.5651 26.9099 81.5134 26.8352 81.4712 26.724L81.3505 26.2467C81.201 26.3809 81.0534 26.5017 80.9077 26.609C80.762 26.7125 80.6106 26.8007 80.4535 26.8735C80.3001 26.9463 80.1334 27 79.9532 27.0345C79.7769 27.0728 79.5814 27.092 79.3667 27.092C79.129 27.092 78.9067 27.0594 78.6997 26.9942C78.4965 26.9291 78.3202 26.8313 78.1707 26.701C78.0212 26.5668 77.9024 26.402 77.8142 26.2065C77.7299 26.011 77.6877 25.781 77.6877 25.5165C77.6877 25.2903 77.7471 25.0699 77.866 24.8552C77.9886 24.6406 78.188 24.4489 78.464 24.2802C78.7438 24.1077 79.1099 23.9659 79.5622 23.8547C80.0184 23.7436 80.58 23.6803 81.247 23.665V23.274C81.247 22.8523 81.1569 22.538 80.9767 22.331C80.7965 22.124 80.532 22.0205 80.1832 22.0205C79.9455 22.0205 79.7462 22.0512 79.5852 22.1125C79.4242 22.17 79.2843 22.2332 79.1655 22.3022C79.0466 22.3712 78.9412 22.4364 78.8492 22.4977C78.7572 22.5552 78.6595 22.584 78.556 22.584C78.4716 22.584 78.3988 22.5629 78.3375 22.5207C78.28 22.4747 78.232 22.4192 78.1937 22.354L77.9695 21.9515ZM85.3535 27.092C84.8667 27.092 84.491 26.9559 84.2265 26.6837C83.9659 26.4077 83.8355 26.0206 83.8355 25.5223V22.1067H83.1915C83.1225 22.1067 83.0631 22.0857 83.0133 22.0435C82.9635 21.9975 82.9385 21.9304 82.9385 21.8422V21.342L83.8873 21.204L84.1575 19.5077C84.1767 19.4426 84.2093 19.3908 84.2553 19.3525C84.3013 19.3103 84.3626 19.2892 84.4393 19.2892H85.0718V21.2155H86.699V22.1067H85.0718V25.436C85.0718 25.6468 85.1235 25.8078 85.227 25.919C85.3305 26.0302 85.4685 26.0857 85.641 26.0857C85.7369 26.0857 85.8193 26.0742 85.8883 26.0512C85.9573 26.0244 86.0167 25.9976 86.0665 25.9707C86.1164 25.9401 86.1585 25.9132 86.193 25.8902C86.2314 25.8634 86.2678 25.85 86.3023 25.85C86.3713 25.85 86.4269 25.8883 86.469 25.965L86.837 26.5687C86.6454 26.7374 86.4192 26.8677 86.1585 26.9597C85.8979 27.0479 85.6295 27.092 85.3535 27.092ZM90.4622 24.4355C90.0214 24.4508 89.6496 24.4872 89.3467 24.5447C89.0439 24.5984 88.7986 24.6693 88.6107 24.7575C88.4229 24.8418 88.2868 24.9434 88.2025 25.0622C88.122 25.1811 88.0817 25.3114 88.0817 25.4532C88.0817 25.5912 88.1028 25.7101 88.145 25.8097C88.191 25.9056 88.2523 25.9861 88.329 26.0512C88.4095 26.1126 88.5015 26.1586 88.605 26.1892C88.7123 26.2161 88.8292 26.2295 88.9557 26.2295C89.2777 26.2295 89.5537 26.1701 89.7837 26.0512C90.0176 25.9286 90.2437 25.7522 90.4622 25.5223V24.4355ZM87.1847 21.9515C87.8479 21.3343 88.6376 21.0257 89.5537 21.0257C89.8911 21.0257 90.1901 21.0813 90.4507 21.1925C90.7152 21.2998 90.9357 21.4532 91.112 21.6525C91.2922 21.8518 91.4282 22.0895 91.5202 22.3655C91.6161 22.6377 91.664 22.9405 91.664 23.274V27H91.112C90.9932 27 90.9031 26.9827 90.8417 26.9482C90.7804 26.9099 90.7287 26.8352 90.6865 26.724L90.5657 26.2467C90.4162 26.3809 90.2687 26.5017 90.123 26.609C89.9773 26.7125 89.8259 26.8007 89.6687 26.8735C89.5154 26.9463 89.3487 27 89.1685 27.0345C88.9922 27.0728 88.7967 27.092 88.582 27.092C88.3443 27.092 88.122 27.0594 87.915 26.9942C87.7118 26.9291 87.5355 26.8313 87.386 26.701C87.2365 26.5668 87.1177 26.402 87.0295 26.2065C86.9452 26.011 86.903 25.781 86.903 25.5165C86.903 25.2903 86.9624 25.0699 87.0812 24.8552C87.2039 24.6406 87.4032 24.4489 87.6792 24.2802C87.9591 24.1077 88.3252 23.9659 88.7775 23.8547C89.2337 23.7436 89.7952 23.6803 90.4622 23.665V23.274C90.4622 22.8523 90.3722 22.538 90.192 22.331C90.0118 22.124 89.7473 22.0205 89.3985 22.0205C89.1608 22.0205 88.9615 22.0512 88.8005 22.1125C88.6395 22.17 88.4996 22.2332 88.3807 22.3022C88.2619 22.3712 88.1565 22.4364 88.0645 22.4977C87.9725 22.5552 87.8747 22.584 87.7712 22.584C87.6869 22.584 87.6141 22.5629 87.5527 22.5207C87.4952 22.4747 87.4473 22.4192 87.409 22.354L87.1847 21.9515Z" fill="white"/>
    <rect x="48" y="32.647" width="54" height="4.35294" fill="#D42B21"/>
</svg>`

const logos = {
    "owid": {
        svg: OWID_LOGO_SVG,
        width: 210,
        height: 120,
        url: "https://ourworldindata.org"
    },
    "core+owid": {
        svg: CORE_LOGO_SVG,
        width: 102,
        height: 37,
        url: null
    }
}

interface LogoProps {
    logo: LogoOption
    isLink: boolean
    fontSize: number
}

export class Logo {
    props: LogoProps
    constructor(props: LogoProps) {
        this.props = props
    }

    @computed get targetHeight() {
        // this is also hardcoded in CSS when the header is HTML, change it
        // there too if you change this
        return 35
    }

    @computed get spec() {
        return logos[this.props.logo] || logos.owid
    }

    @computed get scale(): number {
        return this.targetHeight / this.spec.height
    }

    @computed get width() { return this.spec.width * this.scale }
    @computed get height() { return this.spec.height * this.scale }

    renderSVG(targetX: number, targetY: number) {
        const { scale } = this
        const svg = (this.spec.svg.match(/<svg>(.*)<\/svg>/) || "")[1] || this.spec.svg
        return <g transform={`translate(${Math.round(targetX)}, ${targetY}) scale(${parseFloat(scale.toFixed(2))})`} dangerouslySetInnerHTML={{ __html: svg }} />
    }

    renderHTML() {
        if (this.props.isLink || !this.spec.url) {
            return <div className="logo" dangerouslySetInnerHTML={{ __html: this.spec.svg }}/>
        } else {
            return <a href={this.spec.url} target="_blank" className="logo" dangerouslySetInnerHTML={{ __html: this.spec.svg }}/>
        }
    }
}