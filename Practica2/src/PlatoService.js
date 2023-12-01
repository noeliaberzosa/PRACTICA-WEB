const platos = new Map()
let nextId = 0;

addPlato({
    nombre: "Croquetas", imagen: "https://th.bing.com/th/id/OIP.-0Bx3xmvZf-QNh-17tMW4AHaFz?pid=ImgDet&rs=1", descripcion: "Como muchos de vosotros ya sabréis, aunque pensemos muchas veces que la croqueta es un producto que viene de España, en realidad su origen es francés. Podríamos contar una breve historia de las croquetas, pero hoy vamos a extendernos un poco más. Las croquetas son muy populares en España, los Países Bajos y en Sicilia. La croqueta no llegó a península hasta finales del siglo XIX. Este aperitivo surgió en Francia, donde un aristócrata llamado Louis de Bechamel, que era el encargado de la cocina del rey Luis XIV. El padre de las croquetas trabajaba como recaudador de impuestos y era superintendente de la casa del duque de Orleans. Se dice qué él o alguno de sus ayudantes,"+
            "creó la besamel.Esta salsa, en realidad fue resultado del perfeccionamiento de una salsa más antigua a base de crema, por François Pierre de la Varenne cocinero del marqués de Uxelles, a la que se la dedicó, como lo hacían a menudo los cocineros para la nobleza del tiempo.",
    origen:"Francia", tipo: "Aperitivo", precio:"3 "});

addPlato({
    nombre: "Sangria", imagen: "https://www.saluzzocr.com/wp-content/uploads/2020/08/sangria-3.jpg", descripcion:"El vino, para desgracia de muchos puristas, siempre ha sido mezclado. Antes de la sangría, del calimocho y del rebujito de feria, los vinos fortificados (oportos, madeiras y jereces) eran ingredientes nobles de la primera coctelería. Incluso las tradiciones ancestrales hablan de ello."+
    "Hecha a base de vino tinto (cuanto más bueno, mejor será el resultado), fruta natural troceada (no excesivamente madura y cortada a trozos un poco grandes), azúcar (mejor diluido en forma de almíbar) y algún licor. Algunos prefieren no agregar azúcar puesto que la fruta ya endulza suficiente.",
    origen:"España y Portugal", tipo: "Bebida", precio: "10"});

addPlato({
    nombre: "Tacos", imagen: "https://lp-cms-production.imgix.net/image_browser/tacos_mexico_G.jpg?auto=format&q=75", descripcion: "Los tacos tienen una historia tan rica como su sabor. Se cree que los antiguos mexicanos usaban tortillas como utensilios para comer diversos alimentos. La palabra taco probablemente provenga de la palabra náhuatl tlahco, que significa mitad o en el medio, ya que los primeros tacos consistían en tortillas rellenas dobladas por la mitad."+
    "Los tacos han recorrido un largo camino desde entonces. A lo largo de los siglos, se han diversificado en una amplia gama de variedades, desde los tradicionales tacos de carnitas y al pastor hasta opciones más modernas como los tacos de pescado o vegetarianos. A medida que la comida mexicana se extendió por el mundo, los tacos se convirtieron en un fenómeno global, adaptándose a los gustos locales pero manteniendo siempre esa esencia única que los caracteriza."+    
    "Hoy en día, los tacos son mucho más que simplemente comida callejera. Han alcanzado el estatus de platillo gourmet en algunos lugares, con chefs creativos experimentando con ingredientes y presentaciones. Ya sea en un puesto callejero en México, en un elegante restaurante en Nueva York o en la cocina casera de cualquier persona, los tacos siguen siendo una deliciosa manifestación de la diversidad y la creatividad culinaria. ¡Y a quién no le encanta un buen taco!",
    origen:"Mexico", tipo: "Plato principal", precio: "3"})

addPlato({
    nombre: "Pizza", imagen: "http://media.syracuse.com/news/photo/2010/01/dominos-pizza-problem-nybz1jpg-462822621b2e04b3_large.jpg", descripcion: "¡La pizza, una deliciosa obra maestra italiana que ha conquistado el mundo! Su historia se remonta a la antigua Roma, donde se consumían panes planos cubiertos con diversas salsas, aceitunas y otros condimentos. Sin embargo, la verdadera precursora de la pizza tal como la conocemos hoy se originó en la ciudad de Nápoles, Italia, en el siglo XVII."+
    "En Nápoles, la pizza tomó forma con la adición de ingredientes como el tomate, que en ese momento era considerado exótico. La Margherita, una de las pizzas más clásicas, se dice que fue creada en honor a la reina Margarita de Saboya en 1889, con sus colores (rojo del tomate, blanco de la mozzarella y verde del albahaca) representando la bandera italiana."+
    "Con la emigración italiana a Estados Unidos en el siglo XIX y principios del XX, la pizza cruzó el Atlántico y se convirtió en un fenómeno internacional. Se adaptó a diferentes gustos y estilos, dando lugar a la pizza americana, con sus diversas coberturas y masas."+
    "Hoy en día, la pizza es amada en todo el mundo. Desde las auténticas pizzerías napolitanas hasta las franquicias internacionales, la pizza ha evolucionado, pero su esencia deliciosa ha perdurado a lo largo de los siglos. ¡Una verdadera historia de sabor que une a personas de todos los rincones del planeta!",
    origen:"Italia", tipo: "Plato principal", precio: "2"})

