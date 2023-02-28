# Js Shopping List

fare una lista della spesa con il ciclo while al posto del ciclo for.
Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.

## Problem-Solving

### Step 1 Creare la nostra lista della spesa

* Creo un array con all'interno degli item ovvero la nostra lista della spesa.
* Seleziono il contenitore dell'html in cui metteremo gli item dell'array.

### Step 2 Creare un ciclo per inserire gli array items nel loro contenitore

* Creo un variabile1 (con let) a cui assegno il valore di 0 ovvero il punto di partenza del ciclo.
* Con un ciclo while stabilisco che il ciclo durerà quanto la lunghezza dell'array e non oltre.
* Per ogni giro del ciclo verrà creato un li con il corrispondente item (in base alla posizione nell'array).
* Alla fine inserico l'incremento per farsi che il ciclo partendo da 0 come stabilito nella variabile, venga incrementato alla fine di ogni giro fino a che la condzione del while si riveli falsa.