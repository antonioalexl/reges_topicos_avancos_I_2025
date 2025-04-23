
CREATE DATABASE IF NOT EXISTS db_reges_farm;

use db_reges_farm;

create table IF NOT EXISTS animal (
	id int primary key AUTO_INCREMENT,
    especie varchar(100),
    data_nascimento datetime,
    Sexo varchar(1),
	Cor varchar(50),
	Raca varchar(50),
	Peso decimal(8,2),
	Codigo varchar(500),
	Observacao varchar(1024)
);