addPlato({
    nombre: "Paella", imagen: "https://www.villarrazo.com/wp-content/uploads/2020/07/paella-1024x684.jpg", descripcion: "Su origen se encuentra en la región de Valencia, en la costa este de España, aunque la historia exacta puede tener varias interpretaciones."+

    "Se dice que la paella tiene sus raíces en las áreas rurales de Valencia, donde los campesinos preparaban comidas sencillas al aire libre. El plato original, conocido como paella en valenciano, se cocinaba sobre fuego abierto y estaba compuesto por ingredientes locales como conejo, pollo, judías verdes y arroz. La paellera, la sartén ancha y poco profunda utilizada para cocinar la paella, también desempeña un papel importante en la historia del plato."+       
    "A medida que la paella ganó popularidad, se adaptó a diferentes regiones y gustos. En la costa, se añadían mariscos frescos, dando origen a la famosa paella de mariscos. En la ciudad de Valencia, la receta tradicional se mantiene fiel a sus raíces agrícolas."+        
    "Con el tiempo, la paella se convirtió en un símbolo de la cocina española y se extendió por todo el mundo. Su preparación se ha modernizado, y hoy en día existen muchas variantes, pero la auténtica paella valenciana sigue siendo un tributo a la tradición y a los sabores frescos de la región. ¡Una deliciosa olla de historia y sabor que ha conquistado los corazones y estómagos de muchas culturas!",
    origen: "España", tipo: "Plato principal", precio: "5"})

addPlato({
    nombre: "Ensalada", imagen: "https://th.bing.com/th/id/R.25d661abbc741987a0f958063e46f529?rik=oP8B0WxmqTpq%2fQ&riu=http%3a%2f%2fwww.cadenadial.com%2fwp-content%2fuploads%2f2014%2f11%2fimagen-plato-saludable.jpg&ehk=qK8nlH9JgdsLJABpuTmhawVsdVSOFKy0eQHS3QKxkSI%3d&risl=&pid=ImgRaw&r=0",
    descripcion: "La ensalada, un plato fresco y saludable que ha sido parte de la dieta humana desde tiempos inmemorables. Aunque hoy en día asociamos las ensaladas con la alimentación saludable, su historia es rica y variada."+
    "Los antiguos romanos y griegos eran conocidos por consumir platos que consistían en verduras crudas aderezadas con aceite y vinagre, una práctica que sentó las bases para lo que conocemos como ensalada. Durante la Edad Media, las ensaladas evolucionaron para incluir una variedad de ingredientes, desde hierbas frescas hasta frutas."+
    "La ensalada moderna, tal como la conocemos, se popularizó en el siglo XIX. Con el auge de la cocina francesa, las mezclas de lechugas, verduras y aderezos se convirtieron en parte integral de la gastronomía europea. A finales del siglo XIX y principios del XX, las ensaladas se volvieron populares en Estados Unidos, con la introducción de aderezos como el ranch y la creación de ensaladas más elaboradas."+
    "Hoy en día, las ensaladas son un lienzo culinario diverso. Desde las clásicas ensaladas César y Caprese hasta combinaciones más modernas y creativas, las ensaladas han pasado de ser simples acompañamientos a platos principales llenos de color, textura y sabor. ¡Una historia de frescura que ha resistido la prueba del tiempo y se adapta a los gustos cambiantes de la sociedad!",
    origen: "Grecia e Italia", tipo: "Plato principal", precio: "4"})

addPlato({
    nombre: "Tiramisú", imagen: "https://th.bing.com/th/id/OIP.P68JotRqfNNb6c-fVroj4QHaE8?pid=ImgDet&rs=1", descripcion:"El tiramisú, ese postre italiano irresistible, tiene sus raíces en la región de Véneto. Su nombre significa levántame en italiano, sugiriendo la energía que proporciona. Capas de bizcocho empapado en café, mascarpone cremoso y un toque de cacao crean una combinación celestial. Su origen se atribuye a la década de 1960, cuando comenzó a"+ 
    "popularizarse en restaurantes y hogares italianos. Desde entonces, ha conquistado paladares en todo el mundo, convirtiéndose en un clásico que trasciende fronteras culinarias. Este placer decadente y reconfortante eleva cualquier comida, cerrando con dulzura y sofisticación la experiencia gastronómica. ¡Una joya de la repostería que sigue endulzando momentos especiales!",
    origen:"Italia", tipo: "Postre", precio:"3"})

