create table tb_content (
text_content varchar(255),
video_uri varchar(255),
id int8 not null,
primary key (id));

alter table tb_content add constraint FKjmc1pmpuex5541jwgb07jm4w0 foreign key (id) references tb_lesson;

INSERT INTO tb_content (id, text_Content, video_Uri) VALUES (1, 'Material de apoio: abc', 'https://www.youtube.com/watch?v=sqbqoR-lMf8');
INSERT INTO tb_content (id, text_Content, video_Uri) VALUES (2, '', 'https://www.youtube.com/watch?v=sqbqoR-lMf8');
INSERT INTO tb_content (id, text_Content, video_Uri) VALUES (3, '', 'https://www.youtube.com/watch?v=sqbqoR-lMf8');