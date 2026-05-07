# ⚙️ Analistdoper - Backend API

![NodeJS](https://img.shields.io/badge/Node.js-v18+-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge&logo=postgresql)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge&logo=jsonwebtokens)
![Status](https://img.shields.io/badge/Status-In%20Development-success?style=for-the-badge)

---

# 📌 Descripción General

Este repositorio contiene toda la lógica de servidor y el núcleo funcional de **Analistdoper**, una plataforma impulsada por **Inteligencia Artificial** enfocada en el análisis de talentos y evaluación automatizada de perfiles profesionales.

El backend fue diseñado para manejar procesos críticos como autenticación de usuarios, almacenamiento persistente, análisis de datos, comunicación con modelos de IA y gestión avanzada de candidatos dentro de procesos de reclutamiento inteligentes.

La API está construida bajo una arquitectura escalable y modular utilizando **Node.js**, **Express.js** y **PostgreSQL**, permitiendo un alto rendimiento, seguridad robusta y facilidad de mantenimiento.

---

# 🎯 Objetivos del Backend

- Centralizar la lógica de negocio de la plataforma.
- Procesar análisis de candidatos mediante IA.
- Gestionar autenticación y autorización segura.
- Administrar usuarios, roles y permisos.
- Facilitar integración entre frontend y servicios inteligentes.
- Garantizar escalabilidad y rendimiento.
- Proteger información sensible mediante mecanismos seguros.

---

# 🧠 Funcionalidades Principales

## 🔐 Sistema de Autenticación

- Registro de usuarios.
- Inicio de sesión seguro.
- Autenticación mediante JWT.
- Protección de rutas privadas.
- Middleware de validación de tokens.
- Gestión de sesiones.

---

## 👨‍💼 Gestión de Usuarios y Talentos

- Creación y administración de perfiles.
- Roles y permisos dinámicos.
- Gestión de reclutadores y candidatos.
- Actualización de información profesional.
- Control de accesos.

---

## 🤖 Integración con Inteligencia Artificial

El backend permite la conexión con servicios y modelos de IA capaces de:

- Analizar currículos automáticamente.
- Detectar habilidades técnicas.
- Calcular compatibilidad laboral.
- Generar puntuaciones inteligentes.
- Clasificar candidatos automáticamente.
- Optimizar procesos de selección.

---

## 📊 Procesamiento de Datos

- Manejo de información estructurada.
- Validación de datos.
- Transformación de información.
- Servicios de análisis.
- Persistencia segura de registros.

---

## 🌐 API REST

La aplicación expone una API RESTful para la comunicación con clientes frontend y servicios externos.

### Ejemplos de endpoints:

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/auth/login` | Iniciar sesión |
| POST | `/auth/register` | Registrar usuario |
| GET | `/usuarios` | Obtener usuarios |
| GET | `/candidatos` | Obtener candidatos |
| POST | `/analisis/cv` | Analizar currículum |
| PUT | `/usuarios/:id` | Actualizar usuario |
| DELETE | `/usuarios/:id` | Eliminar usuario |

---

# 🏗️ Arquitectura del Proyecto

El proyecto sigue una arquitectura modular enfocada en escalabilidad, separación de responsabilidades y mantenimiento eficiente.


# 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| Node.js | Runtime principal |
| Express.js | Framework backend |
| PostgreSQL | Base de datos relacional |
| JWT | Autenticación segura |
| bcrypt | Encriptación de contraseñas |
| dotenv | Variables de entorno |
| multer | Gestión de archivos |
| cors | Control de acceso HTTP |
| nodemon | Desarrollo en tiempo real |

---

# 🔒 Seguridad

El backend implementa múltiples capas de seguridad para proteger la información y los servicios de la plataforma.

## Características de seguridad:

- Hash de contraseñas con bcrypt.
- Tokens JWT firmados.
- Validación de datos.
- Middleware de autenticación.
- Protección de rutas privadas.
- Manejo seguro de variables de entorno.
- Configuración CORS.
- Prevención de acceso no autorizado.

---

# 🗄️ Base de Datos

La plataforma utiliza **PostgreSQL** como sistema gestor de base de datos principal.

## Entidades principales:

- Usuarios
- Roles
- Candidatos
- Currículos
- Vacantes
- Resultados de análisis
- Historial de evaluaciones
