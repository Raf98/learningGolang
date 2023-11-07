INSERT INTO usuarios (nome, nick, email, senha)
VALUES 
("Usuário 1", "usuario_1", "usuario1@gmail.com", "$2a$10$pZ6ibytaHaN9JdtlIKXmiOOYuoiI2JmStaDB7QAbu43bdsc3EnjUa"),
("Usuário 2", "usuario_2", "usuario2@gmail.com", "$2a$10$pZ6ibytaHaN9JdtlIKXmiOOYuoiI2JmStaDB7QAbu43bdsc3EnjUa"),
("Usuário 3", "usuario_3", "usuario3@gmail.com", "$2a$10$pZ6ibytaHaN9JdtlIKXmiOOYuoiI2JmStaDB7QAbu43bdsc3EnjUa");

INSERT INTO seguidores (usuario_id, seguidor_id)
VALUES 
(1, 2), (3, 1), (1, 3);