# SatecChallenge

## Descripción

Este proyecto es una aplicación web desarrollada con Angular, diseñada como prueba de código para la empresa Satec. Su objetivo es realizar un control de las salas de las diversas plantas de un edificio.

## Estructura del Proyecto

    -   **src/**: Contiene el código fuente de la aplicación.
    -   **app/**: Módulos y componentes principales de la aplicación.
    -   **assets/**: Recursos estáticos como imágenes y archivos de estilo.
    -   **environments/**: Configuraciones para diferentes entornos (desarrollo, producción).

## Requisitos Previos

-   [Node.js](https://nodejs.org/) (versión LTS recomendada)
-   [Angular CLI](https://angular.io/cli) (versión más reciente)

## Instalación

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/JorgePrzDnz/satec-challenge
    ```
2. Navegar al directorio del proyecto:
    ```bash
    cd satec-challenge
    ```
3. Instalar las dependencias:
    ```bash
    npm install
    ```
4. Ejecución del proyecto:
    ```bash
    ng serve
    ```

## Ejecución del Proyecto

Para ejecutar el proyecto en un servidor de desarrollo, utiliza el siguiente comando:

```bash
ng serve
```

Luego, abre tu navegador y navega a http://localhost:4200/. La aplicación se recargará automáticamente si se realiza algún cambio en los archivos fuente.

## Decisiones tomadas

He decidido desarrollar el proyecto con Angular ya que es el framework con el que me siento más debido a tener una mayor experiencia trabajando con este con respecto a las demás alternativas.

A la hora de trabajar con las distintas operaciones que se pueden hacer con las salas (crear, modificar y eliminar), he decidido usar modales ya que, en mi opinión, mejoran la experiencia del usuario generando un diseño más cómodo e intuitivo.

## Dificultades encontradas

A la hora de usar API Mocha, al tratar de trabajar con los Path Params y Query Params me han surgido varios contratiempos al tratar de pasar estos a través de los endpoints, es por ello, que el endpoint específico de la funcionalidad de eliminar una sala lo he dejado comentado.