https://tp-2-wheat.vercel.app/

# 🔐 Seguridad de Contraseña – Aplicación en React

## 📌 Descripción

Esta aplicación fue desarrollada utilizando **React** y tiene como objetivo evaluar la seguridad de una contraseña ingresada por el usuario, proporcionando feedback visual en tiempo real y herramientas adicionales como generación automática de contraseñas.

---

## 🎯 Objetivos del trabajo práctico

* Aplicar los conceptos fundamentales de **React**
* Implementar una arquitectura basada en **componentes**
* Utilizar correctamente el manejo de estado con `useState`
* Trabajar con **props** para comunicar componentes
* Generar una interfaz interactiva y funcional

---

## ⚙️ Funcionalidades principales

### 🔑 Ingreso de contraseña

El usuario puede escribir una contraseña y alternar entre mostrarla u ocultarla.

### 📊 Indicador de seguridad

Se evalúa la contraseña según distintos criterios:

* Longitud mínima
* Uso de mayúsculas y minúsculas
* Inclusión de números
* Uso de caracteres especiales

Se muestra un nivel de seguridad:

* 🔴 Poco segura
* 🟠 Segura
* 🟢 Muy segura

Además, se incluye una barra visual que representa el nivel de seguridad.

---

### ✅ Checklist de validación

Se muestra una lista en tiempo real indicando qué condiciones cumple la contraseña.

---

### 📋 Copiar contraseña

Permite copiar la contraseña al portapapeles con un mensaje de confirmación.

---

### ⚙️ Generador de contraseñas

El usuario puede generar una contraseña personalizada seleccionando:

* Longitud
* Inclusión de mayúsculas
* Minúsculas
* Números
* Símbolos

---

## 🧱 Estructura de componentes

La aplicación está dividida en los siguientes componentes:

* `App` → Componente principal que gestiona el estado global
* `PasswordInput` → Input para ingresar la contraseña
* `StrengthIndicator` → Muestra el nivel de seguridad
* `Checklist` → Lista de validaciones
* `Generator` → Generador de contraseñas

---

## 🧠 Conceptos aplicados

* Uso de `useState` para manejar estados
* Comunicación entre componentes mediante **props**
* Renderizado condicional
* Manejo de eventos (`onChange`, `onClick`)
* Manipulación del DOM (copiar al portapapeles)
* Expresiones regulares para validación de contraseñas
* Estilización con CSS

---

## 🛠️ Tecnologías utilizadas

* React
* JavaScript (ES6+)
* CSS

