create table tb_lesson (
id  bigserial not null,
position int4,
title varchar(255),
section_id int8,
primary key (id));

create table tb_lessons_done (
lesson_id int8 not null,
user_id int8 not null,
offer_id int8 not null,
primary key (lesson_id, user_id, offer_id));

alter table tb_lesson add constraint FKr55u61qpr1cbk0jf474117m1o foreign key (section_id) references tb_section;
alter table tb_lessons_done add constraint FK8d0swyl2ej0ujn2jj1aqn62iy foreign key (user_id, offer_id) references tb_enrollment;
alter table tb_lessons_done add constraint FKfkh2tpm5fahc7mkencew2m529 foreign key (lesson_id) references tb_lesson;

INSERT INTO tb_lesson (title, position, section_id) VALUES ('Aula 1 do capítulo 1', 1, 1);
INSERT INTO tb_lesson (title, position, section_id) VALUES ('Aula 2 do capítulo 1', 2, 1);
INSERT INTO tb_lesson (title, position, section_id) VALUES ('Aula 3 do capítulo 1', 3, 1);
INSERT INTO tb_lesson (title, position, section_id) VALUES ('Tarefa do capítulo 1', 4, 1);

INSERT INTO tb_lessons_done (lesson_id, user_id, offer_id) VALUES (1, 1, 1);
INSERT INTO tb_lessons_done (lesson_id, user_id, offer_id) VALUES (2, 1, 1);