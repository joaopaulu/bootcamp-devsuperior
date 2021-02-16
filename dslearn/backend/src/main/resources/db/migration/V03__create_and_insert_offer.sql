create table tb_offer (
id bigserial not null,
edition varchar(10) not null,
start_Moment TIMESTAMP WITHOUT TIME ZONE,
end_Moment TIMESTAMP WITHOUT TIME ZONE,
course_id int,
primary key (id));

alter table tb_offer add constraint FKetnxqlwav51hu6fxcrukrln2b foreign key (course_id) references tb_course;

INSERT INTO tb_offer (edition, start_Moment, end_Moment, course_id) VALUES ('1.0', TIMESTAMP WITH TIME ZONE '2020-11-20T03:00:00Z', TIMESTAMP WITH TIME ZONE '2021-11-20T03:00:00Z', 1);
INSERT INTO tb_offer (edition, start_Moment, end_Moment, course_id) VALUES ('2.0', TIMESTAMP WITH TIME ZONE '2020-12-20T03:00:00Z', TIMESTAMP WITH TIME ZONE '2021-12-20T03:00:00Z', 1);