const platos = new Map()
const recetas = [];
let nextId = 0;
let nextIdR = 0;
export function loadData() {
    addPlato({
        nombre: "Croquetas", imagen: "https://th.bing.com/th/id/OIP.-0Bx3xmvZf-QNh-17tMW4AHaFz?pid=ImgDet&rs=1", descripcion: "Como muchos de vosotros ya sabréis, aunque pensemos muchas veces que la croqueta es un producto que viene de España, en realidad su origen es francés. Podríamos contar una breve historia de las croquetas, pero hoy vamos a extendernos un poco más. Las croquetas son muy populares en España, los Países Bajos y en Sicilia. La croqueta no llegó a península hasta finales del siglo XIX. Este aperitivo surgió en Francia, donde un aristócrata llamado Louis de Bechamel, que era el encargado de la cocina del rey Luis XIV. El padre de las croquetas trabajaba como recaudador de impuestos y era superintendente de la casa del duque de Orleans. Se dice qué él o alguno de sus ayudantes," +
            "creó la besamel.Esta salsa, en realidad fue resultado del perfeccionamiento de una salsa más antigua a base de crema, por François Pierre de la Varenne cocinero del marqués de Uxelles, a la que se la dedicó, como lo hacían a menudo los cocineros para la nobleza del tiempo.",
        origen: "Francia", tipo: "Aperitivo", precio: "3",
        recetas: [
            {
                nombreR: "Croquetas de Pollo",
                usuario: "@CocinaMaestro",
                ingredientes: "Mantequilla (50g), Harina de trigo (60g), Leche (500mL), Pollo cocido y desmenuzado (2 tazas), Huevo (2), Pan rallado, Sal, Pimienta al gusto",
                imagenR: "https://www.196flavors.com/wp-content/uploads/2021/10/croquetas-de-pollo-2fp-500x375.jpg",
                personas: "4",
                duracion: "3",
                pasos: "Cocina el pollo y desmenúzalo. Derrite la mantequilla en una sartén y añade la harina, removiendo para hacer una roux. Vierte la leche poco a poco, mezclando para evitar grumos. Añade el pollo desmenuzado. Cocina a fuego suave, sazona con sal y pimienta, y cocina hasta que la mezcla tenga consistencia. Refrigera la masa hasta que esté fría. Forma las croquetas, pásalas por huevo batido y pan rallado. Fríe las croquetas en aceite caliente hasta que estén doradas.",
                alergenos: "Carne y Lactosa",
                vegano: "NO"
            },

            {
                nombreR: "Croquetas de Jamón y Queso",
                usuario: "@ChefCreativo",
                ingredientes: "Mantequilla (40g), Harina de trigo (50g), Leche (450mL), Jamón serrano picado (50g), Queso cheddar rallado (1 taza), Huevo (1), Pan rallado, Pimienta negra al gusto",
                imagenR: "https://www.cocinatis.com/archivos/202207/CTIS0549-receta-croquetas-jamon.jpg",
                personas: "4",
                duracion: "2.5",
                pasos: "Pica el jamón serrano en trozos pequeños. Derrite la mantequilla en una sartén, agrega la harina y remueve para formar una roux. Añade la leche poco a poco, mezcla hasta obtener una salsa espesa. Agrega jamón y queso. Cocina a fuego lento, sazona con pimienta y cocina hasta que la mezcla tenga la consistencia adecuada. Refrigera la masa. Forma croquetas, pásalas por huevo batido y pan rallado. Fríe en aceite caliente hasta que estén doradas.",
                alergenos: "Carne y Lactosa",
                vegano: "NO"
            }
        ]
    });

    addPlato({
        nombre: "Sangria", imagen: "https://www.saluzzocr.com/wp-content/uploads/2020/08/sangria-3.jpg", descripcion: "El vino, para desgracia de muchos puristas, siempre ha sido mezclado. Antes de la sangría, del calimocho y del rebujito de feria, los vinos fortificados (oportos, madeiras y jereces) eran ingredientes nobles de la primera coctelería. Incluso las tradiciones ancestrales hablan de ello." +
            "Hecha a base de vino tinto (cuanto más bueno, mejor será el resultado), fruta natural troceada (no excesivamente madura y cortada a trozos un poco grandes), azúcar (mejor diluido en forma de almíbar) y algún licor. Algunos prefieren no agregar azúcar puesto que la fruta ya endulza suficiente.",
        origen: "España y Portugal", tipo: "Bebida", precio: "10",
        recetas: [
            {
                nombreR: "Sangría Clásica",
                usuario: "@BartenderExperto",
                ingredientes: "1 botella de vino tinto, 1/2 taza de brandy, 1/4 taza de azúcar, 1 naranja (en rodajas), 1 limón (en rodajas), 1 manzana (en cubos), 2 tazas de soda, Hielo",
                imagenR: "https://images.hola.com/imagenes/cocina/recetas/20200514167988/receta-sangria-clasica/0-823-899/sangria-t.jpg",
                personas: "6",
                duracion: "2",
                pasos: "En una jarra, combina el vino tinto, brandy y azúcar. Revuelve hasta que el azúcar se disuelva. Agrega las rodajas de naranja, limón y cubos de manzana. Refrigera por al menos 2 horas. Justo antes de servir, añade la soda y hielo.",
                alergenos: "Sin alergias posibles",
                vegano: "SÍ"
            },

            {
                nombreR: "Sangría de Vino Blanco",
                usuario: "@MixologoCreativo",
                ingredientes: "1 botella de vino blanco, 1/2 taza de licor de naranja, 1/4 taza de azúcar, 1 melocotón (en rodajas), 1 taza de uvas, 1 lima (en rodajas), 2 tazas de agua con gas, Hielo",
                imagenR: "https://enrilemoine.com/wp-content/uploads/2023/06/white-wine-sangria-by-enrilemoine-16.jpg",
                personas: "6",
                duracion: "1.5",
                pasos: "Mezcla el vino blanco, licor de naranja y azúcar en una jarra hasta que el azúcar se disuelva. Añade las rodajas de melocotón, uvas y lima. Refrigera por al menos 1 hora. Antes de servir, agrega el agua con gas y hielo.",
                alergenos: "Sin alergias posibles",
                vegano: "Sí"
            }
        ]
    });

    addPlato({
        nombre: "Tacos", imagen: "https://lp-cms-production.imgix.net/image_browser/tacos_mexico_G.jpg?auto=format&q=75", descripcion: "Los tacos tienen una historia tan rica como su sabor. Se cree que los antiguos mexicanos usaban tortillas como utensilios para comer diversos alimentos. La palabra taco probablemente provenga de la palabra náhuatl tlahco, que significa mitad o en el medio, ya que los primeros tacos consistían en tortillas rellenas dobladas por la mitad." +
            "Los tacos han recorrido un largo camino desde entonces. A lo largo de los siglos, se han diversificado en una amplia gama de variedades, desde los tradicionales tacos de carnitas y al pastor hasta opciones más modernas como los tacos de pescado o vegetarianos. A medida que la comida mexicana se extendió por el mundo, los tacos se convirtieron en un fenómeno global, adaptándose a los gustos locales pero manteniendo siempre esa esencia única que los caracteriza." +
            "Hoy en día, los tacos son mucho más que simplemente comida callejera. Han alcanzado el estatus de platillo gourmet en algunos lugares, con chefs creativos experimentando con ingredientes y presentaciones. Ya sea en un puesto callejero en México, en un elegante restaurante en Nueva York o en la cocina casera de cualquier persona, los tacos siguen siendo una deliciosa manifestación de la diversidad y la creatividad culinaria. ¡Y a quién no le encanta un buen taco!",
        origen: "Mexico", tipo: "Plato principal", precio: "3",
        recetas: [
            {
                nombreR: "Tacos de Carne Asada",
                usuario: "@CocinaMexicana",
                ingredientes: "1 libra de carne de res en tiras, 1 paquete de condimento para tacos, 1 taza de cebolla (picada), 1 taza de cilantro (picado), 1/2 taza de salsa de tomate, Tortillas de maíz",
                imagenR: "https://patijinich.com/es/wp-content/uploads/sites/3/2020/10/904-carne-asada-lorenza-500x500.jpg",
                personas: "4",
                duracion: "1.5",
                pasos: "Marinara la carne con el condimento para tacos. Cocina la carne y mezcla con cebolla, cilantro y salsa de tomate. Calienta las tortillas y rellénalas con la mezcla.",
                alergenos: "Carne",
                vegano: "NO"
            },

            {
                nombreR: "Tacos de Pescado",
                usuario: "@SaborMarino",
                ingredientes: "Filetes de pescado blanco, Harina de maíz, 1 taza de repollo rallado, Salsa de yogur, Limón (en rodajas), Tortillas de maíz",
                imagenR: "https://cdn0.recetasgratis.net/es/posts/6/5/9/tacos_de_pescado_estilo_ensenada_60956_orig.jpg",
                personas: "4",
                duracion: "1",
                pasos: "Cubre el pescado con harina de maíz y fríelo. Arma los tacos con repollo, salsa de yogur y rodajas de limón.",
                alergenos: "Pescado",
                vegano: "NO"
            }

        ]
    })

    addPlato({
        nombre: "Pizza", imagen: "http://media.syracuse.com/news/photo/2010/01/dominos-pizza-problem-nybz1jpg-462822621b2e04b3_large.jpg", descripcion: "¡La pizza, una deliciosa obra maestra italiana que ha conquistado el mundo! Su historia se remonta a la antigua Roma, donde se consumían panes planos cubiertos con diversas salsas, aceitunas y otros condimentos. Sin embargo, la verdadera precursora de la pizza tal como la conocemos hoy se originó en la ciudad de Nápoles, Italia, en el siglo XVII." +
            "En Nápoles, la pizza tomó forma con la adición de ingredientes como el tomate, que en ese momento era considerado exótico. La Margherita, una de las pizzas más clásicas, se dice que fue creada en honor a la reina Margarita de Saboya en 1889, con sus colores (rojo del tomate, blanco de la mozzarella y verde del albahaca) representando la bandera italiana." +
            "Con la emigración italiana a Estados Unidos en el siglo XIX y principios del XX, la pizza cruzó el Atlántico y se convirtió en un fenómeno internacional. Se adaptó a diferentes gustos y estilos, dando lugar a la pizza americana, con sus diversas coberturas y masas." +
            "Hoy en día, la pizza es amada en todo el mundo. Desde las auténticas pizzerías napolitanas hasta las franquicias internacionales, la pizza ha evolucionado, pero su esencia deliciosa ha perdurado a lo largo de los siglos. ¡Una verdadera historia de sabor que une a personas de todos los rincones del planeta!",
        origen: "Italia", tipo: "Plato principal", precio: "2",
        recetas: [
            {
                nombreR: "Pizza Margarita",
                usuario: "@PizzaLover",
                ingredientes: "Masa de pizza, Salsa de tomate, Queso mozzarella, Tomates cherry, Albahaca fresca, Aceite de oliva, Sal",
                imagenR: "https://cdn.colombia.com/gastronomia/2011/08/25/pizza-margarita-3684-1.jpg",
                personas: "4",
                duracion: "2",
                pasos: "Estira la masa de pizza y extiende la salsa de tomate. Coloca rodajas de mozzarella y tomates cherry cortados por la mitad. Hornea hasta que la masa esté dorada y el queso burbujeante. Espolvorea con hojas de albahaca fresca y rocía con aceite de oliva. Agrega sal al gusto.",
                alergenos: "Lactosa",
                vegano: "NO"
            }
        ]
    })

    addPlato({
        nombre: "Paella", imagen: "https://www.villarrazo.com/wp-content/uploads/2020/07/paella-1024x684.jpg", descripcion: "Su origen se encuentra en la región de Valencia, en la costa este de España, aunque la historia exacta puede tener varias interpretaciones." +

            "Se dice que la paella tiene sus raíces en las áreas rurales de Valencia, donde los campesinos preparaban comidas sencillas al aire libre. El plato original, conocido como paella en valenciano, se cocinaba sobre fuego abierto y estaba compuesto por ingredientes locales como conejo, pollo, judías verdes y arroz. La paellera, la sartén ancha y poco profunda utilizada para cocinar la paella, también desempeña un papel importante en la historia del plato." +
            "A medida que la paella ganó popularidad, se adaptó a diferentes regiones y gustos. En la costa, se añadían mariscos frescos, dando origen a la famosa paella de mariscos. En la ciudad de Valencia, la receta tradicional se mantiene fiel a sus raíces agrícolas." +
            "Con el tiempo, la paella se convirtió en un símbolo de la cocina española y se extendió por todo el mundo. Su preparación se ha modernizado, y hoy en día existen muchas variantes, pero la auténtica paella valenciana sigue siendo un tributo a la tradición y a los sabores frescos de la región. ¡Una deliciosa olla de historia y sabor que ha conquistado los corazones y estómagos de muchas culturas!",
        origen: "España", tipo: "Plato principal", precio: "5",
        recetas: [
            {
                nombreR: "Paella de Mariscos",
                usuario: "@ChefPaellero",
                ingredientes: "Arroz (2 tazas), Caldo de pescado (4 tazas), Aceite de oliva (4 cucharadas), Ajo (3 dientes, picados), Cebolla (1, picada), Pimiento rojo (1, en tiras), Tomates (2, pelados y picados), Azafrán (1 pizca), Pimentón dulce (1 cucharadita), Calamares (200g, en anillas), Gambas (200g, peladas), Mejillones (500g, limpios), Sal y pimienta al gusto",
                imagenR: "https://imag.bonviveur.com/paella-marisco.jpg",
                personas: "6",
                duracion: "1",
                pasos: "Sofríe el ajo, cebolla y pimiento en aceite de oliva. Agrega el arroz y rehoga. Vierte el caldo de pescado caliente. Añade azafrán, pimentón y tomates. Cocina a fuego medio. Incorpora los calamares y cocina por 10 minutos. Agrega gambas y mejillones. Cocina hasta que el arroz esté tierno y los mariscos cocidos. Sazona con sal y pimienta.",
                alergenos: "Pescado",
                vegano: "NO"
            }
        ]
    })

    addPlato({
        nombre: "Ensalada", imagen: "https://th.bing.com/th/id/R.25d661abbc741987a0f958063e46f529?rik=oP8B0WxmqTpq%2fQ&riu=http%3a%2f%2fwww.cadenadial.com%2fwp-content%2fuploads%2f2014%2f11%2fimagen-plato-saludable.jpg&ehk=qK8nlH9JgdsLJABpuTmhawVsdVSOFKy0eQHS3QKxkSI%3d&risl=&pid=ImgRaw&r=0",
        descripcion: "La ensalada, un plato fresco y saludable que ha sido parte de la dieta humana desde tiempos inmemorables. Aunque hoy en día asociamos las ensaladas con la alimentación saludable, su historia es rica y variada." +
            "Los antiguos romanos y griegos eran conocidos por consumir platos que consistían en verduras crudas aderezadas con aceite y vinagre, una práctica que sentó las bases para lo que conocemos como ensalada. Durante la Edad Media, las ensaladas evolucionaron para incluir una variedad de ingredientes, desde hierbas frescas hasta frutas." +
            "La ensalada moderna, tal como la conocemos, se popularizó en el siglo XIX. Con el auge de la cocina francesa, las mezclas de lechugas, verduras y aderezos se convirtieron en parte integral de la gastronomía europea. A finales del siglo XIX y principios del XX, las ensaladas se volvieron populares en Estados Unidos, con la introducción de aderezos como el ranch y la creación de ensaladas más elaboradas." +
            "Hoy en día, las ensaladas son un lienzo culinario diverso. Desde las clásicas ensaladas César y Caprese hasta combinaciones más modernas y creativas, las ensaladas han pasado de ser simples acompañamientos a platos principales llenos de color, textura y sabor. ¡Una historia de frescura que ha resistido la prueba del tiempo y se adapta a los gustos cambiantes de la sociedad!",
        origen: "Grecia e Italia", tipo: "Plato principal", precio: "4",
        recetas: [
            {
                nombreR: "Ensalada César",
                usuario: "@ChefEnsaladas",
                ingredientes: "Lechuga romana (1 cabeza, picada), Pollo a la parrilla (2 pechugas, en tiras), Pan tostado (2 rebanadas, en cubos), Queso parmesano (1/2 taza, rallado), Salsa César, Sal y pimienta al gusto",
                imagenR: "https://cdn0.recetasgratis.net/es/posts/1/4/0/ensalada_cesar_original_46041_orig.jpg",
                personas: "4",
                duracion: "0.5",
                pasos: "Mezcla la lechuga con pollo a la parrilla, pan tostado y queso parmesano. Añade la salsa César y mezcla bien. Sazona con sal y pimienta al gusto. Sirve fría.",
                alergenos: "Lactosa",
                vegano: "NO"
            }
        ]
    })

    addPlato({
        nombre: "Tiramisú", imagen: "https://th.bing.com/th/id/OIP.P68JotRqfNNb6c-fVroj4QHaE8?pid=ImgDet&rs=1", descripcion: "El tiramisú, ese postre italiano irresistible, tiene sus raíces en la región de Véneto. Su nombre significa levántame en italiano, sugiriendo la energía que proporciona. Capas de bizcocho empapado en café, mascarpone cremoso y un toque de cacao crean una combinación celestial. Su origen se atribuye a la década de 1960, cuando comenzó a" +
            "popularizarse en restaurantes y hogares italianos. Desde entonces, ha conquistado paladares en todo el mundo, convirtiéndose en un clásico que trasciende fronteras culinarias. Este placer decadente y reconfortante eleva cualquier comida, cerrando con dulzura y sofisticación la experiencia gastronómica. ¡Una joya de la repostería que sigue endulzando momentos especiales!",
        origen: "Italia", tipo: "Postre", precio: "3",
        recetas: [
            {
                nombreR: "Tiramisú",
                usuario: "@DulceSueños",
                ingredientes: "Café fuerte (1 taza), Licor de café (2 cucharadas), Yemas de huevo (4), Azúcar (1 taza), Queso mascarpone (250g), Crema para batir (1 taza), Bizcochos de soletilla, Cacao en polvo",
                imagenR: "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/08/tiramisu-postre-italiano.jpg",
                personas: "8",
                duracion: "4",
                pasos: "Mezcla café y licor. Bate las yemas con azúcar hasta obtener una crema. Agrega mascarpone y crema batida. Remoja los bizcochos en la mezcla de café. Alterna capas de bizcochos y crema en un molde. Refrigera por al menos 4 horas. Espolvorea con cacao antes de servir.",
                alergenos: "Lactosa",
                vegano: "NO"
            }
        ]
    })

    addPlato({
        nombre: "Batidos", imagen: "https://th.bing.com/th/id/OIP.wUlXrORlStkR9i_CeXrOHAHaFA?pid=ImgDet&rs=1", descripcion: "Los batidos, esas deliciosas mezclas líquidas que hacen felices a los amantes de lo refrescante y nutritivo. Su historia se entrelaza con la invención de las licuadoras en la década de 1920. En sus inicios, los batidos eran simples combinaciones de frutas, leche y azúcar." +
            "Con el tiempo, evolucionaron y se diversificaron. La década de 1960 vio la popularización de los batidos en establecimientos especializados. Las décadas posteriores trajeron la incorporación de ingredientes saludables como espinacas, proteínas y superalimentos." +
            "Hoy en día, los batidos son una opción versátil y personalizable. Desde batidos verdes energizantes hasta indulgentes mezclas de frutas con helado, ofrecen una variedad infinita de sabores y nutrientes. Ya sea como un desayuno rápido, un refrigerio saludable o un placer indulgente, los batidos han encontrado su lugar en la rutina diaria de muchos, brindando sabor y vitalidad en cada sorbo. ¡Una oda líquida a la frescura y la creatividad culinaria!",
        origen: "Estados Unidos", tipo: "Bebidas", precio: "2",
        recetas: [
            {
                nombreR: "Batido de Frutas",
                usuario: "@SmoothieMaster",
                ingredientes: "Plátano (1, en rodajas), Fresas (1 taza), Yogur natural (1 taza), Miel (2 cucharadas), Hielo",
                imagenR: "https://cecotec.es/recetas/wp-content/uploads/2019/07/Mambo-batido-multifrutas.jpg",
                personas: "2",
                duracion: "0.25",
                pasos: "Coloca plátano, fresas, yogur y miel en una licuadora. Agrega hielo. Mezcla hasta obtener una consistencia suave. Sirve frío.",
                alergenos: "Lactosa",
                vegano: "NO"
            }
        ]
    })

    addPlato({
        nombre: "San Francisco", imagen: "https://img-aws.ehowcdn.com/640/cme/photography.prod.demandstudios.com/3f4d7692-01b1-4ec0-af12-deac9d49178e.jpg", descripcion: "La historia del cóctel San Francisco se remonta a la década de 1940. Aunque hay varias versiones sobre su origen, la más aceptada es que fue creado en el famoso Hotel Fairmont en San Francisco, California." +
            "Una de las historias más conocidas sobre la creación del cóctel San Francisco es que fue inventado en honor a la Conferencia de las Naciones Unidas sobre Organización Internacional (ONU) que tuvo lugar en San Francisco en 1945. Durante la conferencia, se dice que los delegados de diferentes países se reunieron en el Hotel Fairmont y el barman del hotel creó esta bebida para conmemorar el evento.",
        origen: "Estados Unidos", tipo: "Bebidas", precio: "4",
        recetas: [
            {
                nombreR: "Cóctel San Francisco",
                usuario: "@BartenderCreativo",
                ingredientes: "Zumo de naranja (1 taza), Zumo de piña (1/2 taza), Granadina (1 cucharada), Hielo",
                imagenR: "https://entrenosotros.consum.es/public/Image/2023/7/1690370803coctel-san-francisco.jpg",
                personas: "1",
                duracion: "0.25",
                pasos: "Mezcla los zumos de naranja y piña en un vaso con hielo. Vierte la granadina despacio para que se deposite en el fondo. No revuelvas y sirve con una rodaja de naranja para decorar.",
                alergenos: "Sin alergias posibles",
                vegano: "Sí"
            }
        ]
    })

    addPlato({
        nombre: "Tortitas", imagen: "https://th.bing.com/th/id/OIP.Obt_h74xggz2JD7oI2HQIgHaE3?pid=ImgDet&rs=1", descripcion: "La idea de hacer tortitas o panqueques tiene una larga historia, y se cree que las versiones tempranas de este plato se remontan a las civilizaciones antiguas. Por ejemplo, los griegos y los romanos consumían una especie de panqueque plano hecho con harina, leche y huevos." +
            "Durante la Edad Media, los panqueques se volvieron populares en Europa, y se les asociaba a menudo con celebraciones y festividades, como el Martes de Carnaval antes de la Cuaresma. En esta época, los panqueques también eran conocidos como flapjacks. Por otro lado, los colonizadores europeos llevaron la tradicción de hacer tortitas a América. " +
            "A lo largo del siglo XX, las tortitas se convirtieron en un desayuno común en muchos países occidentales.",
        origen: "Europa", tipo: "Postre", precio: "4",
        recetas: [
            {
                nombreR: "Tortitas de Avena",
                usuario: "@DesayunoSaludable",
                ingredientes: "Avena (1 taza), Leche (1 taza), Huevo (1), Miel (2 cucharadas), Esencia de vainilla (1 cucharadita), Levadura en polvo (1 cucharadita), Sal (1 pizca)",
                imagenR: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d646711060095808c655dfa92c2216ae/Derivates/1f8c7a959e061884501d1510688420bf636b96e7.jpg",
                personas: "2",
                duracion: "0.25",
                pasos: "Mezcla la avena con la leche y deja reposar 10 minutos. Añade huevo, miel, esencia de vainilla, levadura y sal. Mezcla bien. Cocina cucharadas de masa en una sartén caliente hasta que aparezcan burbujas. Voltea y cocina el otro lado.",
                alergenos: "Lactosa",
                vegano: "NO"
            }
        ]
    })

    addPlato({
        nombre: "Miguelitos", imagen: "https://imag.bonviveur.com/miguelitos-de-la-roda-rellenos-de-crema.jpg", descripcion: "Los miguelitos de La Roda son un delicioso postre español originario de La Roda, una localidad situada en la provincia de Albacete, en la región de Castilla-La Mancha. Su historia se remonta a mediados del siglo XX y está vinculada a la tradición de la pastelería local." +
            "La historia específica de los miguelitos puede variar según la versión, pero generalmente se atribuye a la creatividad de pasteleros locales que buscaban innovar y ofrecer algo único. Se dice que el nombre miguelitos se originó en honor al patrón de la localidad, San Miguel.",
        origen: "España", tipo: "Postre", precio: "5",
        recetas: [
            {
                nombreR: "Miguelitos de Crema",
                usuario: "@PasteleriaArte",
                ingredientes: "Hoja de hojaldre (1 lámina), Crema pastelera (500g), Azúcar glas (para espolvorear)",
                imagenR: "https://cdn0.recetasgratis.net/es/posts/9/5/5/miguelitos_de_crema_74559_orig.jpg",
                personas: "8",
                duracion: "0.5",
                pasos: "Precalienta el horno a 200°C. Extiende la lámina de hojaldre y corta en tiras. Hornea hasta que estén doradas. Deja enfriar y corta por la mitad. Rellena con crema pastelera. Espolvorea con azúcar glas.",
                alergenos: "Lactosa",
                vegano: "NO"
            }
        ]
    })

    addPlato({
        nombre: "Tortilla", imagen: "https://s3.abcstatics.com/media/bienestar/2020/05/22/tortilla-patatas-k9tF--620x349@abc.jpeg", descripcion: "Si nos centramos en la tortilla española, o tortilla de patatas, tiene una historia más reciente y se remonta al siglo XIX. La versión más conocida de esta tortilla lleva patatas (papas), huevos y cebollas. Se dice que la tortilla de patatas se originó en" +
            "la región de Extremadura o Navarra y se popularizó en toda España. Es un plato versátil que se ha convertido en un elemento básico de la cocina española. Por otro lado, si nos fijamos en la tortilla francesa, también conocida como omelette en francés, tiene sus raíces en Francia y es un plato fundamental de la cocina francesa. Su origen se remonta a tiempos antiguos, y su popularidad ha perdurado hasta la actualidad." +
            "La omelette francesa se ha convertido en un plato icónico y se sirve tanto como un desayuno sustancioso como en comidas más elegantes.",
        origen: "España/Francia", tipo: "Plato principal", precio: "6",
        recetas: [
            {
                nombreR: "Tortilla Española",
                usuario: "@CocinaTradicional",
                ingredientes: "Patatas (4, en rodajas), Huevos (6), Cebolla (1, picada), Aceite de oliva (4 cucharadas), Sal al gusto",
                imagenR: "https://s1.eestatic.com/2021/10/30/cocinillas/recetas/623450882_213326527_1706x960.jpg",
                personas: "4",
                duracion: "0.5",
                pasos: "Fríe las patatas y cebolla en aceite de oliva hasta que estén tiernas. Bate los huevos y sazona con sal. Añade las patatas y cebolla escurridas. Vierte la mezcla en una sartén y cocina hasta que cuaje por un lado. Voltea y cocina el otro lado.",
                alergenos: "Sin alergias posibles",
                vegano: "NO"
            }
        ]
    })

    addPlato({
        nombre: "Arepas", imagen: "https://imag.bonviveur.com/arepas-venezolanas-caseras-rellenas.jpg", descripcion: "Las arepas son un alimento fundamental en la cocina de varios países latinoamericanos, especialmente en Venezuela y Colombia. Estas deliciosas piezas de masa de maíz han sido parte de la dieta tradicional durante siglos." +
            "Las arepas tienen sus raíces en las culturas indígenas precolombinas de América Latina. Las poblaciones indígenas, especialmente en la región andina y en lo que hoy es Venezuela y Colombia, ya estaban cultivando y consumiendo maíz mucho antes de la llegada de los colonizadores europeos.",
        origen: "América Latina", tipo: "Plato principal", precio: "2",
        recetas: [
            {
                nombreR: "Arepas Venezolanas",
                usuario: "@SaborVenezolano",
                ingredientes: "Harina de maíz precocida (2 tazas), Agua (2 tazas), Sal al gusto, Relleno al gusto (queso, jamón, aguacate, etc.)",
                imagenR: "https://www.paulinacocina.net/wp-content/uploads/2022/05/arepas-venezolanas-receta.jpg",
                personas: "4",
                duracion: "1",
                pasos: "Mezcla la harina de maíz con el agua y la sal hasta obtener una masa homogénea. Forma arepas y cocina en un comal caliente hasta que estén doradas. Abre por la mitad y rellena con tus ingredientes favoritos.",
                alergenos: "Sin alergias posibles",
                vegano: "NO"
            }
        ]
    })

    addPlato({
        nombre: "Rollitos de primavera", imagen: "https://cdn2.cocinadelirante.com/sites/default/files/images/2018/04/receta-rollitos-primavera-con-tortilla-de-harina.jpg",
        descripcion: "Los rollitos de primavera tienen sus raíces en la cocina china, donde se conocen como chūn juǎn. La palabra chūn significa primavera, lo que sugiere que estos rollos están asociados con la estación. Aunque la relación exacta con la primavera no está clara, se cree que el nombre puede estar vinculado a las festividades asociadas con el Año Nuevo chino." +
            "Se cree que los rollitos de primavera existen desde hace siglos en China. Originalmente, estos rollos eran más bien crudos, hechos con ingredientes frescos y luego cocidos al vapor. Con el tiempo, la técnica de freírlos se volvió popular, lo que dio lugar a la versión más conocida y difundida en Occidente.",
        origen: "Asia", tipo: "Aperitivo", precio: "3",
        recetas: [
            {
                nombreR: "Rollitos Primavera",
                usuario: "@ChefAsiatico",
                ingredientes: "Papel de arroz (10 hojas), Fideos de arroz (100g, cocidos), Zanahoria (1, rallada), Pepino (1, cortado en tiras), Lechuga (4 hojas), Langostinos cocidos (200g, pelados), Salsa de soja (para dip)",
                imagenR: "https://cdn.recetasderechupete.com/wp-content/uploads/2014/07/rollitos_primavera.jpg",
                personas: "4",
                duracion: "1.5",
                pasos: "Hidrata las hojas de papel de arroz según las indicaciones del paquete. Rellena cada hoja con fideos de arroz, zanahoria, pepino, lechuga y langostinos. Dobla los extremos y enrolla. Sirve con salsa de soja.",
                alergenos: "Sin alergias posibles",
                vegano: "SÍ"
            }
        ]
    })
}