addPlato({
    nombre: "Batidos", imagen: "https://th.bing.com/th/id/OIP.wUlXrORlStkR9i_CeXrOHAHaFA?pid=ImgDet&rs=1", descripcion: "Los batidos, esas deliciosas mezclas líquidas que hacen felices a los amantes de lo refrescante y nutritivo. Su historia se entrelaza con la invención de las licuadoras en la década de 1920. En sus inicios, los batidos eran simples combinaciones de frutas, leche y azúcar."+
    "Con el tiempo, evolucionaron y se diversificaron. La década de 1960 vio la popularización de los batidos en establecimientos especializados. Las décadas posteriores trajeron la incorporación de ingredientes saludables como espinacas, proteínas y superalimentos."+
    "Hoy en día, los batidos son una opción versátil y personalizable. Desde batidos verdes energizantes hasta indulgentes mezclas de frutas con helado, ofrecen una variedad infinita de sabores y nutrientes. Ya sea como un desayuno rápido, un refrigerio saludable o un placer indulgente, los batidos han encontrado su lugar en la rutina diaria de muchos, brindando sabor y vitalidad en cada sorbo. ¡Una oda líquida a la frescura y la creatividad culinaria!",
    origen: "Estados Unidos", tipo: "Bebidas", precio:"2"})

addPlato({
    nombre: "San Francisco", imagen: "https://img-aws.ehowcdn.com/640/cme/photography.prod.demandstudios.com/3f4d7692-01b1-4ec0-af12-deac9d49178e.jpg", descripcion: "La historia del cóctel San Francisco se remonta a la década de 1940. Aunque hay varias versiones sobre su origen, la más aceptada es que fue creado en el famoso Hotel Fairmont en San Francisco, California."+
    "Una de las historias más conocidas sobre la creación del cóctel San Francisco es que fue inventado en honor a la Conferencia de las Naciones Unidas sobre Organización Internacional (ONU) que tuvo lugar en San Francisco en 1945. Durante la conferencia, se dice que los delegados de diferentes países se reunieron en el Hotel Fairmont y el barman del hotel creó esta bebida para conmemorar el evento.",
    origen: "Estados Unidos", tipo: "Bebidas", precio:"4"})

addPlato({
    nombre: "Tortitas", imagen: "https://th.bing.com/th/id/OIP.Obt_h74xggz2JD7oI2HQIgHaE3?pid=ImgDet&rs=1", descripcion: "La idea de hacer tortitas o panqueques tiene una larga historia, y se cree que las versiones tempranas de este plato se remontan a las civilizaciones antiguas. Por ejemplo, los griegos y los romanos consumían una especie de panqueque plano hecho con harina, leche y huevos."+
    "Durante la Edad Media, los panqueques se volvieron populares en Europa, y se les asociaba a menudo con celebraciones y festividades, como el Martes de Carnaval antes de la Cuaresma. En esta época, los panqueques también eran conocidos como flapjacks. Por otro lado, los colonizadores europeos llevaron la tradicción de hacer tortitas a América. "+
    "A lo largo del siglo XX, las tortitas se convirtieron en un desayuno común en muchos países occidentales.",
    origen: "Europa", tipo: "Postre", precio:"4"})

addPlato({
    nombre: "Miguelitos", imagen: "https://imag.bonviveur.com/miguelitos-de-la-roda-rellenos-de-crema.jpg", descripcion: "Los miguelitos de La Roda son un delicioso postre español originario de La Roda, una localidad situada en la provincia de Albacete, en la región de Castilla-La Mancha. Su historia se remonta a mediados del siglo XX y está vinculada a la tradición de la pastelería local."+
    "La historia específica de los miguelitos puede variar según la versión, pero generalmente se atribuye a la creatividad de pasteleros locales que buscaban innovar y ofrecer algo único. Se dice que el nombre miguelitos se originó en honor al patrón de la localidad, San Miguel.",
    origen: "España", tipo: "Postre", precio:"5"})

