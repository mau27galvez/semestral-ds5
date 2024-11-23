import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

window.onload = function() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    header.innerHTML = `
        <nav class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="w-auto h-8"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
                </a>
            </div>
            <div class="flex gap-x-4 lg:gap-x-12">
                <a href="./index" class="font-semibold text-gray-900 text-sm/6">Home</a>
                <a href="./groups" class="font-semibold text-gray-900 text-sm/6">Groups</a>
                <a href="./idols" class="font-semibold text-gray-900 text-sm/6">Idols</a>
                <a href="./about-us" class="font-semibold text-gray-900 text-sm/6">About us</a>
                <a href="https://www.google.com" target="_blank" style="cursor: pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </a>
            </div>
            <div class="lg:flex lg:flex-1 lg:justify-end">
                <a href="./login" class="font-semibold text-gray-900 text-sm/6">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
                `;
    footer.innerHTML = `
        <div class="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
            <nav class="flex flex-wrap justify-center -mb-6 gap-x-12 gap-y-3 text-sm/6 pb-8" aria-label="Footer">
                <a href="./index" class="text-gray-600 hover:text-gray-900">Home</a>
                <a href="./groups" class="text-gray-600 hover:text-gray-900">Groups</a>
                <a href="./idols" class="text-gray-600 hover:text-gray-900">Idols</a>
                <a href="./about-us" class="text-gray-600 hover:text-gray-900">About us</a>
            </nav>
            <p class="mt-10 text-center text-gray-600 text-sm/6">&copy; 2024 La Tumba Panamá, Inc. All rights reserved.</p>
        </div>
                `;
}
