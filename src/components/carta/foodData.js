//IMÁGENES ENTRANTES
import TEQUEÑOS from "../../MEDIA/IMG_CARTA/ENTRANTES/IMG_TEQUENOS.jpg"
import NACHOS from "../../MEDIA/IMG_CARTA/ENTRANTES/IMG_NACHOS.jpeg"
import QUESADILLA from "../../MEDIA/IMG_CARTA/ENTRANTES/IMG_QUESADILLA.jpeg"
import TORREZNOS from "../../MEDIA/IMG_CARTA/ENTRANTES/IMG_TORREZNOS.png"
import IBERICOS from "../../MEDIA/IMG_CARTA/ENTRANTES/IMG_IBERICOS.jpg"
import HUEVOSROTOS from "../../MEDIA/IMG_CARTA/ENTRANTES/IMG_HUEVOSROTOS.jpg"
import CROQUETAS from "../../MEDIA/IMG_CARTA/ENTRANTES/IMG_CROQUETAS.jpg"
import ALITAS from "../../MEDIA/IMG_CARTA/ENTRANTES/IMG_ALITAS.jpg"
import BRAVAS from "../../MEDIA/IMG_CARTA/ENTRANTES/IMG_BRAVAS.jpeg"

//IMÁGENES ENSALADAS
import BURRATA from "../../MEDIA/IMG_CARTA/ENSALADAS/IMG_BURRATA.jpg"
import CAPRESE from "../../MEDIA/IMG_CARTA/ENSALADAS/IMG_CAPRESE.jpg"
import CESAR from "../../MEDIA/IMG_CARTA/ENSALADAS/IMG_CESAR.jpg"
import MOZARELLA from "../../MEDIA/IMG_CARTA/ENSALADAS/IMG_MOZARELLA.jpg"
import PESTO from "../../MEDIA/IMG_CARTA/ENSALADAS/IMG_PESTO.jpg"
import VENTRESCA from "../../MEDIA/IMG_CARTA/ENSALADAS/IMG_VENTRESCA.jpg"
import WALDORF from "../../MEDIA/IMG_CARTA/ENSALADAS/IMG_WALDORF.jpg"

//IMÁGENES HAMBURGUESAS
import BOMBA from "../../MEDIA/IMG_CARTA/HAMBURGUESAS/IMG_BOMBA.png"
import CHICKEN from "../../MEDIA/IMG_CARTA/HAMBURGUESAS/IMG_CHICKEN.png"
import CRISPY from "../../MEDIA/IMG_CARTA/HAMBURGUESAS/IMG_CRISPY.png"
import EGG from "../../MEDIA/IMG_CARTA/HAMBURGUESAS/IMG_EGGCELLENT_BURGER.png"
import GOLDEN from "../../MEDIA/IMG_CARTA/HAMBURGUESAS/IMG_GOLDEN_CRUNCH.jpg"
import KEVIN from "../../MEDIA/IMG_CARTA/HAMBURGUESAS/IMG_KEVIN_BACON.png"
import RETRO from "../../MEDIA/IMG_CARTA/HAMBURGUESAS/IMG_RETRO.png"
import SWEET from "../../MEDIA/IMG_CARTA/HAMBURGUESAS/IMG_SWEET_GOAT.png"
import VEGGIE from "../../MEDIA/IMG_CARTA/HAMBURGUESAS/IMG_VEGGIE.png"

//IMÁGENES PIZZAS
import FORMAGGI from "../../MEDIA/IMG_CARTA/PIZZAS/IMG_5_FORMAGGI.jpg"
import CALZONE from "../../MEDIA/IMG_CARTA/PIZZAS/IMG_CALZONE_NAPOLETANO.jpg"
import CARNIVORA from "../../MEDIA/IMG_CARTA/PIZZAS/IMG_CARNIVORA.jpg"
import DIAVOLA from "../../MEDIA/IMG_CARTA/PIZZAS/IMG_DIAVOLA.jpg"
import MORTADELA from "../../MEDIA/IMG_CARTA/PIZZAS/IMG_MORTADELA_TARTUFATA.jpg"
import PEPERONI from "../../MEDIA/IMG_CARTA/PIZZAS/IMG_PEPERONNI.jpg"
import PIEMONTESE from "../../MEDIA/IMG_CARTA/PIZZAS/IMG_PIEMONTESE.jpg"
import PROSCIUTO from "../../MEDIA/IMG_CARTA/PIZZAS/IMG_PROSCIUTO.jpg"
import TONNO from "../../MEDIA/IMG_CARTA/PIZZAS/IMG_TONNO.png"

