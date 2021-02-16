create table tb_enrollment (
user_id int not null,
offer_id int not null,
enroll_Moment TIMESTAMP WITHOUT TIME ZONE,
refund_Moment TIMESTAMP WITHOUT TIME ZONE,
available boolean,
only_Update boolean,
primary key (user_id, offer_id));

alter table tb_enrollment add constraint FKjtgmmofyyh79cpnndwbohooxg foreign key (offer_id) references tb_offer;
alter table tb_enrollment add constraint FKq4hfr2xc40iew8vo04h7h9s3w foreign key (user_id) references tb_user;

INSERT INTO tb_enrollment (user_id, offer_id, enroll_Moment, refund_Moment, available, only_Update) VALUES (1, 1, TIMESTAMP WITH TIME ZONE '2020-11-20T13:00:00Z', null, true, false);
INSERT INTO tb_enrollment (user_id, offer_id, enroll_Moment, refund_Moment, available, only_Update) VALUES (2, 1, TIMESTAMP WITH TIME ZONE '2020-11-20T13:00:00Z', null, true, false);