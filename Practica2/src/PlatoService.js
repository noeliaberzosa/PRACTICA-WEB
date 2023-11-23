const platos = new Map()
let nextId = 0;

addPlato({
    nombre: "Croquetas", imagen: "https://th.bing.com/th/id/OIP.-0Bx3xmvZf-QNh-17tMW4AHaFz?pid=ImgDet&rs=1", descripcion: "Como muchos de vosotros ya sabréis, aunque pensemos muchas veces que la croqueta es un producto que viene de España, en realidad su origen es francés. Podríamos contar una breve historia de las croquetas, pero hoy vamos a extendernos un poco más. Las croquetas son muy populares en España, los Países Bajos y en Sicilia. La croqueta no llegó a península hasta finales del siglo XIX. Este aperitivo surgió en Francia, donde un aristócrata llamado Louis de Bechamel, que era el encargado de la cocina del rey Luis XIV. El padre de las croquetas trabajaba como recaudador de impuestos y era superintendente de la casa del duque de Orleans. Se dice qué él o alguno de sus ayudantes,"+
            "creó la besamel.Esta salsa, en realidad fue resultado del perfeccionamiento de una salsa más antigua a base de crema, por François Pierre de la Varenne cocinero del marqués de Uxelles, a la que se la dedicó, como lo hacían a menudo los cocineros para la nobleza del tiempo.",
    origen:"Francia", tipo: "Aperitivo", precio:"3 euros"});

addPlato({
    nombre: "Sangria", imagen: "https://www.saluzzocr.com/wp-content/uploads/2020/08/sangria-3.jpg", descripcion:"El vino, para desgracia de muchos puristas, siempre ha sido mezclado. Antes de la sangría, del calimocho y del rebujito de feria, los vinos fortificados (oportos, madeiras y jereces) eran ingredientes nobles de la primera coctelería. Incluso las tradiciones ancestrales hablan de ello."+
    "Hecha a base de vino tinto (cuanto más bueno, mejor será el resultado), fruta natural troceada (no excesivamente madura y cortada a trozos un poco grandes), azúcar (mejor diluido en forma de almíbar) y algún licor. Algunos prefieren no agregar azúcar puesto que la fruta ya endulza suficiente.",
    origen:"España y Portugal", tipo: "Bebida", precio: "10"});



export function addPlato(plato) {
    let id = nextId++;
    plato.id = id.toString();
    platos.set(plato.id, plato);
}

export function deletePlato(id) {
    platos.delete(id);
}

export function getPlatos() {
    return [...platos.values()];
}

export function getPlato(id) {
    return platos.get(id);
}