addPlato({
    nombre: "Tortilla", imagen: "https://s3.abcstatics.com/media/bienestar/2020/05/22/tortilla-patatas-k9tF--620x349@abc.jpeg", descripcion: "Si nos centramos en la tortilla española, o tortilla de patatas, tiene una historia más reciente y se remonta al siglo XIX. La versión más conocida de esta tortilla lleva patatas (papas), huevos y cebollas. Se dice que la tortilla de patatas se originó en"+
    "la región de Extremadura o Navarra y se popularizó en toda España. Es un plato versátil que se ha convertido en un elemento básico de la cocina española. Por otro lado, si nos fijamos en la tortilla francesa, también conocida como omelette en francés, tiene sus raíces en Francia y es un plato fundamental de la cocina francesa. Su origen se remonta a tiempos antiguos, y su popularidad ha perdurado hasta la actualidad."+
    "La omelette francesa se ha convertido en un plato icónico y se sirve tanto como un desayuno sustancioso como en comidas más elegantes.",
    origen: "España/Francia", tipo: "Plato principal", precio:"6"})

addPlato({
    nombre: "Arepas", imagen: "https://imag.bonviveur.com/arepas-venezolanas-caseras-rellenas.jpg", descripcion: "Las arepas son un alimento fundamental en la cocina de varios países latinoamericanos, especialmente en Venezuela y Colombia. Estas deliciosas piezas de masa de maíz han sido parte de la dieta tradicional durante siglos."+
    "Las arepas tienen sus raíces en las culturas indígenas precolombinas de América Latina. Las poblaciones indígenas, especialmente en la región andina y en lo que hoy es Venezuela y Colombia, ya estaban cultivando y consumiendo maíz mucho antes de la llegada de los colonizadores europeos.",
    origen: "América Latina", tipo: "Plato principal", precio:"2"})

addPlato({
    nombre: "Rollitos de primavera", imagen: "https://cdn2.cocinadelirante.com/sites/default/files/images/2018/04/receta-rollitos-primavera-con-tortilla-de-harina.jpg", 
    descripcion: "Los rollitos de primavera tienen sus raíces en la cocina china, donde se conocen como chūn juǎn. La palabra chūn significa primavera, lo que sugiere que estos rollos están asociados con la estación. Aunque la relación exacta con la primavera no está clara, se cree que el nombre puede estar vinculado a las festividades asociadas con el Año Nuevo chino."+
    "Se cree que los rollitos de primavera existen desde hace siglos en China. Originalmente, estos rollos eran más bien crudos, hechos con ingredientes frescos y luego cocidos al vapor. Con el tiempo, la técnica de freírlos se volvió popular, lo que dio lugar a la versión más conocida y difundida en Occidente.",
    origen: "Asia", tipo: "Aperitivo", precio:"3"})




export function validar(plato){
    let error = 0;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (typeof plato.nombre === 'undefined' || plato.nombre === '' || typeof plato.descripcion === 'undefined'|| typeof plato.descripcion === ''||typeof plato.imagen === 'undefined'|| typeof plato.origen === 'undefined'||typeof plato.tipo === 'undefined'||typeof plato.precio === 'undefined' ||typeof plato.imagen === ''|| typeof plato.origen === ''||typeof plato.tipo === ''||typeof plato.precio === ''){
        error=  "Completa todos los campos";
    }
    else if(!(Number(plato.precio))){
        error="El precio debe ser un número";
    }
    else if (!(urlRegex.test(plato.imagen))){
        error = "Debes introducir una URL en el campo de la foto del plato"
    }
    return error;
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

export function getPlatos() {
    const platos1 = new Map();
    const platos2 = new Map();
    let i = 0
    for (let key of platos.keys()){
        if (i % 2 === 0){
            platos1.set(key,platos.get(key));
        }
        else{
            platos2.set(key,platos.get(key));
        }
        i ++;
    }
    return {
        platos1:[...platos1.values()],
        platos2:[...platos2.values()]};
}

export function getPlato(id) {
    return platos.get(id);
}

export function setNombre(plato,nombre){
    plato.nombre=nombre
}
export function setDes(plato,descripcion){
    plato.descripcion=descripcion
}
export function setIm(plato,imagen){
    plato.imagen=imagen
}
export function setOrigen(plato,origen){
    plato.origen=origen
}
export function setTipo(plato,tipo){
    plato.tipo=tipo
}
export function setPrecio(plato,precio){
    plato.precio=precio
}

export function editarCampos(platoN,plato){
    if (platoN.nombre !== plato.nombre){
        setNombre(plato,platoN.nombre);
    }
    if (platoN.imagen !== plato.imagen){
        setIm(plato,platoN.imagen);
    }
    if (platoN.descripcion !== plato.descripcion){
        setDes(plato,platoN.descripcion);
    }
    if (platoN.origen !== plato.origen){
        setOrigen(plato,platoN.origen);
    }
    if (platoN.tipo !== plato.tipo){
        setTipo(plato,platoN.tipo);
    }
    if (platoN.precio !== plato.precio){
        setPrecio(plato,platoN.precio);
    }
}
