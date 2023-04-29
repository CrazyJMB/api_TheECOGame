-- Modificar la tabla User
ALTER TABLE `user`
    MODIFY username VARCHAR(20) NOT NULL,
    ADD avatar VARCHAR(256) NULL,
    ADD creation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ADD modify_Date DATETIME ON UPDATE CURRENT_TIMESTAMP;

-- Eliminar columnas
ALTER TABLE `user`
    DROP COLUMN score,
    DROP COLUMN time;
