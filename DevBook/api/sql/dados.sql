INSERT INTO usuarios (nome, nick, email, senha)
VALUES 
("Usuário 1", "usuario_1", "usuario1@gmail.com", "$2a$10$pZ6ibytaHaN9JdtlIKXmiOOYuoiI2JmStaDB7QAbu43bdsc3EnjUa"),
("Usuário 2", "usuario_2", "usuario2@gmail.com", "$2a$10$pZ6ibytaHaN9JdtlIKXmiOOYuoiI2JmStaDB7QAbu43bdsc3EnjUa"),
("Usuário 3", "usuario_3", "usuario3@gmail.com", "$2a$10$pZ6ibytaHaN9JdtlIKXmiOOYuoiI2JmStaDB7QAbu43bdsc3EnjUa");

INSERT INTO seguidores (usuario_id, seguidor_id)
VALUES 
(1, 2), (3, 1), (1, 3);

INSERT INTO publicacoes(titulo, conteudo, autor_id)
VALUES
("Publicacao do Usuario 1", "Essa é a publicação do usuário 1! Oba!", 1),
("Publicacao do Usuario 2", "Essa é a publicação do usuário 2! Oba!", 2),
("Publicacao do Usuario 3", "Essa é a publicação do usuário 3! Oba!", 3);