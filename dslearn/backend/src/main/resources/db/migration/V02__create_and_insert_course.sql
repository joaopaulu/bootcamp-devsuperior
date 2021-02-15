create table tb_course (
id  bigserial not null,
name varchar(100) not null,
img_Uri varchar(255),
img_Gray_Uri varchar(255),
primary key (id));

INSERT INTO tb_course (name, img_Uri, img_Gray_Uri) VALUES ('Bootcamp HTML', 'https://cdn.pixabay.com/photo/2018/03/22/10/55/training-course-3250007_1280.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Switch-course-book-grey.svg');