export function addPlato(plato) {
    let id = nextId++;
    plato.id = id.toString();
    platos.set(plato.id, plato);
    return plato.id;
}
export function deletePlato(id) {
    platos.delete(id);
}

export function divPlatos(platos) {
    let platos1 = new Array();
    let platos2 = new Array();
    let i = 0
    for (i; i < platos.length; i++) {
        if (i % 2 === 0) {
            platos1.push(platos[i]);
        }
        else {
            platos2.push(platos[i]);
        }
    }
    return {
        platos1: [...platos1.values()],
        platos2: [...platos2.values()]
    };
}

export function getPlato(id) {
    return platos.get(id);
}

export function getPlatos(from, to) {
    let values = [...platos.values()];
    if (from !== undefined) {
        if ((from + 2) === (platos.size)) {
            return {
                platos1: values.slice(from, from + 1),
                platos2: values.slice(from + 1, from + 2)
            }
        }
        else {
            return {
                platos1: values.slice(from, from + 2),
                platos2: values.slice(from + 2, to)
            }
        }
    } else {
        return values;
    }
}
export function setNombre(plato, nombre) {
    plato.nombre = nombre
}
export function setDes(plato, descripcion) {
    plato.descripcion = descripcion
}
export function setIm(plato, imagen) {
    plato.imagen = imagen
}
export function setOrigen(plato, origen) {
    plato.origen = origen
}
export function setTipo(plato, tipo) {
    plato.tipo = tipo
}
export function setPrecio(plato, precio) {
    plato.precio = precio
}
export function editarCampos(platoN, plato) {
    if (platoN.nombre !== plato.nombre) {
        setNombre(plato, platoN.nombre);
    }
    if (platoN.imagen !== plato.imagen) {
        setIm(plato, platoN.imagen);
    }
    if (platoN.descripcion !== plato.descripcion) {
        setDes(plato, platoN.descripcion);
    }
    if (platoN.origen !== plato.origen) {
        setOrigen(plato, platoN.origen);
    }
    if (platoN.tipo !== plato.tipo) {
        setTipo(plato, platoN.tipo);
    }
    if (platoN.precio !== plato.precio) {
        setPrecio(plato, platoN.precio);
    }
}
export function aniadirReceta(id, nuevaReceta, plato) {
    if (platos.has(id)) {
        const platoN = platos.get(id);
        if (platoN.recetas == undefined) {
            platoN.recetas = [];
        }
        platoN.recetas.push(nuevaReceta);
    }
}