//IMÁGENES KIDS
import BOLOÑESA from "../../MEDIA/IMG_CARTA/KIDS/IMG_BOLONESA.jpg"
import MINI_BURGER from "../../MEDIA/IMG_CARTA/KIDS/IMG_BURGER.jpeg"
import CARBONARA from "../../MEDIA/IMG_CARTA/KIDS/IMG_CARBONARA.jpg"
import FRUTA from "../../MEDIA/IMG_CARTA/KIDS/IMG_FRUTA.webp"
import HELADO from "../../MEDIA/IMG_CARTA/KIDS/IMG_HELADO.jpg"
import MILANESA from "../../MEDIA/IMG_CARTA/KIDS/IMG_MILANESA.png"
import MINI_BACON from "../../MEDIA/IMG_CARTA/KIDS/IMG_MINI_BACON.webp"
import MINI_MARGARITA from "../../MEDIA/IMG_CARTA/KIDS/IMG_MINI_MARGARITA.avif"
import MINI_PEPERONI from "../../MEDIA/IMG_CARTA/KIDS/IMG_MINI_PEPERONI.jpg"

//IMÁGENES POSTRES
import BRIOCCIO from "../../MEDIA/IMG_CARTA/POSTRES/IMG_BRIOCCIO.jpg"
import CHOCO_DREAM from "../../MEDIA/IMG_CARTA/POSTRES/IMG_CHOCO_DREAM.jpg"
import TENTACION from "../../MEDIA/IMG_CARTA/POSTRES/IMG_DOBLE_TENTACION.jpg"
import DUO_DELICIOSO from "../../MEDIA/IMG_CARTA/POSTRES/IMG_DUO_DELICIOSO.jpg"
import TIRAMISU from "../../MEDIA/IMG_CARTA/POSTRES/IMG_TIRAMISU.jpg"

