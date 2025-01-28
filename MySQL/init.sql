CREATE DATABASE IF NOT EXISTS `demo`;
USE `demo`;

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `apellidos` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `telefono` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO usuario (nombre, apellidos, email, telefono)
VALUES 
    ('Juan', 'Pérez', 'juan.perez@email.com', '+34600123456'),
    ('Ana', 'Gómez', 'ana.gomez@email.com', '+34600234567'),
    ('Luis', 'Martínez', 'luis.martinez@email.com', '+34600345678'),
    ('María', 'Sánchez', 'maria.sanchez@email.com', '+34600456789'),
    ('Carlos', 'Fernández', 'carlos.fernandez@email.com', '+34600567890'),
    ('Laura', 'Rodríguez', 'laura.rodriguez@email.com', '+34600678901'),
    ('Pedro', 'López', 'pedro.lopez@email.com', '+34600789012'),
    ('Elena', 'García', 'elena.garcia@email.com', '+34600890123'),
    ('Javier', 'Martín', 'javier.martin@email.com', '+34600901234'),
    ('Lucía', 'Pérez', 'lucia.perez@email.com', '+34601012345');