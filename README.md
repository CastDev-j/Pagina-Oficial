# Click — Manual de Desarrollo y Guia de Git

Plantilla base oficial y entorno de desarrollo interno para el equipo de ingenieria de Click.

Esta plantilla establece la base tecnica, estandares de codigo limpio y flujo de trabajo para el desarrollo gradual de la plataforma web corporativa y soluciones a la medida.

---

## 1. Informacion del Proyecto

- Empresa: Click
- Giro: Desarrollo de paginas web corporativas y soluciones de software a la medida para empresas, pymes y emprendimientos.
- Lema: "Experiencias memorables en un solo click."
- Que hacemos: Disenamos y desarrollamos sitios web corporativos y plataformas digitales personalizadas, adaptadas a las necesidades, giro e identidad de cada cliente. Creamos soluciones rapidas, responsivas y bien estructuradas para cualquier dispositivo.
- Mision: Ayudar a empresas y emprendimientos a consolidar una presencia digital profesional y confiable mediante paginas web a la medida, intuitivas y de alto rendimiento.
- Vision: Ser el estudio de desarrollo web de referencia para marcas y negocios que buscan un socio tecnologico agil, transparente y con altos estandares de calidad de software.

---

## 2. Pila Tecnologica

- Runtime: Bun v1.3+
- Framework: Astro v5+ (Modo Static Site Generation)
- Tipado: TypeScript estricto
- Diseno: CSS modular nativo (sin dependencias de frameworks CSS pesados)
- Despliegue: Cloudflare Workers / Pages

---

## 3. Guia de Flujo de Trabajo en Git

Instrucciones para el equipo de desarrollo sobre como clonar el repositorio, sincronizar ramas y subir cambios.

### A. Clonar el repositorio

Abre la terminal en tu directorio de trabajo:

```bash
git clone https://github.com/Click-Software/Pagina-Oficial.git
cd Pagina-Oficial
```

### B. Instalar dependencias

```bash
bun install
```

### C. Flujo diario de trabajo

#### 1. Sincronizar antes de programar (Pull)

Siempre descarga los ultimos cambios de la rama principal para prevenir conflictos:

```bash
git checkout main
git pull origin main
```

#### 2. Crear una rama de trabajo

No trabajes directamente sobre la rama `main`. Crea una rama con prefijo descriptivo:

```bash
git checkout -b feat/nombre-de-la-tarea
# o para correcciones:
git checkout -b fix/descripcion-del-arreglo
```

#### 3. Verificar estado y confirmar cambios (Add y Commit)

Usa la convencion de commits semanticos (feat, fix, docs, refactor, perf, test):

```bash
# Revisar archivos modificados
git status

# Agregar cambios al area de preparacion
git add .

# Crear el commit
git commit -m "feat: descripcion concisa del cambio"
```

#### 4. Subir la rama al repositorio remoto (Push)

La primera vez que subas la rama:

```bash
git push -u origin feat/nombre-de-la-tarea
```

En las siguientes ocasiones dentro de la misma rama:

```bash
git push
```

#### 5. Integracion a Main (Pull Request)

1. Abre un Pull Request (PR) en GitHub hacia la rama `main`.
2. Confirma que la verificacion automatica pase en verde.
3. Tras la aprobacion y fusion del PR, actualiza tu entorno local:

```bash
git checkout main
git pull origin main
```

---

## 4. Comandos del Proyecto

| Comando           | Descripcion                                                           |
| :---------------- | :-------------------------------------------------------------------- |
| `bun run dev`     | Inicia el servidor de desarrollo local en http://localhost:4321.      |
| `bun run check`   | Ejecuta la verificacion de tipos con Astro check y TypeScript.        |
| `bun run build`   | Compila la aplicacion para produccion en la carpeta dist/.            |
| `bun run preview` | Previsualiza localmente el resultado de la compilacion de produccion. |

---

## 5. Estructura del Directorio

```text
Click/
|-- docs/                      # Documentacion tecnica interna y guias de diseno
|   |-- CORE.md                # Estrategia tecnica y definicion de producto
|   `-- DESIGN.md              # Sistema de diseno y directrices visuales
|-- public/                    # Archivos estaticos servidos directamente en la raiz
|   |-- _headers               # Cabeceras de seguridad HSTS, CSP y cache de Cloudflare
|   |-- llms.txt               # Contexto semantico para modelos de lenguaje
|   |-- logo.png               # Logotipo raster en alta resolucion
|   |-- logo.svg               # Logotipo vectorial oficial
|   |-- robots.txt             # Directivas para motores de busqueda
|   `-- sitemap.xml            # Mapa del sitio estatico
|-- src/
|   |-- components/
|   |   `-- SEOHead.astro      # Metadatos Schema.org y Open Graph
|   |-- layouts/
|   |   `-- Layout.astro       # Layout base HTML con tipografia
|   |-- pages/
|   |   |-- 404.astro          # Pagina limpia de recurso no encontrado
|   |   `-- index.astro        # Vista principal (Pre-Fase 1)
|   `-- styles/
|       `-- global.css         # Estilos globales y reset accesible
|-- astro.config.mjs           # Configuracion principal de Astro
|-- package.json               # Dependencias y scripts de ejecucion
|-- tsconfig.json              # Configuracion estricta de TypeScript
`-- wrangler.jsonc             # Configuracion de despliegue en Cloudflare
```