const foodData = {
    entrantes: [
      { id: "01",
        category: "entrantes",
        name: "TEQUEÑOS", 
        image: TEQUEÑOS, 
        description:"8 Palitos fritos rellenos de queso derretido, acompañados con tu salsa favorita de la casa. ¡Tradición venezolana!" ,
        price: 9.90
      },
      { id: "02",
        category: "entrantes",
        name: "NACHOS", 
        image: NACHOS, 
        description:"Nuestros famosos nachos acompañados de chili con carne, queso fundido, pico de gallo, jalapeños, guacamole y crema agria.",
        price: 9.9
      },
      { id: "03",
        category: "entrantes",
        name: "QUESADILLAS", 
        image: QUESADILLA, 
        description:"Con jugoso pollo aderezado con especias cajún, mezcla de quesos, bacon crujiente y acompañada de guacamole.",
        price: 9.9
      },
      { id: "04",
        category: "entrantes",
        name: "TORREZNOS", 
        image: TORREZNOS, 
        description:"Crujientes y dorados, con el irresistible sabor del cerdo ibérico y la sal marina.",
        price: 9.9
      },
      { id: "05",
        category: "entrantes",
        name: "IBÉRICOS", 
        image: IBERICOS, 
        description:"Va compuesta de Jamón Ibérico, Lomo Ibérico, Salchichón Ibérico y Chorizo ibérico. 100% IBÉRICOS.",
        price: 9.9
      },
      { id: "06",
        category: "entrantes",
        name: "HUEVOS ROTOS", 
        image: HUEVOSROTOS, 
        description:"Ponemos nuestro sello personal a los huevos rotos con jamón para sacar un resultado todavía más excepcional.",
        price: 9.9 
      },
      { id: "07",
        category: "entrantes",
        name: "CROQUETAS", 
        image: CROQUETAS, 
        description:"Hechas con el mejor jamón ibérico, crujientes por fuera y cremosas por dentro. (8 unidades)",
        price: 9.9
      },
      { id: "08",
        category: "entrantes",
        name: "ALITAS", 
        image: ALITAS, 
        description:"Alitas en salsa barbacoa chipotle casera, acompañadas de dip de queso azul",
        price: 9.9 
      },
      { id: "09",
        category: "entrantes",
        name: "BRAVAS", 
        image: BRAVAS, 
        description:"Combinación de patatas crujientes por fuera y cremosas por dentro. Una salsa deliciosa y picante. Pica, pero pica rico.",
        price: 9.9 
      }
    ],
    burger: [
      { id: "10",
        category: "burger",
        name: "BOMBA", 
        image: BOMBA, 
        description:"Carne, queso Monterey Jack empanado, bacon, huevo frito y salsa Mayo Albahaca.",
        price: 9.90 
      },
      { id: "11",
        category: "burger",
        name: "CHICKEN", 
        image: CHICKEN, 
        description:"Contramuslo de pollo jugoso y crujiente de 170g, queso crema, rúcula y salsa de tomate casera.",
        price: 9.90  
      },
      { id: "12",
        category: "burger",
        name: "CRISPY RIB DELUXE", 
        image: CRISPY, 
        description:"Carne, bacon bits, cebolla crunchy y queso americano, con costilla desmenuzada y salsa barbacoa.",
        price: 9.90  
      },
      { id: "13",
        category: "burger",
        name: "EGGCELLENT BURGER", 
        image: EGG, 
        description:"Todo con huevo mola más!! Huevo frito, bacon, queso americano y salsa Mayo.",
        price: 9.90  
      },
      { id: "14",
        category: "burger",
        name: "GOLDEN CRUNCH", 
        image: GOLDEN, 
        description:"Contramuslo de pollo jugoso y crujiente, queso americano, bacon, lechuga batavia y salsa 50 Burger Spread.",
        price: 9.90  
      },
      { id: "15",
        category: "burger",
        name: "KEVIN BACON", 
        image: KEVIN, 
        description:"Picamos la carne directamente en la plancha y la mezclamos con trozos de bacon, cebolla crunchy y queso americano.",
        price: 9.90  
      },
      { id: "16",
        category: "burger",
        name: "RETRO", 
        image: RETRO, 
        description:"Carne, queso americano, cebolla morada a la plancha, tomate, pepinillos, salsa Barbacoa y salsa Mayo",
        price: 9.90  
      },
      { id: "17",
        category: "burger",
        name: "SWEET GOAT", 
        image: SWEET, 
        description:"Solo con dos ingredientes, queso de cabra al grill y cebolla caramelizada, se te hará la boca agua.",
        price: 9.90  
      },
      { id: "18",
        category: "burger",
        name: "VEGGIE", 
        image: VEGGIE, 
        description:"Dos piezas plant-based empanadas, queso americano, pan sin gluten, tomate seco confitado, y salsa Mayo",
        price: 9.90  
      },
    ],
    pizzas: [
      { id: "19",
        category: "pizzas",
        name: "5 FORMAGGI", 
        image: FORMAGGI, 
        description:"Mozzarella, gorgonzola, cabra, edam, Parmigiano Reggiano DOP y almendras.",
        price: 9.90 
      },
      { id: "20",
        category: "pizzas",
        name: "PROSCIUTO", 
        image: PROSCIUTO, 
        description:"Base de tomate triturado, mozzarella, jamón york y orégano.",
        price: 9.90 
      },
      { id: "21",
        category: "pizzas",
        name: "DIÁVOLA", 
        image: DIAVOLA, 
        description:"Base de tomate, mozzarella, pollo, pepperoni, carne picada de vacuno, champiñones y guindilla.",
        price: 9.90 
      },
      { id: "22",
        category: "pizzas",
        name: "PIEMONTESE", 
        image: PIEMONTESE, 
        description:"Base de tomate, mozzarella, panceta, cebolla caramelizada, aceitunas negras y orégano.",
        price: 9.90 
      },
      { id: "23",
        category: "pizzas",
        name: "CARNÍVORA", 
        image: CARNIVORA, 
        description:"Explosión de salsa boloñesa, pepperoni, salchicha toscana, panceta, base de tomate, queso scamorza y albahaca.",
        price: 9.90 
      },
      { id: "24",
        category: "pizzas",
        name: "CALZONE NAPOLETANO", 
        image: CALZONE, 
        description:"Rellena de carne picada de vacuno y jamón york con borde relleno de queso provolone.",
        price: 9.90 
      },
      { id: "25",
        category: "pizzas",
        name: "MORTADELA TARTUFATA", 
        image: MORTADELA, 
        description:"Base de tomate, mortadella trufada con pistachos, Mozzarella di bufala, pistachos y pesto.",
        price: 9.90 
      },
      { id: "26",
        category: "pizzas",
        name: "PEPERONI", 
        image: PEPERONI, 
        description:"Base de tomate, mozzarella y pepperoni.",
        price: 9.90 
      },
      { id: "27",
        category: "pizzas",
        name: "TONNO", 
        image: TONNO, 
        description:"Base de tomate, mozzarella, atún, cebollitas al Módena, cebolla roja, aceitunas negras y orégano.",
        price: 9.90 
      },
    ],
    ensaladas: [
      { id: "28",
        category: "ensaladas",
        name: "Ensalada César", 
        image: CESAR,
        description:"Lechuga, Pollo, Bacon, Crostones y Parmesano.",
        price: 9.90
      },
      { id: "29",
        category: "ensaladas",
        name: "Ensalada Capresse", 
        image: CAPRESE,
        description:"Tomate, Mozarella, Olivas Negras y Albahaca.",
        price: 9.90
      },
      { id: "30",
        category: "ensaladas",
        name: "Ensalada de Ventresca", 
        image: VENTRESCA,
        description:"Tomate, Ventresca y Cebolleta.",
        price: 9.90
      },
      { id: "31",
        category: "ensaladas",
        name: "Ensalada Mozarella", 
        image: MOZARELLA,
        description:"Rúcula, Parmesano y Mozarella.",
        price: 9.90
      },
      { id: "32",
        category: "ensaladas",
        name: "Ensalada Burrata", 
        image: BURRATA,
        description:"Tartar de Tomate al Pesto, Kalamata y Burrata.",
        price: 9.90
      },
      { id: "33",
        category: "ensaladas",
        name: "Ensalada de Pesto", 
        image: PESTO,
        description:"Canónigos, Tomate Asado, Pipas, Rocas de Parmesano y Pesto.",
        price: 9.90
      },
      { id: "34",
        category: "ensaladas",
        name: "Ensalada Waldorf", 
        image: WALDORF,
        description:"Lechuga, Manzana, Nueces, Apio y Queso Azul.",
        price: 9.90
      }
    ],
    kids: [
      { id: "35",
        category: "kids",
        name: "PASTA BOLOÑESA", 
        image: BOLOÑESA,
        description:"Un clásico italiano, una deliciosa combinación de espaguetis al dente y una rica salsa de carne molida y tomate.",
        price: 9.90
      },
      { id: "36",
        category: "kids",
        name: "PASTA CARBONARA", 
        image: CARBONARA,
        description:"Espaguetis al dente con una cremosa salsa de huevo, queso parmesano, y crujiente panceta.",
        price: 9.90
      },
      { id: "37",
        category: "kids",
        name: "BURGER", 
        image: MINI_BURGER,
        description:"Jugosa y sabrosa, acompañada de crujientes patatas fritas.",
        price: 9.90
      },
      { id: "38",
        category: "kids",
        name: "PIZZA MARGARITA", 
        image: MINI_MARGARITA,
        description:"Salsa de tomate fresca, mozzarella derretida y un toque de albahaca. Simple y clásica, ¡una opción perfecta para todos!",
        price: 9.90
      },
      { id: "39",
        category: "kids",
        name: "PIZZA DE BACON", 
        image: MINI_BACON,
        description:"Una irresistible combinación de masa dorada, cubierta con salsa de tomate, queso fundido y trozos de bacon crujiente.",
        price: 9.90
      },
      { id: "40",
        category: "kids",
        name: "PIZZA PEPERONI", 
        image: MINI_PEPERONI,
        description:"Deliciosa base de masa, cubierta con salsa de tomate, queso fundido y generosas rodajas de pepperoni.",
        price: 9.90
      },
      { id: "41",
        category: "kids",
        name: "MILANESA DE POLLO", 
        image: MILANESA,
        description:"Pechuga de pollo crujiente, empanizada y dorada a la perfección. ¡Un clásico irresistible!",
        price: 9.90
      },
      { id: "42",
        category: "kids",
        name: "HELADO", 
        image: HELADO,
        description:"Helado a elegir entre: Chocolate, Fresa o Vainilla",
        price: 9.90
      },
      { id: "43",
        category: "kids",
        name: "PINCHO DE FRUTA", 
        image: FRUTA,
        description:"Brocheta de Fruta",
        price: 9.90
      },
    ],
    postres: [
      { id: "44",
        category: "postres",
        name: "BRIOCCIO", 
        image: BRIOCCIO,
        description:"Torrija de brioche acompañada de helado de pistacho, salsa de caramelo y trocitos crujientes de pistacho.",
        price: 9.90
      },
      { id: "45",
        category: "postres",
        name: "CHOCO DREAM", 
        image: CHOCO_DREAM,
        description:"Helado de chocolate y vainilla, dados de tarta de chocolate, galleta crujiente, nata y salsa de chocolate.",
        price: 9.90
      },
      { id: "46",
        category: "postres",
        name: "DOBLE TENTACIÓN", 
        image: TENTACION,
        description:"Tarta de chocolate con avellanas y nueces, acompañada de helado de chocolate blanco con avellanas y almendras.",
        price: 9.90
      },
      { id: "47",
        category: "postres",
        name: "DÚO DELICIOSO", 
        image: DUO_DELICIOSO,
        description:"Dos bolas de helado a elegir, con salsa de chocolate crujiente y tus topping favoritos.",
        price: 9.90
      },
      { id: "48",
        category: "postres",
        name: "TIRAMISÚ", 
        image: TIRAMISU,
        description:"Bizcocho bañado en café, queso mascarpone y cacao en polvo..",
        price: 9.90
      },
    ]
  };

  export default foodData;
  
  