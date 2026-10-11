# Portfolio de Gutix · Myrmutation

Web del equipo para la asignatura Juegos para Web y Redes Sociales (URJC), publicada con **GitHub Pages + Jekyll**.

URL: https://gutixstudio.github.io

## Publicarla (una sola vez)

1. En la organización **GutixStudio** crea un repositorio público llamado exactamente `gutixstudio.github.io`.
2. Sube el contenido de esta carpeta a la rama `main`.
3. *Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`*.
4. En 1–2 minutos estará en https://gutixstudio.github.io (el progreso se ve en la pestaña *Actions*).

> Si preferís otro nombre de repositorio (p. ej. `portfolio`), la URL será `https://gutixstudio.github.io/portfolio`
> y hay que poner `baseurl: "/portfolio"` en `_config.yml`.

## Qué se edita y dónde

| Quiero cambiar…                       | Archivo                          |
|---------------------------------------|----------------------------------|
| Enlaces (itch.io, YouTube, X…), versión | `_config.yml`                  |
| Miembros del equipo y sus avatares    | `_data/equipo.yml`               |
| Genes que se muestran                 | `_data/genes.yml`                |
| Salas de la galería                   | `_data/salas.yml` + imagen en `assets/img/salas/` |
| Pasos del bucle de juego              | `_data/bucle.yml`                |
| Diario de desarrollo                  | un `.md` nuevo en `_posts/` con nombre `AAAA-MM-DD-titulo.md` |
| Diseño                                | `assets/css/style.css`           |

Un enlace vacío (`""`) en `_config.yml` no aparece en la web.

## Para cada entrega

El portfolio tiene que evolucionar con el juego:

- Cambiar `version` en `_config.yml`.
- Añadir una entrada al diario contando qué trae la versión.
- Sustituir el arte conceptual por capturas y gifs del juego, y añadir el tráiler cuando exista.

## Probarla en local (opcional)

```bash
gem install bundler jekyll
jekyll serve
```

Y abrir http://localhost:4000.

## Créditos

Ilustraciones de las salas: Naroa Jiménez. Tipografías: Gluten y Nunito (Google Fonts, licencia OFL).
