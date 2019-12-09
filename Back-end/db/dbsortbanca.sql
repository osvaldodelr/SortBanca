
CREATE DATABASE dbsortbanca;

CREATE TABLE sorteos (
    stId        INT NOT NULL         LABEL "Codigo registro",
    stDate      DATE NOT NULL        LABEL "Fecha",
    stLottery   CHAR(14) NOT NULL    LABEL "Loteria",
    stBatch     CHAR(6) NOT NULL     LABEL "Tanda",
    st1ra       SMALLINT(2) NOT NULL LABEL "Primera",
    st2da       SMALLINT(2) NOT NULL LABEL "Segunda",
    st3ra       SMALLINT(2) NOT NULL LABEL "Tercera"
);

ALTER TABLE sorteos
    ADD PRIMARY KEY (stid);

ALTER TABLE sorteos
    MODIFY stid INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

