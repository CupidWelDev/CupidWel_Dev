CREATE SEQUENCE IF NOT EXISTS public.notice_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;
    
CREATE TABLE IF NOT EXISTS public.cupidwel_user
(
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    age bigint NOT NULL,
    birth_date date NOT NULL,
    gender character varying(255) COLLATE pg_catalog."default" NOT NULL,
    phone_number character varying(255) COLLATE pg_catalog."default" NOT NULL,
    school character varying(255) COLLATE pg_catalog."default",
    school_belong character varying(255) COLLATE pg_catalog."default",
    attendance character varying(255) COLLATE pg_catalog."default",
    major character varying(255) COLLATE pg_catalog."default",
    stratum character varying(255) COLLATE pg_catalog."default",
    income character varying(255) COLLATE pg_catalog."default",
    prev_grade character varying(255) COLLATE pg_catalog."default",
    address character varying(255) COLLATE pg_catalog."default",
    is_married boolean,
    fam_cum bigint,
    month_income bigint,
    parent_address text COLLATE pg_catalog."default",
    parent_job character varying(25) COLLATE pg_catalog."default",
    remaind_semester integer,
    is_leave_absence boolean,
    CONSTRAINT cupidwel_user_pkey PRIMARY KEY (email)
);


CREATE TABLE IF NOT EXISTS public.scholarship
(
    id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    institution character varying(255) COLLATE pg_catalog."default",
    product character varying(255) COLLATE pg_catalog."default",
    institution_sort character varying(255) COLLATE pg_catalog."default",
    product_sort character varying(255) COLLATE pg_catalog."default",
    schoolexpense_sort character varying(255) COLLATE pg_catalog."default",
    univ_sort character varying(255) COLLATE pg_catalog."default",
    grade_sort character varying(255) COLLATE pg_catalog."default",
    major_sort character varying(255) COLLATE pg_catalog."default",
    grade_stand_detail text COLLATE pg_catalog."default",
    income_stand_detail text COLLATE pg_catalog."default",
    support_detail text COLLATE pg_catalog."default",
    qualification_detail text COLLATE pg_catalog."default",
    local_residence_detail text COLLATE pg_catalog."default",
    duration_detail text COLLATE pg_catalog."default",
    selection_way_detail text COLLATE pg_catalog."default",
    selection_num_detail text COLLATE pg_catalog."default",
    qualification_restriction_detail text COLLATE pg_catalog."default",
    recommendation_detail text COLLATE pg_catalog."default",
    documentaion_detail text COLLATE pg_catalog."default",
    created_dt timestamp without time zone DEFAULT now(),
    modified_dt timestamp without time zone DEFAULT now(),
    like_num bigint DEFAULT 0,
    scrap_num bigint DEFAULT 0,
    CONSTRAINT scholarship_pkey PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS public.user_scholar_relation
(
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    scholarship_id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT fk_email FOREIGN KEY (email)
        REFERENCES public.cupidwel_user (email) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_scholarship_id FOREIGN KEY (scholarship_id)
        REFERENCES public.scholarship (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);


CREATE TABLE IF NOT EXISTS public.scrap
(
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    scholarship_id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT scrap_pkey PRIMARY KEY (email, scholarship_id),
    CONSTRAINT fk_email FOREIGN KEY (email)
        REFERENCES public.cupidwel_user (email) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_scholarship_id FOREIGN KEY (scholarship_id)
        REFERENCES public.scholarship (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);


CREATE TABLE IF NOT EXISTS public.notice
(
    id integer NOT NULL DEFAULT nextval('notice_id_seq'::regclass),
    title character varying COLLATE pg_catalog."default",
    content text COLLATE pg_catalog."default",
    created_dt timestamp without time zone,
    modified_dt timestamp without time zone,
    CONSTRAINT notice_pkey PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS public.alert
(
    email character varying COLLATE pg_catalog."default" NOT NULL,
    scholarship_id character varying COLLATE pg_catalog."default" NOT NULL,
    notice_id bigint NOT NULL,
    sent_time timestamp without time zone,
    is_sent boolean,
    is_checked boolean,
    CONSTRAINT fk_email FOREIGN KEY (email)
        REFERENCES public.cupidwel_user (email) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_notice_id FOREIGN KEY (notice_id)
        REFERENCES public.notice (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT scholarship_id FOREIGN KEY (scholarship_id)
        REFERENCES public.scholarship (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

COPY scholarship
FROM '/docker-entrypoint-initdb.d/scholarship_sample.csv'
DELIMITER ','
CSV HEADER;