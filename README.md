# Arroyo-Poli

Juego de mesa multijugador inspirado en Arroyo de la Miel y Benalmádena.

## Identidad

- Tablero de 40 casillas con calles, monumentos, hoteles, costa y estaciones de Cercanías.
- Lugares destacados: Puerto Marina, Castillo de Colomares, Teleférico, Plaza de la Mezquita, Benal-Beach y un homenaje a Tívoli.
- La mitad superior reúne Benalmádena Pueblo y la montaña; la inferior, Arroyo de la Miel y la costa.
- Solo hay una casilla Brisa del Mar y una Levante y Obras para dar más espacio a calles locales.
- Ilustraciones originales locales, sin fotografías ni logotipos de terceros.
- Paleta mediterránea en azul marino, turquesa, coral, arena y amarillo sol.

## Mecánica especial

El Parque de la Paloma se divide en participaciones del 25 %. Varios jugadores pueden ser copropietarios y el alquiler se distribuye proporcionalmente.

## Ejecutar

Sirve la carpeta con un servidor web estático y abre `index.html`. Por ejemplo:

```powershell
python -m http.server 8080
```

Después visita `http://localhost:8080`.

## Firebase

El proyecto conserva la configuración existente de Firebase para mantener el multijugador. Antes de publicar, revisa las reglas de Realtime Database y restringe los orígenes autorizados.
