
import restaurantAtocha from "../../MEDIA/IMG/IMG_RESTAURANTE_ATOCHA.png"
import restaurantCastellana from "../../MEDIA/IMG/IMG_RESTAURANTE_CASTELLANA.png"
import restaurantGranvia from "../../MEDIA/IMG/IMG_RESTAURANTE_GRANVÍA.png"
import restaurantMalaga from "../../MEDIA/IMG/IMG_RESTAURANTE_MALAGA.jpg"
import restaurantMurcia from "../../MEDIA/IMG/IMG_RESTAURANTE_MURCIA.jpg"
import restaurantIbiza from "../../MEDIA/IMG/IMG_RESTAURANTE_IBIZA.jpeg"
import restaurantJaen from "../../MEDIA/IMG/IMG_RESTAURANTE_JAEN.jpg"
import restaurantRambla from "../../MEDIA/IMG/IMG_RESTAURANTE_RAMBLA.jpg"
import burger from "../../MEDIA/IMG/IMG_CARTA_HAMBURGUESAS.png"
import pizza from "../../MEDIA/IMG/IMG_CARTA_PIZZAS.jpg"
import starters from "../../MEDIA/IMG_CARTA/ENTRANTES/IMG_NACHOS.jpeg"
import salad from "../../MEDIA/IMG/IMG_CARTA_ENSALADAS.jpg"
import kid from "../../MEDIA/IMG/IMG_CARTA_PEQUES.avif"
import desert from "../../MEDIA/IMG/IMG_CARTA_POSTRES.jpeg"

export const restaurantData = [
    {imgSrc: restaurantAtocha, title: 'ATOCHA', address: 'Calle Inventada 1', phone: '911 11 11 11', className: 'first'},
    {imgSrc: restaurantCastellana, title: 'CASTELLANA', address: 'Calle Inventada 2', phone: '911 11 11 11'},
    {imgSrc: restaurantGranvia, title: 'GRAN VÍA', address: 'Calle Inventada 3', phone: '911 11 11 11'},
    {imgSrc: restaurantIbiza, title: 'IBIZA', address: 'Calle Inventada 4', phone: '911 11 11 11'},
    {imgSrc: restaurantJaen, title: 'JAÉN', address: 'Calle Inventada 5', phone: '911 11 11 11'},
    {imgSrc: restaurantMalaga, title: 'MÁLAGA', address: 'Calle Inventada 6', phone: '911 11 11 11'},
    {imgSrc: restaurantMurcia, title: 'MURCIA', address: 'Calle Inventada 7', phone: '911 11 11 11'},
    {imgSrc: restaurantRambla, title: 'LA RAMBLA', address: 'Calle Inventada 8', phone: '911 11 11 11'},
];

export const restaurantMenu = [
  {imgSrc: burger, title: 'HAMBURGUESAS', className: 'carta'},
  {imgSrc: pizza, title: 'PIZZAS', className: 'carta'},
  {imgSrc: salad, title: 'ENSALADAS', className: 'carta'},
  {imgSrc: starters, title: 'ENTRANTES', className: 'carta'},
  {imgSrc: kid, title: 'INFANTIL', className: 'carta'},
  {imgSrc: desert, title: 'POSTRES', className: 'carta'},
]