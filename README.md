
# Cypress Project Template

Este repositorio contiene una plantilla básica para proyectos de pruebas E2E utilizando **Cypress**. La estructura está configurada para empezar rápidamente con Cypress y ejecutar pruebas en modo headless.

## 🚀 Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
.
├── cypress.config.js             # Archivo de configuración de Cypress
├── cypress/
│   ├── e2e/                      # Carpeta para los tests E2E
│   │   └── ejemplo.cy.js         # Test de ejemplo
│   └── support/                  # Archivos de soporte para los tests
│       └── e2e.js                # Archivo de soporte (vacío por defecto)
└── package.json                  # Archivo de configuración de npm (si no existe, se crea)
```

### Detalles de la Estructura

- **cypress/e2e/ejemplo.cy.js**: Un archivo de test de ejemplo que visita `https://example.com` y valida que el texto "Example Domain" esté presente.
- **cypress/support/e2e.js**: Archivo de soporte donde puedes configurar comandos globales o hooks para tus tests. Actualmente está vacío.
- **cypress.config.js**: Archivo de configuración principal de Cypress donde se definen parámetros como la URL base y otros ajustes específicos.
- **package.json**: Este archivo es necesario para las dependencias de npm. Si no existe, se crea automáticamente con el script.


---

## 🎯 Ejecución de Tests

### Docker

Si prefieres usar Docker para evitar problemas de dependencias, puedes ejecutar Cypress directamente con el siguiente comando:

```bash
docker run -it -v $PWD:/e2e -w /e2e cypress/included:13.7.3
```

Esto ejecutará Cypress dentro de un contenedor Docker sin necesidad de instalar dependencias locales.

---

## 📄 Personalización

Puedes modificar los tests y la configuración según las necesidades de tu proyecto. Aquí algunas configuraciones clave:

- **`baseUrl`**: En `cypress.config.js`, puedes modificar la URL base donde se ejecutarán las pruebas.
- **Comandos y hooks**: Personaliza los comandos globales y hooks en `cypress/support/e2e.js`.

---

## 📚 Más Información

En Medium he colocado una pequeña receta para monstarlo en VPS [Cypress desde cero en entorno VPS (con Docker)](https://medium.com/@ablancodev/cypress-desde-cero-en-entorno-vps-con-docker-8b611e34873a).

---

## 📝 Yo

Desarrollado por [ablancodev](https://ablancodev.com).
