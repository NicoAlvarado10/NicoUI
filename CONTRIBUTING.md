# Contributing to NicoUI

¡Gracias por tu interés en contribuir a **NicoUI**! Este proyecto es una colección de componentes diseñados para funcionar con varios frameworks frontend y utiliza **Tailwind CSS** y **Remixicon**. Para mantener la coherencia y la funcionalidad entre frameworks, hemos establecido ciertas pautas para la creación de nuevos componentes.

## Guía para Contribuir
### 1. Crear Nuevos Componentes
Si deseas agregar un nuevo componente, sigue estos pasos:

- **Múltiples Frameworks**: Asegúrate de implementar el componente en **todos los frameworks soportados por NicoUI** (por ejemplo, React, Vue, Svelte, etc.).
- **Consistencia Visual**: El diseño debe ser coherente y respetar el uso de **Tailwind CSS** y **Remixicon**.

### 2. Agregar una Nueva Funcionalidad
Si deseas añadir una nueva funcionalidad (por ejemplo, mejorar un componente existente o agregar una característica global), sigue estos pasos:

1. **Abrir un Issue**:
   - Antes de empezar a trabajar, abre un _issue_ para describir la nueva funcionalidad que deseas agregar. Esto permitirá a los mantenedores discutir la propuesta y asegurar que se alinee con la visión del proyecto.
   - Incluye detalles como el problema que resuelve la funcionalidad, ejemplos de uso, y cualquier referencia relevante.

2. **Aprobación de la Propuesta**:
   - Espera a que los mantenedores aprueben el _issue_ antes de comenzar a trabajar.

3. **Implementación**:
   - Crea una nueva rama para tu trabajo (`feature/nueva-funcionalidad-nombre`).
   - Desarrolla la funcionalidad de manera que se pueda integrar con todos los componentes y frameworks relevantes.
   - Asegúrate de que tu código esté documentado y siga las convenciones del proyecto.

4. **Pruebas**:
   - Realiza pruebas para asegurar que la funcionalidad funcione correctamente en todos los frameworks.
   - Si es necesario, crea o actualiza pruebas automatizadas.

5. **Envío del Pull Request**:
   - Haz un _commit_ descriptivo de los cambios.
   - Envía un _pull request_ detallado explicando la funcionalidad y cómo se usa, además de los cambios en el código y las pruebas realizadas.


### 3. Configuración del Entorno de Desarrollo
Sigue estos pasos para configurar tu entorno de desarrollo:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/NicoAlvarado10/NicoUI.git
   cd nicoui
    npm install
    npm run dev
    ```

Los mantenedores del proyecto revisarán tu pull request y podrían solicitar cambios para garantizar la calidad del proyecto.

