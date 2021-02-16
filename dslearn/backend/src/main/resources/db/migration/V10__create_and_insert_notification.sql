create table tb_notification (
id  bigserial not null,
moment TIMESTAMP WITHOUT TIME ZONE,
read boolean not null,
route varchar(255),
text varchar(255),
user_id int8,
primary key (id));

alter table tb_notification add constraint FK9ihj3k9lv33u6qd10wq18f482 foreign key (user_id) references tb_user;

INSERT INTO tb_notification (text, moment, read, route, user_id) VALUES ('Primeiro feedback de tarefa: favor revisar', TIMESTAMP WITH TIME ZONE '2020-12-10T13:00:00Z', true, '/offers/1/resource/1/sections/1', 1);
INSERT INTO tb_notification (text, moment, read, route, user_id) VALUES ('Segundo feedback: favor revisar', TIMESTAMP WITH TIME ZONE '2020-12-12T13:00:00Z', true, '/offers/1/resource/1/sections/1', 1);
INSERT INTO tb_notification (text, moment, read, route, user_id) VALUES ('Terceiro feedback: favor revisar', TIMESTAMP WITH TIME ZONE '2020-12-14T13:00:00Z', true, '/offers/1/resource/1/sections/1', 1);