export function getBuscados(buscado) {
    let platosBuscados = new Array();
    for (let key of platos.keys()) {
        if ((platos.get(key).nombre).includes(buscado)) {
            let plato = platos.get(key);
            plato.id = key;
            platosBuscados.push(plato);
        }
    }
    return platosBuscados;
}

export function getFiltradosO(fOrigen) {
    let platosFiltrados = new Array();
    for (let key of platos.keys()) {
        if ((platos.get(key).origen).includes(fOrigen)) {
            let plato = platos.get(key);
            plato.id = key;
            platosFiltrados.push(plato);
        }
    }
    return platosFiltrados;
}
export function getFiltradosT(fTipo) {
    let platosFiltrados = new Array();
    for (let key of platos.keys()) {
        if ((platos.get(key).tipo).includes(fTipo)) {
            let plato = platos.get(key);
            plato.id = key;
            platosFiltrados.push(plato);
        }
    }
    return platosFiltrados;
}
export function getFiltradosP(fPrecio) {
    let platosFiltrados = new Array();
    for (let key of platos.keys()) {
        if ((platos.get(key).precio)<=(fPrecio)) {
            let plato = platos.get(key);
            plato.id = key;
            platosFiltrados.push(plato);
        }
    }
    return platosFiltrados;
}
loadData();