'use strict';

let products =  [
  {
    "title": "El original",
    "images": "/1.jpg",
    "description": "¡El original Tacopado! Una tortilla de maíz crujiente.",
    "price": 200,
    "calories": 170,
    "totalfat": 10.7,
    "carb": 9.7,
    "protein": 7.8,
    "transfat": 0.4,
    "saturatedfat": 4.3,
    "cholesterol": 29,
    "sodium": 339,
    "sugars": 1,
    "fiber": 1,
    "subcategoryId": 1,
    createdAt:new Date,
    updatedAt: new Date
},
{
    "title": "Taco Suave",
    "images": "/2.jpg",
    "description": "Probá el lado más suave de Tacopado.",
    "price": 220,
    "calories": 180,
    "totalfat": 8.9,
    "carb": 24.2,
    "protein": 14.2,
    "transfat": 0.3,
    "saturatedfat": 3.9,
    "cholesterol": 21.6,
    "sodium": 492.4,
    "sugars": 0.5,
    "fiber": 1.7,
    "subcategoryId": 1,
    createdAt:new Date,
    updatedAt: new Date
 }
, {
    "title": "Tacopante",
    "images": "/3.jpg",
    "description": "Esta exclusiva de Tacopado lleva los tacos a un nivel completamente nuevo. Cambiamos la cáscara con pan de pita tibio y esponjoso, y lo rellenamos con frijoles refritos cocidos a fuego lento. Con relleno a elección: carne picada fresca o carne de pollo. Y con la infaltable lechuga fresca, tomates jugosos y coronandolo con queso cheddar rallado.",
    "price": 500,
    "calories": 530,
    "totalfat": 32.2,
    "carb": 48.5,
    "protein": 18.5,
    "transfat": 0.7,
    "saturatedfat": 11.7,
    "cholesterol": 29.4,
    "sodium": 967.1,
    "sugars": 3.7,
    "fiber": 10,
    "subcategoryId": 1,
    createdAt:new Date,
    updatedAt: new Date
},
{
    "title": "¡Grande, taco!",
    "images": "/4.jpg",
    "description": "Un camino más grande a lo copado. Un taco nunca es suficiente, así que empacamos el doble de sabor y frescura en esta crujiente tortilla de maíz para agarrar con las dos manos. Disfrutá el doble de carne picada fresca o carne de pollo. Además tiene una mezcla rallada de queso cheddar y picantes, con lechuga fresca, tomates jugosos y una cucharada de crema agria fresca.",
    "price": 580,
    "calories": 360,
    "totalfat": 25.1,
    "carb": 14.6,
    "protein": 18.7,
    "transfat": 0.8,
    "saturatedfat": 11.4,
    "cholesterol": 76.2,
    "sodium": 786.9,
    "sugars": 2.2,
    "fiber": 3,
    "subcategoryId": 1,
    createdAt:new Date,
    updatedAt: new Date
},
  {
        "title": "Copado Burrito",
      "images": "/5.jpg",
        "description": "Envolvé tus papilas gustativas alrededor de 5 capas de todo lo copado. Comenzamos con frijoles refritos cocidos a fuego lento y una capa de sabroso arroz mexicano, salsa de chile, una mezcla rallada de queso cheddar y picante. A tu elección el relleno de carne picada o carne de pollo.",
        "price": 220,
      "calories": 660,
      "totalfat": 35.1,
      "carb": 70.1,
      "protein": 25,
      "transfat": 0.9,
      "saturatedfat": 14,
      "cholesterol": 49.7,
      "sodium": 1598.4,
      "sugars": 2.1,
      "fiber": 14.7,
      "subcategoryId": 2,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
        "title": "El gran burrito gran",
      "images": "/6.jpg",
        "description": "Un burrito tan grande que no le cabía otro nombre. Actualizamos nuestra tortilla de harina fresca a un tamaño que puede contener rellenos adicionales. Elegí rellenarlo con carne picada o pollo, para ,ezcñarse em caás de salsa de chile picante, hebras de queso cheddar y picantes, lechuga fresca, tomates jugosos y crema agria fresca para hacer este burrito famoso de Tacopado.",
        "price": 550,
      "calories": 650,
      "totalfat": 34,
      "carb": 56.2,
      "protein": 27.6,
      "transfat": 1,
      "saturatedfat": 14.7,
      "cholesterol": 83.4,
      "sodium": 1464.8,
      "sugars": 2.2,
      "fiber": 5.4,
      "subcategoryId": 2,
      createdAt:new Date,
      updatedAt: new Date

  },
  {
        "title": "Burrito de carne",
      "images": "/7.jpg",
        "description": "Poné en tus manos este burrito 100% carne vacuna. Disfruta de la carne molida, perfectamente sazonada, combinada con una mezcla de queso cheddar, picantes y salsa de chile. Todo envuelto en una tortilla de harina de trigo y tibia",
        "price": 190,
      "calories": 470,
      "totalfat": 24.9,
      "carb": 38.9,
      "protein": 20.4,
      "transfat": 0.8,
      "saturatedfat": 10.5,
      "cholesterol": 60.8,
      "sodium": 1097.6,
      "sugars": 0.7,
      "fiber": 3.7,
      "subcategoryId": 2,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
        "title": "Burrito Mr. Bean",
      "images": "/8.jpg",
        "description": "Rodado a la perfección. Disfrutá de frijoles refritos cocidos a fuego lento, combinados con una mezcla derretida de queso cheddar, picante y salsa de chile, todo envuelto en una tortilla de harina suave y tibia.",
      "price": 180,
      "calories": 540,
      "totalfat": 31.6,
      "carb": 61.6,
      "protein": 18.8,
      "transfat": 0.5,
      "saturatedfat": 12.9,
      "cholesterol": 20.1,
      "sodium": 1225.2,
      "sugars": 1.8,
      "fiber": 18.9,
      "subcategoryId": 2,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
        "title": "Burrito combo",
      "images": "/9.jpg",
        "description": "Rodado a la perfección. Disfrutá de frijoles refritos cocidos a fuego lento y carne picada perfectamente sazonada, combinados con una mezcla derretida de queso cheddar, picante y salsa de chile, todo envuelto en una tortilla de harina suave y tibia.",
        "price": 230,
      "calories": 510,
      "totalfat": 28.7,
      "carb": 50.3,
      "protein": 20.1,
      "transfat": 0.7,
      "saturatedfat": 11.9,
      "cholesterol": 42.3,
      "sodium": 1185.5,
      "sugars": 1.3,
      "fiber": 11.3,
      "subcategoryId": 2,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Burrito Francisco",
      "images": "/10.jpg",
        "description": "Vos decís Papa, nosotros decimos burrito. Disfruta de croquetas de patata crujiente en capas con carne picada. Todo acompañado de queso derretido, lechuga fresca rallada y crema agria enrollada en una tortilla de harina suave y tibia.",
        "price": 200,
      "calories": 310,
      "totalfat": 16.1,
      "carb": 30.6,
      "protein": 9.1,
      "transfat": 0.3,
      "saturatedfat": 6.8,
      "cholesterol": 28,
      "sodium": 713.8,
      "sugars": 1.7,
      "fiber": 2.4,
      "subcategoryId": 2,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Quesadilla de ternera",
      "images": "/11.jpg",
        "description": "No hay mejor manera de disfrutar tu elección de relleno de carne picada sazonada o cortada a cuchillo, con una mezcla de quesos cheddar y picantes, doblado en una tortilla de harina tibia y tostado a la perfección.",
        "price": 250,
      "calories": 829,
      "totalfat": 51,
      "carb": 52,
      "protein": 40,
      "transfat": 1,
      "saturatedfat": 27,
      "cholesterol": 138,
      "sodium": 1527,
      "sugars": 1,
      "fiber": 5,
      "subcategoryId": 3,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Quesadilla de pollo",
      "images": "/12.jpg",
        "description": "No hay mejor manera de disfrutar pollo con una mezcla de quesos cheddar y picantes, doblado en una tortilla de harina tibia y tostado a la perfección.",
        "price": 220,
      "calories": 800,
      "totalfat": 43.8,
      "carb": 52.9,
      "protein": 44.9,
      "transfat": 0,
      "saturatedfat": 23.9,
      "cholesterol": 147.9,
      "sodium": 1447.7,
      "sugars": 0.3,
      "fiber": 4.3,
      "subcategoryId": 3,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Quesadilla de queso",
      "images": "/13.jpg",
        "description": "No hay mejor manera de disfrutar una mezcla de quesos cheddar y picantes, doblado en una tortilla de harina tibia y tostado a la perfección.",
        "price": 200,
      "calories": 720,
      "totalfat": 42.4,
      "carb": 50.7,
      "protein": 32.4,
      "transfat": 0,
      "saturatedfat": 23.6,
      "cholesterol": 108.2,
      "sodium": 1141.5,
      "sugars": 0.3,
      "fiber": 4.3,
      "subcategoryId": 3,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Mexicanísimo",
      "images": "/14.jpg",
        "description": "Tené esa dosis de papas que te merecés y salsas de este clásico de Tacopado. Nuestros chips de tortilla crujiente se combinan con guacamole hecho con paltas frescas, queso y frijoles refritos cocidos a fuego lento ¿Mencionamos que estas creaciones vienen en sus propios tazones de tortilla de maíz?",
        "price": 170,
      "calories": 780,
      "totalfat": 51.8,
      "carb": 79,
      "protein": 20.9,
      "transfat": 0.9,
      "saturatedfat": 17,
      "cholesterol": 21.5,
      "sodium": 1527.4,
      "sugars": 4.8,
      "fiber": 25,
      "subcategoryId": 4,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Mucho Nacho",
      "images": "/15.jpg",
        "description": "Porque nunca son suficientes nachos, mejoramos este clásico mexicano con más de lo que amás: chips de tortilla recién hechos, acompañados de carne picada o carne de pollo sazonada. Además tiene salsa de chile picante, frijoles refritos a fuego lento, queso derretido, tomates jugosos y una cucharada de crema agria fría.",
        "price": 250,
      "calories":   930  ,
      "totalfat":   60.5  ,
      "carb":   83.3  ,
      "protein":   36.4  ,
      "transfat":   1.9  ,
      "saturatedfat":   24.1  ,
      "cholesterol":   80.8  ,
      "sodium":   2748.8,
      "sugars":   7.9,
      "fiber":   26.9,
      "subcategoryId": 4,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Papas con queso",
      "images": "/16.jpg",
        "description": "Amor a primer bocado. Un clásico mexicano hecho al estilo Tacopado. Nuestros chips de tortilla crujiente de trigo recién fritos y combinados con una salsa melty de queso y pimientos. Este dúo viene en tamaño regular y grande, según el hambre que tengas",
        "price":   190,
      "calories":   300,
      "totalfat":   15.2, 
      "carb":   32.6, 
      "protein":   8.8, 
      "transfat":   0.5,
      "saturatedfat":   6.6, 
      "cholesterol":   22, 
      "sodium":   962.1, 
      "sugars":   2.9 ,
      "fiber":   2.3,
      "subcategoryId": 4,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "GuacaChips",
      "images": "/17.jpg",
        "description": "Un clásico mexicano hecho al estilo Tacopado. Nuestros chips de tortilla crujientes se combinan con guacamole fresco hecho con palta perfectamente madura, tomates y cebollas cortados en cubitos y una mezcla de nuestras especias exclusivas. Este dúo viene en tamaño regular y grande, según el tamaño de tu antojo",
        "price":   280,
      "calories":   370,
      "totalfat":   25,
      "carb":   36.6,
      "protein":   6.9,
      "transfat":   0.2,
      "saturatedfat":   5.3,
      "cholesterol":   0,
      "sodium":   326.8,
      "sugars":   1.5,
      "fiber":   7.6,
      "subcategoryId": 4,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Fuente de sabores",
      "images": "/18.jpg",
        "description": "Una fuente para acabar con tu hambre. Con una chilada de pollo o carne tibia bañada en sala de chile picante y queso derretido, un taco de carne crujiente y un Tacopante de carne suave. Esta fuente se completa con frijoles refritos a fuego lento, un acompañamiento de queso derretido, arroz mexicano sazonado y tortilla crujiente de papas fritas, crema agria fresca y una bola de guacamole recién hecho.",
        "price":   1290,
      "calories":   1790,
      "totalfat":   104.1,
      "carb":   177.2,
      "protein":   61.2,
      "transfat":   2.5,
      "saturatedfat":   38.6,
      "cholesterol":   120.6,
      "sodium":   4016.4,
      "sugars":   11.3,
      "fiber":   37,
      "subcategoryId": 5,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "La taco-bandeja",
      "images": "/19.jpg",
      "description": "¿No podes elegir entre tacos crujientes y suaves? Con esta fuente podes tener ambos. Disfruta de dos tipos de taco, rellenos a tu elección: carne ligeramente sazonada o de carne de pollo. Disfruta de una variedad de acompañamientos: sabrozoz arroz mexicano, frijoles refritos a fuego lento, chips de tortilla crujientes, crema agria fresca y guacamoles recién hecho.",
      "price": 1300,
      "calories": 1050,
      "totalfat": 60.4,
      "carb": 109,
      "protein": 35.1,
      "transfat": 1.4,
      "saturatedfat": 21.8,
      "cholesterol": 65.5,
      "sodium": 2079.1,
      "sugars": 6.2,
      "fiber": 25.2,
      "subcategoryId": 5,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Fuente Tacopada",
      "images": "/20.jpg",
      "description": "Combina texturas crujientes y suabes con nuestro taco más grande de carne o pollo tibio. Disfrutá de un montón de arroz mexicano sazonado, frijoles refritos a fuego lento y chips de tortilla frescos a un lado, cubierto con crema agria fresca y guacamole recién hecho",
      "price": 2000,
      "calories": 1520,
      "totalfat": 85.9,
      "carb": 146,
      "protein": 42.4,
      "transfat": 1.3,
      "saturatedfat": 30.5,
      "cholesterol": 75.6,
      "sodium": 2270.5,
      "sugars": 5.8,
      "fiber": 17.6,
      "subcategoryId": 5,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Fuente Chilacopada",
      "images": "/21.jpg",
        "description": "Disfruta de dos chiladas empaquetadas con nuestra carne molida fresca y sazonada o carne de pollo, envuelto en una tortilla de harina tibia y bañada en salsa de chile picante con queso derretido caliente. Estos favoritos de Tacopado se combinan con un sabroso arroz mexicano, frijoles refritos hervidos a fuego lento y muchos chips de tortilla crujientes. Plus? una cucharada de crema agria fresca y una bola de guacamole fresco como acompañamiento.",
        "price": 1600,
      "calories": 1270,
      "totalfat": 69.1,
      "carb": 135.9,
      "protein": 42.9,
      "transfat": 69.1,
      "saturatedfat": 25.2,
      "cholesterol": 80.1,
      "sodium": 2992.1,
      "sugars": 6,
      "fiber": 26.4,
      "subcategoryId": 5,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Mega ensalada en taco",
      "images": "/22.jpg",
        "description": "Una ensalada crujiente, de sabor crujiente. Esta ensalada de taco tiene mucho sabor en un tazón de tortilla de trigo recién frito. Disfrutala con carne fresca o carne blanca de pollo. Acunada en un colchol de lechuga crujiente rallada y tomates cortados en cubitos. Terminado con queso cheddar rallado, guacamole recién hecho y una cucharada de crema agria fresca, perfecta como aderezo para ensalada o como salsa para este tazón crujiente e irresistible.",
        "price": 590,
      "calories": 980,
      "totalfat": 68,
      "carb": 66,
      "protein": 29,
      "transfat": 1,
      "saturatedfat":22,
      "cholesterol": 97,
      "sodium": 2158,
      "sugars": 8,
      "fiber": 7,
      "subcategoryId": 6,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Nacho ensalada",
      "images": "/23.jpg",
        "description": "Una ensalada a la mexicana. Disfruta de una variedad de chips de tortilla crujientes hechos en casa, cubiertos con salsa de chile picante, queso derretido y pollo o carne a tu elección. Trae lechuga fresca, jugosos tomates y queso cheddar rallado que completan esta combinación perfecta de clásicos de Tacopado.",
        "price": 630,
      "calories": 420,
      "totalfat": 24.9,
      "carb": 31.9,
      "protein": 18.4,
      "transfat": 0.8,
      "saturatedfat": 10.6,
      "cholesterol": 56.6,
      "sodium": 1118.4,
      "sugars": 3.8,
      "fiber": 4.1,
      "subcategoryId": 6,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Salsa de frijoles picante",
      "images": "/24.jpg",
      "description": "Esta salsa cálida incluye frijoles refritos hervidos a fuego lento, salsa de chile picante y queso cheddar pegajoso, llenador y rico.",
      "price": 70,
      "calories": 282,
      "totalfat": 22,
      "carb": 26,
      "protein": 11,
      "transfat": 1,
      "saturatedfat": 9,
      "cholesterol": 10,
      "sodium": 772,
      "sugars": 2,
      "fiber": 16,
      "subcategoryId": 7,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Arroz mexicano",
      "images": "/25.jpg",
      "description": "Granos llenos de sabor. El arroz se potencia con muchas especias sabrosas y toques de cebolla y pimiento.",
      "price": 80,
      "calories": 220,
      "totalfat": 3.3,
      "carb": 40.7,
      "protein": 4.6,
      "transfat": 0,
      "saturatedfat":0.6,
      "cholesterol": 0,
      "sodium": 549.3,
      "sugars": 1.4,
      "fiber": 1.5,
      "subcategoryId": 7,
      createdAt:new Date,
      updatedAt: new Date
      
  },
  {
      "title": "Guacamole",
      "images": "/26.jpg",
      "description": "El dip favorito de todos. Nuestro guacamole fresco esta elaborado con paltas perfectamente maduras, tomates jugosos, cebollas picadas, y una mezcla de nuestras especias exclusivas.",
      "price": 120,
      "calories": 160,
      "totalfat": 16.4,
      "carb": 8.3,
      "protein": 2.8,
      "transfat": 0,
      "saturatedfat":2.7,
      "cholesterol": 0,
      "sodium": 157.3,
      "sugars": 0.1,
      "fiber": 5.5,
      "subcategoryId": 7,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Queso derretido",
      "images": "/27.jpg",
      "description": "Tan copado que se derrite en tu boca. Nuestro queso derretido esta hecho con la combinación perfecta de pimientos picantes y sabroso queso.",
      "price": 80,
      "calories": 100,
      "totalfat": 6.6,
      "carb": 4.3,
      "protein": 4.6,
      "transfat": 0.3,
      "saturatedfat":4,
      "cholesterol": 22,
      "sodium": 792.6,
      "sugars": 1.5,
      "fiber": 0.2,
      "subcategoryId": 7,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Chips de canela",
      "images": "/28.jpg",
      "description": "Canela y azucar crujiente ¡Para que los amantes de los chips salten de alegría! Tu bocadillo favorito llegó en forma de postre. Nuestros chips están recién fritos y cargados con una mezcla de canela y azucar que le encantará a tu paladar.",
      "price": 120,
      "calories": 360,
      "totalfat": 18.9,
      "carb": 40.8,
      "protein": 6.6,
      "transfat": 0.4,
      "saturatedfat":6.1,
      "cholesterol": 0,
      "sodium": 299.4,
      "sugars": 4.6,
      "fiber": 1,
      "subcategoryId": 8,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Churros",
      "images": "/29.jpg",
      "description": "Pequeño dulce, sabor pleno. Este amado dulce por todos viene en tamaño de un bocado. Recién fritos y espolvoreados con canela y azúcar para crear un sabor dulce, cálido y acogedor. Estos pedazos del cielo son fáciles de compartir... o de disfrutar en por tu cuenta.",
      "price": 130,
      "calories": 340,
      "totalfat": 26.5,
      "carb": 22.8,
      "protein": 2,
      "transfat": 0.5,
      "saturatedfat":7.1,
      "cholesterol": 0,
      "sodium": 226.9,
      "sugars": 1.4,
      "fiber": 0.5,
      "subcategoryId": 8,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Coca cola",
      "images": "/30.png",
      "description": "Algo fresco para tanto picor. Refrescate con una coca recién sacada de la heladera para largar ese AHHHHHHH desde el primer sorbo, al último trago.",
      "price": 200,
      "calories": 150,
      "totalfat": 0,
      "carb": 41,
      "protein": 0,
      "transfat": 0,
      "saturatedfat":0,
      "cholesterol": 0,
      "sodium": 30,
      "sugars": 41,
      "fiber": 0,
      "subcategoryId": 9,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Sprite",
      "images": "/31.jpg",
      "description": "Algo fresco para tanto picor. Refrescate con una sprite recién sacada de la heladera para largar ese AHHHHHHH desde el primer sorbo, al último trago.",
      "price": 200,
      "calories": 150,
      "totalfat": 0,
      "carb": 41,
      "protein": 0,
      "transfat": 0,
      "saturatedfat":0,
      "cholesterol": 0,
      "sodium": 30,
      "sugars": 41,
      "fiber": 0,
      "subcategoryId": 9,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
         "title": "Fanta",
      "images": "/32.png",
      "description": "Algo fresco para tanto picor. Refrescate con una fanta recién sacada de la heladera para largar ese AHHHHHHH desde el primer sorbo, al último trago.",
      "price": 200,
      "calories": 150,
      "totalfat": 0,
      "carb": 41,
      "protein": 0,
      "transfat": 0,
      "saturatedfat":0,
      "cholesterol": 0,
      "sodium": 30,
      "sugars": 41,
      "fiber": 0,
      "subcategoryId": 9,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
      "title": "Jugo de Lima y Mango",
      "images": "/33.jpg",
      "description": "Algo fresco para tanto picor. Refrescate con jugo de calidad recién salido de la heladera para largar ese AHHHHHHH desde el primer sorbo, al último trago.",
      "price": 150,
      "calories": 100,
      "totalfat": 0,
      "carb": 41,
      "protein": 0,
      "transfat": 0,
      "saturatedfat":0,
      "cholesterol": 0,
      "sodium": 30,
      "sugars": 41,
      "fiber": 0,
      "subcategoryId": 10,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
      "title": "Jugo de Lima y Frambuesa",
      "images": "/34.jpg",
      "description": "Algo fresco para tanto picor. Refrescate con jugo de calidad recién salido de la heladera para largar ese AHHHHHHH desde el primer sorbo, al último trago.",
      "price": 150,
      "calories": 100,
      "totalfat": 0,
      "carb": 41,
      "protein": 0,
      "transfat": 0,
      "saturatedfat":0,
      "cholesterol": 0,
      "sodium": 30,
      "sugars": 41,
      "fiber": 0,
      "subcategoryId": 10,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
      "title": "Clásica limonada",
      "images": "/35.jpg",
      "description": "Algo fresco para tanto picor. Refrescate con jugo de calidad recién salido de la heladera para largar ese AHHHHHHH desde el primer sorbo, al último trago.",
      "price": 150,
      "calories": 100,
      "totalfat": 0,
      "carb": 41,
      "protein": 0,
      "transfat": 0,
      "saturatedfat":0,
      "cholesterol": 0,
      "sodium": 30,
      "sugars": 41,
      "fiber": 0,
      "subcategoryId": 10,
      createdAt:new Date,
      updatedAt: new Date
  },
  {
      "title": "Agua",
      "images": "/36.jpg",
      "description": "Algo fresco para tanto picor. Refrescate con agua fresca para largar ese AHHHHHHH desde el primer sorbo, al último trago.",
      "price": 150,
      "calories": 0,
      "totalfat": 0,
      "carb": 0,
      "protein": 0,
      "transfat": 0,
      "saturatedfat":0,
      "cholesterol": 0,
      "sodium": 0,
      "sugars": 0,
      "fiber": 0,
      "subcategoryId": 11,
      createdAt:new Date,
      updatedAt: new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Products', products, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Products', null, {});
     
  }
};
