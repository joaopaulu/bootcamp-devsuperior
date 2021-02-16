create table tb_topic (
id  bigserial not null,
body TEXT,
moment TIMESTAMP WITHOUT TIME ZONE,
title varchar(255),
reply_id int8,
author_id int8,
lesson_id int8,
offer_id int8,
primary key (id));

create table tb_topic_likes (
topic_id int8 not null,
user_id int8 not null,
primary key (topic_id, user_id));

alter table tb_topic add constraint FKryr3evgujofa1v0ynultqfqi7 foreign key (reply_id) references tb_reply;
alter table tb_topic add constraint FK3877ei5v3120o8al14nsnu7rr foreign key (author_id) references tb_user;
alter table tb_topic add constraint FKdbxbui164cewmgujgf3yyl0ad foreign key (lesson_id) references tb_lesson;
alter table tb_topic add constraint FKaxi0sbk7u02xr241nv3le3a1x foreign key (offer_id) references tb_offer;
alter table tb_topic_likes add constraint FKfb0wuh6h0tejfujwejutxac1q foreign key (user_id) references tb_user;
alter table tb_topic_likes add constraint FKjyfkg3xwg9v7k8jeijfvlnc7o foreign key (topic_id) references tb_topic;

INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('Título do tópico 1', 'Corpo do tópico 1', TIMESTAMP WITH TIME ZONE '2020-12-12T13:00:00Z', 1, 1, 1);
INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('Título do tópico 2', 'Corpo do tópico 2', TIMESTAMP WITH TIME ZONE '2020-12-13T13:00:00Z', 2, 1, 1);
INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('Título do tópico 3', 'Corpo do tópico 3', TIMESTAMP WITH TIME ZONE '2020-12-14T13:00:00Z', 2, 1, 1);
INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('Título do tópico 4', 'Corpo do tópico 4', TIMESTAMP WITH TIME ZONE '2020-12-15T13:00:00Z', 1, 1, 2);
INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('Título do tópico 5', 'Corpo do tópico 5', TIMESTAMP WITH TIME ZONE '2020-12-16T13:00:00Z', 1, 1, 2);
INSERT INTO tb_topic (title, body, moment, author_id, offer_id, lesson_id) VALUES ('Título do tópico 6', 'Corpo do tópico 6', TIMESTAMP WITH TIME ZONE '2020-12-17T13:00:00Z', 2, 1, 3);

INSERT INTO tb_topic_likes (topic_id, user_id) VALUES (1, 2);
INSERT INTO tb_topic_likes (topic_id, user_id) VALUES (2, 1);