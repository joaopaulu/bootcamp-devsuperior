create table tb_section (
id bigserial not null,
title varchar(100) not null,
description varchar(255) not null,
position int,
img_Uri varchar(255),
resource_id int,
prerequisite_id int,
primary key (id));

alter table tb_section add constraint FKng09eguc2o4idipwe73mem9v4 foreign key (prerequisite_id) references tb_section;
alter table tb_section add constraint FKd0pidgdjq979nl3un4ryx5mjx foreign key (resource_id) references tb_resource;

INSERT INTO tb_section (title, description, position, img_Uri, resource_id, prerequisite_id) VALUES ('Capítulo 1', 'Neste capítulo vamos começar', 1, 'https://cdn.pixabay.com/photo/2018/03/22/10/55/training-course-3250007_1280.jpg', 1, null);
INSERT INTO tb_section (title, description, position, img_Uri, resource_id, prerequisite_id) VALUES ('Capítulo 2', 'Neste capítulo vamos continuar', 2, 'https://cdn.pixabay.com/photo/2018/03/22/10/55/training-course-3250007_1280.jpg', 1, 1);
INSERT INTO tb_section (title, description, position, img_Uri, resource_id, prerequisite_id) VALUES ('Capítulo 3', 'Neste capítulo vamos finalizar', 3, 'https://cdn.pixabay.com/photo/2018/03/22/10/55/training-course-3250007_1280.jpg', 1, 2);