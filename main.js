import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

window.onload = function() {
    const header = document.getElementById("header");
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
                <a href="./index.html" class="font-semibold text-gray-900 text-sm/6">Home</a>
                <a href="./groups.html" class="font-semibold text-gray-900 text-sm/6">Groups</a>
                <a href="#" class="font-semibold text-gray-900 text-sm/6">About us</a>
            </div>
            <div class="lg:flex lg:flex-1 lg:justify-end">
                <a href="#" class="font-semibold text-gray-900 text-sm/6">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
                `;
}
