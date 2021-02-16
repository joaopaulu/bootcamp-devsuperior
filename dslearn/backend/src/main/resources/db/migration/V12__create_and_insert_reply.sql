create table tb_reply (
id  bigserial not null,
body TEXT,
moment TIMESTAMP WITHOUT TIME ZONE,
author_id int8,
topic_id int8,
primary key (id));

create table tb_reply_likes (
reply_id int8 not null,
user_id int8 not null,
primary key (reply_id, user_id));

INSERT INTO tb_reply (body, moment, topic_id, author_id) VALUES ('Tente reiniciar o computador', TIMESTAMP WITH TIME ZONE '2020-12-15T13:00:00Z', 1, 2);
INSERT INTO tb_reply (body, moment, topic_id, author_id) VALUES ('Deu certo, valeu!', TIMESTAMP WITH TIME ZONE '2020-12-20T13:00:00Z', 1, 1);

INSERT INTO tb_reply_likes (reply_id, user_id) VALUES (1, 1);