create table tb_deliver (
id  bigserial not null,
correct_count int4,
feedback varchar(255),
moment TIMESTAMP WITHOUT TIME ZONE,
status int4, uri varchar(255),
offer_id int8, user_id int8,
lesson_id int8,
primary key (id));

alter table tb_deliver add constraint FKbv483ch7c1sh53auc1ds0uvi7 foreign key (offer_id, user_id) references tb_enrollment;
alter table tb_deliver add constraint FKjiuhmgjsr90ptlwi820mecyis foreign key (lesson_id) references tb_lesson;

INSERT INTO tb_deliver (uri, moment, status, feedback, correct_Count, lesson_id, user_id, offer_id) VALUES ('https://github.com/devsuperior/bds-dslearn', TIMESTAMP WITH TIME ZONE '2020-12-10T10:00:00Z', 0, null, null, 4, 1, 1);