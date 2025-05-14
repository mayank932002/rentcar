document.getElementById("menuToggle").addEventListener("click", function () {
	const mobileMenu = document.getElementById("mobileMenu");
	mobileMenu.classList.toggle("hidden");
});

const cars = [
	{
		name: "Jaguar XE L P250",
		image: "images/image 12.png",
		rating: 4.8,
		reviews: 2436,
		passengers: 4,
		transmission: "Auto",
		ac: "Air Conditioning",
		doors: 4,
		price: 1800,
	},
	{
		name: "Audi R8",
		image: "images/Audi 1.png",
		rating: 4.6,
		reviews: 1936,
		passengers: 2,
		transmission: "Auto",
		ac: "Air Conditioning",
		doors: 2,
		price: 2100,
	},
	{
		name: "BMW M3",
		image: "images/image 13.png",
		rating: 4.5,
		reviews: 2036,
		passengers: 4,
		transmission: "Auto",
		ac: "Air Conditioning",
		doors: 4,
		price: 1600,
	},
	{
		name: "Lamborghini Huracan",
		image: "images/image 11.png",
		rating: 4.3,
		reviews: 2236,
		passengers: 2,
		transmission: "Auto",
		ac: "Air Conditioning",
		doors: 2,
		price: 2300,
	},
];

const container = document.getElementById("car-cards");

cars.forEach((car) => {
	container.innerHTML += `
<div class="bg-white rounded-xl shadow-md overflow-hidden">
<div class="p-6">
<img src="${car.image}" alt="${car.name}" class="w-full h-32 sm:h-36 md:h-40 object-contain mb-4" />
<h3 class="text-[16px] font-medium text-gray-800 mb-2">${car.name}</h3>
<div class="flex items-center mb-4">
<div class="flex text-yellow-400 mr-2">
<i class="fas fa-star"></i>
</div>
<span class="font-semibold">${car.rating}</span>
<span class="text-gray-500 text-sm ml-1">(${car.reviews} reviews)</span>
</div>

<div class="grid grid-cols-2 gap-3 mb-4">
<div class="flex items-center">
<img src="images/user.png" class="text-gray-400 mr-2" />
<span class="text-[12px] font-[400] text-gray-600">${car.passengers} Passengers</span>
</div>
<div class="flex items-center">
<img src="images/auto.png" alt="" class="text-gray-400 mr-2" />
<span class="text-[12px] font-normal text-gray-600">${car.transmission}</span>
</div>
<div class="flex items-center">
<img src="images/airconditioning.png" alt="" class="text-gray-400 mr-2" />
<span class="text-[12px] text-gray-600">${car.ac}</span>
</div>
<div class="flex items-center">
<img src="images/door.png" alt="" class="text-gray-400 mr-2" />
<span class="text-[12px] text-gray-600">${car.doors} Doors</span>
</div>
</div>

<div class="border-t border-gray-200 pt-4">
<div class="flex justify-between items-center mb-4">
<span class="text-sm text-gray-500">Price</span>
<div>
 <span class="text-[16px] font-semibold text-gray-800">$${car.price}</span>
 <span class="text-gray-500 text-[16px]">/day</span>
</div>
</div>
<a
href="#"
class="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-4 rounded-md transition duration-300"
>
Rent Now <i class="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</div>
`;
});

var swiper = new Swiper(".mySwiper", {
	scrollbar: {
		slidePreview: "auto",
		spaceBetween: 30,
		hide: true,
	},
});
