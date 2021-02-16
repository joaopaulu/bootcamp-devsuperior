create table tb_task (
approval_count int4,
description varchar(255),
due_date TIMESTAMP WITHOUT TIME ZONE,
question_count int4,
weight float8,
id int8 not null,
primary key (id));

alter table tb_task add constraint FKjpirq3tu0wrko6unh5jx5o39i foreign key (id) references tb_lesson;

INSERT INTO tb_task (id, description, question_Count, approval_Count, weight, due_Date) VALUES (4, 'Fazer um trabalho legal', 5, 4, 1.0, TIMESTAMP WITH TIME ZONE '2020-11-25T13:00:00Z');